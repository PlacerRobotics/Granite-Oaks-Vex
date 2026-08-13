"use client";

import { useState } from "react";

type TeamResult = {
  team: {
    id: number;
    number: string;
    team_name: string;
    robot_name: string | null;
    organization: string;
    location: { city: string | null; region: string | null; country: string | null };
    program: { id: number; name: string };
    grade: string;
  };
  events: {
    id: number;
    sku: string;
    name: string;
    start: string;
    end: string;
    location: { city: string | null; region: string | null; country: string | null };
  }[];
};

export default function TeamLookup() {
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<TeamResult[] | null>(null);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!number.trim()) return;

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const res = await fetch(`/api/robotevents?number=${encodeURIComponent(number.trim())}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        return;
      }

      setResults(data.results);
    } catch {
      setError("Couldn't reach the lookup service. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  function formatLocation(loc: { city: string | null; region: string | null; country: string | null }) {
    return [loc.city, loc.region, loc.country].filter(Boolean).join(", ") || "Unknown location";
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-8 flex flex-wrap gap-2">
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="e.g. 90210A"
          className="flex-1 min-w-[200px] rounded-md border border-black/15 bg-transparent px-4 py-2.5 text-sm dark:border-white/20"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark disabled:opacity-60"
        >
          {loading ? "Searching…" : "Search"}
        </button>
      </form>

      {error && (
        <div className="mb-8 rounded-md border border-red-600/30 bg-red-600/5 p-4 text-sm text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      {results && results.length === 0 && (
        <p className="text-sm text-neutral-500">No teams found.</p>
      )}

      <div className="grid gap-4">
        {results?.map(({ team, events }) => (
          <div key={team.id} className="rounded-xl border border-black/10 p-5 dark:border-white/10">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold">
                {team.number} <span className="font-normal text-neutral-500">— {team.team_name}</span>
              </h3>
              <span className="text-xs font-medium uppercase tracking-wide text-brand-green dark:text-brand-green-light">
                {team.program?.name}
              </span>
            </div>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {team.organization} &middot; {formatLocation(team.location)}
              {team.grade ? ` · ${team.grade}` : ""}
            </p>
            {team.robot_name && (
              <p className="mt-1 text-sm text-neutral-500">Robot: {team.robot_name}</p>
            )}

            {events.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  Recent events
                </p>
                <ul className="mt-2 space-y-1.5">
                  {events.map((ev) =>
                    ev.sku ? (
                      <li key={ev.id} className="text-sm">
                        <a
                          href={`https://www.robotevents.com/robot-competitions/vex-robotics-competition/${ev.sku}.html`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-neutral-800 hover:text-brand-green dark:text-neutral-200"
                        >
                          {ev.name}
                        </a>
                        <span className="text-neutral-500">
                          {" "}
                          — {new Date(ev.start).toLocaleDateString()} · {formatLocation(ev.location)}
                        </span>
                      </li>
                    ) : (
                      <li key={ev.id} className="text-sm text-neutral-700 dark:text-neutral-300">
                        {ev.name}
                        <span className="text-neutral-500">
                          {" "}
                          — {new Date(ev.start).toLocaleDateString()} · {formatLocation(ev.location)}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
