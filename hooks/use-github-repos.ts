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

/** The owner's own public repositories (forks and archived ones left out), most recently pushed first. */
export function useGithubRepos(user: string, limit = 6): State {
  const [state, setState] = useState<State>({ status: "loading" });
  useEffect(() => {
    const ctl = new AbortController();
    fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed`, { signal: ctl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((all: (Repo & { fork: boolean; archived: boolean })[]) =>
        setState({ status: "ready", repos: all.filter((r) => !r.fork && !r.archived).slice(0, limit) }),
      )
      .catch((e) => {
        if (e?.name !== "AbortError") setState({ status: "error" });
      });
    return () => ctl.abort();
  }, [user, limit]);
  return state;
}
