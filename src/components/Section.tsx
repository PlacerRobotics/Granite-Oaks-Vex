import ResourceCard, { Resource } from "./ResourceCard";

export default function Section({
  title,
  intro,
  resources,
}: {
  title: string;
  intro?: string;
  resources: Resource[];
}) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      {intro && (
        <p className="mt-2 max-w-3xl text-sm text-neutral-600 dark:text-neutral-400">
          {intro}
        </p>
      )}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {resources.map((r) => (
          <ResourceCard key={r.url} {...r} />
        ))}
      </div>
    </section>
  );
}
