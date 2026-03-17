import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      aria-label="Restaurant website design agency hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070"
          alt="Professional restaurant website design for restaurants and cafés"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65))" }} />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6 tracking-tight">
            {t.hero_title.includes("Professional") || t.hero_title.includes("Profissional") || t.hero_title.includes("Profesional") ? (
              <>
                {t.hero_title.split(/(Professional Restaurant Website|Site Profissional para seu Restaurante|Sitio Web Profesional para tu Restaurante)/i).map((part, i) =>
                  i === 1 ? <span key={i} className="text-terracotta">{part}</span> : part
                )}
              </>
            ) : (
              t.hero_title
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {t.hero_subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-terracotta text-white font-bold rounded-full hover:bg-terracotta/90 transition-all shadow-xl hover:shadow-terracotta/30 transform hover:scale-105 text-lg">
              {t.cta_primary}
            </a>
            <a href="#demos" className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-medium rounded-full hover:bg-white/10 transition-all border-2 border-white/50 hover:border-white text-lg">
              {t.cta_secondary}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta/10 rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
}
