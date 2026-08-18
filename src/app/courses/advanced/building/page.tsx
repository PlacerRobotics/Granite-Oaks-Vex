import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import Callout from "@/components/Callout";
import DiagramFrame from "@/components/DiagramFrame";

import CourseProgressProvider from "@/components/progress/CourseProgressProvider";
import { getCourseProgress } from "@/lib/progress";

export default async function AdvancedBuildingCoursePage() {
  const { userId, completedModules } = await getCourseProgress("advanced-building");

  return (
    <CourseProgressProvider
      courseSlug="advanced-building"
      initialUserId={userId}
      initialCompleted={completedModules}
    >
    <div>
      <PageHero
        eyebrow="Advanced Course · Building"
        title="Bracing, joints, and friction control that actually hold up"
        description="Once your basic drivetrain and mechanisms work, this is what separates a robot that survives eliminations from one that doesn't. Pulled from a team mechanical guide plus season build notes."
      />

      <Module number="01" title="Boxing">
        <p>
          Boxing prevents a c-channel from bending under load — critical anywhere a
          c-channel is under stress (drivetrain rails, lift towers, key connection points).
        </p>
        <DiagramFrame caption="Spacer boxing (left) vs. coupler gusset boxing (right) — both stop the flanges from bending inward or outward.">
          <svg viewBox="0 0 400 160" className="mx-auto w-full max-w-lg" role="img" aria-label="Two methods of boxing a c-channel">
            <path d="M40,20 L40,140 M120,20 L120,140 M40,140 L120,140" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
            <rect x="72" y="70" width="16" height="20" fill="#0f3d22" stroke="#e8c96a" strokeWidth="2" />
            <line x1="40" y1="80" x2="120" y2="80" stroke="#e8c96a" strokeWidth="3" />
            <text x="80" y="155" textAnchor="middle" fontSize="12" fill="white">Spacer + screw</text>

            <path d="M280,20 L280,140 M360,20 L360,140 M280,140 L360,140" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" />
            <rect x="284" y="65" width="72" height="30" rx="4" fill="#123f22" stroke="#3fc077" strokeWidth="3" />
            <text x="320" y="155" textAnchor="middle" fontSize="12" fill="white">Coupler gusset</text>
          </svg>
        </DiagramFrame>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Spacer boxing.</strong> Fit 7/8&quot; worth of spacers between the two
            sides of the c-channel and run a screw through it, secured on the other end with
            a nut or standoff. This makes it physically impossible for the sides to bend in
            or out.
          </li>
          <li>
            <strong>Coupler gusset boxing.</strong> A coupler gusset is exactly 7/8&quot; and
            drops inside the c-channel the same way. It supports 3 holes instead of 1, but
            it&apos;s harder to fit into tight spots than loose spacers.
          </li>
        </ul>
      </Module>

      <Module number="02" title="Standoff bracing">
        <p>
          A lighter, more versatile alternative to c-channel bracing. Use it whenever you
          need to stop something moving in one specific direction — supporting a vertical
          c-channel, bracing a c-channel that only connects in one direction, mounting
          polycarbonate, or mounting pistons.
        </p>
        <DiagramFrame caption="Shaft collar → coupler → standoff → coupler → shaft collar.">
          <svg viewBox="0 0 440 100" className="mx-auto w-full max-w-xl" role="img" aria-label="Standoff brace assembly sequence">
            <line x1="20" y1="40" x2="420" y2="40" stroke="white" strokeWidth="3" />
            <circle cx="30" cy="40" r="16" fill="none" stroke="#e8c96a" strokeWidth="6" />
            <rect x="70" y="30" width="30" height="20" fill="#3fc077" rx="3" />
            <rect x="130" y="26" width="180" height="28" fill="#0f3d22" stroke="white" strokeWidth="2" rx="3" />
            <rect x="340" y="30" width="30" height="20" fill="#3fc077" rx="3" />
            <circle cx="410" cy="40" r="16" fill="none" stroke="#e8c96a" strokeWidth="6" />

            <text x="30" y="80" textAnchor="middle" fontSize="10" fill="white">Shaft collar</text>
            <text x="85" y="80" textAnchor="middle" fontSize="10" fill="white">Coupler</text>
            <text x="220" y="80" textAnchor="middle" fontSize="10" fill="white">Standoff</text>
            <text x="355" y="80" textAnchor="middle" fontSize="10" fill="white">Coupler</text>
            <text x="410" y="80" textAnchor="middle" fontSize="10" fill="white">Shaft collar</text>
          </svg>
        </DiagramFrame>
        <p>
          Attach shaft collars to either end of a standoff, mount shaft collars at the start
          and end points of the brace, then run a screw through each shaft collar/coupler
          pair to lock it together.
        </p>
        <p className="font-semibold text-neutral-200">Common mistakes</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Not leaving correct spacing between the shaft collar and standoff (use spacers around the coupler).</li>
          <li>No spacing at all between shaft collar and coupler — the assembly comes loose.</li>
          <li>Using too many standoff braces. They&apos;re not always necessary, and overusing them adds weight without adding structure — you still need traditional c-channel bracing underneath.</li>
        </ul>
      </Module>

      <Module number="03" title="Screw joints">
        <p>
          Screw joints build strong, low-friction pivots — drivetrains, lift pivots, and
          anything mounted where a shaft isn&apos;t the right tool (idle gears, drive wheels,
          any unpowered pivot). They&apos;re stronger, have less slop, and have less friction
          than an equivalent shaft.
        </p>
        <p>
          Pick a screw long enough to bridge the gap you&apos;re joining. Tighten it all the
          way down to one c-channel so it can&apos;t move, slide on whatever you&apos;re
          mounting (wheel, c-channel, idle gear), then cap it with a second screw — snug
          enough that nothing slides side to side, loose enough that it still spins freely.
        </p>
        <DiagramFrame caption="Screw tightened to the left c-channel; wheel/gear spins freely on the shank; capped snug on the right so it can't slide but still spins.">
          <svg viewBox="0 0 400 140" className="mx-auto w-full max-w-lg" role="img" aria-label="Screw joint cross-section">
            <rect x="20" y="20" width="14" height="100" fill="white" />
            <circle cx="34" cy="70" r="6" fill="#a3a3a3" />
            <line x1="34" y1="70" x2="330" y2="70" stroke="#e8c96a" strokeWidth="6" />
            <circle cx="220" cy="70" r="38" fill="#0f3d22" stroke="#3fc077" strokeWidth="8" />
            <rect x="330" y="55" width="14" height="30" fill="#a3a3a3" rx="2" />
            <text x="27" y="135" textAnchor="middle" fontSize="10" fill="white">Tight (fixed)</text>
            <text x="220" y="125" textAnchor="middle" fontSize="10" fill="white">Spins freely</text>
            <text x="337" y="135" textAnchor="middle" fontSize="10" fill="white">Snug (capped)</text>
          </svg>
        </DiagramFrame>
        <p className="font-semibold text-neutral-200">Common mistakes</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Spacing it too tight — parts need roughly 1/16&ndash;1/32&quot; of wiggle room for low friction.</li>
          <li>Not tightening the first screw all the way to the c-channel, which turns it into a high-friction shaft instead of a proper joint.</li>
          <li>Relying on screw joints alone for drive structure — you still need at least 2 full-length cross braces.</li>
        </ul>
        <Callout>Use screw joints for your drivetrain wheels instead of shafts wherever the wheel isn&apos;t directly driven by a motor — less slop, less friction, more durable.</Callout>
      </Module>

      <Module number="04" title="C-channel bracing & shoulder screws">
        <p>
          The most common brace and the easiest to get wrong. Brace incorrectly and your
          structure ends up misaligned, which shows up as friction everywhere.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Measure constantly — brace with the correct-length c-channel and correct spacing so you&apos;re not accidentally bending what you&apos;re trying to brace.</li>
          <li>Use shoulder screws when connecting two c-channels flat-side to flat-side — the small shoulder fits the square c-channel holes better and shifts less than a standard screw.</li>
          <li>If you&apos;re boxing c-channels together you can&apos;t use shoulder screws that align both channels, but Robosource screws (common in most labs) have a small built-in shoulder that helps.</li>
        </ul>
        <DiagramFrame caption="A shoulder screw (right) has a smooth, precisely-sized section that fits the c-channel hole tighter than a standard screw's threads (left).">
          <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-sm" role="img" aria-label="Standard screw vs shoulder screw profile">
            <rect x="70" y="10" width="30" height="14" fill="white" rx="2" />
            <rect x="78" y="24" width="14" height="110" fill="none" stroke="#e8c96a" strokeWidth="3" strokeDasharray="3 3" />
            <text x="85" y="150" textAnchor="middle" fontSize="11" fill="white">Standard</text>

            <rect x="200" y="10" width="30" height="14" fill="white" rx="2" />
            <rect x="205" y="24" width="20" height="50" fill="#3fc077" rx="2" />
            <rect x="209" y="74" width="12" height="60" fill="none" stroke="#e8c96a" strokeWidth="3" strokeDasharray="3 3" />
            <text x="215" y="150" textAnchor="middle" fontSize="11" fill="white">Shoulder</text>
          </svg>
        </DiagramFrame>
      </Module>

      <Module number="05" title="Bearing flats & friction control">
        <p>
          Bearing flats support and stabilize rotating shafts while minimizing friction and
          wear. Without them, shafts wobble, grind against metal, and eventually cause
          structural damage.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Line the bearing flat&apos;s center hole up with the hole in the structure, fasten with 3 screws, and make sure it sits flush so it can&apos;t wobble.</li>
          <li>Go by hole spacing — keep any run of spacing/gears/wheels on a shaft within 0.5&quot; intervals to match the structure&apos;s hole spacing.</li>
          <li>Never put metal on metal — a shaft collar or any metal part rubbing directly on a c-channel adds friction and wear. Always separate them with a bearing flat, bushing, or spacer.</li>
          <li>For friction on intakes specifically: use low-strength axles, brass inserts, and high-strength pillow bearings — put the brass inserts inside the pillow bearings.</li>
          <li>Use high-strength axles for longer spans or heavier load; low-strength axles are fine for shorter spans with less load.</li>
          <li>For drivetrain wheel friction, McMaster-Carr spacers run truer than stacking multiple VEX spacers.</li>
        </ul>
      </Module>

      <Module number="06" title="Pro build habits">
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Drive caps</strong> hold drivetrain wheels/gears onto a shaft without a separate shaft collar — official VEX capped-shaft hardware, worth using to save a step and some weight.</li>
          <li><strong>Thinner nylocks</strong> save weight over standard ones in places that don&apos;t need the extra thread engagement.</li>
          <li>Use forceps to seat nylocks in tight spaces you can&apos;t get your fingers into.</li>
          <li>Take the cap off a motor before hot-swapping it — with proper approval and technique, this speeds up mid-build motor swaps without damaging the cartridge.</li>
          <li>Every robot needs at least 1 full-length cross brace plus 1 inner cross brace at minimum — don&apos;t skip structural bracing to save weight.</li>
          <li><strong>Never run a 1x3x1 cross brace in the back of the robot</strong> — that specific configuration bends under match contact.</li>
          <li>Limit shaft collars where you can — they add up in weight fast across a whole robot.</li>
          <li>Keep the drivetrain as slim as possible to leave more room for everything else you need to build.</li>
          <li>When wiring, zip-tie wires and tubes down so they&apos;re out of the way, and cut them to the length you actually need — not a coil of slack.</li>
          <li>Cut pneumatic tubing straight, never on a slant — angled cuts leak air at the fitting.</li>
          <li>If a pneumatic solenoid is leaking: tighten the valves first. If that doesn&apos;t fix it, check the screws on the solenoid — those work loose over time too.</li>
        </ul>
      </Module>
    </div>
    </CourseProgressProvider>
  );
}
