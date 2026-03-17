import { } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Star, MapPin, Sparkles, Smartphone, Search, Utensils, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function DemoCasual() {
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
      {/* Usamos Glassmorphism pero más brillante y cálido para contrastar la vibra */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-terracotta/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group text-charcoal">
            <span className="font-heading font-bold text-2xl tracking-tighter">
              Resto<span className="text-terracotta">Sites</span>.
            </span>
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-sm font-medium text-charcoal hover:text-terracotta transition-colors group bg-beige/50 px-5 py-2.5 rounded-full hover:bg-terracotta/10 backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-20">
        
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden">
          {/* Fondo sutil tipo cuadrícula o patrón brillante */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF4C1A0a_1px,transparent_1px),linear-gradient(to_bottom,#FF4C1A0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-terracotta/20 bg-terracotta/5 text-xs font-semibold tracking-widest uppercase mb-8 text-terracotta">
              <Star className="w-3 h-3" /> Approachable & Warm
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-charcoal leading-[1.05]"
            >
              Casual Restaurant <br/><span className="text-terracotta">Websites</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-charcoal/70 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Designed for relaxed dining, friendly brands, and everyday customers. Ideal for cafes, burger joints, pizzerias, and local spots that want to attract more daily visitors effortlessly.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#pricing" className="px-8 py-4 bg-terracotta text-white rounded-2xl font-semibold text-lg tracking-wide hover:bg-[#e63f0d] hover:-translate-y-1 transition-all shadow-xl shadow-terracotta/30 inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                Start your website <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#style" className="px-8 py-4 bg-beige border-2 border-transparent text-charcoal rounded-2xl font-semibold text-lg hover:border-charcoal/10 hover:bg-beige-dark transition-all w-full sm:w-auto justify-center text-center">
                See How It Works
              </a>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — STYLE PRESENTATION */}
        <section id="style" className="py-24 bg-beige border-y border-charcoal/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Built to bring them in, <span className="text-terracotta italic">daily.</span>
              </h2>
              <p className="text-xl text-charcoal/70 leading-relaxed">
                We remove the friction between a hungry customer searching on their phone and them walking through your front door.
              </p>
            </motion.div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: <span className="text-2xl">👋</span>,
                  title: "Friendly & Inviting",
                  desc: "A warm design language that welcomes customers before they even smell the food."
                },
                {
                  icon: <span className="text-2xl">⚡️</span>,
                  title: "Action-Oriented",
                  desc: "Easy navigation structured around quick decisions: Find the menu, find the location."
                },
                {
                  icon: <span className="text-2xl">📱</span>,
                  title: "Menu Accessibility",
                  desc: "Clear, readable mobile menus so people can decide what to eat while on the go."
                },
                {
                  icon: <span className="text-2xl">🔄</span>,
                  title: "Drive Repeat Visits",
                  desc: "Built-in hooks that encourage locals to stop by more often and become regulars."
                }
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
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">Transparent <span className="text-terracotta">Pricing</span></h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                No hidden fees. Just clear plans designed to fit local favorites and growing hotspots.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {/* BASIC */}
              <motion.div {...fadeIn} className="bg-beige rounded-[2rem] p-8 lg:p-10 border border-charcoal/5 flex flex-col justify-between hover:border-terracotta/30 transition-colors">
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-1">Basic</h3>
                  <p className="text-charcoal/60 text-sm mb-6 font-medium">Starter Online Menu</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold tracking-tight">$250</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {["1 page website", "Delivery in 3–5 days", "Mobile optimized design", "Basic Local SEO Setup"].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-charcoal/80 font-medium">
                        <Check className="w-5 h-5 text-terracotta shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 mt-auto">
                  <a href="#basic-casual" className="block w-full py-3 px-6 rounded-xl border-2 border-charcoal/20 text-center font-bold text-charcoal hover:bg-charcoal/5 transition-colors">
                    View features
                  </a>
                  <button className="block w-full py-3 px-6 rounded-xl bg-charcoal text-white text-center font-bold hover:bg-charcoal-light transition-colors shadow-md">
                    Start Basic
                  </button>
                </div>
              </motion.div>

              {/* ADVANCED */}
              <motion.div {...fadeIn} className="bg-charcoal text-white rounded-[2rem] p-8 lg:p-10 border-4 border-terracotta relative flex flex-col justify-between transform lg:-translate-y-4 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terracotta text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-1 text-terracotta">Advanced</h3>
                  <p className="text-white/70 text-sm mb-6 font-medium">More Daily Customers</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold tracking-tight">$450</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {["Up to 3 pages", "Better SEO", "Animations", "Instagram integration", "Online Reservation System"].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/90 font-medium">
                        <Check className="w-5 h-5 text-terracotta shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 mt-auto">
                  <a href="#advanced-casual" className="block w-full py-3 px-6 rounded-xl border-2 border-white/20 text-center font-bold text-white hover:bg-white/10 transition-colors">
                    View features
                  </a>
                  <button className="block w-full py-3 px-6 rounded-xl bg-terracotta text-white text-center font-bold hover:bg-[#e63f0d] transition-colors shadow-[0_0_20px_rgba(255,76,26,0.4)]">
                    Start Advanced
                  </button>
                </div>
              </motion.div>

              {/* PREMIUM */}
              <motion.div {...fadeIn} className="bg-beige rounded-[2rem] p-8 lg:p-10 border border-charcoal/5 flex flex-col justify-between hover:border-terracotta/30 transition-colors relative overflow-hidden">
                <div className="absolute -right-8 top-8 rotate-45 bg-olive text-white px-10 py-1 text-xs font-bold uppercase tracking-wider">
                  Best Value
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-1">Premium</h3>
                  <p className="text-charcoal/60 text-sm mb-6 font-medium">The Neighborhood Boss</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold tracking-tight">$850</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {["Custom restaurant design", "Up to 5 pages", "SEO + AI Search Optimization", "Online reservation system", "Local search optimization", "Performance optimization"].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-charcoal/80 font-medium">
                        <Check className="w-5 h-5 text-olive shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 mt-auto">
                  <a href="#premium-casual" className="block w-full py-3 px-6 rounded-xl border-2 border-charcoal/20 text-center font-bold text-charcoal hover:bg-charcoal/5 transition-colors">
                    View features
                  </a>
                  <button className="block w-full py-3 px-6 rounded-xl bg-charcoal text-white text-center font-bold hover:bg-charcoal-light transition-colors shadow-md">
                    Start Premium
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
                  <p className="text-center font-medium text-charcoal/50 text-sm">Preview: Mobile Menu Layout</p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 mb-4 bg-white px-4 py-2 rounded-full font-bold text-terracotta text-sm shadow-sm">
                     <span className="w-6 h-6 rounded-full bg-terracotta/20 flex items-center justify-center">1</span> Starter Package
                  </div>
                  <h3 className="font-heading text-4xl font-bold mb-4">BASIC</h3>
                  <p className="text-lg text-charcoal/70 mb-8">
                    Get your menu, your hours, and your map online fast. Perfect for cafes and fast-casual spots that need a clean, highly functional digital home immediately.
                  </p>
                  
                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Smartphone className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">Mobile Optimized Design</h4>
                        <p className="text-sm text-charcoal/60">Because 80% of your customers are looking at your site on their phone while hungry.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Utensils className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">Super clear Menu Showcase</h4>
                        <p className="text-sm text-charcoal/60">No annoying PDFs. A real web menu that loads instantly and is easy to read.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><MapPin className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">Find Us Fast</h4>
                        <p className="text-sm text-charcoal/60">1-click calling and instant Google Maps routing so they never get lost.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Search className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">Basic Local SEO</h4>
                        <p className="text-sm text-charcoal/60 mb-2">We setup the basics so you show up when someone Googles things like:</p>
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
                     <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">2</span> Growth Package
                  </div>
                  <h3 className="font-heading text-4xl font-bold mb-4">ADVANCED</h3>
                  <p className="text-lg text-charcoal/70 mb-6">
                    Turn casual browsers into regular visitors. We add social proof, visual flair, and reservation tools that make visiting your restaurant the easiest choice of their day.
                  </p>
                  
                  <div className="bg-white p-4 rounded-xl mb-8 border-l-4 border-terracotta shadow-sm">
                    <p className="text-sm font-bold text-charcoal">Includes everything in Basic, PLUS:</p>
                  </div>

                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Globe className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">Simple Booking System</h4>
                        <p className="text-sm text-charcoal/60">Stop losing tables during busy hours. Let them book directly 24/7 without making a phone call.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Star className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">Customer Review Feed</h4>
                        <p className="text-sm text-charcoal/60">We stream your glowing 5-star Google reviews right onto the homepage to build instant trust.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Smartphone className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">Instagram Sync</h4>
                        <p className="text-sm text-charcoal/60">Keep your website looking fresh automatically by pulling your latest Instagram food pics directly into a gallery.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-charcoal text-white p-8 rounded-[2rem] shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                   <div className="flex justify-between items-center mb-6">
                     <h4 className="font-heading font-bold text-xl">Book a Table</h4>
                     <span className="bg-terracotta text-white text-xs px-2 py-1 rounded font-bold">Fast</span>
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
                  <h4 className="font-heading text-3xl font-bold mb-4">Be the Local Favorite</h4>
                  <p className="text-white/80 font-medium mb-8">
                    When someone visits your city and searches "where to eat nearby", we make sure AI assistants and search algorithms point them straight to your door.
                  </p>
                  <div className="flex flex-col gap-3">
                     <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 flex gap-3 text-sm font-medium">
                       <Check className="w-5 h-5 text-white shrink-0" /> AI-Ready Menu Format
                     </div>
                     <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 flex gap-3 text-sm font-medium">
                       <Check className="w-5 h-5 text-white shrink-0" /> Neighborhood Domination SEO
                     </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="inline-flex items-center gap-2 mb-4 bg-charcoal px-4 py-2 rounded-full font-bold text-white text-sm shadow-md">
                     <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">3</span> Authority Package
                  </div>
                  <h3 className="font-heading text-4xl font-bold mb-4">PREMIUM</h3>
                  <p className="text-lg text-charcoal/70 mb-6">
                    A custom-crafted digital machine designed to make you the undisputed neighborhood favorite. We use smart tech so finding your restaurant is completely frictionless.
                  </p>
                  
                  <div className="bg-white p-4 rounded-xl mb-8 border-l-4 border-charcoal shadow-sm">
                    <p className="text-sm font-bold text-charcoal">Includes everything in Advanced, PLUS:</p>
                  </div>

                  <ul className="space-y-5">
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Sparkles className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">AI Chatbot Assistant</h4>
                        <p className="text-sm text-charcoal/60">An automated helper that answers questions like "Are you dog friendly?" and "Do you have gluten-free options?" instantly.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Search className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">AI Search & Geo Optimization</h4>
                        <p className="text-sm text-charcoal/60">
                          We format your website so that when locals ask ChatGPT or Google "What's a good casual spot around here?", your restaurant is suggested as the top answer.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1 bg-white p-2 rounded-lg shadow-sm"><Globe className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-bold text-charcoal mb-1">Auto-Translation</h4>
                        <p className="text-sm text-charcoal/60">Automatically displays the menu in the tourist's native language, completely removing the ordering barrier.</p>
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
                Get more customers with a <br/><span className="underline decoration-4 underline-offset-8 decoration-white/30">better website.</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto mb-10">
                Join the local favorites who modernized their presence and watched their walk-in traffic multiply.
              </p>
              <button className="px-10 py-5 bg-charcoal text-white rounded-2xl font-bold tracking-wide hover:bg-charcoal-light transition-all hover:-translate-y-1 inline-flex items-center gap-2 text-lg shadow-xl">
                Start your website <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Simple Footer just for the standalone page */}
      <footer className="bg-charcoal pt-16 pb-8 text-center text-beige/50 text-sm">
         <p>© {new Date().getFullYear()} RestoSites. Built for local favorites.</p>
      </footer>
    </div>
  );
}
