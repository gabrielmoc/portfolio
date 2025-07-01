
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  Palette, 
  Smartphone, 
  Zap, 
  BarChart3, 
  Rocket, 
  TrendingUp, 
  Link 
} from "lucide-react";

interface ServicesSectionProps {
  isDarkMode: boolean;
}

const ServicesSection = ({ isDarkMode }: ServicesSectionProps) => {
  const services = [
    {
      title: "Solução Personalizada",
      description: "Criação de sites e/ou aplicações dinâmicas e modernas para empresas, portfólios, blogs e e-commerces, seja qual for o nicho ou a proposta do projeto.",
      icon: Target
    },
    {
      title: "Identidade Visual",
      description: "Layouts e conceitos visuais estratégicos. Se ainda não houver uma identidade visual definida, criamos esboços e sugestões personalizadas para o projeto.",
      icon: Palette
    },
    {
      title: "Responsividade",
      description: "Sites e sistemas que se adaptam perfeitamente a qualquer dispositivo, garantindo uma experiência impecável em desktops, tablets e smartphones.",
      icon: Smartphone
    },
    {
      title: "Melhoria e Desempenho",
      description: "Atualizações regulares, ajustes de desempenho e melhorias para garantir velocidade e segurança, tal qual implementação de SEO técnico e boas práticas.",
      icon: Zap
    },
    {
      title: "Planejamento Digital",
      description: "Análise e planejamento estratégico para otimizar seu site ou sistema digital.",
      icon: BarChart3
    },
    {
      title: "Agilidade e Eficiência",
      description: "Soluções rápidas e otimizadas, com foco em entregar resultados sem comprometer a qualidade.",
      icon: Rocket
    },
    {
      title: "Painéis Administrativos",
      description: "Dashboards e sistemas de gestão personalizados, com visual claro e intuitivo, para facilitar a tomada de decisões e otimizar a operação do seu negócio.",
      icon: TrendingUp
    },
    {
      title: "Integração com APIs",
      description: "Integração completa com APIs e serviços externos para expandir as funcionalidades da sua aplicação de forma inteligente e segura.",
      icon: Link
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 transition-colors duration-300 ${
          isDarkMode 
            ? 'text-white' 
            : 'text-slate-800'
        }`}>
          Serviços
        </h2>
        <p className={`text-center mb-16 max-w-2xl mx-auto text-lg transition-colors duration-300 ${
          isDarkMode 
            ? 'text-gray-400' 
            : 'text-slate-600'
        }`}>
          Ofereço soluções completas de desenvolvimento web para transformar sua visão digital em realidade
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className={`hover:transform hover:scale-105 transition-all duration-300 group ${
                  isDarkMode 
                    ? 'bg-slate-800/80 border-slate-700 hover:border-blue-500/50' 
                    : 'bg-white border-slate-200 hover:border-blue-500/50 hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-8 h-8 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-700'
                    }`} />
                  </div>
                  <CardTitle className={`text-lg transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-white' 
                      : 'text-slate-800'
                  }`}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-gray-300' 
                      : 'text-slate-600'
                  }`}>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
