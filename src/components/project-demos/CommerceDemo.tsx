import { useId, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useLanguage, languages } from '@/i18n/LanguageProvider';
import { commerceProducts } from '@/data/projectExperiences';
import { calculateDemoCart } from '@/lib/demoRules';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DemoShell from './DemoShell';

export default function CommerceDemo({ projectId, projectName }: { projectId: string; projectName: string }) {
  const { t, language } = useLanguage();
  const id = useId();
  const product = commerceProducts[projectId];
  const [quantity, setQuantity] = useState('1');
  const [ordered, setOrdered] = useState(false);
  const totals = calculateDemoCart(product.priceCents, Number(quantity), product.stock);
  const money = (cents: number) => new Intl.NumberFormat(languages.find(item => item.code === language)!.locale, { style: 'currency', currency: 'BRL' }).format(cents / 100);
  return <DemoShell title="Experimente um carrinho" projectName={projectName} status={ordered ? 'Pedido fictício criado. Nenhuma compra ou cobrança foi realizada.' : !totals ? 'Informe uma quantidade inteira dentro do estoque disponível.' : 'Altere a quantidade para ver o total e o frete serem recalculados.'} data={{ product: projectId, quantity: Number(quantity) || 0, stock: product.stock, currency: 'BRL', ...totals, state: ordered ? 'simulated_order_created' : totals ? 'cart' : 'invalid_quantity' }} onReset={() => { setQuantity('1'); setOrdered(false); }}>
    <div className="rounded-lg border bg-background/70 p-4 space-y-4">
      <div className="flex items-center gap-3"><ShoppingBag size={24} className="shrink-0 text-blue-500" /><div><p className="font-medium">{t(product.name)}</p><p className="text-sm text-muted-foreground">{money(product.priceCents)} · {t('Estoque fictício')}: {product.stock}</p></div></div>
      <div className="flex flex-wrap items-center gap-3"><label htmlFor={id} className="text-sm">{t('Quantidade')}</label><Input id={id} type="number" inputMode="numeric" min={1} max={product.stock} step={1} value={quantity} onChange={event => setQuantity(event.target.value)} disabled={ordered} aria-invalid={!totals} aria-describedby={`${id}-hint`} className="w-24" /></div>
      <p id={`${id}-hint`} className="text-xs text-muted-foreground">{t('Regra fictícia: frete de R$ 20; grátis a partir de R$ 300. Preços e estoque são apenas exemplos.')}</p>
      <dl className="space-y-2 text-sm"><div className="flex justify-between gap-3"><dt>{t('Subtotal')}</dt><dd>{totals ? money(totals.subtotalCents) : '—'}</dd></div><div className="flex justify-between gap-3"><dt>{t('Frete')}</dt><dd>{totals ? money(totals.shippingCents) : '—'}</dd></div><div className="flex justify-between gap-3 border-t pt-2 font-semibold"><dt>{t('Total')}</dt><dd>{totals ? money(totals.totalCents) : '—'}</dd></div></dl>
      <Button type="button" disabled={!totals || ordered} onClick={() => setOrdered(true)} className="bg-blue-600 hover:bg-blue-500 text-white">{t(ordered ? 'Pedido simulado' : 'Simular pedido')}</Button>
    </div>
  </DemoShell>;
}
