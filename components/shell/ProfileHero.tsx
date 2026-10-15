"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Share2, Check } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ToolChip from "./ToolChip";
import CountUp from "./CountUp";
import ContributionBanner from "./ContributionBanner";
import { aiToolsShort, profile, stats, technologies } from "@/lib/content";

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
      <ContributionBanner />

      <motion.div
        className="px-5 pb-6 sm:px-8"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="-mt-12 flex flex-col gap-4 sm:-mt-14 sm:flex-row sm:items-start">
          <Avatar className="h-24 w-24 shrink-0 border-4 border-background shadow-sm sm:h-28 sm:w-28">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback className="bg-secondary text-2xl font-semibold text-primary">OF</AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1 sm:pt-[3.75rem]">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{profile.name}</h1>
            <p className="mt-0.5 text-base text-muted-foreground">{profile.title}</p>
          </div>

          <div className="flex gap-2 sm:pt-[3.5rem]">
            <a
              href="#contact"
              className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
            <button
              type="button"
              onClick={share}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm font-medium transition-colors hover:border-primary/60"
            >
              {copied ? <Check className="h-4 w-4 text-success" /> : <Share2 className="h-4 w-4" />}
              {copied ? "Link copied" : "Share"}
            </button>
          </div>
        </div>

        <p className="mt-4 text-[15px] italic text-muted-foreground">{profile.tagline}</p>

        <a
          href={profile.founderOf.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground transition-colors hover:border-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
          Founder of {profile.founderOf.name}
        </a>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
          <span className="inline-flex items-start gap-1.5">
            <Briefcase className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              {profile.current.role} at <strong className="font-medium text-foreground">{profile.current.company}</strong>
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 shrink-0" />
            {profile.location}
            {time && <span aria-label="local time">· {time}</span>}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2" aria-label="AI tools I work with">
          {aiToolsShort.map((t) => (
            <ToolChip key={t} name={t} tone="accent" />
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-2" aria-label="Core technologies">
          {technologies.slice(0, 10).map((t) => (
            <ToolChip key={t.name} name={t.name} />
          ))}
        </div>

        <dl className="mt-5 grid grid-cols-2 divide-border overflow-hidden rounded-2xl border border-border bg-card sm:grid-cols-4 sm:divide-x">
          {stats.map((s, i) => (
            <div key={s.label} className={`px-4 py-3 ${i % 2 === 1 ? "border-l border-border sm:border-l-0" : ""} ${i > 1 ? "border-t border-border sm:border-t-0" : ""}`}>
              <dd className="text-xl font-bold text-primary"><CountUp value={s.value} /></dd>
              <dt className="text-xs text-muted-foreground">{s.label}</dt>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
