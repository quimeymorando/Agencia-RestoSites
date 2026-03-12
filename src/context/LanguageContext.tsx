import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import type { Language, Translations } from "../i18n/translations";
import { translations } from "../i18n/translations";

const BASE_URL = "https://restosites.com";

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  t: translations.en,
  setLang: () => {},
});

// Detect lang from URL path: /es/ → "es", /pt/ → "pt", else "en"
function getLangFromPath(pathname: string): Language {
  if (pathname.startsWith("/es")) return "es";
  if (pathname.startsWith("/pt")) return "pt";
  return "en";
}

function detectInitialLang(pathname: string): Language {
  // URL takes priority
  const fromPath = getLangFromPath(pathname);
  if (fromPath !== "en") return fromPath;

  // Then localStorage
  const stored = localStorage.getItem("restosites_lang") as Language | null;
  if (stored && ["en", "es", "pt"].includes(stored)) return stored;

  // Then browser language
  const browser = navigator.language?.toLowerCase() ?? "en";
  if (browser.startsWith("es")) return "es";
  if (browser.startsWith("pt")) return "pt";
  return "en";
}

const SEO: Record<Language, { title: string; description: string; keywords: string }> = {
  en: {
    title: "RestoSites | Restaurant Websites That Bring More Customers",
    description:
      "Professional restaurant website design for restaurants, cafés and bars. Show your menu, location and allow customers to reserve tables easily. Delivered in 3–5 days.",
    keywords:
      "restaurant website, websites for restaurants, restaurant web design, restaurant website design",
  },
  es: {
    title: "RestoSites | Sitios Web Para Restaurantes Que Atraen Más Clientes",
    description:
      "Diseño web profesional para restaurantes, cafeterías y bares. Muestra tu menú, ubicación y permite reservas fácilmente. Entrega en 3–5 días.",
    keywords:
      "web para restaurantes, diseño web para restaurantes, pagina web restaurante, sitio web restaurante",
  },
  pt: {
    title: "RestoSites | Sites Para Restaurantes Que Trazem Mais Clientes",
    description:
      "Design profissional de sites para restaurantes, cafés e bares. Mostre seu menu, localização e permita reservas facilmente. Entrega em 3–5 dias.",
    keywords:
      "site para restaurantes, site profissional para restaurante, criação de site para restaurante",
  },
};

const LANG_PATHS: Record<Language, string> = {
  en: "/",
  es: "/es/",
  pt: "/pt/",
};

const OG_LOCALE: Record<Language, string> = {
  en: "en_US",
  es: "es_ES",
  pt: "pt_BR",
};

function updateHeadSEO(lang: Language) {
  const seo = SEO[lang];

  // lang attribute on <html>
  document.documentElement.lang = lang;

  // title
  document.title = seo.title;

  // meta description
  let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!desc) {
    desc = document.createElement("meta");
    desc.name = "description";
    document.head.appendChild(desc);
  }
  desc.content = seo.description;

  // meta keywords
  let kw = document.querySelector<HTMLMetaElement>('meta[name="keywords"]');
  if (!kw) {
    kw = document.createElement("meta");
    kw.name = "keywords";
    document.head.appendChild(kw);
  }
  kw.content = seo.keywords;

  // OG title
  let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    document.head.appendChild(ogTitle);
  }
  ogTitle.content = seo.title;

  // OG description
  let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    document.head.appendChild(ogDesc);
  }
  ogDesc.content = seo.description;

  // OG url
  let ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
  if (!ogUrl) {
    ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    document.head.appendChild(ogUrl);
  }
  ogUrl.content = `${BASE_URL}${LANG_PATHS[lang]}`;

  // OG locale (idioma activo)
  let ogLocale = document.querySelector<HTMLMetaElement>('meta[property="og:locale"]');
  if (!ogLocale) {
    ogLocale = document.createElement("meta");
    ogLocale.setAttribute("property", "og:locale");
    document.head.appendChild(ogLocale);
  }
  ogLocale.content = OG_LOCALE[lang];

  // Twitter title
  let twTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
  if (!twTitle) {
    twTitle = document.createElement("meta");
    twTitle.name = "twitter:title";
    document.head.appendChild(twTitle);
  }
  twTitle.content = seo.title;

  // Twitter description
  let twDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
  if (!twDesc) {
    twDesc = document.createElement("meta");
    twDesc.name = "twitter:description";
    document.head.appendChild(twDesc);
  }
  twDesc.content = seo.description;

  // Canonical
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = `${BASE_URL}${LANG_PATHS[lang]}`;

  // Remove old hreflang tags
  document.querySelectorAll('link[rel="alternate"]').forEach((el) => el.remove());

  // Add hreflang for all languages + x-default
  const hreflangs: [string, string][] = [
    ["en", `${BASE_URL}/`],
    ["es", `${BASE_URL}/es/`],
    ["pt", `${BASE_URL}/pt/`],
    ["x-default", `${BASE_URL}/`],
  ];
  hreflangs.forEach(([hreflang, href]) => {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.setAttribute("hreflang", hreflang);
    link.href = href;
    document.head.appendChild(link);
  });
}


export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [lang, setLangState] = useState<Language>(() =>
    detectInitialLang(location.pathname)
  );

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("restosites_lang", newLang);
    updateHeadSEO(newLang);
    navigate(LANG_PATHS[newLang], { replace: true });
  };

  // On initial mount + path changes, sync lang
  useEffect(() => {
    const fromPath = getLangFromPath(location.pathname);
    if (fromPath !== lang) {
      setLangState(fromPath);
    }
    updateHeadSEO(lang);
  }, [location.pathname]);

  useEffect(() => {
    updateHeadSEO(lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
