
const About = () => {
  return (
    <section className="py-20 px-4 bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        
        <div className="bg-gray-800/80 rounded-2xl p-8 md:p-12 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer from Brazil with a focus on creating 
                exceptional digital experiences. My journey in web development has led me to 
                specialize in modern technologies that help businesses grow and succeed online.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open-source 
                projects, or helping fellow developers solve complex problems. I believe in 
                writing clean, maintainable code that stands the test of time.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">Core Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {['Node.js', 'React', 'PostgreSQL', 'WordPress', 'Angular', 'Firebase'].map((tech) => (
                    <span 
                      key={tech}
                      className="bg-emerald-600/20 text-emerald-300 px-4 py-2 rounded-lg border border-emerald-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
