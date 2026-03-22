import { useEffect, useRef, useState } from 'react';
import { Award, Users, Building2, Leaf } from 'lucide-react';

const stats = [
  { icon: Building2, value: '+20', label: 'Proyectos Exitosos' },
  { icon: Users, value: '+4', label: 'Años de Experiencia' },
  { icon: Award, value: '5.0', label: 'Calificación Google' },
  { icon: Leaf, value: '100%', label: 'Compromiso Sostenible' },
];

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-warm-light"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Column */}
            <div
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src="/assets/images/edgardo-rojas.png"
                    alt="Edgardo Rojas - Director Creativo"
                    className="w-full h-[500px] lg:h-[600px] object-cover object-top grayscale"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Name Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-sm p-6 border border-earth-200/50">
                  <h3 className="font-display text-xl text-warm-dark tracking-wide mb-1">
                    Edgardo Rojas
                  </h3>
                  <p className="text-earth-600 font-body text-xs tracking-[0.15em] uppercase">
                    Director Creativo & Arquitecto
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-earth-300/50 rounded-sm -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-earth-200/50 rounded-sm -z-10" />
              </div>
            </div>

            {/* Content Column */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Section Label */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-8 h-[1px] bg-earth-400" />
                <span className="text-earth-500 font-body text-xs tracking-[0.2em] uppercase">
                  Nosotros
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-warm-dark tracking-wide leading-tight mb-6">
                Nuestra Visión: Más Allá de los Planos
              </h2>

              {/* Description */}
              <div className="space-y-4 text-warm-dark/70 font-body leading-relaxed mb-8 text-sm">
                <p>
                  Antarr es un estudio de arquitectura reconocido por su enfoque
                  innovador y la creación de proyectos arquitectónicos de alta
                  calidad. Nuestro equipo combina funcionalidad y estilo en cada
                  diseño, destacándose por el dominio en software de diseño,
                  modelado 3D y renderizado.
                </p>
                <p>
                  Como Director Creativo, lidero un equipo apasionado que
                  mantiene un compromiso firme con la sostenibilidad y la
                  arquitectura consciente del medio ambiente. Desarrollamos
                  estrategias proyectuales que integran prácticas sostenibles en
                  todos nuestros proyectos.
                </p>
                <p>
                  Con más de 5 años de experiencia en asesorías, proyección e
                  innovación arquitectónica, me especializo en la implementación
                  de proyectos comerciales, residenciales, culturales y
                  educativos.
                </p>
              </div>

              {/* Philosophy Quote */}
              <div className="border-l-2 border-earth-400 pl-6 mb-10">
                <p className="font-display text-lg text-warm-dark tracking-wide italic">
                  "Diseño de calidad para una vida plena."
                </p>
                <p className="text-earth-500 font-body text-xs tracking-[0.15em] uppercase mt-2">
                  — Nuestra filosofía
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center transition-all duration-700 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <stat.icon className="w-5 h-5 text-earth-500 mx-auto mb-2" />
                    <p className="font-display text-xl text-warm-dark tracking-wide mb-1">
                      {stat.value}
                    </p>
                    <p className="text-warm-dark/50 font-body text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
