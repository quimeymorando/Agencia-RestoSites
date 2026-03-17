import { MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function CallToAction() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-olive/10 pointer-events-none" />
      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 max-w-3xl mx-auto leading-tight">
          {t.cta_section_title}
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">{t.cta_section_text}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-terracotta text-white font-semibold rounded-full hover:bg-terracotta/90 transition-all shadow-xl hover:shadow-terracotta/20 transform hover:-translate-y-1 text-lg">
            {t.cta_start}
          </a>
          <a href="https://wa.me/542805070184" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2 text-lg">
            <MessageCircle size={20} className="text-[#25D366]" />
            {t.cta_whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
