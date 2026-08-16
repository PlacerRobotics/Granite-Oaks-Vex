import ResourceCard, { Resource } from "./ResourceCard";

export default function LinkGrid({ resources }: { resources: Resource[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {resources.map((r) => (
        <ResourceCard key={r.url} {...r} />
      ))}
    </div>
  );
}
