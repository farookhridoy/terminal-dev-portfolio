import { Briefcase, GraduationCap, Languages, MapPin, Target, User, Wrench } from "lucide-react";
import Chip from "./Chip";
import ToolChip from "./ToolChip";
import Rich from "./Rich";
import Reveal from "./Reveal";
import LocalClock from "./LocalClock";
import { about, aiToolsShort, education, experiences, profile, skills, stackShort, topSkills } from "@/lib/content";

function Heading({ icon: Icon, children }: { icon: typeof Briefcase; children: React.ReactNode }) {
  return (
    <h2 className="mb-5 flex items-center gap-2.5 text-xl font-semibold tracking-tight">
      <Icon className="h-5 w-5 text-primary" />
      {children}
    </h2>
  );
}

export default function ResumeTab() {
  return (
    <div className="space-y-12">
      <Reveal as="section" className="space-y-4">
        <Heading icon={User}>About</Heading>
        {about.map((para) => (
          <p key={para} className="leading-relaxed text-muted-foreground">
            <Rich text={para} />
          </p>
        ))}

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <div className="rounded-2xl border border-primary/30 bg-accent p-4">
            <p className="flex items-center gap-1.5 text-xs font-medium text-accent-foreground">
              <MapPin className="h-3.5 w-3.5" /> Based in
            </p>
            <p className="mt-1 font-semibold">{profile.location}</p>
            <LocalClock timeZone={profile.timeZone} />
          </div>
          <div className="rounded-2xl border border-border bg-card p-4">
            <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Languages className="h-3.5 w-3.5" /> Languages
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {skills.languages.map((l) => (
                <Chip key={l.name}>{l.name}</Chip>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <section aria-label="Experience">
        <Heading icon={Briefcase}>Experience</Heading>
        <ol className="relative space-y-8 border-l border-border pl-6">
          {experiences.map((exp) => (
            <Reveal as="li" key={`${exp.company}-${exp.period}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" aria-hidden="true" />
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-xs font-bold text-accent-foreground"
                >
                  {exp.mark}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-lg font-semibold leading-snug">{exp.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-primary">{exp.company}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <Rich text={exp.description} />
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-primary/60">
                {exp.activities.map((a) => (
                  <li key={a}>
                    <Rich text={a} />
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.highlights.map((h) => (
                  <Chip key={h} tone="accent">
                    {h}
                  </Chip>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <Reveal as="section">
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
      </Reveal>

      <Reveal as="section" className="space-y-10">
        <div>
          <Heading icon={Target}>Top skills</Heading>
          <div className="flex flex-wrap gap-2.5">
            {topSkills.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
              >
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <Heading icon={Wrench}>Skills and tools</Heading>
          <div className="flex flex-wrap gap-2.5">
            {aiToolsShort.map((t) => (
              <ToolChip key={t} name={t} tone="accent" />
            ))}
          </div>
          <div className="mt-2.5 flex flex-wrap gap-2.5">
            {stackShort.map((t) => (
              <ToolChip key={t} name={t} />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
