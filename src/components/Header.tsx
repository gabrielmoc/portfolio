import { useEffect, useRef, useState } from 'react';
import { Menu, X, Sun, Moon, Search, ChevronDown, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Command, CommandInput, CommandList, CommandEmpty, CommandItem } from '@/components/ui/command';
import { languages, useLanguage, type Language } from '@/i18n/LanguageProvider';
import { experiences, projects, courses, frontEndTechs, backEndTechs, toolsTechs } from '@/data/aboutData';

interface HeaderProps { isDarkMode: boolean; toggleTheme: () => void }
interface SearchEntry { id: string; title: string; text: string; tab?: string }
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const Header = ({ isDarkMode, toggleTheme }: HeaderProps) => {
  const { language, setLanguage, t } = useLanguage();
  const searchButton = useRef<HTMLButtonElement>(null);
  const navigating = useRef(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [entries, setEntries] = useState<SearchEntry[]>([]);
  const nav = [{ id: 'home', label: 'Home' }, { id: 'about', label: 'Sobre' }, { id: 'services', label: 'Serviços' }, { id: 'portfolio', label: 'Portfolio' }, { id: 'contact', label: 'Contato' }];
  const activeLanguage = languages.find(item => item.code === language)!;
  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setSearchOpen(open => !open); }
    };
    window.addEventListener('keydown', keydown);
    return () => window.removeEventListener('keydown', keydown);
  }, []);
  useEffect(() => {
    if (!searchOpen) return;
    navigating.current = false;
    setQuery('');
    const items = Array.from(document.querySelectorAll<HTMLElement>('section[id], [data-search-item]')).map(element => ({
      id: element.id, title: element.querySelector('h1, h2, h3')?.textContent || element.getAttribute('data-search-item') || '', text: element.textContent || '',
    }));
    const about = [
      { tab: 'linguagens', title: t('Linguagens'), text: [...frontEndTechs, ...backEndTechs, ...toolsTechs].map(tech => tech.name).join(' ') },
      { tab: 'experiencia', title: t('Experiência'), text: experiences.map(exp => [t(exp.company), t(exp.position), t(exp.period)].join(' ')).join(' ') },
      { tab: 'formacao', title: t('Formação'), text: `${t('GRADUAÇÃO (CIÊNCIA DA COMPUTAÇÃO)')} CESAR School` },
      { tab: 'complementar', title: t('Complementar'), text: [...projects, ...courses].map(t).join(' ') },
    ].map(item => ({ ...item, id: 'about' }));
    setEntries([...items, ...about]);
  // Rebuild from the currently rendered language when the dialog opens.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchOpen, language]);
  const navigate = (id: string, tab?: string) => {
    navigating.current = true;
    setMobileOpen(false); setSearchOpen(false);
    requestAnimationFrame(() => {
      if (tab) document.getElementById(`about-tab-${tab}`)?.focus();
      const target = document.getElementById(id);
      target?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
    });
  };
  const filtered = entries.filter(item => normalize(`${item.title} ${item.text}`).includes(normalize(query)));
  const theme = <div className="flex items-center gap-2"><Sun size={16} className="text-slate-400" /><Switch checked={isDarkMode} onCheckedChange={toggleTheme} aria-label={t('Alternar tema')} className="data-[state=checked]:bg-blue-600" /><Moon size={16} className="text-blue-400" /></div>;
  return <>
    <header className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${isDarkMode ? 'bg-black/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <a href="#home" aria-label={t('Home')} className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{'{GC}'}</a>
          <nav aria-label={t('Navegação')} className="hidden lg:flex gap-6 xl:gap-8">{nav.map(item => <button key={item.id} onClick={() => navigate(item.id)} className="text-sm xl:text-base hover:text-blue-400 transition-colors">{t(item.label)}</button>)}</nav>
          <div className="flex items-center gap-1 sm:gap-3">

            <Button ref={searchButton} variant="ghost" size="icon" onClick={() => setSearchOpen(true)} aria-label={t('Pesquisar no site')} title={`${t('Pesquisar no site')} (Ctrl/⌘ K)`}><Search size={21} /></Button>
            <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="gap-2 px-2" aria-label={t('Idioma')}><span aria-hidden="true" className="text-xl">{activeLanguage.flag}</span><span>{language.toUpperCase()}</span><ChevronDown size={14} className="text-blue-400" /></Button></DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 p-2"><DropdownMenuRadioGroup value={language} onValueChange={value => setLanguage(value as Language)}>{languages.map(item => <DropdownMenuRadioItem key={item.code} value={item.code} className="gap-3 py-3 cursor-pointer"><span aria-hidden="true" className="text-xl">{item.flag}</span><span className="font-semibold">{item.code.toUpperCase()}</span><span lang={item.locale} className="text-xs text-muted-foreground">{item.label}</span></DropdownMenuRadioItem>)}</DropdownMenuRadioGroup></DropdownMenuContent>
            </DropdownMenu>
            <div className="hidden lg:block">{theme}</div>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? t('Fechar') : t('Abrir menu')} aria-expanded={mobileOpen} aria-controls="mobile-navigation">{mobileOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {mobileOpen && <nav id="mobile-navigation" aria-label={t('Navegação')} className="lg:hidden border-t py-3 space-y-1">{nav.map(item => <button key={item.id} onClick={() => navigate(item.id)} className="block w-full text-left px-3 py-3 hover:text-blue-400">{t(item.label)}</button>)}<div className="px-3 py-3">{theme}</div></nav>}
      </div>
    </header>
    <Dialog open={searchOpen} onOpenChange={setSearchOpen}><DialogContent className="p-0 overflow-hidden gap-0" onCloseAutoFocus={event => { event.preventDefault(); if (!navigating.current) searchButton.current?.focus(); }}>
      <DialogTitle className="px-5 pt-5 pr-12 text-base">{t('Pesquisar no site')}</DialogTitle><DialogDescription className="sr-only">{t('Buscar projetos, tecnologias ou seções…')}</DialogDescription>
      <Command shouldFilter={false}><CommandInput value={query} onValueChange={setQuery} placeholder={t('Buscar projetos, tecnologias ou seções…')} aria-label={t('Pesquisar no site')} /><CommandList className="p-2 max-h-[55vh]"><CommandEmpty>{t('Nenhum resultado encontrado. Tente outro termo.')}</CommandEmpty>{filtered.map((item, index) => <CommandItem key={`${item.id}-${item.tab || index}`} value={`${item.id}-${index}`} onSelect={() => navigate(item.id, item.tab)} className="flex justify-between gap-3 p-3 cursor-pointer"><span className="min-w-0"><span className="block font-medium">{item.title}</span>{item.id.startsWith('project-') && <span className="text-xs text-muted-foreground">{t('Portfolio')}</span>}</span><ArrowUpRight size={16} className="shrink-0 text-blue-400" /></CommandItem>)}</CommandList></Command>
    </DialogContent></Dialog>
  </>;
};
export default Header;
