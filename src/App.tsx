import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ApproachSection from './components/ApproachSection';
import ContactSection from './components/ContactSection';
import FloatingTelegramButton from './components/FloatingTelegramButton';

const App: React.FC = () => {
  return (
    <div className="bg-bg-primary min-h-screen">
      <Navbar />
      <main id="main-container" className="scroll-container">
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <FloatingTelegramButton />
    </div>
  );
};

export default App;

