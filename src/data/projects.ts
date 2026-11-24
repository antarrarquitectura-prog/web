export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  number?: number;
  title: string;
  category: 'Residencial' | 'Diseño Comercial' | 'Diseño de Interiores';
  secondaryCategory?: 'Residencial' | 'Diseño Comercial' | 'Diseño de Interiores';
  typology: string;
  location: string;
  year?: string;
  areaLand?: string;
  areaBuilt?: string;
  status: 'Diseño Concluido' | 'En Desarrollo' | 'Proyecto Integral' | 'Diseño de Interiores';
  excerpt: string;
  description: string;
  coverImage: string;
  gallery: string[];
  galleryAlts?: string[];
  specs: ProjectSpec[];
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  // =========================================================================
  // --- 1. RESIDENCIAL (Orden numérico estricto 1 a 7) ---
  // =========================================================================
  {
    id: 'casa-chepen',
    number: 1,
    title: 'Casa Chepén',
    category: 'Residencial',
    typology: 'Viviendas unifamiliares',
    location: 'Chepén, La Libertad',
    year: '2026',
    areaLand: '220 m²',
    areaBuilt: '195.75 m²',
    status: 'Proyecto Integral',
    featured: true,
    excerpt: 'Tres niveles de lectura horizontal anclados por un cuerpo vertical ciego, creando terrazas sombreadas en pleno clima norteño.',
    description: 'El escalonamiento de sus planos y los retranqueos profundos protegen los ambientes íntimos frente al sol directo de Chepén. Las jardineras integradas y la pérgola superior con celosías regulan la luz y la ventilación, aportando privacidad respecto a la calle.',
    coverImage: '/assets/projects/res-1-casa-chepen-1.webp',
    gallery: [
      '/assets/projects/res-1-casa-chepen-1.webp',
      '/assets/projects/res-1-casa-chepen-2.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Chepén, La Libertad' },
      { label: 'Tipología', value: 'Viviendas unifamiliares' },
      { label: 'Área diseñada', value: '195.75 m²' },
      { label: 'Área terreno', value: '220 m²' },
      { label: 'Año', value: '2026' },
      { label: 'Estado', value: 'Proyecto Integral' },
      { label: 'Materialidad', value: 'Concreto, revestimiento cálido, madera y vidrio' },
      { label: 'Enfoque', value: 'Volumetría escalonada y terrazas en sombra' }
    ]
  },
  {
    id: 'casa-valencia',
    number: 2,
    title: 'Casa Valencia',
    category: 'Residencial',
    typology: 'Viviendas unifamiliares',
    location: 'Chepén, La Libertad',
    year: '2024',
    areaLand: '220 m²',
    areaBuilt: '185 m²',
    status: 'Proyecto Integral',
    featured: true,
    excerpt: 'Implantada en esquina, la residencia contrapone un zócalo pétreo cerrado en primer nivel con volúmenes superiores cálidos y permeables.',
    description: 'Para resolver un lote de doble frente en Chepén sin comprometer la intimidad, la planta baja se concibe como un muro continuo de piedra oscura que aísla la casa del tránsito urbano. Un núcleo central a doble altura articula ambos frentes y baña de luz natural los espacios interiores. En el segundo nivel, las terrazas techadas y los paneles verticales de madera filtran la radiación solar, generando ambientes frescos y ventilados durante todo el año.',
    coverImage: '/assets/projects/res-2-casa-valencia-1.webp',
    gallery: [
      '/assets/projects/res-2-casa-valencia-1.webp',
      '/assets/projects/res-2-casa-valencia-2.webp',
      '/assets/projects/res-2-casa-valencia-3.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Chepén, La Libertad' },
      { label: 'Tipología', value: 'Viviendas unifamiliares' },
      { label: 'Área diseñada', value: '185 m²' },
      { label: 'Área terreno', value: '220 m²' },
      { label: 'Año', value: '2024' },
      { label: 'Estado', value: 'Proyecto Integral' },
      { label: 'Materialidad', value: 'Piedra Laja, Concreto, Enchapes de Madera' },
      { label: 'Enfoque', value: 'Volumetría en esquina y privacidad' }
    ]
  },
  {
    id: 'casa-moran',
    number: 3,
    title: 'Casa Morán',
    category: 'Residencial',
    typology: 'Viviendas unifamiliares',
    location: 'Reque, Lambayeque',
    year: '2024',
    areaLand: '300 m²',
    areaBuilt: '200 m²',
    status: 'Diseño Concluido',
    featured: true,
    excerpt: 'Geometría sobria y compacta que equilibra la privacidad hacia la calle con una gran apertura social hacia el jardín.',
    description: 'En este lote de Reque, la fachada combina una pérgola metálica y celosías verticales que tamizan el sol y resguardan el estacionamiento. Al cruzar el umbral, la casa se transforma: un espacio a doble altura conecta ambos niveles con un deck de madera y un fogatero hundido pensado para compartir al aire libre.',
    coverImage: '/assets/projects/res-3-casa-moran-1.webp',
    gallery: [
      '/assets/projects/res-3-casa-moran-1.webp',
      '/assets/projects/res-3-casa-moran-2.webp',
      '/assets/projects/res-3-casa-moran-3.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Reque, Lambayeque' },
      { label: 'Tipología', value: 'Viviendas unifamiliares' },
      { label: 'Área diseñada', value: '200 m²' },
      { label: 'Área terreno', value: '300 m²' },
      { label: 'Año', value: '2024' },
      { label: 'Estado', value: 'Diseño Concluido' },
      { label: 'Materialidad', value: 'Concreto expuesto, metal negro, madera y vidrio' },
      { label: 'Enfoque', value: 'Dos niveles, doble altura y jardín social' }
    ]
  },
  {
    id: 'casa-ribera',
    number: 4,
    title: 'Casa Ribera',
    category: 'Residencial',
    typology: 'Viviendas unifamiliares',
    location: 'Pomalca, Lambayeque',
    year: '2024',
    areaLand: '140 m²',
    areaBuilt: '115 m²',
    status: 'En Desarrollo',
    featured: false,
    excerpt: 'Un volumen superior en voladizo define la fachada frontal y resguarda el ingreso hacia un refugio interior privado.',
    description: 'Implantada en un lote urbano plano de Pomalca, la casa se cierra hacia la calle para proteger la vida familiar. Hacia el interior, los ambientes sociales se abren por completo a un jardín con piscina y muro cascada, integrando luz natural, frescura y descanso.',
    coverImage: '/assets/projects/res-4-casa-ribera-1.webp',
    gallery: [
      '/assets/projects/res-4-casa-ribera-1.webp',
      '/assets/projects/res-4-casa-ribera-2.webp',
      '/assets/projects/res-4-casa-ribera-3.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Pomalca, Lambayeque' },
      { label: 'Tipología', value: 'Viviendas unifamiliares' },
      { label: 'Área diseñada', value: '115 m²' },
      { label: 'Área terreno', value: '140 m²' },
      { label: 'Año', value: '2024' },
      { label: 'Estado', value: 'En Desarrollo' },
      { label: 'Materialidad', value: 'Concreto, madera, piedra travertino y metal negro' },
      { label: 'Enfoque', value: 'Volumen en voladizo y patio interior con piscina' }
    ]
  },
  {
    id: 'casa-romero',
    number: 5,
    title: 'Casa Romero',
    category: 'Residencial',
    typology: 'Viviendas unifamiliares',
    location: 'La Ribera, Piura',
    year: '2025',
    areaLand: '350 m²',
    areaBuilt: '280 m²',
    status: 'Diseño Concluido',
    featured: false,
    excerpt: 'Un jardín frontal marca una llegada serena a esta residencia de dos niveles, donde la piedra y las celosías tamizan la luz.',
    description: 'Pensada para disfrutar el clima cálido de Piura, la vivienda protege sus ambientes íntimos de la exposición solar directa mediante aleros y terrazas profundas. Hacia el interior, la vida familiar se abre con naturalidad a través de amplias mamparas que integran la sala con una terraza y el patio posterior.',
    coverImage: '/assets/projects/res-5-casa-romero-1.webp',
    gallery: [
      '/assets/projects/res-5-casa-romero-1.webp',
      '/assets/projects/res-5-casa-romero-2.webp',
      '/assets/projects/res-5-casa-romero-3.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'La Ribera, Piura' },
      { label: 'Tipología', value: 'Viviendas unifamiliares' },
      { label: 'Área diseñada', value: '280 m²' },
      { label: 'Área terreno', value: '350 m²' },
      { label: 'Año', value: '2025' },
      { label: 'Estado', value: 'Diseño Concluido' },
      { label: 'Materialidad', value: 'Concreto, piedra, celosía metálica y vidrio' },
      { label: 'Enfoque', value: 'Privacidad frontal y vida hacia el jardín' }
    ]
  },
  {
    id: 'casa-palmira',
    number: 6,
    title: 'Casa Palmira',
    category: 'Residencial',
    typology: 'Viviendas unifamiliares',
    location: 'Ferreñafe, Lambayeque',
    year: '2025',
    areaLand: '160 m²',
    areaBuilt: '130 m²',
    status: 'Diseño Concluido',
    featured: false,
    excerpt: 'Un velo de bloques calados resguarda la vida interior de la calle, coronado por una torre esbelta que abre la casa a la brisa.',
    description: 'La propuesta transforma un frente urbano estrecho en un refugio sereno y luminoso. Al cruzar el ingreso escalonado, los espacios se articulan en torno a un núcleo vertical que conduce la luz natural hacia el interior, culminando en una terraza elevada donde la vivienda recupera calma y amplitud.',
    coverImage: '/assets/projects/res-6-casa-palmira-1.webp',
    gallery: [
      '/assets/projects/res-6-casa-palmira-1.webp',
      '/assets/projects/res-6-casa-palmira-2.webp',
      '/assets/projects/res-6-casa-palmira-3.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Ferreñafe, Lambayeque' },
      { label: 'Tipología', value: 'Viviendas unifamiliares' },
      { label: 'Área diseñada', value: '130 m²' },
      { label: 'Área terreno', value: '160 m²' },
      { label: 'Año', value: '2025' },
      { label: 'Estado', value: 'Diseño Concluido' },
      { label: 'Materialidad', value: 'Concreto, bloques calados, madera y piedra oscura' },
      { label: 'Enfoque', value: 'Fachada permeable y espacialidad vertical' }
    ]
  },
  {
    id: 'casa-los-alamos',
    number: 7,
    title: 'Casa Los Álamos',
    category: 'Residencial',
    typology: 'Viviendas unifamiliares',
    location: 'Chiclayo, Lambayeque',
    year: '2025',
    areaLand: '120 m²',
    areaBuilt: '96 m²',
    status: 'Proyecto Integral',
    featured: false,
    excerpt: 'Un umbral permeable con celosías plegables precede a una fachada sobria de vanos verticales que resguarda la intimidad familiar.',
    description: 'En un lote urbano compacto de Chiclayo, la vivienda transforma su aparente hermetismo exterior en un interior luminoso y sereno. La sala se integra mediante amplias mamparas a un deck de madera bajo pérgola y un jardín íntimo, donde una banca lineal con vegetación ilumina y da calidez al patio.',
    coverImage: '/assets/projects/res-7-casa-los-alamos-1.webp',
    gallery: [
      '/assets/projects/res-7-casa-los-alamos-1.webp',
      '/assets/projects/res-7-casa-los-alamos-2.webp',
      '/assets/projects/res-7-casa-los-alamos-3.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Chiclayo, Lambayeque' },
      { label: 'Tipología', value: 'Viviendas unifamiliares' },
      { label: 'Área diseñada', value: '96 m²' },
      { label: 'Área terreno', value: '120 m²' },
      { label: 'Año', value: '2025' },
      { label: 'Estado', value: 'Proyecto Integral' },
      { label: 'Materialidad', value: 'Concreto, piedra, metal y madera' },
      { label: 'Enfoque', value: 'Privacidad frontal y patio con pérgola' }
    ]
  },

  // =========================================================================
  // --- 2. DISEÑO COMERCIAL (Orden numérico estricto 1 a 8) ---
  // =========================================================================
  {
    id: 'restaurante-los-patos',
    number: 1,
    title: 'Restaurante Los Patos',
    category: 'Diseño Comercial',
    typology: 'Diseño Comercial & Gastronómico',
    location: 'Chepén, La Libertad',
    year: '2023',
    areaBuilt: '60 m²',
    status: 'Proyecto Integral',
    featured: true,
    excerpt: 'Bajo un techo vivo de madera, fibras tejidas y luz cálida, el salón envuelve al comensal en una atmósfera íntima.',
    description: 'Diseñado para convertir 60 m² en un destino gastronómico con identidad propia en Chepén. El recorrido fluye con amplitud entre bancas perimetrales, mesas de terrazo y una paleta vibrante de terracotas y verdes. Al fondo, arcos retroiluminados con murales botánicos enmarcan el salón y convierten cada visita en una experiencia que invita a volver.',
    coverImage: '/assets/projects/com-1-restaurante-los-patos-1.webp',
    gallery: [
      '/assets/projects/com-1-restaurante-los-patos-1.webp',
      '/assets/projects/com-1-restaurante-los-patos-2.webp',
      '/assets/projects/com-1-restaurante-los-patos-3.webp',
      '/assets/projects/com-1-restaurante-los-patos-4.webp',
      '/assets/projects/com-1-restaurante-los-patos-5.webp',
      '/assets/projects/com-1-restaurante-los-patos-6.webp',
      '/assets/projects/com-1-restaurante-los-patos-7.webp',
      '/assets/projects/com-1-restaurante-los-patos-8.webp',
      '/assets/projects/com-1-restaurante-los-patos-9.webp',
      '/assets/projects/com-1-restaurante-los-patos-10.webp',
      '/assets/projects/com-1-restaurante-los-patos-11.webp'
    ],
    galleryAlts: [
      'Diseño Comercial & Gastronómico - Salón principal de Restaurante Los Patos con techo vivo de madera y fibras tejidas en Chepén, La Libertad | Antarr Arquitectos',
      'Diseño Comercial & Gastronómico - Perspectiva interior con bancas perimetrales, mesas de terrazo y luminarias cálidas en Restaurante Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Diseño Comercial & Gastronómico - Recorrido gastronómico con arcos retroiluminados y vegetación colgante en Restaurante Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Diseño Comercial & Gastronómico - Detalle de salón, paleta terracota y mobiliario a medida en Restaurante Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Diseño Comercial & Gastronómico - Vista panorámica de distribución interior e iluminación ambiental en Restaurante Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Rincón interior con cava de madera y ratán, arco retroiluminado con mural botánico y mesa de terrazo en Restaurante Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Salón con letrero luminoso Los Patos sobre cerámico geométrico en espiga, bancas terracota y lámparas de fibra natural en Chepén, La Libertad | Antarr Arquitectos',
      'Ambiente interior con medallón botánico retroiluminado, mesas de terrazo y techo vivo con vegetación colgante en Restaurante Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Zona de comensales con bancas verdes, listones de colores, murales botánicos iluminados y pérgola de madera en Restaurante Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Rincón interior con muro tallado en madera, nicho en arco y luminarias tejidas en Restaurante Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Mezanine con baranda de hierro forjado, luminarias de fibras naturales con vegetación suspendida y arco mural en Restaurante Los Patos, Chepén, La Libertad | Antarr Arquitectos'
    ],
    specs: [
      { label: 'Ubicación', value: 'Chepén, La Libertad' },
      { label: 'Tipología', value: 'Diseño Comercial & Gastronómico' },
      { label: 'Área diseñada', value: '60 m²' },
      { label: 'Año', value: '2023' },
      { label: 'Estado', value: 'Proyecto Integral' },
      { label: 'Materialidad', value: 'Madera, cerámico geométrico, terrazo y fibras naturales' },
      { label: 'Enfoque', value: 'Atmósfera biofílica y experiencia gastronómica' }
    ]
  },
  {
    id: 'isabella-spa',
    number: 2,
    title: 'Isabella Wellness & Spa',
    category: 'Diseño Comercial',
    typology: 'Centro de Estética & Relajación',
    location: 'Chiclayo, Lambayeque',
    year: '2024',
    areaBuilt: '10.60 m²',
    status: 'Proyecto Integral',
    featured: true,
    excerpt: 'Arcos esbeltos, superficies acanaladas y una iluminación cálida envolvente transforman este salón en un refugio sereno.',
    description: 'En apenas 10.60 m² en Chiclayo, la precisión espacial disuelve los límites del local. Los espejos de piso a techo y el cielo reflejante expanden la percepción del espacio, mientras las hornacinas curvas en madera y los tonos suaves envuelven cada atención en una atmósfera íntima y memorable.',
    coverImage: '/assets/projects/com-2-isabella-spa-1.webp',
    gallery: [
      '/assets/projects/com-2-isabella-spa-1.webp',
      '/assets/projects/com-2-isabella-spa-2.webp',
      '/assets/projects/com-2-isabella-spa-3.webp',
      '/assets/projects/com-2-isabella-spa-4.webp',
      '/assets/projects/com-2-isabella-spa-5.webp',
      '/assets/projects/com-2-isabella-spa-6.webp',
      '/assets/projects/com-2-isabella-spa-7.webp',
      '/assets/projects/com-2-isabella-spa-8.webp',
      '/assets/projects/com-2-isabella-spa-9.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Chiclayo, Lambayeque' },
      { label: 'Tipología', value: 'Centro de Estética & Relajación' },
      { label: 'Área diseñada', value: '10.60 m²' },
      { label: 'Año', value: '2024' },
      { label: 'Estado', value: 'Proyecto Integral' },
      { label: 'Materialidad', value: 'Madera clara, paneles acanalados, espejos y metal dorado' },
      { label: 'Enfoque', value: 'Amplitud espacial e identidad boutique' }
    ]
  },
  {
    id: 'guarderia-juegos',
    number: 3,
    title: 'Sala de Juegos Guardería',
    category: 'Diseño Comercial',
    typology: 'Espacio Educativo & Lúdico Infantil',
    location: 'Trujillo, La Libertad',
    year: '2023',
    areaBuilt: '120 m²',
    status: 'Proyecto Integral',
    featured: true,
    excerpt: 'Un escenario lleno de luz natural y tonos suaves donde cada rincón invita a los niños a imaginar, trepar y explorar.',
    description: 'En estos 120 m² en Trujillo, el juego toma forma en una casita de dos niveles con tobogán, piscina de pelotas y circuitos blandos diseñados para moverse con libertad. Entre montañas iluminadas, nubes colgantes y estanterías bajas al alcance de sus manos, el espacio acompaña la curiosidad y la alegría de descubrir juntos.',
    coverImage: '/assets/projects/com-3-sala-de-juegos-guarderia-1.webp',
    gallery: [
      '/assets/projects/com-3-sala-de-juegos-guarderia-1.webp',
      '/assets/projects/com-3-sala-de-juegos-guarderia-2.webp',
      '/assets/projects/com-3-sala-de-juegos-guarderia-3.webp',
      '/assets/projects/com-3-sala-de-juegos-guarderia-4.webp',
      '/assets/projects/com-3-sala-de-juegos-guarderia-5.webp',
      '/assets/projects/com-3-sala-de-juegos-guarderia-6.webp',
      '/assets/projects/com-3-sala-de-juegos-guarderia-7.webp',
      '/assets/projects/com-3-sala-de-juegos-guarderia-8.webp',
      '/assets/projects/com-3-sala-de-juegos-guarderia-9.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Trujillo, La Libertad' },
      { label: 'Tipología', value: 'Espacio Educativo & Lúdico Infantil' },
      { label: 'Área diseñada', value: '120 m²' },
      { label: 'Año', value: '2023' },
      { label: 'Estado', value: 'Proyecto Integral' },
      { label: 'Materialidad', value: 'Madera, melamina pastel, pisos blandos y vidrio pavonado' },
      { label: 'Enfoque', value: 'Juego libre, exploración sensorial y escala infantil' }
    ]
  },
  {
    id: 'stand-comercial-heinz-club',
    number: 4,
    title: 'Stand Heinz Club',
    category: 'Diseño Comercial',
    typology: 'Arquitectura Comercial & Retail Deportivo',
    location: 'Chiclayo, Lambayeque',
    year: '2023',
    areaBuilt: '7.5 m²',
    status: 'Proyecto Integral',
    featured: false,
    excerpt: 'Transparencia en esquina, concreto crudo y líneas de luz verde consolidan la identidad deportiva de este módulo de 7.5 m².',
    description: 'En Chiclayo, el diseño convierte un local compacto en una experiencia de compra ágil y memorable. La fachada acristalada integra la exhibición perimetral en altura con un interior despejado, equilibrando la sobriedad del metal negro con una iluminación focalizada que jerarquiza cada prenda.',
    coverImage: '/assets/projects/com-4-heinz-club-1.webp',
    gallery: [
      '/assets/projects/com-4-heinz-club-1.webp',
      '/assets/projects/com-4-heinz-club-2.webp',
      '/assets/projects/com-4-heinz-club-3.webp',
      '/assets/projects/com-4-heinz-club-4.webp',
      '/assets/projects/com-4-heinz-club-5.webp',
      '/assets/projects/com-4-heinz-club-6.webp',
      '/assets/projects/com-4-heinz-club-7.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Chiclayo, Lambayeque' },
      { label: 'Tipología', value: 'Arquitectura Comercial & Retail Deportivo' },
      { label: 'Área diseñada', value: '7.5 m²' },
      { label: 'Año', value: '2023' },
      { label: 'Estado', value: 'Proyecto Integral' },
      { label: 'Materialidad', value: 'Concreto, metal negro, vidrio e iluminación LED' },
      { label: 'Enfoque', value: 'Identidad de marca y exhibición en altura' }
    ]
  },
  {
    id: 'spa-love-kids',
    number: 5,
    title: 'Spa Love Kids',
    category: 'Diseño Comercial',
    typology: 'Centro de Bienestar y Spa Infantil',
    location: 'Lambayeque, Lambayeque',
    year: '2024',
    areaBuilt: '80 m²',
    status: 'Proyecto Integral',
    featured: false,
    excerpt: 'Un árbol escultórico con mirador y un iglú pastel articulan este mundo de fantasía pensado para despertar la imaginación.',
    description: 'En 80 m² en Lambayeque, el recorrido une entretenimiento y calma familiar bajo una misma mirada. A los lados, estaciones de belleza en arcos con espejos retroiluminados convierten cada atención en una aventura; al fondo, la barra café y una banca acogedora permiten a los padres descansar sin perder de vista a sus hijos.',
    coverImage: '/assets/projects/com-5-spa-love-kids-1.webp',
    gallery: [
      '/assets/projects/com-5-spa-love-kids-1.webp',
      '/assets/projects/com-5-spa-love-kids-2.webp',
      '/assets/projects/com-5-spa-love-kids-3.webp',
      '/assets/projects/com-5-spa-love-kids-4.webp',
      '/assets/projects/com-5-spa-love-kids-5.webp',
      '/assets/projects/com-5-spa-love-kids-6.webp',
      '/assets/projects/com-5-spa-love-kids-7.webp',
      '/assets/projects/com-5-spa-love-kids-8.webp',
      '/assets/projects/com-5-spa-love-kids-9.webp',
      '/assets/projects/com-5-spa-love-kids-10.webp',
      '/assets/projects/com-5-spa-love-kids-11.webp',
      '/assets/projects/com-5-spa-love-kids-12.webp',
      '/assets/projects/com-5-spa-love-kids-13.webp',
      '/assets/projects/com-5-spa-love-kids-14.webp',
      '/assets/projects/com-5-spa-love-kids-15.webp',
      '/assets/projects/com-5-spa-love-kids-16.webp',
      '/assets/projects/com-5-spa-love-kids-17.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Lambayeque, Lambayeque' },
      { label: 'Tipología', value: 'Centro de Bienestar y Spa Infantil' },
      { label: 'Área diseñada', value: '80 m²' },
      { label: 'Año', value: '2024' },
      { label: 'Estado', value: 'Proyecto Integral' },
      { label: 'Materialidad', value: 'Madera clara, melamina pastel, porcelanato brillante e iluminación LED' },
      { label: 'Enfoque', value: 'Fantasía espacial, juego y confort familiar' }
    ]
  },
  {
    id: 'restaurante-campestre-los-patos',
    number: 6,
    title: 'Restaurante Campestre Los Patos',
    category: 'Diseño Comercial',
    typology: 'Arquitectura Gastronómica & Recreativa',
    location: 'Chepén, La Libertad',
    year: '2023',
    areaBuilt: '150 m²',
    status: 'Proyecto Integral',
    featured: false,
    excerpt: 'Pérgolas blancas escalonadas, vegetación colgante y luminarias tejidas crean un pabellón abierto a la brisa del campo.',
    description: 'En 150 m² en Chepén, la arquitectura ordena distintos modos de compartir bajo un ritmo constante de sol y sombra. Salas lounge, bancas corridas de madera y mesas altas conviven sobre pisos de adoquín y concreto, conectando de forma fluida con la zona infantil y el paisaje verde.',
    coverImage: '/assets/projects/com-6-restaurante-campestre-los-patos-1.webp',
    gallery: [
      '/assets/projects/com-6-restaurante-campestre-los-patos-1.webp',
      '/assets/projects/com-6-restaurante-campestre-los-patos-2.webp',
      '/assets/projects/com-6-restaurante-campestre-los-patos-3.webp',
      '/assets/projects/com-6-restaurante-campestre-los-patos-4.webp',
      '/assets/projects/com-6-restaurante-campestre-los-patos-5.webp',
      '/assets/projects/com-6-restaurante-campestre-los-patos-6.webp',
      '/assets/projects/com-6-restaurante-campestre-los-patos-7.webp',
      '/assets/projects/com-6-restaurante-campestre-los-patos-8.webp',
      '/assets/projects/com-6-restaurante-campestre-los-patos-9.webp',
      '/assets/projects/com-6-restaurante-campestre-los-patos-10.webp',
      '/assets/projects/com-6-restaurante-campestre-los-patos-11.webp',
      '/assets/projects/com-6-restaurante-campestre-los-patos-12.webp',
      '/assets/projects/com-6-restaurante-campestre-los-patos-13.webp',
      '/assets/projects/com-6-restaurante-campestre-los-patos-14.webp'
    ],
    galleryAlts: [
      'Fachada frontal del pabellón de pérgolas blancas con cubierta de madera, vegetación colgante y acceso en deck con gravilla en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Perspectiva esquinada de pérgolas blancas escalonadas, maceteros suspendidos y conexión visual con el parque infantil en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Elevación lateral mostrando los tres niveles escalonados de pérgolas blancas, sendero de losas de concreto y mesas altas en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Vista oblicua del pabellón campestre abierto hacia el paisaje verde con salas lounge y antorchas de fibra natural en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Recorrido interior junto a la banca corrida de madera con jardineras integradas, lámparas tejidas y piso de adoquín en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Perspectiva frontal de salas lounge con cojines celestes y lilas, jardineras negras y techo de listones de madera en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Eje interior hacia la zona de juegos infantiles, sofás de madera, mesas familiares y luminarias de fibra natural en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Eje central del salón con mesas altas redondas, bancos de madera, tinajas cerámicas y discos tejidos en columnas en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Zona lateral de comedor y sala lounge abierta hacia la pradera bajo pérgola con plantas colgantes en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Vista posterior desde las salas lounge hacia el fogatero exterior, colinas verdes y comedores centrales en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Perspectiva trasera de la banca corrida de madera, comedores familiares y techo de sol y sombra con vegetación en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Sector de mesas altas de madera y acero negro sobre piso de concreto y adoquín abierto al campo en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Vista longitudinal del salón con mesas rectangulares, sillas de madera clara y discos de fibra natural en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos',
      'Detalle de la banca continua de madera con jardinera tropical, comedor familiar y transición a la zona infantil en Restaurante Campestre Los Patos, Chepén, La Libertad | Antarr Arquitectos'
    ],
    specs: [
      { label: 'Ubicación', value: 'Chepén, La Libertad' },
      { label: 'Tipología', value: 'Arquitectura Gastronómica & Recreativa' },
      { label: 'Área diseñada', value: '150 m²' },
      { label: 'Año', value: '2023' },
      { label: 'Estado', value: 'Proyecto Integral' },
      { label: 'Materialidad', value: 'Estructura metálica blanca, madera, fibras naturales y concreto' },
      { label: 'Enfoque', value: 'Pérgolas escalonadas, frescura natural y encuentro familiar' }
    ]
  },
  {
    id: 'guarderia-descanso',
    number: 7,
    title: 'Sala de Descanso Guardería',
    category: 'Diseño Comercial',
    typology: 'Espacio de Reposo Educativo Infantil',
    location: 'Trujillo, La Libertad',
    year: '2023',
    areaBuilt: '50 m²',
    status: 'Proyecto Integral',
    featured: false,
    excerpt: 'Bajo un cielo de nubes suaves y luz cálida, este espacio transforma la hora del descanso en un ritual de calma para los niños.',
    description: 'Proyectada en 50 m² en Trujillo, la sala acompaña la transición hacia el sueño mediante una secuencia serena. El área previa con pufs y lectura invita a bajar el ritmo antes de cruzar un pórtico luminoso hacia las cunas de madera, envueltas por un mural nocturno y casitas iluminadas.',
    coverImage: '/assets/projects/com-7-sala-de-descanso-guarderia-1.webp',
    gallery: [
      '/assets/projects/com-7-sala-de-descanso-guarderia-1.webp',
      '/assets/projects/com-7-sala-de-descanso-guarderia-2.webp',
      '/assets/projects/com-7-sala-de-descanso-guarderia-3.webp',
      '/assets/projects/com-7-sala-de-descanso-guarderia-4.webp',
      '/assets/projects/com-7-sala-de-descanso-guarderia-5.webp',
      '/assets/projects/com-7-sala-de-descanso-guarderia-6.webp',
      '/assets/projects/com-7-sala-de-descanso-guarderia-7.webp',
      '/assets/projects/com-7-sala-de-descanso-guarderia-8.webp',
      '/assets/projects/com-7-sala-de-descanso-guarderia-9.webp'
    ],
    galleryAlts: [
      'Vista general de la antesala con sillones blandos, mueble zapatero, pórtico con letrero luminoso sweet dreams y zona de cunas en Sala de Descanso Guardería, Trujillo, La Libertad | Antarr Arquitectos',
      'Zona posterior de siesta con seis cunas mecedoras pastel, mural nocturno de globos aerostáticos y estantería iluminada de casitas en Sala de Descanso Guardería, Trujillo, La Libertad | Antarr Arquitectos',
      'Perspectiva hacia la mampara corrediza de vidrio texturizado en el ingreso, sillones puffs textiles y lámparas traslúcidas en Sala de Descanso Guardería, Trujillo, La Libertad | Antarr Arquitectos',
      'Recorrido longitudinal desde el área de cunas hacia el pórtico empapelado, cielo raso con nubes en relieve y puerta de acceso en Sala de Descanso Guardería, Trujillo, La Libertad | Antarr Arquitectos',
      'Rincón de ingreso con zapatero infantil, repisas flotantes, cortinas degradadas en celeste y puff de tela junto a zócalo acolchado en Sala de Descanso Guardería, Trujillo, La Libertad | Antarr Arquitectos',
      'Zona de lectura y calma con sillones mullidos, zócalo ondulado acolchado, cuadros ilustrados y luminarias colgantes azules en Sala de Descanso Guardería, Trujillo, La Libertad | Antarr Arquitectos',
      'Detalle frontal del mural de luna, estrellas y globos sobre la estantería de madera con casitas de colores y peluches en Sala de Descanso Guardería, Trujillo, La Libertad | Antarr Arquitectos',
      'Vista lateral de tres cunas mecedoras con estrella calada en tonos amarillo, menta y rosa junto a cuadros infantiles en Sala de Descanso Guardería, Trujillo, La Libertad | Antarr Arquitectos',
      'Sector de cunas bajo ventana con cortinas degradadas, repisas en forma de nube y lámparas colgantes ámbar en Sala de Descanso Guardería, Trujillo, La Libertad | Antarr Arquitectos'
    ],
    specs: [
      { label: 'Ubicación', value: 'Trujillo, La Libertad' },
      { label: 'Tipología', value: 'Espacio de Reposo Educativo Infantil' },
      { label: 'Área diseñada', value: '50 m²' },
      { label: 'Año', value: '2023' },
      { label: 'Estado', value: 'Proyecto Integral' },
      { label: 'Materialidad', value: 'Madera laqueada pastel, pisos blandos, textiles y vidrio texturizado' },
      { label: 'Enfoque', value: 'Transición serena, escala infantil y calma sensorial' }
    ]
  },
  {
    id: 'explanada-color-park',
    number: 8,
    title: 'Color Park',
    category: 'Diseño Comercial',
    typology: 'Parque Recreacional Infantil & Familiar',
    location: 'Chepén, La Libertad',
    year: '2023',
    areaBuilt: '200 m²',
    status: 'Proyecto Integral',
    featured: false,
    excerpt: 'Bajo una pérgola de paneles translúcidos que tiñen la luz del sol, este parque abierto convierte el juego en pura imaginación.',
    description: 'Proyectado en 200 m² en Chepén, el recorrido inicia tras un umbral arcoíris que da paso a un pabellón integrado a los árboles existentes. Sus pisos blandos y estaciones recreativas ordenan cada actividad con fluidez, mientras las islas de césped al centro brindan sombra y visibilidad plena a las familias.',
    coverImage: '/assets/projects/com-8-explanada-de-juegos-color-park-1.webp',
    gallery: [
      '/assets/projects/com-8-explanada-de-juegos-color-park-1.webp',
      '/assets/projects/com-8-explanada-de-juegos-color-park-2.webp',
      '/assets/projects/com-8-explanada-de-juegos-color-park-3.webp',
      '/assets/projects/com-8-explanada-de-juegos-color-park-4.webp',
      '/assets/projects/com-8-explanada-de-juegos-color-park-5.webp',
      '/assets/projects/com-8-explanada-de-juegos-color-park-6.webp',
      '/assets/projects/com-8-explanada-de-juegos-color-park-7.webp',
      '/assets/projects/com-8-explanada-de-juegos-color-park-8.webp',
      '/assets/projects/com-8-explanada-de-juegos-color-park-9.webp'
    ],
    galleryAlts: [
      'Fachada principal con umbral arcoíris de unicornio, cerco perimetral translúcido de colores y conexión con el restaurante campestre en Color Park, Chepén, La Libertad | Antarr Arquitectos',
      'Recepción infantil y zapatero central bajo pérgola de paneles de policarbonato de colores, árbol integrado y túnel oruga en Color Park, Chepén, La Libertad | Antarr Arquitectos',
      'Perspectiva lateral del circuito de juegos con casita infantil, torres con toboganes azules, pisos blandos y cubierta translúcida en Color Park, Chepén, La Libertad | Antarr Arquitectos',
      'Zona de juegos principales, camino multicolor sobre piso blando e isla de césped con pufs bajo árbol existente en Color Park, Chepén, La Libertad | Antarr Arquitectos',
      'Módulo recreativo con temática de safari, toboganes rojos y techo de policarbonato cromático abierto al paisaje en Color Park, Chepén, La Libertad | Antarr Arquitectos',
      'Recorrido interior con tobogán morado, sendero de franjas de colores, cerco translúcido e isla verde de descanso en Color Park, Chepén, La Libertad | Antarr Arquitectos',
      'Isla central de césped con módulos de descanso bajo el árbol integrado a la estructura blanca y vista al área gastronómica en Color Park, Chepén, La Libertad | Antarr Arquitectos',
      'Área de descanso familiar sobre césped con pufs de colores, visibilidad plena hacia la recepción y circuitos infantiles en Color Park, Chepén, La Libertad | Antarr Arquitectos',
      'Detalle de torres de juegos unidas por puente colgante, escalera trepadora y reflejos cromáticos del techo en Color Park, Chepén, La Libertad | Antarr Arquitectos'
    ],
    specs: [
      { label: 'Ubicación', value: 'Chepén, La Libertad' },
      { label: 'Tipología', value: 'Parque Recreacional Infantil & Familiar' },
      { label: 'Área diseñada', value: '200 m²' },
      { label: 'Año', value: '2023' },
      { label: 'Estado', value: 'Proyecto Integral' },
      { label: 'Materialidad', value: 'Estructura metálica blanca, policarbonato translúcido y pisos blandos' },
      { label: 'Enfoque', value: 'Integración natural, juego seguro y visibilidad familiar' }
    ]
  },

  // =========================================================================
  // --- 3. DISEÑO DE INTERIORES (8 Espacios Arquitectónicos) ---
  // =========================================================================
  {
    id: 'int-sala-estar',
    number: 1,
    title: 'Sala - Estar',
    category: 'Diseño de Interiores',
    typology: 'Espacio Social & Estar Residencial',
    location: 'Costa Norte, Perú',
    status: 'Diseño de Interiores',
    featured: true,
    excerpt: 'Ambientes sociales pensados para compartir sin prisa, donde la amplitud visual y la luz suave invitan a quedarse.',
    description: 'Cada propuesta de sala articula la fluidez entre el ingreso, las circulaciones y las zonas de encuentro. Mediante revestimientos nobles, mobiliario proporcionado a la escala de cada vivienda y atmósferas envolventes, el diseño equilibra el carácter contemporáneo con la intimidad del hogar.',
    coverImage: '/assets/projects/int-1-sala---estar-1.webp',
    gallery: [
      '/assets/projects/int-1-sala---estar-1.webp',
      '/assets/projects/int-1-sala---estar-2.webp',
      '/assets/projects/int-1-sala---estar-3.webp',
      '/assets/projects/int-1-sala---estar-4.webp',
      '/assets/projects/int-1-sala---estar-5.webp',
      '/assets/projects/int-1-sala---estar-6.webp',
      '/assets/projects/int-1-sala---estar-7.webp',
      '/assets/projects/int-1-sala---estar-8.webp',
      '/assets/projects/int-1-sala---estar-9.webp',
      '/assets/projects/int-1-sala---estar-10.webp',
      '/assets/projects/int-1-sala---estar-11.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Costa Norte, Perú' },
      { label: 'Tipología', value: 'Espacio Social & Estar Residencial' },
      { label: 'Alcance', value: 'Diseño Interior & Mobiliario a Medida' },
      { label: 'Materialidad', value: 'Madera natural, mármol, porcelanato, acero y textiles neutros' },
      { label: 'Iluminación', value: 'Spots empotrados, perfiles LED cálidos y luminarias escultóricas' },
      { label: 'Enfoque', value: 'Integración espacial, calidez material y confort social' }
    ]
  },
  {
    id: 'int-cocina-comedor',
    number: 2,
    title: 'Cocina - Comedor',
    category: 'Diseño de Interiores',
    typology: 'Cocina Integral & Comedor Social',
    location: 'Costa Norte, Perú',
    status: 'Diseño de Interiores',
    featured: true,
    excerpt: 'Ambientes abiertos donde el ritual de cocinar se integra al encuentro familiar con calidez, amplitud y orden.',
    description: 'Nuestras propuestas de cocina y comedor diluyen los límites entre preparar y recibir. Mediante distribuciones fluidas, frentes limpios que ocultan el almacenamiento y una transición serena hacia la mesa principal, cada diseño convierte la rutina diaria en un momento acogedor.',
    coverImage: '/assets/projects/int-2-cocina---comedor-1.webp',
    gallery: [
      '/assets/projects/int-2-cocina---comedor-1.webp',
      '/assets/projects/int-2-cocina---comedor-2.webp',
      '/assets/projects/int-2-cocina---comedor-3.webp',
      '/assets/projects/int-2-cocina---comedor-4.webp',
      '/assets/projects/int-2-cocina---comedor-5.webp',
      '/assets/projects/int-2-cocina---comedor-6.webp',
      '/assets/projects/int-2-cocina---comedor-7.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Costa Norte, Perú' },
      { label: 'Tipología', value: 'Cocina Integral & Comedor Social' },
      { label: 'Alcance', value: 'Diseño Interior & Mobiliario a Medida' },
      { label: 'Materialidad', value: 'Cuarzo veteado, madera acanalada, melamina mate y acentos dorados' },
      { label: 'Iluminación', value: 'Tiras LED bajo alacenas, luminaria lineal colgante y spots cálidos' },
      { label: 'Enfoque', value: 'Ergonomía culinaria, isla social y continuidad visual' }
    ]
  },
  {
    id: 'int-roof-top',
    number: 3,
    title: 'Roof Top',
    category: 'Diseño de Interiores',
    typology: 'Terraza Superior & Lounge Bar',
    location: 'Costa Norte, Perú',
    status: 'Diseño de Interiores',
    featured: true,
    excerpt: 'Espacios abiertos al cielo y a la brisa, donde la sombra ligera y una atmósfera acogedora invitan a reunirse sin prisa.',
    description: 'Nuestras propuestas para el último nivel articulan salas de estar, comedores sociales, barras de bar y rincones de descanso sin interrumpir el paisaje. Las jardineras envolventes y las cubiertas caladas acompañan con naturalidad el paso de la tarde a la noche, sumando intimidad y amplitud al hogar.',
    coverImage: '/assets/projects/int-3-roof-top-1.webp',
    gallery: [
      '/assets/projects/int-3-roof-top-1.webp',
      '/assets/projects/int-3-roof-top-2.webp',
      '/assets/projects/int-3-roof-top-3.webp',
      '/assets/projects/int-3-roof-top-4.webp',
      '/assets/projects/int-3-roof-top-5.webp',
      '/assets/projects/int-3-roof-top-6.webp',
      '/assets/projects/int-3-roof-top-7.webp',
      '/assets/projects/int-3-roof-top-8.webp',
      '/assets/projects/int-3-roof-top-9.webp',
      '/assets/projects/int-3-roof-top-10.webp',
      '/assets/projects/int-3-roof-top-11.webp',
      '/assets/projects/int-3-roof-top-12.webp',
      '/assets/projects/int-3-roof-top-13.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Costa Norte, Perú' },
      { label: 'Tipología', value: 'Terraza Superior & Lounge Bar' },
      { label: 'Alcance', value: 'Diseño Interior & Mobiliario a Medida' },
      { label: 'Materialidad', value: 'Madera, piedra natural, acero negro y tapicería exterior' },
      { label: 'Iluminación', value: 'Spots en pérgola, perfiles LED en peldaños y luz rasante perimetral' },
      { label: 'Enfoque', value: 'Encuentro nocturno al aire libre, fogatero y visuales panorámicas' }
    ]
  },
  {
    id: 'int-terraza-patio',
    number: 4,
    title: 'Terraza - Patio',
    category: 'Diseño de Interiores',
    typology: 'Patio Central & Espacio Abierto',
    location: 'Costa Norte, Perú',
    status: 'Diseño de Interiores',
    featured: false,
    excerpt: 'Patios centrales y terrazas abiertas donde la brisa, la sombra y el entorno verde renuevan la calma del hogar.',
    description: 'Concebidos como una extensión de las áreas sociales, nuestros diseños conectan la cocina y el estar con el exterior mediante amplios vanos corredizos. Entre espejos de agua, muros ajardinados y rincones bajo pérgola, cada propuesta convierte el aire libre en una estancia habitable y serena.',
    coverImage: '/assets/projects/int-4-terraza---patio-1.webp',
    gallery: [
      '/assets/projects/int-4-terraza---patio-1.webp',
      '/assets/projects/int-4-terraza---patio-2.webp',
      '/assets/projects/int-4-terraza---patio-3.webp',
      '/assets/projects/int-4-terraza---patio-4.webp',
      '/assets/projects/int-4-terraza---patio-5.webp',
      '/assets/projects/int-4-terraza---patio-6.webp'
    ],
    specs: [
      { label: 'Ubicación', value: 'Costa Norte, Perú' },
      { label: 'Tipología', value: 'Patio Central & Espacio Abierto' },
      { label: 'Alcance', value: 'Diseño Interior & Mobiliario a Medida' },
      { label: 'Materialidad', value: 'Piedra natural, madera, porcelanato exterior, vidrio y vegetación' },
      { label: 'Iluminación', value: 'Luz perimetral LED en muro cascada, spots en aleros y luz natural' },
      { label: 'Enfoque', value: 'Articulación interior-exterior, frescura y oasis privado' }
    ]
  },
  {
    id: 'int-dormitorios',
    number: 5,
    title: 'Dormitorios',
    category: 'Diseño de Interiores',
    typology: 'Suites Íntimas & Walk-in Closets',
    location: 'Costa Norte, Perú',
    status: 'Diseño de Interiores',
    featured: false,
    excerpt: 'Habitaciones concebidas como un refugio personal, donde las texturas suaves y el equilibrio espacial invitan al descanso.',
    description: 'Nuestras propuestas integran en un mismo lenguaje la cama, el tocador, el escritorio y el área de entretenimiento sin recargar la planta. Mediante cabeceras revestidas de piso a techo, muebles flotantes y clósets empotrados, cada suite aprovecha la luz natural y preserva una calma duradera.',
    coverImage: '/assets/projects/int-5-dormitorios-1.webp',
    gallery: [
      '/assets/projects/int-5-dormitorios-1.webp',
      '/assets/projects/int-5-dormitorios-2.webp',
      '/assets/projects/int-5-dormitorios-3.webp',
      '/assets/projects/int-5-dormitorios-4.webp',
      '/assets/projects/int-5-dormitorios-5.webp',
      '/assets/projects/int-5-dormitorios-6.webp',
      '/assets/projects/int-5-dormitorios-7.webp',
      '/assets/projects/int-5-dormitorios-8.webp',
      '/assets/projects/int-5-dormitorios-9.webp',
      '/assets/projects/int-5-dormitorios-10.webp',
      '/assets/projects/int-5-dormitorios-11.webp',
      '/assets/projects/int-5-dormitorios-12.webp',
      '/assets/projects/int-5-dormitorios-13.webp',
      '/assets/projects/int-5-dormitorios-14.webp',
      '/assets/projects/int-5-dormitorios-15.webp'
    ],
    galleryAlts: [
      'Suite principal con cabecera revestida en mármol y paneles con perfiles LED verticales, tocador con espejo ovalado retroiluminado y clóset empotrado en Costa Norte, Perú | Antarr Arquitectos',
      'Perspectiva general de dormitorio principal integrando panel de TV retroiluminado, mueble flotante, clóset blanco con tiradores dorados y tocador en Costa Norte, Perú | Antarr Arquitectos',
      'Área de entretenimiento en dormitorio con panel acanalado, revestimiento de mármol con luz perimetral, mueble suspendido y salida a balcón en Costa Norte, Perú | Antarr Arquitectos',
      'Dormitorio secundario en tonos terracota y madera clara con escritorio empotrado en nicho iluminado, cabecera geométrica y luminarias colgantes en Costa Norte, Perú | Antarr Arquitectos',
      'Vista de entretenimiento y zona de estudio en dormitorio con paneles acanalados de madera, panel de TV iluminado y mueble flotante en Costa Norte, Perú | Antarr Arquitectos',
      'Vista frontal completa de dormitorio contemporáneo integrando muro acanalado con TV, escritorio iluminado, cama matrimonial y ventanal en Costa Norte, Perú | Antarr Arquitectos',
      'Dormitorio en paleta verde salvia con cabecera de paneles geométricos en relieve, listones verticales, lámparas colgantes globo y ventanal panorámico en Costa Norte, Perú | Antarr Arquitectos',
      'Frente de TV y tocador flotante en dormitorio verde salvia con panel de mármol retroiluminado, listones verticales y acceso a terraza en Costa Norte, Perú | Antarr Arquitectos',
      'Perspectiva simétrica de suite en tonos salvia y crema integrando cama tapizada, tocador suspendido, panel de TV iluminado y vista exterior en Costa Norte, Perú | Antarr Arquitectos',
      'Dormitorio compartido juvenil con dos camas integradas en clóset de piso a techo, nichos iluminados de lectura y cajones bajos en Costa Norte, Perú | Antarr Arquitectos',
      'Dormitorio infantil-juvenil con cama tapizada en rosa empolvado, clóset con puertas en arco verde salvia, nicho iluminado y espejo de pie en Costa Norte, Perú | Antarr Arquitectos',
      'Suite de diseño envolvente con cabecera de madera acanalada empotrada entre clósets de piso a techo, nicho superior LED y puertas de vidrio acanalado en Costa Norte, Perú | Antarr Arquitectos',
      'Walk-in closet de doble frente con repisas retroiluminadas, cajoneras a medida, puf central y espejo de cuerpo entero con marco dorado en Costa Norte, Perú | Antarr Arquitectos',
      'Vestidor walk-in closet con puertas abiertas revelando módulo central de almacenamiento, exhibidor de bolsos con luz LED y organización simétrica en Costa Norte, Perú | Antarr Arquitectos',
      'Transición entre walk-in closet iluminado con puertas acristaladas y acceso directo a terraza privada techada en madera en Costa Norte, Perú | Antarr Arquitectos'
    ],
    specs: [
      { label: 'Ubicación', value: 'Costa Norte, Perú' },
      { label: 'Tipología', value: 'Suites Íntimas & Walk-in Closets' },
      { label: 'Alcance', value: 'Diseño Interior & Mobiliario a Medida' },
      { label: 'Materialidad', value: 'Paneles acanalados, mármol claro, melamina, textiles y bronce' },
      { label: 'Iluminación', value: 'Perfiles LED verticales en cabecera, apliques cálidos y espejo retroiluminado' },
      { label: 'Enfoque', value: 'Privacidad, ergonomía y almacenamiento integrado' }
    ]
  },
  {
    id: 'int-estudio',
    number: 6,
    title: 'Estudio',
    category: 'Diseño de Interiores',
    typology: 'Home Office & Biblioteca',
    location: 'Costa Norte, Perú',
    status: 'Diseño de Interiores',
    featured: false,
    excerpt: 'Ambientes de trabajo en casa diseñados para pensar y crear con calma, combinando orden visual y calidez material.',
    description: 'Proyectados para adaptarse a dinámicas individuales o compartidas, nuestros estudios integran escritorios continuos, bibliotecas abiertas y módulos cerrados en un solo frente limpio. La apertura hacia patios ajardinados y la luz natural acompañan cada jornada con amplitud y bienestar.',
    coverImage: '/assets/projects/int-6-estudio-1.webp',
    gallery: [
      '/assets/projects/int-6-estudio-1.webp',
      '/assets/projects/int-6-estudio-2.webp'
    ],
    galleryAlts: [
      'Estudio compartido en madera clara y melamina blanca mate con escritorio continuo, repisas con perfiles LED, marco acanalado y ventanal en Costa Norte, Perú | Antarr Arquitectos',
      'Home office individual en madera oscura y módulos grafito mate con biblioteca empotrada, luz lineal y apertura hacia patio ajardinado en Costa Norte, Perú | Antarr Arquitectos'
    ],
    specs: [
      { label: 'Ubicación', value: 'Costa Norte, Perú' },
      { label: 'Tipología', value: 'Home Office & Biblioteca' },
      { label: 'Alcance', value: 'Diseño Interior & Mobiliario a Medida' },
      { label: 'Materialidad', value: 'Madera clara y oscura, melamina mate, vidrio y detalles metálicos' },
      { label: 'Iluminación', value: 'Spots empotrados, perfiles LED en repisas y luz natural' },
      { label: 'Enfoque', value: 'Ergonomía, privacidad y continuidad visual' }
    ]
  },
  {
    id: 'int-servicios',
    number: 7,
    title: 'Servicios',
    category: 'Diseño de Interiores',
    typology: 'Baños & Áreas Funcionales',
    location: 'Costa Norte, Perú',
    status: 'Diseño de Interiores',
    featured: false,
    excerpt: 'Espacios íntimos y de servicio proyectados con la misma calidez, proporción y serenidad que el resto de la casa.',
    description: 'Cada propuesta eleva el carácter de los ambientes privados y de apoyo mediante trazos sobrios y superficies despejadas. Al ocultar el guardado en frentes continuos y envolver las zonas de agua con texturas pétreas, tanto los cuartos de baño como la lavandería respiran amplitud y equilibrio.',
    coverImage: '/assets/projects/int-7-servicios-1.webp',
    gallery: [
      '/assets/projects/int-7-servicios-1.webp',
      '/assets/projects/int-7-servicios-2.webp',
      '/assets/projects/int-7-servicios-3.webp',
      '/assets/projects/int-7-servicios-4.webp',
      '/assets/projects/int-7-servicios-5.webp',
      '/assets/projects/int-7-servicios-6.webp',
      '/assets/projects/int-7-servicios-7.webp',
      '/assets/projects/int-7-servicios-8.webp',
      '/assets/projects/int-7-servicios-9.webp'
    ],
    galleryAlts: [
      'Lavandería residencial con mobiliario continuo en melamina mate, tablero de granito, repisas retroiluminadas, zona de lavado y puerta de madera en Costa Norte, Perú | Antarr Arquitectos',
      'Baño de visitas con revestimiento de porcelanato pétreo, panel de madera, vanitorio suspendido en granito, espejo ovalado iluminado y nichos verticales en Costa Norte, Perú | Antarr Arquitectos',
      'Baño principal con tina, ducha tipo lluvia, hornacinas horizontales con luz LED, gabinete aéreo y vanitorio suspendido sobre madera en espiga en Costa Norte, Perú | Antarr Arquitectos',
      'Baño completo en porcelanato gris claro con tina, dos columnas de nichos iluminados, vanitorio con repisa flotante y espejo ovalado en Costa Norte, Perú | Antarr Arquitectos',
      'Perspectiva de baño en suite con tina, hornacinas empotradas iluminadas, vanitorio separado por tabique enchapado y ventanal lateral en Costa Norte, Perú | Antarr Arquitectos',
      'Vista integrada de baño principal con tina y vanitorio conectado directamente con walk-in closet iluminado de puertas acristaladas en Costa Norte, Perú | Antarr Arquitectos',
      'Baño con ducha sobre tina, panel vertical en madera oscura y zona de lavabo independiente tras marco de madera con nichos iluminados en Costa Norte, Perú | Antarr Arquitectos',
      'Detalle de baño compartimentado con tina, nicho empotrado, frente continuo de madera sobre sanitario y lavabo con espejo ovalado en Costa Norte, Perú | Antarr Arquitectos',
      'Medio baño social en tonos piedra y madera con vanitorio flotante, luminaria colgante de vidrio, espejo ovalado retroiluminado y repisas laterales en Costa Norte, Perú | Antarr Arquitectos'
    ],
    specs: [
      { label: 'Ubicación', value: 'Costa Norte, Perú' },
      { label: 'Tipología', value: 'Baños & Áreas Funcionales' },
      { label: 'Alcance', value: 'Diseño Interior & Mobiliario a Medida' },
      { label: 'Materialidad', value: 'Porcelanato gran formato, granito, melamina mate y madera' },
      { label: 'Iluminación', value: 'Luz LED cálida indirecta bajo repisas y espejos retroiluminados' },
      { label: 'Enfoque', value: 'Orden funcional, durabilidad y estética limpia' }
    ]
  },
  {
    id: 'int-cochera',
    number: 8,
    title: 'Cochera',
    category: 'Diseño de Interiores',
    typology: 'Estacionamiento & Acceso Vehicular',
    location: 'Costa Norte, Perú',
    status: 'Diseño de Interiores',
    featured: false,
    excerpt: 'Accesos residenciales donde el ingreso del vehículo y la llegada a casa conviven con amplitud, orden y calidez.',
    description: 'Nuestras propuestas conciben la cochera como una antesala habitable de la vivienda. Mediante pavimentos permeables con vegetación, paneles nobles que ocultan puertas técnicas y peldaños claros hacia el interior, cada diseño convierte el recorrido diario en una bienvenida serena.',
    coverImage: '/assets/projects/int-8-cochera-1.webp',
    gallery: [
      '/assets/projects/int-8-cochera-1.webp'
    ],
    galleryAlts: [
      'Cochera residencial techada en concreto expuesto con huellas vehiculares y franjas de césped, muro de piedra laja retroiluminado, paneles de madera que integran puertas de acceso y peldaños peatonales en Costa Norte, Perú | Antarr Arquitectos'
    ],
    specs: [
      { label: 'Ubicación', value: 'Costa Norte, Perú' },
      { label: 'Tipología', value: 'Estacionamiento & Acceso Vehicular' },
      { label: 'Alcance', value: 'Diseño Interior & Mobiliario a Medida' },
      { label: 'Materialidad', value: 'Concreto expuesto, piedra laja, madera tratada y franjas de césped' },
      { label: 'Iluminación', value: 'Spots de techo en rieles, luz rasante en piedra y perfil LED en ingresos' },
      { label: 'Enfoque', value: 'Transición vehicular-peatonal ordenada e integrada a la fachada' }
    ]
  }
];
