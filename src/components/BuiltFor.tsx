import { UtensilsCrossed, MessageCircle, MapPin, Smartphone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function BuiltFor() {
  const { t } = useLanguage();

  const items = [
    { icon: <UtensilsCrossed className="w-8 h-8 text-terracotta" />, title: t.built1_title, description: t.built1_desc },
    { icon: <MessageCircle className="w-8 h-8 text-terracotta" />, title: t.built2_title, description: t.built2_desc },
    { icon: <MapPin className="w-8 h-8 text-terracotta" />, title: t.built3_title, description: t.built3_desc },
    { icon: <Smartphone className="w-8 h-8 text-terracotta" />, title: t.built4_title, description: t.built4_desc },
  ];

  return (
    <section className="py-20 bg-white" id="built-for">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-3">{t.built_title}</h2>
          <p className="text-charcoal-light max-w-xl mx-auto">{t.built_subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 bg-beige/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-5">{item.icon}</div>
              <h3 className="font-bold font-heading text-charcoal text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
