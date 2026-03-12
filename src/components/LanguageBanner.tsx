import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../i18n/translations";

/* ─── Configuración del banner ─────────────────────────────────────────────
   Se muestra solo si:
   1. El idioma detectado del navegador es ES o PT
   2. El idioma actual de la página es EN (default)
   3. El usuario no lo ha descartado antes (localStorage)
   ─────────────────────────────────────────────────────────────────────────── */

const STORAGE_KEY = "restosites_lang_banner_dismissed";

const BANNER_COPY: Record<
  "es" | "pt",
  { message: string; yes: string; no: string; flag: string }
> = {
  es: {
    flag: "🇪🇸",
    message: "Detectamos que tu navegador está en español. ¿Ver esta página en Español?",
    yes: "Sí, cambiar a Español",
    no: "No, gracias",
  },
  pt: {
    flag: "🇧🇷",
    message: "Detectamos que o seu navegador está em português. Ver esta página em Português?",
    yes: "Sim, mudar para Português",
    no: "Não, obrigado",
  },
};

export function LanguageBanner() {
  const { lang, setLang } = useLanguage();
  const [suggestedLang, setSuggestedLang] = useState<"es" | "pt" | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Solo mostrar si el idioma actual es inglés (default)
    if (lang !== "en") return;

    // No mostrar si ya fue descartado
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    // Detectar idioma del navegador
    const browserLang = navigator.language?.toLowerCase() ?? "";
    if (browserLang.startsWith("es")) {
      setSuggestedLang("es");
      // Pequeño delay para que aparezca después de cargar la página
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
    if (browserLang.startsWith("pt")) {
      setSuggestedLang("pt");
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [lang]);

  const handleAccept = () => {
    if (!suggestedLang) return;
    setLang(suggestedLang as Language);
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  if (!suggestedLang) return null;

  const copy = BANNER_COPY[suggestedLang];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-live="polite"
          aria-label="Language suggestion"
          style={{
            position: "fixed",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "calc(100% - 32px)",
            maxWidth: "500px",
            background: "rgba(22, 22, 22, 0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(211,108,79,0.35)",
            borderRadius: "18px",
            padding: "18px 20px",
            boxShadow:
              "0 24px 56px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(211,108,79,0.15), 0 0 32px rgba(211,108,79,0.08)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "26px", lineHeight: 1 }}>{copy.flag}</span>
              <p
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                {copy.message}
              </p>
            </div>
            <button
              onClick={handleDismiss}
              aria-label="Dismiss language suggestion"
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.35)",
                cursor: "pointer",
                padding: "2px",
                flexShrink: 0,
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.35)")
              }
            >
              <X size={16} />
            </button>
          </div>

          {/* Botones */}
          <div style={{ display: "flex", gap: "10px" }}>
            {/* Sí — botón principal */}
            <button
              onClick={handleAccept}
              style={{
                flex: 1,
                padding: "10px 16px",
                background: "#D36C4F",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 16px rgba(211,108,79,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#c0604a";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#D36C4F";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              {copy.yes}
            </button>

            {/* No gracias — botón secundario */}
            <button
              onClick={handleDismiss}
              style={{
                padding: "10px 16px",
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.10)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.75)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.55)";
              }}
            >
              {copy.no}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
