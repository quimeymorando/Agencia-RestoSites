import { XCircle, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function BeforeAfter() {
  const { t } = useLanguage();

  const befores = [t.ba_before1, t.ba_before2, t.ba_before3];
  const afters = [t.ba_after1, t.ba_after2, t.ba_after3];

  return (
    <section className="py-24 bg-charcoal" id="before-after">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
            {t.ba_title}
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card: Before */}
          <div className="bg-charcoal-light rounded-3xl p-10 border border-red-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-red-500/50" />
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center">
                <XCircle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t.ba_without}</h3>
            </div>
            <ul className="space-y-6">
              {befores.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card: After */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-terracotta" />
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-terracotta/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-terracotta" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal">{t.ba_with}</h3>
            </div>
            <ul className="space-y-6">
              {afters.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-terracotta shrink-0 mt-0.5" />
                  <span className="text-charcoal-light text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
