
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "gabriel@example.com",
      href: "mailto:gabriel@example.com",
      color: "text-red-400"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 11 99999-9999",
      href: "https://wa.me/5511999999999",
      color: "text-green-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/gabriel",
      href: "https://github.com/gabriel",
      color: "text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/gabriel",
      href: "https://linkedin.com/in/gabriel",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Let's Work Together
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          Ready to bring your project to life? I'd love to hear about your ideas and 
          discuss how we can create something amazing together.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {contactMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <Card key={method.label} className="bg-gray-800/80 border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-white">
                    <IconComponent className={`w-6 h-6 ${method.color}`} />
                    <span>{method.label}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="link" 
                    className="text-emerald-400 hover:text-emerald-300 p-0 h-auto text-base"
                    onClick={() => window.open(method.href, '_blank')}
                  >
                    {method.value}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('mailto:gabriel@example.com', '_blank')}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
