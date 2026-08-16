import PageHero from "@/components/PageHero";
import Module from "@/components/Module";
import LinkGrid from "@/components/LinkGrid";

export default function BasicCodingCoursePage() {
  return (
    <div>
      <PageHero
        eyebrow="Basic Course · Coding"
        title="VEXcode, PROS, and your first autonomous"
        description="Two main environments: VEXcode (official, Blocks/Python/C++, easiest to start with) and PROS (community-built, C++ only, more powerful/flexible). Most competitive V5 teams eventually move to PROS or the VEXcode VS Code extension — the Advanced Coding course covers that transition."
      />

      <Module number="01" title="VEXcode (official, start here)">
        <p>
          VEXcode is where almost every team writes their first lines of robot code. It
          supports Blocks, Python, and C++ in the same app, so you can start visual and
          move to text when you&apos;re ready.
        </p>
        <LinkGrid
          resources={[
            {
              title: "VEXcode",
              url: "https://www.vexrobotics.com/vexcode",
              description: "Official IDE for Blocks, Python, and C++ across VEX platforms.",
              tag: "Official",
            },
            {
              title: "Get Started Coding — VEX Library",
              url: "https://kb.vex.com/hc/en-us/articles/8780205244308-Get-Started-Coding",
              description: "Official walkthrough for writing and downloading your first project.",
              tag: "Official",
            },
            {
              title: "VEXcode API Reference (api.vex.com)",
              url: "https://api.vex.com/",
              description: "Full command reference across Blocks, Python, and C++ for every platform.",
              tag: "Docs",
            },
            {
              title: "Virtual Skills (vrskills.vex.com)",
              url: "https://vrskills.vex.com/",
              description: "Practice writing and testing autonomous code without a physical robot.",
              tag: "Official",
            },
          ]}
        />
      </Module>

      <Module number="02" title="Writing your first autonomous">
        <p>
          Autonomous code runs for the first 15 seconds of a match with no driver input.
          Start simple: drive forward a set distance, turn, drive again. Get one reliable
          move working before chaining several together.
        </p>
        <LinkGrid
          resources={[
            {
              title: "\"VEX autonomous programming for beginners\" — YouTube search",
              url: "https://www.youtube.com/results?search_query=vex+autonomous+programming+for+beginners",
              description: "Walkthroughs of writing a first simple autonomous routine.",
              tag: "Video",
            },
          ]}
        />
      </Module>

      <Module number="03" title="GitHub libraries (know they exist)">
        <p>
          Once you&apos;re comfortable, competitive teams lean on community libraries that
          handle PID and odometry math so you&apos;re not writing it from scratch. You don&apos;t
          need these on day one — bookmark them for when you outgrow basic movement commands.
        </p>
        <LinkGrid
          resources={[
            {
              title: "LemLib/LemLib",
              url: "https://github.com/LemLib/LemLib",
              description: "Popular PROS template with PID, odometry, and pure pursuit motion.",
              tag: "GitHub",
            },
            {
              title: "JacksonAreaRobotics/JAR-Template",
              url: "https://github.com/JacksonAreaRobotics/JAR-Template",
              description: "VEXcode Pro (C++) library with PID, odometry, and drive-to-point/pose.",
              tag: "GitHub",
            },
          ]}
        />
      </Module>

      <Module number="04" title="PID & odometry, conceptually">
        <p>
          You&apos;ll hear these terms constantly. <strong>PID</strong> is a control loop that
          makes a motor/drivetrain move accurately to a target instead of overshooting or
          stalling short. <strong>Odometry</strong> is tracking where your robot actually is
          on the field in real time using sensor data. You don&apos;t need to implement either
          from scratch as a beginner — just understand what they do, because judges will ask.
        </p>
        <LinkGrid
          resources={[
            {
              title: "\"VEX PID controller explained\" — YouTube search",
              url: "https://www.youtube.com/results?search_query=vex+pid+controller+explained",
              description: "PID tuning explained specifically in a VEX drivetrain context.",
              tag: "Video",
            },
          ]}
        />
      </Module>
    </div>
  );
}
