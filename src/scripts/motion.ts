// Camada de movimento SUAVE (sem efeitos de mouse que tremem a tela). Só:
// smooth scroll (Lenis), reveals limpos no scroll e contagem dos números dos cases.
// Nada de parallax de mouse, tilt ou pin. Auto-hospedado (bundle do Vite), sem CDN.
//
// Acessibilidade: sob prefers-reduced-motion NADA disso roda (o CSS deixa tudo
// visível e estático). O CSS só esconde .reveal quando <html class="js-motion">;
// se este módulo falhar, o timeout de segurança revela tudo (.motion-fallback).
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

    // 1) Smooth scroll (Lenis) + barra de progresso + sync do ScrollTrigger
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

    // Âncoras internas rolam suave via Lenis
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

    // 2) Reveals limpos: fade + slide suave, com stagger. Nada de escala/tremor.
    gsap.set(".reveal", { opacity: 0, y: 40 });
    ScrollTrigger.batch(".reveal", {
      start: "top 88%",
      onEnter: (els) =>
        gsap.to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: "power2.out", overwrite: true }),
    });
    gsap.utils.toArray<HTMLElement>(".stagger").forEach((c) => {
      const kids = Array.from(c.children) as HTMLElement[];
      if (!kids.length) return;
      gsap.set(kids, { opacity: 0, y: 30 });
      ScrollTrigger.create({
        trigger: c,
        start: "top 86%",
        once: true,
        onEnter: () => gsap.to(kids, { opacity: 1, y: 0, duration: 0.8, stagger: 0.09, ease: "power2.out" }),
      });
    });

    // 3) Parallax por scroll bem suave (não é mouse). Camadas de fundo apenas.
    gsap.utils.toArray<HTMLElement>("[data-parallax], .arch-layer").forEach((el) => {
      const speed = parseFloat(el.dataset.speed || "7");
      gsap.to(el, {
        yPercent: -speed,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
    });

    // 4) Números dos cases contam ao entrar na tela
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
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = pre + obj.v.toLocaleString("pt-BR", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
            },
          }),
      });
    });

    window.addEventListener("load", () => ScrollTrigger.refresh());
  } catch {
    revealFallback();
  }
}
