"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Briefcase, Mail, Moon, PanelLeftClose, PanelLeftOpen, Sun, User, FolderGit2, MessageSquareText, type LucideIcon } from "lucide-react";
import { profile } from "@/lib/content";

export type SectionId = "profile" | "resume" | "work" | "posts" | "contact";

export const navItems: { id: SectionId; label: string; href: string; icon: LucideIcon }[] = [
  { id: "profile", label: "Profile", href: "#profile", icon: User },
  { id: "resume", label: "Resume", href: "#resume", icon: Briefcase },
  { id: "work", label: "Work", href: "#work", icon: FolderGit2 },
  { id: "posts", label: "Posts", href: "#posts", icon: MessageSquareText },
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

export default function Sidebar({
  active,
  collapsed,
  onToggle,
}: {
  active: SectionId;
  collapsed: boolean;
  onToggle: () => void;
}) {
  return (
    <aside
      className={`sticky top-0 hidden h-screen flex-col self-start border-r border-border bg-background py-6 transition-[padding] lg:row-span-2 lg:flex xl:row-span-1 ${
        collapsed ? "items-center px-2" : "px-4"
      }`}
    >
      <div className={`mb-8 flex items-center ${collapsed ? "flex-col gap-4" : "justify-between px-2"}`}>
        <a href="#profile" className="flex items-center gap-3" aria-label={`${profile.name}, home`}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary font-bold text-primary-foreground">OF</span>
          {!collapsed && (
            <span className="text-lg font-semibold tracking-tight">
              farook<span className="text-muted-foreground">hridoy</span>
            </span>
          )}
        </a>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={!collapsed}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          {collapsed ? <PanelLeftOpen className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
        </button>
      </div>

      <nav aria-label="Sections" className="flex flex-col gap-1">
        {navItems.map(({ id, label, href, icon: Icon }) => {
          const on = id === active;
          return (
            <a
              key={id}
              href={href}
              title={collapsed ? label : undefined}
              aria-label={collapsed ? label : undefined}
              aria-current={on ? "page" : undefined}
              className={`flex items-center rounded-xl text-[15px] font-medium transition-colors ${
                collapsed ? "h-11 w-11 justify-center" : "gap-3 px-4 py-3"
              } ${on ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"}`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {!collapsed && label}
            </a>
          );
        })}
      </nav>

      <div className={`mt-auto flex items-center ${collapsed ? "flex-col gap-3" : "justify-between px-2"}`}>
        {!collapsed && (
          <p className="text-xs leading-snug text-muted-foreground">© {new Date().getFullYear()} Omar Farook Hridoy</p>
        )}
        <ThemeToggle />
      </div>
    </aside>
  );
}
