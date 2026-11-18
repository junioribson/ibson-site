// Camada de medição e conversão para o teste de tráfego pago (Google Ads etc.).
// Nada aqui coleta dado sem consentimento: window.gtag é a fila do GA, que só
// carrega o gtag.js depois do "Aceitar" no aviso de cookies (ver Base.astro).
// Se não houver consentimento, os eventos ficam na fila e nunca saem do browser.
//
// O que mede:
// 1. UTM: captura utm_* e gclid do anúncio, guarda na sessão e carimba os links
//    de WhatsApp, para o lead chegar já dizendo de onde veio (qualificação).
// 2. Conversão: clique no WhatsApp e envio do formulário viram "qualify_lead"
//    (evento principal já existente no GA4), mais "wa_click" como engajamento.
// 3. Scroll: dispara "scroll_depth" em 25/50/75/90%, uma vez cada, para ver até
//    onde a pessoa absorve o conteúdo e onde está o gargalo.

type Gtag = (...args: unknown[]) => void;
const gtag = (): Gtag | null =>
  typeof (window as unknown as { gtag?: Gtag }).gtag === "function"
    ? (window as unknown as { gtag: Gtag }).gtag
    : null;

const track = (event: string, params: Record<string, unknown> = {}) => {
  const g = gtag();
  if (g) g("event", event, params);
};

// ---- 1. UTM / origem do anúncio ------------------------------------------
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid"] as const;
const STORE_KEY = "ij_attrib";

type Attrib = Partial<Record<(typeof UTM_KEYS)[number], string>>;

function readAttrib(): Attrib {
  // Prioridade: parâmetros na URL atual; senão, o que ficou guardado na sessão
  // (para sobreviver à navegação interna dentro do site).
  const url = new URLSearchParams(window.location.search);
  const fromUrl: Attrib = {};
  let hasUrl = false;
  for (const k of UTM_KEYS) {
    const v = url.get(k);
    if (v) { fromUrl[k] = v; hasUrl = true; }
  }
  if (hasUrl) {
    try { sessionStorage.setItem(STORE_KEY, JSON.stringify(fromUrl)); } catch (e) { /* sessão indisponível */ }
    return fromUrl;
  }
  try {
    const raw = sessionStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw) as Attrib;
  } catch (e) { /* ignora */ }
  return {};
}

const attrib = readAttrib();

// Nota curta e legível para a mensagem do WhatsApp (o Ibson vê a origem no chat).
function originNote(a: Attrib): string {
  const src = a.utm_source;
  const camp = a.utm_campaign;
  if (!src && !camp) return "";
  const parts = [src, camp].filter(Boolean).join(" · ");
  return `\n\n(Origem: ${parts})`;
}

// Carimba todos os links de WhatsApp com a origem, preservando a mensagem base.
function tagWhatsappLinks(a: Attrib) {
  const note = originNote(a);
  if (!note) return;
  document.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me/"]').forEach((link) => {
    try {
      const u = new URL(link.href);
      const base = u.searchParams.get("text") || "";
      if (base.includes("(Origem:")) return; // já carimbado
      u.searchParams.set("text", base + note);
      link.href = u.toString();
    } catch (e) { /* link malformado: ignora */ }
  });
}

// ---- 2. Conversão: WhatsApp e formulário ---------------------------------
function wireWhatsappClicks(a: Attrib) {
  document.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href*="wa.me/"]');
    if (!target) return;
    const payload = {
      method: "whatsapp",
      link_location: target.classList.contains("wa-float") ? "float" : "cta",
      campaign: a.utm_campaign || "(direct)",
      source: a.utm_source || "(direct)",
    };
    track("wa_click", payload); // engajamento (não é conversão)
    track("qualify_lead", payload); // conversão: evento principal no GA4
  }, { capture: true });
}

// O formulário avisa o sucesso por um CustomEvent (disparado em Contato.astro).
function wireFormLead(a: Attrib) {
  window.addEventListener("ij:lead", () => {
    track("qualify_lead", {
      method: "form",
      campaign: a.utm_campaign || "(direct)",
      source: a.utm_source || "(direct)",
    });
  });
}

// ---- 3. Profundidade de rolagem ------------------------------------------
function wireScrollDepth() {
  const marks = [25, 50, 75, 90];
  const fired = new Set<number>();
  let ticking = false;
  const check = () => {
    ticking = false;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const pct = ((window.scrollY || doc.scrollTop) / scrollable) * 100;
    for (const m of marks) {
      if (pct >= m && !fired.has(m)) {
        fired.add(m);
        track("scroll_depth", { percent_scrolled: m });
      }
    }
    if (fired.size === marks.length) window.removeEventListener("scroll", onScroll);
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(check);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

// ---- init ----------------------------------------------------------------
tagWhatsappLinks(attrib);
wireWhatsappClicks(attrib);
wireFormLead(attrib);
wireScrollDepth();
