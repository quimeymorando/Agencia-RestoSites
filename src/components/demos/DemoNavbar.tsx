import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LangDropdown } from '../Navbar';

export type DemoTheme = 'elegante' | 'casual' | 'moderno';

interface DemoNavbarProps {
  theme: DemoTheme;
}

export const DemoNavbar = ({ theme }: DemoNavbarProps) => {
  const { t } = useLanguage();

  const getNavClasses = () => {
    switch (theme) {
      case 'elegante':
        return 'bg-charcoal/70 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.1)]';
      case 'casual':
        return 'bg-white/80 backdrop-blur-xl border-b border-terracotta/10 shadow-sm';
      case 'moderno':
        return 'bg-[#0A0A0A]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300';
    }
  };

  const Logo = () => {
    switch (theme) {
      case 'elegante':
        return (
          <span className="font-heading font-bold text-2xl tracking-tighter drop-shadow-sm text-beige">
            Resto<span className="text-terracotta">Sites</span>.
          </span>
        );
      case 'casual':
        return (
          <span className="font-heading font-bold text-2xl tracking-tighter text-charcoal">
            Resto<span className="text-terracotta">Sites</span>.
          </span>
        );
      case 'moderno':
        return (
          <span className="font-heading font-black text-2xl tracking-tighter uppercase text-white">
            RESTO<span className="text-terracotta">SITES</span>
            <span className="text-terracotta animate-pulse">.</span>
          </span>
        );
    }
  };

  const BackButton = () => {
    switch (theme) {
      case 'elegante':
        return (
          <Link 
            to="/" 
            className="flex items-center gap-2 text-sm font-medium text-beige/80 hover:text-white transition-colors group bg-white/10 px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/20 backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">{t.demo_back_home}</span>
          </Link>
        );
      case 'casual':
        return (
          <Link 
            to="/" 
            className="flex items-center gap-2 text-sm font-medium text-charcoal hover:text-terracotta transition-colors group bg-beige/50 px-5 py-2.5 rounded-full hover:bg-terracotta/10 backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">{t.demo_back_home}</span>
          </Link>
        );
      case 'moderno':
        return (
          <Link 
            to="/" 
            className="relative overflow-hidden group px-6 py-2.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 transition-colors flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <ArrowLeft className="w-4 h-4 relative z-10 group-hover:-translate-x-1 transition-transform" />
            <span className="relative z-10 font-bold uppercase tracking-widest text-[10px] sm:text-xs hidden sm:inline">{t.moderno_back}</span>
          </Link>
        );
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${getNavClasses()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Logo />
        </Link>
        <div className="flex items-center gap-3">
          <LangDropdown theme={theme === 'casual' ? 'light' : 'dark'} />
          <BackButton />
        </div>
      </div>
    </nav>
  );
};
