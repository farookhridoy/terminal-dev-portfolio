"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Briefcase, Mail, Moon, Sun, User, FolderGit2, type LucideIcon } from "lucide-react";
import { profile } from "@/lib/content";

export type SectionId = "profile" | "resume" | "work" | "contact";

export const navItems: { id: SectionId; label: string; href: string; icon: LucideIcon }[] = [
  { id: "profile", label: "Profile", href: "#profile", icon: User },
  { id: "resume", label: "Resume", href: "#resume", icon: Briefcase },
  { id: "work", label: "Work", href: "#work", icon: FolderGit2 },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
];

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground ${className}`}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export default function Sidebar({ active }: { active: SectionId }) {
  return (
    <aside className="sticky top-0 hidden h-screen flex-col self-start border-r border-border bg-background px-4 py-6 lg:row-span-2 lg:flex xl:row-span-1">
      <a href="#profile" className="mb-8 flex items-center gap-3 px-2" aria-label={`${profile.name}, home`}>
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary font-bold text-primary-foreground">OF</span>
        <span className="text-lg font-semibold tracking-tight">
          farook<span className="text-muted-foreground">hridoy</span>
        </span>
      </a>

      <nav aria-label="Sections" className="flex flex-col gap-1">
        {navItems.map(({ id, label, href, icon: Icon }) => {
          const on = id === active;
          return (
            <a
              key={id}
              href={href}
              aria-current={on ? "page" : undefined}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                on ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </a>
          );
        })}
      </nav>

      <div className="mt-auto flex items-center justify-between px-2">
        <p className="text-xs leading-snug text-muted-foreground">© {new Date().getFullYear()} Omar Farook Hridoy</p>
        <ThemeToggle />
      </div>
    </aside>
  );
}
