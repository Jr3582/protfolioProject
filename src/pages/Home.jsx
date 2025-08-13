import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* Nav Bar */}
            <NavBar />

            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <HeroSection></HeroSection>

                {/* About Me Section */}
                <AboutSection></AboutSection>

                {/* Skills Section */}
                <SkillsSection></SkillsSection>

                {/* Skills Section */}
                <ProjectSection></ProjectSection>

                {/* Contact Section */}
                <ContactSection></ContactSection>



            </main>

            {/* Footer */}
        </div>
    );
};