# VEX Basics 101

**Live site: https://vex-teal.vercel.app**

An independent, unofficial resource hub for new VEX Robotics teams — building, CAD, coding,
engineering notebooks, judging/interview prep, competition strategy, community links, a
glossary, and a couple of small tools (gear ratio calculator, live team/event lookup via the
RobotEvents API).

The whole site is gated behind an electronics-care & lab-safety quiz at
[`/safety`](https://vex-teal.vercel.app/safety) — score 70% or higher and it unlocks every
other page on that browser (stored in `localStorage`, no account needed).

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS v4
- Deployed on [Vercel](https://vercel.com)
- Team/event lookup calls the official [RobotEvents API](https://www.robotevents.com/api/v2)
  through a server-side proxy route (`src/app/api/robotevents/route.ts`) so the API key never
  reaches the browser

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To make the Team & Event Lookup page (`/lookup`) return real data, copy `.env.local.example` to
`.env.local` and set `ROBOTEVENTS_TOKEN` to a free API token from
[robotevents.com](https://www.robotevents.com/api/v2) (account → developer settings). Without
it, the page shows a friendly "not configured" message instead of failing.

## Deploying

The site auto-builds on Vercel from this repo. To deploy manually:

```bash
vercel --prod
```

## Project structure

- `src/app/*` — one route per section (building, cad, coding, notebook, judging, strategy,
  community, safety, glossary, tools, lookup)
- `src/components/*` — shared UI (nav, resource cards, the safety gate/quiz, the gear ratio
  calculator, team lookup)
- `src/data/*` — nav links and the safety quiz question bank
- `src/lib/safetyGate.ts` — the localStorage-backed unlock logic
