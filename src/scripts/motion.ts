// Movimento MÍNIMO e NÍTIDO: scroll nativo (sem smooth scroll, que fazia o texto
// "tremer"), reveals limpos que liberam a camada de GPU ao terminar (clearProps,
// para o texto não ficar embaçado ao rolar) e a contagem dos números dos cases.
// Sem Lenis, sem parallax, sem efeitos de mouse. Auto-hospedado (bundle do Vite).
//
// Acessibilidade: sob prefers-reduced-motion NADA roda (CSS deixa tudo visível).
// O CSS só esconde .reveal com <html class="js-motion">; se este módulo falhar, o
// timeout de segurança revela tudo (.motion-fallback).
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const root = document.documentElement;
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const w = window as unknown as { __motionSafety?: number };

function revealFallback() {
  root.classList.add("motion-fallback");
}

if (reduce || !root.classList.contains("js-motion")) {
  revealFallback();
} else {
  try {
    if (w.__motionSafety) clearTimeout(w.__motionSafety);
    gsap.registerPlugin(ScrollTrigger);

    // Barra de progresso de rolagem (scroll nativo, sem interpolação)
    const bar = document.getElementById("scrollbar");
    if (bar) {
      let ticking = false;
      const upd = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        ticking = false;
      };
      window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
      upd();
    }

    // Reveals limpos (fade + slide leve). clearProps ao terminar remove o transform
    // e o will-change, tirando o elemento da camada de GPU: o texto fica nítido ao rolar.
    gsap.set(".reveal", { opacity: 0, y: 32 });
    ScrollTrigger.batch(".reveal", {
      start: "top 90%",
      onEnter: (els) =>
        gsap.to(els, { opacity: 1, y: 0, duration: 0.85, stagger: 0.08, ease: "power2.out", overwrite: true, clearProps: "transform,willChange" }),
    });
    gsap.utils.toArray<HTMLElement>(".stagger").forEach((c) => {
      const kids = Array.from(c.children) as HTMLElement[];
      if (!kids.length) return;
      gsap.set(kids, { opacity: 0, y: 26 });
      ScrollTrigger.create({
        trigger: c,
        start: "top 88%",
        once: true,
        onEnter: () => gsap.to(kids, { opacity: 1, y: 0, duration: 0.75, stagger: 0.08, ease: "power2.out", clearProps: "transform,willChange" }),
      });
    });

    // Números dos cases contam ao entrar na tela. Formatação por IDIOMA e SEM
    // agrupamento de milhar: assim um ano como "2025" nunca vira "2.025", e
    // decimais respeitam o separador do idioma (en: ponto; pt/es: vírgula).
    const langTag = document.documentElement.lang || "pt-BR";
    const enStyle = langTag.toLowerCase().startsWith("en");
    const fmt = (v: number, dec: number) =>
      v.toLocaleString(langTag, { minimumFractionDigits: dec, maximumFractionDigits: dec, useGrouping: false });
    gsap.utils.toArray<HTMLElement>(".fs .n").forEach((el) => {
      const raw = (el.textContent || "").trim();
      const m = raw.match(/^(\D*)(\d[\d.,]*)(.*)$/);
      if (!m) return;
      const pre = m[1], suf = m[3], numStr = m[2];
      // Parse respeitando o separador decimal do idioma.
      const target = enStyle
        ? parseFloat(numStr.replace(/,/g, ""))
        : parseFloat(numStr.replace(/\./g, "").replace(",", "."));
      if (!isFinite(target)) return;
      const dec = (numStr.split(enStyle ? "." : ",")[1] || "").length;
      const obj = { v: 0 };
      el.textContent = pre + fmt(0, dec) + suf;
      ScrollTrigger.create({
        trigger: el,
        start: "top 92%",
        once: true,
        onEnter: () =>
          gsap.to(obj, {
            v: target,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = pre + fmt(obj.v, dec) + suf;
            },
          }),
      });
    });

    window.addEventListener("load", () => ScrollTrigger.refresh());
  } catch {
    revealFallback();
  }
}
