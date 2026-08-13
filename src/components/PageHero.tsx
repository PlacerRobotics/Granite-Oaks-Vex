export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold-light">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-neutral-300">
        {description}
      </p>
    </div>
  );
}
