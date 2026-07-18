// Input sanitization — strips HTML tags and trims whitespace.
// Use before sending any user input to a backend or displaying it.

export function sanitizeText(input: string): string {
  return input
    .replace(/<[^>]*>/g, '')  // strip HTML tags
    .replace(/[<>"'&]/g, (c) => ({ '<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;','&':'&amp;' }[c] ?? c))
    .trim()
    .slice(0, 2000); // hard cap
}

export function sanitizeEmail(input: string): string {
  return input.trim().toLowerCase().slice(0, 254);
}

export function sanitizePhone(input: string): string {
  return input.replace(/[^\d+\s()-]/g, '').trim().slice(0, 20);
}
