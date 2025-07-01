
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Custom Websites",
      description: "Tailored websites built from scratch to match your brand and business needs with responsive design and modern functionality.",
      icon: "🌐"
    },
    {
      title: "Landing Pages",
      description: "High-converting landing pages optimized for performance and user experience to maximize your marketing campaigns.",
      icon: "🎯"
    },
    {
      title: "Web Systems",
      description: "Complex web applications and systems designed to streamline your business processes and improve efficiency.",
      icon: "⚙️"
    },
    {
      title: "Dashboards",
      description: "Interactive dashboards and admin panels that provide clear insights into your data and business metrics.",
      icon: "📊"
    },
    {
      title: "E-commerce Solutions",
      description: "Full-featured online stores with secure payment processing, inventory management, and customer analytics.",
      icon: "🛒"
    },
    {
      title: "API Development",
      description: "Robust backend APIs and integrations to connect your applications with third-party services and databases.",
      icon: "🔗"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Services
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          I offer comprehensive web development services to help bring your digital vision to life
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-gray-800/80 border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
