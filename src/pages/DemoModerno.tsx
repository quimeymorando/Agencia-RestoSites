import React from 'react';
import { ArrowRight, Check, Sparkles, Smartphone, Search, Utensils, Globe, BarChart3, Zap, ChevronRight, Activity } from 'lucide-react';
import { motion, useScroll, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { DemoNavbar } from '../components/demos/DemoNavbar';

// --- INLINE EXPERIMENTAL COMPONENTS (Inspired by 21st.dev / Aceternity) ---

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative overflow-hidden bg-charcoal/40 border border-white/5 backdrop-blur-sm rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 76, 26, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};

const TextReveal = ({ text }: { text: string }) => {
  const words = text.split(" ");
  return (
    <span className="inline-block">
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: idx * 0.05,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// --- MAIN PAGE COMPONENT ---

export function DemoModerno() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" as any },
    transition: { duration: 0.7 }
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
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-terracotta selection:text-white pb-0 overflow-hidden">
      
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 z-[60] bg-terracotta origin-left"
        style={{ scaleX }}
      />

      {/* SECTION 0 — NAVIGATION */}
      <DemoNavbar theme="moderno" />

      <main className="pt-20">
        
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Advanced Background Grid & Spotlight */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-terracotta/20 blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}/>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/10 blur-[120px] rounded-full mix-blend-screen" />
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full border-dashed opacity-20 hidden md:block" 
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center mt-[-10vh]">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-terracotta/30 bg-terracotta/10 text-terracotta text-[10px] font-bold tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(255,76,26,0.2)]"
            >
              <Zap className="w-3 h-3 fill-terracotta/50" /> {t.moderno_badge}
            </motion.div>
            
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-6 text-center leading-[0.85] uppercase flex flex-col items-center">
              <TextReveal text="Modern" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20 block py-2">
                <TextReveal text="Restaurant" />
              </span>
              <span className="relative inline-block text-terracotta">
                <TextReveal text="Websites" />
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 text-center font-light leading-relaxed tracking-wide"
            >
              {t.moderno_hero_subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <button onClick={() => scrollToSection('pricing')} className="group relative px-8 py-5 bg-terracotta text-white font-black text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 w-full sm:w-auto text-center rounded-sm overflow-hidden flex items-center justify-center gap-3">
                 <span className="relative z-10 flex items-center gap-2">{t.demo_start_website} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                 <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </button>
              <button onClick={() => scrollToSection('style')} className="group px-8 py-5 border border-white/20 bg-white/5 text-white font-black text-xs sm:text-sm tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-all w-full sm:w-auto text-center rounded-sm backdrop-blur-md">
                 {t.demo_explore_style}
              </button>
            </motion.div>
          </div>
          
          {/* Scroll Down Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          >
             <span className="text-[10px] font-mono tracking-widest uppercase">{t.moderno_scroll}</span>
             <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                <motion.div 
                  animate={{ y: [0, 48] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-1/2 bg-white"
                />
             </div>
          </motion.div>
        </section>

        {/* SECTION 2 — STYLE PRESENTATION (BENTO GRID) */}
        <section id="style" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             
             <motion.div {...fadeIn} className="mb-20 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-8">
                <div>
                   <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
                     {t.moderno_style_title.split(' ')[0]}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-[#ff7e5f]">{t.moderno_style_title.split(' ').slice(1).join(' ')}</span>
                   </h2>
                   <p className="text-xl text-white/50 font-light max-w-xl leading-relaxed">
                     {t.moderno_style_subtitle}
                   </p>
                </div>
                 <button onClick={() => scrollToSection('pricing')} className="inline-flex items-center gap-3 text-white font-bold tracking-[0.2em] text-xs uppercase hover:text-terracotta transition-colors group px-6 py-4 border border-white/10 rounded-full hover:border-terracotta/50">
                   {t.moderno_see_packages} <Activity className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                 </button>
             </motion.div>

             <motion.div 
               variants={stagger}
               initial="initial"
               whileInView="whileInView"
               className="grid md:grid-cols-3 gap-4 auto-rows-[250px]"
             >
                {/* Bento Item 1 */}
                <motion.div variants={item} className="md:col-span-2 row-span-1 border border-white/5 rounded-2xl bg-[#111] p-8 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-br from-terracotta/5 to-transparent z-0" />
                   <div className="relative z-10 h-full flex flex-col justify-end">
                      <BarChart3 className="w-10 h-10 text-terracotta mb-auto group-hover:scale-110 transition-transform" />
                      <h3 className="font-heading text-2xl font-black uppercase mb-2">{t.moderno_bento1_title}</h3>
                      <p className="text-sm text-white/50 max-w-md">{t.moderno_bento1_desc}</p>
                   </div>
                </motion.div>

                {/* Bento Item 2 */}
                <motion.div variants={item} className="md:col-span-1 row-span-2 border border-white/5 rounded-2xl bg-[#111] p-8 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-6 text-[10px] font-mono tracking-widest text-white/20">02 // VELOCIDAD</div>
                   <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                      <div className="w-20 h-20 rounded-full border border-terracotta/30 flex items-center justify-center mb-8 relative group-hover:bg-terracotta/5 transition-colors">
                         <div className="absolute inset-[-10px] rounded-full border border-terracotta/10 border-dashed animate-spin-slow" />
                         <Zap className="w-8 h-8 text-terracotta" />
                      </div>
                      <h3 className="font-heading text-xl font-black uppercase mb-4">{t.moderno_bento2_title}</h3>
                      <p className="text-sm text-white/50">{t.moderno_bento2_desc}</p>
                   </div>
                </motion.div>

                {/* Bento Item 3 */}
                <motion.div variants={item} className="md:col-span-1 row-span-1 border border-white/5 rounded-2xl bg-[#111] p-8 relative overflow-hidden group">
                   <div className="relative z-10 h-full flex flex-col justify-end">
                      <Smartphone className="w-8 h-8 text-white/80 mb-4 group-hover:text-terracotta transition-colors" />
                      <h3 className="font-heading text-lg font-black uppercase mb-2">{t.moderno_bento3_title}</h3>
                      <p className="text-xs text-white/50">{t.moderno_bento3_desc}</p>
                   </div>
                   <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                      <Smartphone className="w-40 h-40" />
                   </div>
                </motion.div>

                {/* Bento Item 4 */}
                <motion.div variants={item} className="md:col-span-1 row-span-1 border border-white/5 rounded-2xl bg-gradient-to-br from-terracotta/20 to-[#111] p-8 relative overflow-hidden group">
                   <div className="relative z-10 h-full flex flex-col justify-end">
                      <Sparkles className="w-8 h-8 text-terracotta mb-4 group-hover:rotate-12 transition-transform" />
                      <h3 className="font-heading text-lg font-black uppercase mb-2">{t.moderno_bento4_title}</h3>
                      <p className="text-xs text-white/50">{t.moderno_bento4_desc}</p>
                   </div>
                </motion.div>

             </motion.div>
          </div>
        </section>

        {/* SECTION 3 — PRICING CARDS */}
        <section id="pricing" className="py-32 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-24">
              <span className="text-terracotta font-mono text-xs uppercase tracking-widest block mb-4">{t.moderno_pricing_label}</span>
              <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">{t.moderno_pricing_title}</h2>
              <p className="text-lg text-white/50 max-w-xl mx-auto font-light">
                {t.moderno_pricing_subtitle}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
              
              {/* BASIC */}
              <SpotlightCard className="p-8 lg:p-10 flex flex-col transition-all hover:-translate-y-2">
                <div className="flex-grow">
                  <h3 className="font-heading text-3xl font-black uppercase tracking-tight mb-2">Basic</h3>
                  <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border-b border-white/5 pb-4">{t.moderno_basic_plan_desc}</p>
                  <div className="mb-10">
                    <span className="text-5xl font-black tracking-tighter">$250</span>
                  </div>
                  <ul className="space-y-4 mb-12">
                    {[t.moderno_basic_f1, t.moderno_basic_f2, t.moderno_basic_f3, t.moderno_basic_f4].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/70 font-medium">
                        <Check className="w-4 h-4 text-terracotta shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 mt-auto">
                  <a href="#basic-moderno" className="block w-full py-4 text-center font-bold text-white text-[10px] uppercase tracking-widest hover:text-terracotta transition-colors">
                    {t.moderno_view_details}
                  </a>
                  <button className="block w-full py-4 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all rounded-sm">
                    {t.moderno_deploy_basic}
                  </button>
                </div>
              </SpotlightCard>

              {/* ADVANCED */}
              <SpotlightCard className="p-[1px] transform lg:-translate-y-4">
                 <div className="absolute inset-0 bg-gradient-to-b from-terracotta to-transparent opacity-50 z-0"/>
                 <div className="h-full bg-[#111] p-8 lg:p-12 flex flex-col relative z-10 rounded-xl">
                   <div className="absolute top-0 right-8 bg-terracotta text-white px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-b-md">
                     {t.moderno_adv_badge}
                   </div>
                   <div className="flex-grow mt-4">
                     <h3 className="font-heading text-4xl font-black uppercase tracking-tight mb-2 text-white">Advanced</h3>
                     <p className="text-terracotta text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border-b border-white/5 pb-4">{t.moderno_most_popular}</p>
                     <div className="mb-10">
                       <span className="text-6xl font-black tracking-tighter text-white">$450</span>
                     </div>
                     <ul className="space-y-4 mb-12">
                       {[t.moderno_adv_f1, t.moderno_adv_f2, t.moderno_adv_f3, t.moderno_adv_f4, t.moderno_adv_f5].map((feature, i) => (
                         <li key={i} className="flex items-center gap-3 text-sm text-white font-bold">
                           <Check className="w-4 h-4 text-terracotta shrink-0" />
                           <span>{feature}</span>
                         </li>
                       ))}
                     </ul>
                   </div>
                   <div className="space-y-3 mt-auto">
                     <a href="#advanced-moderno" className="block w-full py-4 text-center font-bold text-white/70 text-[10px] uppercase tracking-widest hover:text-terracotta transition-colors">
                       {t.moderno_view_details}
                     </a>
                     <button className="block w-full py-5 bg-terracotta text-white text-center font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors rounded-sm shadow-[0_0_30px_rgba(255,76,26,0.2)]">
                       {t.moderno_deploy_adv}
                     </button>
                   </div>
                 </div>
              </SpotlightCard>

              {/* PREMIUM */}
              <SpotlightCard className="p-8 lg:p-10 flex flex-col transition-all hover:-translate-y-2">
                <div className="flex-grow">
                  <h3 className="font-heading text-3xl font-black uppercase tracking-tight mb-2">Premium</h3>
                  <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border-b border-white/5 pb-4">{t.moderno_prem_plan_desc}</p>
                  <div className="mb-10">
                    <span className="text-5xl font-black tracking-tighter text-white/50"><span className="text-white">$</span>850</span>
                  </div>
                  <ul className="space-y-4 mb-12">
                     {[t.moderno_prem_f1, t.moderno_prem_f2, t.moderno_prem_f3, t.moderno_prem_f4, t.moderno_prem_f5].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/70 font-medium">
                        <Check className="w-4 h-4 text-terracotta shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 mt-auto">
                  <a href="#premium-moderno" className="block w-full py-4 text-center font-bold text-white text-[10px] uppercase tracking-widest hover:text-terracotta transition-colors">
                    {t.moderno_view_details}
                  </a>
                  <button className="block w-full py-4 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all rounded-sm hover:border-white">
                    {t.moderno_deploy_prem}
                  </button>
                </div>
              </SpotlightCard>

            </div>
          </div>
        </section>

        {/* SECTION 4 — DETAILED BREAKDOWN CON SCROLL TRIGGERS */}
        <section className="py-24 relative overflow-hidden">
           {/* Background watermark */}
           <div className="absolute top-[20%] right-[-10%] text-[25vw] font-black uppercase text-white/[0.015] whitespace-nowrap leading-none font-heading tracking-tighter pointer-events-none z-0">
             SPECS
           </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40 relative z-10">
            
            {/* BASIC DETAILED */}
            <div id="basic-moderno" className="scroll-mt-32">
              <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="order-2 md:order-1 relative group perspective-1000">
                   <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-transparent translate-y-4 -translate-x-4 border border-white/5 rounded-2xl z-0 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
                   <div className="relative z-10 bg-[#111] p-10 border border-white/10 rounded-2xl flex flex-col h-full transform transition-all duration-500 hover:rotate-y-[-5deg] hover:rotate-x-[5deg] shadow-2xl">
                     <div className="flex gap-4 border-b border-white/10 pb-6 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                           <Smartphone className="w-8 h-8 text-terracotta" />
                        </div>
                        <div className="flex-grow flex flex-col justify-center gap-2">
                           <div className="w-3/4 h-2 bg-white/20 rounded-full" />
                           <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                        </div>
                     </div>
                     <div className="w-full h-10 bg-terracotta rounded-lg flex items-center justify-center text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(255,76,26,0.3)]">Mobile Flow</div>
                   </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-block mb-4 border border-white/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta/80 rounded-full">
                     fase_01
                  </div>
                  <h3 className="font-heading text-5xl font-black mb-6 uppercase tracking-tighter">BASIC</h3>
                  <p className="text-white/60 mb-10 font-light leading-relaxed">
                    {t.moderno_basic_sect_desc}
                  </p>
                  
                  <ul className="space-y-8">
                    <li className="flex gap-5 group">
                      <div className="mt-1"><Smartphone className="w-6 h-6 text-white/20 group-hover:text-terracotta transition-colors" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">{t.moderno_basic_feat1_title}</h4>
                        <p className="text-white/50 text-sm font-light leading-relaxed">{t.moderno_basic_feat1_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-5 group">
                      <div className="mt-1"><Utensils className="w-6 h-6 text-white/20 group-hover:text-terracotta transition-colors" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">{t.moderno_basic_feat2_title}</h4>
                        <p className="text-white/50 text-sm font-light leading-relaxed">{t.moderno_basic_feat2_desc}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* ADVANCED DETAILED */}
            <div id="advanced-moderno" className="scroll-mt-32">
              <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                 <div className="order-1 md:order-1">
                  <div className="inline-block mb-4 border border-terracotta/30 bg-terracotta/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-terracotta rounded-full">
                     fase_02
                  </div>
                  <h3 className="font-heading text-5xl font-black mb-6 uppercase tracking-tighter">ADVANCED</h3>
                  <p className="text-white/60 mb-8 font-light leading-relaxed">
                    {t.moderno_adv_sect_desc}
                  </p>

                  <ul className="space-y-8">
                    <li className="flex gap-5 group">
                      <div className="mt-1"><BarChart3 className="w-6 h-6 text-white/20 group-hover:text-terracotta transition-colors" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">{t.moderno_adv_feat1_title}</h4>
                        <p className="text-white/50 text-sm font-light leading-relaxed">{t.moderno_adv_feat1_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-5 group">
                      <div className="mt-1"><Globe className="w-6 h-6 text-white/20 group-hover:text-terracotta transition-colors" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">{t.moderno_adv_feat2_title}</h4>
                        <p className="text-white/50 text-sm font-light leading-relaxed">{t.moderno_adv_feat2_desc}</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="order-2 md:order-2 bg-[#111] border border-white/5 p-8 rounded-2xl relative overflow-hidden group">
                   <div className=" absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,76,26,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                   <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
                     <h4 className="font-heading font-black text-2xl uppercase">{t.moderno_adv_reserve}</h4>
                     <span className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-terracotta">
                        <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse"/> Online
                     </span>
                   </div>
                   <div className="space-y-4 relative z-10">
                     <div className="flex gap-4">
                        <div className="w-1/2 p-3 bg-white/5 border border-white/10 rounded-md text-[10px] uppercase font-mono text-center text-white/40">{t.moderno_adv_today}</div>
                        <div className="w-1/2 p-3 bg-white/5 border border-white/10 rounded-md text-[10px] uppercase font-mono text-center text-white/40">{t.moderno_adv_tomorrow}</div>
                     </div>
                     <div className="w-full p-4 bg-terracotta/10 border border-terracotta/30 text-terracotta text-center rounded-md font-bold text-xs tracking-widest uppercase">
                        {t.moderno_adv_execute}
                     </div>
                   </div>
                </div>
              </motion.div>
            </div>

            {/* PREMIUM DETAILED */}
            <div id="premium-moderno" className="scroll-mt-32">
              <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="order-2 md:order-1 relative p-12 overflow-hidden border border-white/10 bg-[#0a0a0a] rounded-3xl shadow-[0_0_50px_rgba(255,76,26,0.05)]">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop')] mix-blend-overlay opacity-10 blur-sm grayscale hover:grayscale-0 hover:opacity-20 transition-all duration-1000"/>
                  <Sparkles className="w-12 h-12 text-terracotta mb-6" />
                  <h4 className="font-heading text-4xl font-black mb-6 uppercase tracking-tighter relative z-10">Absolute <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-white">Authority.</span></h4>
                  
                  <div className="flex flex-col gap-3 relative z-10">
                     <div className="backdrop-blur-md bg-white/5 border border-white/10 p-3 rounded-md font-mono text-[10px] text-white/70 uppercase flex justify-between items-center">
                       <span>GEO Optimization</span> <Check className="w-3 h-3 text-terracotta"/>
                     </div>
                     <div className="backdrop-blur-md bg-white/5 border border-white/10 p-3 rounded-md font-mono text-[10px] text-white/70 uppercase flex justify-between items-center">
                       <span>Semantic AI Prep</span> <Check className="w-3 h-3 text-terracotta"/>
                     </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-block mb-4 border border-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white rounded-full bg-white/10">
                     fase_03 / premium
                  </div>
                  <h3 className="font-heading text-5xl font-black mb-6 uppercase tracking-tighter">PREMIUM</h3>
                  <p className="text-white/60 mb-8 font-light leading-relaxed">
                    {t.moderno_prem_sect_desc}
                  </p>
                  
                  <ul className="space-y-8">
                    <li className="flex gap-5">
                      <div className="mt-1"><Search className="w-6 h-6 text-white/80" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">{t.moderno_prem_feat1_title}</h4>
                        <p className="text-white/50 text-sm font-light leading-relaxed">{t.moderno_prem_feat1_desc}</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="mt-1"><Globe className="w-6 h-6 text-white/80" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">{t.moderno_prem_feat2_title}</h4>
                        <p className="text-white/50 text-sm font-light leading-relaxed">{t.moderno_prem_feat2_desc}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* SECTION 5 — FINAL CTA */}
        <section className="py-40 relative overflow-hidden bg-terracotta text-[#0A0A0A]">
           {/* Geometric shapes pattern overlay */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
           
           <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
             <motion.div {...fadeIn} className="flex flex-col items-center">
               <div className="mb-8 font-mono text-[10px] font-black uppercase tracking-[0.3em] bg-black text-white px-4 py-1.5 rounded-full inline-block shadow-2xl">{t.moderno_cta_label}</div>
               <h2 className="font-heading text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter mb-8 uppercase leading-[0.85]">
                 {t.moderno_cta_title.split(' ').slice(0, 1).join(' ')}<br/>
                 {t.moderno_cta_title.split(' ').slice(1, 3).join(' ')}<br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-t from-black/80 to-black stroke-black block mt-2">{t.moderno_cta_title.split(' ').slice(-1)[0]}</span>
               </h2>
               <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-14 tracking-tight opacity-80">
                 {t.moderno_cta_subtitle}
               </p>
               <button className="relative px-12 py-6 bg-[#0a0a0a] text-white font-black uppercase tracking-[0.2em] rounded-sm flex items-center gap-4 text-xs group overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
                  <span className="relative z-10 flex items-center gap-2">{t.moderno_cta_btn} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  <span className="absolute inset-0 flex items-center justify-center gap-2 text-[#0a0a0a] font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 z-20">{t.moderno_cta_btn} <ChevronRight className="w-4 h-4" /></span>
               </button>
             </motion.div>
           </div>
        </section>
      </main>
      
      {/* Simple Footer */}
      <footer className="bg-[#0A0A0A] pt-12 pb-8 text-center border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
            <span className="font-heading font-black text-xl tracking-tighter uppercase text-white/20">RESTOSITES.</span>
            <p className="font-mono text-white/30 text-[10px] tracking-widest uppercase">
               © {new Date().getFullYear()} {t.moderno_footer}
            </p>
         </div>
      </footer>
    </div>
  );
}
