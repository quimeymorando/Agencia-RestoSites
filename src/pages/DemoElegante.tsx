
import { ArrowRight, Check, Star, MapPin, ChefHat, Sparkles, Smartphone, Search, Utensils, Clock, Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { DemoNavbar } from '../components/demos/DemoNavbar';

export function DemoElegante() {
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
    <div className="min-h-screen bg-white text-charcoal font-sans selection:bg-terracotta selection:text-white">
      {/* SECTION 0 — NAVIGATION */}
      <DemoNavbar theme="elegante" />

      <main className="pt-20">
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-charcoal text-beige overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-charcoal/90" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-beige/20 text-xs tracking-widest uppercase mb-8 text-beige/80">
              <Star className="w-3 h-3 text-terracotta" /> {t.elegante_badge}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-6xl md:text-8xl font-light tracking-tight mb-6 leading-[1.1]"
            >
              {t.elegante_hero_title.split(' ').slice(0, -1).join(' ')} <br/><span className="italic text-terracotta">{t.elegante_hero_title.split(' ').slice(-1)[0]}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-beige/70 font-light max-w-2xl mx-auto mb-12"
            >
              {t.elegante_hero_subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button onClick={() => scrollToSection('pricing')} className="px-8 py-4 bg-terracotta text-white rounded-full font-medium tracking-wide hover:bg-[#e63f0d] transition-all hover:scale-105 inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                {t.demo_start_website} <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollToSection('style')} className="px-8 py-4 bg-transparent border border-beige/30 text-beige rounded-full font-medium tracking-wide hover:bg-beige/10 transition-all w-full sm:w-auto justify-center text-center">
                {t.elegante_explore_btn}
              </button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — STYLE PRESENTATION */}
        <section id="style" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center mb-24">
              <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tight mb-6">
                {t.elegante_style_title.split(' ').slice(0, 2).join(' ')} <span className="italic">{t.elegante_style_title.split(' ').slice(2).join(' ')}</span>
              </h2>
              <p className="text-xl text-charcoal/60 font-light leading-relaxed">
                {t.elegante_style_subtitle}
              </p>
            </motion.div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: <Sparkles className="w-6 h-6 stroke-1" />, title: t.elegante_feat1_title, desc: t.elegante_feat1_desc },
                { icon: <Star className="w-6 h-6 stroke-1" />, title: t.elegante_feat2_title, desc: t.elegante_feat2_desc },
                { icon: <Utensils className="w-6 h-6 stroke-1" />, title: t.elegante_feat3_title, desc: t.elegante_feat3_desc },
                { icon: <ArrowUpRight className="w-6 h-6 stroke-1" />, title: t.elegante_feat4_title, desc: t.elegante_feat4_desc }
              ].map((feature, idx) => (
                <motion.div key={idx} variants={item} className="p-8 border border-charcoal/5 rounded-2xl hover:border-terracotta/30 hover:bg-beige/30 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-charcoal text-beige flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — PRICING OVERVIEW (CARDS) */}
        <section id="pricing" className="py-32 bg-beige/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-20">
              <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tight mb-6">
                {t.elegante_pricing_title.split(' ').slice(0, -1).join(' ')} <span className="italic">{t.elegante_pricing_title.split(' ').slice(-1)[0]}</span>
              </h2>
              <p className="text-xl text-charcoal/60 font-light max-w-2xl mx-auto">
                {t.elegante_pricing_subtitle}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* BASIC */}
              <motion.div {...fadeIn} className="bg-white rounded-3xl p-8 lg:p-10 border border-charcoal/10 flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div>
                  <h3 className="font-heading text-2xl font-medium mb-2">{t.plan_basic}</h3>
                  <p className="text-charcoal/60 text-sm mb-6">{t.elegante_basic_plan_desc}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-light tracking-tight">$250</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {[t.elegante_basic_f1, t.elegante_basic_f2, t.elegante_basic_f3, t.elegante_basic_f4].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-charcoal/80">
                        <Check className="w-5 h-5 text-olive shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 mt-auto">
                  <a href="#basic-elegant" className="block w-full py-3 px-6 rounded-full border border-charcoal text-center font-medium hover:bg-charcoal hover:text-white transition-colors">
                    {t.demo_view_details}
                  </a>
                  <button className="block w-full py-3 px-6 rounded-full bg-charcoal text-white text-center font-medium hover:bg-charcoal-light transition-colors">
                    {t.demo_start_basic}
                  </button>
                </div>
              </motion.div>

              {/* ADVANCED */}
              <motion.div {...fadeIn} className="bg-charcoal text-beige rounded-3xl p-8 lg:p-10 border border-charcoal relative flex flex-col justify-between transform lg:-translate-y-4 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terracotta text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {t.demo_most_popular}
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-medium mb-2">{t.plan_advanced}</h3>
                  <p className="text-beige/60 text-sm mb-6">{t.elegante_adv_plan_desc}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-light tracking-tight">$450</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {[t.elegante_adv_f1, t.elegante_adv_f2, t.elegante_adv_f3, t.elegante_adv_f4, t.elegante_adv_f5].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-beige/90">
                        <Check className="w-5 h-5 text-terracotta shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 mt-auto">
                  <a href="#advanced-elegant" className="block w-full py-3 px-6 rounded-full border border-beige/30 text-center font-medium hover:bg-beige/10 transition-colors">
                    {t.demo_view_details}
                  </a>
                  <button className="block w-full py-3 px-6 rounded-full bg-terracotta text-white text-center font-medium hover:bg-[#e63f0d] transition-colors">
                    {t.demo_start_advanced}
                  </button>
                </div>
              </motion.div>

              {/* PREMIUM */}
              <motion.div {...fadeIn} className="bg-white rounded-3xl p-8 lg:p-10 border border-charcoal/10 flex flex-col justify-between hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute -right-12 top-8 rotate-45 bg-olive text-white px-12 py-1 text-xs font-bold uppercase tracking-widest">
                  {t.demo_best_value}
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-medium mb-2">{t.plan_premium}</h3>
                  <p className="text-charcoal/60 text-sm mb-6">{t.elegante_prem_plan_desc}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-light tracking-tight">$850</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {[t.elegante_prem_f1, t.elegante_prem_f2, t.elegante_prem_f3, t.elegante_prem_f4, t.elegante_prem_f5, t.elegante_prem_f6].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-charcoal/80">
                        <Check className="w-5 h-5 text-olive shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 mt-auto">
                  <a href="#premium-elegant" className="block w-full py-3 px-6 rounded-full border border-charcoal text-center font-medium hover:bg-charcoal hover:text-white transition-colors">
                    {t.demo_view_details}
                  </a>
                  <button className="block w-full py-3 px-6 rounded-full bg-charcoal text-white text-center font-medium hover:bg-charcoal-light transition-colors">
                    {t.demo_start_premium}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — DETAILED BREAKDOWN */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40">
            
            {/* BASIC DETAILED */}
            <div id="basic-elegant" className="scroll-mt-32">
              <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-olive/10 text-olive mb-8">
                    <span className="font-heading text-2xl font-bold">1</span>
                  </div>
                  <h3 className="font-heading text-4xl font-light mb-4">{t.elegante_basic_sect_title} <span className="text-charcoal/40 block text-2xl mt-2">{t.elegante_basic_sect_subtitle}</span></h3>
                  <p className="text-lg text-charcoal/60 mb-8 leading-relaxed">
                    {t.elegante_basic_sect_desc}
                  </p>
                  
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="mt-1"><Smartphone className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">{t.feat_basic_2_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_basic_2_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><Utensils className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">{t.feat_basic_3_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_basic_3_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><MapPin className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">{t.feat_basic_4_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_basic_4_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><Clock className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">{t.feat_basic_5_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_basic_5_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1"><Search className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">{t.feat_basic_6_name}</h4>
                        <p className="text-sm text-charcoal/60 mb-3">{t.feat_basic_6_desc}</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-beige px-3 py-1 rounded-full">"restaurant near me"</span>
                          <span className="text-xs bg-beige px-3 py-1 rounded-full">"pizza in madrid"</span>
                          <span className="text-xs bg-beige px-3 py-1 rounded-full">"best sushi bar"</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2 bg-beige rounded-[2rem] p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                  <div className="relative z-10 w-full max-w-sm bg-white rounded-xl shadow-2xl p-6 transform rotate-3">
                    <div className="w-full h-8 bg-beige/50 rounded-lg mb-4"></div>
                    <div className="w-3/4 h-32 bg-beige rounded-lg mb-4"></div>
                    <div className="space-y-2">
                      <div className="w-full h-4 bg-beige/50 rounded"></div>
                      <div className="w-5/6 h-4 bg-beige/50 rounded"></div>
                      <div className="w-4/6 h-4 bg-beige/50 rounded"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ADVANCED DETAILED */}
            <div id="advanced-elegant" className="scroll-mt-32">
              <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="bg-charcoal text-beige rounded-[2rem] p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                  <div className="relative z-10 w-full max-w-sm bg-charcoal-light rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 transform -rotate-2">
                     <div className="flex items-center justify-between mb-6 border-b border-beige/10 pb-4">
                        <span className="font-heading text-lg">{t.demo_reserve_table}</span>
                        <div className="w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center"><Check className="w-4 h-4 text-terracotta" /></div>
                     </div>
                     <div className="space-y-3">
                        <div className="w-full h-10 bg-charcoal rounded flex items-center px-4 text-sm text-beige/40 border border-beige/10">Date &amp; Time</div>
                        <div className="w-full h-10 bg-charcoal rounded flex items-center px-4 text-sm text-beige/40 border border-beige/10">Guests</div>
                        <div className="w-full h-12 bg-terracotta rounded mt-4"></div>
                     </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta/10 text-terracotta mb-8">
                    <span className="font-heading text-2xl font-bold">2</span>
                  </div>
                  <h3 className="font-heading text-4xl font-light mb-4">{t.elegante_adv_sect_title} <span className="text-charcoal/40 block text-2xl mt-2">{t.elegante_adv_sect_subtitle}</span></h3>
                  <p className="text-lg text-charcoal/60 mb-8 leading-relaxed">
                    {t.elegante_adv_sect_desc}
                  </p>
                  
                  <div className="bg-beige/50 p-6 rounded-2xl mb-8 border border-charcoal/5">
                    <p className="text-sm font-medium text-charcoal mb-2">{t.elegante_adv_incl}</p>
                  </div>

                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="mt-1"><Globe className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-medium mb-1">{t.feat_adv_1_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_adv_1_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><ChefHat className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-medium mb-1">{t.feat_adv_2_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_adv_2_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><Star className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-medium mb-1">{t.feat_adv_4_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_adv_4_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><Search className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-medium mb-1">{t.feat_adv_6_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_adv_6_desc}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* PREMIUM DETAILED */}
            <div id="premium-elegant" className="scroll-mt-32">
              <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-olive mb-8 shadow-xl shadow-olive/20 text-white">
                    <span className="font-heading text-2xl font-bold">3</span>
                  </div>
                  <h3 className="font-heading text-4xl font-light mb-4">{t.elegante_prem_sect_title} <span className="text-charcoal/40 block text-2xl mt-2">{t.elegante_prem_sect_subtitle}</span></h3>
                  <p className="text-lg text-charcoal/60 mb-8 leading-relaxed">
                    {t.elegante_prem_sect_desc}
                  </p>
                  
                  <div className="bg-beige/50 p-6 rounded-2xl mb-8 border border-charcoal/5">
                    <p className="text-sm font-medium text-charcoal mb-2">{t.elegante_prem_incl}</p>
                  </div>

                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="mt-1"><Sparkles className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">{t.feat_prem_1_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_prem_1_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1"><Globe className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">{t.feat_prem_3_name}</h4>
                        <p className="text-sm text-charcoal/60 mb-2">
                          {t.feat_prem_3_desc}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1"><Search className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">{t.feat_prem_2_name}</h4>
                        <p className="text-sm text-charcoal/60">
                          {t.feat_prem_2_desc}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><ArrowUpRight className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">{t.feat_prem_4_name}</h4>
                        <p className="text-sm text-charcoal/60">{t.feat_prem_4_desc}</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2 bg-charcoal rounded-[2rem] p-8 aspect-square flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent"></div>
                  
                  <div className="relative z-10 w-full p-8">
                     <div className="mb-6 flex gap-2">
                        <span className="bg-olive text-white text-xs px-3 py-1 rounded-full border border-white/20">AI Optimized</span>
                        <span className="bg-terracotta text-white text-xs px-3 py-1 rounded-full border border-white/20">GEO Targeted</span>
                     </div>
                     <h4 className="font-heading text-3xl text-beige mb-4 shadow-sm">{t.feat_prem_3_name}</h4>
                     <p className="text-beige/80 text-sm max-w-sm">
                       {t.feat_prem_3_desc}
                     </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* SECTION 5 — FINAL CTA */}
        <section className="relative py-32 bg-charcoal text-beige overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/95 to-charcoal/90"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div {...fadeIn}>
              <h2 className="font-heading text-5xl md:text-7xl font-light tracking-tight mb-8">
                {t.elegante_cta_title.split('?')[0]}<br/><span className="italic text-terracotta">{t.elegante_cta_title.includes('?') ? t.elegante_cta_title.split('?')[1] || '' : ''}</span>
              </h2>
              <p className="text-xl text-beige/70 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                {t.elegante_cta_subtitle}
              </p>
              <button className="px-10 py-5 bg-terracotta text-white rounded-full font-medium tracking-wide hover:bg-[#e63f0d] transition-all hover:scale-105 inline-flex items-center gap-2 text-lg shadow-[0_0_40px_rgba(255,76,26,0.3)]">
                {t.demo_start_website} <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Simple Footer just for the standalone page */}
      <footer className="bg-charcoal border-t border-beige/10 py-8 text-center text-beige/40 text-sm">
         <p>© {new Date().getFullYear()} {t.elegante_footer}</p>
      </footer>
    </div>
  );
}
