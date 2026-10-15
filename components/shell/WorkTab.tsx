"use client";

import { useState } from "react";
import { ArrowUpRight, Layers, Star, Tag } from "lucide-react";
import Chip from "./Chip";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { products, projects, profile, repoFallbackDescriptions } from "@/lib/content";
import { useGithubRepos } from "@/hooks/use-github-repos";

function OpenSource() {
  const state = useGithubRepos(profile.githubUser);
  return (
    <section aria-label="Open source on GitHub">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">GitHub</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">Open source</h2>
        </div>
        <a
          href={`https://github.com/${profile.githubUser}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary hover:underline"
        >
          All repositories
        </a>
      </div>

      {state.status === "loading" && <p className="text-sm text-muted-foreground">Loading repositories…</p>}
      {state.status === "error" && (
        <p className="text-sm text-muted-foreground">
          Could not load repositories right now. See them on{" "}
          <a className="text-primary hover:underline" href={`https://github.com/${profile.githubUser}`}>
            GitHub
          </a>
          .
        </p>
      )}
      {state.status === "ready" && (
        <ul className="grid gap-3 sm:grid-cols-2">
          {state.repos.map((r) => (
            <li key={r.name}>
              <a
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/60"
              >
                <span className="flex items-center justify-between gap-2">
                  <span className="truncate font-medium">{r.name}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                </span>
                <span className="mt-1.5 line-clamp-2 flex-1 text-sm text-muted-foreground">
                  {r.description ?? repoFallbackDescriptions[r.name] ?? ""}
                </span>
                <span className="mt-auto flex items-center gap-3 pt-3 text-xs text-muted-foreground">
                  {r.language && (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                      {r.language}
                    </span>
                  )}
                  {r.stargazers_count > 0 && (
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5" />
                      {r.stargazers_count}
                    </span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

const FIRST = 6;

function SectionHead({ eyebrow, title, hint }: { eyebrow: string; title: string; hint?: string }) {
  return (
    <div className="mb-5">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-1 text-2xl font-bold tracking-tight">{title}</h2>
      {hint && <p className="mt-1 text-sm text-muted-foreground">{hint}</p>}
    </div>
  );
}

export default function WorkTab() {
  const [featured, ...rest] = projects;
  const [all, setAll] = useState(false);
  const shown = all ? rest : rest.slice(0, FIRST);
  return (
    <div className="space-y-14">
      <section aria-label="Products">
        <SectionHead
          eyebrow="theLaraSoft"
          title="Products I built"
          hint="Live products from the agency I founded. Each card opens the real site."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section">
        <OpenSource />
      </Reveal>

      <section aria-label="Projects">
        <SectionHead eyebrow="Client and enterprise work" title="Projects" />

        <Reveal as="article" className="mb-3 rounded-2xl border border-primary/30 bg-card p-5 sm:p-6">
          <p className="eyebrow">Featured · {featured.type}</p>
          <h3 className="mt-1 text-xl font-semibold">{featured.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{featured.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {featured.tech.map((t) => (
              <Chip key={t} tone="accent">
                {t}
              </Chip>
            ))}
          </div>
        </Reveal>

        <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
          {shown.map((p) => (
            <li key={p.title} className="flex items-start gap-4 p-4 transition-colors hover:bg-secondary/60">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Layers className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span className="text-xs text-muted-foreground">{p.type}</span>
                </div>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{p.line}</p>
                <p className="mt-2 flex flex-wrap items-center gap-x-1.5 text-xs text-muted-foreground">
                  <Tag className="h-3 w-3" aria-hidden="true" />
                  {p.tech.join(", ")}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {rest.length > FIRST && (
          <button
            type="button"
            onClick={() => setAll((v) => !v)}
            aria-expanded={all}
            className="mx-auto mt-5 block rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium transition-colors hover:border-primary/60"
          >
            {all ? "Show fewer projects" : `Show all ${rest.length + 1} projects`}
          </button>
        )}
      </section>
    </div>
  );
}
