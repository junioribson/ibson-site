// WhatsApp oficial do Ibson, em UM só lugar (nunca divergir o número).
// +55 51 99534-3587 (DDD 51, Rio Grande do Sul). Formato wa.me: só dígitos,
// com código do país (55), sem "+" nem espaços.
export const WHATSAPP_NUMBER = "5551995343587";

export function waLink(prefill?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return prefill ? `${base}?text=${encodeURIComponent(prefill)}` : base;
}
