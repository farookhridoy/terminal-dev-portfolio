"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SkillsSection from "@/components/SkillsSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import GithubStatsSection from "@/components/GithubStatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";

export default function Home() {
    return (
        <>
            <StructuredData />
            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <HeroSection />
                    <StatsSection />
                    <SkillsSection />
                    <TechStackSection />
                    <ExperienceSection />
                    <EducationSection />
                    <ProjectsSection />
                    <GithubStatsSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </>
    );
}
