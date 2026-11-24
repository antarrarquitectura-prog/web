export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  relatedCategory: 'Residencial' | 'Diseño Comercial' | 'Diseño de Interiores';
  relatedProjectIds?: string[];
  formValue: 'Residencial' | 'Multifamiliar' | 'Comercial' | 'Interiores';
  seoTitle: string;
  seoDescription: string;
  h1Prefix: string;
  h1Accent: string;
  h1Suffix: string;
  excerpt: string;
  description: string;
  deliverables: {
    title: string;
    detail: string;
  }[];
  idealFor: {
    title: string;
    description: string;
  }[];
  faqs: ServiceFAQ[];
}

export const GENERAL_SERVICE_FAQS: ServiceFAQ[] = [
  {
    question: '¿Cómo trabajamos si mi terreno o inmueble está fuera de nuestra sede principal?',
    answer:
      'Desde nuestra sede central en Chiclayo atendemos presencialmente el norte del país y desarrollamos proyectos para cualquier ciudad del Perú. Realizamos levantamientos técnicos, sesiones virtuales de avance periódico y entrega completa de planos ejecutivos, modelado 3D y especificaciones constructivas.'
  },
  {
    question: '¿Qué especialidades incluyen los planos ejecutivos que entrega Antarr Arquitectos?',
    answer:
      'Cada expediente se desarrolla con rigor constructivo según la normativa peruana (RNE): anteproyecto arquitectónico, planos de arquitectura a detalle, estructuras, instalaciones sanitarias e instalaciones eléctricas (circuitos de luminarias y tomacorrientes), además de vistas 3D fotorrealistas.'
  },
  {
    question: '¿Qué información necesito tener para solicitar una cotización de proyecto?',
    answer:
      'Para preparar una propuesta de alcance técnico precisa basta con compartirnos la ubicación del terreno o inmueble, sus medidas aproximadas o plano existente y una lista breve de los ambientes o necesidades que buscas resolver.'
  }
];

export const SERVICES: Service[] = [
  {
    slug: 'diseno-residencial',
    number: '01',
    title: 'Diseño Residencial',
    subtitle: 'Casas Unifamiliares & Residencias de Autor',
    relatedCategory: 'Residencial',
    formValue: 'Residencial',
    seoTitle: 'Arquitectura Residencial y Diseño de Casas | Antarr Arquitectos',
    seoDescription:
      'Estudio de arquitectura residencial en Chiclayo y todo el Perú. Arquitectos especialistas en diseño de casas a medida, planos ejecutivos, 3D y RNE.',
    h1Prefix: 'Diseño',
    h1Accent: 'residencial',
    h1Suffix: 'pensado para tu vida.',
    excerpt:
      'Viviendas concebidas para responder con naturalidad a los distintos climas del Perú, integrando amplitud, privacidad y luz natural durante todo el año.',
    description:
      'Proyectamos casas unifamiliares desde el estudio del terreno, el asoleamiento y los vientos del entorno. Articulamos patios interiores, celosías y circulaciones limpias que refrescan cada ambiente, logrando espacios duraderos, funcionales y fieles a tu familia.',
    deliverables: [
      {
        title: 'Anteproyecto & Zonificación Bioclimática',
        detail:
          'Distribución en planta según orientación solar, vientos dominantes del emplazamiento y necesidades reales de tu familia.'
      },
      {
        title: 'Planos Ejecutivos por Especialidad',
        detail:
          'Juego completo de arquitectura, estructuras, instalaciones sanitarias y eléctricas de luminarias y tomacorrientes.'
      },
      {
        title: 'Modelado 3D & Renders Fotorrealistas',
        detail:
          'Visualización de fachada, patios e iluminación antes de construir para validar materiales y proporciones con certeza.'
      },
      {
        title: 'Expediente Técnico Municipal',
        detail:
          'Documentación alineada al Reglamento Nacional de Edificaciones y parámetros urbanos para tramitar la licencia de obra.'
      }
    ],
    idealFor: [
      {
        title: 'Propietarios con terreno propio',
        description:
          'Familias con lotes en urbanizaciones o zonas campestres que buscan proyectar una vivienda única a medida.'
      },
      {
        title: 'Lotes en esquina o entre medianeras',
        description:
          'Predios urbanos compactos donde se requiere equilibrar privacidad frente a la calle, luz natural y ventilación cruzada.'
      },
      {
        title: 'Familias que valoran durabilidad constructiva',
        description:
          'Clientes que desean construir sin improvisaciones en obra, optimizando su presupuesto con planos y especificaciones precisas.'
      }
    ],
    faqs: [
      {
        question: '¿Cómo adaptan una casa unifamiliar al clima y radiación solar del emplazamiento?',
        answer:
          'Estudiamos la orientación del lote desde el primer trazo para proteger las fachadas expuestas mediante aleros profundos, celosías, volúmenes retranqueados y patios interiores con ventilación cruzada que reducen la carga térmica.'
      },
      {
        question: '¿Qué necesito para iniciar el diseño de mi casa?',
        answer:
          'Solo requerimos la ubicación o partida registral del terreno, sus medidas aproximadas y una conversación inicial sobre el número de niveles, ambientes prioritarios y presupuesto estimado de construcción.'
      },
      {
        question: '¿El servicio incluye planos de ingeniería además de la arquitectura?',
        answer:
          'Sí. Entregamos el desarrollo técnico integral compuesto por planos de arquitectura, estructuras, instalaciones sanitarias e instalaciones eléctricas (luminarias y tomacorrientes), listos para presupuestar y ejecutar en obra.'
      }
    ]
  },
  {
    slug: 'diseno-multifamiliar',
    number: '02',
    title: 'Diseño Multifamiliar',
    subtitle: 'Edificios Residenciales & Inversión Inmobiliaria',
    relatedCategory: 'Residencial',
    relatedProjectIds: ['casa-chepen', 'casa-valencia', 'casa-los-alamos'],
    formValue: 'Multifamiliar',
    seoTitle: 'Arquitectura y Diseño Multifamiliar en Perú | Antarr Arquitectos',
    seoDescription:
      'Estudio de arquitectura multifamiliar en Chiclayo y Perú. Estudio de cabida, planos ejecutivos, renders 3D y expediente municipal para edificios rentables.',
    h1Prefix: 'Edificios y diseño',
    h1Accent: 'multifamiliar',
    h1Suffix: 'con rentabilidad.',
    excerpt:
      'Edificios residenciales en lotes urbanos que equilibran densidad normativa, confort bioclimático e identidad arquitectónica propia.',
    description:
      'Asesoramos a promotores e inversionistas desde el análisis de parámetros municipales hasta el expediente de obra integral. Optimizamos plantas típicas, núcleos de circulación y áreas comunes para maximizar metros vendibles sin sacrificar iluminación ni confort.',
    deliverables: [
      {
        title: 'Estudio de Cabida & Parámetros Urbanos',
        detail:
          'Evaluación normativa de altura máxima, retiros, área libre, estacionamientos y mix óptimo de departamentos flats o dúplex.'
      },
      {
        title: 'Planos Ejecutivos Multinivel',
        detail:
          'Desarrollo coordinado de arquitectura, estructuras, instalaciones sanitarias y eléctricas (luminarias y tomacorrientes) por nivel.'
      },
      {
        title: 'Modelado 3D & Material Comercial',
        detail:
          'Renders fotorrealistas exteriores e interiores clave para impulsar la preventa de unidades desde etapas tempranas.'
      },
      {
        title: 'Expediente para Licencia de Edificación',
        detail:
          'Expediente técnico completo conforme al RNE y exigencias municipales de cada jurisdicción urbana.'
      }
    ],
    idealFor: [
      {
        title: 'Inversionistas y promotores inmobiliarios',
        description:
          'Desarrollos orientados a venta o renta en ejes residenciales consolidados con alta demanda habitacional.'
      },
      {
        title: 'Familias con terrenos céntricos amplios',
        description:
          'Propietarios que buscan rentabilizar un predio mediante edificios de 3 a 6 pisos con departamentos independientes.'
      },
      {
        title: 'Terrenos en vías colectoras o esquinas',
        description:
          'Lotes con potencial de fachada multifamiliar y primer nivel destinado a estacionamientos o zócalo comercial.'
      }
    ],
    faqs: [
      {
        question: '¿Cómo verifican cuántos pisos y departamentos permite mi terreno?',
        answer:
          'Realizamos un estudio de cabida basado en el Certificado de Parámetros Urbanísticos y Edificatorios de la municipalidad correspondiente, verificando coeficientes de edificación, área libre mínima, pozos de luz y estacionamientos.'
      },
      {
        question: '¿Cómo evitan áreas muertas o pasillos oscuros en departamentos de metraje compacto?',
        answer:
          'Estructuramos núcleos verticales eficientes y plantas moduladas alrededor de ductos y patios estratégicos, garantizando iluminación y ventilación natural en salas, cocinas y dormitorios sin desperdiciar metros cuadrados vendibles.'
      },
      {
        question: '¿Los renders sirven para la campaña de preventa del edificio?',
        answer:
          'Sí. Producimos modelado 3D y vistas fotorrealistas de fachada, lobby y departamentos tipo calibradas para brochures comerciales, redes sociales y material de venta inmobiliaria.'
      }
    ]
  },
  {
    slug: 'diseno-comercial',
    number: '03',
    title: 'Diseño Comercial',
    subtitle: 'Restaurantes, Retail, Salud & Entretenimiento',
    relatedCategory: 'Diseño Comercial',
    formValue: 'Comercial',
    seoTitle: 'Arquitectura y Diseño Comercial en Perú | Antarr Arquitectos',
    seoDescription:
      'Arquitectos especialistas en diseño comercial y retail en Chiclayo y Perú: restaurantes, spas, clínicas y tiendas con identidad de marca y alto retorno.',
    h1Prefix: 'Arquitectura y',
    h1Accent: 'diseño comercial',
    h1Suffix: 'que posiciona tu marca.',
    excerpt:
      'Espacios comerciales de distintos rubros concebidos para atraer clientes, ordenar el flujo de atención y destacar tu marca.',
    description:
      'Transformamos locales en destinos memorables para restaurantes, clínicas, boutiques y centros recreativos. Diseñamos recorridos intuitivos, vitrinas abiertas, acústica confortable e iluminación estratégica que elevan el atractivo y la rentabilidad de tu negocio.',
    deliverables: [
      {
        title: 'Anteproyecto & Estrategia de Flujo Comercial',
        detail:
          'Zonificación de salones, áreas de atención, barra o caja, circulaciones operativas y experiencia visual desde la calle.'
      },
      {
        title: 'Planos Ejecutivos & Especialidades',
        detail:
          'Arquitectura comercial, estructuras, sanitarias y eléctricas (iluminación escénica, luminarias y puntos de tomacorrientes).'
      },
      {
        title: 'Modelado 3D & Renders de Marca',
        detail:
          'Visualización fotorrealista de fachadas, mobiliario exhibidor, señalética y atmósfera interior para validar el concepto.'
      },
      {
        title: 'Expediente de Adecuación o Licencia',
        detail:
          'Documentación técnica precisa y especificaciones de acabados resistentes al alto tránsito para ejecutar en plazos cortos.'
      }
    ],
    idealFor: [
      {
        title: 'Restaurantes, cafés y recreos campestres',
        description:
          'Negocios gastronómicos que necesitan ampliar aforo efectivo, mejorar la acústica y crear rincones memorables para el comensal.'
      },
      {
        title: 'Centros de estética, spas y consultorios',
        description:
          'Locales de bienestar que requieren transmitir calma, higiene y sofisticación aprovechando incluso superficies compactas.'
      },
      {
        title: 'Tiendas retail, módulos y centros educativos',
        description:
          'Marcas en expansión o guarderías que priorizan seguridad, visibilidad comercial e identidad diferenciada.'
      }
    ],
    faqs: [
      {
        question: '¿Pueden intervenir un local alquilado o ya construido?',
        answer:
          'Sí. Diseñamos propuestas reversibles o de rápida implementación constructiva en tabiquería seca, iluminación en rieles y mobiliario modular, maximizando el impacto comercial sin comprometer la estructura existente.'
      },
      {
        question: '¿Cómo ayudan a que un local pequeño luzca amplio y venda mejor?',
        answer:
          'Trabajamos la continuidad visual desde el ingreso, espejos estratégicos, exhibición en altura, paleta cromática calibrada e iluminación focalizada por planos para eliminar cuellos de botella y ampliar la percepción del espacio.'
      },
      {
        question: '¿Se incluyen los planos eléctricos y de mobiliario comercial a medida?',
        answer:
          'Sí. Entregamos planos detallados de luminarias, tomacorrientes operativos y diseño de barras, recepciones, estanterías o cavas a medida listos para fabricación.'
      }
    ]
  },
  {
    slug: 'diseno-de-interiores',
    number: '04',
    title: 'Diseño de Interiores',
    subtitle: 'Interiorismo Residencial & Mobiliario a Medida',
    relatedCategory: 'Diseño de Interiores',
    formValue: 'Interiores',
    seoTitle: 'Diseño de Interiores en Chiclayo y Perú | Antarr Arquitectos',
    seoDescription:
      'Estudio de diseño de interiores en Chiclayo y todo el Perú. Interiorismo residencial y comercial, mobiliario a medida, iluminación y renders 3D.',
    h1Prefix: 'Diseño de',
    h1Accent: 'interiores',
    h1Suffix: 'con identidad propia.',
    excerpt:
      'Espacios cálidos y atemporales donde la proporción, la luz y el mobiliario diseñado a medida transforman la forma de habitar cada día.',
    description:
      'Intervenimos viviendas y locales comerciales renovando salas, cocinas, suites, estudios y terrazas sociales. Combinamos carpintería fina, piedra, iluminación cálida indirecta y proporciones serenas para transformar estancias existentes en refugios ordenados.',
    deliverables: [
      {
        title: 'Propuesta Conceptual & Paleta Matérica',
        detail:
          'Selección curada de revestimientos, chapas de madera, mármoles, porcelanatos, textiles y griferías acordes al carácter del espacio.'
      },
      {
        title: 'Planos de Interiorismo & Especialidades',
        detail:
          'Distribución en planta, falsos cielos rasos, iluminación indirecta, puntos eléctricos (luminarias y tomacorrientes) y sanitarios.'
      },
      {
        title: 'Carpintería & Mobiliario a Medida',
        detail:
          'Despiece técnico de cocinas, walk-in closets, paneles de TV, estudios y vanitorios con detalles precisos para taller.'
      },
      {
        title: 'Modelado 3D & Renders Fotorrealistas',
        detail:
          'Imágenes detalladas de cada rincón interior con luz diurna y nocturna antes de iniciar la fabricación o remodelación.'
      }
    ],
    idealFor: [
      {
        title: 'Casas y departamentos nuevos o por entregar',
        description:
          'Propietarios que desean personalizar su vivienda con cocinas integrales, closets y áreas sociales a medida.'
      },
      {
        title: 'Remodelación de ambientes existentes',
        description:
          'Familias que buscan actualizar salas, terrazas, dormitorios o baños ganando orden, almacenamiento oculto y mejor iluminación.'
      },
      {
        title: 'Azoteas y patios por habilitar',
        description:
          'Espacios subutilizados ideales para transformarse en roof tops sociales, zonas BBQ o jardines interiores frescos.'
      }
    ],
    faqs: [
      {
        question: '¿Puedo contratar el diseño de un solo ambiente como cocina, sala o roof top?',
        answer:
          'Sí. Puedes proyectar desde un ambiente puntual —como una cocina integral, dormitorio principal con walk-in closet o roof top social— hasta el interiorismo completo de toda la vivienda.'
      },
      {
        question: '¿Los planos permiten que cualquier carpintero o maestro de obra fabrique los muebles sin errores?',
        answer:
          'Exacto. Entregamos elevaciones acotadas, cortes de mobiliario a medida, códigos de materiales y ubicación exacta de puntos eléctricos y sanitarios para evitar imprevistos durante el montaje.'
      },
      {
        question: '¿Cómo eligen los materiales frente a la humedad y uso diario?',
        answer:
          'Especificamos tableros resistentes a humedad en zonas de agua, maderas tratadas o tecnológicas en exteriores, porcelanatos de fácil mantenimiento y herrajes de calidad que preservan el acabado impecable con el paso del tiempo.'
      }
    ]
  }
];
