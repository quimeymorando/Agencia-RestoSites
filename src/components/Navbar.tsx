import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../i18n/translations";

/* ─── Logo Icon: Tenedor + Cuchillo  ──────────────────────────────────────── */
/* Diseño limpio estilo SaaS (Lucide / Heroicons / Feather)                    */
function RestaurantIcon({ size = 22, color = "#FF4C1A" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── FORK (left, centered at x=8) ────────────── */}
      {/* Tine 1 */}
      <path d="M5.5 2.5v5" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      {/* Tine 2 */}
      <path d="M8 2.5v5" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      {/* Tine 3 */}
      <path d="M10.5 2.5v5" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      {/* Neck arch: tines converge to handle */}
      <path
        d="M5.5 7.5 Q5.5 10.5 8 10.5 Q10.5 10.5 10.5 7.5"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Handle */}
      <path d="M8 10.5v11" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>

      {/* ── KNIFE (right, centered at x=15.5) ────────── */}
      {/* Spine: straight left edge of blade */}
      <path d="M15.5 2.5v10" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      {/* Cutting edge: curved right side of blade */}
      <path
        d="M15.5 2.5 Q19.5 6 15.5 12.5"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bolster / guard */}
      <path d="M14 12.5h3" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      {/* Handle */}
      <path d="M15.5 12.5v9" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
}
/* ─── Configuración de idiomas con banderas ────────────────────────────── */
const LANGS: { code: Language; flag: string; label: string; nativeLabel: string }[] = [
  { code: "en", flag: "🇺🇸", label: "English",   nativeLabel: "English"   },
  { code: "es", flag: "🇦🇷", label: "Español",   nativeLabel: "Español"   },
  { code: "pt", flag: "🇧🇷", label: "Português", nativeLabel: "Português" },
];


/* ─── Dropdown de banderas (desktop) ─────────────────────────────────────── */
export function LangDropdown({ onClose, theme = "dark" }: { onClose?: () => void, theme?: "dark" | "light" }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = LANGS.find((l) => l.code === lang)!;

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const handleSelect = (code: Language) => {
    setLang(code);
    setOpen(false);
    onClose?.();
  };

  return (
    <div ref={ref} className="relative" style={{ zIndex: 100 }}>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 12px",
          borderRadius: "999px",
          border: theme === "dark" ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(0,0,0,0.1)",
          background: open 
            ? "rgba(255,76,26,0.18)" 
            : theme === "dark" 
              ? "rgba(255,255,255,0.06)" 
              : "rgba(0,0,0,0.05)",
          color: theme === "dark" ? "rgba(255,255,255,0.90)" : "rgba(0,0,0,0.7)",
          cursor: "pointer",
          fontSize: "13px",
          fontWeight: 600,
          transition: "all 0.2s ease",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,76,26,0.15)";
          (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,76,26,0.4)";
        }}
        onMouseLeave={(e) => {
          if (!open) {
            (e.currentTarget as HTMLButtonElement).style.background = theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = theme === "dark" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)";
          }
        }}
      >
        <Globe size={14} style={{ opacity: theme === "dark" ? 0.8 : 0.6 }} />
        <span style={{ fontSize: "15px" }}>{active.flag}</span>
        <span>{active.nativeLabel}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            opacity: 0.6,
          }}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            role="listbox"
            aria-label="Language options"
            style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              right: 0,
              minWidth: "160px",
              background: theme === "dark" ? "rgba(20,20,20,0.97)" : "rgba(255,255,255,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: theme === "dark" ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.1)",
              borderRadius: "14px",
              padding: "6px",
              boxShadow: "0 16px 48px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(255,255,255,0.05)",
              overflow: "hidden",
            }}
          >
            {LANGS.map((l) => {
              const isActive = lang === l.code;
              return (
                <button
                  key={l.code}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => handleSelect(l.code)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "9px 12px",
                    borderRadius: "9px",
                    border: "none",
                    background: isActive ? "rgba(255,76,26,0.18)" : "transparent",
                    color: isActive ? (theme === "dark" ? "rgba(255,255,255,1)" : "rgba(0,0,0,0.9)") : (theme === "dark" ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.6)"),
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: isActive ? 600 : 400,
                    textAlign: "left",
                    transition: "background 0.15s ease, color 0.15s ease",
                    gap: "10px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLButtonElement).style.background = theme === "dark" ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                    <span style={{ fontSize: "18px", lineHeight: 1 }}>{l.flag}</span>
                    <span>{l.nativeLabel}</span>
                  </span>
                  {isActive && (
                    <Check size={14} style={{ color: "#FF4C1A", flexShrink: 0 }} />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Selector de idioma en menú móvil (versión inline) ─────────────────── */
function MobileLangSelector({ onSelect }: { onSelect: () => void }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      style={{
        marginTop: "8px",
        padding: "12px 0 4px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: "rgba(255,255,255,0.4)",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "8px",
          paddingLeft: "2px",
        }}
      >
        <Globe size={12} />
        Language
      </div>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {LANGS.map((l) => {
          const isActive = lang === l.code;
          return (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code);
                onSelect();
              }}
              aria-pressed={isActive}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 14px",
                borderRadius: "12px",
                border: "1px solid",
                borderColor: isActive ? "rgba(255,76,26,0.4)" : "transparent",
                background: isActive ? "rgba(255,76,26,0.14)" : "rgba(255,255,255,0.03)",
                color: isActive ? "#fff" : "rgba(255,255,255,0.65)",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: isActive ? 600 : 400,
                textAlign: "left",
                width: "100%",
                transition: "all 0.15s ease",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "22px" }}>{l.flag}</span>
                <span>{l.nativeLabel}</span>
              </span>
              {isActive && <Check size={15} style={{ color: "#FF4C1A" }} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Navbar principal ───────────────────────────────────────────────────── */
export function Navbar() {
  const { t, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const navItems = [
    { name: t.nav_home,    href: "#hero",        onClickFn: scrollToTop },
    { name: t.nav_demos,   href: "#demos",        onClickFn: undefined },
    { name: t.nav_pricing, href: "#pricing",      onClickFn: undefined },
    { name: t.nav_how,     href: "#how-it-works", onClickFn: undefined },
    { name: t.nav_contact, href: "#contact",      onClickFn: undefined },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil si cambia el idioma
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [lang]);

  return (
    <header
      className="fixed top-0 w-full z-50"
      style={{
        background: isScrolled ? "rgba(20,20,20,0.88)" : "rgba(20,20,20,0.55)",
        backdropFilter: isScrolled ? "blur(18px)" : "blur(12px)",
        WebkitBackdropFilter: isScrolled ? "blur(18px)" : "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.35s ease",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* ── Logo ── */}
        <a
          href="/"
          onClick={scrollToTop}
          className="flex items-center gap-2.5"
          style={{ zIndex: 10, textDecoration: "none" }}
          aria-label="RestoSites — Home"
        >
          {/* Ícono de tenedor+cuchillo */}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              background: "rgba(255,76,26,0.12)",
              border: "1px solid rgba(255,76,26,0.25)",
              borderRadius: "8px",
              flexShrink: 0,
            }}
          >
            <RestaurantIcon size={20} />
          </span>
          {/* Wordmark */}
          <span className="font-heading font-bold text-2xl text-white tracking-tight">
            Resto<span className="text-terracotta">Sites</span>
          </span>
        </a>


        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={item.onClickFn}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Dropdown de idioma — desktop */}
          <LangDropdown />

          <a
            href="#contact"
            className="px-6 py-2.5 bg-terracotta text-white text-sm font-semibold rounded-full hover:bg-terracotta/90 transition-all shadow-lg hover:shadow-terracotta/30 transform hover:-translate-y-0.5"
          >
            {t.nav_cta}
          </a>
        </nav>

        {/* ── Mobile top-right: Dropdown compact + Hamburger ── */}
        <div className="flex items-center gap-3 md:hidden">
          <LangDropdown />
          <button
            className="text-white/90 p-2 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(14,14,14,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {/* Enlances de navegación */}
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-white/80 py-3 border-b border-white/10 hover:text-white hover:pl-2 transition-all"
                  onClick={(e) => {
                    item.onClickFn?.(e);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}

              {/* CTA */}
              <a
                href="#contact"
                className="mt-5 px-6 py-4 bg-terracotta text-white text-center font-semibold rounded-full hover:bg-terracotta/90 transition-colors shadow-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav_cta}
              </a>

              {/* Selector de idioma inline para móvil */}
              <MobileLangSelector onSelect={() => setMobileMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
