import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";
import Callout from "@/components/Callout";
import SafetyGate from "@/components/SafetyGate";
import DiagramFrame from "@/components/DiagramFrame";
import CourseProgressProvider from "@/components/progress/CourseProgressProvider";
import { getCourseProgress } from "@/lib/progress";

export default async function BasicBuildingCoursePage() {
  const { userId, completedModules } = await getCourseProgress("basic-building");

  return (
    <SafetyGate>
      <CourseProgressProvider
        courseSlug="basic-building"
        initialUserId={userId}
        initialCompleted={completedModules}
      >
      <div>
        <PageHero
          eyebrow="Basic Course · Building"
          title="4-Motor Drivetrain, Intake & Cascade Lift"
          description="Everything for a first competitive Override robot: the electronics every robot needs, a 4-motor drivetrain, an intake, and a cascade lift. For deep technique (bracing, screw joints, friction control), move on to the Advanced Building course once this is solid."
        />

        <Module number="01" title="Quick game context: Override">
          <p>
            Before you pick up a screwdriver, know what you&apos;re building for. Two
            Alliances (Red and Blue, two teams each) score by stacking Pins and Cups onto
            Goals, setting field Toggles to their color, and ending the match in the
            contested Midfield — over a 15-second Autonomous Period and 1:45 of Driver
            Control. That scoring picture is exactly why this course covers three
            mechanisms together: a strong <strong>drivetrain</strong> to fight for field
            position, an <strong>intake</strong> that grabs Pins and Cups without jamming,
            and a <strong>cascade lift</strong> that carries them up to score on both the
            Short Goals and the much taller Tall Goal.
          </p>
          <LinkGrid
            resources={[
              {
                title: "Game Breakdown: Override",
                url: "/game",
                description: "Full scoring rules, the official manual, and the reveal video.",
                tag: "Tool",
              },
            ]}
          />
        </Module>

        <Module number="02" title="The V5 control system">
          <p>
            Every legal V5 robot is built around the same five core electronics. Learn
            these first — nothing else in this course works without them.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4">
              <img
                src="https://www.vexrobotics.com/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/2/7/276-4810_v5brain_rqc.jpg"
                alt="VEX V5 Robot Brain"
                loading="lazy"
                className="mx-auto max-h-48 rounded-md bg-white object-contain p-2"
              />
              <figcaption className="mt-2 text-center text-xs text-neutral-400">
                The V5 Robot Brain — the computer at the center of every V5 robot.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4">
              <img
                src="https://www.vexrobotics.com/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/2/7/276-4820_vex_v5controller_vex_catalog_render_rev_01.jpg"
                alt="VEX V5 Controller"
                loading="lazy"
                className="mx-auto max-h-48 rounded-md bg-white object-contain p-2"
              />
              <figcaption className="mt-2 text-center text-xs text-neutral-400">
                The V5 Controller — what your driver uses during Driver Control.
              </figcaption>
            </figure>
          </div>
          <p>
            <strong>Brain.</strong> A 4.25&quot; touchscreen computer with 21 Smart Ports
            that auto-detect whatever&apos;s plugged in, plus 8 legacy 3-wire ports. It
            runs your program, stores up to 8 at once, and shows live diagnostics for
            every connected device.
          </p>
          <p>
            <strong>Controller.</strong> Two joysticks, 12 buttons, a small feedback
            screen, and a battery good for 8–10 hours. Talks to the Brain wirelessly —
            no wires once paired.
          </p>
          <p>
            <strong>Motor, Battery &amp; Radio.</strong> The <strong>V5 Smart Motor
            (11W)</strong> spins your wheels/rollers/lift (more in the next module). The{" "}
            <strong>V5 Robot Battery</strong> (Li-Ion, 1100mAh) powers everything — motors
            perform identically whether it&apos;s fully charged or nearly dead. The{" "}
            <strong>V5 Robot Radio</strong> plugs into the Brain and handles all wireless
            communication: field control, Controller input, and code downloads.
          </p>
          <Callout>
            Label every Brain, Controller, Battery, and Radio with your team&apos;s kit
            name (e.g. &quot;Kit A&quot;). It sounds unnecessary until you&apos;re sharing
            parts between a competition bot and a practice bot and radios get mismatched.
          </Callout>
        </Module>

        <Module number="03" title="Structure, motion parts & shop safety">
          <p>
            The V5 metal system is a bolt-together kit of machinable aluminum. You don&apos;t
            need every part number memorized, but you do need to recognize these families:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-neutral-400">
                  <th className="py-2 pr-4">Category</th>
                  <th className="py-2 pr-4">What&apos;s in it</th>
                  <th className="py-2">Used for</th>
                </tr>
              </thead>
              <tbody className="text-neutral-300">
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4 font-semibold text-neutral-100">Structure</td>
                  <td className="py-2 pr-4">C-channel, U-channel, angles, flat plates, gussets, standoffs</td>
                  <td className="py-2">Chassis, arm/lift rails, mounting brackets</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4 font-semibold text-neutral-100">Motion</td>
                  <td className="py-2 pr-4">Shafts, bearings, wheels, high-strength gears, sprockets &amp; chain</td>
                  <td className="py-2">Anything that spins or slides</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-4 font-semibold text-neutral-100">Hardware</td>
                  <td className="py-2 pr-4">#8-32 screws, nylock nuts, standoffs, spacers, keys, washers</td>
                  <td className="py-2">Fastening everything together</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold text-neutral-100">Tools</td>
                  <td className="py-2 pr-4">3/32&quot; and 5/64&quot; hex keys, a driver handle, pliers</td>
                  <td className="py-2">Building and repairing the robot</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-md border-l-4 border-red-500 bg-red-500/10 px-4 py-3 text-sm">
            <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-red-400">
              ⚠ Pinch point safety
            </span>
            Before powering on a robot with an exposed drivetrain, intake, or lift, slowly
            hand-turn every wheel, sprocket, and gear once to make sure no wires, sleeves,
            hair, or fingers can get caught in the motion. This is the single most common
            way people get hurt on a robotics team — take it seriously every time.
          </div>

          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Go by hole spacing.</strong> Keep any run of spacing, gears, or wheels on a shaft within 0.5&quot; intervals to match the structure&apos;s hole spacing — it makes bracing everything else much easier later.</li>
            <li><strong>Always use bearing flats</strong> anywhere a shaft passes through structure — they keep it aligned and cut friction dramatically.</li>
            <li><strong>Never put metal on metal</strong> — a shaft collar or any metal part rubbing directly on a c-channel adds friction and wear. Separate them with a bearing flat, bushing, or spacer.</li>
          </ul>
        </Module>

        <Module number="04" title="V5 Smart Motor & gear cartridges">
          <p>
            The V5 Smart Motor puts out 11 continuous watts (2.1 Nm max torque) and has a
            built-in encoder, so it always reports its own position and speed. What makes
            it flexible is the <strong>swappable internal gear cartridge</strong>, visible
            through the clear window on the side:
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-3">
              <img
                src="https://www.vexrobotics.com/media/catalog/product/cache/0c40cc075c35680261029fa6d255feee/e/3/e33a8535_1.jpg"
                alt="36:1 gear cartridge, red"
                loading="lazy"
                className="mx-auto max-h-28 rounded-md bg-white object-contain p-1"
              />
              <figcaption className="mt-2 text-center text-xs text-neutral-400">
                <strong className="text-brand-gold-light">Red — 36:1 (100 RPM)</strong>
                <br />High torque, low speed. Arms &amp; heavy lifting.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-3">
              <img
                src="https://www.vexrobotics.com/media/catalog/product/cache/0c40cc075c35680261029fa6d255feee/e/3/e33a8537_1.jpg"
                alt="18:1 gear cartridge, green"
                loading="lazy"
                className="mx-auto max-h-28 rounded-md bg-white object-contain p-1"
              />
              <figcaption className="mt-2 text-center text-xs text-neutral-400">
                <strong className="text-brand-green-light">Green — 18:1 (200 RPM)</strong>
                <br />Balanced default. Great for drivetrains.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-3">
              <img
                src="https://www.vexrobotics.com/media/catalog/product/cache/0c40cc075c35680261029fa6d255feee/e/3/e33a8534_1.jpg"
                alt="6:1 gear cartridge, blue"
                loading="lazy"
                className="mx-auto max-h-28 rounded-md bg-white object-contain p-1"
              />
              <figcaption className="mt-2 text-center text-xs text-neutral-400">
                <strong>Blue — 6:1 (600 RPM)</strong>
                <br />Low torque, high speed. Intakes &amp; flywheels.
              </figcaption>
            </figure>
          </div>
          <p>
            Every motor ships with the green 18:1 cartridge installed. Swap it any time by
            popping off the clear cap — no tools beyond your fingers needed.
          </p>
          <DiagramFrame caption="Small input gear meshing with a larger output gear: gearing down like this trades speed for torque — the same tradeoff as picking a motor cartridge.">
            <svg viewBox="0 0 400 170" className="mx-auto w-full max-w-md" role="img" aria-label="Small input gear meshing with a larger output gear">
              <circle cx="110" cy="75" r="34" fill="none" stroke="#e8c96a" strokeWidth="10" strokeDasharray="7 5" />
              <circle cx="110" cy="75" r="24" fill="#0f3d22" stroke="white" strokeWidth="1.5" />
              <circle cx="110" cy="75" r="4" fill="white" />
              <text x="110" y="130" textAnchor="middle" fontSize="13" fill="white">Input</text>
              <text x="110" y="146" textAnchor="middle" fontSize="11" fill="#a3a3a3">(motor gear)</text>

              <defs>
                <marker id="arrow-gear" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="white" />
                </marker>
              </defs>
              <line x1="150" y1="75" x2="198" y2="75" stroke="white" strokeWidth="2" markerEnd="url(#arrow-gear)" />

              <circle cx="260" cy="75" r="54" fill="none" stroke="#3fc077" strokeWidth="10" strokeDasharray="7 5" />
              <circle cx="260" cy="75" r="42" fill="#0f3d22" stroke="white" strokeWidth="1.5" />
              <circle cx="260" cy="75" r="4" fill="white" />
              <text x="260" y="150" textAnchor="middle" fontSize="13" fill="white">Output</text>
              <text x="260" y="166" textAnchor="middle" fontSize="11" fill="#a3a3a3">(wheel / mechanism)</text>
            </svg>
            <div className="mt-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wide">
              <span className="text-brand-gold-light">&larr; More speed</span>
              <span className="text-brand-green-light">More torque &rarr;</span>
            </div>
          </DiagramFrame>
          <Callout>
            Override has a total drive-wattage limit for the drivetrain. Always check the
            current official Game Manual on vexrobotics.com for the exact legal motor
            count and wattage cap before finalizing your build — rules can update mid-season.
          </Callout>
          <LinkGrid
            resources={[
              {
                title: "Gear Ratio Calculator",
                url: "/tools",
                description: "Plug in your gears and wheel size — get speed/torque tradeoffs instantly.",
                tag: "Tool",
              },
            ]}
          />
        </Module>

        <Module number="05" title="Building a 4-motor drivetrain">
          <p>
            Your drivetrain is the single most important system on the robot. A{" "}
            <strong>4-motor drivetrain</strong> (vs. a beginner 2-motor Clawbot) adds real
            torque, speed, and pushing power — which matters in Override, where
            you&apos;ll be fighting for field position and the contested Midfield.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-neutral-400">
                  <th className="py-2 pr-3"></th>
                  <th className="py-2 pr-3">Standard (Tank)</th>
                  <th className="py-2 pr-3">H-Drive</th>
                  <th className="py-2 pr-3">Mecanum</th>
                  <th className="py-2">Holonomic (X-Drive)</th>
                </tr>
              </thead>
              <tbody className="text-neutral-300">
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-3 font-semibold text-neutral-100">Min. motors</td>
                  <td className="py-2 pr-3">2 (4 here)</td>
                  <td className="py-2 pr-3">3</td>
                  <td className="py-2 pr-3">4</td>
                  <td className="py-2">3–4</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-3 font-semibold text-neutral-100">Omni-directional?</td>
                  <td className="py-2 pr-3">No</td>
                  <td className="py-2 pr-3">Yes</td>
                  <td className="py-2 pr-3">Yes</td>
                  <td className="py-2">Yes</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-2 pr-3 font-semibold text-neutral-100">Programming</td>
                  <td className="py-2 pr-3">Basic</td>
                  <td className="py-2 pr-3">Intermediate</td>
                  <td className="py-2 pr-3">Advanced</td>
                  <td className="py-2">Advanced</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-semibold text-neutral-100">Resists pushing</td>
                  <td className="py-2 pr-3">Very good</td>
                  <td className="py-2 pr-3">Fair</td>
                  <td className="py-2 pr-3">Excellent</td>
                  <td className="py-2">Fair</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            For a first competitive robot, the <strong>Standard/Tank drivetrain with 4
            motors</strong> is the recommended start — simplest to build, simplest to
            program, and gives you the pushing power an Override field will demand.
          </p>
          <p>
            Choose between <strong>traction wheels</strong> (rubber tread, max grip, best
            for pushing/driving straight) and <strong>omni wheels</strong> (roll sideways
            with almost no friction, best for smooth turning). A common setup: 2 traction +
            2 omni, or all traction for maximum pushing power.
          </p>
          <div className="rounded-md border-l-4 border-amber-500 bg-amber-500/10 px-4 py-3 text-sm">
            <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-amber-400">
              Common mistake
            </span>
            Never power wheels of two different diameters with the exact same gearing on
            the same drivetrain — the larger wheel drags the robot faster than the smaller
            one can keep up, fighting itself and wearing out your drive.
          </div>
          <p className="font-semibold text-neutral-200">Build steps</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Cut and assemble your chassis rails — two long C-channels as left/right rails, connected by cross-braces front and back. Keep it square (measure diagonals to confirm).</li>
            <li>Mount four motors, two per side, to the outside or inside face of each rail. Keep left-side motors matched to each other, right-side matched to each other.</li>
            <li>Add drive shafts — run a shaft through bearing flats on the rail for each wheel position, four total.</li>
            <li>Connect motors to shafts with gears or sprocket-and-chain so each wheel spins true, on-axis, matched front-to-back.</li>
            <li>Mount wheels onto the four shafts, keeping all four at the exact same height off the ground.</li>
            <li>Wire the motors into four Smart Ports and note which ports you used — you&apos;ll need this exact list when configuring the Drivetrain in VEXcode.</li>
            <li>Spin-test by hand before powering on — confirm every wheel turns freely and nothing binds near wiring.</li>
          </ol>
          <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4">
            <img
              src="https://kb.vex.com/hc/article_attachments/45042584653972"
              alt="Mecanum wheel orientation diagram"
              loading="lazy"
              className="mx-auto max-h-64 rounded-md bg-white object-contain p-2"
            />
            <figcaption className="mt-2 text-center text-xs text-neutral-400">
              Official VEX diagram: correct roller direction for a mecanum-style drivetrain.
              Get this backwards and the robot won&apos;t strafe.
            </figcaption>
          </figure>
          <DiagramFrame caption="Top-down view: 4-motor Standard (Tank) drivetrain, 2 motors per side.">
            <svg viewBox="0 0 640 260" className="mx-auto w-full max-w-xl" role="img" aria-label="Top-down diagram of a 4-motor tank drivetrain">
              <rect x="120" y="40" width="400" height="180" rx="14" fill="#123f22" stroke="white" strokeWidth="2" />
              <rect x="150" y="20" width="60" height="220" fill="none" stroke="#a3a3a3" strokeWidth="1.5" strokeDasharray="4 3" />
              <rect x="430" y="20" width="60" height="220" fill="none" stroke="#a3a3a3" strokeWidth="1.5" strokeDasharray="4 3" />
              <rect x="95" y="55" width="30" height="55" rx="6" fill="white" />
              <rect x="95" y="150" width="30" height="55" rx="6" fill="white" />
              <rect x="515" y="55" width="30" height="55" rx="6" fill="white" />
              <rect x="515" y="150" width="30" height="55" rx="6" fill="white" />
              <circle cx="185" cy="80" r="16" fill="#d4af37" />
              <circle cx="185" cy="180" r="16" fill="#d4af37" />
              <circle cx="455" cy="80" r="16" fill="#d4af37" />
              <circle cx="455" cy="180" r="16" fill="#d4af37" />
              <text x="185" y="85" fontSize="11" fill="#0a0f0c" textAnchor="middle">M</text>
              <text x="185" y="185" fontSize="11" fill="#0a0f0c" textAnchor="middle">M</text>
              <text x="455" y="85" fontSize="11" fill="#0a0f0c" textAnchor="middle">M</text>
              <text x="455" y="185" fontSize="11" fill="#0a0f0c" textAnchor="middle">M</text>
              <text x="320" y="135" fontSize="15" fill="white" textAnchor="middle">V5 BRAIN + BATTERY</text>
              <text x="110" y="30" fontSize="13" fill="#a3a3a3" textAnchor="middle">Left Wheels</text>
              <text x="530" y="30" fontSize="13" fill="#a3a3a3" textAnchor="middle">Right Wheels</text>
            </svg>
          </DiagramFrame>
        </Module>

        <Module number="06" title="Building an intake mechanism">
          <p>
            Override rewards robots that pick up Pins and Cups quickly and reliably from
            both the field and the Loaders. An <strong>intake</strong> grabs game pieces
            and pulls them into the robot, usually as the first stage before a lift or
            conveyor carries them up to score.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Flex wheel roller intake</strong> — soft rubber &quot;flex wheels&quot; spun by a motor (usually the blue 6:1 cartridge) that grip and pull objects inward. The most common style for Pins and Cups.</li>
            <li><strong>Flap/claw intake</strong> — rigid or semi-flexible flaps that scoop and trap a piece against a backstop.</li>
            <li><strong>Multi-stage intake</strong> — a first roller stage that gathers pieces, followed by a second stage that reorients or holds the piece for scoring. VEX&apos;s own Override guidance specifically calls out grabbing Pins and Cups simultaneously without jamming as a core skill this season.</li>
          </ul>
          <p className="font-semibold text-neutral-200">Build steps — basic roller intake</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Frame it out from C-channel or angle, attached to the front of your chassis, low enough to meet Pins and Cups on the field.</li>
            <li>Mount a shaft across the front opening, supported by bearings on each side.</li>
            <li>Add flex wheels (or rubber-banded traction wheels) along the shaft, spaced to contact incoming pieces.</li>
            <li>Power it with one motor, geared with the blue 6:1 cartridge for speed, connected via gear or sprocket-chain.</li>
            <li>Add a backstop or holding chamber just behind the rollers so pieces don&apos;t get spit out the back.</li>
            <li>Test with an actual game piece at slow speed first, watching for jams before running full speed.</li>
          </ol>
          <DiagramFrame caption="Side view: flex-wheel roller intake pulling a game piece inward. The motor spins one roller; the second can be idle or geared to spin opposite.">
            <svg viewBox="0 0 560 220" className="mx-auto w-full max-w-lg" role="img" aria-label="Side view diagram of a flex wheel roller intake">
              <rect x="40" y="120" width="480" height="70" fill="#123f22" stroke="white" strokeWidth="2" rx="8" />
              <circle cx="120" cy="120" r="26" fill="#0a0f0c" stroke="#d4af37" strokeWidth="4" strokeDasharray="6 4" />
              <circle cx="200" cy="120" r="26" fill="#0a0f0c" stroke="#d4af37" strokeWidth="4" strokeDasharray="6 4" />
              <circle cx="150" cy="80" r="14" fill="#3fc077" />
              <text x="150" y="84" fontSize="10" fill="#0a0f0c" textAnchor="middle">M</text>
              <ellipse cx="30" cy="115" rx="14" ry="14" fill="#e8c96a" />
              <text x="30" y="119" fontSize="10" fill="#0a0f0c" textAnchor="middle">Pin</text>
              <path d="M55 115 L95 115" stroke="white" strokeWidth="2" markerEnd="url(#arrow-intake)" />
              <defs>
                <marker id="arrow-intake" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="white" />
                </marker>
              </defs>
            </svg>
          </DiagramFrame>
          <Callout>
            Build your intake removable (a few screws, not permanently riveted) — you will
            redesign it more than any other part of the robot as you learn what actually
            grips Pins and Cups reliably.
          </Callout>
        </Module>

        <Module number="07" title="Building a cascade lift mechanism">
          <p>
            Once your intake has a game piece, you need to get it up to a Goal — including
            the Tall Goal, well above where a simple arm can reach. A{" "}
            <strong>cascade lift</strong> (chain lift) is the standard high-reaching VEX
            mechanism for exactly this job.
          </p>
          <p>
            Per VEX&apos;s own build guidance: chain lifts are nearly always assembled as{" "}
            <em>pairs</em>, to equalize forces. They&apos;re built by nesting pairs of
            C-channel together, attaching one set to the chassis with a sprocket-and-chain
            system running between the pair. The next pair attaches to that chain/sprocket
            system — as the motor spins it, the second pair slides up along the first.
            Repeat in additional &quot;stages&quot; to reach extreme heights, which is
            where the name <strong>cascade</strong> comes from: each stage cascades up
            past the one below it, like a waterfall in reverse.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4">
              <img
                src="https://kb.vex.com/hc/article_attachments/45013531385364"
                alt="Tall V5 chain (cascade) lift"
                loading="lazy"
                className="mx-auto max-h-56 rounded-md bg-white object-contain p-2"
              />
              <figcaption className="mt-2 text-center text-xs text-neutral-400">
                A tall V5 chain/cascade lift — paired, nested C-channels with a
                sprocket-and-chain drive.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4">
              <img
                src="https://kb.vex.com/hc/article_attachments/45013531383060"
                alt="Scissor lift diagram"
                loading="lazy"
                className="mx-auto max-h-56 rounded-md bg-white object-contain p-2"
              />
              <figcaption className="mt-2 text-center text-xs text-neutral-400">
                For comparison — a scissor lift, another common high-reaching mechanism.
              </figcaption>
            </figure>
          </div>
          <p className="font-semibold text-neutral-200">Build steps — two-stage cascade lift</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Build the base stage — a pair of long C-channels, nested so a second, narrower channel can slide inside, mounted vertically on both sides for stability.</li>
            <li>Add spacers between the nested channels so the moving stage slides smoothly without excessive wobble.</li>
            <li>Mount a sprocket at the top and bottom of the base stage, and run a loop of chain between them.</li>
            <li>Attach the second-stage C-channel to that chain so it travels up and down as the chain moves.</li>
            <li>Repeat for additional stages if you need more height for the Tall Goal.</li>
            <li>Power it with one or two motors geared toward torque (consider red 36:1, or an external gear reduction) — lifting against gravity needs real strength.</li>
            <li>Attach your scoring mechanism (claw, tray, or intake exit) to the top stage.</li>
            <li>Test empty first, then with a game piece, watching that the lift doesn&apos;t rack (twist sideways) as it rises — the #1 reliability problem, and why mirroring left/right matters so much.</li>
          </ol>
          <DiagramFrame caption="Simplified side view of a two-stage cascade lift. Each extra stage adds height but also weight and complexity — start with two stages, add more only if needed.">
            <svg viewBox="0 0 420 320" className="mx-auto w-full max-w-sm" role="img" aria-label="Side view diagram of a two-stage cascade lift">
              <rect x="60" y="240" width="300" height="40" fill="white" rx="6" />
              <text x="210" y="265" fontSize="13" fill="#0a0f0c" textAnchor="middle">Chassis</text>
              <rect x="90" y="60" width="24" height="190" fill="#a3a3a3" rx="4" />
              <rect x="306" y="60" width="24" height="190" fill="#a3a3a3" rx="4" />
              <rect x="100" y="20" width="24" height="190" fill="#3fc077" rx="4" opacity="0.9" />
              <rect x="296" y="20" width="24" height="190" fill="#3fc077" rx="4" opacity="0.9" />
              <circle cx="112" cy="65" r="9" fill="#0a0f0c" stroke="white" strokeWidth="1.5" />
              <circle cx="112" cy="245" r="9" fill="#0a0f0c" stroke="white" strokeWidth="1.5" />
              <circle cx="308" cy="65" r="9" fill="#0a0f0c" stroke="white" strokeWidth="1.5" />
              <circle cx="308" cy="245" r="9" fill="#0a0f0c" stroke="white" strokeWidth="1.5" />
              <line x1="112" y1="65" x2="112" y2="245" stroke="#e8c96a" strokeWidth="3" strokeDasharray="5 4" />
              <line x1="308" y1="65" x2="308" y2="245" stroke="#e8c96a" strokeWidth="3" strokeDasharray="5 4" />
              <rect x="90" y="10" width="240" height="16" fill="#d4af37" rx="4" />
              <text x="210" y="308" fontSize="12" fill="#a3a3a3" textAnchor="middle">Green (stage 2) rides up along the base stage on chain</text>
            </svg>
          </DiagramFrame>
          <div className="rounded-md border-l-4 border-amber-500 bg-amber-500/10 px-4 py-3 text-sm">
            <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-amber-400">
              Reliability note
            </span>
            Cascade lifts are powerful but unforgiving of sloppy building. Loose spacers,
            an un-tensioned chain, or a left/right side that isn&apos;t perfectly mirrored
            will cause the lift to bind or rack under load. Budget real practice time for
            tuning, not just building.
          </div>
        </Module>

        <Module number="08" title="Putting the whole robot together">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Confirm your chassis footprint and weight stay legal for the current Override size/weight rules in the official Game Manual.</li>
            <li>Double-check every Smart Port assignment and write it down — you&apos;ll need this exact list to configure your Drivetrain, Intake, and Lift devices in VEXcode.</li>
            <li>Route and zip-tie all wiring away from moving parts — chain, sprockets, and gears will happily eat a loose wire.</li>
            <li>Balance the center of gravity — a tall cascade lift raises your center of mass, so keep the chassis and drivetrain as low and wide as your design allows.</li>
            <li>Run a full pre-match checklist before every test: battery charged, all screws tight, radio paired, program downloaded.</li>
          </ol>
        </Module>

        <Module number="09" title="Full parts & shopping list">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-brand-gold-light">Electronics</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                <li>1× V5 Robot Brain</li>
                <li>1× V5 Controller</li>
                <li>1× V5 Robot Radio</li>
                <li>1–2× V5 Robot Battery + charger</li>
                <li>8–10× V5 Smart Motor (11W) — 4 drivetrain, 1–2 intake, 1–2 lift, plus spares</li>
                <li>Extra red/green/blue gear cartridges</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-brand-gold-light">Structure</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                <li>C-channel and U-channel (various lengths)</li>
                <li>Flat plates, angles, and gussets</li>
                <li>Standoffs and spacers</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-brand-gold-light">Motion</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                <li>4× traction and/or omni wheels (drivetrain)</li>
                <li>Flex wheels or rubber-banded rollers (intake)</li>
                <li>High-strength shafts, bearings/bearing flats</li>
                <li>Gears (12T/36T/60T/84T) and/or sprockets + chain</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-brand-gold-light">Hardware & tools</p>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-sm">
                <li>#8-32 screws (assorted) and nylock nuts</li>
                <li>3/32&quot; and 5/64&quot; hex keys, driver handle</li>
                <li>Zip ties, rubber bands (#32), thread locker (optional)</li>
              </ul>
            </div>
          </div>
        </Module>

        <Module number="10" title="Beginner build habits">
          <ul className="list-disc space-y-2 pl-5">
            <li>Build a rough prototype that just works first, then refine it on the actual robot — don&apos;t try to perfect a mechanism before you&apos;ve seen it move.</li>
            <li>Be creative — there&apos;s never one correct answer to a mechanism problem. Look at how other teams solved it, then adapt, don&apos;t just copy.</li>
            <li>Place heavy components (battery, Brain) low and central for a better center of gravity.</li>
            <li>Keep your drivetrain as slim as possible — every extra inch of width eats into room you need for other mechanisms.</li>
            <li>Don&apos;t just trust CAD — build and test the real thing. CAD catches collisions, it doesn&apos;t catch real-world friction and flex.</li>
            <li>Everything on a shaft inside your drivetrain should be able to wiggle very slightly along the axle — dead-tight spacing binds and adds friction.</li>
          </ul>
          <LinkGrid
            resources={[
              {
                title: "Library",
                url: "/library",
                description: "Every term from this course (chassis, gear cartridge, pinch point, and more) with a picture.",
                tag: "Tool",
              },
            ]}
          />
        </Module>
      </div>
      </CourseProgressProvider>
    </SafetyGate>
  );
}
