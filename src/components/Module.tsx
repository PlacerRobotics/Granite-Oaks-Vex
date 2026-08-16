export default function Module({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 rounded-xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-brand-gold-light">{number}</span>
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      </div>
      <div className="mt-3 space-y-3 text-sm text-neutral-300">{children}</div>
    </section>
  );
}
