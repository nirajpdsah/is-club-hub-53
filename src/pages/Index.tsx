
import React from 'react';
import HeroSection from '../components/HeroSection';
import BriefAbout from '../components/BriefAbout';
import CountdownTimer from '../components/CountdownTimer';
import FocusAreasSection from '../components/FocusAreasSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BriefAbout />
      <CountdownTimer />
      <FocusAreasSection />
      <ContactSection />
    </div>
  );
};

export default Index;
