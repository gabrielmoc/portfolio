
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TechSkillsTab from "./about/TechSkillsTab";
import ExperienceTab from "./about/ExperienceTab";
import EducationTab from "./about/EducationTab";
import ComplementaryTab from "./about/ComplementaryTab";

interface AboutSectionProps {
  isDarkMode: boolean;
}

const AboutSection = ({ isDarkMode }: AboutSectionProps) => {
  const [activeTab, setActiveTab] = useState("linguagens");

  return (
    <section id="about" className={`py-20 px-4 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-slate-900/50' 
        : 'bg-slate-50'
    }`}>
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-colors duration-300 ${
          isDarkMode 
            ? 'text-white' 
            : 'text-slate-800'
        }`}>
          Sobre Mim
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Image and intro */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
                alt="Programação e desenvolvimento"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
            </div>
            
            <div className={`rounded-2xl p-6 border transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/80 border-slate-700' 
                : 'bg-white border-slate-200'
            }`}>
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-300' 
                  : 'text-slate-600'
              }`}>
                Nascido em Recife - PE, ao longo de 4 anos de experiência, busco estar sempre à frente das tendências tecnológicas, criando soluções escaláveis e impactantes para clientes e empresas de diversos setores.
                <br /><br />
                Acredito no poder da tecnologia para simplificar processos e abrir novas oportunidades. Meu propósito é usar minhas habilidades para resolver problemas reais e criar valor duradouro.
                <br /><br />
                Valorizo a criatividade, o compromisso com resultados e a busca constante por aprendizado. Esses princípios guiam meu trabalho e minhas decisões.
              </p>
            </div>
          </div>

          {/* Right side - Tabs */}
          <div className={`rounded-2xl p-6 border transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-slate-800/80 border-slate-700' 
              : 'bg-white border-slate-200'
          }`}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className={`grid w-full grid-cols-2 lg:grid-cols-4 mb-8 p-1 transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-slate-700/80' 
                  : 'bg-slate-100'
              }`}>
                <TabsTrigger 
                  value="linguagens" 
                  className={`text-xs md:text-sm px-2 py-2 transition-all duration-300 hover:scale-105 hover:shadow-sm ${
                    isDarkMode 
                      ? 'text-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-slate-600/50' 
                      : 'text-slate-600 data-[state=active]:bg-blue-500 data-[state=active]:text-white hover:bg-slate-200'
                  }`}
                >
                  Linguagens
                </TabsTrigger>
                <TabsTrigger 
                  value="experiencia" 
                  className={`text-xs md:text-sm px-2 py-2 transition-all duration-300 hover:scale-105 hover:shadow-sm ${
                    isDarkMode 
                      ? 'text-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-slate-600/50' 
                      : 'text-slate-600 data-[state=active]:bg-blue-500 data-[state=active]:text-white hover:bg-slate-200'
                  }`}
                >
                  Experiência
                </TabsTrigger>
                <TabsTrigger 
                  value="formacao" 
                  className={`text-xs md:text-sm px-2 py-2 transition-all duration-300 hover:scale-105 hover:shadow-sm ${
                    isDarkMode 
                      ? 'text-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-slate-600/50' 
                      : 'text-slate-600 data-[state=active]:bg-blue-500 data-[state=active]:text-white hover:bg-slate-200'
                  }`}
                >
                  Formação
                </TabsTrigger>
                <TabsTrigger 
                  value="complementar" 
                  className={`text-xs md:text-sm px-2 py-2 transition-all duration-300 hover:scale-105 hover:shadow-sm ${
                    isDarkMode 
                      ? 'text-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-slate-600/50' 
                      : 'text-slate-600 data-[state=active]:bg-blue-500 data-[state=active]:text-white hover:bg-slate-200'
                  }`}
                >
                  Complementar
                </TabsTrigger>
              </TabsList>

              <TabsContent value="linguagens" className="space-y-6">
                <TechSkillsTab isDarkMode={isDarkMode} />
              </TabsContent>

              <TabsContent value="experiencia" className="space-y-4">
                <ExperienceTab isDarkMode={isDarkMode} />
              </TabsContent>

              <TabsContent value="formacao" className="space-y-4">
                <EducationTab isDarkMode={isDarkMode} />
              </TabsContent>

              <TabsContent value="complementar" className="space-y-4">
                <ComplementaryTab isDarkMode={isDarkMode} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
