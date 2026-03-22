import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-effect-light border-b border-earth-200/50 shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center space-x-3"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className={`font-display text-lg tracking-[0.15em] font-medium transition-colors duration-300 ${
                isScrolled ? 'text-warm-dark' : 'text-warm-dark'
              }`}>
                ANTARR
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-xs font-body font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-warm-dark/70 hover:text-earth-600' 
                      : 'text-warm-dark/70 hover:text-earth-600'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection('#contacto')}
                className="bg-earth-500 hover:bg-earth-600 text-white font-body font-medium text-xs tracking-[0.15em] uppercase px-6 py-2 rounded-sm transition-all duration-300"
              >
                Cotizar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-warm-dark p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-warm-light/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="absolute top-20 left-0 right-0 bg-white/95 border-b border-earth-200/50 p-6">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-body font-medium tracking-[0.15em] uppercase text-warm-dark/70 hover:text-earth-600 transition-colors duration-300 text-left py-2"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contacto')}
              className="bg-earth-500 hover:bg-earth-600 text-white font-body font-medium text-xs tracking-[0.15em] uppercase px-6 py-3 rounded-sm mt-4 w-full"
            >
              Cotizar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
