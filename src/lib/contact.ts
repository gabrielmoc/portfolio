export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string;
}

export type ContactResult = 'sent' | 'rate_limited' | 'invalid_fields' | 'unavailable' | 'unconfirmed';

export async function sendContact(message: ContactMessage): Promise<ContactResult> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 45000);
  try {
    const response = await fetch('/api/contact.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(message),
      signal: controller.signal,
    });
    // A static preview may return index.html for this path; never count it as a delivery.
    if (!response.headers.get('content-type')?.includes('application/json')) return 'unavailable';
    const result = await response.json();
    if (response.ok && result?.ok === true && result?.code === 'sent') return 'sent';
    if (response.status === 429) return 'rate_limited';
    if (response.status === 422) return 'invalid_fields';
    return 'unavailable';
  } catch {
    // A timeout can occur after the server accepted the message. Do not retry automatically.
    return 'unconfirmed';
  } finally {
    clearTimeout(timer);
  }
}
