// Microcopy de interface (não vem de content.ts): botões, rótulos e textos curtos.
import { normalizeLocale } from "./utils";

type UIStrings = {
  footerNavigate: string;
  footerConnect: string;
  footerEmail: string;
  footerInviteTalk: string;
  footerTalkMentoring: string;
  footerRights: string;
  footerTagline: string;
  connectLinkedin: string;
  menuTagline: string;
  postsKicker: string;
  postsSeeAll: string;
  postsHint: string;
  artigosKicker: string;
  artigosLatest: string;
  artigosSeeAll: string;
  libraryKicker: string;
  libraryHome: string;
  libraryMostRecent: string;
  readArticle: string;
  articleBackAll: string;
  articleBy: string;
  articleReadingOf: string;
  articleSeeAll: string;
  articleShare: string;
  articleTranslate: string;
  articleTranslateTo: string;
  kickerSobre: string;
  kickerCases: string;
  kickerGaleria: string;
  kickerMentoria: string;
  kickerRepertorio: string;
  kickerPalestras: string;
  kickerVideos: string;
  kickerContato: string;
  proliferSince: string;
  formName: string;
  formCompany: string;
  formEmail: string;
  formWhats: string;
  formSubject: string;
  formMessage: string;
  formSend: string;
  formSuccess: string;
  mentWhatIs: string;
  mentWhoFor: string;
  mentTopics: string;
  proliferH2: string;
  proliferLiveTitle: string;
  proliferLiveText: string;
  themeLabel: string;
};

const UI: Record<"pt" | "es" | "en", UIStrings> = {
  pt: {
    footerNavigate: "Navegar",
    footerConnect: "Conectar",
    footerEmail: "E-mail ↗",
    footerInviteTalk: "Convidar para palestra",
    footerTalkMentoring: "Falar sobre mentoria",
    footerRights: "© 2026 IBSON JUNIOR · SITE OFICIAL",
    footerTagline: "CONSCIÊNCIA · LIDERANÇA · DECISÃO",
    connectLinkedin: "Conecte-se comigo no LinkedIn",
    menuTagline: "IBSONJUNIOR.COM.BR · CONSCIÊNCIA · DECISÃO · RESPONSABILIDADE",
    postsKicker: "LinkedIn",
    postsSeeAll: "Ver todos ↗",
    postsHint: "Ver no LinkedIn ↗",
    artigosKicker: "Artigos",
    artigosLatest: "Os mais recentes",
    artigosSeeAll: "Ver todos os artigos",
    libraryKicker: "Biblioteca",
    libraryHome: "‹ Início",
    libraryMostRecent: "Mais recente",
    readArticle: "Ler artigo →",
    articleBackAll: "‹ Todos os artigos",
    articleBy: "Por",
    articleReadingOf: "de leitura",
    articleSeeAll: "Ver todos os artigos",
    articleShare: "Compartilhar no LinkedIn ↗",
    articleTranslate: "Traduzir",
    articleTranslateTo: "Ler em outro idioma",
    kickerSobre: "Sobre",
    kickerCases: "Cases & Trajetória",
    kickerGaleria: "Últimos acontecimentos",
    kickerMentoria: "Mentoria",
    kickerRepertorio: "Repertório",
    kickerPalestras: "Palestras",
    kickerVideos: "Vídeos",
    kickerContato: "Contato",
    proliferSince: "desde 2008",
    formName: "Nome",
    formCompany: "Empresa",
    formEmail: "E-mail",
    formWhats: "WhatsApp",
    formSubject: "Assunto",
    formMessage: "Mensagem",
    formSend: "Enviar mensagem",
    formSuccess: "Mensagem enviada. Obrigado, retorno em breve com disponibilidade e próximos passos.",
    mentWhatIs: "O que é",
    mentWhoFor: "Para quem é",
    mentTopics: "O que pode ser trabalhado",
    proliferH2: "Cultura, comunidade e o primeiro laboratório de audiência.",
    proliferLiveTitle: "A ProliferArte é um movimento vivo.",
    proliferLiveText: "Acompanhe as publicações, os artistas e a comunidade na página oficial.",
    themeLabel: "Tema",
  },
  es: {
    footerNavigate: "Navegar",
    footerConnect: "Conectar",
    footerEmail: "Correo ↗",
    footerInviteTalk: "Invitar a una charla",
    footerTalkMentoring: "Hablar sobre mentoría",
    footerRights: "© 2026 IBSON JUNIOR · SITIO OFICIAL",
    footerTagline: "CONCIENCIA · LIDERAZGO · DECISIÓN",
    connectLinkedin: "Conéctate conmigo en LinkedIn",
    menuTagline: "IBSONJUNIOR.COM.BR · CONCIENCIA · DECISIÓN · RESPONSABILIDAD",
    postsKicker: "LinkedIn",
    postsSeeAll: "Ver todos ↗",
    postsHint: "Ver en LinkedIn ↗",
    artigosKicker: "Artículos",
    artigosLatest: "Los más recientes",
    artigosSeeAll: "Ver todos los artículos",
    libraryKicker: "Biblioteca",
    libraryHome: "‹ Inicio",
    libraryMostRecent: "Más reciente",
    readArticle: "Leer artículo →",
    articleBackAll: "‹ Todos los artículos",
    articleBy: "Por",
    articleReadingOf: "de lectura",
    articleSeeAll: "Ver todos los artículos",
    articleShare: "Compartir en LinkedIn ↗",
    articleTranslate: "Traducir",
    articleTranslateTo: "Leer en otro idioma",
    kickerSobre: "Sobre mí",
    kickerCases: "Casos y trayectoria",
    kickerGaleria: "Últimos acontecimientos",
    kickerMentoria: "Mentoría",
    kickerRepertorio: "Repertorio",
    kickerPalestras: "Charlas",
    kickerVideos: "Vídeos",
    kickerContato: "Contacto",
    proliferSince: "desde 2008",
    formName: "Nombre",
    formCompany: "Empresa",
    formEmail: "Correo",
    formWhats: "WhatsApp",
    formSubject: "Asunto",
    formMessage: "Mensaje",
    formSend: "Enviar mensaje",
    formSuccess: "Mensaje enviado. Gracias, responderé pronto con disponibilidad y próximos pasos.",
    mentWhatIs: "Qué es",
    mentWhoFor: "Para quién es",
    mentTopics: "Qué se puede trabajar",
    proliferH2: "Cultura, comunidad y el primer laboratorio de audiencia.",
    proliferLiveTitle: "ProliferArte es un movimiento vivo.",
    proliferLiveText: "Sigue las publicaciones, los artistas y la comunidad en la página oficial.",
    themeLabel: "Tema",
  },
  en: {
    footerNavigate: "Navigate",
    footerConnect: "Connect",
    footerEmail: "Email ↗",
    footerInviteTalk: "Invite to a talk",
    footerTalkMentoring: "Talk about mentoring",
    footerRights: "© 2026 IBSON JUNIOR · OFFICIAL SITE",
    footerTagline: "AWARENESS · LEADERSHIP · DECISION",
    connectLinkedin: "Connect with me on LinkedIn",
    menuTagline: "IBSONJUNIOR.COM.BR · AWARENESS · DECISION · RESPONSIBILITY",
    postsKicker: "LinkedIn",
    postsSeeAll: "See all ↗",
    postsHint: "View on LinkedIn ↗",
    artigosKicker: "Articles",
    artigosLatest: "The latest",
    artigosSeeAll: "See all articles",
    libraryKicker: "Library",
    libraryHome: "‹ Home",
    libraryMostRecent: "Latest",
    readArticle: "Read article →",
    articleBackAll: "‹ All articles",
    articleBy: "By",
    articleReadingOf: "read",
    articleSeeAll: "See all articles",
    articleShare: "Share on LinkedIn ↗",
    articleTranslate: "Translate",
    articleTranslateTo: "Read in another language",
    kickerSobre: "About",
    kickerCases: "Cases & Journey",
    kickerGaleria: "Latest happenings",
    kickerMentoria: "Mentoring",
    kickerRepertorio: "Repertoire",
    kickerPalestras: "Talks",
    kickerVideos: "Videos",
    kickerContato: "Contact",
    proliferSince: "since 2008",
    formName: "Name",
    formCompany: "Company",
    formEmail: "Email",
    formWhats: "WhatsApp",
    formSubject: "Subject",
    formMessage: "Message",
    formSend: "Send message",
    formSuccess: "Message sent. Thank you, I will reply soon with availability and next steps.",
    mentWhatIs: "What it is",
    mentWhoFor: "Who it is for",
    mentTopics: "What we can work on",
    proliferH2: "Culture, community and the first audience laboratory.",
    proliferLiveTitle: "ProliferArte is a living movement.",
    proliferLiveText: "Follow the publications, artists and community on the official page.",
    themeLabel: "Theme",
  },
};

export function t(locale?: string | null): UIStrings {
  return UI[normalizeLocale(locale)];
}
