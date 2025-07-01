
import { courses, projects } from "@/data/aboutData";

interface ComplementaryTabProps {
  isDarkMode: boolean;
}

const ComplementaryTab = ({ isDarkMode }: ComplementaryTabProps) => {
  return (
    <div className="space-y-4">
      <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
        isDarkMode 
          ? 'text-blue-400' 
          : 'text-blue-700'
      }`}>Cursos e Projetos</h3>
      <div className="space-y-3">
        <div>
          <h4 className={`font-medium mb-2 transition-colors duration-300 ${
            isDarkMode 
              ? 'text-white' 
              : 'text-slate-800'
          }`}>Cursos</h4>
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`text-sm p-2 rounded mb-1 transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-slate-700/30 text-gray-300' 
                  : 'bg-slate-50 text-slate-600'
              }`}
            >
              {course}
            </div>
          ))}
        </div>
        <div>
          <h4 className={`font-medium mb-2 transition-colors duration-300 ${
            isDarkMode 
              ? 'text-white' 
              : 'text-slate-800'
          }`}>Projetos</h4>
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`text-sm p-2 rounded mb-1 transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-slate-700/30 text-gray-300' 
                  : 'bg-slate-50 text-slate-600'
              }`}
            >
              {project}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplementaryTab;
