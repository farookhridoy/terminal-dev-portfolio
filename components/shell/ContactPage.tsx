"use client";

import { ArrowRight, ArrowUpRight, Building2, Clock, Gauge, Layers, Rocket, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import LocalClock from "./LocalClock";
import { socialIcons } from "./RightRail";
import { profile, socialLinks, workWithMe } from "@/lib/content";

const cardIcons: Record<string, LucideIcon> = { layers: Layers, gauge: Gauge, building: Building2 };

/** The Contact page: a warm intro card, what I can help with, and every way to reach me. */
export default function ContactPage() {
  const wa = socialLinks.find((l) => l.id === "whatsapp")!;
  const li = socialLinks.find((l) => l.id === "linkedin")!;
  return (
    <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8">
      <h1 className="sr-only">Contact</h1>

      <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-7 text-background sm:p-9">
        <div aria-hidden="true" className="pointer-events-none absolute -right-14 -top-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
        <p className="relative text-xs font-semibold uppercase tracking-[0.14em] text-primary">Contact</p>
        <h2 className="relative mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Let&apos;s build something</h2>
        <p className="relative mt-3 max-w-md text-[15px] leading-relaxed opacity-80">
          Have a project, a system to fix or just a question? Pick whatever is easiest and I&apos;ll get back to you.
        </p>
        <p className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-background/25 px-3 py-1.5 text-sm">
          <Clock className="h-4 w-4" aria-hidden="true" />
          {profile.location} · <LocalClock timeZone={profile.timeZone} className="tabular-nums" />
        </p>
        <div className="relative mt-6 flex flex-wrap gap-3">
          <a
            href={wa.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Message on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={li.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-background/10"
          >
            LinkedIn
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>

      <section aria-labelledby="work-with-me" className="mt-12">
        <Reveal>
          <p className="eyebrow">What I can help with</p>
          <h2 id="work-with-me" className="mt-1 text-2xl font-bold tracking-tight">
            Work with me
          </h2>
        </Reveal>

        <Reveal className="mt-5 rounded-2xl border border-primary/30 bg-card p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Rocket className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">{workWithMe.main.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{workWithMe.main.text}</p>
              <a
                href={wa.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Let&apos;s talk <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <ul className="mt-3 grid gap-3 sm:grid-cols-3">
          {workWithMe.cards.map((c, i) => {
            const Icon = cardIcons[c.icon];
            const body = (
              <>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                {"href" in c && (
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Visit <ArrowUpRight className="h-4 w-4" />
                  </span>
                )}
              </>
            );
            return (
              <Reveal as="li" key={c.title} delay={i * 0.06} className="h-full">
                {"href" in c ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/50"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="h-full rounded-2xl border border-border bg-card p-5">{body}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="reach-me" className="mt-12">
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2 id="reach-me" className="mt-1 text-2xl font-bold tracking-tight">
            Reach me
          </h2>
        </Reveal>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {socialLinks.map((l, i) => {
            const Icon = socialIcons[l.id];
            return (
              <Reveal as="li" key={l.id} delay={i * 0.04}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5 transition-colors hover:border-primary/60"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">{l.label}</span>
                    <span className="block truncate text-xs text-muted-foreground">{l.handle}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              </Reveal>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
