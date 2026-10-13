export const site = {
  name: "Veska",
  title: "Veska — Páginas web para negocios reales",
  description: "Diseño y desarrollo de páginas web simples, lindas y efectivas para profesionales, tiendas y negocios locales en Chile. Planes desde $150.000 CLP.",
  year: new Date().getFullYear(),
};

export const services = [
  {
    number: "01",
    title: "Tiendas y catálogos",
    text: "Muestra productos, colecciones, precios y disponibilidad con un camino directo para consultar o comprar por WhatsApp.",
    meta: "Productos · Categorías · Consultas",
  },
  {
    number: "02",
    title: "Profesionales",
    text: "Presenta tu enfoque, servicios y experiencia con claridad, y conecta tu agenda o canal de contacto habitual.",
    meta: "Servicios · Perfil · Reservas",
  },
  {
    number: "03",
    title: "Belleza y servicios locales",
    text: "Ordena servicios, precios, horarios, ubicación y reservas en una experiencia visual que se sienta tan cuidada como tu trabajo.",
    meta: "Galería · Precios · Ubicación",
  },
];

export const concepts = [
  {
    number: "01",
    name: "Luma Objetos",
    category: "Tienda de accesorios · Concepto",
    description: "Una vitrina digital cálida y ordenada, con categorías simples, fichas breves y consultas directas por WhatsApp.",
    tags: ["Catálogo", "Categorías", "WhatsApp"],
    image: "luma",
    width: 1536,
    height: 1024,
    alt: "Accesorios de metal y objetos de vidrio sobre una superficie de piedra cálida.",
  },
  {
    number: "02",
    name: "Elena Rojas",
    category: "Psicología · Concepto",
    description: "Un sitio sereno y cercano para explicar el enfoque profesional, resolver dudas y facilitar la reserva de una primera sesión.",
    tags: ["Perfil", "Servicios", "Agenda externa"],
    image: "elena",
    width: 1536,
    height: 1024,
    alt: "Consulta serena con sillón de lino, madera y luz natural.",
  },
  {
    number: "03",
    name: "Mora Studio",
    category: "Nail studio · Concepto",
    description: "Una experiencia visual para presentar servicios, precios, estilo y disponibilidad, con un acceso claro a reservas.",
    tags: ["Servicios", "Galería", "Reservas"],
    image: "mora",
    width: 1536,
    height: 1024,
    alt: "Manos con manicure color vino sobre una superficie de piedra y lino.",
  },
];

export const craft = [
  ["Responsive de verdad", "El contenido se reorganiza para cada tamaño, sin esconder lo importante."],
  ["Rápida y liviana", "Imágenes optimizadas, código preciso y solo las animaciones que aportan."],
  ["Accesible", "Contraste, foco, teclado y movimiento reducido considerados desde el inicio."],
  ["Con intención", "Nada está puesto porque sí: cada bloque ayuda a entender o avanzar."],
];

export const process = [
  ["Conversamos", "Nos cuentas sobre tu negocio, tus clientes y lo que necesitas mostrar o resolver."],
  ["Diseñamos", "Ordenamos el contenido y construimos una propuesta visual alineada con tu identidad."],
  ["Ajustamos", "Revisamos contigo la propuesta y aplicamos la ronda de cambios incluida en tu plan."],
  ["Publicamos", "Dejamos el sitio responsive, optimizado y listo en tu dominio."],
];

export const plans = [
  {
    key: "essential",
    name: "Esencial",
    price: "$150.000",
    tagline: "Para empezar con una presencia clara y profesional.",
    includes: [
      "Landing one-page de hasta 5 secciones",
      "Diseño responsive para celular y computador",
      "Colores y tipografías de tu marca",
      "Formulario de contacto y botón a WhatsApp",
      "Mapa o ubicación, si corresponde",
      "Optimización básica de imágenes",
      "SEO técnico básico y metadatos sociales",
      "Carga inicial del contenido entregado",
      "1 ronda consolidada de cambios",
    ],
    ideal: "Profesionales independientes, portafolios y servicios con una oferta acotada.",
  },
  {
    key: "business",
    name: "Negocio",
    price: "$220.000",
    badge: "Más elegido",
    tagline: "Para mostrar más servicios o productos y guiar mejor cada consulta.",
    includes: [
      "Todo lo del Plan Esencial",
      "Hasta 5 páginas o landing extendida equivalente",
      "Catálogo visual de hasta 30 productos o servicios",
      "Categorías y estados de disponibilidad",
      "Consultas por WhatsApp con mensaje contextual",
      "Integración con reserva externa",
      "Galería o portafolio filtrable simple",
      "Preguntas frecuentes y SEO por página",
      "1 ronda consolidada de cambios",
    ],
    ideal: "Tiendas pequeñas, centros de estética, barberías, estudios y negocios que necesitan orden.",
  },
  {
    key: "pro",
    name: "Pro",
    price: "$300.000",
    tagline: "Para una presencia más completa, personalizada y preparada para crecer.",
    includes: [
      "Todo lo del Plan Negocio",
      "Sitio de hasta 7 páginas",
      "Catálogo visual de hasta 60 productos o servicios",
      "Páginas individuales de detalle",
      "Filtros o buscador simple",
      "Promociones o novedades cargadas inicialmente",
      "Formularios personalizados e Instagram destacado",
      "Configuración de Analytics, si entregas el ID",
      "Dominio, animaciones y composición personalizada",
      "2 rondas consolidadas de cambios",
    ],
    ideal: "Negocios con varias categorías, servicios o contenidos que necesitan recorridos distintos.",
  },
];

export const comparison = [
  ["Precio base", "$150.000", "$220.000", "$300.000"],
  ["Secciones / páginas", "Hasta 5 secciones", "Hasta 5 páginas", "Hasta 7 páginas"],
  ["Responsive", "Sí", "Sí", "Sí"],
  ["Contacto / WhatsApp", "Sí", "Sí", "Sí"],
  ["Catálogo", "—", "Hasta 30 ítems", "Hasta 60 ítems"],
  ["Categorías", "—", "Sí", "Sí"],
  ["Filtros / buscador", "—", "Simple", "Sí"],
  ["Páginas de detalle", "—", "—", "Sí"],
  ["Reserva externa", "—", "Sí", "Sí"],
  ["SEO básico", "Sí", "Por página", "Por página"],
  ["Analytics", "—", "—", "Configuración"],
  ["Rondas de cambios", "1", "1", "2"],
  ["Panel administrable", "No", "No", "No"],
];

export const faqs = [
  ["¿Qué necesito enviarles?", "Para comenzar necesitamos la información principal de tu negocio: servicios o productos, precios, datos de contacto, logo si existe y las mejores fotos que tengas. También sirve tu Instagram, una web anterior o referencias visuales. Si aún no tienes todo listo, partimos ordenando lo esencial y te indicamos qué falta."],
  ["¿Incluye dominio y hosting?", "No están incluidos en el valor del plan porque su precio depende del proveedor y se pagan de forma periódica. Te ayudamos a elegir una opción adecuada, comprarla a tu nombre y dejar el sitio correctamente conectado."],
  ["¿Puedo vender y recibir pagos en la web?", "Los planes publicados permiten mostrar productos, precios y disponibilidad, y llevar cada consulta o pedido a WhatsApp. Si necesitas carrito, pagos online, inventario o un e-commerce completo, lo revisamos y cotizamos como un proyecto distinto."],
  ["¿Podré cambiar el contenido por mi cuenta?", "Estos planes no incluyen un panel de administración. Entregamos el contenido inicial cargado y listo para publicar. Después, puedes pedir cambios puntuales o contratar una modalidad de mantención según la frecuencia que necesites."],
  ["¿Cuánto demora?", "El plazo depende del plan, del volumen de contenido y de que los textos e imágenes estén disponibles. Antes de comenzar definimos por escrito el calendario, las etapas de revisión y una fecha estimada de entrega."],
  ["¿Qué significa una ronda de cambios?", "Es una etapa de revisión en la que reúnes todos tus comentarios en una sola lista. Aplicamos esos ajustes juntos para avanzar de forma ordenada. Los cambios que agreguen páginas, funciones o contenido fuera del alcance original se cotizan por separado."],
];
