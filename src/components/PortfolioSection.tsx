
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PortfolioSectionProps {
  isDarkMode: boolean;
}

const PortfolioSection = ({ isDarkMode }: PortfolioSectionProps) => {
  const projects = [
    {
      title: "Plataforma E-commerce",
      description: "Loja Virtual completa e funcional, com integração de checkout de pagamento, cadastro/login, cálculo automático de frete, cadastro de produtos, divisão por categorias e gestão de estoque.",
      tech: ["WordPress", "PostgreSQL", "APIs Externas", "HTML", "CSS", "JavaScript", "WooCommerce"],
      image: "https://gabrielcavalcanti.tech/wp-content/uploads/2024/12/cherry-site.jpeg",
      link: "https://cherryhomedecor.com.br/"
    },
    {
      title: "Site Institucional com Blog",
      description: "Site institucional moderno e responsivo, com blog dinâmico para postagens, sistema de cadastro e login de usuários, área restrita com controle de acesso e painel administrativo completo para gerenciamento de conteúdo.",
      tech: ["React", "Node.js", "PostgreSQL", "JWT"],
      image: "https://gabrielcavalcanti.tech/wp-content/uploads/2025/05/avivia.jpeg",
      link: "https://www.avivia.com.br/"
    },
    {
      title: "Site Institucional com Blog",
      description: "Site institucional moderno e responsivo, com blog dinâmico para postagens, sistema de cadastro e login de usuários, área restrita com controle de acesso e painel administrativo completo para gerenciamento de conteúdo.",
      tech: ["WordPress", "Elementor", "PHP", "JavaScript"],
      image: "https://gabrielcavalcanti.tech/wp-content/uploads/2025/03/marchef.jpeg",
      link: "https://marchefpescados.com.br/"
    },
    {
      title: "Portal de Notícias",
      description: "Portal de notícias, com carrossel de notícias e controle de posts e área de membros.",
      tech: ["Angular", "Go Lang", "TypeScript", "MySQL"],
      image: "https://gabrielcavalcanti.tech/wp-content/uploads/2024/12/ceustudio-site.jpeg",
      link: "https://gabrielcavalcanti.tech/wp-content/uploads/2024/12/ceustudio-site.jpeg"
    },
    {
      title: "Site Institucional com Aplicação",
      description: "Site Institucional com aplicação de monitoramento do estoque (gestão das importações).",
      tech: ["React", "Node", "Firebase", "PostgreSQL"],
      image: "https://gabrielcavalcanti.tech/wp-content/uploads/2024/12/migusmar-site.jpeg",
      link: "https://migusmar.com.br/"
    },
    {
      title: "Site Institucional com Blog",
      description: "Site Institucional com blog, e controle de publicações, separados por categorias.",
      tech: ["WordPress", "Elementor", "PHP", "JavaScript"],
      image: "https://gabrielcavalcanti.tech/wp-content/uploads/2025/03/portal-brasil.jpeg",
      link: "https://portalbrasilofficial.com/"
    },
    {
      title: "Plataforma E-commerce",
      description: "Loja Virtual completa e funcional, com integração de checkout de pagamento, cadastro/login, cálculo automático de frete, cadastro de produtos, divisão por categorias e gestão de estoque.",
      tech: ["WordPress", "PostgreSQL", "APIs Externas", "HTML", "CSS", "PHP", "JavaScript", "WooCommerce"],
      image: "https://gabrielcavalcanti.tech/wp-content/uploads/2025/07/jkaibrindes-scaled.png",
      link: "https://jkaibrindes.com.br/"
    },
    {
      title: "Portfólio Profissional",
      description: "Portfólio profissional com listagem de serviços e projetos já realizados. Foco em performance e credibilidade, visando captação de novos clientes.",
      tech: ["React", "HTML", "CSS", "JavaScript"],
      image: "https://gabrielcavalcanti.tech/wp-content/uploads/2025/07/GC.png",
      link: "https://gabrielcavalcanti.tech/"
    },
    {
      title: "Site Institucional",
      description: "Landing pages institucionais pensadas para destacar os diferenciais da sua empresa, construir autoridade e atrair mais oportunidades de negócio. Foco em performance e credibilidade.",
      tech: ["React", "HTML", "CSS", "JavaScript"],
      image: "https://gabrielcavalcanti.tech/wp-content/uploads/2024/12/triv-site.jpeg",
      link: "https://agenciatriv.com.br/"
    },
    {
      title: "Landing Page Profissional",
      description: "Landing page profissional que une design moderno, boa usabilidade e comunicação eficiente para apresentação da profissional.",
      tech: ["React", "HTML", "CSS", "JavaScript"],
      image: "https://gabrielcavalcanti.tech/wp-content/uploads/2025/07/psi.png",
      link: "https://psilucianaprazeres.netlify.app/"
    },
    {
      title: "Landing Page Profissional",
      description: "Landing pages institucionais pensadas para destacar os diferenciais da sua empresa, construir autoridade e atrair mais oportunidades de negócio. Foco em performance e credibilidade.",
      tech: ["React", "HTML", "CSS", "JavaScript"],
      image: "https://gabrielcavalcanti.tech/wp-content/uploads/2025/05/mkfretes.jpeg",
      link: "https://mkfretesemudancas.com.br/"
    },
    {
      title: "Landing Page Profissional",
      description: "Landing pages institucionais pensadas para destacar os diferenciais da sua empresa, construir autoridade e atrair mais oportunidades de negócio. Foco em performance e credibilidade.",
      tech: ["React", "HTML", "CSS", "JavaScript"],
      image: "https://gabrielcavalcanti.tech/wp-content/uploads/2024/12/crcode-site.jpeg",
      link: "https://crcode.com.br/"
    }
  ];

  return (
    <section id="portfolio" className={`py-20 px-4 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-slate-900/30' 
        : 'bg-slate-50/50'
    }`}>
      <div className="container mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 transition-colors duration-300 ${
          isDarkMode 
            ? 'text-white' 
            : 'text-slate-800'
        }`}>
          Portfolio
        </h2>
        <p className={`text-center mb-16 max-w-2xl mx-auto text-lg transition-colors duration-300 ${
          isDarkMode 
            ? 'text-gray-400' 
            : 'text-slate-600'
        }`}>
          Alguns dos projetos que desenvolvi e as tecnologias utilizadas para resolver problemas reais
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title + index} 
              className={`overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group ${
                isDarkMode 
                  ? 'bg-slate-800/80 border-slate-700 hover:border-blue-500/50' 
                  : 'bg-white border-slate-200 hover:border-blue-500/50 hover:shadow-lg'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className={`text-lg transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-white' 
                    : 'text-slate-800'
                }`}>{project.title}</CardTitle>
                <CardDescription className={`text-sm leading-relaxed transition-colors duration-300 ${
                  isDarkMode 
                    ? 'text-gray-300' 
                    : 'text-slate-600'
                }`}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className={`text-xs px-2 py-1 rounded-full border transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-blue-600/20 text-blue-300 border-blue-600/30' 
                          : 'bg-blue-100 text-blue-700 border-blue-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className={`w-full transition-all duration-300 ${
                    isDarkMode 
                      ? 'border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent' 
                      : 'border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent'
                  }`}
                  onClick={() => window.open(project.link, '_blank')}
                >
                  Visualizar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
