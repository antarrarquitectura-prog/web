import { useEffect, useRef, useState } from 'react';
import { MessageSquare, MapPin, FileText, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Contáctanos',
    description:
      'Inicia la conversación. Cuéntanos sobre tu visión, necesidades y expectativas. Agendamos una primera reunión para conocernos y entender tu proyecto.',
    details: ['Consulta inicial gratuita', 'Análisis de necesidades', 'Definición de objetivos'],
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Visita y Diagnóstico',
    description:
      'Visitamos el sitio para evaluar las condiciones del terreno o espacio existente. Realizamos un análisis completo de posibilidades y restricciones.',
    details: ['Levantamiento topográfico', 'Análisis de contexto', 'Estudio de viabilidad'],
  },
  {
    number: '03',
    icon: FileText,
    title: 'Diseño y Cotización',
    description:
      'Desarrollamos propuestas conceptuales con modelos 3D y renders. Presentamos la cotización detallada con cronograma y entregables.',
    details: ['Propuestas conceptuales', 'Modelado 3D y renders', 'Cotización detallada'],
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Ejecución y Entrega',
    description:
      'Coordinamos la ejecución del proyecto con proveedores y contratistas. Supervisamos cada etapa hasta la entrega final y puesta en marcha.',
    details: ['Gestión de obra', 'Supervisión técnica', 'Entrega final'],
  },
];

export default function Process() {
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
      id="proceso"
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
                Metodología
              </span>
              <span className="w-8 h-[1px] bg-earth-400" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-warm-dark tracking-wide leading-tight mb-4">
              Cómo Trabajamos: Tu Visión, Hecha Realidad
            </h2>
            <p className="text-warm-dark/60 font-body max-w-2xl mx-auto text-sm">
              Un proceso estructurado y transparente que garantiza resultados
              excepcionales en cada proyecto.
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-[1px]">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-earth-300 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  {/* Step Card */}
                  <div className="relative bg-warm-light rounded-sm border border-earth-200/50 p-6 sm:p-8 h-full group hover:border-earth-400/30 transition-colors duration-300">
                    {/* Number */}
                    <div className="absolute -top-3 left-6">
                      <span className="font-display text-4xl text-earth-200 group-hover:text-earth-300 transition-colors duration-300">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-sm bg-earth-100 flex items-center justify-center mb-6 mt-4 group-hover:bg-earth-200 transition-colors duration-300">
                      <step.icon className="w-5 h-5 text-earth-600" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-lg text-warm-dark tracking-wide mb-3 group-hover:text-earth-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-warm-dark/60 font-body text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center text-warm-dark/40 font-body text-xs"
                        >
                          <span className="w-1 h-1 bg-earth-400 rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-3 z-10">
                      <div className="w-6 h-6 rounded-full bg-earth-100 flex items-center justify-center">
                        <span className="text-earth-500 text-xs">→</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Note */}
          <div
            className={`mt-16 text-center transition-all duration-1000 delay-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center space-x-3 bg-earth-50 rounded-sm px-6 py-4 border border-earth-200/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-warm-dark/70 font-body text-sm">
                Actualmente aceptando nuevos proyectos para el{' '}
                <span className="text-earth-600 font-medium">2026</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
