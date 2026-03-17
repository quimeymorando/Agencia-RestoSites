import { Quote } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Testimonial() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-beige-dark/20 relative overflow-hidden" id="testimonials">
      <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-olive/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-charcoal mb-4">{t.testimonial_title}</h2>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-xl relative text-center border border-gray-100">
          <Quote className="w-14 h-14 text-beige-dark absolute top-8 left-8 md:-top-6 md:-left-6 -rotate-12 opacity-40" />
          <p className="text-xl md:text-2xl font-heading font-medium text-charcoal leading-relaxed mb-10">
            "{t.testimonial_quote}"
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img src="/images/carlos-mendes.png" alt="Carlos Mendes - Restaurant Owner" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-charcoal text-lg">Carlos Mendes</h4>
              <p className="text-terracotta text-sm font-semibold uppercase tracking-wider">{t.testimonial_role}</p>
              <p className="text-gray-400 text-xs mt-0.5">{t.testimonial_location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
