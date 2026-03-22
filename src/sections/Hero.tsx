import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/assets/images/logo.png"
        >
          <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Light Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title - Minimalist */}
          <h1
            className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-warm-dark tracking-[0.15em] mb-4 transition-all duration-700 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            ANTARR ARQUITECTOS
          </h1>

          {/* Philosophy Tagline */}
          <p
            className={`font-body text-warm-dark/70 text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase mb-8 transition-all duration-700 delay-100 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Diseño de calidad para una vida plena
          </p>

          {/* Subtitle */}
          <p
            className={`font-body text-warm-dark/60 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Estudio de arquitectura singular y diseño de interiores en Perú.
            Fusionamos creatividad y funcionalidad para superar tus expectativas.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-earth-500 hover:bg-earth-600 text-white font-body font-medium px-8 py-5 text-sm tracking-wider rounded-sm transition-all duration-300 hover:shadow-soft group"
            >
              Ver Proyectos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-warm-dark/30 text-warm-dark hover:bg-warm-dark/5 font-body font-medium px-8 py-5 text-sm tracking-wider rounded-sm transition-all duration-300"
            >
              Contactar
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-warm-dark/40 text-xs tracking-[0.3em] uppercase font-body">
              Scroll
            </span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-warm-dark/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Rating Badge */}
      <div
        className={`absolute bottom-10 right-4 sm:right-6 lg:right-12 xl:right-20 transition-all duration-700 delay-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="glass-effect-light rounded-sm px-4 py-3 border border-earth-200/50">
          <div className="flex items-center space-x-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-warm-dark font-body text-xs font-medium tracking-wide">
              5.0 Google
            </span>
          </div>
          <p className="text-warm-dark/50 text-xs font-body mt-1">
            +20 proyectos
          </p>
        </div>
      </div>
    </section>
  );
}
