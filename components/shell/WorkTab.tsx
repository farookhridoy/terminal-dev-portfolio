"use client";

import { useState } from "react";
import { ArrowUpRight, Layers, Star } from "lucide-react";
import Chip from "./Chip";
import { projects, profile, repoFallbackDescriptions } from "@/lib/content";
import { useGithubRepos } from "@/hooks/use-github-repos";

function OpenSource() {
  const state = useGithubRepos(profile.githubUser);
  return (
    <section aria-label="Open source on GitHub">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight">Open source</h2>
        <a
          href={`https://github.com/${profile.githubUser}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
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

export default function WorkTab() {
  const [featured, ...rest] = projects;
  const [all, setAll] = useState(false);
  const shown = all ? rest : rest.slice(0, FIRST);
  return (
    <div className="space-y-12">
      <OpenSource />

      <section aria-label="Projects">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Projects</h2>

        <article className="mb-4 rounded-2xl border border-primary/30 bg-card p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Featured · {featured.type}</p>
          <h3 className="mt-1 text-xl font-semibold">{featured.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{featured.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {featured.tech.map((t) => (
              <Chip key={t} tone="accent">
                {t}
              </Chip>
            ))}
          </div>
        </article>

        <ul className="grid gap-3 sm:grid-cols-2">
          {shown.map((p) => (
            <li key={p.title} className="flex flex-col rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <Layers className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-primary">{p.type}</p>
                  <h3 className="truncate font-semibold">{p.title}</h3>
                </div>
              </div>
              <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 4).map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {rest.length > FIRST && (
          <button
            type="button"
            onClick={() => setAll((v) => !v)}
            aria-expanded={all}
            className="mx-auto mt-5 block rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/60"
          >
            {all ? "Show fewer projects" : `Show all ${rest.length + 1} projects`}
          </button>
        )}
      </section>
    </div>
  );
}
