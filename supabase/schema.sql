-- VEX Basics 101: accounts, teams, and course/module progress tracking
-- Run this once in the Supabase SQL Editor (or via `supabase db push`).

-- One row per signed-up user, extending auth.users.
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text not null,
  team_number text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Profiles are viewable by any signed-in user"
  on public.profiles for select
  to authenticated
  using (true);

create policy "Users can insert their own profile"
  on public.profiles for insert
  to authenticated
  with check (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Auto-create a profile row whenever a new auth user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name, team_number)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)),
    new.raw_user_meta_data->>'team_number'
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- One row per (user, course, module) marked complete.
create table if not exists public.module_progress (
  user_id uuid references public.profiles(id) on delete cascade not null,
  course_slug text not null,
  module_number text not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, course_slug, module_number)
);

alter table public.module_progress enable row level security;

-- Users can fully manage (read/insert/update/delete) their own progress rows.
create policy "Users manage their own progress"
  on public.module_progress for all
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Teammates (matching, non-null team_number) can read each other's progress.
create policy "Teammates can view each other's progress"
  on public.module_progress for select
  to authenticated
  using (
    exists (
      select 1
      from public.profiles me
      join public.profiles them
        on them.team_number = me.team_number
        and me.team_number is not null
      where me.id = auth.uid()
        and them.id = module_progress.user_id
    )
  );
