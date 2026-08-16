import PageHero from "@/components/PageHero";
import LinkGrid from "@/components/LinkGrid";
import TermIcon, { IconKind } from "@/components/icons/TermIcon";

type Term = { term: string; def: string; icon: IconKind };
type Category = { name: string; terms: Term[] };

const CATEGORIES: Category[] = [
  {
    name: "VEX programs",
    terms: [
      { term: "V5", def: "VEX's flagship competitive robotics platform for grades 6-12, using metal structure and the V5 Brain.", icon: "brain" },
      { term: "VEX IQ", def: "Beginner-friendly, snap-together robotics platform for grades 4-8, no tools required.", icon: "blocks" },
      { term: "VEX U", def: "The college-level VEX competition program.", icon: "gradcap" },
      { term: "Brain", def: "The V5 (or IQ) Robot Brain — the onboard computer that runs your code and controls motors/sensors.", icon: "brain" },
      { term: "Herobot", def: "A standard \"starter\" robot design teams build first to learn core mechanisms before customizing their own.", icon: "robot" },
    ],
  },
  {
    name: "Competition & judging",
    terms: [
      { term: "Autonomous (Auton)", def: "The period at the start of a match (usually 15s) where the robot runs pre-written code with no driver input.", icon: "auton" },
      { term: "Driver control", def: "The part of the match where a human driver controls the robot via controller.", icon: "joystick" },
      { term: "Skills run", def: "A timed run (driver skills or autonomous skills) scored separately from head-to-head matches, used for rankings/qualification.", icon: "stopwatch" },
      { term: "Alliance", def: "A team-up of two teams playing together against another alliance in a match.", icon: "alliance" },
      { term: "Elims / Eliminations", def: "The bracket-style playoff rounds after qualification matches.", icon: "bracket" },
      { term: "AWP (Autonomous Win Point)", def: "A bonus ranking point awarded for completing specific tasks during the autonomous period, independent of who wins the match.", icon: "flag" },
      { term: "Pinning", def: "Holding an opposing robot against part of the field. Limited to a maximum hold time (e.g. 5 seconds) before you must back off.", icon: "pin" },
      { term: "Descoring", def: "Removing an opponent's already-scored game elements, or knocking over a scored structure.", icon: "descore" },
      { term: "License plate", def: "The required team-number placard showing your alliance color, mounted securely on two opposite sides of the robot.", icon: "plate" },
      { term: "Match bar / grappler", def: "The load bar on the field; current rules allow robots to latch onto it (a \"grappler\") as a legal strategy.", icon: "hook" },
      { term: "Engineering notebook", def: "A team's dated, running record of their design process — required for most judged awards.", icon: "book" },
      { term: "Judged award", def: "An award (Design, Excellence, Innovate, etc.) decided by judges based on the notebook and interview, not match results.", icon: "trophy" },
      { term: "Design Award", def: "Judged award for the best engineering notebook plus a strong judges' interview.", icon: "trophy" },
      { term: "Excellence Award", def: "The top overall judged award — combines notebook/interview quality with strong on-field performance.", icon: "trophy" },
      { term: "Q&A", def: "The official rules clarification system where teams can ask questions about game rule interpretation.", icon: "chat" },
    ],
  },
  {
    name: "Programming & autonomous",
    terms: [
      { term: "PID", def: "Proportional-Integral-Derivative — a control algorithm used to make motors/drivetrains move accurately to a target.", icon: "wave" },
      { term: "Odometry", def: "Tracking the robot's position on the field in real time using sensor data (encoders, IMU).", icon: "path" },
      { term: "PROS", def: "An open-source, C++ programming environment for VEX V5, popular with competitive teams.", icon: "terminal" },
      { term: "VEXcode", def: "VEX's official programming environment, supporting Blocks, Python, and C++.", icon: "blockscode" },
      { term: "Inertial sensor", def: "A sensor that tracks the robot's orientation/heading. It auto-calibrates for a few seconds at program start — don't move the robot until that finishes.", icon: "compass" },
      { term: "turnFor", def: "A command that turns the robot a set number of degrees relative to its current position — errors from bumps or drift add up over a match.", icon: "rotate" },
      { term: "turnToHeading", def: "A command that turns the robot to an absolute heading using the inertial sensor, automatically correcting for any drift from turnFor.", icon: "compass" },
      { term: "Blocking code", def: "Code that waits for a command (like driveFor) to finish completely before running the next line.", icon: "pause" },
      { term: "Non-blocking code", def: "Code that moves on to the next line immediately, without waiting for the current motor action to finish.", icon: "play" },
      { term: "Cubic drive", def: "A drive-control curve that reduces joystick sensitivity near the center, giving finer control and reducing oversteering.", icon: "curve" },
      { term: "Arcade drive", def: "A single-joystick drive style where one stick controls forward/back and turning together.", icon: "joystick" },
      { term: "Auton routine selector", def: "A way to pick which autonomous program runs before a match — commonly done with jumpers or a screen menu on the Brain.", icon: "switch" },
    ],
  },
  {
    name: "Tools & shop",
    terms: [
      { term: "T8 screwdriver", def: "Torx driver sized for most standard VEX screws.", icon: "screwdriver" },
      { term: "T15 screwdriver", def: "Larger Torx driver used for standoffs and bigger hardware.", icon: "screwdriver" },
      { term: "Wrench", def: "Holds a nut steady while you drive the screw from the other side.", icon: "wrench" },
      { term: "Nut driver", def: "Turns keps nuts without stripping them.", icon: "socket" },
      { term: "Standoff driver", def: "Seats and removes standoffs cleanly without stripping the threads.", icon: "socket" },
      { term: "Forceps", def: "Not an official VEX tool, but a shop favorite — used to seat nylock nuts in tight spaces fingers can't reach.", icon: "tweezers" },
    ],
  },
  {
    name: "Structure & metal",
    terms: [
      { term: "C-channel", def: "U-shaped structural metal beam — the main building block of a VEX robot's frame.", icon: "channel" },
      { term: "Angle", def: "L-shaped structural metal piece, used where a full C-channel isn't needed.", icon: "angle" },
      { term: "Flat plate", def: "A flat structural plate with no flanges — used for mounting a Brain/battery tray or covering an area a C-channel can't.", icon: "flatplate" },
      { term: "Gusset plate", def: "A small triangular or L-shaped plate that reinforces the corner joint between two pieces of structure.", icon: "triangle" },
      { term: "Bracing", def: "Extra structure added to reduce flex and bowing, and make mechanisms more rigid.", icon: "bracex" },
      { term: "Triangle bracing", def: "A diagonal brace that holds a vertical bar in tension or compression to keep it from moving sideways.", icon: "triangle" },
      { term: "Boxing", def: "A bracing technique that prevents the flanges of C-channels from being crushed inward. Done with loose spacers and a screw, or a coupler gusset for a stronger 3-hole hold.", icon: "box" },
      { term: "Coupler gusset", def: "A 7/8\"-wide gusset that drops inside a c-channel for boxing — stronger than spacer boxing (supports 3 holes instead of 1) but harder to fit in tight spots.", icon: "box" },
      { term: "Standoff brace", def: "A shaft-collar → coupler → standoff → coupler → shaft-collar assembly used as a lightweight brace anywhere you need to restrain motion in one direction.", icon: "standoffchain" },
      { term: "Shoulder screw", def: "A screw with a small unthreaded shoulder that fits square c-channel holes more precisely than a standard screw — used when bracing two c-channels flat-side to flat-side.", icon: "shoulderscrew" },
      { term: "Cross bracing", def: "A brace spanning the full width of a mechanism (e.g. one side of a drivetrain to the other), mounted low to reduce bending. Every robot needs at least one full-length cross brace.", icon: "cross" },
      { term: "Screw joint", def: "A rotating pivot point made from a screw and nylock nuts (with spacers to set position) through two pieces of metal — good for short, unpowered pivots up to about 3\".", icon: "screwjoint" },
      { term: "Drive cap", def: "Official VEX capped-shaft hardware that retains a wheel or gear on a shaft without needing a separate shaft collar.", icon: "cap" },
    ],
  },
  {
    name: "Motion & drivetrain",
    terms: [
      { term: "Gear ratio", def: "The ratio between input and output gears, trading rotational speed for torque or vice versa.", icon: "gearpair" },
      { term: "Gear", def: "A toothed part that transmits rotation between shafts; combining gears of different sizes sets your gear ratio.", icon: "gear" },
      { term: "Sprocket", def: "A toothed wheel that drives a chain, used like a gear but over longer distances.", icon: "sprocket" },
      { term: "Chain", def: "Connects two sprockets to transmit rotation over a longer distance than gears allow — needs a tensioner or idler to stay taut.", icon: "chainlink" },
      { term: "Traction wheel", def: "The default VEX wheel — high-grip rubber tread for maximum forward drive power.", icon: "wheel" },
      { term: "Omni wheel", def: "A wheel with small rollers around its circumference that let it roll freely sideways — used for strafing drivetrains (x-drive/h-drive).", icon: "wheel" },
      { term: "Mecanum wheel", def: "A wheel with rollers set at a 45° angle, letting a 4-wheel drivetrain move in any direction (holonomic) without turning.", icon: "wheel" },
      { term: "Rubber band / elastic", def: "Surgical tubing or rubber bands used to assist motors — commonly on lifts or flippers, to help carry a load or return a mechanism to position.", icon: "rubberband" },
      { term: "Idler", def: "An unpowered gear, sprocket, or wheel used to guide a chain/belt or fill a gap in a gear train without changing the overall ratio.", icon: "ringplain" },
      { term: "Bearing flat", def: "A flat plastic part with bearing holes that lets a shaft spin smoothly through a C-channel. Fasten with 3 screws, flush against the structure.", icon: "bearingflat" },
      { term: "Pillow bearing", def: "A high-strength bearing block (often paired with a brass insert) used to reduce friction on higher-load spinning shafts, like intake rollers.", icon: "pillowbearing" },
      { term: "Brass insert", def: "A low-friction metal insert fitted inside a pillow bearing (or gear/wheel hub) so a shaft spins smoothly against brass instead of raw plastic or metal.", icon: "ringplain" },
      { term: "Shaft collar", def: "Clamps onto a shaft to stop it from sliding side to side.", icon: "ringscrew" },
      { term: "Low-strength shaft", def: "Thinner metal shaft used for lighter-load spinning parts or shorter spans.", icon: "shaftthin" },
      { term: "High-strength shaft", def: "Thicker metal shaft used for high-torque, high-load parts, longer spans, or drivetrains.", icon: "shaftthick" },
    ],
  },
  {
    name: "Hardware",
    terms: [
      { term: "Screw", def: "VEX's standard fastener — mostly 8-32 threaded screws with a Torx head.", icon: "screw" },
      { term: "Nut (nylock)", def: "A nylon-insert locknut that resists vibrating loose during a match. Thinner nylocks save weight in places that don't need full thread engagement.", icon: "nut" },
      { term: "Spacer", def: "A plastic sleeve placed on a screw or shaft to set spacing between two parts.", icon: "tube" },
      { term: "Standoff", def: "A metal threaded post used to mount electronics or add height/spacing between two plates.", icon: "standoffpost" },
    ],
  },
  {
    name: "Motors & sensors",
    terms: [
      { term: "V5 Smart Motor", def: "VEX's primary motor — reports its own velocity, temperature, and position, and accepts swappable gear cartridges for different RPMs.", icon: "motor" },
      { term: "Motor cartridge", def: "The colored internal gearset inside a V5 Smart Motor: red (100 RPM, most torque), green (200 RPM), blue (600 RPM, most speed). Swappable without a new motor.", icon: "gear" },
      { term: "Rotation sensor", def: "Tracks precise shaft rotation and velocity — commonly used on tracking wheels for odometry or precise lift positioning.", icon: "sensor" },
      { term: "Distance sensor", def: "Measures distance to the nearest object in front of it using time-of-flight — used for detecting game elements or walls.", icon: "distance" },
      { term: "Optical sensor", def: "Detects color, brightness, and proximity at short range — often used to detect and sort game elements by color.", icon: "sensor" },
      { term: "Vision sensor", def: "A camera-based sensor that detects colored objects by their signature — used for game-element or goal tracking.", icon: "vision" },
      { term: "GPS sensor", def: "Uses printed field strips to determine the robot's absolute field position and heading — an alternative or supplement to odometry.", icon: "compass" },
      { term: "Limit switch / bumper switch", def: "A simple digital switch that triggers when physically pressed — used to detect a mechanism reaching its end of travel.", icon: "switch" },
      { term: "Potentiometer", def: "A rotational sensor that reports absolute angular position — commonly used on arm/lift mechanisms.", icon: "dial" },
    ],
  },
  {
    name: "Pneumatics & electrical",
    terms: [
      { term: "Pneumatic cylinder (piston)", def: "Converts compressed air pressure into a linear push. Not disposable — needs structural support so the rod doesn't bend on impact.", icon: "cylinder" },
      { term: "Solenoid", def: "An electrically controlled air valve that directs compressed air to extend or retract a pneumatic cylinder.", icon: "solenoid" },
      { term: "Air tank", def: "Stores compressed air on the robot (max 100 psi) to power pneumatic cylinders throughout a match.", icon: "tube" },
      { term: "V5 Battery", def: "The robot's main power source — a 12.8V lithium battery good for roughly one event day per charge.", icon: "battery" },
      { term: "V5 Robot Radio", def: "Pairs the Brain and controller wirelessly (VEXnet) — must be plugged into the correct ports on both ends.", icon: "radio" },
      { term: "Smart cable", def: "The cable connecting Smart Motors and V5 sensors to the Brain — always goes in an outer port, never the center VEXNet port.", icon: "cable" },
      { term: "Extension / Y-cable", def: "Extension cables lengthen a smart cable run; Y-cables split one Brain port to power two low-draw devices at once.", icon: "cable" },
    ],
  },
];

export default function LibraryPage() {
  return (
    <div>
      <PageHero
        eyebrow="Library"
        title="VEX parts, tools, and jargon, decoded"
        description="Every acronym, part, and shop tool you'll hear at your first build meeting or event, in plain language — with a picture for each one."
      />

      {CATEGORIES.map((cat) => (
        <section key={cat.name} className="mb-10">
          <h2 className="mb-4 text-lg font-bold tracking-tight text-brand-green-light">
            {cat.name}
          </h2>
          <dl className="grid gap-4 sm:grid-cols-2">
            {cat.terms.map((t) => (
              <div
                key={t.term}
                className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-brand-green-light">
                  <TermIcon kind={t.icon} className="h-7 w-7" />
                </div>
                <div>
                  <dt className="font-semibold text-brand-gold-light">{t.term}</dt>
                  <dd className="mt-1 text-sm text-neutral-300">{t.def}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>
      ))}

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-bold tracking-tight text-brand-green-light">
          Utilities
        </h2>
        <LinkGrid
          resources={[
            {
              title: "Gear Ratio Calculator",
              url: "/tools",
              description: "Plug in your gears and wheel size — get speed/torque tradeoffs instantly.",
              tag: "Tool",
            },
            {
              title: "Team & Event Lookup",
              url: "/lookup",
              description: "Live team info and event results via the official RobotEvents API.",
              tag: "Tool",
            },
          ]}
        />
      </section>
    </div>
  );
}
