import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PerfectFor } from './components/PerfectFor';
import { Benefits } from './components/Benefits';
import { Demos } from './components/Demos';
import { Reassurance } from './components/Reassurance';
import { BuiltFor } from './components/BuiltFor';
import { Pricing } from './components/Pricing';
import { HowItWorks } from './components/HowItWorks';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonial } from './components/Testimonial';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LanguageBanner } from './components/LanguageBanner';
import { LanguageProvider } from './context/LanguageContext';

function SitePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <PerfectFor />
        <Benefits />
        <Demos />
        <Reassurance />
        <BuiltFor />
        <Pricing />
        <HowItWorks />
        <BeforeAfter />
        <Testimonial />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<SitePage />} />
          <Route path="/es/*" element={<SitePage />} />
          <Route path="/pt/*" element={<SitePage />} />
          {/* Fallback */}
          <Route path="*" element={<SitePage />} />
        </Routes>
        {/* Banner de sugerencia de idioma (primer acceso) */}
        <LanguageBanner />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
