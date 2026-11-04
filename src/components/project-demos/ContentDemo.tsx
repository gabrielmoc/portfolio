import { useId, useRef, useState } from 'react';
import { FileText } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import DemoShell from './DemoShell';

const categories = ['Novidades', 'Artigos'] as const;
type Category = typeof categories[number];
export default function ContentDemo({ projectName }: { projectName: string }) {
  const { t } = useLanguage();
  const id = useId();
  const titleInput = useRef<HTMLInputElement>(null);
  const bodyInput = useRef<HTMLTextAreaElement>(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState<Category>('Novidades');
  const [filter, setFilter] = useState<string>('Todos');
  const [published, setPublished] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState('Crie um rascunho e publique apenas nesta prévia fictícia.');
  const articles = [
    { id: 'sample-1', title: t('Apresentação do projeto'), body: t('Publicação fictícia para experimentar a navegação por categorias.'), category: 'Novidades' },
    { id: 'sample-2', title: t('Bastidores da solução'), body: t('Outro exemplo de conteúdo. Nenhuma destas publicações pertence ao site real.'), category: 'Artigos' },
    ...(published ? [{ id: 'user-draft', title: title.trim(), body: body.trim(), category }] : []),
  ];
  const visible = articles.filter(article => filter === 'Todos' || article.category === filter);
  const publish = (event: React.FormEvent) => {
    event.preventDefault();
    if (published) return;
    if (!title.trim() || !body.trim()) { setError(true); setStatus('Preencha o título e o texto antes de publicar na prévia.'); if (!title.trim()) titleInput.current?.focus(); else bodyInput.current?.focus(); return; }
    setError(false); setPublished(true); setFilter('Todos');
    setStatus('Conteúdo publicado apenas na prévia. Nenhum site real foi alterado.');
  };
  return <DemoShell title="Experimente uma publicação" projectName={projectName} status={status} data={{ draft: { title: title.trim(), body: body.trim(), category }, state: published ? 'published_in_preview' : 'draft', filter, visibleCount: visible.length }} onReset={() => { setTitle(''); setBody(''); setCategory('Novidades'); setFilter('Todos'); setPublished(false); setError(false); setStatus('Crie um rascunho e publique apenas nesta prévia fictícia.'); }}>
    <form onSubmit={publish} noValidate className="rounded-lg border bg-background/70 p-4 space-y-3">
      <h5 className="flex items-center gap-2 text-sm font-semibold"><FileText size={17} className="text-blue-500" />{t('Editor de exemplo')}</h5>
      <div className="space-y-2"><label htmlFor={`${id}-title`} className="text-sm">{t('Título da publicação')}</label><Input ref={titleInput} id={`${id}-title`} maxLength={100} required value={title} onChange={event => setTitle(event.target.value)} disabled={published} aria-invalid={error && !title.trim()} aria-describedby={error ? `${id}-error` : undefined} /></div>
      <div className="space-y-2"><label htmlFor={`${id}-body`} className="text-sm">{t('Texto da publicação')}</label><Textarea ref={bodyInput} id={`${id}-body`} rows={3} maxLength={500} required value={body} onChange={event => setBody(event.target.value)} disabled={published} aria-invalid={error && !body.trim()} aria-describedby={error ? `${id}-error` : undefined} /></div>
      <div className="space-y-2"><label htmlFor={`${id}-category`} className="text-sm">{t('Categoria')}</label><select id={`${id}-category`} value={category} onChange={event => setCategory(event.target.value as Category)} disabled={published} className="block h-10 w-full rounded-md border bg-background px-3 text-sm focus-visible:outline-blue-500 disabled:opacity-50">{categories.map(item => <option key={item} value={item}>{t(item)}</option>)}</select></div>
      {error && <p id={`${id}-error`} className="text-sm text-red-600 dark:text-red-400">{t('Preencha o título e o texto antes de publicar na prévia.')}</p>}
      <div className="flex flex-wrap gap-2">
        <Button type="submit" disabled={published} className="bg-blue-600 hover:bg-blue-500 text-white">{t('Publicar na prévia')}</Button>
        {!published && <Button type="button" variant="outline" onClick={() => { setTitle(t('Conteúdo de exemplo')); setBody(t('Esta publicação foi criada na demonstração interativa do portfólio.')); setError(false); }}>{t('Preencher exemplo')}</Button>}
        {published && <Button type="button" variant="outline" onClick={() => { setPublished(false); setStatus('Publicação retirada da prévia. O rascunho pode ser editado novamente.'); }}>{t('Retirar da prévia')}</Button>}
      </div>
    </form>
    <div className="space-y-3">
      <h5 className="text-sm font-semibold">{t('Prévia pública fictícia')}</h5>
      <div role="group" aria-label={t('Filtrar publicações')} className="flex flex-wrap gap-2">{['Todos', ...categories].map(item => <button type="button" key={item} aria-pressed={filter === item} onClick={() => setFilter(item)} className={`rounded-full border px-3 py-1.5 text-xs focus-visible:outline-blue-500 ${filter === item ? 'bg-blue-600 border-blue-600 text-white' : 'hover:border-blue-500'}`}>{t(item)}</button>)}</div>
      <p role="status" className="text-xs text-muted-foreground">{visible.length} {t('publicações na prévia')}</p>
      <div className="space-y-2">{visible.map(article => <article key={article.id} className={`rounded-lg border p-3 ${article.id === 'user-draft' ? 'border-blue-500/40 bg-blue-500/10' : 'bg-background/70'}`}><span className="text-xs text-blue-500">{t(article.category)}</span><h6 className="mt-1 font-medium break-words">{article.title}</h6><p className="mt-1 text-sm text-muted-foreground whitespace-pre-wrap break-words">{article.body}</p></article>)}</div>
    </div>
  </DemoShell>;
}
