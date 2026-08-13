import PageHero from "@/components/PageHero";
import SafetyQuiz from "@/components/SafetyQuiz";

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border-l-4 border-brand-gold bg-brand-gold/10 px-4 py-3 text-sm">
      {children}
    </div>
  );
}

function SafetySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
        {children}
      </div>
    </section>
  );
}

export default function SafetyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Electronics Care & Lab Safety"
        title="Know this before you touch a robot"
        description="A short overview of electronics care and shop/tool safety, pulled from real team check-in notes and camp material. Read it, then take the quiz below — 70% or higher unlocks the rest of the site."
      />

      <SafetySection title="Wiring & battery care">
        <ul className="list-disc space-y-2 pl-5">
          <li>Keep batteries, Brains, and cables cleanly wired — no exposed or loose wires that can tangle with other robots or your own mechanism.</li>
          <li>Secure smart cables so they can&apos;t pull out of a motor during a match.</li>
          <li>No sharp bends in battery cables or wires, especially near the connector — twisting a cable to force a connection will eventually break it.</li>
          <li>Mount the Brain and battery in a protected interior location where they can&apos;t be damaged or have wires pulled out by contact with another robot. Use the Brain cover during matches.</li>
        </ul>
        <Callout>
          If you see loose or exposed copper strands near the end of a battery cable, stop using it
          and ask for a replacement immediately — don&apos;t wait for it to fail mid-match.
        </Callout>
        <p>
          Stock VEX battery clips aren&apos;t very secure on their own. In a physical game, don&apos;t rely
          on the clip alone — build in some redundancy to keep the battery seated.
        </p>
      </SafetySection>

      <SafetySection title="Motor care">
        <p>Most motor failures trace back to one of a few preventable causes:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Metal shavings</strong> getting into the Brain or motor ports during shop work.
            Never bring a robot into the metal-working area with electronics still attached —
            remove them first or fully cover every port.
          </li>
          <li>
            <strong>Bad cartridge installation.</strong> If the motor cap doesn&apos;t close cleanly, the
            cartridge is in backwards — forcing it will break the cartridge or the internal gear.
            Always reinstall all 4 cap screws; missing screws create slop that wears the cartridge out.
          </li>
          <li>
            <strong>Hot-swapping motors carelessly.</strong> Get approval and demonstrate the skill
            before hot-swapping — done wrong, it damages the motor. (Not allowed at all for younger/
            middle-school builders; all 4 cap screws must be installed.)
          </li>
          <li>Bad or cut wires create shorts — inspect wires and ports carefully after any motor failure to find the root cause.</li>
        </ul>
      </SafetySection>

      <SafetySection title="Controller & pneumatics care">
        <ul className="list-disc space-y-2 pl-5">
          <li>Teams get one joystick controller per season — store it in its box or a suitable container, never loose in a team bin.</li>
          <li>Debris or breakage from misuse means paying for a replacement, so keep controllers protected.</li>
        </ul>
        <Callout>
          Never plug a motor &quot;smart cable&quot; into the center VEXNet port — it will fry the
          controller. Smart cables always go in the outer ports.
        </Callout>
        <ul className="list-disc space-y-2 pl-5">
          <li>Pneumatic cylinders (pistons) are not disposable — add structural support (like a passive lock) so the rod can&apos;t bend on impact.</li>
          <li>Pneumatic wiring is fragile — wrap and secure it away from wheels, gears, and hinge points.</li>
        </ul>
      </SafetySection>

      <SafetySection title="Lab & tool safety rules">
        <ul className="list-disc space-y-2 pl-5">
          <li>No running in the shop, and keep your hands to yourself.</li>
          <li>No food or drinks near robots or electronics.</li>
          <li>Ask an instructor or lead before stepping away for a break.</li>
          <li>Don&apos;t wave tools or parts around, and never throw anything.</li>
          <li>Watch out for pointy tools (screwdrivers, standoffs, cut metal edges).</li>
          <li>Never work on a robot while it&apos;s powered on.</li>
          <li>Never attempt to cut plastic or metal yourself — that&apos;s an instructor/adult task.</li>
        </ul>
      </SafetySection>

      <SafetySection title="Basic tool reference">
        <p>
          Full descriptions of every part and tool live in the{" "}
          <a href="/glossary" className="font-medium text-brand-green hover:underline dark:text-brand-green-light">
            glossary
          </a>
          . The core hand tools you&apos;ll use constantly:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>T8 / T15 screwdriver</strong> — the two Torx sizes used on almost every VEX screw; T8 for smaller screws, T15 for standoffs and larger hardware.</li>
          <li><strong>Nut driver</strong> — turns keps nuts without stripping them.</li>
          <li><strong>Standoff driver</strong> — seats and removes standoffs cleanly.</li>
          <li><strong>Wrench</strong> — holds a nut steady while you drive the screw from the other side.</li>
        </ul>
      </SafetySection>

      <section className="mt-16 border-t border-black/10 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-extrabold tracking-tight">Safety quiz</h2>
        <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
          Score {"≥"}70% (7 of 10) to unlock every other page on this site. You can retake it as many
          times as you need.
        </p>
        <div className="mt-6">
          <SafetyQuiz />
        </div>
      </section>
    </div>
  );
}
