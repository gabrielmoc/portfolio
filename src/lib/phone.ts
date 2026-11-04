/** Brazilian mobile number: two-digit area code plus nine digits. */
export function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (!digits) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)})${digits.slice(2)}`;
  return `(${digits.slice(0, 2)})${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function isCompletePhoneNumber(value: string): boolean {
  return /^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/.test(value);
}

/** Keep editing at the same digit instead of jumping to the end of the mask. */
export function phoneCaretPosition(formatted: string, digitCount: number): number {
  if (digitCount === 0) return formatted.startsWith('(') ? 1 : 0;
  let seen = 0;
  for (let index = 0; index < formatted.length; index++) {
    if (/\d/.test(formatted[index]) && ++seen === digitCount) return index + 1;
  }
  return formatted.length;
}
