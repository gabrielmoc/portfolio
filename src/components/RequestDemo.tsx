import { useRef, useState } from 'react';
import { ArrowRight, Check, FlaskConical, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/i18n/LanguageProvider';

interface DemoRequest { project: string; flow: number }
const statuses = ['Recebida', 'Em análise', 'Concluída'] as const;

export default function RequestDemo() {
  const { t } = useLanguage();
  const projectInput = useRef<HTMLInputElement>(null);
  const flowInput = useRef<HTMLInputElement>(null);
  const [project, setProject] = useState('');
  const [flow, setFlow] = useState('');
  const [errors, setErrors] = useState({ project: false, flow: false });
  const [request, setRequest] = useState<DemoRequest | null>(null);
  const [stage, setStage] = useState(0);
  const [attempt, setAttempt] = useState<Record<string, unknown> | null>(null);
  const [response, setResponse] = useState<Record<string, unknown> | null>(null);

  const reset = () => {
    setProject(''); setFlow(''); setErrors({ project: false, flow: false });
    setRequest(null); setStage(0); setAttempt(null); setResponse(null);
    projectInput.current?.focus();
  };
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (request) return;
    const amount = Number(flow);
    const invalid = { project: !project.trim(), flow: !flow.trim() || !Number.isFinite(amount) || amount <= 0 || amount > 1000 };
    setErrors(invalid);
    setAttempt({ project: project.trim(), flow_m3_h: Number.isFinite(amount) && flow.trim() ? amount : null });
    if (invalid.project || invalid.flow) {
      setResponse({ status: 422, code: 'VALIDATION_ERROR', fields: Object.keys(invalid).filter(key => invalid[key as keyof typeof invalid]) });
      (invalid.project ? projectInput : flowInput).current?.focus();
      return;
    }
    setRequest({ project: project.trim(), flow: amount });
    setStage(0);
    setResponse({ status: 201, id: 'DEMO-001', state: 'received' });
  };
  const advance = () => {
    const next = Math.min(stage + 1, statuses.length - 1);
    setStage(next);
    setResponse({ status: 200, id: 'DEMO-001', state: next === 1 ? 'in_review' : 'completed' });
  };

  return <div className="rounded-xl border border-blue-500/25 bg-blue-500/5 p-4 sm:p-5 space-y-5">
    <div>
      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-500"><FlaskConical size={16} />{t('Demonstração interativa')}</span>
      <h4 className="font-semibold mt-2">{t('Experimente uma solicitação')}</h4>
      <p className="text-sm text-muted-foreground mt-2">{t('Use dados fictícios. Esta simulação acontece apenas no navegador, não envia dados ao SIGA e é apagada ao fechar esta janela. As regras são ilustrativas.')}</p>
    </div>
    <form onSubmit={submit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="demo-project" className="text-sm font-medium">{t('Nome do projeto fictício')}</label>
          <Input ref={projectInput} id="demo-project" maxLength={80} value={project} disabled={!!request} required onChange={event => setProject(event.target.value)} placeholder={t('Ex.: Projeto de demonstração')} aria-invalid={errors.project} aria-describedby={errors.project ? 'demo-project-error' : undefined} />
          {errors.project && <p id="demo-project-error" className="text-xs text-red-600 dark:text-red-400">{t('Preencha o nome do projeto.')}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="demo-flow" className="text-sm font-medium">{t('Vazão solicitada (m³/h)')}</label>
          <Input ref={flowInput} id="demo-flow" type="number" inputMode="decimal" min="0" max="1000" step="any" value={flow} disabled={!!request} required onChange={event => setFlow(event.target.value)} placeholder="12.5" aria-invalid={errors.flow} aria-describedby="demo-flow-hint" />
          <p id="demo-flow-hint" className={`text-xs ${errors.flow ? 'text-red-600 dark:text-red-400' : 'text-muted-foreground'}`}>{t('Nesta demonstração, informe um valor maior que zero e até 1.000.')}</p>
        </div>
      </div>
      {!request && <div className="flex flex-wrap gap-2">
        <Button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white">{t('Criar solicitação')}<ArrowRight size={16} className="ml-2" /></Button>
        <Button type="button" variant="outline" onClick={() => { setProject(t('Projeto de demonstração')); setFlow('12.5'); setErrors({ project: false, flow: false }); setAttempt(null); setResponse(null); }}>{t('Preencher exemplo')}</Button>
      </div>}
    </form>
    <div role="status" aria-live="polite" aria-atomic="true" className="text-sm">
      {request ? `${t('Solicitação simulada')}: DEMO-001 · ${t(statuses[stage])}` : errors.project || errors.flow ? t('Corrija os campos indicados. Nenhuma solicitação foi criada.') : t('Preencha os campos ou use o exemplo para começar.')}
    </div>
    {request && <div className="rounded-lg border bg-background/70 p-4 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2"><span className="font-medium break-words min-w-0">{request.project}</span><span className="text-sm text-muted-foreground">{request.flow} m³/h</span></div>
      <ol className="grid grid-cols-1 sm:grid-cols-3 gap-2" aria-label={t('Etapas da solicitação')}>
        {statuses.map((status, index) => <li key={status} aria-current={stage === index ? 'step' : undefined} className={`flex items-center gap-2 rounded-lg border p-3 text-sm ${index <= stage ? 'border-blue-500/40 bg-blue-500/10' : 'border-border text-muted-foreground'}`}><span className="flex h-5 w-5 shrink-0 items-center justify-center">{index < stage ? <Check size={16} /> : index + 1}</span>{t(status)}</li>)}
      </ol>
      <Button type="button" disabled={stage === 2} variant="outline" onClick={advance}>{t(stage === 0 ? 'Simular análise' : stage === 1 ? 'Concluir demonstração' : 'Fluxo concluído')}<ArrowRight size={16} className="ml-2" /></Button>
    </div>}
    <details className="rounded-lg border bg-background/70 p-3">
      <summary className="cursor-pointer text-sm font-medium focus-visible:outline-blue-500">{t('Ver dados técnicos simulados')}</summary>
      <p className="my-3 text-xs text-muted-foreground">{t('Estes dados ilustram uma API. Nenhuma requisição é enviada a um servidor.')}</p>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="min-w-0"><p className="mb-2 text-xs text-blue-500">{t('Dados da solicitação')}</p><pre className="overflow-x-auto rounded-md bg-muted p-3 text-xs"><code>{JSON.stringify(attempt ?? {}, null, 2)}</code></pre></div>
        <div className="min-w-0"><p className="mb-2 text-xs text-blue-500">{t('Resposta simulada')}</p><pre className="overflow-x-auto rounded-md bg-muted p-3 text-xs"><code>{JSON.stringify(response ?? {}, null, 2)}</code></pre></div>
      </div>
    </details>
    <Button type="button" variant="ghost" onClick={reset}><RotateCcw size={15} className="mr-2" />{t('Reiniciar')}</Button>
  </div>;
}
