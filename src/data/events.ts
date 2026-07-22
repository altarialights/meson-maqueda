export type EventType = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  intro: string;
  tone: 'dark' | 'light' | 'wine' | 'corporate';
  focus: string[];
  story: string;
  sections: { title: string; text: string }[];
  seoTitle: string;
  seoDescription: string;
};

export const ventilla = {
  name: 'La Ventilla del Escribano',
  shortDescription: 'El espacio de bodas y eventos vinculado a Mesón Castellano en Maqueda.',
  description: 'La Ventilla del Escribano es el espacio de bodas y eventos vinculado a Mesón Castellano en Maqueda, concebido para celebrar cada ocasión con exclusividad.',
  relationship: 'La Ventilla del Escribano nace como el espacio de celebraciones vinculado a Mesón Castellano. Un entorno pensado para reunir, celebrar y compartir, con la cocina de la casa como parte esencial de cada experiencia.',
} as const;

export const eventTypes: EventType[] = [
  {
    slug: 'bodas', name: 'Bodas', eyebrow: 'Una celebración irrepetible', tone: 'dark',
    title: 'Bodas en La Ventilla del Escribano',
    intro: 'Una celebración pensada para disfrutar cada momento, con un entorno cuidado y la propuesta gastronómica de Mesón Castellano como protagonista.',
    story: 'Cada celebración se plantea de forma personalizada según las necesidades de la pareja.',
    focus: ['Un entorno para celebrar', 'La cocina de Mesón Castellano', 'Atención personalizada'],
    sections: [
      { title: 'Una experiencia con identidad', text: 'La celebración, la mesa y el ambiente se plantean como una experiencia conjunta, atendiendo a la esencia de cada pareja.' },
      { title: 'Gastronomía en el centro', text: 'La propuesta gastronómica de Mesón Castellano forma parte esencial de la celebración. Las opciones de menú se consultan de manera personalizada.' },
      { title: 'Cada boda, una conversación', text: 'El formato y los detalles se estudian directamente con el equipo según las necesidades de la pareja y la disponibilidad.' },
    ],
    seoTitle: 'Bodas en Maqueda | La Ventilla del Escribano',
    seoDescription: 'Celebra tu boda en La Ventilla del Escribano, el espacio vinculado a Mesón Castellano en Maqueda. Consulta disponibilidad, opciones y condiciones.',
  },
  {
    slug: 'comuniones', name: 'Comuniones', eyebrow: 'Celebraciones en familia', tone: 'light',
    title: 'Comuniones para celebrar en familia',
    intro: 'Un día especial merece un entorno cuidado, una mesa bien preparada y una propuesta gastronómica pensada para compartir.',
    story: 'Una celebración familiar en La Ventilla del Escribano, con la cocina de Mesón Castellano y atención a las necesidades de cada encuentro.',
    focus: ['Un día para compartir', 'Mesa y entorno cuidados', 'Consulta personalizada'],
    sections: [
      { title: 'Un espacio para la familia', text: 'Un entorno pensado para reunir a distintas generaciones y disfrutar juntos de un día importante.' },
      { title: 'Cocina para compartir', text: 'Las opciones gastronómicas se consultan con el equipo según el formato de la celebración.' },
      { title: 'Preparado contigo', text: 'Fecha, menú y posibilidades se valoran personalmente para adaptar la propuesta a cada familia.' },
    ],
    seoTitle: 'Comuniones en Maqueda | La Ventilla del Escribano',
    seoDescription: 'Comuniones familiares en La Ventilla del Escribano, el espacio de celebraciones vinculado a Mesón Castellano en Maqueda.',
  },
  {
    slug: 'bautizos', name: 'Bautizos', eyebrow: 'Encuentros íntimos', tone: 'wine',
    title: 'Bautizos y encuentros familiares',
    intro: 'Celebraciones cercanas y cuidadas, con la cocina de Mesón Castellano y un espacio preparado para compartir un momento importante.',
    story: 'La Ventilla del Escribano ofrece un entorno sereno donde reunirse en familia y poner la mesa en el centro de la celebración.',
    focus: ['Encuentros familiares', 'Cocina de la casa', 'Atención cercana'],
    sections: [
      { title: 'Una celebración cercana', text: 'Un encuentro familiar pensado para compartir con calma un momento importante.' },
      { title: 'La mesa como punto de encuentro', text: 'La cocina de Mesón Castellano acompaña la ocasión con opciones que se consultan directamente con el equipo.' },
      { title: 'Una propuesta a tu medida', text: 'La disponibilidad y las posibilidades de cada celebración se estudian de manera personalizada.' },
    ],
    seoTitle: 'Bautizos en Maqueda | La Ventilla del Escribano',
    seoDescription: 'Bautizos y encuentros familiares en La Ventilla del Escribano, con la gastronomía de Mesón Castellano en Maqueda.',
  },
  {
    slug: 'empresa', name: 'Eventos de empresa', eyebrow: 'Encuentros profesionales', tone: 'corporate',
    title: 'Eventos de empresa en un entorno diferente',
    intro: 'Un espacio para reunir equipos, celebrar resultados y compartir una experiencia gastronómica con el sello de Mesón Castellano.',
    story: 'Comidas de empresa, cenas de equipo, reuniones, presentaciones y encuentros profesionales en un entorno con identidad propia.',
    focus: ['Comidas y cenas de equipo', 'Reuniones y presentaciones', 'Celebraciones corporativas'],
    sections: [
      { title: 'Reunir al equipo', text: 'Un marco diferente para conversar, compartir y celebrar los momentos importantes de la empresa.' },
      { title: 'Una experiencia gastronómica', text: 'La cocina de Mesón Castellano aporta carácter a comidas, cenas y encuentros profesionales.' },
      { title: 'Consulta las posibilidades', text: 'Consulta las posibilidades de configuración, menú y servicio para tu evento.' },
    ],
    seoTitle: 'Eventos de empresa en Maqueda | Mesón Castellano',
    seoDescription: 'Comidas, cenas y encuentros de empresa en La Ventilla del Escribano, vinculada a Mesón Castellano en Maqueda.',
  },
  {
    slug: 'celebraciones', name: 'Celebraciones privadas', eyebrow: 'Momentos compartidos', tone: 'wine',
    title: 'Cada ocasión merece su propia mesa',
    intro: 'Cumpleaños, aniversarios, jubilaciones y reuniones familiares en un entorno pensado para celebrar sin prisas.',
    story: 'La Ventilla del Escribano acoge celebraciones privadas donde la gastronomía y el placer de compartir son protagonistas.',
    focus: ['Cumpleaños y aniversarios', 'Jubilaciones y comidas familiares', 'Celebraciones privadas'],
    sections: [
      { title: 'Tu ocasión, tu encuentro', text: 'Cada celebración tiene su propio ritmo y merece una propuesta coherente con quienes la comparten.' },
      { title: 'Alrededor de una buena mesa', text: 'La gastronomía de Mesón Castellano acompaña cumpleaños, aniversarios, jubilaciones y reuniones familiares.' },
      { title: 'Hablemos de tu celebración', text: 'Consulta directamente la disponibilidad y las opciones para preparar el encuentro.' },
    ],
    seoTitle: 'Celebraciones privadas en Maqueda | Mesón Castellano',
    seoDescription: 'Cumpleaños, aniversarios, jubilaciones y reuniones familiares en La Ventilla del Escribano, en Maqueda.',
  },
];

export const weddingTimeline = [
  ['01', 'Primera conversación', 'Tipo de celebración, fecha y número aproximado de invitados.'],
  ['02', 'Propuesta', 'Espacios y opciones gastronómicas confirmadas directamente por el restaurante.'],
  ['03', 'Preparación', 'Definición de los detalles disponibles y coordinación previa.'],
  ['04', 'La celebración', 'Una jornada para disfrutar de la mesa y de quienes la comparten.'],
];

export const eventFaqs = [
  ['¿Qué tipos de celebraciones se pueden organizar?', 'La Ventilla del Escribano está orientada a bodas, comuniones, bautizos, celebraciones privadas y encuentros de empresa. Consulta las posibilidades para cada ocasión.'],
  ['¿Se pueden personalizar los menús?', 'Las opciones gastronómicas y condiciones se consultan de manera personalizada según el tipo de celebración.'],
  ['¿Cómo puedo consultar disponibilidad?', 'Puedes contactar por teléfono, correo electrónico o a través del formulario de información de eventos.'],
  ['¿Dónde se encuentra?', 'En Maqueda, Toledo, vinculada a Mesón Castellano.'],
];
