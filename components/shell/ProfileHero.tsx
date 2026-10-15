"use client";

import { useEffect, useState } from "react";
import { MapPin, Briefcase, Share2, Check } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Chip from "./Chip";
import { profile, stats, technologies } from "@/lib/content";

function useLocalTime(timeZone: string) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}

export default function ProfileHero() {
  const time = useLocalTime(profile.timeZone);
  const [copied, setCopied] = useState(false);

  async function share() {
    const data = { title: profile.name, text: profile.title, url: profile.site };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(profile.site);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }
    } catch {
      /* the visitor closed the share sheet */
    }
  }

  return (
    <section id="profile" className="scroll-mt-20">
      <div className="banner-grid h-32 w-full sm:h-44" aria-hidden="true" />

      <div className="px-5 pb-8 text-center sm:px-8">
        <Avatar className="-mt-16 mx-auto h-28 w-28 border-4 border-background shadow-sm sm:h-32 sm:w-32">
          <AvatarImage src={profile.avatar} alt={profile.name} />
          <AvatarFallback className="bg-secondary text-2xl font-semibold text-primary">OF</AvatarFallback>
        </Avatar>

        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{profile.name}</h1>
        <p className="mt-1 text-lg text-muted-foreground">{profile.tagline}</p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-start gap-1.5 text-left">
            <Briefcase className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              {profile.current.role} at <strong className="font-medium text-foreground">{profile.current.company}</strong>
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {profile.location}
            {time && <span aria-label="local time">· {time}</span>}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <a
            href="#contact"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={share}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/60"
          >
            {copied ? <Check className="h-4 w-4 text-success" /> : <Share2 className="h-4 w-4" />}
            {copied ? "Link copied" : "Share"}
          </button>
        </div>

        <div className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-2" aria-label="Core technologies">
          {technologies.slice(0, 10).map((t) => (
            <Chip key={t.name}>{t.name}</Chip>
          ))}
        </div>

        <dl className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card px-3 py-4">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl font-bold text-primary">{s.value}</dd>
              <dd className="mt-0.5 text-xs text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
