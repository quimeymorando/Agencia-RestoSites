
import { ArrowRight, Check, Star, MapPin, Sparkles, Smartphone, Search, Utensils, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { DemoNavbar } from '../components/demos/DemoNavbar';

export function DemoCasual() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  const item = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-beige text-charcoal font-sans selection:bg-terracotta selection:text-white pb-20 lg:pb-0">
      
      {/* SECTION 0 — NAVIGATION */}
      <DemoNavbar theme="casual" />

      <main className="pt-20">
        
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF4C1A0a_1px,transparent_1px),linear-gradient(to_bottom,#FF4C1A0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-terracotta/20 bg-terracotta/5 text-xs font-semibold tracking-widest uppercase mb-8 text-terracotta">
              <Star className="w-3 h-3" /> {t.casual_badge}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-charcoal leading-[1.05]"
            >
              {t.casual_hero_title.split(' ').slice(0, -1).join(' ')} <br/><span className="text-terracotta">{t.casual_hero_title.split(' ').slice(-1)[0]}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-charcoal/70 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              {t.casual_hero_subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button onClick={() => scrollToSection('pricing')} className="px-8 py-4 bg-terracotta text-white rounded-2xl font-semibold text-lg tracking-wide hover:bg-[#e63f0d] hover:-translate-y-1 transition-all shadow-xl shadow-terracotta/30 inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                {t.demo_start_website} <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollToSection('style')} className="px-8 py-4 bg-beige border-2 border-transparent text-charcoal rounded-2xl font-semibold text-lg hover:border-charcoal/10 hover:bg-beige-dark transition-all w-full sm:w-auto justify-center text-center">
                {t.casual_explore_btn}
              </button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — STYLE PRESENTATION */}
        <section id="style" className="py-24 bg-beige border-y border-charcoal/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
                {t.casual_style_title.split(',')[0]}, <span className="text-terracotta italic">{t.casual_style_title.split(',')[1]?.trim()}</span>
              </h2>
              <p className="text-xl text-charcoal/70 leading-relaxed">
                {t.casual_style_subtitle}
              </p>
            </motion.div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { icon: <span className="text-2xl">👋</span>, title: t.casual_feat1_title, desc: t.casual_feat1_desc },
                { icon: <span className="text-2xl">⚡️</span>, title: t.casual_feat2_title, desc: t.casual_feat2_desc },
                { icon: <span className="text-2xl">📱</span>, title: t.casual_feat3_title, desc: t.casual_feat3_desc },
                { icon: <span className="text-2xl">🔄</span>, title: t.casual_feat4_title, desc: t.casual_feat4_desc }
              ].map((feature, idx) => (
                <motion.div key={idx} variants={item} className="p-8 bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-beige flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — PRICING OVERVIEW (CARDS) */}
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
                {t.casual_pricing_title.split(' ')[0]} <span className="text-terracotta">{t.casual_pricing_title.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                {t.casual_pricing_subtitle}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {/* BASIC */}
              <motion.div {...fadeIn} className="bg-beige rounded-[2rem] p-8 lg:p-10 border border-charcoal/5 flex flex-col justify-between hover:border-terracotta/30 transition-colors">
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-1">{t.plan_basic}</h3>
                  <p className="text-charcoal/60 text-sm mb-6 font-medium">{t.casual_basic_plan_desc}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold tracking-tight">$250</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {[t.casual_basic_f1, t.casual_basic_f2, t.casual_basic_f3, t.casual_basic_f4].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-charcoal/80 font-medium">
                        <Check className="w-5 h-5 text-terracotta shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 mt-auto">
                  <a href="#basic-casual" className="block w-full py-3 px-6 rounded-xl border-2 border-charcoal/20 text-center font-bold text-charcoal hover:bg-charcoal/5 transition-colors">
                    {t.demo_view_features}
                  </a>
                  <button className="block w-full py-3 px-6 rounded-xl bg-charcoal text-white text-center font-bold hover:bg-charcoal-light transition-colors shadow-md">
                    {t.demo_start_basic}
                  </button>
                </div>
              </motion.div>

              {/* ADVANCED */}
              <motion.div {...fadeIn} className="bg-charcoal text-white rounded-[2rem] p-8 lg:p-10 border-4 border-terracotta relative flex flex-col justify-between transform lg:-translate-y-4 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terracotta text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                  {t.demo_most_popular}
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-1 text-terracotta">{t.plan_advanced}</h3>
                  <p className="text-white/70 text-sm mb-6 font-medium">{t.casual_adv_plan_desc}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold tracking-tight">$450</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {[t.casual_adv_f1, t.casual_adv_f2, t.casual_adv_f3, t.casual_adv_f4, t.casual_adv_f5].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/90 font-medium">
                        <Check className="w-5 h-5 text-terracotta shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 mt-auto">
                  <a href="#advanced-casual" className="block w-full py-3 px-6 rounded-xl border-2 border-white/20 text-center font-bold text-white hover:bg-white/10 transition-colors">
                    {t.demo_view_features}
                  </a>
                  <button className="block w-full py-3 px-6 rounded-xl bg-terracotta text-white text-center font-bold hover:bg-[#e63f0d] transition-colors shadow-[0_0_20px_rgba(255,76,26,0.4)]">
                    {t.demo_start_advanced}
                  </button>
                </div>
              </motion.div>

              {/* PREMIUM */}
              <motion.div {...fadeIn} className="bg-beige rounded-[2rem] p-8 lg:p-10 border border-charcoal/5 flex flex-col justify-between hover:border-terracotta/30 transition-colors relative overflow-hidden">
                <div className="absolute -right-8 top-8 rotate-45 bg-olive text-white px-10 py-1 text-xs font-bold uppercase tracking-wider">
                  {t.demo_best_value}
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-1">{t.plan_premium}</h3>
                  <p className="text-charcoal/60 text-sm mb-6 font-medium">{t.casual_prem_plan_desc}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold tracking-tight">$850</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {[t.casual_prem_f1, t.casual_prem_f2, t.casual_prem_f3, t.casual_prem_f4, t.casual_prem_f5, t.casual_prem_f6].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-charcoal/80 font-medium">
                        <Check className="w-5 h-5 text-olive shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 mt-auto">
                  <a href="#premium-casual" className="block w-full py-3 px-6 rounded-xl border-2 border-charcoal/20 text-center font-bold text-charcoal hover:bg-charcoal/5 transition-colors">
                    {t.demo_view_features}
                  </a>
                  <button className="block w-full py-3 px-6 rounded-xl bg-charcoal text-white text-center font-bold hover:bg-charcoal-light transition-colors shadow-md">
                    {t.demo_start_premium}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — DETAILED BREAKDOWN */}
        <section className="py-24 bg-beige border-t border-charcoal/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            
            {/* BASIC DETAILED */}
            <div id="basic-casual" className="scroll-mt-32">
              <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-white p-8 rounded-[2rem] shadow-sm transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-beige/50 rounded-xl mb-6 flex overflow-hidden">
                     <div className="w-1/3 p-4 bg-terracotta/10 flex items-center justify-center">
                        <Smartphone className="w-12 h-12 text-terracotta" />
                     </div>
                     <div className="w-2/3 p-6 flex flex-col justify-center">
                        <div className="w-1/2 h-4 bg-charcoal/20 rounded mb-3"></div>
                        <div className="w-4/5 h-3 bg-charcoal/10 rounded mb-2"></div>
                        <div className="w-full h-8 bg-terracotta/20 rounded mt-2"></div>
                     </div>
                  </div>
                  <p className="text-center font-medium text-charcoal/50 text-sm">{t.feat_basic_2_name}</p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 mb-4 bg-white px-4 py-2 rounded-full font-bold text-terracotta text-sm shadow-sm">
                     <span className="w-6 h-6 rounded-full bg-terracotta/20 flex items-center justify-center">1</span> {t.plan_basic_badge}
                  </div>
                  <h3 className="font-heading text-4xl font-bold mb-4">{t.plan_basic}</h3>
                  <p className="text-lg text-charcoal/70 mb-8">
                    {t.casual_basic_sect_desc}
                  </p>
                  
                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Smartphone className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{t.feat_basic_2_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_basic_2_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Utensils className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{t.feat_basic_3_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_basic_3_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><MapPin className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{t.feat_basic_4_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_basic_4_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Search className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{t.feat_basic_6_name}</h4>
                        <p className="text-sm text-charcoal/60 mb-2">{t.feat_basic_6_desc}</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-white text-charcoal font-medium px-3 py-1 rounded-md border border-charcoal/10">"burgers near me"</span>
                          <span className="text-xs bg-white text-charcoal font-medium px-3 py-1 rounded-md border border-charcoal/10">"coffee shop open now"</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* ADVANCED DETAILED */}
            <div id="advanced-casual" className="scroll-mt-32">
              <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4 bg-terracotta px-4 py-2 rounded-full font-bold text-white text-sm shadow-md">
                     <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">2</span> {t.plan_advanced_badge}
                  </div>
                  <h3 className="font-heading text-4xl font-bold mb-4">{t.plan_advanced}</h3>
                  <p className="text-lg text-charcoal/70 mb-6">
                    {t.casual_adv_sect_desc}
                  </p>
                  
                  <div className="bg-white p-4 rounded-xl mb-8 border-l-4 border-terracotta shadow-sm">
                    <p className="text-sm font-bold text-charcoal">{t.demo_includes_basic_plus}</p>
                  </div>

                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Globe className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{t.feat_adv_1_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_adv_1_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Star className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{t.feat_adv_4_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_adv_4_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Smartphone className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{t.feat_adv_3_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_adv_3_desc}</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-charcoal text-white p-8 rounded-[2rem] shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                   <div className="flex justify-between items-center mb-6">
                     <h4 className="font-heading font-bold text-xl">{t.demo_reserve_table}</h4>
                     <span className="bg-terracotta text-white text-xs px-2 py-1 rounded font-bold">{t.plan_basic_badge}</span>
                   </div>
                   <div className="grid grid-cols-2 gap-3 mb-4">
                     <div className="bg-white/10 p-3 rounded-xl border border-white/5 text-sm text-center">Today</div>
                     <div className="bg-white/10 p-3 rounded-xl border border-white/5 text-sm text-center">Tomorrow</div>
                   </div>
                   <div className="bg-white/10 p-4 rounded-xl border border-white/5 text-sm text-center mb-6">Party of 2</div>
                   <button className="w-full bg-terracotta text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#e63f0d] transition-colors">
                     Confirm <Check className="w-4 h-4" />
                   </button>
                </div>
              </motion.div>
            </div>

            {/* PREMIUM DETAILED */}
            <div id="premium-casual" className="scroll-mt-32">
              <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 bg-gradient-to-br from-terracotta to-[#d63a10] p-10 rounded-[2rem] shadow-2xl text-white transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <Sparkles className="w-12 h-12 text-white/50 mb-6" />
                  <h4 className="font-heading text-3xl font-bold mb-4">{t.casual_prem_plan_desc}</h4>
                  <p className="text-white/80 font-medium mb-8">
                    {t.feat_prem_3_desc}
                  </p>
                  <div className="flex flex-col gap-3">
                     <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 flex gap-3 text-sm font-medium">
                       <Check className="w-5 h-5 text-white shrink-0" /> {t.feat_prem_2_name}
                     </div>
                     <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 flex gap-3 text-sm font-medium">
                       <Check className="w-5 h-5 text-white shrink-0" /> {t.feat_prem_3_name}
                     </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 mb-4 bg-charcoal px-4 py-2 rounded-full font-bold text-white text-sm shadow-md">
                     <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">3</span> {t.plan_premium_badge}
                  </div>
                  <h3 className="font-heading text-4xl font-bold mb-4">{t.plan_premium}</h3>
                  <p className="text-lg text-charcoal/70 mb-6">
                    {t.casual_prem_sect_desc}
                  </p>
                  
                  <div className="bg-white p-4 rounded-xl mb-8 border-l-4 border-charcoal shadow-sm">
                    <p className="text-sm font-bold text-charcoal">{t.demo_includes_adv_plus}</p>
                  </div>

                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Sparkles className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{t.feat_prem_1_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_prem_1_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Search className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{t.feat_prem_3_name}</h4>
                        <p className="text-sm text-charcoal/60">
                          {t.feat_prem_3_desc}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Globe className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">{t.feat_prem_2_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_prem_2_desc}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* SECTION 5 — FINAL CTA */}
        <section className="py-24 bg-terracotta text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeIn}>
              <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-8">
                {t.casual_cta_title.split('better')[0]}<br/><span className="underline decoration-4 underline-offset-8 decoration-white/30">{t.casual_cta_title.includes('better') ? 'better website.' : t.casual_cta_title.split('.')[1]?.trim() ?? ''}</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto mb-10">
                {t.casual_cta_subtitle}
              </p>
              <button className="px-10 py-5 bg-charcoal text-white rounded-2xl font-bold tracking-wide hover:bg-charcoal-light transition-all hover:-translate-y-1 inline-flex items-center gap-2 text-lg shadow-xl">
                {t.demo_start_website} <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Simple Footer just for the standalone page */}
      <footer className="bg-charcoal pt-16 pb-8 text-center text-beige/50 text-sm">
         <p>© {new Date().getFullYear()} {t.casual_footer}</p>
      </footer>
    </div>
  );
}
