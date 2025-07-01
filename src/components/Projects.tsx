
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online marketplace with advanced filtering, secure payments, and real-time inventory management.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Restaurant Management System",
      description: "Complete restaurant management solution with POS integration, inventory tracking, and customer analytics.",
      tech: ["Angular", "Firebase", "Node.js", "Payment APIs"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Healthcare Dashboard",
      description: "Medical practice management dashboard with patient records, appointment scheduling, and reporting features.",
      tech: ["React", "PostgreSQL", "Node.js", "Chart.js"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and integrated CRM for real estate agents.",
      tech: ["WordPress", "Custom PHP", "MySQL", "Google Maps API"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Financial Analytics Tool",
      description: "Business intelligence platform for financial data analysis with interactive charts and automated reporting.",
      tech: ["React", "Node.js", "PostgreSQL", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management, progress tracking, and interactive learning modules.",
      tech: ["React", "Firebase", "Node.js", "Video APIs"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          A showcase of my recent work and the technologies I use to solve real-world problems
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-gray-800/80 border-gray-700 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-emerald-600/20 text-emerald-300 text-sm px-3 py-1 rounded-full border border-emerald-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
