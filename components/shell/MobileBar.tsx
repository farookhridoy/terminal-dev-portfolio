"use client";

import { navItems, ThemeToggle, type SectionId } from "./Sidebar";
import { profile } from "@/lib/content";

/** Phone and tablet navigation: a slim top bar and a bottom tab bar (the sidebar is desktop only). */
export default function MobileBar({ active }: { active: SectionId }) {
  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/90 px-4 py-3 backdrop-blur lg:hidden">
        <a href="#profile" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">OF</span>
          {profile.name.replace("MD. ", "")}
        </a>
        <ThemeToggle className="h-9 w-9" />
      </header>

      <nav
        aria-label="Sections"
        className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
      >
        {navItems.map(({ id, label, href, icon: Icon }) => (
          <a
            key={id}
            href={href}
            aria-current={id === active ? "page" : undefined}
            className={`flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium ${
              id === active ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="h-5 w-5" />
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}
