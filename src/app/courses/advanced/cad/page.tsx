import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";

export default function AdvancedCadCoursePage() {
  return (
    <div>
      <PageHero
        eyebrow="Advanced Course · CAD"
        title="Modeling a robot you can actually build"
        description="Past the basics of dropping VEX parts into a document — designing assemblies that translate cleanly into the real, physical bracing and joints you'll build with metal."
      />

      <Module number="01" title="Assemblies and mate strategy">
        <p>
          Build subassemblies for each mechanism (drivetrain, lift, intake) instead of one
          giant flat assembly — it&apos;s far easier to isolate a collision or a bad mate
          when each mechanism is its own document you insert into a master assembly.
          Constrain shafts with concentric + a single distance mate rather than fully
          defining every part, so the mechanism can still animate and you can catch
          interference by dragging it through its range of motion.
        </p>
      </Module>

      <Module number="02" title="Design for the bracing you'll actually build">
        <p>
          If a mechanism needs boxing, standoff bracing, or a screw joint in real life,
          model it that way — a CAD assembly that&apos;s only held together by invisible
          mates will look fine on screen and fall apart the moment you build it. Add the
          actual spacers, standoffs, and shoulder screws you plan to use so the model tells
          you if something doesn&apos;t physically fit before you buy or cut anything.
        </p>
        <LinkGrid
          resources={[
            {
              title: "Advanced Course · Building",
              url: "/courses/advanced/building",
              description: "The bracing and joint techniques your CAD should reflect.",
              tag: "Tool",
            },
          ]}
        />
      </Module>

      <Module number="03" title="CAD catches collisions, not friction">
        <p>
          Use CAD to verify clearances, range of motion, and that your gear ratio math is
          right before cutting metal — that&apos;s what it&apos;s good at. It won&apos;t tell
          you a joint has too much friction, that a c-channel flexes under real load, or
          that a wire routing is impossible to reach. Build the mechanism for real before
          calling the design final.
        </p>
      </Module>

      <Module number="04" title="Version history & team collaboration">
        <p>
          Onshape tracks every edit automatically, but for a whole team working in one
          document, name meaningful versions (e.g. &quot;pre-Worlds lift redesign&quot;)
          so you can roll back to a known-good state instead of hunting through raw edit
          history. Use branches when someone wants to try a risky redesign without touching
          the version everyone else is actively building from.
        </p>
      </Module>
    </div>
  );
}
