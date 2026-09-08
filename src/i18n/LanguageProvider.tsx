import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import messages from './messages.json';
export type Language = 'pt' | 'en' | 'es';
export const languages = [
  { code: 'pt' as const, flag: '🇧🇷', label: 'Português (Brasil)', locale: 'pt-BR' },
  { code: 'en' as const, flag: '🇺🇸', label: 'English (United States)', locale: 'en-US' },
  { code: 'es' as const, flag: '🇪🇸', label: 'Español (España)', locale: 'es-ES' },
];
const dictionary: Record<string, string[]> = messages;
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: (text: string) => string } | null>(null);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try { const saved = localStorage.getItem('portfolio-language'); return saved === 'en' || saved === 'es' ? saved : 'pt'; } catch { return 'pt'; }
  });
  const t = (text: string) => language === 'pt' ? text : dictionary[text]?.[language === 'en' ? 0 : 1] ?? text;
  useEffect(() => {
    document.documentElement.lang = languages.find(item => item.code === language)!.locale;
    document.title = `Gabriel Cavalcanti — ${language === 'pt' ? 'Desenvolvedor' : language === 'en' ? 'Developer' : 'Desarrollador'} Full Stack`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', language === 'pt' ? 'Portfólio de Gabriel Cavalcanti. Desenvolvimento Full Stack, projetos e soluções digitais.' : language === 'en' ? 'Gabriel Cavalcanti’s portfolio. Full Stack development, projects and digital solutions.' : 'Portfolio de Gabriel Cavalcanti. Desarrollo Full Stack, proyectos y soluciones digitales.');
    try { localStorage.setItem('portfolio-language', language); } catch { /* Storage may be unavailable in private browsers. */ }
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage requires LanguageProvider');
  return context;
}
