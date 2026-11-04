/** Pure rules for fictional demos only; not rules from the production projects. */
export function calculateDemoCart(priceCents: number, quantity: number, stock: number) {
  if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > stock) return null;
  const subtotalCents = priceCents * quantity;
  const shippingCents = subtotalCents >= 30000 ? 0 : 2000;
  return { subtotalCents, shippingCents, totalCents: subtotalCents + shippingCents };
}

export function moveDemoStock(stock: number, quantity: number, direction: 'in' | 'out'): number | null {
  if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 1000) return null;
  const result = stock + (direction === 'in' ? quantity : -quantity);
  return result >= 0 && result <= 10000 ? result : null;
}
