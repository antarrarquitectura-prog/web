import { useEffect, useRef, useState } from 'react';
import { MapPin, Maximize2, ArrowUpRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    name: 'Restaurante Los Patos',
    category: 'Diseño Comercial',
    location: 'Chiclayo, Perú',
    description:
      'Rediseño completo de un restaurante tradicional, logrando la optimización de la espacialidad y funcionalidad del local comercial en un 35%, con un incremento de 25% en la afluencia de clientes.',
    impact: ['+35% optimización espacial', '+25% incremento clientes', 'Diseño bioclimático'],
    image: '/assets/videos/proyecto-restaurante.mp4',
    type: 'video',
  },
  {
    id: 2,
    name: 'Casa Sandra',
    category: 'Diseño Residencial',
    location: 'Chiclayo, Perú',
    description:
      'Vivienda unifamiliar diseñada con estrategias bioclimáticas para zonas cálidas, logrando un 30% de mayor confort térmico mediante ventilación cruzada y materiales térmicos.',
    impact: ['+30% confort térmico', 'Arquitectura bioclimática', 'Eficiencia energética'],
    image: '/assets/videos/proyecto-restaurante.mp4',
    type: 'video',
  },
  {
    id: 3,
    name: 'Casa Valencia',
    category: 'Diseño Residencial',
    location: 'Chiclayo, Perú',
    description:
      'Residencia moderna que combina elegancia y funcionalidad. Espacios abiertos integrados con áreas verdes, creando un ambiente de lujo y confort para toda la familia.',
    impact: ['Diseño contemporáneo', 'Integración paisajística', 'Espacios versátiles'],
    image: '/assets/videos/proyecto-restaurante.mp4',
    type: 'video',
  },
  {
    id: 4,
    name: 'Spa Infantil Love Kids',
    category: 'Diseño Comercial',
    location: 'Chiclayo, Perú',
    description:
      'Diseño de un espacio dedicado al bienestar infantil, con áreas de juego, piscina terapéutica y zonas de relajación, priorizando la seguridad y el confort de los niños.',
    impact: ['Diseño infantil seguro', 'Espacios terapéuticos', 'Ambiente acogedor'],
    image: '/assets/videos/proyecto-restaurante.mp4',
    type: 'video',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
      id="proyectos"
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
                Portafolio
              </span>
              <span className="w-8 h-[1px] bg-earth-400" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-warm-dark tracking-wide leading-tight mb-4">
              Proyectos Singulares que Cuentan una Historia
            </h2>
            <p className="text-warm-dark/60 font-body max-w-2xl mx-auto text-sm">
              Cada proyecto es una oportunidad de crear espacios que transforman
              la manera de vivir y trabajar.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-sm cursor-pointer transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Media */}
                <div className="relative h-[350px] sm:h-[400px] overflow-hidden">
                  {project.type === 'video' ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src={project.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                    {/* Category */}
                    <span className="text-earth-300 font-body text-xs tracking-[0.15em] uppercase mb-2">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide mb-2 group-hover:text-earth-200 transition-colors duration-300">
                      {project.name}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center text-white/60 font-body text-xs mb-4">
                      <MapPin className="w-3 h-3 mr-1" />
                      {project.location}
                    </div>

                    {/* Impact Tags - Visible on Hover */}
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {project.impact.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-earth-500/40 text-earth-100 text-xs font-body rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={() => {
                const element = document.querySelector('#contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-8 py-4 bg-earth-500 hover:bg-earth-600 text-white font-body text-xs tracking-[0.1em] uppercase rounded-sm transition-all duration-300 hover:shadow-soft"
            >
              <span>Inicia tu Proyecto</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl bg-white border border-earth-200/50 text-warm-dark p-0 overflow-hidden">
          {selectedProject && (
            <>
              {/* Media */}
              <div className="relative h-[250px] sm:h-[300px]">
                {selectedProject.type === 'video' ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={selectedProject.image} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 -mt-16 relative">
                <DialogHeader>
                  <span className="text-earth-500 font-body text-xs tracking-[0.15em] uppercase mb-2">
                    {selectedProject.category}
                  </span>
                  <DialogTitle className="font-display text-2xl sm:text-3xl text-warm-dark tracking-wide">
                    {selectedProject.name}
                  </DialogTitle>
                  <div className="flex items-center text-warm-dark/50 font-body text-xs mt-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    {selectedProject.location}
                  </div>
                </DialogHeader>

                <DialogDescription className="text-warm-dark/60 font-body leading-relaxed mt-4 text-sm">
                  {selectedProject.description}
                </DialogDescription>

                {/* Impact */}
                <div className="mt-6">
                  <h4 className="text-warm-dark font-body text-xs tracking-[0.1em] uppercase mb-3">
                    Impacto del Proyecto
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.impact.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 bg-earth-100 text-earth-700 text-xs font-body rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      const element = document.querySelector('#contacto');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center px-6 py-3 bg-earth-500 hover:bg-earth-600 text-white font-body text-xs tracking-[0.1em] uppercase rounded-sm transition-all duration-300"
                  >
                    <span>Consultar por este proyecto</span>
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
