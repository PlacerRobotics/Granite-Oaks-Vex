import PageHero from "@/components/PageHero";
import ModuleGrid, { Module as ModuleItem } from "@/components/ModuleGrid";

const BASIC_COURSES: ModuleItem[] = [
  {
    href: "/courses/basic/building",
    number: "01",
    title: "Building",
    desc: "Drivetrains, mechanisms, gear ratios, and structural basics.",
    tag: "Guide",
  },
  {
    href: "/courses/basic/coding",
    number: "02",
    title: "Coding",
    desc: "VEXcode, PROS, and writing your first autonomous.",
    tag: "Guide",
    alwaysOpen: true,
  },
  {
    href: "/courses/basic/cad",
    number: "03",
    title: "CAD",
    desc: "Onshape, VEX parts libraries, and designing for judging.",
    tag: "Guide",
    alwaysOpen: true,
  },
  {
    href: "/courses/basic/notebooking",
    number: "04",
    title: "Notebooking",
    desc: "What judges expect and how to structure yours.",
    tag: "Guide",
    alwaysOpen: true,
  },
  {
    href: "/courses/basic/judging",
    number: "05",
    title: "Judging",
    desc: "Award criteria and interview prep.",
    tag: "Guide",
    alwaysOpen: true,
  },
  {
    href: "/courses/basic/comp-101",
    number: "06",
    title: "What's a VEX Competition?",
    desc: "Programs, match structure, and what a day at an event looks like.",
    tag: "Guide",
    alwaysOpen: true,
  },
];

const ADVANCED_COURSES: ModuleItem[] = [
  {
    href: "/courses/advanced/building",
    number: "01",
    title: "Building",
    desc: "Boxing, standoff bracing, screw joints, and friction control.",
    tag: "Advanced",
    alwaysOpen: true,
  },
  {
    href: "/courses/advanced/coding",
    number: "02",
    title: "Coding",
    desc: "Field-proof autonomous, turnToHeading, and debugging practices.",
    tag: "Advanced",
    alwaysOpen: true,
  },
  {
    href: "/courses/advanced/cad",
    number: "03",
    title: "CAD",
    desc: "Assemblies, mate strategy, and designing for what you'll actually build.",
    tag: "Advanced",
    alwaysOpen: true,
  },
];

export default function CoursesPage() {
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
        <ModuleGrid modules={BASIC_COURSES} />
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold tracking-tight text-brand-gold-light">
          Advanced
        </h2>
        <p className="mb-4 max-w-2xl text-sm text-neutral-400">
          Building, Coding, and CAD only — deeper technique for teams past their first
          working robot.
        </p>
        <ModuleGrid modules={ADVANCED_COURSES} />
      </section>
    </div>
  );
}
