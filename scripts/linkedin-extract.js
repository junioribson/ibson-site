// Snippet para rodar NO NAVEGADOR (logado no LinkedIn), na página de atividades:
// https://www.linkedin.com/in/ibson-junior/recent-activity/all/
// Role a página para carregar ~8 posts, depois execute este código no console
// (ou via a ferramenta javascript_tool do Claude for Chrome).
// Retorna os posts COM imagem, do mais recente para o mais antigo: urn + texto.
// Use os urn para baixar as artes com scripts/update-linkedin-posts.mjs.
(() => {
  const out = [];
  const seen = new Set();
  document.querySelectorAll('[data-urn^="urn:li:activity"]').forEach((n) => {
    const urn = n.getAttribute("data-urn");
    if (!urn || !urn.startsWith("urn:li:activity") || seen.has(urn)) return;
    const hasImg = [...n.querySelectorAll("img")]
      .map((i) => i.currentSrc || i.src)
      .some((s) => s && s.includes("media.licdn.com")
        && !/displayphoto|framedphoto|EntityPhoto|company-logo|profile-banner/.test(s));
    if (!hasImg) return;
    seen.add(urn);
    let text = "";
    const tx = n.querySelector(".update-components-text, .feed-shared-update-v2__description, .update-components-update-v2__commentary");
    if (tx) text = tx.innerText.replace(/\s+/g, " ").trim();
    out.push({ urn, text: text.slice(0, 160) });
  });
  return { total: out.length, posts: out };
})();
