import { useId, type ReactNode } from 'react';
import { FlaskConical, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageProvider';

export default function DemoShell({ title, projectName, children, status, data, onReset }: {
  title: string; projectName: string; children: ReactNode; status: string;
  data: Record<string, unknown>; onReset: () => void;
}) {
  const { t } = useLanguage();
  const titleId = useId();
  return <section aria-labelledby={titleId} className="rounded-xl border border-blue-500/25 bg-blue-500/5 p-4 sm:p-5 space-y-4">
    <div><span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-500"><FlaskConical size={16} />{t('Demonstração interativa')}</span><h4 id={titleId} className="font-semibold mt-2">{t(title)} · {projectName}</h4><p className="text-sm text-muted-foreground mt-2">{t('Exemplo com dados fictícios inspirado no tipo de projeto. Não acessa o sistema real, não faz pagamentos e não envia dados. Tudo é apagado ao fechar esta janela.')}</p></div>
    {children}
    <p role="status" aria-live="polite" aria-atomic="true" className="text-sm">{t(status)}</p>
    <details className="rounded-lg border bg-background/70 p-3"><summary className="cursor-pointer text-sm font-medium focus-visible:outline-blue-500">{t('Ver dados técnicos simulados')}</summary><p className="my-3 text-xs text-muted-foreground">{t('Estado local da demonstração. Nenhuma requisição é enviada a um servidor.')}</p><pre className="max-h-56 overflow-auto rounded-md bg-muted p-3 text-xs"><code>{JSON.stringify(data, null, 2)}</code></pre></details>
    <Button type="button" variant="ghost" onClick={onReset}><RotateCcw size={15} className="mr-2" />{t('Reiniciar')}</Button>
  </section>;
}
