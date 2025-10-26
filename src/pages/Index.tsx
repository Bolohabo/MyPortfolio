import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Index: React.FC = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  // Set page title
  useEffect(() => {
    document.title = 'Portfolio | Creative Developer';
  }, []);
  
  return (
    <div className="app" style={{ overflowX: 'hidden' }}>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
