import { useEffect, useRef, useState } from 'react';
import { Home, Building, TreePine, PenTool, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Diseño Residencial',
    description:
      'Creamos hogares únicos que reflejan tu estilo de vida. Desde casas unifamiliares hasta condominios, cada proyecto es una obra maestra de funcionalidad y estética.',
    features: ['Viviendas unifamiliares', 'Condominios', 'Departamentos', 'Remodelaciones'],
  },
  {
    icon: Building,
    title: 'Diseño de Interiores Comerciales',
    description:
      'Transformamos espacios comerciales en experiencias memorables. Optimizamos la funcionalidad y el flujo para maximizar el retorno de inversión.',
    features: ['Restaurantes y bares', 'Tiendas retail', 'Oficinas', 'Hoteles'],
  },
  {
    icon: TreePine,
    title: 'Urbanismo y Paisajismo',
    description:
      'Diseñamos espacios públicos y privados que integran la naturaleza con la arquitectura, creando ambientes sostenibles y habitables.',
    features: ['Parques y plazas', 'Master planning', 'Paisajismo', 'Espacios públicos'],
  },
  {
    icon: PenTool,
    title: 'Estrategias Sostenibles',
    description:
      'Implementamos prácticas de arquitectura bioclimática y sostenible para reducir el impacto ambiental y mejorar el confort térmico.',
    features: ['Diseño bioclimático', 'Eficiencia energética', 'Materiales sostenibles', 'Certificaciones LEED'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-white"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="w-8 h-[1px] bg-earth-400" />
              <span className="text-earth-500 font-body text-xs tracking-[0.2em] uppercase">
                Servicios
              </span>
              <span className="w-8 h-[1px] bg-earth-400" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-warm-dark tracking-wide leading-tight mb-4">
              Servicios Integrales de Arquitectura
            </h2>
            <p className="text-warm-dark/60 font-body max-w-2xl mx-auto text-sm">
              Ofrecemos soluciones completas que abarcan desde la conceptualización
              hasta la entrega final de tu proyecto.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group relative bg-warm-light rounded-sm border border-earth-200/50 overflow-hidden hover-lift cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
                onClick={scrollToContact}
              >
                {/* Content */}
                <div className="relative p-8 sm:p-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-sm bg-earth-100 flex items-center justify-center mb-6 group-hover:bg-earth-200 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-earth-600" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl text-warm-dark tracking-wide mb-4 group-hover:text-earth-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-warm-dark/60 font-body leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-white text-warm-dark/60 text-xs font-body rounded-full border border-earth-200/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-earth-600 font-body text-xs tracking-[0.1em] uppercase group-hover:text-earth-700 transition-colors duration-300">
                    <span>Solicitar información</span>
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border border-earth-400/0 group-hover:border-earth-400/30 rounded-sm transition-colors duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-warm-dark/60 font-body mb-4 text-sm">
              ¿Tienes un proyecto en mente?
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center text-earth-600 hover:text-earth-700 font-body text-xs tracking-[0.1em] uppercase transition-colors duration-300"
            >
              <span>Agenda una consulta gratuita</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
