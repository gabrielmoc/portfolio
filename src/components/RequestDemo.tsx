import { useState } from 'react';
import { ArrowRight, Check, Database, LayoutTemplate, RotateCcw, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function RequestDemo() {
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [valid, setValid] = useState(true);
  const stages = [
    { name: 'Interface', icon: LayoutTemplate, detail: 'O formulário organiza as informações antes do envio.' },
    { name: 'API', icon: Server, detail: 'A API verifica os campos obrigatórios antes de aceitar a solicitação.' },
    { name: 'Banco de dados', icon: Database, detail: 'Somente uma solicitação válida avança para a persistência.' },
  ];
  const failed = step === 2 && !valid;
  const active = failed ? 1 : Math.min(step, 2);
  return <div className="rounded-xl border border-blue-500/25 bg-blue-500/5 p-4 sm:p-5 space-y-5">
    <div>
      <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">{t('Demonstração interativa')}</span>
      <h4 className="font-semibold mt-2">{t('Da interface ao banco de dados')}</h4>
      <p className="text-sm text-muted-foreground mt-2">{t('Fluxo ilustrativo inspirado em uma solicitação do SIGA. Executado apenas neste navegador, sem acessar o sistema real ou salvar dados.')}</p>
    </div>
    <fieldset className="flex flex-wrap gap-2">
      <legend className="text-sm mb-2">{t('Escolha um cenário')}</legend>
      {[true, false].map(value => <button key={String(value)} type="button" aria-pressed={valid === value} onClick={() => { setValid(value); setStep(0); }} className={`text-sm rounded-lg border px-3 py-2 transition-colors ${valid === value ? 'bg-blue-600 text-white border-blue-600' : 'hover:border-blue-500'}`}>{t(value ? 'Dados completos' : 'Campo obrigatório ausente')}</button>)}
    </fieldset>
    <ol className="grid sm:grid-cols-3 gap-2" aria-label={t('Etapas da solicitação')}>
      {stages.map((stage, index) => <li key={stage.name} aria-current={index === active ? 'step' : undefined} className={`rounded-lg border p-3 ${index === active ? 'border-blue-500 bg-blue-500/10' : 'border-border'}`}>
        <div className="flex items-center gap-2 text-sm font-medium"><stage.icon size={17} /><span>{t(stage.name)}</span>{step > index && !failed && <Check size={15} className="ml-auto text-emerald-500" />}</div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t(stage.detail)}</p>
      </li>)}
    </ol>
    <div role="status" aria-live="polite" className={`rounded-lg border p-3 min-h-24 ${failed ? 'border-amber-500/40 bg-amber-500/5' : 'border-border bg-background/70'}`}>
      <code className="text-xs text-blue-500">{step === 0 ? '01 / UI' : step === 1 ? '02 / POST /demo/requests' : failed ? '422 / VALIDATION_ERROR' : '201 / CREATED'}</code>
      <p className="text-sm mt-2">{t(step === 0 ? 'Pronto para enviar uma solicitação de exemplo.' : step === 1 ? 'Solicitação recebida. A próxima etapa valida os dados.' : failed ? 'A validação recusou o envio. Nenhum registro foi criado. Corrija o cenário e tente novamente.' : 'Validação concluída. Registro simulado criado e confirmação devolvida à interface.')}</p>
    </div>
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => setStep(value => value + 1)} disabled={step === 2} className="bg-blue-600 hover:bg-blue-500 text-white">{t(step === 0 ? 'Enviar exemplo' : step === 1 ? 'Validar solicitação' : 'Fluxo concluído')}<ArrowRight size={16} className="ml-2" /></Button>
      <Button variant="outline" onClick={() => setStep(0)}><RotateCcw size={15} className="mr-2" />{t('Reiniciar')}</Button>
    </div>
  </div>;
}
