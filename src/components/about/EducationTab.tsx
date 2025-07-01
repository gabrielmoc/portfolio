
import { Progress } from "@/components/ui/progress";

interface EducationTabProps {
  isDarkMode: boolean;
}

const EducationTab = ({ isDarkMode }: EducationTabProps) => {
  return (
    <div className="space-y-4">
      <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
        isDarkMode 
          ? 'text-blue-400' 
          : 'text-blue-700'
      }`}>Formação</h3>
      <div className={`rounded-lg p-4 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-slate-700/50' 
          : 'bg-slate-100'
      }`}>
        <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
          isDarkMode 
            ? 'text-white' 
            : 'text-slate-800'
        }`}>GRADUAÇÃO (CIÊNCIA DA COMPUTAÇÃO)</h4>
        <p className={`text-sm mb-2 transition-colors duration-300 ${
          isDarkMode 
            ? 'text-blue-400' 
            : 'text-blue-700'
        }`}>CESAR School, Recife</p>
        <p className={`text-sm mb-3 transition-colors duration-300 ${
          isDarkMode 
            ? 'text-gray-400' 
            : 'text-slate-500'
        }`}>Cursando - Início em 08/2022 (7° Período)</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className={isDarkMode ? 'text-gray-300' : 'text-slate-600'}>Concluído</span>
            <span className={isDarkMode ? 'text-gray-300' : 'text-slate-600'}>87,5%</span>
          </div>
          <Progress 
            value={87.5} 
            className={`h-2 ${
              isDarkMode 
                ? 'bg-slate-700' 
                : 'bg-slate-200'
            }`} 
          />
        </div>
      </div>
    </div>
  );
};

export default EducationTab;
