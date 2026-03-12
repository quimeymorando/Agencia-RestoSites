import { Search, BookOpen, CalendarCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Benefits() {
  const { t } = useLanguage();

  const items = [
    { icon: <Search className="w-8 h-8 text-terracotta" />, title: t.benefit1_title, desc: t.benefit1_desc },
    { icon: <BookOpen className="w-8 h-8 text-terracotta" />, title: t.benefit2_title, desc: t.benefit2_desc },
    { icon: <CalendarCheck className="w-8 h-8 text-terracotta" />, title: t.benefit3_title, desc: t.benefit3_desc },
  ];

  return (
    <section className="py-24 bg-beige" id="benefits">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-charcoal mb-4">
            {t.benefits_title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-charcoal mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
