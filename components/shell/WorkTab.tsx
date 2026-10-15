"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Layers, Star, Tag } from "lucide-react";
import Chip from "./Chip";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { hiddenRepos, liveProjects, projectCategories, products, projects, profile, repoFallbackDescriptions, type ProjectCategory } from "@/lib/content";
import { useGithubRepos, type Repo } from "@/hooks/use-github-repos";

const REPOS_FIRST = 6;

function OpenSource() {
  const raw = useGithubRepos(profile.githubUser);
  const state = useMemo(
    () => (raw.status === "ready" ? { ...raw, repos: raw.repos.filter((r) => !hiddenRepos.includes(r.name)) } : raw),
    [raw],
  );
  const [all, setAll] = useState(false);
  return (
    <section aria-label="Open source on GitHub">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">GitHub</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">Open source</h2>
          {state.status === "ready" && (
            <p className="mt-1 text-sm text-muted-foreground">{state.repos.length} public repositories of my own.</p>
          )}
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
        <>
          <ul className="grid gap-3 sm:grid-cols-2">
            {state.repos.slice(0, REPOS_FIRST).map((r) => (
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
                  <RepoMeta r={r} />
                </a>
              </li>
            ))}
          </ul>

          {all && (
            <ul className="mt-3 divide-y divide-border rounded-2xl border border-border bg-card">
              {state.repos.slice(REPOS_FIRST).map((r) => (
                <li key={r.name}>
                  <a
                    href={r.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-secondary/60"
                  >
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">{r.name}</span>
                      {(r.description ?? repoFallbackDescriptions[r.name]) && (
                        <span className="block truncate text-xs text-muted-foreground">
                          {r.description ?? repoFallbackDescriptions[r.name]}
                        </span>
                      )}
                    </span>
                    <RepoMeta r={r} inline />
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          )}

          {state.repos.length > REPOS_FIRST && (
            <button
              type="button"
              onClick={() => setAll((v) => !v)}
              aria-expanded={all}
              className="mx-auto mt-5 block rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium transition-colors hover:border-primary/60"
            >
              {all ? "Show fewer repositories" : `Show all ${state.repos.length} repositories`}
            </button>
          )}
        </>
      )}
    </section>
  );
}

function RepoMeta({ r, inline = false }: { r: Repo; inline?: boolean }) {
  return (
    <span className={`flex items-center gap-3 text-xs text-muted-foreground ${inline ? "shrink-0" : "mt-auto pt-3"}`}>
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

const GALLERY_FIRST = 6;

function LiveProjects() {
  const [cat, setCat] = useState<ProjectCategory | "All">("All");
  const [more, setMore] = useState(false);
  const list = cat === "All" ? liveProjects : liveProjects.filter((p) => p.category === cat);
  const shown = more ? list : list.slice(0, GALLERY_FIRST);
  const pick = (c: ProjectCategory | "All") => {
    setCat(c);
    setMore(false);
  };
  return (
    <section aria-label="Live projects">
      <SectionHead
        eyebrow="Websites and platforms"
        title="Live projects"
        hint="A selection of sites and platforms I have built, across e-commerce, EdTech, corporate and SaaS."
      />
      <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {(["All", ...projectCategories] as const).map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={cat === c}
            onClick={() => pick(c)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              cat === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {c}
            <span className="ml-1.5 text-xs opacity-70">
              {c === "All" ? liveProjects.length : liveProjects.filter((p) => p.category === c).length}
            </span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.ul layout className="grid gap-4 sm:grid-cols-2">
          {shown.map((p) => (
            <motion.li
              layout
              key={p.name}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22 }}
            >
              <ProductCard p={{ name: p.name, line: p.line, tags: p.tags, image: p.image, href: p.href }} />
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
      {list.length > GALLERY_FIRST && (
        <button
          type="button"
          onClick={() => setMore((v) => !v)}
          aria-expanded={more}
          className="mx-auto mt-5 block rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium transition-colors hover:border-primary/60"
        >
          {more ? "Show fewer" : `Show all ${list.length}`}
        </button>
      )}
    </section>
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
          hint="Products from the agency I founded. Each card opens the real site."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <LiveProjects />

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
