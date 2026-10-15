import data from "@/lib/contributions.json";

type Calendar = { login: string; total: number; from: string; weeks: [number, number][][] };
const cal = data as unknown as Calendar;

const LEVEL_CLASS = [
  "bg-foreground/[0.07]",
  "bg-primary/25",
  "bg-primary/45",
  "bg-primary/70",
  "bg-primary",
];

const dayLabel = (index: number) => {
  const d = new Date(`${cal.from}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + index);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
};

/** The profile cover: a year of GitHub contributions, one column per week. Data comes from scripts/fetch-contributions.mjs. */
export default function ContributionBanner() {
  return (
    <div className="relative h-28 w-full overflow-hidden border-b border-border bg-secondary sm:h-36">
      <div
        role="img"
        aria-label={`${cal.total.toLocaleString("en-US")} contributions on GitHub in the last year`}
        className="absolute inset-0 grid grid-flow-col gap-[3px] p-[3px]"
        style={{
          gridTemplateColumns: `repeat(${cal.weeks.length}, minmax(0, 1fr))`,
          gridTemplateRows: "repeat(7, minmax(0, 1fr))",
        }}
      >
        {cal.weeks.map((week, w) =>
          week.map(([level, count], d) => (
            <i
              key={`${w}-${d}`}
              title={`${count} contribution${count === 1 ? "" : "s"} on ${dayLabel(w * 7 + d)}`}
              className={`banner-cell rounded-[3px] ${LEVEL_CLASS[level] ?? LEVEL_CLASS[0]}`}
              style={{ animationDelay: `${w * 14}ms` }}
            />
          )),
        )}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"
      />
      <p className="absolute bottom-2 right-3 rounded-full bg-background/85 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
        {cal.total.toLocaleString("en-US")} contributions on GitHub in the last year
      </p>
    </div>
  );
}
