import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://www.robotevents.com/api/v2";

type RobotEventsTeam = {
  id: number;
  number: string;
  team_name: string;
  robot_name: string | null;
  organization: string;
  location: {
    city: string | null;
    region: string | null;
    country: string | null;
  };
  program: { id: number; name: string };
  grade: string;
};

type RobotEventsEvent = {
  id: number;
  sku: string;
  name: string;
  start: string;
  end: string;
  location: {
    city: string | null;
    region: string | null;
    country: string | null;
  };
};

async function robotEventsFetch(path: string, token: string) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`RobotEvents request failed (${res.status})`);
  }

  return res.json();
}

export async function GET(req: NextRequest) {
  const token = process.env.ROBOTEVENTS_TOKEN;

  if (!token) {
    return NextResponse.json(
      {
        error:
          "This site isn't configured with a RobotEvents API token yet. Get a free one at robotevents.com and set ROBOTEVENTS_TOKEN.",
      },
      { status: 501 }
    );
  }

  const number = req.nextUrl.searchParams.get("number")?.trim();

  if (!number) {
    return NextResponse.json({ error: "Missing ?number= team number" }, { status: 400 });
  }

  try {
    const teamsResp = await robotEventsFetch(
      `/teams?number[]=${encodeURIComponent(number)}`,
      token
    );
    const teams: RobotEventsTeam[] = teamsResp.data ?? [];

    if (teams.length === 0) {
      return NextResponse.json({ error: `No team found matching "${number}".` }, { status: 404 });
    }

    const results = await Promise.all(
      teams.slice(0, 5).map(async (team) => {
        let events: RobotEventsEvent[] = [];
        try {
          const eventsResp = await robotEventsFetch(
            `/teams/${team.id}/events?per_page=10`,
            token
          );
          events = (eventsResp.data ?? []).sort(
            (a: RobotEventsEvent, b: RobotEventsEvent) =>
              new Date(b.start).getTime() - new Date(a.start).getTime()
          );
        } catch {
          events = [];
        }

        return { team, events: events.slice(0, 5) };
      })
    );

    return NextResponse.json({ results });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error contacting RobotEvents." },
      { status: 502 }
    );
  }
}
