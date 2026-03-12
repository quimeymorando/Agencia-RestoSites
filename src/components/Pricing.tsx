import { Check } from "lucide-react";
import { cn } from "../lib/utils";
import { useLanguage } from "../context/LanguageContext";

export function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.plan_basic, price: "$250", description: t.plan_basic_desc,
      badge: t.plan_basic_badge, badgeColor: "bg-olive text-white",
      features: ["1 page restaurant website","Menu section","Photo gallery","Google Maps integration","WhatsApp reservations","Instagram link","SEO setup","QR menu"],
      highlight: false, isBasic: true, ctaLabel: t.pricing_cta_start,
    },
    {
      name: t.plan_advanced, price: "$450", description: t.plan_advanced_desc,
      badge: t.plan_advanced_badge, badgeColor: "bg-terracotta text-white",
      features: ["Up to 3 pages","Menu section & Gallery","Google Maps","WhatsApp reservations","Instagram integration","Better SEO","Animations","Mobile optimization"],
      highlight: true, isBasic: false, ctaLabel: t.pricing_cta_demo,
    },
    {
      name: t.plan_premium, price: "$850", description: t.plan_premium_desc,
      badge: null, badgeColor: "",
      features: ["Custom design","Advanced layout","Full SEO optimization","Online reservation integration","Performance optimization","Mobile-first design","Priority support"],
      highlight: false, isBasic: false, ctaLabel: t.pricing_cta_demo,
    },
  ];

  return (
    <section className="py-24 bg-beige-dark/30" id="pricing">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-charcoal mb-4">{t.pricing_title}</h2>
          <p className="text-xl text-charcoal-light mb-3">{t.pricing_subtitle}</p>
          <p className="text-sm font-semibold text-terracotta tracking-wide">{t.pricing_tagline}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={cn(
              "rounded-3xl p-8 transition-all duration-300 relative",
              plan.highlight ? "bg-charcoal text-white shadow-2xl scale-100 md:scale-105 z-10 border-2 border-terracotta/50"
                : plan.isBasic ? "bg-white text-charcoal shadow-xl border-2 border-olive/30 hover:-translate-y-2"
                : "bg-white text-charcoal shadow-lg border border-gray-100 hover:-translate-y-2"
            )}>
              {plan.badge && (
                <div className={cn("absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md", plan.badgeColor)}>
                  {plan.badge}
                </div>
              )}
              <h3 className={cn("text-2xl font-bold font-heading mb-2 mt-2", plan.highlight ? "text-white" : "text-charcoal")}>{plan.name}</h3>
              <p className={cn("text-sm mb-6", plan.highlight ? "text-gray-300" : "text-gray-500")}>{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.isBasic && <p className="text-olive text-xs font-semibold mt-1 uppercase tracking-wider">{t.pricing_delivered}</p>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={cn("w-5 h-5 shrink-0", plan.highlight ? "text-terracotta" : "text-olive")} />
                    <span className={cn("text-sm leading-tight", plan.highlight ? "text-gray-200" : "text-gray-600")}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={cn(
                "block w-full text-center py-4 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5",
                plan.highlight ? "bg-terracotta text-white hover:bg-terracotta/90"
                  : plan.isBasic ? "bg-olive text-white hover:bg-olive/90"
                  : "bg-charcoal text-white hover:bg-charcoal-light"
              )}>
                {plan.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
