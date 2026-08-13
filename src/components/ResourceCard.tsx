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
  Official: "bg-red-600/10 text-red-700 dark:text-red-400",
  GitHub: "bg-neutral-900/10 text-neutral-800 dark:bg-white/10 dark:text-neutral-200",
  Video: "bg-rose-600/10 text-rose-700 dark:text-rose-400",
  Forum: "bg-blue-600/10 text-blue-700 dark:text-blue-400",
  Tool: "bg-emerald-600/10 text-emerald-700 dark:text-emerald-400",
  Docs: "bg-amber-600/10 text-amber-700 dark:text-amber-400",
  Community: "bg-purple-600/10 text-purple-700 dark:text-purple-400",
};

export default function ResourceCard({ title, url, description, tag }: Resource) {
  const isExternal = /^https?:\/\//.test(url);

  const inner = (
    <>
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-neutral-900 group-hover:text-red-700 dark:text-neutral-100 dark:group-hover:text-red-400">
          {title}
        </h3>
        <span
          className={`shrink-0 rounded px-2 py-0.5 text-xs font-medium ${TAG_STYLES[tag]}`}
        >
          {tag}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      {isExternal && (
        <span className="text-xs text-neutral-400 break-all">
          {url.replace(/^https?:\/\//, "")}
        </span>
      )}
    </>
  );

  const className =
    "group flex flex-col gap-2 rounded-lg border border-black/10 p-4 transition-colors hover:border-red-600/40 hover:bg-red-600/5 dark:border-white/10 dark:hover:bg-red-600/10";

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
