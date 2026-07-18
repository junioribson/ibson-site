// Esfera de partículas 3D (WebGL) do hero. Os PONTOS reagem ao mouse (incham para
// fora onde o cursor passa) e respiram sozinhos. MESMO efeito nos dois temas, só
// com cores de contraste: escuro = violeta com brilho aditivo; claro = roxo escuro
// com brilho violeta suave (sem rosa, sem halo flutuante).
//
// Three.js é importado por este módulo, que por sua vez é carregado SOB DEMANDA
// (dynamic import no idle, só no home) pelo Hero. Assim o bundle inicial e o LCP
// não pagam o custo do WebGL. Se não houver WebGL ou o usuário pedir menos
// movimento, a constelação (.wh-net) continua como fallback (nada é escondido).
import * as THREE from "three";

export function initHeroSphere(hero: HTMLElement) {
  const canvas = document.createElement("canvas");
  canvas.className = "o3-sphere";
  canvas.setAttribute("aria-hidden", "true");

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch {
    return; // sem WebGL: mantém a constelação como fallback
  }
  hero.insertBefore(canvas, hero.firstChild);
  // Liga a camada da esfera: o CSS para a constelação (fallback) quando isto existe.
  hero.classList.add("sphere-on");

  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  cam.position.z = 3.2;

  // Pontos distribuídos numa esfera (fibonacci). Guardamos a posição "casa".
  const N = 2200;
  const home = new Float32Array(N * 3);
  const cur = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const x = Math.sin(phi) * Math.cos(theta), y = Math.sin(phi) * Math.sin(theta), z = Math.cos(phi);
    home[i * 3] = x; home[i * 3 + 1] = y; home[i * 3 + 2] = z;
    cur[i * 3] = x; cur[i * 3 + 1] = y; cur[i * 3 + 2] = z;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(cur, 3));

  // Textura de ponto REDONDO e suave (gradiente radial): sem ela o PointsMaterial
  // desenha quadrados, que em tamanho grande pareciam glitch. Assim os pontos viram
  // pequenos círculos suaves (e o brilho vira um bloom sutil).
  const dotTex = (() => {
    const s = 64, cvs = document.createElement("canvas");
    cvs.width = cvs.height = s;
    const g = cvs.getContext("2d")!;
    const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    grd.addColorStop(0, "rgba(255,255,255,1)");
    grd.addColorStop(0.5, "rgba(255,255,255,0.5)");
    grd.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = grd;
    g.fillRect(0, 0, s, s);
    return new THREE.CanvasTexture(cvs);
  })();
  // sizeAttenuation:false = tamanho constante em tela (não incha por perspectiva),
  // então não há mais aqueles quadrados enormes nos pontos próximos.
  const mat = new THREE.PointsMaterial({ size: 3.2, map: dotTex, sizeAttenuation: false, transparent: true, depthWrite: false });
  const glowMat = new THREE.PointsMaterial({ size: 7, map: dotTex, sizeAttenuation: false, transparent: true, depthWrite: false });
  const applyTheme = () => {
    const light = document.documentElement.getAttribute("data-theme") === "light";
    // MESMO efeito nos dois temas (pontos + camada de brilho), só com as cores
    // ajustadas para contraste. Sem rosa, sem halo flutuante.
    // Escuro: violeta claro com brilho ADITIVO (o brilho soma luz sobre o fundo escuro).
    // Claro: roxo escuro nítido sobre o creme + halo violeta suave em NormalBlending
    // (aditivo clarearia até o branco no fundo claro, então usamos blend normal).
    mat.color = new THREE.Color(light ? "#33065c" : "#a98bff");
    mat.opacity = light ? 0.95 : 0.92;
    mat.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
    mat.needsUpdate = true;
    glowMat.color = new THREE.Color(light ? "#5b2ee6" : "#7b57f0");
    glowMat.opacity = light ? 0.14 : 0.28;
    glowMat.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
    glowMat.needsUpdate = true;
  };
  applyTheme();
  // Ao trocar de tema, reaplica cores E reposiciona/reopacifica (resize já existe).
  new MutationObserver(() => { applyTheme(); resize(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  const grp = new THREE.Group();
  grp.add(new THREE.Points(geo, glowMat));
  grp.add(new THREE.Points(geo, mat));
  scene.add(grp);

  // A esfera é GRANDE e mais ao centro, para as partículas alcançarem o topo e as
  // DUAS laterais (os espaços vazios ao redor do texto). O texto continua legível
  // porque o scrim (CSS, .wh-scrim sob [data-o3]) desenha o fundo por cima da área
  // do texto, escondendo as partículas exatamente ali. Só a escala/posição muda por
  // tier; a legibilidade é responsabilidade do scrim (também responsivo).
  let W = 0, H = 0, radiusPx = 150;
  const resize = () => {
    W = hero.clientWidth; H = hero.clientHeight;
    renderer.setSize(W, H, false);
    cam.aspect = W / H; cam.updateProjectionMatrix();
    const small = W < 820;
    const tablet = !small && W < 1080;
    // Escala maior + posição mais central: a nuvem de pontos cobre topo e laterais.
    grp.scale.setScalar(small ? 1.35 : tablet ? 1.9 : 2.15);
    grp.position.x = small ? 0 : tablet ? 0.1 : 0.14;
    grp.position.y = small ? 0.15 : 0.04;
    cam.position.z = small ? 3.5 : 3.0;
    radiusPx = Math.min(W, H) * (small ? 0.26 : 0.24);
    // No claro os pontos roxo escuro aparecem mais que o violeta do escuro; no mobile
    // a esfera é mais cenário. Opacidade por tier/tema para não competir com o texto.
    const lightNow = document.documentElement.getAttribute("data-theme") === "light";
    canvas.style.opacity = small
      ? (lightNow ? "0.5" : "0.62")
      : tablet
        ? (lightNow ? "0.72" : "0.9")
        : (lightNow ? "0.86" : "1");
  };
  resize();
  // Reposiciona depois do layout assentar (depende de clientWidth/Height do hero).
  requestAnimationFrame(resize);
  addEventListener("load", resize);
  addEventListener("resize", resize);

  // Mouse relativo ao hero (para deformar os pontos onde o cursor está).
  const mouse = { x: -9999, y: -9999, active: false };
  let rect = hero.getBoundingClientRect();
  hero.addEventListener("pointermove", (e) => { mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top; mouse.active = true; });
  hero.addEventListener("pointerleave", () => { mouse.active = false; });
  addEventListener("scroll", () => { rect = hero.getBoundingClientRect(); }, { passive: true });

  const attr = geo.getAttribute("position") as THREE.BufferAttribute;
  const proj = new THREE.Vector3();
  let raf = 0, on = true, t = 0;
  const tick = () => {
    if (!on) return;
    t += 0.01;
    grp.rotation.y += 0.0006; // giro quase imperceptível; o "movimento" é dos pontos
    grp.updateMatrixWorld();
    for (let i = 0; i < N; i++) {
      const i3 = i * 3;
      const hx = home[i3], hy = home[i3 + 1], hz = home[i3 + 2];
      // respiração sutil (vida mesmo sem mouse)
      const breathe = 1 + Math.sin(t * 1.4 + i * 0.35) * 0.012;
      let tx = hx * breathe, ty = hy * breathe, tz = hz * breathe;
      // deformação: pontos perto do cursor incham para fora (formam figuras)
      if (mouse.active) {
        proj.set(hx, hy, hz).applyMatrix4(grp.matrixWorld).project(cam);
        const sx = (proj.x * 0.5 + 0.5) * W, sy = (-proj.y * 0.5 + 0.5) * H;
        const dd = Math.hypot(sx - mouse.x, sy - mouse.y);
        if (dd < radiusPx) {
          const f = 1 - dd / radiusPx;
          const push = 1 + f * f * 0.7;
          tx = hx * push; ty = hy * push; tz = hz * push;
        }
      }
      // mola de volta à posição alvo (suave)
      cur[i3] += (tx - cur[i3]) * 0.14;
      cur[i3 + 1] += (ty - cur[i3 + 1]) * 0.14;
      cur[i3 + 2] += (tz - cur[i3 + 2]) * 0.14;
    }
    attr.needsUpdate = true;
    renderer.render(scene, cam);
    raf = requestAnimationFrame(tick);
  };
  tick();

  // pausa quando o hero sai da tela (economia de bateria/CPU)
  new IntersectionObserver((es) => es.forEach((en) => {
    if (en.isIntersecting && !on) { on = true; raf = requestAnimationFrame(tick); }
    else if (!en.isIntersecting && on) { on = false; cancelAnimationFrame(raf); }
  })).observe(hero);
}
