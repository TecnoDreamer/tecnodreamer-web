/**
 * Rate limiter em memória, por processo. Suficiente para uma única
 * instância; em deploy multi-instância um store compartilhado (ex.: Redis)
 * seria necessário — fora de escopo desta fase (ver docs/seguranca/SEGURANCA.md).
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(identifier) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(identifier, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(identifier, timestamps);
  return false;
}
