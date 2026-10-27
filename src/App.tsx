import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import type { Project } from './data/projects';
import './style.css';

function PortfolioContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app">
      {/* Dynamic ambient blur blobs */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
        <div className="ambient-blob-3" />
      </div>

      <Navbar
        onContactClick={scrollToContact}
        onViewResumeClick={() => setIsResumeOpen(true)}
      />

      <main>
        <Hero
          onContactClick={scrollToContact}
          onViewResumeClick={() => setIsResumeOpen(true)}
        />
        <AboutSection
          onViewResumeClick={() => setIsResumeOpen(true)}
        />
        <ExperienceSection />
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
        <SkillsSection />
        <ContactSection />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;
