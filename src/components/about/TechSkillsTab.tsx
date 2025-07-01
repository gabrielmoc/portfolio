
import TechIcon from "./TechIcon";
import { frontEndTechs, backEndTechs, toolsTechs } from "@/data/aboutData";

interface TechSkillsTabProps {
  isDarkMode: boolean;
}

const TechSkillsTab = ({ isDarkMode }: TechSkillsTabProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
          isDarkMode 
            ? 'text-blue-400' 
            : 'text-blue-700'
        }`}>Front-End</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {frontEndTechs.map((tech) => (
            <div 
              key={tech.name}
              className={`rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-slate-700/50 hover:bg-slate-700 hover:shadow-lg' 
                  : 'bg-slate-100 hover:bg-slate-200 hover:shadow-md'
              }`}
            >
              <TechIcon name={tech.icon} className="w-8 h-8 mx-auto mb-2" />
              <span className={`text-sm font-medium transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-300' 
                  : 'text-slate-600'
              }`}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
          isDarkMode 
            ? 'text-blue-400' 
            : 'text-blue-700'
        }`}>Back-End</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {backEndTechs.map((tech) => (
            <div 
              key={tech.name}
              className={`rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-slate-700/50 hover:bg-slate-700 hover:shadow-lg' 
                  : 'bg-slate-100 hover:bg-slate-200 hover:shadow-md'
              }`}
            >
              <TechIcon name={tech.icon} className="w-8 h-8 mx-auto mb-2" />
              <span className={`text-sm font-medium transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-300' 
                  : 'text-slate-600'
              }`}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
          isDarkMode 
            ? 'text-blue-400' 
            : 'text-blue-700'
        }`}>Ferramentas e Outros</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {toolsTechs.map((tech) => (
            <div 
              key={tech.name}
              className={`rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-slate-700/50 hover:bg-slate-700 hover:shadow-lg' 
                  : 'bg-slate-100 hover:bg-slate-200 hover:shadow-md'
              }`}
            >
              <TechIcon name={tech.icon} className="w-8 h-8 mx-auto mb-2" />
              <span className={`text-sm font-medium transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-300' 
                  : 'text-slate-600'
              }`}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSkillsTab;
