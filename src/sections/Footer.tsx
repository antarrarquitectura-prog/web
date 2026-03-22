import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

const navLinks = [
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto', href: '#contacto' },
  { name: 'FAQ', href: '#faq' },
];

const legalLinks = [
  { name: 'Política de Privacidad', href: '#' },
  { name: 'Aviso Legal', href: '#' },
  { name: 'Política de Cookies', href: '#' },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/antarrarquitectos' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/antarrarquitectos' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/antarrarquitectos' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/antarrarquitectos' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-white border-t border-earth-200/50">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                className="inline-block mb-6"
              >
                <span className="font-display text-xl tracking-[0.15em] text-warm-dark">
                  ANTARR ARQUITECTOS
                </span>
              </a>
              <p className="text-warm-dark/60 font-body leading-relaxed mb-6 max-w-md text-sm">
                Estudio de arquitectura singular y diseño de interiores en Perú.
                Fusionamos creatividad y funcionalidad para crear espacios que
                transforman la manera de vivir y trabajar.
              </p>
              {/* Social Links */}
              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-sm bg-warm-light border border-earth-200/50 flex items-center justify-center hover:border-earth-400/30 hover:bg-earth-50 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-warm-dark/50 group-hover:text-earth-600 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="font-display text-sm text-warm-dark tracking-[0.1em] uppercase mb-6">
                Navegación
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-warm-dark/60 hover:text-earth-600 font-body text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-display text-sm text-warm-dark tracking-[0.1em] uppercase mb-6">
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-warm-dark/60 hover:text-earth-600 font-body text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6 border-t border-earth-200/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-warm-dark/40 font-body text-xs text-center sm:text-left">
            © 2026 Antarr Arquitectos. Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-warm-dark/40 hover:text-earth-600 font-body text-xs transition-colors duration-300"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
