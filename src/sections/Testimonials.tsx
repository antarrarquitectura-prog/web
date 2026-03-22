import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'María Valencia',
    role: 'Propietaria, Casa Valencia',
    content:
      'El equipo de Antarr Arquitectos superó todas nuestras expectativas. Transformaron nuestra visión en una realidad hermosa y funcional. Su atención al detalle y profesionalismo son incomparables.',
    rating: 5,
    project: 'Casa Valencia',
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Dueño, Restaurante Los Patos',
    content:
      'Gracias al rediseño de Antarr, nuestro restaurante aumentó su capacidad en un 35% y la afluencia de clientes creció un 25%. El espacio es ahora más funcional y atractivo.',
    rating: 5,
    project: 'Restaurante Los Patos',
  },
  {
    id: 3,
    name: 'Ana Rodríguez',
    role: 'Directora, Spa Infantil Love Kids',
    content:
      'Diseñaron un espacio seguro y acogedor para nuestros pequeños clientes. Cada detalle fue pensado para el bienestar de los niños. Excelente trabajo y dedicación.',
    rating: 5,
    project: 'Spa Infantil Love Kids',
  },
];

export default function Testimonials() {
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

  return (
    <section
      id="testimonios"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-warm-light"
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
                Testimonios
              </span>
              <span className="w-8 h-[1px] bg-earth-400" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-warm-dark tracking-wide leading-tight mb-4">
              Lo que Dicen Nuestros Clientes
            </h2>
            
            {/* Google Rating Highlight */}
            <div
              className={`inline-flex flex-col items-center mt-6 transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-current"
                    />
                  ))}
                </div>
                <span className="font-display text-2xl text-warm-dark tracking-wide">
                  5.0
                </span>
              </div>
              <p className="text-warm-dark/50 font-body text-sm">
                Calificación en Google Business · +20 proyectos exitosos
              </p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`relative bg-white rounded-sm border border-earth-200/50 p-6 sm:p-8 transition-all duration-700 hover:border-earth-400/30 hover:shadow-soft ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-earth-200 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-warm-dark/70 font-body leading-relaxed mb-6 text-sm">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-earth-200/50 pt-4">
                  <p className="text-warm-dark font-body font-medium text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-warm-dark/50 font-body text-xs">
                    {testimonial.role}
                  </p>
                  <p className="text-earth-600 font-body text-xs mt-1">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
