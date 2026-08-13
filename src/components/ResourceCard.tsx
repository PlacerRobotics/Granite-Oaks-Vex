import Link from "next/link";

export type ResourceTag =
  | "Official"
  | "GitHub"
  | "Video"
  | "Forum"
  | "Tool"
  | "Docs"
  | "Community";

export type Resource = {
  title: string;
  url: string;
  description: string;
  tag: ResourceTag;
};

const TAG_STYLES: Record<ResourceTag, string> = {
  Official: "bg-brand-green/20 text-brand-green-light",
  GitHub: "bg-white/10 text-neutral-200",
  Video: "bg-rose-500/15 text-rose-300",
  Forum: "bg-blue-500/15 text-blue-300",
  Tool: "bg-emerald-500/15 text-emerald-300",
  Docs: "bg-amber-500/15 text-amber-300",
  Community: "bg-purple-500/15 text-purple-300",
};

export default function ResourceCard({ title, url, description, tag }: Resource) {
  const isExternal = /^https?:\/\//.test(url);

  const inner = (
    <>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-neutral-100 group-hover:text-brand-green-light">
          {title}
        </h3>
        <span
          className={`shrink-0 rounded px-2 py-0.5 text-xs font-medium ${TAG_STYLES[tag]}`}
        >
          {tag}
        </span>
      </div>
      <p className="text-sm text-neutral-300">{description}</p>
      {isExternal && (
        <span className="text-xs text-neutral-500 break-all">
          {url.replace(/^https?:\/\//, "")}
        </span>
      )}
    </>
  );

  const className =
    "group flex flex-col gap-2 rounded-lg border border-white/10 bg-white/5 p-4 transition-colors hover:border-brand-green/50 hover:bg-brand-green/10";

  if (isExternal) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={url} className={className}>
      {inner}
    </Link>
  );
}
