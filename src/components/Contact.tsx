import { MessageCircle, Send } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-beige" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-4">{t.contact_title}</h2>
            <p className="text-base text-charcoal-light mb-2 leading-relaxed">{t.contact_subtitle}</p>
            <p className="text-sm font-semibold text-olive mb-8">{t.contact_delivery}</p>
            <div className="bg-white/80 border border-gray-100 rounded-2xl p-5 mb-8 text-sm text-gray-500">
              <strong className="text-charcoal block mb-1">{t.contact_geo_title}</strong>
              {t.contact_geo_text}
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-charcoal mb-1">{t.contact_wa_title}</h3>
                <p className="text-gray-500 text-sm mb-3">{t.contact_wa_text}</p>
                <a href="https://wa.me/542805070184" className="inline-flex items-center gap-2 text-[#25D366] font-semibold text-sm hover:underline">
                  <MessageCircle size={16} />
                  {t.contact_wa_link}
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="restaurantName" className="text-sm font-medium text-charcoal">{t.field_restaurant}</label>
                    <input type="text" id="restaurantName" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition-colors text-sm" placeholder="La Bella Trattoria" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="ownerName" className="text-sm font-medium text-charcoal">{t.field_owner}</label>
                    <input type="text" id="ownerName" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition-colors text-sm" placeholder="Marco Rossi" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-charcoal">{t.field_phone}</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition-colors text-sm" placeholder="+55 (22) 0000-0000" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-charcoal">{t.field_email}</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition-colors text-sm" placeholder="marco@restaurant.com" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-charcoal">{t.field_message}</label>
                  <textarea id="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition-colors resize-none text-sm" placeholder={t.field_message_hint} />
                </div>
                <button type="button" className="w-full py-4 bg-charcoal text-white font-semibold rounded-xl hover:bg-charcoal-light transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
                  <span>{t.form_send}</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
