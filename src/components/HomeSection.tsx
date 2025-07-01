
import { Button } from "@/components/ui/button";
import { MessageCircle, Download } from "lucide-react";

interface HomeSectionProps {
  isDarkMode: boolean;
}

const HomeSection = ({ isDarkMode }: HomeSectionProps) => {
  const handleDownloadResume = () => {
    window.open('https://gabrielcavalcanti.tech/wp-content/uploads/2025/06/Curriculo-de-Gabriel-Cavalcanti-Dev.pdf', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5581982071987', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-40 pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-black via-slate-900 to-blue-900/20' 
          : 'bg-gradient-to-br from-white via-slate-50 to-blue-50'
      }`}></div>
      
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        {/* Profile Picture */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 shadow-2xl transition-colors duration-300 ${
              isDarkMode 
                ? 'border-blue-500/50' 
                : 'border-blue-600/50'
            }`}>
              <img 
                src="/uploads/foto.png" 
                alt="Gabriel Moura de Oliveira Cavalcanti"
                className="w-full h-full object-cover"
              />
            </div>
            <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-blue-500' 
                : 'bg-blue-600'
            }`}>
              <span className="text-white text-sm">👋</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent'
          }`}>
            Gabriel Moura de Oliveira Cavalcanti
          </h1>
          <h2 className={`text-xl md:text-3xl font-semibold mb-6 transition-colors duration-300 ${
            isDarkMode 
              ? 'text-blue-400' 
              : 'text-blue-700'
          }`}>
            Desenvolvedor Full Stack | Front-End & Back-End
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDarkMode 
              ? 'text-gray-300' 
              : 'text-slate-600'
          }`}>
            Seja bem-vindo ao meu site! Meu nome é Gabriel e sou Desenvolvedor Full Stack apaixonado por transformar ideias em soluções digitais de alto impacto.
            <br />
            Vamos construir algo juntos?
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={handleWhatsApp}
            className={`px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
              isDarkMode 
                ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            Fale comigo
          </Button>
          <Button 
            onClick={handleDownloadResume}
            variant="outline"
            className={`px-8 py-3 text-lg rounded-lg transition-all duration-300 flex items-center gap-2 ${
              isDarkMode 
                ? 'border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent'
            }`}
          >
            <Download className="w-5 h-5" />
            Baixar currículo
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className={`absolute top-20 left-10 w-20 h-20 border rounded-full animate-pulse transition-colors duration-300 ${
        isDarkMode 
          ? 'border-blue-500/30' 
          : 'border-blue-600/30'
      }`}></div>
      <div className={`absolute bottom-32 right-16 w-16 h-16 border rounded-lg rotate-45 animate-pulse transition-colors duration-300 ${
        isDarkMode 
          ? 'border-blue-400/40' 
          : 'border-blue-500/40'
      }`}></div>
    </section>
  );
};

export default HomeSection;
