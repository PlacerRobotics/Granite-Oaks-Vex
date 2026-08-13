import Link from "next/link";

const CATEGORIES = [
  {
    href: "/building",
    title: "Building",
    desc: "Drivetrains, lifts, intakes, gear ratios, and structural basics.",
  },
  {
    href: "/cad",
    title: "CAD",
    desc: "Onshape for VEX, parts libraries, and design tutorials.",
  },
  {
    href: "/coding",
    title: "Coding",
    desc: "VEXcode, PROS, PID/odometry, and GitHub libraries.",
  },
  {
    href: "/notebook",
    title: "Engineering Notebook",
    desc: "What judges expect and how to structure yours.",
  },
  {
    href: "/judging",
    title: "Judging & Interviews",
    desc: "Award criteria and interview prep.",
  },
  {
    href: "/strategy",
    title: "Competition & Strategy",
    desc: "Game manuals, Q&A, and match strategy basics.",
  },
  {
    href: "/community",
    title: "Community",
    desc: "Forums, Discords, and YouTube channels worth following.",
  },
  {
    href: "/glossary",
    title: "Glossary",
    desc: "VEX jargon and acronyms, decoded.",
  },
  {
    href: "/tools",
    title: "Tools",
    desc: "Gear ratio calculator and other quick utilities.",
  },
  {
    href: "/lookup",
    title: "Team & Event Lookup",
    desc: "Live team info and event results via the VEX RobotEvents API.",
  },
];

export default function Home() {
  return (
    <div>
      <div className="mb-14">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
          Unofficial &middot; Community-run
        </p>
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Everything a new VEX team needs, in one place.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          VEX Basics 101 is a curated jumping-off point for VEX IQ, V5, and U teams —
          building, CAD, coding, notebooks, judging, and strategy, with links straight to
          the best official docs, GitHub repos, and videos. No fluff, just the resources
          that actually help.
        </p>
      </div>

      <div className="mb-14 rounded-xl border border-black/10 bg-neutral-50 p-6 dark:border-white/10 dark:bg-white/5">
        <h2 className="text-lg font-bold">New to VEX? Start here.</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
          VEX Robotics runs three main programs: <strong>VEX IQ</strong> (grades 4&ndash;8,
          snap-together parts), <strong>VEX V5</strong> (grades 6&ndash;12, metal + code,
          the main competitive program), and <strong>VEX U</strong> (college). Most teams
          spend their first season learning to build a reliable drivetrain, program basic
          autonomous routines, and keep an engineering notebook &mdash; the pages below
          cover all three.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group rounded-xl border border-black/10 p-5 transition-colors hover:border-red-600/40 hover:bg-red-600/5 dark:border-white/10 dark:hover:bg-red-600/10"
          >
            <h3 className="font-bold text-neutral-900 group-hover:text-red-700 dark:text-neutral-100 dark:group-hover:text-red-400">
              {c.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
