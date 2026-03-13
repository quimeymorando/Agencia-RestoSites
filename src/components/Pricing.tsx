import { Check, Star, Zap, Shield, Crown, ArrowRight, LayoutTemplate, Smartphone, Store, MapPin, Gauge, Search, CalendarCheck, MousePointerClick, Image as ImageIcon, MessageSquare, Rocket, Languages, Globe, Sparkles, Headset } from "lucide-react";
import { cn } from "../lib/utils";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.plan_basic || "Basic", 
      price: "$250", 
      description: t.plan_basic_desc || "The fastest way to get your restaurant online.",
      badge: t.plan_basic_badge || "Delivery in 3–5 days", 
      badgeColor: "bg-olive text-white",
      features: [
        t.plan_basic_f1 || "1-page restaurant website",
        t.plan_basic_f2 || "Menu section",
        t.plan_basic_f3 || "Photo gallery",
        t.plan_basic_f4 || "Google Maps integration",
        t.plan_basic_f5 || "WhatsApp reservations",
        t.plan_basic_f6 || "Instagram link",
        t.plan_basic_f7 || "Basic SEO setup",
        t.plan_basic_f8 || "QR menu"
      ],
      highlight: false, 
      isBasic: true, 
      ctaLabel: t.pricing_cta_start || "Get Started",
      icon: <Star className="w-6 h-6 text-olive" />
    },
    {
      name: t.plan_advanced || "Advanced", 
      price: "$450", 
      description: t.plan_advanced_desc || "More pages, better SEO and stronger online presence.",
      badge: t.plan_advanced_badge || "Most Popular", 
      badgeColor: "bg-terracotta text-white",
      features: [
        t.plan_adv_f1 || "Up to 3 pages",
        t.plan_adv_f2 || "Menu section & Gallery",
        t.plan_adv_f3 || "Google Maps",
        t.plan_adv_f4 || "WhatsApp reservations",
        t.plan_adv_f5 || "Instagram integration",
        t.plan_adv_f6 || "Improved SEO",
        t.plan_adv_f7 || "Smooth animations",
        t.plan_adv_f8 || "Mobile optimization"
      ],
      highlight: true, 
      isBasic: false, 
      ctaLabel: t.pricing_cta_start || "Start My Project",
      icon: <Zap className="w-6 h-6 text-terracotta" />
    },
    {
      name: t.plan_premium || "Premium", 
      price: "$850", 
      description: t.plan_premium_desc || "Custom design, SEO + AI search optimization and priority support.",
      badge: t.plan_premium_badge || "Best Value", 
      badgeColor: "bg-amber-500 text-charcoal",
      features: [
        t.plan_prem_f1 || "Custom restaurant design",
        t.plan_prem_f2 || "Up to 5 pages website",
        t.plan_prem_f3 || "Advanced layout",
        t.plan_prem_f4 || "SEO + AI search optimization",
        t.plan_prem_f5 || "Online reservation system",
        t.plan_prem_f6 || "Performance optimization",
        t.plan_prem_f7 || "Mobile-first design",
        t.plan_prem_f8 || "Local search optimization",
        t.plan_prem_f9 || "Priority updates & support"
      ],
      highlight: false, 
      isPremium: true,
      ctaLabel: t.pricing_cta_demo || "Book a Demo",
      icon: <Crown className="w-6 h-6 text-amber-500" />
    },
  ];

  const whatsIncludedData = [
    {
      plan: "Basic",
      title: t.feat_basic_title || "BASIC – Online Presence Starter",
      colorClass: "text-olive",
      bgClass: "bg-olive/10",
      highlight: false,
      features: [
        { name: t.feat_basic_1_name || "Modern Restaurant Website", desc: t.feat_basic_1_desc || "A clean and professional website designed specifically for restaurants.", icon: <LayoutTemplate className="w-5 h-5 text-olive" /> },
        { name: t.feat_basic_2_name || "Mobile Optimized Design", desc: t.feat_basic_2_desc || "Your website looks perfect on phones, tablets, and desktops.", icon: <Smartphone className="w-5 h-5 text-olive" /> },
        { name: t.feat_basic_3_name || "Menu Showcase", desc: t.feat_basic_3_desc || "Display your menu in a clear and visually appealing format.", icon: <Store className="w-5 h-5 text-olive" /> },
        { name: t.feat_basic_4_name || "Contact & Location", desc: t.feat_basic_4_desc || "Customers can easily find your address, phone number, and opening hours.", icon: <MapPin className="w-5 h-5 text-olive" /> },
        { name: t.feat_basic_5_name || "Fast Loading Website", desc: t.feat_basic_5_desc || "Optimized performance so customers never leave because of slow loading.", icon: <Gauge className="w-5 h-5 text-olive" /> },
        { name: t.feat_basic_6_name || "Basic Local SEO Setup", desc: t.feat_basic_6_desc || "Initial optimization so your restaurant can appear in local Google searches.", icon: <Search className="w-5 h-5 text-olive" /> },
      ]
    },
    {
      plan: "Advanced",
      title: t.feat_adv_title || "ADVANCED – Conversion Focused",
      colorClass: "text-terracotta",
      bgClass: "bg-terracotta/10",
      highlight: false,
      includesText: t.feat_adv_includes || "Includes everything in Basic, plus:",
      features: [
        { name: t.feat_adv_1_name || "Online Reservation System", desc: t.feat_adv_1_desc || "Allow customers to book tables directly from your website.", icon: <CalendarCheck className="w-5 h-5 text-terracotta" /> },
        { name: t.feat_adv_2_name || "Interactive Menu Experience", desc: t.feat_adv_2_desc || "A more engaging and visually rich menu experience.", icon: <MousePointerClick className="w-5 h-5 text-terracotta" /> },
        { name: t.feat_adv_3_name || "Image Gallery", desc: t.feat_adv_3_desc || "Showcase your restaurant atmosphere and dishes with beautiful photography.", icon: <ImageIcon className="w-5 h-5 text-terracotta" /> },
        { name: t.feat_adv_4_name || "Customer Reviews Integration", desc: t.feat_adv_4_desc || "Display reviews to increase trust and credibility.", icon: <MessageSquare className="w-5 h-5 text-terracotta" /> },
        { name: t.feat_adv_5_name || "Google Maps Integration", desc: t.feat_adv_5_desc || "Help customers easily find your location.", icon: <MapPin className="w-5 h-5 text-terracotta" /> },
        { name: t.feat_adv_6_name || "Advanced Local SEO Optimization", desc: t.feat_adv_6_desc || "Better visibility for searches like “restaurant near me”.", icon: <Rocket className="w-5 h-5 text-terracotta" /> },
      ]
    },
    {
      plan: "Premium",
      title: t.feat_prem_title || "PREMIUM – Growth Engine",
      colorClass: "text-amber-500",
      bgClass: "bg-amber-500/10",
      highlight: true,
      includesText: t.feat_prem_includes || "Includes everything in Advanced, plus:",
      features: [
        { name: t.feat_prem_1_name || "AI Table Booking Assistant", desc: t.feat_prem_1_desc || "Smart reservation assistance to simplify table bookings.", icon: <Sparkles className="w-5 h-5 text-amber-500" /> },
        { name: t.feat_prem_2_name || "Multi-Language Website", desc: t.feat_prem_2_desc || "Serve international customers with multiple languages.", icon: <Languages className="w-5 h-5 text-amber-500" /> },
        { name: t.feat_prem_3_name || "GEO + SEO Optimization", desc: t.feat_prem_3_desc || "Optimized for both search engines and AI-powered discovery platforms.", icon: <Globe className="w-5 h-5 text-amber-500" /> },
        { name: t.feat_prem_4_name || "Smart Conversion Design", desc: t.feat_prem_4_desc || "Layouts designed to turn visitors into reservations.", icon: <Zap className="w-5 h-5 text-amber-500" /> },
        { name: t.feat_prem_5_name || "Performance Optimization", desc: t.feat_prem_5_desc || "Advanced speed and performance improvements.", icon: <Gauge className="w-5 h-5 text-amber-500" /> },
        { name: t.feat_prem_6_name || "Priority Updates & Future Features", desc: t.feat_prem_6_desc || "Your website stays modern and optimized as technology evolves.", icon: <Headset className="w-5 h-5 text-amber-500" /> },
      ]
    }
  ];

  return (
    <section className="py-24 bg-beige-dark/30 relative overflow-hidden" id="pricing">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-terracotta/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-olive/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-charcoal mb-4">{t.pricing_title || "Simple Pricing for Restaurants"}</h2>
          <p className="text-xl text-charcoal-light mb-3">{t.pricing_subtitle || "Transparent pricing without hidden fees. Pay once, own it forever."}</p>
          <p className="text-sm font-semibold text-terracotta tracking-wide uppercase">{t.pricing_tagline || "Perfect for small restaurants, cafés and bars."}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={cn(
                "rounded-3xl p-8 transition-all duration-300 relative flex flex-col h-full",
                plan.highlight 
                  ? "bg-charcoal text-white shadow-2xl scale-100 md:scale-105 z-20 border-2 border-terracotta mt-8 md:mt-0"
                  : plan.isPremium 
                    ? "bg-gradient-to-b from-charcoal to-stone-900 text-white shadow-xl border border-amber-500/30 z-10 relative mt-8 md:mt-0"
                    : "bg-white text-charcoal shadow-xl border border-olive/20 z-0 mt-8 md:mt-0"
              )}
            >
              {plan.isPremium && (
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none overflow-hidden rounded-3xl"></div>
              )}

              {plan.badge && (
                <div className={cn(
                  "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap z-30", 
                  plan.badgeColor
                )}>
                  {plan.badge}
                </div>
              )}
              
              <div className="flex items-center justify-between mb-4 mt-4">
                <h3 className={cn("text-2xl font-bold font-heading", plan.highlight || plan.isPremium ? "text-white" : "text-charcoal")}>{plan.name}</h3>
                <div className="p-2 rounded-full bg-white/10 shadow-sm backdrop-blur-sm">
                  {plan.icon}
                </div>
              </div>
              
              <p className={cn("text-sm mb-6 h-10", plan.highlight || plan.isPremium ? "text-gray-300" : "text-gray-500")}>
                {plan.description}
              </p>
              
              <div className="mb-8 relative">
                <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                {plan.name === "Premium" && <span className="absolute -top-3 -right-2 text-amber-400 opacity-50"><Star fill="currentColor" className="w-4 h-4" /></span>}
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                    className="flex items-start gap-3 group"
                  >
                    <div className={cn(
                      "mt-0.5 rounded-full p-0.5 transition-colors",
                      plan.highlight 
                        ? "bg-terracotta/20 text-terracotta" 
                        : plan.isPremium
                          ? "bg-amber-500/20 text-amber-400 group-hover:bg-amber-500/40"
                          : "bg-olive/10 text-olive group-hover:bg-olive/20"
                    )}>
                      <Check className="w-4 h-4 shrink-0" />
                    </div>
                    <span className={cn(
                      "text-sm leading-snug", 
                      plan.highlight || plan.isPremium ? "text-gray-200" : "text-gray-600 font-medium"
                    )}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.a 
                href="#contact" 
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "flex items-center justify-center gap-2 w-full text-center py-4 rounded-xl font-semibold transition-all shadow-md group relative overflow-hidden",
                  plan.highlight 
                    ? "bg-terracotta text-white hover:bg-terracotta/90 hover:shadow-terracotta/20 hover:shadow-xl"
                    : plan.isPremium
                      ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-400 hover:to-orange-500 shadow-amber-500/20 hover:shadow-amber-500/40 hover:shadow-xl border border-amber-400/50"
                      : "bg-olive text-white hover:bg-olive/90 hover:shadow-olive/20 hover:shadow-xl"
                )}
              >
                <span className="relative z-10">{plan.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* NEW WHAT'S INCLUDED SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-28 mb-12 text-center max-w-4xl mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-charcoal mb-5">
            {t.feat_title || "Everything Your Restaurant Needs to Grow Online"}
          </h2>
          <p className="text-lg text-charcoal-light">
            {t.feat_subtitle || "No tech headaches. No complicated tools. Just a powerful website designed to bring more customers to your restaurant."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
          {whatsIncludedData.map((tier, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={cn(
                "rounded-3xl p-6 md:p-8 bg-white/70 backdrop-blur-xl border transition-all duration-300 relative",
                tier.highlight 
                  ? "shadow-xl shadow-amber-500/10 border-amber-400/50 ring-1 ring-amber-400/20 scale-100 md:scale-[1.03] z-10" 
                  : "shadow-md hover:shadow-lg border-gray-200/60"
              )}
            >
              <div className="mb-6 pb-6 border-b border-gray-200/60">
                <h3 className={cn("text-lg font-bold font-heading tracking-tight", tier.colorClass)}>
                  {tier.title}
                </h3>
                {tier.includesText && (
                  <p className="text-sm text-gray-500 font-medium mt-3 italic">
                    {tier.includesText}
                  </p>
                )}
              </div>
              
              <ul className="space-y-6">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-4 group">
                    <div className={cn("shrink-0 p-2.5 rounded-xl transition-colors self-start mt-0.5", tier.bgClass)}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-charcoal mb-1 transition-colors leading-tight">
                        {feature.name}
                      </h4>
                      <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                        {feature.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* UX Improvements: Notes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center max-w-2xl mx-auto space-y-5"
        >
          <div className="inline-flex items-center justify-center gap-3 bg-white/60 backdrop-blur-md border border-gray-200 shadow-sm px-6 py-3.5 rounded-full hover:shadow-md transition-shadow">
             <Shield className="w-5 h-5 text-olive" />
             <p className="text-sm font-semibold text-charcoal">
               {t.pricing_consultation || "30-minute free consultation included with every package."}
             </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
