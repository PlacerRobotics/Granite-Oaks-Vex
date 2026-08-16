export default function DiagramFrame({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-2 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4">
      {children}
      <figcaption className="mt-3 text-center text-xs text-neutral-400">{caption}</figcaption>
    </figure>
  );
}
