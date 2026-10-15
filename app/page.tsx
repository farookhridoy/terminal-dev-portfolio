"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Sidebar, { type SectionId } from "@/components/shell/Sidebar";
import MobileBar from "@/components/shell/MobileBar";
import ProfileHero from "@/components/shell/ProfileHero";
import ResumeTab from "@/components/shell/ResumeTab";
import WorkTab from "@/components/shell/WorkTab";
import PostsTab from "@/components/shell/PostsTab";
import RightRail from "@/components/shell/RightRail";
import ContactBand from "@/components/shell/ContactBand";
import ContactPage from "@/components/shell/ContactPage";
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
    // "contact" is its own page inside the shell; everything else is the profile with its tabs.
    const [view, setView] = useState<"profile" | "contact">("profile");
    const [collapsed, setCollapsed] = useState(false);

    // Remember the sidebar choice. Storage can be blocked, so every access is guarded.
    useEffect(() => {
        try {
            setCollapsed(localStorage.getItem("sidebar") === "collapsed");
        } catch {
            /* storage unavailable */
        }
    }, []);
    const toggleSidebar = () =>
        setCollapsed((c) => {
            try {
                localStorage.setItem("sidebar", c ? "open" : "collapsed");
            } catch {
                /* storage unavailable */
            }
            return !c;
        });

    // The address bar (#resume, #work, #posts, #contact) picks the view and tab, so everything can be linked to.
    const syncFromHash = useCallback(() => {
        const h = window.location.hash.slice(1);
        if (h === "contact") {
            setView("contact");
            setActive("contact");
            window.scrollTo(0, 0);
            return;
        }
        setView("profile");
        if (isTab(h)) {
            setTab(h);
            setActive(h);
            // Nav links point at #resume / #work / #posts, which are not elements, so scroll to the tabs ourselves.
            requestAnimationFrame(() => document.getElementById("tabs")?.scrollIntoView());
        } else if (h === "profile") {
            setActive("profile");
            window.scrollTo(0, 0);
        }
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
                    else setActive(tab);
                }
            },
            { rootMargin: "-40% 0px -55% 0px" },
        );
        targets.forEach((t) => io.observe(t));
        return () => io.disconnect();
    }, [tab, view]);

    function choose(next: Tab) {
        setTab(next);
        history.replaceState(null, "", `#${next}`);
        setActive(next);
        // Bring the new tab's content into view if the visitor had scrolled far down the previous one.
        const top = document.getElementById("tabs");
        if (top && window.scrollY > top.offsetTop) top.scrollIntoView();
    }

    return (
        <MotionConfig reducedMotion="user">
            <StructuredData />
            <a
                href="#tabs"
                className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
                Skip to content
            </a>
            <MobileBar active={active} />
            <div
                className={`mx-auto grid min-h-screen max-w-[1500px] transition-[grid-template-columns] duration-300 ${
                    collapsed
                        ? "lg:grid-cols-[4.5rem_minmax(0,1fr)] xl:grid-cols-[4.5rem_minmax(0,1fr)_21rem]"
                        : "lg:grid-cols-[16rem_minmax(0,1fr)] xl:grid-cols-[16rem_minmax(0,1fr)_21rem]"
                }`}
            >
                <Sidebar active={active} collapsed={collapsed} onToggle={toggleSidebar} />

                <main className="min-w-0 pb-6 lg:pb-0">
                    {view === "contact" ? (
                        <motion.div key="contact" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                            <ContactPage />
                        </motion.div>
                    ) : (
                        <>
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

                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={tab}
                                        role="tabpanel"
                                        id={`panel-${tab}`}
                                        aria-labelledby={`tab-${tab}`}
                                        className="mx-auto max-w-3xl px-5 py-10 sm:px-8"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        transition={{ duration: 0.18 }}
                                    >
                                        {tab === "resume" && <ResumeTab />}
                                        {tab === "work" && <WorkTab />}
                                        {tab === "posts" && <PostsTab />}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <ContactBand />
                        </>
                    )}
                </main>

                {/* One rail: beside the content on wide screens, under it everywhere else. */}
                <aside className="px-5 pb-28 sm:px-8 lg:col-start-2 lg:pb-10 xl:col-start-3 xl:row-start-1 xl:sticky xl:top-0 xl:h-screen xl:overflow-y-auto xl:border-l xl:border-border xl:px-5 xl:py-8">
                    <div className="mx-auto max-w-3xl xl:max-w-none">
                        <RightRail compact={view === "contact"} />
                    </div>
                </aside>
            </div>
        </MotionConfig>
    );
}
