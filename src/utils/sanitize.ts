/**
 * Client-Side XSS Sanitizer for Asasat Al-Mashaer Frontend
 * Cleans content before DOM insertion (innerHTML) to prevent Cross-Site Scripting (XSS)
 */

export function sanitizeHtml(input: string): string {
  if (typeof input !== 'string') return '';

  // 1. Strip script tags and content
  let clean = input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // 2. Strip dangerous embedding and active tags
  clean = clean.replace(/<\/?(iframe|object|embed|applet|meta|link|base|form|input|button)\b[^>]*>/gi, '');

  // 3. Remove javascript:, vbscript:, and data:html protocols
  clean = clean.replace(/javascript\s*:/gi, 'blocked:');
  clean = clean.replace(/vbscript\s*:/gi, 'blocked:');
  clean = clean.replace(/data\s*:\s*text\/html/gi, 'blocked:');

  // 4. Strip inline event handlers (onerror, onload, onclick, onmouseover, onfocus, etc.)
  clean = clean.replace(/\son\w+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, '');

  // 5. Clean CSS expressions
  clean = clean.replace(/expression\s*\(/gi, 'no-expr(');

  return clean;
}

export function escapeHtml(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function sanitizeObject<T>(data: T): T {
  if (data === null || data === undefined) {
    return data;
  }

  if (typeof data === 'string') {
    return sanitizeHtml(data) as unknown as T;
  }

  if (Array.isArray(data)) {
    return data.map(item => sanitizeObject(item)) as unknown as T;
  }

  if (typeof data === 'object') {
    const cleanObj: Record<string, any> = {};
    for (const [key, value] of Object.entries(data)) {
      cleanObj[key] = sanitizeObject(value);
    }
    return cleanObj as T;
  }

  return data;
}
