export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

export const SAFETY_QUIZ: QuizQuestion[] = [
  {
    question:
      'Where should you NEVER plug a motor "smart cable" into on a V5 Robot Brain or controller?',
    options: [
      "Any of the outer motor ports",
      "The center VEXNet port",
      "The USB port",
      "The battery port",
    ],
    correctIndex: 1,
  },
  {
    question:
      "You lost a part and need a replacement. What's the required first step?",
    options: [
      "Send a Slack message asking the lead",
      "Complete the parts request/broken parts form first",
      "Take it from another team's bin",
      "Wait until the next meeting to mention it",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Before doing emergency metal work (cutting, drilling) near a robot, what should you do with its electronics?",
    options: [
      "Leave them on so you can test immediately after",
      "Nothing extra is needed",
      "Remove the robot from the metal room if electronics are attached, or fully cover all ports",
      "Just turn the brain off, ports don't matter",
    ],
    correctIndex: 2,
  },
  {
    question: "You notice exposed copper strands near the end of a battery cable. What should you do?",
    options: [
      "Wrap it in tape and keep using it",
      "Ignore it if the robot still powers on",
      "Stop using it and request a replacement battery cable immediately",
      "Twist the cable tighter to hide the strands",
    ],
    correctIndex: 2,
  },
  {
    question: "How many V5 joystick controllers does a team get per season, and what happens if it breaks from misuse?",
    options: [
      "Unlimited replacements, free",
      "One controller; a replacement costs money if it's damaged from misuse",
      "Two controllers per driver",
      "Controllers never break, no policy needed",
    ],
    correctIndex: 1,
  },
  {
    question: "How should pneumatic cylinders (pistons) be treated?",
    options: [
      "As disposable items you can replace anytime",
      "As parts needing structural protection so the rod doesn't bend on impact",
      "They don't need any protection, they're built tough",
      "Only the wiring needs protection, not the cylinder itself",
    ],
    correctIndex: 1,
  },
  {
    question: "Per standard lab/camp rules, when is it OK to work on a robot?",
    options: [
      "Anytime, powered on or off",
      "Only when it is turned off",
      "Only during matches",
      "Only if an adult is 10+ feet away",
    ],
    correctIndex: 1,
  },
  {
    question: "If you need a break or need to leave the build area, what should you do first?",
    options: [
      "Just leave, no need to tell anyone",
      "Ask an instructor or team lead first",
      "Leave your tools out for someone else to use",
      "Turn off all the lab lights"
    ],
    correctIndex: 1,
  },
  {
    question: "Which tool is used to tighten a standoff (the metal spacer/post used to mount electronics)?",
    options: ["T15 screwdriver", "Nut driver", "Standoff driver", "Wrench"],
    correctIndex: 2,
  },
  {
    question: "Why should the Brain and battery be mounted in a protected, interior location on the robot?",
    options: [
      "It looks cleaner for judging photos",
      "So they can't be damaged or have wires pulled out during contact with other robots",
      "It's required only for VEX IQ, not V5",
      "So the battery charges faster",
    ],
    correctIndex: 1,
  },
];
