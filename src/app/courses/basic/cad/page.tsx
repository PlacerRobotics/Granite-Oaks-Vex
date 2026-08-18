import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";

import CourseProgressProvider from "@/components/progress/CourseProgressProvider";
import { getCourseProgress } from "@/lib/progress";

export default async function BasicCadCoursePage() {
  const { userId, completedModules } = await getCourseProgress("basic-cad");

  return (
    <CourseProgressProvider
      courseSlug="basic-cad"
      initialUserId={userId}
      initialCompleted={completedModules}
    >
    <div>
      <PageHero
        eyebrow="Basic Course · CAD"
        title="Designing your robot digitally"
        description="CAD lets you prototype mechanisms, catch collisions, and produce notebook-ready renders before you cut a single piece of metal. Onshape is what almost every VEX team uses — it's free, browser-based, and has an official VEX parts library."
      />

      <Module number="01" title="Why CAD">
        <p>
          CAD isn&apos;t required to compete, but it saves you from building the same
          mechanism three times in metal. Use it to test whether parts collide, whether a
          lift reaches full height, and to plan gear ratios before committing real hardware.
        </p>
      </Module>

      <Module number="02" title="Onshape (recommended)">
        <p>
          Free for students and educators, runs in the browser, and is built for team
          collaboration in real time — everyone can be in the same document at once.
        </p>
        <LinkGrid
          resources={[
            {
              title: "Onshape Student Resources",
              url: "https://www.onshape.com/en/education/student-resources",
              description: "Free account signup and getting-started material for students.",
              tag: "Official",
            },
            {
              title: "Using Onshape to Design a VEX Robot in the Cloud",
              url: "https://learn.onshape.com/courses/using-onshape-to-design-a-vex-robot-in-the-cloud",
              description: "Full course: navigating Onshape, building assemblies, and collaborating as a team.",
              tag: "Docs",
            },
          ]}
        />
      </Module>

      <Module number="03" title="VEX parts libraries">
        <p>
          Onshape&apos;s official VEX IQ and V5 parts libraries have every legal part
          pre-modeled and ready to drop into an assembly — use them instead of modeling
          your own screws and c-channels from scratch.
        </p>
        <LinkGrid
          resources={[
            {
              title: "VEX IQ & V5 Parts Libraries (Onshape)",
              url: "https://www.onshape.com/en/blog/vex-iq-vex-v5-parts-libraries",
              description: "Official, up-to-date VEX part libraries you can drop straight into assemblies.",
              tag: "Official",
            },
            {
              title: "Designing a VEX V5 Robot with Onshape",
              url: "https://www.onshape.com/en/blog/vex-v5-robot-onshape",
              description: "Walkthrough blog post on modeling a V5 robot end to end.",
              tag: "Docs",
            },
          ]}
        />
      </Module>

      <Module number="04" title="CAD and judging">
        <p>
          A well-documented CAD process (screenshots, iteration history, exploded views) is
          one of the easiest ways to strengthen your engineering notebook and Design Award
          case — judges want to see how a design evolved, not just the final version.
        </p>
        <LinkGrid
          resources={[
            {
              title: "Basic Course · Notebooking",
              url: "/courses/basic/notebooking",
              description: "How to actually document your CAD iterations, not just the final design.",
              tag: "Tool",
            },
          ]}
        />
      </Module>
    </div>
    </CourseProgressProvider>
  );
}
