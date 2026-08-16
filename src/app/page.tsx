import Link from "next/link";

const PILLARS = [
  {
    href: "/courses",
    title: "Courses",
    desc: "Basic tracks for building, coding, CAD, notebooking, judging, and what a competition is like — plus an Advanced track for building, coding, and CAD.",
  },
  {
    href: "/library",
    title: "Library",
    desc: "Every VEX part, tool, and piece of jargon, decoded — from screwdrivers to PID.",
  },
  {
    href: "/game",
    title: "Game Breakdown",
    desc: "This season's game (Override): the reveal video, the official manual, and the rules Q&A.",
  },
];

export default function Home() {
  return (
    <div>
      <div className="mb-10 overflow-hidden rounded-2xl bg-brand-black text-white">
        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold-light">
              Unofficial &middot; Community-run
            </p>
            <h1 className="mt-2 max-w-xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Everything a new VEX team needs, in one place.
            </h1>
            <p className="mt-4 max-w-xl text-neutral-300">
              VEX Basics 101 is a curated set of courses and references for VEX IQ, V5, and
              U teams — building, CAD, coding, notebooking, judging, and strategy, with real
              technique pulled from team build guides, not just link dumps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/courses/basic/building"
                className="rounded-md bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-gold-light"
              >
                Start Basic Building
              </Link>
              <Link
                href="/library"
                className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Browse the Library
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <p className="text-4xl font-extrabold text-brand-gold-light">9</p>
            <p className="mt-1 text-sm font-semibold text-white">courses</p>
            <p className="mt-2 max-w-[16rem] text-sm text-neutral-400">
              Only Basic Building needs the electronics-care &amp; lab-safety quiz — everything
              else is open.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10 rounded-md border-l-4 border-brand-green bg-brand-green/10 px-5 py-4 text-sm text-neutral-300">
        <strong className="text-brand-green-light">Unofficial resource:</strong>{" "}
        this site is a community-curated helper, not a substitute for your team&apos;s official
        rules, lead instructions, or the current game manual. Always follow current lab and
        event guidance first.
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {PILLARS.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand-green/50 hover:bg-brand-green/10"
          >
            <h2 className="font-bold text-neutral-100 group-hover:text-brand-green-light">
              {p.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-300">{p.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
