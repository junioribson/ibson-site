// ==========================================================================
// Política de Privacidade (LGPD, Lei nº 13.709/2018), trilíngue.
// Fatos reais do site: Google Analytics (analytics, com consentimento),
// Web3Forms (entrega do formulário de contato) e Vercel (hospedagem).
// Nada é inventado. TODO(legal): opcionalmente incluir CNPJ/endereço do
// controlador e submeter a revisão de um advogado antes de considerar final.
// Ao adicionar novas ferramentas (newsletter, pixel, etc.), atualizar aqui.
// ==========================================================================
import { normalizeLocale, type Locale } from "../i18n/utils";

export type PrivacySection = { h: string; p: string[] };
export type PrivacyDoc = {
  title: string;
  updatedLabel: string;
  updated: string;
  intro: string;
  sections: PrivacySection[];
};

const EMAIL = "contato@ibsonjunior.com.br";
const mail = `<a href="mailto:${EMAIL}">${EMAIL}</a>`;

const DOC: Record<Locale, PrivacyDoc> = {
  pt: {
    title: "Política de Privacidade",
    updatedLabel: "Última atualização",
    updated: "8 de julho de 2026",
    intro:
      "Esta Política de Privacidade explica como o site ibsonjunior.com.br trata dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018). Navegar e usar este site significa estar ciente desta política.",
    sections: [
      {
        h: "Quem é o controlador",
        p: [
          `O controlador dos dados é Ibson Junior, responsável por este site pessoal. Para qualquer assunto relacionado a privacidade e dados pessoais, o contato é o e-mail ${mail}.`,
        ],
      },
      {
        h: "Quais dados coletamos",
        p: [
          "<strong>Dados de navegação.</strong> De forma agregada e estatística, coletamos informações como páginas visitadas, tempo de permanência, tipo de dispositivo, navegador e origem do acesso, por meio de ferramenta de análise. Esses dados ajudam a entender o uso do site e a melhorá-lo.",
          "<strong>Dados de contato.</strong> Quando você preenche o formulário de contato, coletamos o que você informa: nome, empresa (opcional), e-mail, WhatsApp (opcional) e a mensagem. Eles são usados apenas para responder e dar andamento ao seu contato.",
        ],
      },
      {
        h: "Cookies e tecnologias semelhantes",
        p: [
          "Cookies são pequenos arquivos guardados no seu navegador. Usamos dois tipos: <strong>necessários</strong>, que garantem o funcionamento básico e registram a sua preferência de privacidade, e <strong>analíticos</strong>, do Google Analytics, que medem o uso do site de forma agregada.",
          "Os cookies analíticos só são ativados com o seu consentimento. Ao acessar o site, você escolhe entre aceitar ou recusar no aviso exibido. Se recusar, o Google Analytics não é carregado. Você pode rever a escolha limpando os dados do site no seu navegador.",
        ],
      },
      {
        h: "Finalidades e bases legais",
        p: [
          "Tratamos dados para dois fins. Para responder aos seus contatos, com base na execução de procedimentos preliminares a pedido do titular e no legítimo interesse em atender quem nos procura. Para medir e melhorar o uso do site, com base no seu consentimento, referente aos cookies analíticos. Não usamos seus dados para decisões automatizadas nem para publicidade direcionada.",
        ],
      },
      {
        h: "Com quem compartilhamos",
        p: [
          "Não vendemos dados pessoais. Compartilhamos apenas com operadores que viabilizam o funcionamento do site, no limite necessário:",
          "<ul><li><strong>Google Analytics</strong> (Google LLC): análise agregada do uso do site.</li><li><strong>Web3Forms</strong>: entrega das mensagens do formulário de contato ao e-mail do controlador.</li><li><strong>Vercel</strong>: hospedagem do site.</li></ul>",
          "Cada um desses serviços trata os dados conforme as suas próprias políticas de privacidade.",
        ],
      },
      {
        h: "Transferência internacional",
        p: [
          "Alguns desses operadores (Google, Web3Forms e Vercel) podem processar dados em servidores fora do Brasil, inclusive nos Estados Unidos. Nesses casos, aplicam-se as salvaguardas previstas na LGPD para a transferência internacional de dados.",
        ],
      },
      {
        h: "Por quanto tempo guardamos",
        p: [
          "Os dados de contato são mantidos pelo tempo necessário para tratar o seu pedido e cumprir obrigações legais. Os dados analíticos são retidos de forma agregada, conforme a configuração do Google Analytics. Você pode pedir a exclusão a qualquer momento.",
        ],
      },
      {
        h: "Seus direitos",
        p: [
          "Como titular, a LGPD garante a você, entre outros, os direitos de: confirmar a existência de tratamento; acessar seus dados; corrigir dados incompletos ou desatualizados; solicitar anonimização, bloqueio ou eliminação; revogar o consentimento; e obter informação sobre o compartilhamento.",
          `Para exercer qualquer desses direitos, escreva para ${mail}. Respondemos no menor prazo possível.`,
        ],
      },
      {
        h: "Segurança",
        p: [
          "Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados contra acesso não autorizado, perda ou alteração. Nenhum sistema é totalmente imune a riscos, mas trabalhamos para reduzir essa possibilidade.",
        ],
      },
      {
        h: "Menores de idade",
        p: [
          "Este site não é direcionado a menores de 18 anos e não coleta intencionalmente dados de crianças e adolescentes.",
        ],
      },
      {
        h: "Alterações desta política",
        p: [
          "Esta política pode ser atualizada para refletir mudanças no site ou na legislação. A data da última atualização fica sempre indicada no topo. Recomenda-se revisitar esta página periodicamente.",
        ],
      },
      {
        h: "Contato e encarregado",
        p: [
          `Para dúvidas sobre esta política ou sobre o tratamento dos seus dados, fale com o encarregado pelo tratamento pelo e-mail ${mail}.`,
        ],
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    updatedLabel: "Última actualización",
    updated: "8 de julio de 2026",
    intro:
      "Esta Política de Privacidad explica cómo el sitio ibsonjunior.com.br trata los datos personales, en conformidad con la Ley General de Protección de Datos de Brasil (LGPD, Ley nº 13.709/2018). Navegar y usar este sitio implica estar al tanto de esta política.",
    sections: [
      {
        h: "Quién es el controlador",
        p: [
          `El controlador de los datos es Ibson Junior, responsable de este sitio personal. Para cualquier asunto relacionado con privacidad y datos personales, el contacto es el correo ${mail}.`,
        ],
      },
      {
        h: "Qué datos recopilamos",
        p: [
          "<strong>Datos de navegación.</strong> De forma agregada y estadística, recopilamos información como páginas visitadas, tiempo de permanencia, tipo de dispositivo, navegador y origen del acceso, mediante una herramienta de análisis. Estos datos ayudan a entender el uso del sitio y a mejorarlo.",
          "<strong>Datos de contacto.</strong> Cuando completas el formulario de contacto, recopilamos lo que informas: nombre, empresa (opcional), correo, WhatsApp (opcional) y el mensaje. Se usan solo para responder y dar seguimiento a tu contacto.",
        ],
      },
      {
        h: "Cookies y tecnologías similares",
        p: [
          "Las cookies son pequeños archivos guardados en tu navegador. Usamos dos tipos: <strong>necesarias</strong>, que garantizan el funcionamiento básico y registran tu preferencia de privacidad, y <strong>analíticas</strong>, de Google Analytics, que miden el uso del sitio de forma agregada.",
          "Las cookies analíticas solo se activan con tu consentimiento. Al acceder al sitio, eliges entre aceptar o rechazar en el aviso mostrado. Si rechazas, Google Analytics no se carga. Puedes revisar tu elección borrando los datos del sitio en tu navegador.",
        ],
      },
      {
        h: "Finalidades y bases legales",
        p: [
          "Tratamos datos para dos fines. Para responder a tus contactos, con base en la ejecución de procedimientos preliminares a pedido del titular y en el interés legítimo de atender a quien nos busca. Para medir y mejorar el uso del sitio, con base en tu consentimiento, referente a las cookies analíticas. No usamos tus datos para decisiones automatizadas ni para publicidad dirigida.",
        ],
      },
      {
        h: "Con quién compartimos",
        p: [
          "No vendemos datos personales. Compartimos solo con operadores que hacen posible el funcionamiento del sitio, en la medida necesaria:",
          "<ul><li><strong>Google Analytics</strong> (Google LLC): análisis agregado del uso del sitio.</li><li><strong>Web3Forms</strong>: entrega de los mensajes del formulario de contacto al correo del controlador.</li><li><strong>Vercel</strong>: alojamiento del sitio.</li></ul>",
          "Cada uno de estos servicios trata los datos conforme a sus propias políticas de privacidad.",
        ],
      },
      {
        h: "Transferencia internacional",
        p: [
          "Algunos de estos operadores (Google, Web3Forms y Vercel) pueden procesar datos en servidores fuera de Brasil, incluso en Estados Unidos. En esos casos, se aplican las salvaguardas previstas en la LGPD para la transferencia internacional de datos.",
        ],
      },
      {
        h: "Por cuánto tiempo guardamos",
        p: [
          "Los datos de contacto se mantienen por el tiempo necesario para tratar tu solicitud y cumplir obligaciones legales. Los datos analíticos se retienen de forma agregada, conforme a la configuración de Google Analytics. Puedes solicitar la eliminación en cualquier momento.",
        ],
      },
      {
        h: "Tus derechos",
        p: [
          "Como titular, la LGPD te garantiza, entre otros, los derechos de: confirmar la existencia de tratamiento; acceder a tus datos; corregir datos incompletos o desactualizados; solicitar anonimización, bloqueo o eliminación; revocar el consentimiento; y obtener información sobre el compartir.",
          `Para ejercer cualquiera de estos derechos, escribe a ${mail}. Respondemos en el menor plazo posible.`,
        ],
      },
      {
        h: "Seguridad",
        p: [
          "Adoptamos medidas técnicas y organizativas razonables para proteger los datos contra acceso no autorizado, pérdida o alteración. Ningún sistema es totalmente inmune a riesgos, pero trabajamos para reducir esa posibilidad.",
        ],
      },
      {
        h: "Menores de edad",
        p: [
          "Este sitio no está dirigido a menores de 18 años y no recopila intencionalmente datos de niños y adolescentes.",
        ],
      },
      {
        h: "Cambios en esta política",
        p: [
          "Esta política puede actualizarse para reflejar cambios en el sitio o en la legislación. La fecha de la última actualización siempre queda indicada arriba. Se recomienda revisitar esta página periódicamente.",
        ],
      },
      {
        h: "Contacto y encargado",
        p: [
          `Para dudas sobre esta política o sobre el tratamiento de tus datos, habla con el encargado del tratamiento por el correo ${mail}.`,
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updatedLabel: "Last updated",
    updated: "July 8, 2026",
    intro:
      "This Privacy Policy explains how the website ibsonjunior.com.br handles personal data, in accordance with Brazil's General Data Protection Law (LGPD, Law No. 13.709/2018). Browsing and using this site means you are aware of this policy.",
    sections: [
      {
        h: "Who is the controller",
        p: [
          `The data controller is Ibson Junior, responsible for this personal website. For any matter related to privacy and personal data, the contact is the email ${mail}.`,
        ],
      },
      {
        h: "What data we collect",
        p: [
          "<strong>Browsing data.</strong> In an aggregated, statistical way, we collect information such as pages visited, time on page, device type, browser and referral source, through an analytics tool. This data helps us understand how the site is used and improve it.",
          "<strong>Contact data.</strong> When you fill in the contact form, we collect what you provide: name, company (optional), email, WhatsApp (optional) and the message. It is used only to reply to and follow up on your contact.",
        ],
      },
      {
        h: "Cookies and similar technologies",
        p: [
          "Cookies are small files stored in your browser. We use two kinds: <strong>necessary</strong> ones, which ensure basic operation and record your privacy preference, and <strong>analytics</strong> ones, from Google Analytics, which measure site usage in aggregate.",
          "Analytics cookies are only activated with your consent. When you access the site, you choose to accept or decline in the notice shown. If you decline, Google Analytics is not loaded. You can review your choice by clearing the site data in your browser.",
        ],
      },
      {
        h: "Purposes and legal bases",
        p: [
          "We process data for two purposes. To reply to your messages, based on carrying out preliminary steps at the data subject's request and on the legitimate interest in serving those who reach out. To measure and improve site usage, based on your consent regarding analytics cookies. We do not use your data for automated decisions or targeted advertising.",
        ],
      },
      {
        h: "Who we share with",
        p: [
          "We do not sell personal data. We share only with processors that enable the site to work, to the extent necessary:",
          "<ul><li><strong>Google Analytics</strong> (Google LLC): aggregate analysis of site usage.</li><li><strong>Web3Forms</strong>: delivery of contact form messages to the controller's email.</li><li><strong>Vercel</strong>: website hosting.</li></ul>",
          "Each of these services handles data according to its own privacy policy.",
        ],
      },
      {
        h: "International transfer",
        p: [
          "Some of these processors (Google, Web3Forms and Vercel) may process data on servers outside Brazil, including in the United States. In such cases, the safeguards set out in the LGPD for international data transfer apply.",
        ],
      },
      {
        h: "How long we keep it",
        p: [
          "Contact data is kept for as long as needed to handle your request and comply with legal obligations. Analytics data is retained in aggregate form, according to the Google Analytics configuration. You can request deletion at any time.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "As a data subject, the LGPD grants you, among others, the rights to: confirm the existence of processing; access your data; correct incomplete or outdated data; request anonymization, blocking or deletion; withdraw consent; and obtain information about sharing.",
          `To exercise any of these rights, write to ${mail}. We reply as soon as possible.`,
        ],
      },
      {
        h: "Security",
        p: [
          "We adopt reasonable technical and organizational measures to protect data against unauthorized access, loss or alteration. No system is entirely immune to risk, but we work to reduce that possibility.",
        ],
      },
      {
        h: "Minors",
        p: [
          "This site is not directed at people under 18 and does not intentionally collect data from children and adolescents.",
        ],
      },
      {
        h: "Changes to this policy",
        p: [
          "This policy may be updated to reflect changes to the site or to the law. The date of the last update is always shown at the top. We recommend revisiting this page periodically.",
        ],
      },
      {
        h: "Contact and data officer",
        p: [
          `For questions about this policy or the processing of your data, contact the data protection officer at ${mail}.`,
        ],
      },
    ],
  },
};

export function privacyDoc(locale?: string | null): PrivacyDoc {
  return DOC[normalizeLocale(locale)];
}
