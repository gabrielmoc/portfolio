import { useId, useState } from 'react';
import { Package } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageProvider';
import { moveDemoStock } from '@/lib/demoRules';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DemoShell from './DemoShell';

interface Movement { direction: 'in' | 'out'; quantity: number; balance: number }
export default function InventoryDemo({ projectName }: { projectName: string }) {
  const { t } = useLanguage();
  const id = useId();
  const [stock, setStock] = useState(20);
  const [quantity, setQuantity] = useState('5');
  const [movements, setMovements] = useState<Movement[]>([]);
  const [status, setStatus] = useState('Registre uma entrada ou saída para acompanhar o saldo.');
  const [invalid, setInvalid] = useState(false);
  const move = (direction: 'in' | 'out') => {
    const amount = Number(quantity);
    const balance = moveDemoStock(stock, amount, direction);
    if (balance === null) { setInvalid(true); setStatus('Use uma quantidade inteira de 1 a 1.000. A saída não pode superar o saldo, e o saldo máximo é 10.000.'); return; }
    setInvalid(false); setStock(balance);
    setMovements(previous => [{ direction, quantity: amount, balance }, ...previous].slice(0, 5));
    setStatus('Movimentação simulada registrada. Confira o novo saldo e o histórico.');
  };
  return <DemoShell title="Experimente o controle de estoque" projectName={projectName} status={status} data={{ item: 'DEMO-ITEM', initialStock: 20, currentStock: stock, recentMovements: movements }} onReset={() => { setStock(20); setQuantity('5'); setMovements([]); setInvalid(false); setStatus('Registre uma entrada ou saída para acompanhar o saldo.'); }}>
    <div className="rounded-lg border bg-background/70 p-4 space-y-4">
      <div className="flex items-center justify-between gap-3"><div className="flex items-center gap-2"><Package size={22} className="text-blue-500" /><span className="text-sm">{t('Saldo do item fictício')}</span></div><strong className="text-3xl tabular-nums text-blue-500">{stock}</strong></div>
      <div className="space-y-2"><label className="text-sm" htmlFor={id}>{t('Quantidade')}</label><Input id={id} type="number" inputMode="numeric" min={1} max={1000} step={1} value={quantity} onChange={event => { setQuantity(event.target.value); setInvalid(false); }} aria-invalid={invalid} aria-describedby={`${id}-hint`} className="max-w-40" /><p id={`${id}-hint`} className="text-xs text-muted-foreground">{t('Estoque inicial: 20 unidades fictícias. Experimente retirar mais que o saldo.')}</p></div>
      <div className="flex flex-wrap gap-2"><Button type="button" onClick={() => move('in')} className="bg-blue-600 hover:bg-blue-500 text-white">{t('Registrar entrada')}</Button><Button type="button" variant="outline" onClick={() => move('out')}>{t('Registrar saída')}</Button></div>
      {movements.length > 0 && <div><h5 className="text-sm font-medium mb-2">{t('Últimas 5 movimentações')}</h5><ul className="space-y-2">{movements.map((item, index) => <li key={`${movements.length}-${index}`} className="flex justify-between gap-2 rounded-md bg-muted/60 px-3 py-2 text-sm"><span>{t(item.direction === 'in' ? 'Entrada' : 'Saída')}: {item.quantity}</span><span>{t('Saldo')}: {item.balance}</span></li>)}</ul></div>}
    </div>
  </DemoShell>;
}
