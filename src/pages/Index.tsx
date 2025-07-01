
import { useState } from "react";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'dark bg-black text-white' 
        : 'bg-white text-slate-800'
    }`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <HomeSection isDarkMode={isDarkMode} />
      <AboutSection isDarkMode={isDarkMode} />
      <ServicesSection isDarkMode={isDarkMode} />
      <PortfolioSection isDarkMode={isDarkMode} />
      <ContactSection isDarkMode={isDarkMode} />
    </div>
  );
};

export default Index;
