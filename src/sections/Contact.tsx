import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contacto@antarrarquitectos.com',
    href: 'mailto:contacto@antarrarquitectos.com',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+51 999 999 999',
    href: 'tel:+51999999999',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Chiclayo, Perú',
    href: '#',
  },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/antarrarquitectos' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/antarrarquitectos' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/antarrarquitectos' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/antarrarquitectos' },
];

const projectTypes = [
  'Vivienda Unifamiliar',
  'Departamento',
  'Local Comercial',
  'Restaurante / Bar',
  'Oficina',
  'Remodelación',
  'Otro',
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('¡Mensaje enviado!', {
      description: 'Nos pondremos en contacto contigo pronto.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contacto"
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
                Contacto
              </span>
              <span className="w-8 h-[1px] bg-earth-400" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-warm-dark tracking-wide leading-tight mb-4">
              Diseñemos Juntos tu Próximo Espacio
            </h2>
            <p className="text-warm-dark/60 font-body max-w-2xl mx-auto text-sm">
              Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div
              className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="space-y-8">
                {/* Info Cards */}
                <div className="space-y-3">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start space-x-4 p-4 bg-white rounded-sm border border-earth-200/50 hover:border-earth-400/30 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-sm bg-earth-100 flex items-center justify-center flex-shrink-0 group-hover:bg-earth-200 transition-colors duration-300">
                        <item.icon className="w-4 h-4 text-earth-600" />
                      </div>
                      <div>
                        <p className="text-warm-dark/50 font-body text-xs tracking-[0.1em] uppercase mb-1">
                          {item.label}
                        </p>
                        <p className="text-warm-dark font-body text-sm">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-warm-dark/50 font-body text-xs tracking-[0.1em] uppercase mb-4">
                    Síguenos
                  </p>
                  <div className="flex space-x-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-sm bg-white border border-earth-200/50 flex items-center justify-center hover:border-earth-400/30 hover:bg-earth-50 transition-all duration-300 group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4 text-warm-dark/50 group-hover:text-earth-600 transition-colors duration-300" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Lead Magnet */}
                <div className="p-6 bg-earth-50 rounded-sm border border-earth-200/50">
                  <h4 className="font-display text-lg text-warm-dark tracking-wide mb-2">
                    Recursos Gratuitos
                  </h4>
                  <p className="text-warm-dark/60 font-body text-sm mb-4">
                    Descarga nuestra guía: "Estrategias clave para el correcto
                    funcionamiento de tu vivienda"
                  </p>
                  <button
                    onClick={() => {
                      toast.info('Próximamente', {
                        description: 'Esta función estará disponible pronto.',
                      });
                    }}
                    className="text-earth-600 hover:text-earth-700 font-body text-xs tracking-[0.1em] uppercase transition-colors duration-300"
                  >
                    Descargar guía →
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`lg:col-span-3 transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-sm border border-earth-200/50 p-6 sm:p-8"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-warm-dark font-body text-xs tracking-[0.1em] uppercase">
                      Nombre completo *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Tu nombre"
                      className="bg-warm-light border-earth-200/50 text-warm-dark placeholder:text-warm-dark/30 focus:border-earth-400 rounded-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-warm-dark font-body text-xs tracking-[0.1em] uppercase">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="tu@email.com"
                      className="bg-warm-light border-earth-200/50 text-warm-dark placeholder:text-warm-dark/30 focus:border-earth-400 rounded-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-warm-dark font-body text-xs tracking-[0.1em] uppercase">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+51 999 999 999"
                      className="bg-warm-light border-earth-200/50 text-warm-dark placeholder:text-warm-dark/30 focus:border-earth-400 rounded-sm"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-warm-dark font-body text-xs tracking-[0.1em] uppercase">
                      Tipo de proyecto *
                    </Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, projectType: value })
                      }
                      required
                    >
                      <SelectTrigger className="bg-warm-light border-earth-200/50 text-warm-dark focus:border-earth-400 rounded-sm">
                        <SelectValue placeholder="Selecciona un tipo" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-earth-200/50">
                        {projectTypes.map((type) => (
                          <SelectItem
                            key={type}
                            value={type}
                            className="text-warm-dark hover:bg-earth-50"
                          >
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2 mb-5">
                  <Label htmlFor="message" className="text-warm-dark font-body text-xs tracking-[0.1em] uppercase">
                    Cuéntanos sobre tu proyecto *
                  </Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe tu visión, necesidades, presupuesto aproximado, plazo, etc."
                    rows={4}
                    className="bg-warm-light border-earth-200/50 text-warm-dark placeholder:text-warm-dark/30 focus:border-earth-400 resize-none rounded-sm"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-earth-500 hover:bg-earth-600 text-white font-body text-xs tracking-[0.1em] uppercase py-5 rounded-sm transition-all duration-300 hover:shadow-soft disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-4 h-4 mr-2" />
                      Solicitar Cotización Profesional
                    </span>
                  )}
                </Button>

                <p className="text-warm-dark/40 font-body text-xs text-center mt-4">
                  Al enviar este formulario, aceptas nuestra política de
                  privacidad.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
