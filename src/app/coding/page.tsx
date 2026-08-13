import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import SafetyGate from "@/components/SafetyGate";

export default function CodingPage() {
  return (
    <SafetyGate>
    <div>
      <PageHero
        eyebrow="Coding 101"
        title="VEXcode, PROS, and writing your first autonomous"
        description="Two main environments: VEXcode (official, Blocks/Python/C++, easiest to start with) and PROS (community-built, C++ only, more powerful/flexible). Most competitive V5 teams eventually move to PROS or the VEXcode VS Code extension."
      />

      <Section
        title="VEXcode (official, start here)"
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
            title: "VEX Robotics VS Code Extension",
            url: "https://www.vexrobotics.com/vexcode/vscode-extension",
            description: "Write VEXcode V5/IQ projects inside VS Code instead of the standalone app.",
            tag: "Official",
          },
        ]}
      />

      <Section
        title="PROS (advanced, C++)"
        intro="Open-source, made by Purdue SIGBots, and widely used by top competitive teams for its flexibility and task/scheduling model."
        resources={[
          {
            title: "PROS",
            url: "https://pros.cs.purdue.edu/",
            description: "Official site — installer, docs, and getting-started guide.",
            tag: "Docs",
          },
          {
            title: "PROS API Reference",
            url: "https://purduesigbots.github.io/pros-doxygen-docs/api.html",
            description: "Full C++ API documentation for sensors, motors, and tasks.",
            tag: "Docs",
          },
          {
            title: "purduesigbots/pros",
            url: "https://github.com/purduesigbots/pros",
            description: "PROS kernel source code — open source C/C++ dev for the V5 brain.",
            tag: "GitHub",
          },
        ]}
      />

      <Section
        title="GitHub libraries & templates"
        intro="Community-built libraries that handle PID control, odometry, and motion algorithms so you don't have to write them from scratch. Read the code, don't just copy-paste it — understanding PID/odometry is what actually helps in judging interviews."
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
          {
            title: "OkapiLib/OkapiLib",
            url: "https://github.com/OkapiLib/OkapiLib",
            description: "PROS library aimed at making motion control easy for newer teams.",
            tag: "GitHub",
          },
        ]}
      />

      <Section
        title="PID, odometry & autonomous concepts"
        intro="These are the concepts judges expect competitive teams to actually understand, not just import from a library."
        resources={[
          {
            title: "\"VEX PID controller explained\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=vex+pid+controller+explained",
            description: "PID tuning explained specifically in a VEX drivetrain context.",
            tag: "Video",
          },
          {
            title: "\"VEX odometry tutorial\" — YouTube search",
            url: "https://www.youtube.com/results?search_query=vex+odometry+tutorial",
            description: "Tracking robot position on the field using encoders/IMU.",
            tag: "Video",
          },
          {
            title: "Virtual Skills (vrskills.vex.com)",
            url: "https://vrskills.vex.com/",
            description: "Practice writing and testing autonomous code without a physical robot.",
            tag: "Official",
          },
        ]}
      />
    </div>
    </SafetyGate>
  );
}
