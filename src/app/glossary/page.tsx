import PageHero from "@/components/PageHero";
import SafetyGate from "@/components/SafetyGate";

type Term = { term: string; def: string };
type Category = { name: string; terms: Term[] };

const CATEGORIES: Category[] = [
  {
    name: "VEX programs",
    terms: [
      { term: "V5", def: "VEX's flagship competitive robotics platform for grades 6-12, using metal structure and the V5 Brain." },
      { term: "VEX IQ", def: "Beginner-friendly, snap-together robotics platform for grades 4-8, no tools required." },
      { term: "VEX U", def: "The college-level VEX competition program." },
      { term: "Brain", def: "The V5 (or IQ) Robot Brain — the onboard computer that runs your code and controls motors/sensors." },
      { term: "Herobot", def: "A standard \"starter\" robot design teams build first to learn core mechanisms before customizing their own." },
    ],
  },
  {
    name: "Competition & judging",
    terms: [
      { term: "Autonomous (Auton)", def: "The period at the start of a match (usually 15s) where the robot runs pre-written code with no driver input." },
      { term: "Driver control", def: "The part of the match where a human driver controls the robot via controller." },
      { term: "Skills run", def: "A timed run (driver skills or autonomous skills) scored separately from head-to-head matches, used for rankings/qualification." },
      { term: "Alliance", def: "A team-up of two teams playing together against another alliance in a match." },
      { term: "Elims / Eliminations", def: "The bracket-style playoff rounds after qualification matches." },
      { term: "AWP (Autonomous Win Point)", def: "A bonus ranking point awarded for completing specific tasks during the autonomous period, independent of who wins the match." },
      { term: "Pinning", def: "Holding an opposing robot against part of the field. Limited to a maximum hold time (e.g. 5 seconds) before you must back off." },
      { term: "Descoring", def: "Removing an opponent's already-scored game elements, or knocking over a scored structure." },
      { term: "License plate", def: "The required team-number placard showing your alliance color, mounted securely on two opposite sides of the robot." },
      { term: "Match bar / grappler", def: "The load bar on the field; current rules allow robots to latch onto it (a \"grappler\") as a legal strategy." },
      { term: "Engineering notebook", def: "A team's dated, running record of their design process — required for most judged awards." },
      { term: "Judged award", def: "An award (Design, Excellence, Innovate, etc.) decided by judges based on the notebook and interview, not match results." },
      { term: "Design Award", def: "Judged award for the best engineering notebook plus a strong judges' interview." },
      { term: "Excellence Award", def: "The top overall judged award — combines notebook/interview quality with strong on-field performance." },
      { term: "Q&A", def: "The official rules clarification system where teams can ask questions about game rule interpretation." },
    ],
  },
  {
    name: "Programming & autonomous",
    terms: [
      { term: "PID", def: "Proportional-Integral-Derivative — a control algorithm used to make motors/drivetrains move accurately to a target." },
      { term: "Odometry", def: "Tracking the robot's position on the field in real time using sensor data (encoders, IMU)." },
      { term: "PROS", def: "An open-source, C++ programming environment for VEX V5, popular with competitive teams." },
      { term: "VEXcode", def: "VEX's official programming environment, supporting Blocks, Python, and C++." },
      { term: "Inertial sensor", def: "A sensor that tracks the robot's orientation/heading. It auto-calibrates for a few seconds at program start — don't move the robot until that finishes." },
      { term: "turnFor", def: "A command that turns the robot a set number of degrees relative to its current position — errors from bumps or drift add up over a match." },
      { term: "turnToHeading", def: "A command that turns the robot to an absolute heading using the inertial sensor, automatically correcting for any drift from turnFor." },
      { term: "Blocking code", def: "Code that waits for a command (like driveFor) to finish completely before running the next line." },
      { term: "Non-blocking code", def: "Code that moves on to the next line immediately, without waiting for the current motor action to finish." },
      { term: "Cubic drive", def: "A drive-control curve that reduces joystick sensitivity near the center, giving finer control and reducing oversteering." },
      { term: "Arcade drive", def: "A single-joystick drive style where one stick controls forward/back and turning together." },
      { term: "Auton routine selector", def: "A way to pick which autonomous program runs before a match — commonly done with jumpers or a screen menu on the Brain." },
    ],
  },
  {
    name: "Tools & shop",
    terms: [
      { term: "T8 screwdriver", def: "Torx driver sized for most standard VEX screws." },
      { term: "T15 screwdriver", def: "Larger Torx driver used for standoffs and bigger hardware." },
      { term: "Wrench", def: "Holds a nut steady while you drive the screw from the other side." },
      { term: "Nut driver", def: "Turns keps nuts without stripping them." },
      { term: "Standoff driver", def: "Seats and removes standoffs cleanly without stripping the threads." },
    ],
  },
  {
    name: "Structure & metal",
    terms: [
      { term: "C-channel", def: "U-shaped structural metal beam — the main building block of a VEX robot's frame." },
      { term: "Angle", def: "L-shaped structural metal piece, used where a full C-channel isn't needed." },
      { term: "Bracing", def: "Extra structure added to reduce flex and bowing, and make mechanisms more rigid." },
      { term: "Triangle bracing", def: "A diagonal brace that holds a vertical bar in tension or compression to keep it from moving sideways." },
      { term: "Boxing", def: "A bracing technique that prevents the flanges of C-channels/U-channels from being crushed inward, keeping cross-brace connections rigid." },
      { term: "Cross bracing", def: "A brace spanning the full width of a mechanism (e.g. one side of a drivetrain to the other), mounted low to reduce bending." },
      { term: "Screw joint", def: "A rotating pivot point made from a screw and nylock nuts (with spacers to set position) through two pieces of metal — good for short, unpowered pivots up to about 3\"." },
    ],
  },
  {
    name: "Motion & drivetrain",
    terms: [
      { term: "Gear ratio", def: "The ratio between input and output gears, trading rotational speed for torque or vice versa." },
      { term: "Gear", def: "A toothed part that transmits rotation between shafts; combining gears of different sizes sets your gear ratio." },
      { term: "Sprocket", def: "A toothed wheel that drives a chain, used like a gear but over longer distances." },
      { term: "Wheel (traction / omni / mecanum)", def: "Traction wheels grip hard for maximum power; omni wheels roll freely sideways for strafing drivetrains; mecanum wheels roll at an angle to allow holonomic (any-direction) movement." },
      { term: "Bearing flat", def: "A flat plastic part with bearing holes that lets a shaft spin smoothly through a C-channel." },
      { term: "Shaft collar", def: "Clamps onto a shaft to stop it from sliding side to side." },
      { term: "Low-strength shaft", def: "Thinner metal shaft used for lighter-load spinning parts." },
      { term: "High-strength shaft", def: "Thicker metal shaft used for high-torque, high-load parts like drivetrains." },
    ],
  },
  {
    name: "Hardware",
    terms: [
      { term: "Screw", def: "VEX's standard fastener — mostly 8-32 threaded screws with a Torx head." },
      { term: "Nut (nylock)", def: "A nylon-insert locknut that resists vibrating loose during a match." },
      { term: "Spacer", def: "A plastic sleeve placed on a screw or shaft to set spacing between two parts." },
      { term: "Standoff", def: "A metal threaded post used to mount electronics or add height/spacing between two plates." },
    ],
  },
  {
    name: "Data & tools",
    terms: [
      { term: "RobotEvents", def: "The official event registration, results, and rankings platform for VEX competitions." },
    ],
  },
];

export default function GlossaryPage() {
  return (
    <SafetyGate>
    <div>
      <PageHero
        eyebrow="Glossary"
        title="VEX parts, tools, and jargon, decoded"
        description="Every acronym, part, and shop tool you'll hear at your first build meeting or event, in plain language."
      />

      {CATEGORIES.map((cat) => (
        <section key={cat.name} className="mb-10">
          <h2 className="mb-4 text-lg font-bold tracking-tight text-brand-green-light">
            {cat.name}
          </h2>
          <dl className="grid gap-4 sm:grid-cols-2">
            {cat.terms.map((t) => (
              <div key={t.term} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <dt className="font-semibold text-brand-gold-light">{t.term}</dt>
                <dd className="mt-1 text-sm text-neutral-300">{t.def}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
    </SafetyGate>
  );
}
