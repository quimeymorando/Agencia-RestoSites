import { } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Sparkles, Smartphone, Search, Utensils, Globe, BarChart3, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function DemoModerno() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7 }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.15 }
  };

  const item = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-charcoal text-white font-sans selection:bg-terracotta selection:text-white pb-20 lg:pb-0">
      
      {/* SECTION 0 — NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group text-white">
            <span className="font-heading font-black text-2xl tracking-tighter uppercase drop-shadow-md">
              Resto<span className="text-terracotta">Sites</span><span className="text-terracotta text-3xl leading-none">.</span>
            </span>
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-all group bg-white/5 px-6 py-2.5 rounded-sm border border-white/10 hover:border-white/30 hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-wider text-xs">Back to Hub</span>
          </Link>
        </div>
      </nav>

      <main className="pt-20">
        
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-charcoal overflow-hidden">
          {/* Abstract dark geometry background */}
          <div className="absolute inset-0 opacity-20">
             <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-terracotta/40 to-transparent blur-[120px] rounded-full mix-blend-screen" />
             <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-white/10 to-transparent blur-[120px] rounded-full mix-blend-screen" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_20%,transparent_100%)]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
            
            <motion.div {...fadeIn} className="inline-flex flex-col sm:flex-row items-center gap-3 px-5 py-2 border border-white/10 bg-black/40 backdrop-blur-md rounded-md text-xs font-bold tracking-[0.2em] uppercase mb-12 text-white/80">
              <span className="flex items-center gap-2"><Zap className="w-3 h-3 text-terracotta" /> Fast Growing Brands</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span>Conversion First Design</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 text-center leading-[0.9] uppercase"
            >
              Modern <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40">Restaurant</span>
              <br/>
              <span className="text-terracotta relative">
                Websites
                <svg className="absolute -bottom-4 left-0 w-full h-4 text-terracotta/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto mb-14 text-center font-light leading-relaxed tracking-wide"
            >
              Bold, high-impact designs for fast-growing and trend-driven brands. Build an undeniable digital presence ideal for dark kitchens, fusion concepts, and market disruptors.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch justify-center gap-6 w-full sm:w-auto"
            >
              <a href="#pricing" className="group relative px-10 py-5 bg-terracotta text-white font-bold text-lg tracking-widest uppercase hover:bg-white hover:text-charcoal transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">Start your website <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </a>
              <a href="#style" className="px-10 py-5 border border-white/20 text-white font-bold text-lg tracking-widest uppercase hover:border-white hover:bg-white/5 transition-all flex items-center justify-center w-full sm:w-auto text-center">
                Explore The Edge
              </a>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — STYLE PRESENTATION */}
        <section id="style" className="py-32 bg-black relative border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
               
               <motion.div {...fadeIn}>
                 <h2 className="font-heading text-5xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-tight">
                   Engineered to <br/><span className="text-terracotta">Convert.</span>
                 </h2>
                 <p className="text-xl text-white/60 leading-relaxed font-light mb-10">
                   Beautiful is bare minimum. We build digital-first experiences centered around explosive visual hierarchy and a relentless focus on customer action.
                 </p>
                 <a href="#pricing" className="inline-flex items-center gap-2 text-terracotta font-bold tracking-widest uppercase hover:text-white transition-colors group">
                   See our packages <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                 </a>
               </motion.div>

               <motion.div 
                 variants={stagger}
                 initial="initial"
                 whileInView="whileInView"
                 className="grid sm:grid-cols-2 gap-6"
               >
                 {[
                   {
                     icon: <BarChart3 className="w-6 h-6" />,
                     title: "Data Driven Layouts",
                     desc: "UI architecture that directs the eye exactly where it needs to go: The menu and the order button."
                   },
                   {
                     icon: <Zap className="w-6 h-6" />,
                     title: "High Performance",
                     desc: "Lightning-fast load times. We drop the bloat so hungry users don't abandon the page."
                   },
                   {
                     icon: <Smartphone className="w-6 h-6" />,
                     title: "Digital-First UX",
                     desc: "App-like navigation tailored specifically for mobile-heavy millennial and Gen Z demographics."
                   },
                   {
                     icon: <Sparkles className="w-6 h-6" />,
                     title: "Bold Identity",
                     desc: "Loud typography and strong contrasts that carve out a memorable spot in the customer's mind."
                   }
                 ].map((feature, idx) => (
                   <motion.div key={idx} variants={item} className="p-8 bg-charcoal/50 border border-white/5 hover:border-white/20 hover:bg-charcoal transition-all group">
                     <div className="w-12 h-12 bg-white/5 text-terracotta flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-terracotta group-hover:text-white transition-all duration-300">
                       {feature.icon}
                     </div>
                     <h3 className="font-heading text-lg font-bold uppercase tracking-wider mb-3">{feature.title}</h3>
                     <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                   </motion.div>
                 ))}
               </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — PRICING CARDS */}
        <section id="pricing" className="py-32 bg-charcoal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="text-center mb-20">
              <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">Investment.</h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
                High-end modern architecture for your brand. Predictable, transparent scaling.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 items-end max-w-6xl mx-auto">
              
              {/* BASIC */}
              <motion.div {...fadeIn} className="bg-black p-8 lg:p-10 border border-white/10 hover:border-terracotta/50 transition-colors flex flex-col h-full relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-white/10 group-hover:bg-terracotta transition-colors"></div>
                <div className="flex-grow">
                  <h3 className="font-heading text-3xl font-black uppercase tracking-tight mb-2">Basic</h3>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-10">Essential Setup</p>
                  <div className="mb-10 flex items-baseline gap-1">
                    <span className="text-6xl font-black tracking-tighter">$250</span>
                  </div>
                  <ul className="space-y-5 mb-12">
                    {["1 page architecture", "Deploy in 3–5 days", "Mobile-dominating UX", "Core Local SEO"].map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm text-white/80 font-medium">
                        <Check className="w-5 h-5 text-terracotta shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <a href="#basic-moderno" className="block w-full py-4 px-6 border border-white/20 text-center font-bold text-white text-xs uppercase tracking-widest hover:bg-white/5 transition-colors">
                    Tech Specs
                  </a>
                  <button className="block w-full py-4 px-6 bg-white text-charcoal text-center font-bold text-xs uppercase tracking-widest hover:bg-terracotta hover:text-white transition-colors">
                    Deploy Basic
                  </button>
                </div>
              </motion.div>

              {/* ADVANCED */}
              <motion.div {...fadeIn} className="bg-terracotta p-8 lg:p-12 border border-terracotta hover:border-white transition-colors flex flex-col h-[105%] relative group z-10 shadow-2xl shadow-terracotta/20">
                <div className="absolute top-6 right-6 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                  Scale Leader
                </div>
                <div className="flex-grow mt-4">
                  <h3 className="font-heading text-4xl font-black uppercase tracking-tight mb-2 text-white">Advanced</h3>
                  <p className="text-white/80 text-xs font-bold tracking-widest uppercase mb-10">Growth Engine</p>
                  <div className="mb-10 flex items-baseline gap-1">
                    <span className="text-7xl font-black tracking-tighter text-white">$450</span>
                  </div>
                  <ul className="space-y-5 mb-12">
                    {["Up to 3 pages", "Aggressive SEO targeting", "High-fps animations", "Live social syncing", "Integrated Bookings"].map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm text-white font-bold">
                        <Check className="w-5 h-5 text-black shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <a href="#advanced-moderno" className="block w-full py-4 px-6 border-2 border-black/20 text-center font-black text-black text-xs uppercase tracking-widest hover:border-black transition-colors">
                    Tech Specs
                  </a>
                  <button className="block w-full py-5 px-6 bg-black text-white text-center font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                    Deploy Advanced
                  </button>
                </div>
              </motion.div>

              {/* PREMIUM */}
              <motion.div {...fadeIn} className="bg-black p-8 lg:p-10 border border-white/10 hover:border-white transition-colors flex flex-col h-full relative group">
                <div className="absolute top-0 right-0 w-2 h-full bg-white/10 group-hover:bg-white transition-colors"></div>
                <div className="flex-grow">
                  <h3 className="font-heading text-3xl font-black uppercase tracking-tight mb-2">Premium</h3>
                  <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-10">Market Dominance</p>
                  <div className="mb-10 flex items-baseline gap-1">
                    <span className="text-6xl font-black tracking-tighter text-white/50"><span className="text-white">$</span>850</span>
                  </div>
                  <ul className="space-y-5 mb-12">
                    {["Total custom architecture", "Up to 5 dynamic pages", "GEO & AI algorithmic SEO", "Advanced reservation funnels", "Ultimate performance routing"].map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm text-white/70 font-medium">
                        <Check className="w-5 h-5 text-white/40 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <a href="#premium-moderno" className="block w-full py-4 px-6 border border-white/20 text-center font-bold text-white text-xs uppercase tracking-widest hover:bg-white/5 transition-colors">
                    Tech Specs
                  </a>
                  <button className="block w-full py-4 px-6 bg-white/10 text-white text-center font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                    Deploy Premium
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — DETAILED BREAKDOWN */}
        <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
           {/* Decorational massive text running behind */}
           <div className="select-none pointer-events-none absolute top-40 -left-20 text-[20vw] font-black uppercase text-white/[0.02] whitespace-nowrap leading-none font-heading tracking-tighter">
             Architecture
           </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-40 relative z-10">
            
            {/* BASIC DETAILED */}
            <div id="basic-moderno" className="scroll-mt-32">
              <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="order-2 md:order-1 relative group">
                   <div className="absolute inset-0 bg-terracotta translate-y-3 -translate-x-3 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-500 ease-out z-0 border border-white/10"></div>
                   <div className="relative z-10 bg-charcoal p-10 border border-white/20 flex flex-col h-full transform transition-transform group-hover:-translate-y-2 group-hover:translate-x-2 duration-500 ease-out">
                     <div className="flex border-b border-white/10 pb-4 mb-6">
                        <div className="w-1/2 p-4 text-center border-r border-white/10">
                           <div className="w-8 h-8 mx-auto bg-white/10 rounded-full mb-3 flex items-center justify-center"><Smartphone className="w-4 h-4 text-white" /></div>
                           <div className="w-full h-2 bg-white/20 mb-2"></div>
                           <div className="w-2/3 mx-auto h-2 bg-white/10"></div>
                        </div>
                        <div className="w-1/2 p-4 flex flex-col justify-center">
                           <div className="w-full h-8 bg-terracotta mb-2 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-black">Order Now</div>
                        </div>
                     </div>
                     <p className="font-mono text-white/30 text-xs tracking-widest uppercase">Wireframe_Alpha.v1</p>
                   </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-block mb-6 border border-white/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-terracotta">
                     [01] // Core Architecture
                  </div>
                  <h3 className="font-heading text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">BASIC</h3>
                  <p className="text-xl text-white/60 mb-10 font-light leading-relaxed">
                    A highly optimized digital beachhead. Fast deployment, merciless performance, and zero friction between the user and your menu. Ideal for disruptors needing immediate market presence.
                  </p>
                  
                  <ul className="space-y-8">
                    <li className="flex gap-5">
                      <div className="mt-1"><Smartphone className="w-6 h-6 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Mobile Domination</h4>
                        <p className="text-white/50 font-light leading-relaxed">The UI is built exclusively for thumb navigation. Massive tap targets, instant load times, rapid decision making.</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="mt-1"><Utensils className="w-6 h-6 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Frictionless Menu Parsing</h4>
                        <p className="text-white/50 font-light leading-relaxed">No PDFs. Native web structures that allow your customers to scan, crave, and order without zooming in.</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="mt-1"><Search className="w-6 h-6 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Algorithmic Visibility</h4>
                        <p className="text-white/50 font-light leading-relaxed">Semantic HTML structuring that feeds Google exactly what it wants to read to rank your local business.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* ADVANCED DETAILED */}
            <div id="advanced-moderno" className="scroll-mt-32">
              <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div>
                   <div className="inline-block mb-6 border border-terracotta px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-terracotta bg-terracotta/10">
                     [02] // Growth Engine
                   </div>
                  <h3 className="font-heading text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">ADVANCED</h3>
                  <p className="text-xl text-white/60 mb-8 font-light leading-relaxed">
                    Scale your operations. We implement automated conversion funnels, immersive visual branding, and systemized booking integrations to handle extreme volume.
                  </p>
                  
                  <div className="bg-white/5 p-4 border-l-2 border-terracotta mb-10">
                    <p className="text-xs font-mono font-bold text-white uppercase tracking-widest"><span className="text-terracotta">+</span> Integrates Basic Phase systems</p>
                  </div>

                  <ul className="space-y-8">
                    <li className="flex gap-5">
                      <div className="mt-1"><BarChart3 className="w-6 h-6 text-white" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Automated Conversion Flow</h4>
                        <p className="text-white/50 font-light leading-relaxed">24/7 digital booking system. Capture demand at all hours while your physical storefront is closed.</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="mt-1"><Zap className="w-6 h-6 text-white" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">High-FPS Interactions</h4>
                        <p className="text-white/50 font-light leading-relaxed">Hardware-accelerated animations that make scrolling feel premium, heavy, and deliberately engineered.</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="mt-1"><Smartphone className="w-6 h-6 text-white" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Live Social Injection</h4>
                        <p className="text-white/50 font-light leading-relaxed">API connection to Instagram. Your site dynamically updates its visual content the second you post on socials.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-charcoal border border-white/10 p-10 relative group">
                   <div className="absolute inset-0 bg-gradient-to-br from-terracotta/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                   <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
                     <h4 className="font-heading font-black text-3xl uppercase">Book.</h4>
                     <span className="bg-white text-black text-[10px] px-3 py-1 font-black uppercase tracking-widest">Active</span>
                   </div>
                   <div className="grid grid-cols-2 gap-4 mb-6">
                     <div className="bg-black border border-white/10 p-4 text-center font-mono text-xs uppercase text-white/50 hover:border-terracotta hover:text-white transition-colors cursor-pointer">Date_Today</div>
                     <div className="bg-black border border-white/10 p-4 text-center font-mono text-xs uppercase text-white/50 hover:border-terracotta hover:text-white transition-colors cursor-pointer">Date_Tmrw</div>
                   </div>
                   <div className="bg-black border border-white/10 p-5 text-center mb-8 font-mono text-xs uppercase text-white">Pax: 02</div>
                   <button className="w-full bg-terracotta text-white py-5 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all">
                     Execute Booking <ArrowRight className="w-5 h-5" />
                   </button>
                </div>
              </motion.div>
            </div>

            {/* PREMIUM DETAILED */}
            <div id="premium-moderno" className="scroll-mt-32">
              <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="order-2 md:order-1 relative p-12 overflow-hidden group border border-white/10 bg-black">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
                  <Sparkles className="w-16 h-16 text-white mb-8 group-hover:rotate-12 transition-transform duration-500" />
                  <h4 className="font-heading text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-[0.9]">Absolute <br/> <span className="text-terracotta">Authority.</span></h4>
                  <p className="text-white/60 font-light mb-10 leading-relaxed">
                    Deploy an impenetrable digital presence engineered strictly for market dominance. Capture high-intent local search queries before your competitors even know they exist.
                  </p>
                  <div className="flex flex-col gap-4">
                     <div className="border border-white/10 p-4 font-mono text-[10px] text-white/70 uppercase flex justify-between items-center tracking-widest">
                       <span>GEO Optimization Protocol</span> <span className="text-terracotta">Online</span>
                     </div>
                     <div className="border border-white/10 p-4 font-mono text-[10px] text-white/70 uppercase flex justify-between items-center tracking-widest">
                       <span>Algorithmic Syncing</span> <span className="text-terracotta">Online</span>
                     </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-block mb-6 border border-white px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white bg-white/10">
                     [03] // Dominance Protocol
                  </div>
                  <h3 className="font-heading text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">PREMIUM</h3>
                  <p className="text-xl text-white/60 mb-8 font-light leading-relaxed">
                    Beyond aesthetics. This is infrastructural superiority. We build SEO systems designed to intercept AI search requests and capture mapping logic routing.
                  </p>
                  
                  <div className="bg-white/5 p-4 border-l-2 border-white mb-10">
                    <p className="text-xs font-mono font-bold text-white uppercase tracking-widest"><span className="text-white">+</span> Integrates Advanced Phase systems</p>
                  </div>

                  <ul className="space-y-8">
                    <li className="flex gap-5">
                      <div className="mt-1"><Search className="w-6 h-6 text-white" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Algorithmic Omnipresence</h4>
                        <p className="text-white/50 font-light leading-relaxed">Aggressive local SEO mapping combined with AI query optimization. When ChatGPT recommends a spot, it recommends you.</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="mt-1"><Sparkles className="w-6 h-6 text-white" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Autonomous Assistance</h4>
                        <p className="text-white/50 font-light leading-relaxed">Deploy an AI chatbot to handle trivial QA at scale, qualifying leads and directing traffic directly to your ordering system.</p>
                      </div>
                    </li>
                    <li className="flex gap-5">
                      <div className="mt-1"><Globe className="w-6 h-6 text-white" /></div>
                      <div>
                        <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-2">Border-less Menu Structuring</h4>
                        <p className="text-white/50 font-light leading-relaxed">Dynamically routes visitors to native-language menus, scaling your addressable market to international tourists seamlessly.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* SECTION 5 — FINAL CTA */}
        <section className="py-32 bg-white text-charcoal text-center relative overflow-hidden">
          {/* Subtle noise pattern overlay if possible, or simple clean background */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
            <motion.div {...fadeIn}>
              <div className="mb-8 font-mono text-xs font-black uppercase tracking-[0.3em] text-terracotta">Ready for deployment</div>
              <h2 className="font-heading text-6xl md:text-8xl font-black tracking-tighter mb-10 uppercase leading-[0.9] text-charcoal">
                Build A Modern <br/>
                <span className="text-outline-charcoal">Digital</span> Experience.
              </h2>
              <p className="text-xl md:text-2xl text-charcoal/60 font-light max-w-2xl mx-auto mb-14 tracking-wide">
                Leave the generic templates behind. Launch an aggressive, high-converting digital storefront today.
              </p>
              <button className="px-12 py-6 bg-terracotta text-white font-black uppercase tracking-[0.2em] hover:bg-charcoal hover:text-white transition-colors duration-300 inline-flex items-center gap-4 text-sm group">
                Start your website <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Simple Footer just for the standalone page */}
      <footer className="bg-black pt-20 pb-10 text-center border-t border-white/10">
         <p className="font-mono text-white/30 text-[10px] tracking-widest uppercase">© {new Date().getFullYear()} RestoSites. Engineered for scale.</p>
      </footer>
    </div>
  );
}
