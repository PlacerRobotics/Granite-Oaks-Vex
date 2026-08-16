export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border-l-4 border-brand-gold bg-brand-gold/10 px-4 py-3 text-sm">
      {children}
    </div>
  );
}
