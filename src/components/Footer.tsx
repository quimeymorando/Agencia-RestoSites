import { Instagram, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal pt-20 pb-10 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="font-heading font-bold text-3xl tracking-tight">
                Resto<span className="text-terracotta">Sites</span>
              </span>
            </a>
            <p className="text-gray-400 max-w-md mb-4">{t.footer_desc}</p>
            <p className="text-sm italic text-gray-600 mb-6">{t.footer_tagline}</p>
            <p className="text-xs text-gray-700 leading-relaxed">
              Restaurant website design · Restaurant websites · Websites for restaurants · Restaurant web design service
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">{t.footer_links}</h4>
            <ul className="space-y-4">
              <li><a href="#demos" className="text-gray-400 hover:text-white transition-colors">{t.nav_demos}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">{t.nav_pricing}</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">{t.nav_how}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t.nav_contact}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold font-heading mb-6">{t.footer_connect}</h4>
            <div className="flex items-center gap-4 mb-6">
              <a href="#" aria-label="Instagram" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://wa.me/542805070184" aria-label="WhatsApp" className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center hover:bg-[#25D366]/30 transition-colors">
                <MessageCircle size={22} />
              </a>
            </div>
            <p className="text-xs text-gray-600">📍 Búzios, Rio de Janeiro, Brazil</p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} RestoSites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
