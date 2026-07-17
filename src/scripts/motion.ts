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

    // 2) Reveals ousados: slide amplo + leve escala, stagger, disparados no scroll
    gsap.set(".reveal", { opacity: 0, y: 78, scale: 0.94 });
    ScrollTrigger.batch(".reveal", {
      start: "top 90%",
      onEnter: (els) =>
        gsap.to(els, { opacity: 1, y: 0, scale: 1, duration: 1.15, stagger: 0.16, ease: "expo.out", overwrite: true }),
    });

    // Grades .stagger: cascata mais marcada, com leve profundidade 3D
    gsap.utils.toArray<HTMLElement>(".stagger").forEach((c) => {
      const kids = Array.from(c.children) as HTMLElement[];
      if (!kids.length) return;
      gsap.set(kids, { opacity: 0, y: 64, rotateX: 10, transformOrigin: "50% 100%", transformPerspective: 900 });
      ScrollTrigger.create({
        trigger: c,
        start: "top 86%",
        once: true,
        onEnter: () => gsap.to(kids, { opacity: 1, y: 0, rotateX: 0, duration: 0.95, stagger: 0.1, ease: "power4.out" }),
      });
    });

    // 2b) Números dos cases "contam" ao entrar na tela
    gsap.utils.toArray<HTMLElement>(".fs .n").forEach((el) => {
      const raw = (el.textContent || "").trim();
      const m = raw.match(/^(\D*)(\d[\d.,]*)(.*)$/);
      if (!m) return;
      const pre = m[1], suf = m[3];
      const target = parseFloat(m[2].replace(/\./g, "").replace(",", "."));
      if (!isFinite(target)) return;
      const dec = (m[2].split(/[.,]/)[1] || "").length;
      const obj = { v: 0 };
      el.textContent = pre + "0" + suf;
      ScrollTrigger.create({
        trigger: el,
        start: "top 92%",
        once: true,
        onEnter: () =>
          gsap.to(obj, {
            v: target,
            duration: 1.7,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = pre + obj.v.toLocaleString("pt-BR", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
            },
          }),
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

    // 4) Interações de mouse (tilt 3D nos cards + botões magnéticos), só ponteiro fino
    if (window.matchMedia("(pointer: fine)").matches) {
      // Tilt 3D leve nos cards ao passar o mouse
      gsap.utils.toArray<HTMLElement>(".artcard, .lk-card, .lib-hub, .lp-link, .feat, .theme-card").forEach((card) => {
        card.addEventListener("pointermove", (ev) => {
          const r = card.getBoundingClientRect();
          const px = (ev.clientX - r.left) / r.width - 0.5;
          const py = (ev.clientY - r.top) / r.height - 0.5;
          gsap.to(card, { rotateY: px * 7, rotateX: -py * 7, duration: 0.4, ease: "power2.out", transformPerspective: 800, transformOrigin: "center" });
        });
        card.addEventListener("pointerleave", () =>
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" })
        );
      });

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
