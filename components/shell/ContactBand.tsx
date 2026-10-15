"use client";

import { ArrowUpRight, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/content";

/** Closing call to action. The nav's Contact link and the "Get in touch" button both land here. */
export default function ContactBand() {
  return (
    <section className="px-5 pb-10 sm:px-8">
      <Reveal className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-foreground p-7 text-background sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl"
        />
        <p className="relative text-xs font-semibold uppercase tracking-[0.14em] text-primary">Contact</p>
        <h2 className="relative mt-2 max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Have a system to build?
          <br />
          Let&apos;s talk.
        </h2>
        <p className="relative mt-3 max-w-md text-[15px] leading-relaxed opacity-80">
          ERP, fintech or a product from scratch. A message on LinkedIn is the quickest way to reach me.
        </p>
        <div className="relative mt-6 flex flex-wrap gap-3">
          <a
            href="https://linkedin.com/in/farookhridoy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Linkedin className="h-4 w-4" />
            Message on LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-background/10"
          >
            All ways to reach me
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={profile.founderOf.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-background/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-background/10"
          >
            Work with {profile.founderOf.name}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
