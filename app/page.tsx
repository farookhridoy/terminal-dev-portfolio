"use client";

import { useCallback, useEffect, useState } from "react";
import Sidebar, { type SectionId } from "@/components/shell/Sidebar";
import MobileBar from "@/components/shell/MobileBar";
import ProfileHero from "@/components/shell/ProfileHero";
import ResumeTab from "@/components/shell/ResumeTab";
import WorkTab from "@/components/shell/WorkTab";
import PostsTab from "@/components/shell/PostsTab";
import RightRail from "@/components/shell/RightRail";
import StructuredData from "@/components/seo/StructuredData";

type Tab = "resume" | "work" | "posts";
const tabs: { id: Tab; label: string }[] = [
    { id: "resume", label: "Resume" },
    { id: "work", label: "Work" },
    { id: "posts", label: "Posts" },
];

const isTab = (v: string): v is Tab => tabs.some((t) => t.id === v);

export default function Home() {
    const [tab, setTab] = useState<Tab>("resume");
    const [active, setActive] = useState<SectionId>("profile");

    // The address bar (#resume, #work, #posts, #contact) picks the tab, so tabs can be linked to.
    const syncFromHash = useCallback(() => {
        const h = window.location.hash.slice(1);
        if (isTab(h)) setTab(h);
        if (h === "resume" || h === "work") setActive(h);
        else if (h === "posts") setActive("work");
        else if (h === "contact" || h === "profile") setActive(h);
    }, []);

    useEffect(() => {
        syncFromHash();
        window.addEventListener("hashchange", syncFromHash);
        return () => window.removeEventListener("hashchange", syncFromHash);
    }, [syncFromHash]);

    // Keep the highlighted nav item in step with scrolling.
    useEffect(() => {
        const targets = ["profile", "tabs"]
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => !!el);
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (!e.isIntersecting) continue;
                    if (e.target.id === "profile") setActive("profile");
                    else setActive(tab === "resume" ? "resume" : "work");
                }
            },
            { rootMargin: "-40% 0px -55% 0px" },
        );
        targets.forEach((t) => io.observe(t));
        return () => io.disconnect();
    }, [tab]);

    function choose(next: Tab) {
        setTab(next);
        history.replaceState(null, "", `#${next}`);
        setActive(next === "resume" ? "resume" : "work");
    }

    return (
        <>
            <StructuredData />
            <MobileBar active={active} />
            <div className="mx-auto grid min-h-screen max-w-[1500px] lg:grid-cols-[16rem_minmax(0,1fr)] xl:grid-cols-[16rem_minmax(0,1fr)_21rem]">
                <Sidebar active={active} />

                <main className="min-w-0 pb-6 lg:pb-0">
                    <ProfileHero />

                    <div id="tabs" className="scroll-mt-16">
                        <div
                            role="tablist"
                            aria-label="Portfolio sections"
                            className="sticky top-[57px] z-20 flex justify-center gap-8 border-b border-border bg-background/90 backdrop-blur lg:top-0"
                        >
                            {tabs.map((t) => (
                                <button
                                    key={t.id}
                                    role="tab"
                                    id={`tab-${t.id}`}
                                    aria-selected={tab === t.id}
                                    aria-controls={`panel-${t.id}`}
                                    onClick={() => choose(t.id)}
                                    className={`-mb-px border-b-2 px-1 py-3.5 text-sm font-semibold tracking-wide transition-colors ${
                                        tab === t.id
                                            ? "border-primary text-primary"
                                            : "border-transparent text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>

                        <div
                            role="tabpanel"
                            id={`panel-${tab}`}
                            aria-labelledby={`tab-${tab}`}
                            className="mx-auto max-w-3xl px-5 py-10 sm:px-8"
                        >
                            {tab === "resume" && <ResumeTab />}
                            {tab === "work" && <WorkTab />}
                            {tab === "posts" && <PostsTab />}
                        </div>
                    </div>
                </main>

                {/* One rail: beside the content on wide screens, under it everywhere else. */}
                <aside className="px-5 pb-28 sm:px-8 lg:col-start-2 lg:pb-10 xl:col-start-3 xl:row-start-1 xl:sticky xl:top-0 xl:h-screen xl:overflow-y-auto xl:border-l xl:border-border xl:px-5 xl:py-8">
                    <div className="mx-auto max-w-3xl xl:max-w-none">
                        <RightRail />
                    </div>
                </aside>
            </div>
        </>
    );
}
