import PageHero from "@/components/PageHero";

const TERMS: { term: string; def: string }[] = [
  { term: "V5", def: "VEX's flagship competitive robotics platform for grades 6-12, using metal structure and the V5 Brain." },
  { term: "VEX IQ", def: "Beginner-friendly, snap-together robotics platform for grades 4-8, no tools required." },
  { term: "VEX U", def: "The college-level VEX competition program." },
  { term: "Brain", def: "The V5 (or IQ) Robot Brain — the onboard computer that runs your code and controls motors/sensors." },
  { term: "Autonomous (Auton)", def: "The period at the start of a match (usually 15s) where the robot runs pre-written code with no driver input." },
  { term: "Driver control", def: "The part of the match where a human driver controls the robot via controller." },
  { term: "Skills run", def: "A timed run (driver skills or autonomous skills) scored separately from head-to-head matches, used for rankings/qualification." },
  { term: "Alliance", def: "A team-up of two teams playing together against another alliance in a match." },
  { term: "Elims / Eliminations", def: "The bracket-style playoff rounds after qualification matches." },
  { term: "PID", def: "Proportional-Integral-Derivative — a control algorithm used to make motors/drivetrains move accurately to a target." },
  { term: "Odometry", def: "Tracking the robot's position on the field in real time using sensor data (encoders, IMU)." },
  { term: "Gear ratio", def: "The ratio between input and output gears, trading rotational speed for torque or vice versa." },
  { term: "Engineering notebook", def: "A team's dated, running record of their design process — required for most judged awards." },
  { term: "Judged award", def: "An award (Design, Excellence, Innovate, etc.) decided by judges based on the notebook and interview, not match results." },
  { term: "Design Award", def: "Judged award for the best engineering notebook plus a strong judges' interview." },
  { term: "Excellence Award", def: "The top overall judged award — combines notebook/interview quality with strong on-field performance." },
  { term: "Q&A", def: "The official rules clarification system where teams can ask questions about game rule interpretation." },
  { term: "PROS", def: "An open-source, C++ programming environment for VEX V5, popular with competitive teams." },
  { term: "VEXcode", def: "VEX's official programming environment, supporting Blocks, Python, and C++." },
  { term: "RobotEvents", def: "The official event registration, results, and rankings platform for VEX competitions." },
];

export default function GlossaryPage() {
  return (
    <div>
      <PageHero
        eyebrow="Glossary"
        title="VEX jargon, decoded"
        description="Every acronym and term you'll hear at your first event or on the forums, in plain language."
      />

      <dl className="grid gap-4 sm:grid-cols-2">
        {TERMS.map((t) => (
          <div key={t.term} className="rounded-lg border border-black/10 p-4 dark:border-white/10">
            <dt className="font-semibold text-red-700 dark:text-red-400">{t.term}</dt>
            <dd className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{t.def}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
