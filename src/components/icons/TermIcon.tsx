export type IconKind =
  | "brain"
  | "blocks"
  | "gradcap"
  | "robot"
  | "auton"
  | "joystick"
  | "stopwatch"
  | "alliance"
  | "bracket"
  | "flag"
  | "pin"
  | "descore"
  | "plate"
  | "hook"
  | "book"
  | "trophy"
  | "chat"
  | "wave"
  | "path"
  | "terminal"
  | "blockscode"
  | "compass"
  | "rotate"
  | "pause"
  | "play"
  | "curve"
  | "switch"
  | "screwdriver"
  | "wrench"
  | "socket"
  | "tweezers"
  | "channel"
  | "angle"
  | "bracex"
  | "triangle"
  | "box"
  | "standoffchain"
  | "shoulderscrew"
  | "cross"
  | "screwjoint"
  | "cap"
  | "gearpair"
  | "gear"
  | "sprocket"
  | "wheel"
  | "bearingflat"
  | "pillowbearing"
  | "ringplain"
  | "ringscrew"
  | "shaftthin"
  | "shaftthick"
  | "screw"
  | "nut"
  | "tube"
  | "standoffpost"
  | "motor"
  | "sensor"
  | "distance"
  | "vision"
  | "battery"
  | "radio"
  | "cable"
  | "cylinder"
  | "solenoid"
  | "chainlink"
  | "dial"
  | "flatplate"
  | "rubberband";

function Icon({ kind }: { kind: IconKind }) {
  switch (kind) {
    case "brain":
      return (
        <>
          <rect x="6" y="9" width="20" height="15" rx="2" />
          <line x1="10" y1="9" x2="10" y2="4" />
          <line x1="16" y1="9" x2="16" y2="4" />
          <line x1="22" y1="9" x2="22" y2="4" />
          <circle cx="12" cy="16.5" r="1.4" fill="currentColor" />
          <circle cx="20" cy="16.5" r="1.4" fill="currentColor" />
        </>
      );
    case "blocks":
      return (
        <>
          <rect x="5" y="10" width="11" height="11" rx="1.5" />
          <rect x="16" y="10" width="11" height="11" rx="1.5" />
        </>
      );
    case "gradcap":
      return (
        <>
          <polygon points="16,7 28,13 16,19 4,13" />
          <path d="M10,15 v6 c0,2 3,3.5 6,3.5 s6,-1.5 6,-3.5 v-6" />
          <line x1="28" y1="13" x2="28" y2="21" />
        </>
      );
    case "robot":
      return (
        <>
          <rect x="9" y="12" width="14" height="11" rx="2" />
          <circle cx="13" cy="17.5" r="1.4" fill="currentColor" />
          <circle cx="19" cy="17.5" r="1.4" fill="currentColor" />
          <line x1="16" y1="12" x2="16" y2="7" />
          <circle cx="16" cy="5.5" r="1.6" />
        </>
      );
    case "auton":
      return (
        <>
          <circle cx="16" cy="16" r="10" strokeDasharray="3 3" />
          <polygon points="13,12 21,16 13,20" fill="currentColor" stroke="none" />
        </>
      );
    case "joystick":
      return (
        <>
          <rect x="9" y="22" width="14" height="4" rx="1" />
          <line x1="16" y1="22" x2="16" y2="10" />
          <circle cx="16" cy="7" r="3" />
        </>
      );
    case "stopwatch":
      return (
        <>
          <circle cx="16" cy="18" r="9" />
          <line x1="16" y1="18" x2="16" y2="12" />
          <line x1="16" y1="18" x2="20" y2="18" />
          <line x1="13" y1="6" x2="19" y2="6" />
          <line x1="16" y1="6" x2="16" y2="9" />
        </>
      );
    case "alliance":
      return (
        <>
          <circle cx="10" cy="14" r="4" />
          <circle cx="22" cy="14" r="4" />
          <path d="M6,25 c0,-4 3,-6 4,-6 s4,2 4,6" />
          <path d="M18,25 c0,-4 3,-6 4,-6 s4,2 4,6" />
        </>
      );
    case "bracket":
      return (
        <>
          <path d="M6,6 h5 v9 h6" />
          <path d="M6,26 h5 v-9 h6" />
          <path d="M17,11 h5 v5 h5" />
        </>
      );
    case "flag":
      return (
        <>
          <line x1="8" y1="5" x2="8" y2="27" />
          <path d="M8,6 h16 l-4,5 l4,5 h-16" />
        </>
      );
    case "pin":
      return (
        <>
          <line x1="7" y1="4" x2="7" y2="28" />
          <line x1="7" y1="6" x2="10" y2="6" />
          <line x1="7" y1="10" x2="10" y2="10" />
          <line x1="7" y1="14" x2="10" y2="14" />
          <rect x="13" y="10" width="13" height="10" rx="1.5" />
        </>
      );
    case "descore":
      return (
        <>
          <rect x="10" y="6" width="12" height="5" rx="1" opacity="0.4" />
          <rect x="10" y="13" width="12" height="5" rx="1" />
          <rect x="10" y="20" width="12" height="5" rx="1" />
          <line x1="16" y1="2" x2="16" y2="8" />
          <polygon points="13,6 19,6 16,9" fill="currentColor" stroke="none" />
        </>
      );
    case "plate":
      return (
        <>
          <rect x="5" y="10" width="22" height="12" rx="2" />
          <line x1="9" y1="14" x2="19" y2="14" />
          <line x1="9" y1="18" x2="15" y2="18" />
        </>
      );
    case "hook":
      return (
        <>
          <line x1="4" y1="9" x2="28" y2="9" />
          <path d="M16,9 v8 a4,4 0 1 0 4,-4" />
        </>
      );
    case "book":
      return (
        <>
          <path d="M16,9 c-2,-2 -6,-3 -10,-2 v15 c4,-1 8,0 10,2 c2,-2 6,-3 10,-2 v-15 c-4,-1 -8,0 -10,2 z" />
          <line x1="16" y1="9" x2="16" y2="24" />
        </>
      );
    case "trophy":
      return (
        <>
          <path d="M11,6 h10 v8 a5,5 0 0 1 -10,0 z" />
          <path d="M11,8 h-4 v2 a4,4 0 0 0 4,4" />
          <path d="M21,8 h4 v2 a4,4 0 0 1 -4,4" />
          <line x1="16" y1="19" x2="16" y2="23" />
          <line x1="12" y1="26" x2="20" y2="26" />
          <line x1="16" y1="23" x2="16" y2="26" />
        </>
      );
    case "chat":
      return (
        <>
          <path d="M5,7 h22 v13 h-14 l-5,4 v-4 h-3 z" />
          <text x="16" y="18" fontSize="10" textAnchor="middle" fill="currentColor" stroke="none">?</text>
        </>
      );
    case "wave":
      return (
        <>
          <line x1="4" y1="16" x2="28" y2="16" strokeDasharray="2 2" />
          <path d="M4,10 C 8,10 8,22 12,22 C 15,22 15,13 18,13 C 20,13 20,17 22,17 C 24,17 24,16 28,16" />
        </>
      );
    case "path":
      return (
        <>
          <path d="M5,24 C 10,10 20,24 27,8" strokeDasharray="2 3" />
          <circle cx="27" cy="8" r="2.4" fill="currentColor" stroke="none" />
        </>
      );
    case "terminal":
      return (
        <>
          <rect x="4" y="7" width="24" height="18" rx="2" />
          <polyline points="9,13 13,16 9,19" />
          <line x1="15" y1="19" x2="20" y2="19" />
        </>
      );
    case "blockscode":
      return (
        <>
          <rect x="7" y="6" width="18" height="6" rx="1.5" />
          <rect x="7" y="13" width="14" height="6" rx="1.5" />
          <rect x="7" y="20" width="16" height="6" rx="1.5" />
        </>
      );
    case "compass":
      return (
        <>
          <circle cx="16" cy="16" r="10" />
          <polygon points="16,9 19,16 16,23 13,16" />
        </>
      );
    case "rotate":
      return (
        <>
          <path d="M24,10 A10,10 0 1 0 26,17" />
          <polygon points="24,5 24,12 18,10" fill="currentColor" stroke="none" />
        </>
      );
    case "pause":
      return (
        <>
          <rect x="10" y="7" width="4" height="18" rx="1" />
          <rect x="18" y="7" width="4" height="18" rx="1" />
        </>
      );
    case "play":
      return <polygon points="10,6 26,16 10,26" />;
    case "curve":
      return (
        <>
          <line x1="6" y1="4" x2="6" y2="27" />
          <line x1="6" y1="27" x2="28" y2="27" />
          <path d="M6,27 C 6,14 20,20 27,5" />
        </>
      );
    case "switch":
      return (
        <>
          <rect x="6" y="8" width="20" height="16" rx="2" />
          <line x1="12" y1="12" x2="12" y2="20" />
          <line x1="16" y1="12" x2="16" y2="20" />
          <line x1="20" y1="12" x2="20" y2="20" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="16" cy="20" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="20" cy="12" r="1.4" fill="currentColor" stroke="none" />
        </>
      );
    case "screwdriver":
      return (
        <>
          <rect x="6" y="6" width="6" height="9" rx="1.5" />
          <line x1="9" y1="15" x2="9" y2="24" />
          <line x1="6" y1="26" x2="12" y2="26" />
          <line x1="9" y1="24" x2="9" y2="26" />
        </>
      );
    case "wrench":
      return (
        <path d="M22,6 a5,5 0 0 0 -7,7 l-11,11 l3,3 l11,-11 a5,5 0 0 0 7,-7 l-3.5,3.5 l-3,-3 z" />
      );
    case "socket":
      return (
        <>
          <polygon points="16,7 22,10.5 22,17.5 16,21 10,17.5 10,10.5" />
          <circle cx="16" cy="14" r="2.2" />
          <line x1="16" y1="21" x2="16" y2="26" />
        </>
      );
    case "tweezers":
      return (
        <>
          <path d="M12,4 L9,26" />
          <path d="M20,4 L23,26" />
          <line x1="12" y1="4" x2="20" y2="4" />
        </>
      );
    case "channel":
      return (
        <>
          <line x1="9" y1="5" x2="9" y2="27" />
          <line x1="23" y1="5" x2="23" y2="27" />
          <line x1="9" y1="27" x2="23" y2="27" />
        </>
      );
    case "angle":
      return (
        <>
          <line x1="10" y1="5" x2="10" y2="27" />
          <line x1="10" y1="27" x2="26" y2="27" />
        </>
      );
    case "bracex":
      return (
        <>
          <rect x="5" y="5" width="22" height="22" rx="1.5" />
          <line x1="5" y1="5" x2="27" y2="27" />
          <line x1="27" y1="5" x2="5" y2="27" />
        </>
      );
    case "triangle":
      return <polygon points="16,5 27,27 5,27" />;
    case "box":
      return (
        <>
          <line x1="9" y1="5" x2="9" y2="27" />
          <line x1="23" y1="5" x2="23" y2="27" />
          <line x1="9" y1="27" x2="23" y2="27" />
          <rect x="13" y="14" width="6" height="6" fill="currentColor" stroke="none" opacity="0.5" />
        </>
      );
    case "standoffchain":
      return (
        <>
          <line x1="3" y1="16" x2="29" y2="16" />
          <circle cx="5" cy="16" r="3" />
          <rect x="10" y="13" width="4" height="6" fill="currentColor" stroke="none" />
          <rect x="16" y="12" width="6" height="8" />
          <rect x="24" y="13" width="4" height="6" fill="currentColor" stroke="none" />
          <circle cx="27" cy="16" r="3" />
        </>
      );
    case "shoulderscrew":
      return (
        <>
          <rect x="11" y="5" width="10" height="4" rx="1" />
          <rect x="13" y="9" width="6" height="9" fill="currentColor" stroke="none" opacity="0.6" />
          <line x1="16" y1="18" x2="16" y2="27" strokeDasharray="2 2" />
        </>
      );
    case "cross":
      return (
        <>
          <line x1="8" y1="4" x2="8" y2="28" />
          <line x1="24" y1="4" x2="24" y2="28" />
          <line x1="8" y1="20" x2="24" y2="20" />
        </>
      );
    case "screwjoint":
      return (
        <>
          <line x1="6" y1="6" x2="6" y2="26" />
          <line x1="6" y1="16" x2="24" y2="16" />
          <circle cx="17" cy="16" r="6" />
          <rect x="25" y="12" width="3" height="8" fill="currentColor" stroke="none" />
        </>
      );
    case "cap":
      return (
        <>
          <circle cx="16" cy="19" r="8" />
          <path d="M9,15 a7,5 0 0 1 14,0" />
        </>
      );
    case "gearpair":
      return (
        <>
          <circle cx="10" cy="16" r="6" strokeDasharray="2.5 2" />
          <circle cx="10" cy="16" r="2" fill="currentColor" stroke="none" />
          <circle cx="23" cy="16" r="8" strokeDasharray="2.5 2" />
          <circle cx="23" cy="16" r="2" fill="currentColor" stroke="none" />
        </>
      );
    case "gear":
      return (
        <>
          <circle cx="16" cy="16" r="10" strokeDasharray="3 2.4" />
          <circle cx="16" cy="16" r="3" fill="currentColor" stroke="none" />
        </>
      );
    case "sprocket":
      return (
        <>
          <circle cx="16" cy="16" r="7" strokeDasharray="2.5 2" />
          <rect x="3" y="9" width="26" height="14" rx="7" />
        </>
      );
    case "wheel":
      return (
        <>
          <circle cx="16" cy="16" r="10" />
          <line x1="16" y1="6" x2="16" y2="26" />
          <line x1="6" y1="16" x2="26" y2="16" />
          <line x1="9" y1="9" x2="23" y2="23" />
          <line x1="23" y1="9" x2="9" y2="23" />
        </>
      );
    case "bearingflat":
      return (
        <>
          <rect x="4" y="11" width="24" height="10" rx="2" />
          <circle cx="16" cy="16" r="3.4" />
          <circle cx="8" cy="16" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="24" cy="16" r="1.1" fill="currentColor" stroke="none" />
        </>
      );
    case "pillowbearing":
      return (
        <>
          <rect x="5" y="10" width="22" height="12" rx="3" />
          <circle cx="16" cy="16" r="4" />
        </>
      );
    case "ringplain":
      return <circle cx="16" cy="16" r="8" />;
    case "ringscrew":
      return (
        <>
          <circle cx="16" cy="16" r="8" />
          <line x1="24" y1="16" x2="28" y2="16" />
        </>
      );
    case "shaftthin":
      return <line x1="16" y1="5" x2="16" y2="27" strokeWidth={2} />;
    case "shaftthick":
      return <line x1="16" y1="5" x2="16" y2="27" strokeWidth={5} />;
    case "screw":
      return (
        <>
          <rect x="10" y="5" width="12" height="5" rx="1" />
          <line x1="16" y1="10" x2="16" y2="27" strokeDasharray="2 2" />
        </>
      );
    case "nut":
      return (
        <>
          <polygon points="16,5 24,10 24,20 16,25 8,20 8,10" />
          <circle cx="16" cy="15" r="3.2" />
        </>
      );
    case "tube":
      return (
        <>
          <ellipse cx="16" cy="9" rx="7" ry="3" />
          <line x1="9" y1="9" x2="9" y2="21" />
          <line x1="23" y1="9" x2="23" y2="21" />
          <ellipse cx="16" cy="21" rx="7" ry="3" />
        </>
      );
    case "standoffpost":
      return <polygon points="16,4 22,8 22,24 16,28 10,24 10,8" />;
    case "motor":
      return (
        <>
          <rect x="6" y="9" width="14" height="14" rx="2" />
          <circle cx="13" cy="16" r="4" />
          <line x1="20" y1="16" x2="27" y2="16" />
          <circle cx="27" cy="16" r="1.6" fill="currentColor" stroke="none" />
        </>
      );
    case "sensor":
      return (
        <>
          <path d="M6,20 a10,10 0 0 1 20,0" />
          <circle cx="16" cy="20" r="3.4" />
          <line x1="16" y1="20" x2="16" y2="20" />
        </>
      );
    case "distance":
      return (
        <>
          <circle cx="9" cy="23" r="2.4" fill="currentColor" stroke="none" />
          <path d="M13,19 a7,7 0 0 1 0,8" />
          <path d="M17,15 a13,13 0 0 1 0,16" />
        </>
      );
    case "vision":
      return (
        <>
          <rect x="4" y="11" width="18" height="12" rx="2" />
          <path d="M22,15 l6,-3 v12 l-6,-3 z" />
          <circle cx="13" cy="17" r="3.2" />
        </>
      );
    case "battery":
      return (
        <>
          <rect x="4" y="11" width="21" height="11" rx="2" />
          <line x1="27" y1="15" x2="27" y2="18" />
          <line x1="9" y1="16.5" x2="14" y2="16.5" />
          <line x1="11.5" y1="14" x2="11.5" y2="19" />
        </>
      );
    case "radio":
      return (
        <>
          <line x1="16" y1="27" x2="16" y2="14" />
          <path d="M9,14 a10,10 0 0 1 14,0" />
          <path d="M12,17 a6,6 0 0 1 8,0" />
          <circle cx="16" cy="14" r="1.6" fill="currentColor" stroke="none" />
        </>
      );
    case "cable":
      return (
        <>
          <path d="M5,10 v6 a5,5 0 0 0 5,5 h12 a5,5 0 0 0 5,-5 v-6" />
          <line x1="5" y1="6" x2="5" y2="12" />
          <line x1="9" y1="6" x2="9" y2="12" />
          <line x1="23" y1="6" x2="23" y2="12" />
          <line x1="27" y1="6" x2="27" y2="12" />
        </>
      );
    case "cylinder":
      return (
        <>
          <rect x="5" y="11" width="13" height="10" rx="1.5" />
          <line x1="18" y1="16" x2="27" y2="16" />
          <line x1="24" y1="12" x2="24" y2="20" />
        </>
      );
    case "solenoid":
      return (
        <>
          <rect x="8" y="10" width="16" height="12" rx="2" />
          <line x1="4" y1="13" x2="8" y2="13" />
          <line x1="4" y1="19" x2="8" y2="19" />
          <line x1="24" y1="16" x2="28" y2="16" />
        </>
      );
    case "chainlink":
      return (
        <>
          <ellipse cx="12" cy="16" rx="5" ry="7" />
          <ellipse cx="20" cy="16" rx="5" ry="7" />
        </>
      );
    case "dial":
      return (
        <>
          <circle cx="16" cy="16" r="10" />
          <line x1="16" y1="16" x2="21" y2="10" />
          <circle cx="16" cy="16" r="1.6" fill="currentColor" stroke="none" />
        </>
      );
    case "flatplate":
      return (
        <>
          <rect x="4" y="8" width="24" height="16" rx="2" />
          <circle cx="10" cy="14" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="16" cy="14" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="22" cy="14" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="10" cy="19" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="16" cy="19" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="22" cy="19" r="1.2" fill="currentColor" stroke="none" />
        </>
      );
    case "rubberband":
      return <ellipse cx="16" cy="16" rx="10" ry="6" />;
    default:
      return null;
  }
}

export default function TermIcon({ kind, className }: { kind: IconKind; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <Icon kind={kind} />
    </svg>
  );
}
