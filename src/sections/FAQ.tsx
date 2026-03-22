import { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '¿Dónde se ubican? ¿Atienden proyectos fuera de Chiclayo?',
    answer:
      'Nuestro estudio está ubicado en Chiclayo, Perú, pero atendemos proyectos a nivel nacional e internacional. Contamos con experiencia trabajando de forma remota y coordinando equipos locales en diferentes ubicaciones. La distancia no es una limitación para crear espacios excepcionales.',
  },
  {
    question: '¿Realizan la ejecución del proyecto o solo el diseño?',
    answer:
      'Ofrecemos servicios integrales que incluyen tanto el diseño arquitectónico como la supervisión de la ejecución. Coordinamos con contratistas y proveedores confiables para asegurar que el proyecto se construya según las especificaciones del diseño. También podemos trabajar solo en la etapa de diseño si el cliente ya cuenta con un equipo de construcción.',
  },
  {
    question: '¿Cuánto tardan en terminar el diseño de un proyecto?',
    answer:
      'Los tiempos varían según la complejidad y escala del proyecto. Un diseño residencial típico toma entre 4 a 8 semanas, mientras que proyectos comerciales más grandes pueden requerir de 8 a 16 semanas. Durante la primera reunión, proporcionamos un cronograma detallado con hitos específicos para tu proyecto.',
  },
  {
    question: '¿Cuáles son los entregables del proyecto de diseño?',
    answer:
      'Nuestros entregables incluyen: planos arquitectónicos completos, modelos 3D y renders fotorealistas, especificaciones técnicas de materiales y acabados, planos de instalaciones (eléctricas, sanitarias, etc.), y documentación necesaria para trámites municipales. También proporcionamos un manual de mantenimiento para proyectos residenciales.',
  },
  {
    question: '¿Cuál es el costo por el diseño arquitectónico?',
    answer:
      'El costo del diseño se calcula en función del tipo y tamaño del proyecto, así como de la complejidad del diseño. Trabajamos con honorarios porcentuales sobre el costo de construcción estimado o con tarifas fijas para proyectos específicos. Te invitamos a agendar una consulta gratuita donde evaluaremos tus necesidades y te proporcionaremos una cotización detallada sin compromiso.',
  },
];

export default function FAQ() {
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
      id="faq"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-white"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
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
                FAQ
              </span>
              <span className="w-8 h-[1px] bg-earth-400" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-warm-dark tracking-wide leading-tight mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-warm-dark/60 font-body max-w-2xl mx-auto text-sm">
              Respuestas a las dudas más comunes sobre nuestros servicios de
              arquitectura y diseño.
            </p>
          </div>

          {/* Accordion */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-warm-light border border-earth-200/50 rounded-sm px-6 data-[state=open]:border-earth-400/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left font-body text-warm-dark hover:text-earth-600 py-5 text-sm [&[data-state=open]>svg]:text-earth-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-warm-dark/60 font-body leading-relaxed pb-5 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional CTA */}
          <div
            className={`mt-12 text-center transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-warm-dark/60 font-body mb-4 text-sm">
              ¿Tienes otras preguntas?
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center text-earth-600 hover:text-earth-700 font-body text-xs tracking-[0.1em] uppercase transition-colors duration-300"
            >
              <span>Contáctanos directamente</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
