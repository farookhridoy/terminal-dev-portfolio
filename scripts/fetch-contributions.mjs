#!/usr/bin/env node
// Writes lib/contributions.json from the GitHub GraphQL API (needs the `gh` CLI signed in).
//   node scripts/fetch-contributions.mjs [login]
// The profile banner draws this snapshot; re-run it (then rebuild) to refresh the picture.
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const login = process.argv[2] || "farookhridoy";
const query = `query($login:String!){user(login:$login){contributionsCollection{contributionCalendar{totalContributions weeks{contributionDays{date contributionCount contributionLevel}}}}}}`;
const out = JSON.parse(execFileSync("gh", ["api", "graphql", "-f", `query=${query}`, "-F", `login=${login}`], { encoding: "utf8" }));
const cal = out?.data?.user?.contributionsCollection?.contributionCalendar;
if (!cal) throw new Error("GitHub returned no contribution calendar");

const LEVELS = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };
const weeks = cal.weeks.map((w) => w.contributionDays.map((d) => [LEVELS[d.contributionLevel] ?? 0, d.contributionCount]));
const first = cal.weeks[0].contributionDays[0].date;
const last = cal.weeks.at(-1).contributionDays.at(-1).date;
const file = join(dirname(fileURLToPath(import.meta.url)), "..", "lib", "contributions.json");
writeFileSync(file, JSON.stringify({ login, total: cal.totalContributions, from: first, to: last, weeks }) + "\n");
console.log(`${login}: ${cal.totalContributions} contributions, ${weeks.length} weeks (${first} to ${last}) -> lib/contributions.json`);
