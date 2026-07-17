// Camada de movimento "ousada", mas na identidade do site (sem mudar cores/estética).
// Stack: Lenis (smooth scroll) + GSAP/ScrollTrigger (reveals, parallax por scroll,
// botões magnéticos). Auto-hospedado (bundle do Vite), sem CDN externo.
//
// Segurança/acessibilidade:
// - Sob prefers-reduced-motion, NADA disso roda (o CSS deixa tudo visível e estático).
// - O CSS só esconde .reveal quando <html class="js-motion"> (setado inline no head).
//   Se este módulo falhar, um timeout de segurança adiciona .motion-fallback e revela
//   tudo, então o conteúdo nunca fica preso invisível.
import Lenis from "lenis";
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

    // 1) Smooth scroll + barra de progresso + sync do ScrollTrigger
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    const bar = document.getElementById("scrollbar");
    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? scroll / max : 0})`;
      }
      ScrollTrigger.update();
    });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Âncoras internas rolam suave (usa o Lenis em vez do salto nativo)
    document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]').forEach((a) => {
      let url: URL;
      try { url = new URL(a.href, location.href); } catch { return; }
      if (url.pathname !== location.pathname || !url.hash || url.hash === "#") return;
      const target = document.querySelector(url.hash);
      if (!target) return;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        lenis.scrollTo(target as HTMLElement, { offset: -8 });
        history.pushState(null, "", url.hash);
      });
    });

    // 2) Reveals: fade + slide, com stagger, disparados quando entram na viewport
    gsap.set(".reveal", { opacity: 0, y: 46 });
    ScrollTrigger.batch(".reveal", {
      start: "top 88%",
      onEnter: (els) =>
        gsap.to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", overwrite: true }),
    });

    // Contêineres .stagger: os filhos entram em sequência
    gsap.utils.toArray<HTMLElement>(".stagger").forEach((c) => {
      const kids = Array.from(c.children) as HTMLElement[];
      if (!kids.length) return;
      gsap.set(kids, { opacity: 0, y: 34 });
      ScrollTrigger.create({
        trigger: c,
        start: "top 85%",
        once: true,
        onEnter: () => gsap.to(kids, { opacity: 1, y: 0, duration: 0.7, stagger: 0.09, ease: "power3.out" }),
      });
    });

    // 3) Parallax por scroll (scrub) nas camadas marcadas
    gsap.utils.toArray<HTMLElement>("[data-parallax], .arch-layer").forEach((el) => {
      const speed = parseFloat(el.dataset.speed || "10");
      gsap.to(el, {
        yPercent: -speed,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
    });

    // 4) Botões magnéticos (só CTAs principais, só em ponteiro fino/mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
      gsap.utils.toArray<HTMLElement>(".wh-btn, .lp-btn, .art-cta-btn").forEach((btn) => {
        const s = 0.32;
        btn.addEventListener("pointermove", (ev) => {
          const r = btn.getBoundingClientRect();
          gsap.to(btn, {
            x: (ev.clientX - r.left - r.width / 2) * s,
            y: (ev.clientY - r.top - r.height / 2) * s,
            duration: 0.5,
            ease: "power3.out",
          });
        });
        btn.addEventListener("pointerleave", () =>
          gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" })
        );
      });
    }

    // Recalcula posições após carregar fontes/imagens (evita triggers deslocados)
    window.addEventListener("load", () => ScrollTrigger.refresh());
  } catch {
    revealFallback();
  }
}
