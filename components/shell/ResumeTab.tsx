import { Briefcase, GraduationCap, Wrench } from "lucide-react";
import Chip from "./Chip";
import { education, experiences, profile, skills } from "@/lib/content";

const skillGroups: { key: keyof typeof skills; label: string }[] = [
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
  { key: "database", label: "Databases" },
  { key: "server", label: "Servers and hosting" },
  { key: "devOps", label: "DevOps" },
  { key: "aiTools", label: "AI tools" },
  { key: "tools", label: "Tools" },
  { key: "methodologies", label: "Methodologies" },
  { key: "softSkills", label: "Soft skills" },
  { key: "languages", label: "Languages" },
];

function Heading({ icon: Icon, children }: { icon: typeof Briefcase; children: React.ReactNode }) {
  return (
    <h2 className="mb-5 flex items-center gap-2.5 text-xl font-semibold tracking-tight">
      <Icon className="h-5 w-5 text-primary" />
      {children}
    </h2>
  );
}

// A skill listed in two groups (Docker, Linux) is shown once, in the first group that has it.
const seen = new Set<string>();
const groups = skillGroups
  .map(({ key, label }) => ({
    label,
    items: skills[key].filter((s) => (seen.has(s.name) ? false : (seen.add(s.name), true))),
  }))
  .filter((g) => g.items.length > 0);

export default function ResumeTab() {
  return (
    <div className="space-y-12">
      <section aria-label="Summary" className="rounded-2xl border border-border bg-card p-5 sm:p-6">
        <p className="leading-relaxed text-muted-foreground">{profile.summary}</p>
        <p className="mt-3 text-sm">
          <span className="font-medium">Specialization:</span> <span className="text-muted-foreground">{profile.specialization}</span>
        </p>
      </section>

      <section aria-label="Experience">
        <Heading icon={Briefcase}>Experience</Heading>
        <ol className="relative space-y-8 border-l border-border pl-6">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" aria-hidden="true" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-sm font-medium text-primary">{exp.company}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary/60">
                {exp.activities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.highlights.map((h) => (
                  <Chip key={h} tone="accent">
                    {h}
                  </Chip>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label="Education">
        <Heading icon={GraduationCap}>Education</Heading>
        <ul className="grid gap-3 sm:grid-cols-2">
          {education.map((e) => (
            <li key={e.degree} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-semibold">{e.degree}</p>
              <p className="text-sm text-primary">{e.institution}</p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">{e.period}</p>
              <p className="mt-1 text-sm text-muted-foreground">CGPA {e.cgpa}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Skills">
        <Heading icon={Wrench}>Skills and tools</Heading>
        <div className="space-y-5">
          {groups.map(({ label, items }) => (
            <div key={label}>
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">{label}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <Chip key={s.name}>{s.name}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
