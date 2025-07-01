
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-900/20"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
            Hi, I'm Gabriel
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-emerald-400 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Brazilian developer passionate about building custom websites and web systems. 
            I transform ideas into powerful digital solutions using modern technologies.
          </p>
        </div>
        
        <Button 
          onClick={scrollToProjects}
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </Button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-emerald-500/30 rounded-full"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-emerald-400/40 rounded-lg rotate-45"></div>
    </section>
  );
};

export default Hero;
