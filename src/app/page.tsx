import Link from "next/link";
import ModuleGrid, { Module } from "@/components/ModuleGrid";

const MODULES: Module[] = [
  {
    href: "/safety",
    number: "00",
    title: "Electronics Care & Lab Safety",
    desc: "Wiring, motor, and tool safety — plus the quiz that unlocks everything below.",
    tag: "Start here",
    alwaysOpen: true,
  },
  {
    href: "/building",
    number: "01",
    title: "Building",
    desc: "Drivetrains, lifts, intakes, gear ratios, and structural basics.",
    tag: "Guide",
  },
  {
    href: "/cad",
    number: "02",
    title: "CAD",
    desc: "Onshape for VEX, parts libraries, and design tutorials.",
    tag: "Guide",
  },
  {
    href: "/coding",
    number: "03",
    title: "Coding",
    desc: "VEXcode, PROS, PID/odometry, and GitHub libraries.",
    tag: "Guide",
  },
  {
    href: "/notebook",
    number: "04",
    title: "Engineering Notebook",
    desc: "What judges expect and how to structure yours.",
    tag: "Guide",
  },
  {
    href: "/judging",
    number: "05",
    title: "Judging & Interviews",
    desc: "Award criteria and interview prep.",
    tag: "Guide",
  },
  {
    href: "/strategy",
    number: "06",
    title: "Competition & Strategy",
    desc: "Game manuals, Q&A, and match strategy basics.",
    tag: "Guide",
  },
  {
    href: "/community",
    number: "07",
    title: "Community",
    desc: "Forums, Discords, and YouTube channels worth following.",
    tag: "Guide",
  },
  {
    href: "/glossary",
    number: "08",
    title: "Glossary",
    desc: "VEX parts, tools, and jargon, decoded.",
    tag: "Reference",
  },
  {
    href: "/tools",
    number: "09",
    title: "Tools",
    desc: "Gear ratio calculator and other quick utilities.",
    tag: "Tool",
  },
  {
    href: "/lookup",
    number: "10",
    title: "Team & Event Lookup",
    desc: "Live team info and event results via the VEX RobotEvents API.",
    tag: "Live data",
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
              VEX Basics 101 is a curated jumping-off point for VEX IQ, V5, and U teams —
              building, CAD, coding, notebooks, judging, and strategy, with links straight to
              the best official docs, GitHub repos, and videos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/safety"
                className="rounded-md bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-gold-light"
              >
                Take the safety quiz
              </Link>
              <Link
                href="/glossary"
                className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Browse the glossary
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <p className="text-4xl font-extrabold text-brand-gold-light">11</p>
            <p className="mt-1 text-sm font-semibold text-white">guides &amp; tools</p>
            <p className="mt-2 max-w-[16rem] text-sm text-neutral-400">
              One short safety quiz unlocks all of them on this device.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10 rounded-md border-l-4 border-brand-green bg-brand-green/5 px-5 py-4 text-sm text-neutral-700 dark:text-neutral-300">
        <strong className="text-brand-green dark:text-brand-green-light">Unofficial resource:</strong>{" "}
        this site is a community-curated helper, not a substitute for your team&apos;s official
        rules, lead instructions, or the current game manual. Always follow current lab and
        event guidance first.
      </div>

      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Get started
          </p>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight">
            Start with the basics
          </h2>
        </div>
        <Link
          href="/glossary"
          className="text-sm font-semibold text-brand-green hover:underline dark:text-brand-green-light"
        >
          Full glossary &rarr;
        </Link>
      </div>

      <ModuleGrid modules={MODULES} />
    </div>
  );
}
