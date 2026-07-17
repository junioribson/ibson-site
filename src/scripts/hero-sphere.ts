// Esfera de partículas 3D (WebGL) do hero. Os PONTOS reagem ao mouse (incham para
// fora onde o cursor passa) e respiram sozinhos. Theme-aware: no escuro brilho
// aditivo violeta; no claro pontos roxo escuro nítidos + borda rosa neon (halo CSS).
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
  // Borda rosa neon (só aparece no tema claro, via CSS); posicionada em resize().
  const halo = document.createElement("div");
  halo.className = "o3-halo";
  halo.setAttribute("aria-hidden", "true");
  hero.insertBefore(halo, hero.firstChild);
  // Liga a camada da esfera: o CSS esconde a constelação/lobo só quando isto existe.
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

  const mat = new THREE.PointsMaterial({ size: 0.02, transparent: true, depthWrite: false });
  const glowMat = new THREE.PointsMaterial({ size: 0.055, transparent: true, depthWrite: false });
  const applyTheme = () => {
    const light = document.documentElement.getAttribute("data-theme") === "light";
    // Claro: pontos roxo escuro, nítidos sobre o creme (a borda neon vem do .o3-halo).
    // Escuro: violeta claro com brilho aditivo (halo pela própria luz somada).
    mat.color = new THREE.Color(light ? "#33065c" : "#a98bff");
    mat.opacity = light ? 0.95 : 0.92;
    mat.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
    mat.needsUpdate = true;
    // No claro o glow de partículas (quadrados faltos) é desligado: a borda vira o halo CSS.
    glowMat.color = new THREE.Color(light ? "#33065c" : "#e05aa8");
    glowMat.opacity = light ? 0 : 0.3;
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

  // Responsivo: em telas largas a esfera fica à direita e maior; no mobile, menor,
  // mais ao centro/atrás, e com menos intensidade (fica de cenário).
  let W = 0, H = 0, radiusPx = 150;
  const resize = () => {
    W = hero.clientWidth; H = hero.clientHeight;
    renderer.setSize(W, H, false);
    cam.aspect = W / H; cam.updateProjectionMatrix();
    const small = W < 820;
    // escala e posição responsivas: a esfera aparece bem no canto direito, sem
    // cobrir o texto (que fica à esquerda com o scrim). No mobile fica de cenário.
    grp.scale.setScalar(small ? 1.05 : 1.5);
    grp.position.x = small ? 0.15 : 0.78;
    grp.position.y = small ? 0.5 : 0.02;
    cam.position.z = small ? 3.6 : 3.2;
    radiusPx = Math.min(W, H) * (small ? 0.24 : 0.22);
    // No mobile a esfera é cenário. No claro os pontos roxo escuro aparecem mais
    // que o violeta do escuro, então baixamos mais a opacidade para não competir
    // com o texto (creme = fundo claro).
    const lightNow = document.documentElement.getAttribute("data-theme") === "light";
    canvas.style.opacity = small ? (lightNow ? "0.4" : "0.55") : "1";
    // Posiciona a borda neon (halo) exatamente ao redor da esfera: projeta o centro
    // e um ponto do "topo" (raio) para a tela e mede o raio em pixels.
    grp.updateMatrixWorld();
    const c = new THREE.Vector3(0, 0, 0).applyMatrix4(grp.matrixWorld).project(cam);
    const e = new THREE.Vector3(0, 1, 0).applyMatrix4(grp.matrixWorld).project(cam);
    const cx = (c.x * 0.5 + 0.5) * W, cy = (-c.y * 0.5 + 0.5) * H;
    const ex = (e.x * 0.5 + 0.5) * W, ey = (-e.y * 0.5 + 0.5) * H;
    const rPx = Math.hypot(ex - cx, ey - cy);
    const d = rPx * 3;
    halo.style.left = (cx - d / 2) + "px";
    halo.style.top = (cy - d / 2) + "px";
    halo.style.width = d + "px";
    halo.style.height = d + "px";
    halo.style.opacity = small ? "0.7" : "1";
  };
  resize();
  // Reposiciona depois do layout assentar (o halo depende de clientWidth/Height).
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
