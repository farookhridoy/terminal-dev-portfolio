import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SkillsSection from "@/components/SkillsSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main">
          <HeroSection />
          <StatsSection />
          <SkillsSection />
          <TechStackSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
