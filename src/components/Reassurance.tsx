import { Palette, Image as ImageIcon, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

/* ── Ícono SVG tenedor+cuchillo (misma geometría que Navbar) ── */
function ForkKnifeIcon({ size = 72, color = "#D36C4F" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── FORK ── */}
      <path d="M5.5 2.5v5"  stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 2.5v5"    stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M10.5 2.5v5" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M5.5 7.5 Q5.5 10.5 8 10.5 Q10.5 10.5 10.5 7.5"
        stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      <path d="M8 10.5v11" stroke={color} strokeWidth="1.7" strokeLinecap="round" />

      {/* ── KNIFE ── */}
      <path d="M15.5 2.5v10"            stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M15.5 2.5 Q19.5 6 15.5 12.5"
        stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M14 12.5h3"   stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M15.5 12.5v9" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}



export function Reassurance() {
  const { t } = useLanguage();

  const features = [
    { icon: <Palette className="w-6 h-6 text-terracotta" />, title: t.reassurance_feat1 },
    { icon: <ImageIcon className="w-6 h-6 text-terracotta" />, title: t.reassurance_feat2 },
    { icon: <Zap className="w-6 h-6 text-terracotta" />, title: t.reassurance_feat3 },
  ];

  return (
    <section className="py-20 bg-charcoal" id="your-style">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* ── Texto izquierda ── */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 leading-tight">
              {t.reassurance_title}
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">{t.reassurance_text}</p>
            <ul className="space-y-5 mb-10 text-left">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center shrink-0">{f.icon}</div>
                  <span className="text-white text-lg">{f.title}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-terracotta text-white font-medium rounded-full hover:bg-terracotta/90 transition-all shadow-xl hover:shadow-terracotta/20 transform hover:-translate-y-1 text-lg"
            >
              {t.reassurance_cta}
            </a>
          </div>

          {/* ── Showcase premium derecha ── */}
          <div className="flex-1 flex justify-center">
            <div style={{ position: "relative", width: "320px", height: "320px", overflow: "visible" }}>

              {/* Anillo exterior giratorio */}
              <motion.div
                style={{
                  position: "absolute",
                  inset: "0px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(211,108,79,0.3)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                {/* Punto de acento en el anillo */}
                <div style={{
                  position: "absolute",
                  top: "-5px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#D36C4F",
                  boxShadow: "0 0 12px 4px rgba(211,108,79,0.9)",
                }} />
              </motion.div>

              {/* Anillo interior giratorio (dirección contraria) */}
              <motion.div
                style={{
                  position: "absolute",
                  inset: "28px",
                  borderRadius: "50%",
                  border: "1px solid rgba(211,108,79,0.18)",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                {/* Segundo punto de acento en anillo interior */}
                <div style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "rgba(211,108,79,0.7)",
                  boxShadow: "0 0 8px 2px rgba(211,108,79,0.5)",
                }} />
              </motion.div>

              {/* Card central con el logo — FIJO */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  {/* Caja del logo */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{
                      width: "96px",
                      height: "96px",
                      background: "linear-gradient(135deg, rgba(211,108,79,0.18) 0%, rgba(211,108,79,0.06) 100%)",
                      border: "1.5px solid rgba(211,108,79,0.4)",
                      borderRadius: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 40px rgba(211,108,79,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <ForkKnifeIcon size={52} color="#D36C4F" />
                  </motion.div>

                  {/* Wordmark bajo el ícono */}
                  <div style={{ textAlign: "center" }}>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "white",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}>
                      Resto<span style={{ color: "#D36C4F" }}>Sites</span>
                    </p>
                    <p style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginTop: "6px",
                    }}>
                      Restaurant Websites
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
