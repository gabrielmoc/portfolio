import { lazy, Suspense, useEffect, useState } from 'react';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { featuredDetails, portfolioProjects, projectCategories, type ProjectCategory } from '@/data/portfolioProjects';
import { projectDemos } from '@/data/projectExperiences';

const ProjectExperience = lazy(() => import('./ProjectExperience'));

interface PortfolioSectionProps { isDarkMode: boolean }
const PortfolioSection = ({ isDarkMode }: PortfolioSectionProps) => {
  const { t } = useLanguage();
  const [category, setCategory] = useState<ProjectCategory>('Todos');
  const visibleProjects = portfolioProjects.filter(project => category === 'Todos' || project.category === category);
  useEffect(() => {
    const revealProject = () => setCategory('Todos');
    window.addEventListener('portfolio:reveal', revealProject);
    return () => window.removeEventListener('portfolio:reveal', revealProject);
  }, []);
  return <section id="portfolio" className={`py-20 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/30' : 'bg-slate-50/50'}`}>
    <div className="container mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">{t('Portfolio')}</h2>
      <p className="text-center mb-12 max-w-2xl mx-auto text-lg text-muted-foreground">{t('Aplicações, plataformas e experiências digitais. Explore os projetos e as tecnologias por trás de cada solução.')}</p>
      <div className="flex items-center gap-2 mb-6 text-sm font-medium text-blue-500"><Sparkles size={17} />{t('Projetos em destaque')}</div>
      <div className="flex flex-wrap gap-2 mb-4" role="group" aria-label={t('Filtrar projetos')}>
        {projectCategories.map(item => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${category === item ? 'border-blue-600 bg-blue-600 text-white' : isDarkMode ? 'border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400' : 'border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-700'}`}>{t(item)}</button>)}
      </div>
      <p role="status" aria-live="polite" aria-atomic="true" className="mb-6 text-sm text-muted-foreground">{visibleProjects.length} / {portfolioProjects.length} {t('projetos')}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioProjects.map((project, index) => <Card id={`project-${project.id}`} data-search-item={project.name} key={project.id} className={`${category === 'Todos' || project.category === category ? 'flex' : 'hidden'} flex-col overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isDarkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'} ${index < 3 ? 'ring-1 ring-blue-500/40' : ''}`}>
          <div className="aspect-video overflow-hidden relative">
            <img src={project.image} alt={project.name} loading="lazy" width={800} height={450} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            {index < 3 && <span className="absolute top-3 left-3 rounded-full bg-slate-950/90 text-white text-xs px-3 py-1.5 border border-blue-400/40">{String(index + 1).padStart(2, '0')} · {t('Destaque')}</span>}
          </div>
          <CardHeader>
            <p className="text-xs font-medium text-blue-500">{t(project.title)}</p>
            <CardTitle className="text-xl">{project.name}</CardTitle>
            {projectDemos[project.id] && <span className="text-xs font-medium text-blue-500">{t("Simulação disponível nos detalhes")}</span>}
            <CardDescription className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>{t(project.description)}</CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <div className="flex flex-wrap gap-1.5 mb-5">{project.tech.map(tech => <span key={tech} className={`text-xs px-2 py-1 rounded-full border ${isDarkMode ? 'bg-blue-600/10 text-blue-300 border-blue-600/30' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>{t(tech)}</span>)}</div>
            <div className="flex flex-wrap gap-2">
              <Dialog>
                <DialogTrigger asChild><Button variant="outline" className="flex-1 border-blue-500/40 text-blue-500 bg-transparent hover:bg-blue-500/10"><Layers size={16} className="mr-2" />{t('Detalhes técnicos')}</Button></DialogTrigger>
                <DialogContent className="w-[calc(100%_-_2rem)] max-w-3xl max-h-[85dvh] overflow-y-auto rounded-2xl p-5 sm:p-8">
                  <div className="pr-6"><p className="text-xs font-medium uppercase tracking-widest text-blue-500 mb-2">{t(project.title)}</p><DialogTitle className="text-2xl sm:text-3xl">{project.name}</DialogTitle><DialogDescription className="mt-3 leading-relaxed">{t(project.description)}</DialogDescription></div>
                  <img src={project.image} alt={project.name} loading="lazy" width={800} height={450} className="w-full aspect-video object-cover rounded-lg border" />
                  {featuredDetails[project.id] && <div className="grid sm:grid-cols-2 gap-4">{[['Desafio', featuredDetails[project.id].challenge], ['Estrutura da solução', featuredDetails[project.id].structure]].map(([label, text]) => <div key={label} className="rounded-xl border p-4"><h4 className="font-semibold mb-2">{t(label)}</h4><p className="text-sm text-muted-foreground leading-relaxed">{t(text)}</p></div>)}</div>}
                  {project.tech.length > 0 && <div><h4 className="font-semibold mb-3">{t('Tecnologias utilizadas')}</h4><div className="flex flex-wrap gap-2">{project.tech.map(tech => <span key={tech} className="rounded-md border bg-muted px-3 py-1.5 text-sm">{t(tech)}</span>)}</div></div>}
                  {projectDemos[project.id] && <Suspense fallback={<p role="status" className="text-sm text-muted-foreground">{t('Carregando experiência…')}</p>}><ProjectExperience projectId={project.id} projectName={project.name} /></Suspense>}
                  {project.link && <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white"><a href={project.link} target="_blank" rel="noopener noreferrer">{t('Abrir projeto')}<ArrowUpRight size={17} className="ml-2" /></a></Button>}
                </DialogContent>
              </Dialog>
              {project.link && <Button asChild variant="ghost" className="text-blue-500"><a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${t('Abrir projeto')}: ${project.name}`}>{t('Visitar')}<ArrowUpRight size={16} className="ml-1" /></a></Button>}
            </div>
          </CardContent>
        </Card>)}
      </div>
    </div>
  </section>;
};
export default PortfolioSection;
