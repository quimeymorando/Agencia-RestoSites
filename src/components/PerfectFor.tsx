import { Utensils, Coffee, Wine, Pizza, Waves } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function PerfectFor() {
  const { t } = useLanguage();

  const types = [
    { label: t.perfect_restaurants, icon: <Utensils className="w-5 h-5" /> },
    { label: t.perfect_cafes, icon: <Coffee className="w-5 h-5" /> },
    { label: t.perfect_bars, icon: <Wine className="w-5 h-5" /> },
    { label: t.perfect_pizzerias, icon: <Pizza className="w-5 h-5" /> },
    { label: t.perfect_beach, icon: <Waves className="w-5 h-5" /> },
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-4">
          {t.perfect_for_label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {types.map((type, i) => (
            <div key={i} className="flex items-center gap-2 px-5 py-2.5 bg-beige rounded-full border border-beige-dark text-charcoal font-medium text-sm shadow-sm">
              <span className="text-terracotta">{type.icon}</span>
              {type.label}
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-sm">{t.perfect_microcopy}</p>
      </div>
    </section>
  );
}
