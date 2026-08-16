# VEX Basics 101

**Live site: https://vex-teal.vercel.app**

An independent, unofficial resource hub for new VEX Robotics teams, structured as three
sections:

- **Courses** (`/courses`) — a **Basic** track (Building, Coding, CAD, Notebooking, Judging,
  "What's a VEX Competition?") and an **Advanced** track (Building, Coding, CAD only) with
  deeper technique.
- **Library** (`/library`) — every VEX part, tool, and piece of jargon, decoded.
- **Game Breakdown** (`/game`) — the current season's game: reveal video, official manual,
  and rules Q&A.

Only the **Basic Building** course is gated behind an electronics-care & lab-safety quiz at
[`/safety`](https://vex-teal.vercel.app/safety) — score 70% or higher and it unlocks on that
browser (stored in `localStorage`, no account needed). Everything else is open by default.
The gear ratio calculator (`/tools`) and team/event lookup (`/lookup`) are live but not in the
top nav — they're linked contextually from the Library and relevant courses.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript + Tailwind CSS v4
- Deployed on [Vercel](https://vercel.com)
- Team/event lookup calls the official [RobotEvents API](https://www.robotevents.com/api/v2)
  through a server-side proxy route (`src/app/api/robotevents/route.ts`) so the API key never
  reaches the browser

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To make the Team & Event Lookup page (`/lookup`) return real data, copy `.env.local.example` to
`.env.local` and set `ROBOTEVENTS_TOKEN` to a free API token from
[robotevents.com](https://www.robotevents.com/api/v2) (account → developer settings). Without
it, the page shows a friendly "not configured" message instead of failing.

## Deploying

The site auto-builds on Vercel from this repo. To deploy manually:

```bash
vercel --prod
```

## Project structure

- `src/app/courses/basic/*` and `src/app/courses/advanced/*` — one route per course
- `src/app/library`, `src/app/game`, `src/app/safety`, `src/app/tools`, `src/app/lookup` —
  the other top-level pages
- `src/components/*` — shared UI: `Module`/`LinkGrid`/`DiagramFrame`/`Callout` for course
  content, `ResourceCard`/`Section` for link lists, the safety gate/quiz, the gear ratio
  calculator, team lookup
- `src/data/*` — nav links and the safety quiz question bank
- `src/lib/safetyGate.ts` — the localStorage-backed unlock logic (`GATED_PATHS` controls
  which routes show a lock indicator in the nav; `SafetyGate` is applied per-page)
