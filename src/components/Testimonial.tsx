
import { Card, CardContent } from "@/components/ui/card";

const Testimonial = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          What Clients Say
        </h2>
        
        <Card className="bg-gray-800/80 border-gray-700 p-8 md:p-12">
          <CardContent className="text-center">
            <div className="text-6xl text-emerald-400 mb-6">"</div>
            <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
              Gabriel delivered exactly what we needed - a professional, fast-loading website 
              that perfectly represents our brand. His attention to detail and technical expertise 
              made the entire process smooth and enjoyable. Highly recommended!
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center border border-emerald-600/30">
                <span className="text-emerald-400 font-bold text-xl">M</span>
              </div>
              <div>
                <div className="text-white font-semibold text-lg">Maria Silva</div>
                <div className="text-gray-400">CEO, TechStart Solutions</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Testimonial;
