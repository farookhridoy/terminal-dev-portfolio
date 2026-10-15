"use client";

import { useEffect, useState } from "react";

export type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
};

type State = { status: "loading" } | { status: "error" } | { status: "ready"; repos: Repo[] };

/** The owner's own public repositories (forks, archived ones and the profile README repo left out): most starred first, then most recently pushed. */
export function useGithubRepos(user: string): State {
  const [state, setState] = useState<State>({ status: "loading" });
  useEffect(() => {
    const ctl = new AbortController();
    type Raw = Repo & { fork: boolean; archived: boolean };

    // GitHub returns at most 100 repositories per page, so keep asking until a page comes back short.
    async function loadAll(): Promise<Raw[]> {
      const all: Raw[] = [];
      for (let page = 1; page <= 5; page++) {
        const res = await fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed&page=${page}`, {
          signal: ctl.signal,
        });
        if (!res.ok) throw new Error(String(res.status));
        const batch: Raw[] = await res.json();
        all.push(...batch);
        if (batch.length < 100) break;
      }
      return all;
    }

    loadAll()
      .then((all) =>
        setState({
          status: "ready",
          repos: all
            .filter((r) => !r.fork && !r.archived && r.name.toLowerCase() !== user.toLowerCase())
            .sort((a, b) => b.stargazers_count - a.stargazers_count || b.pushed_at.localeCompare(a.pushed_at)),
        }),
      )
      .catch((e) => {
        if (e?.name !== "AbortError") setState({ status: "error" });
      });
    return () => ctl.abort();
  }, [user]);
  return state;
}
