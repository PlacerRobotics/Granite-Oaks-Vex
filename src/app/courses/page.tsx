import PageHero from "@/components/PageHero";
import ModuleGrid, { Module as ModuleItem } from "@/components/ModuleGrid";
import { COURSE_REGISTRY } from "@/data/courseRegistry";
import { getAllProgressCounts } from "@/lib/progress";

type CourseCard = Omit<ModuleItem, "progress"> & { slug: string };

const BASIC_COURSES: CourseCard[] = [
  {
    href: "/courses/basic/building",
    slug: "basic-building",
    number: "01",
    title: "Building",
    desc: "Drivetrains, mechanisms, gear ratios, and structural basics.",
    tag: "Guide",
  },
  {
    href: "/courses/basic/coding",
    slug: "basic-coding",
    number: "02",
    title: "Coding",
    desc: "VEXcode, PROS, and writing your first autonomous.",
    tag: "Guide",
    alwaysOpen: true,
  },
  {
    href: "/courses/basic/cad",
    slug: "basic-cad",
    number: "03",
    title: "CAD",
    desc: "Onshape, VEX parts libraries, and designing for judging.",
    tag: "Guide",
    alwaysOpen: true,
  },
  {
    href: "/courses/basic/notebooking",
    slug: "basic-notebooking",
    number: "04",
    title: "Notebooking",
    desc: "What judges expect and how to structure yours.",
    tag: "Guide",
    alwaysOpen: true,
  },
  {
    href: "/courses/basic/judging",
    slug: "basic-judging",
    number: "05",
    title: "Judging",
    desc: "Award criteria and interview prep.",
    tag: "Guide",
    alwaysOpen: true,
  },
  {
    href: "/courses/basic/comp-101",
    slug: "basic-comp-101",
    number: "06",
    title: "What's a VEX Competition?",
    desc: "Programs, match structure, and what a day at an event looks like.",
    tag: "Guide",
    alwaysOpen: true,
  },
];

const ADVANCED_COURSES: CourseCard[] = [
  {
    href: "/courses/advanced/building",
    slug: "advanced-building",
    number: "01",
    title: "Building",
    desc: "Boxing, standoff bracing, screw joints, and friction control.",
    tag: "Advanced",
    alwaysOpen: true,
  },
  {
    href: "/courses/advanced/coding",
    slug: "advanced-coding",
    number: "02",
    title: "Coding",
    desc: "Field-proof autonomous, turnToHeading, and debugging practices.",
    tag: "Advanced",
    alwaysOpen: true,
  },
  {
    href: "/courses/advanced/cad",
    slug: "advanced-cad",
    number: "03",
    title: "CAD",
    desc: "Assemblies, mate strategy, and designing for what you'll actually build.",
    tag: "Advanced",
    alwaysOpen: true,
  },
];

const PARENT_COURSES: CourseCard[] = [
  {
    href: "/courses/parents",
    slug: "parents",
    number: "01",
    title: "How a Season Goes",
    desc: "The season timeline, what meetings and competition days look like, and how to actually help.",
    tag: "For Parents",
    alwaysOpen: true,
  },
];

function withProgress(cards: CourseCard[], signedIn: boolean, counts: Map<string, number>): ModuleItem[] {
  return cards.map((c) => {
    const total = COURSE_REGISTRY.find((r) => r.slug === c.slug)?.moduleCount ?? 0;
    const done = counts.get(c.slug) ?? 0;
    return { ...c, progress: signedIn ? { done, total } : undefined };
  });
}

export default async function CoursesPage() {
  const { signedIn, counts } = await getAllProgressCounts();

  return (
    <div>
      <PageHero
        eyebrow="Courses"
        title="Pick a track"
        description="Start with Basic Building — it's the only course gated behind the electronics-care and lab-safety quiz. Everything else is open, and the Advanced track is there once you've got the fundamentals down."
      />

      <section className="mb-14">
        <h2 className="mb-4 text-lg font-bold tracking-tight text-brand-green-light">
          Basic
        </h2>
        <ModuleGrid modules={withProgress(BASIC_COURSES, signedIn, counts)} />
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-lg font-bold tracking-tight text-brand-gold-light">
          Advanced
        </h2>
        <p className="mb-4 max-w-2xl text-sm text-neutral-400">
          Building, Coding, and CAD only — deeper technique for teams past their first
          working robot.
        </p>
        <ModuleGrid modules={withProgress(ADVANCED_COURSES, signedIn, counts)} />
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold tracking-tight text-brand-green-light">
          For Parents
        </h2>
        <p className="mb-4 max-w-2xl text-sm text-neutral-400">
          Not building, coding, or judging — a season overview for the people driving
          carpool and asking &quot;so what does the robot actually do?&quot;
        </p>
        <ModuleGrid modules={withProgress(PARENT_COURSES, signedIn, counts)} />
      </section>
    </div>
  );
}
