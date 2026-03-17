import { } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Star, MapPin, ChefHat, Sparkles, Smartphone, Search, Utensils, Clock, Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function DemoElegante() {
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/70 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group text-beige">
            <span className="font-heading font-bold text-2xl tracking-tighter drop-shadow-sm">
              Resto<span className="text-terracotta">Sites</span>.
            </span>
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-sm font-medium text-beige/80 hover:text-white transition-colors group bg-white/10 px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/20 backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-20">
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-charcoal text-beige overflow-hidden">
          {/* Subtle background gradient/noise could go here */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-charcoal/90" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-beige/20 text-xs tracking-widest uppercase mb-8 text-beige/80">
              <Star className="w-3 h-3 text-terracotta" /> Premium Collection
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-6xl md:text-8xl font-light tracking-tight mb-6 leading-[1.1]"
            >
              Elegant Restaurant <br/><span className="italic text-terracotta">Websites</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-beige/70 font-light max-w-2xl mx-auto mb-12"
            >
              Designed for fine dining, premium experiences, and high-end restaurant brands that demand perfection.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#pricing" className="px-8 py-4 bg-terracotta text-white rounded-full font-medium tracking-wide hover:bg-[#e63f0d] transition-all hover:scale-105 inline-flex items-center gap-2 w-full sm:w-auto justify-center">
                Start your website <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#style" className="px-8 py-4 bg-transparent border border-beige/30 text-beige rounded-full font-medium tracking-wide hover:bg-beige/10 transition-all w-full sm:w-auto justify-center text-center">
                Explore Style
              </a>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — STYLE PRESENTATION */}
        <section id="style" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center mb-24">
              <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tight mb-6">
                The Art of <span className="italic">First Impressions</span>
              </h2>
              <p className="text-xl text-charcoal/60 font-light leading-relaxed">
                This style is ideal for luxury restaurants, wine bars, and gourmet dining experiences that want to elevate their brand and attract high-paying customers.
              </p>
            </motion.div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: <Sparkles className="w-6 h-6 stroke-1" />,
                  title: "Sophisticated & Minimal",
                  desc: "Stripped of clutter. Every element serves a purpose, allowing your culinary art to shine."
                },
                {
                  icon: <Star className="w-6 h-6 stroke-1" />,
                  title: "Visual Storytelling",
                  desc: "Large, immersive imagery that transports the visitor directly to your dining room."
                },
                {
                  icon: <Utensils className="w-6 h-6 stroke-1" />,
                  title: "Focus on Atmosphere",
                  desc: "We design specifically to convey the exclusivity and ambiance of your physical location."
                },
                {
                  icon: <ArrowUpRight className="w-6 h-6 stroke-1" />,
                  title: "Pricing Power",
                  desc: "A high-end digital presence directly increases the perceived value of your menu."
                }
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
              <h2 className="font-heading text-4xl md:text-5xl font-light tracking-tight mb-6">Investment in <span className="italic">Excellence</span></h2>
              <p className="text-xl text-charcoal/60 font-light max-w-2xl mx-auto">
                Choose the perfect foundation for your culinary brand.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* BASIC */}
              <motion.div {...fadeIn} className="bg-white rounded-3xl p-8 lg:p-10 border border-charcoal/10 flex flex-col justify-between hover:shadow-xl transition-shadow">
                <div>
                  <h3 className="font-heading text-2xl font-medium mb-2">Basic</h3>
                  <p className="text-charcoal/60 text-sm mb-6">Online Presence Starter</p>
                  <div className="mb-8">
                    <span className="text-5xl font-light tracking-tight">$250</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {["1 page website", "Delivery in 3–5 days", "Mobile optimized design", "Basic Local SEO Setup"].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-charcoal/80">
                        <Check className="w-5 h-5 text-olive shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 mt-auto">
                  <a href="#basic-elegant" className="block w-full py-3 px-6 rounded-full border border-charcoal text-center font-medium hover:bg-charcoal hover:text-white transition-colors">
                    View Details
                  </a>
                  <button className="block w-full py-3 px-6 rounded-full bg-charcoal text-white text-center font-medium hover:bg-charcoal-light transition-colors">
                    Start Basic
                  </button>
                </div>
              </motion.div>

              {/* ADVANCED */}
              <motion.div {...fadeIn} className="bg-charcoal text-beige rounded-3xl p-8 lg:p-10 border border-charcoal relative flex flex-col justify-between transform lg:-translate-y-4 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terracotta text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-medium mb-2">Advanced</h3>
                  <p className="text-beige/60 text-sm mb-6">Conversion Focused Website</p>
                  <div className="mb-8">
                    <span className="text-5xl font-light tracking-tight">$450</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {["Up to 3 pages", "Better SEO", "Animations", "Instagram integration", "Online Reservation System"].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-beige/90">
                        <Check className="w-5 h-5 text-terracotta shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 mt-auto">
                  <a href="#advanced-elegant" className="block w-full py-3 px-6 rounded-full border border-beige/30 text-center font-medium hover:bg-beige/10 transition-colors">
                    View Details
                  </a>
                  <button className="block w-full py-3 px-6 rounded-full bg-terracotta text-white text-center font-medium hover:bg-[#e63f0d] transition-colors">
                    Start Advanced
                  </button>
                </div>
              </motion.div>

              {/* PREMIUM */}
              <motion.div {...fadeIn} className="bg-white rounded-3xl p-8 lg:p-10 border border-charcoal/10 flex flex-col justify-between hover:shadow-xl transition-shadow relative overflow-hidden">
                <div className="absolute -right-12 top-8 rotate-45 bg-olive text-white px-12 py-1 text-xs font-bold uppercase tracking-widest">
                  Best Value
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-medium mb-2">Premium</h3>
                  <p className="text-charcoal/60 text-sm mb-6">Growth Engine</p>
                  <div className="mb-8">
                    <span className="text-5xl font-light tracking-tight">$850</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {["Custom restaurant design", "Up to 5 pages", "SEO + AI Search Optimization", "Online reservation system", "Local search optimization", "Performance optimization"].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-charcoal/80">
                        <Check className="w-5 h-5 text-olive shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 mt-auto">
                  <a href="#premium-elegant" className="block w-full py-3 px-6 rounded-full border border-charcoal text-center font-medium hover:bg-charcoal hover:text-white transition-colors">
                    View Details
                  </a>
                  <button className="block w-full py-3 px-6 rounded-full bg-charcoal text-white text-center font-medium hover:bg-charcoal-light transition-colors">
                    Start Premium
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
                  <h3 className="font-heading text-4xl font-light mb-4">BASIC <span className="text-charcoal/40 block text-2xl mt-2">Online Presence Starter</span></h3>
                  <p className="text-lg text-charcoal/60 mb-8 leading-relaxed">
                    The perfect stepping stone for restaurants that need a beautiful, functional website without complex features. Get your menu and location online swiftly.
                  </p>
                  
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="mt-1"><Smartphone className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">Mobile Optimized Design</h4>
                        <p className="text-sm text-charcoal/60">Flawless experience on any device, ensuring your customers can see your menu clearly on their phones.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><Utensils className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">Menu Showcase</h4>
                        <p className="text-sm text-charcoal/60">A beautifully formatted, easy-to-read menu section that highlights your best dishes.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><MapPin className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">Contact & Location</h4>
                        <p className="text-sm text-charcoal/60">Clear directions, opening hours, and one-tap calling features for mobile users.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><Clock className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">Fast Loading Website</h4>
                        <p className="text-sm text-charcoal/60">Performance tuned so your customers don't wait to see your offerings.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1"><Search className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">Basic Local SEO Setup</h4>
                        <p className="text-sm text-charcoal/60 mb-3">Foundational setup to help you appear when people search locally. Examples of targeting:</p>
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
                        <span className="font-heading text-lg">Reserve a Table</span>
                        <div className="w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center"><Check className="w-4 h-4 text-terracotta" /></div>
                     </div>
                     <div className="space-y-3">
                        <div className="w-full h-10 bg-charcoal rounded flex items-center px-4 text-sm text-beige/40 border border-beige/10">Date & Time</div>
                        <div className="w-full h-10 bg-charcoal rounded flex items-center px-4 text-sm text-beige/40 border border-beige/10">Guests</div>
                        <div className="w-full h-12 bg-terracotta rounded mt-4"></div>
                     </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta/10 text-terracotta mb-8">
                    <span className="font-heading text-2xl font-bold">2</span>
                  </div>
                  <h3 className="font-heading text-4xl font-light mb-4">ADVANCED <span className="text-charcoal/40 block text-2xl mt-2">Conversion Focused Website</span></h3>
                  <p className="text-lg text-charcoal/60 mb-8 leading-relaxed">
                    Designed not just to be seen, but to convert visitors into booked tables. Proven to improve reservation conversion rates by <strong className="text-terracotta font-medium">30–40%</strong> compared to basic sites.
                  </p>
                  
                  <div className="bg-beige/50 p-6 rounded-2xl mb-8 border border-charcoal/5">
                    <p className="text-sm font-medium text-charcoal mb-2">Includes everything in Basic, PLUS:</p>
                  </div>

                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="mt-1"><Globe className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-medium mb-1">Online Reservation System</h4>
                        <p className="text-sm text-charcoal/60">Eliminate friction. Allow customers to book 24/7 directly from your site, reducing phone calls and missed opportunities.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><ChefHat className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-medium mb-1">Interactive Menu Experience</h4>
                        <p className="text-sm text-charcoal/60">Menus that categorise beautifully, complete with imagery, dietaries, and special highlights.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><Star className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-medium mb-1">Customer Reviews Integration</h4>
                        <p className="text-sm text-charcoal/60">Build trust instantly by displaying your best Google or TripAdvisor reviews dynamically.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><Search className="w-5 h-5 text-terracotta" /></div>
                      <div>
                        <h4 className="font-medium mb-1">Local SEO Optimization</h4>
                        <p className="text-sm text-charcoal/60">Advanced meta-tagging and schema markup so Google understands exactly what you serve and where.</p>
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
                  <h3 className="font-heading text-4xl font-light mb-4">PREMIUM <span className="text-charcoal/40 block text-2xl mt-2">Growth Engine</span></h3>
                  <p className="text-lg text-charcoal/60 mb-8 leading-relaxed">
                    The ultimate digital presence for elite restaurants. We leverage the latest web technologies and AI optimization to ensure you dominate your local market.
                  </p>
                  
                  <div className="bg-beige/50 p-6 rounded-2xl mb-8 border border-charcoal/5">
                    <p className="text-sm font-medium text-charcoal mb-2">Includes everything in Advanced, PLUS:</p>
                  </div>

                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="mt-1"><Sparkles className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">AI Table Booking Assistant</h4>
                        <p className="text-sm text-charcoal/60">An intelligent chatbot that can answer menu questions, operating hours, and take bookings automatically.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1"><Globe className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">GEO + SEO Optimization</h4>
                        <p className="text-sm text-charcoal/60 mb-2">
                          <strong>Geographical Targeting:</strong> We structure your site to dominate searches in specific neighborhoods, postcodes, and surrounding areas, capturing tourist and local traffic effectively.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1"><Search className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">AI Search Engine Readiness</h4>
                        <p className="text-sm text-charcoal/60">
                          People now ask ChatGPT and Perplexity for "the best romantic dinner spot nearby". We optimize your website content (Semantic SEO) so AI engines recommend <span className="italic">your</span> restaurant as the definitive answer.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="mt-1"><ArrowUpRight className="w-5 h-5 text-olive" /></div>
                      <div>
                        <h4 className="font-medium mb-1">Multi-language & Smart Conversion</h4>
                        <p className="text-sm text-charcoal/60">Automatically serve the site in the user's native language. Heatmap-tested layouts that guide eyes directly to high-margin items and bookings.</p>
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
                     <h4 className="font-heading text-3xl text-beige mb-4 shadow-sm">Dominate The Digital Dining Scene</h4>
                     <p className="text-beige/80 text-sm max-w-sm">
                       Ensure your establishment is the very first recommendation when high-intent diners search for premium experiences in your city.
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
                Ready to elevate <br/><span className="italic text-terracotta">your restaurant?</span>
              </h2>
              <p className="text-xl text-beige/70 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                Transform your digital presence into a powerful growth engine. Increase your visibility, attract more guests, and elevate your brand's prestigious reputation today.
              </p>
              <button className="px-10 py-5 bg-terracotta text-white rounded-full font-medium tracking-wide hover:bg-[#e63f0d] transition-all hover:scale-105 inline-flex items-center gap-2 text-lg shadow-[0_0_40px_rgba(255,76,26,0.3)]">
                Start your website <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      
      {/* Simple Footer just for the standalone page */}
      <footer className="bg-charcoal border-t border-beige/10 py-8 text-center text-beige/40 text-sm">
         <p>© {new Date().getFullYear()} RestoSites. All rights reserved.</p>
      </footer>
    </div>
  );
}
