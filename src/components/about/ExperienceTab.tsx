
import { experiences } from "@/data/aboutData";

interface ExperienceTabProps {
  isDarkMode: boolean;
}

const ExperienceTab = ({ isDarkMode }: ExperienceTabProps) => {
  return (
    <div className="space-y-4">
      <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
        isDarkMode 
          ? 'text-blue-400' 
          : 'text-blue-700'
      }`}>Experiência Profissional</h3>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className={`rounded-lg p-4 transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-slate-700/50' 
                : 'bg-slate-100'
            }`}
          >
            <h4 className={`font-semibold transition-colors duration-300 ${
              isDarkMode 
                ? 'text-white' 
                : 'text-slate-800'
            }`}>{exp.company}</h4>
            <p className={`text-sm transition-colors duration-300 ${
              isDarkMode 
                ? 'text-blue-400' 
                : 'text-blue-700'
            }`}>{exp.position}</p>
            <p className={`text-sm transition-colors duration-300 ${
              isDarkMode 
                ? 'text-gray-400' 
                : 'text-slate-500'
            }`}>{exp.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTab;
