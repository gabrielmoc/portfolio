import { useId, useState } from 'react';
import { ArrowRight, Network } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { projectArchitecture } from '@/data/projectExperiences';

export default function ProjectArchitecture({ projectId }: { projectId: string }) {
  const { t } = useLanguage();
  const panelId = useId();
  const [selected, setSelected] = useState(0);
  const nodes = projectArchitecture[projectId];
  if (!nodes) return null;
  const node = nodes[selected];
  return <section className="rounded-xl border p-4 sm:p-5 space-y-4" aria-label={t('Arquitetura explorável')}>
    <div><h4 className="flex items-center gap-2 font-semibold"><Network size={18} className="text-blue-500" />{t('Arquitetura explorável')}</h4><p className="mt-2 text-sm text-muted-foreground">{t('Visão conceitual baseada nas tecnologias cadastradas. Não representa o diagrama de infraestrutura de produção. Selecione uma camada para explorar.')}</p></div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="group" aria-label={t('Camadas da solução')}>
      {nodes.map((item, index) => <button key={item.label} type="button" aria-pressed={selected === index} aria-controls={panelId} onClick={() => setSelected(index)} className={`rounded-lg border p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${selected === index ? 'border-blue-500 bg-blue-500/10' : 'border-border hover:border-blue-400'}`}><span className="flex items-center justify-between text-xs text-muted-foreground">{String(index + 1).padStart(2, '0')}<ArrowRight size={14} aria-hidden="true" /></span><span className="block mt-2 text-sm font-medium">{t(item.label)}</span><span className="block mt-1 text-xs text-blue-500">{item.technology}</span></button>)}
    </div>
    <div id={panelId} aria-live="polite" aria-atomic="true" className="rounded-lg bg-muted/50 p-4 space-y-2"><h5 className="font-medium">{t(node.label)} · {node.technology}</h5><p className="text-sm text-muted-foreground">{t(node.description)}</p><p className="text-sm"><span className="font-medium">{t('Conceito técnico')}: </span>{t(node.concept)}</p></div>
  </section>;
}
