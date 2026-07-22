export type Dish = {
  name: string;
  price: string;
  description?: string;
  featured?: boolean;
  image?: { src: string; width: number; height: number; position?: string };
};

export type MenuGroup = { name: string; dishes: Dish[] };
export type MenuCategory = {
  id: string;
  name: string;
  note: string;
  dishes?: Dish[];
  groups?: MenuGroup[];
};

// Transcripción de la carta facilitada por el restaurante. No se publican
// alérgenos porque no aparecen en las imágenes recibidas.
export const menu: MenuCategory[] = [
  {
    id: 'entradas', name: 'Entradas', note: 'Para comenzar y compartir', dishes: [
      { name: 'Alcachofas confitadas a la parrilla con papada ibérica', price: '16,50 €' },
      { name: 'Anchoas San Filippo', description: 'Servidas sobre pan de coca atomatado', price: '20,50 €' },
      { name: 'Tabla de ibéricos de bellota', price: '20,50 €' },
      { name: 'Jamón de bellota etiqueta negra', price: '25,00 €' },
      { name: 'Lomo de bellota', price: '22,50 €' },
      { name: 'Stick de berenjenas rociadas con miel de azúcar de caña', price: '13,00 €' },
      { name: 'Dúo de quesos', description: 'Curado y curado al romero', price: '16,50 €' },
      { name: 'Pulpo a la parrilla sobre crema de patata y aceite de trufa', price: '22,00 €', featured: true, image: { src: '/images/platos/pulpo.png', width: 1448, height: 1086 } },
      { name: 'Cogollitos con ventresca de bonito', price: '15,00 €' },
      { name: 'Tosta de anchoa natural de salmuera', price: '4,00 €' },
      { name: 'Tosta de foie y reducción de Pedro Ximénez', price: '15,50 €' },
      { name: 'Croquetas de jamón ibérico', description: '10 unidades', price: '17,00 €', featured: true, image: { src: '/images/platos/croquetas.png', width: 1448, height: 1086 } },
      { name: 'Pimientos rojos asados al horno con papada ibérica de bellota', price: '17,50 €' },
      { name: 'Mojama de atún con aceite de oliva', price: '14,50 €' },
      { name: 'Cecina de buey Wagyu con aceite de oliva y eneldo', price: '17,50 €' },
      { name: 'Espárragos verdes a la plancha con vinagreta de mostaza y miel', price: '14,50 €' },
      { name: 'Salteado de boletus con foie', price: '22,00 €' },
      { name: 'Gambas al ajillo', price: '18,50 €' },
      { name: 'Gambas blancas a la plancha', price: '24,00 €' },
      { name: 'Langostinos rayados a la plancha', price: '24,00 €' },
      { name: 'Setas empanadas con alioli', price: '14,50 €' },
      { name: 'Calamares de potera a la andaluza', price: '19,00 €' },
      { name: 'Parrillada de verduras', price: '16,00 €' },
      { name: 'Morcilla de Wagyu con pimientos del piquillo al horno', price: '16,00 €' },
      { name: 'Huevos a mi manera', description: 'Con pescaito frito y pimientos fritos', price: '15,50 €' },
      { name: 'Huevos con foie', description: 'Con patatas paja, foie y trufa Melanosporum', price: '20,50 €' },
      { name: 'Huevos con gulas', description: 'Con patatas paja, puré de trufa y gulas del norte', price: '20,50 €' },
    ],
  },
  {
    id: 'ensaladas', name: 'Ensaladas', note: 'Frescas y preparadas al momento', dishes: [
      { name: 'Mixta', price: '12,50 €' },
      { name: 'De temporada', description: 'Tomate de temporada, ventresca de bonito, aliñada con aceite de oliva y sal en escamas', price: '17,50 €' },
      { name: 'De bogavante', description: 'Requiere un mínimo de 20 minutos. Bogavante pelado con mezclum de lechugas aliñado con fina vinagreta de balsámico de Módena', price: '29,50 €' },
      { name: 'De perdiz', description: 'Mezclum de lechugas y perdiz Mesón', price: '18,00 €' },
      { name: 'Mesón', description: 'Canónigos, ventresca de bonito y gulas', price: '16,50 €' },
      { name: 'Castellano', description: 'Mezclum de lechugas, nueces, manzana y queso de cabra', price: '15,00 €' },
      { name: 'De salmón', description: 'Guacamole, mezclum de lechugas, salmón ahumado, salmorejo y vinagreta de balsámico', price: '18,00 €' },
    ],
  },
  {
    id: 'cuchara', name: 'Cuchara', note: 'Recetas de tradición', dishes: [
      { name: 'Sopa castellana', price: '10,00 €', featured: true, image: { src: '/images/platos/sopa-castellana.png', width: 1448, height: 1086 } },
      { name: 'Sopa de pescado', price: '11,50 €' },
      { name: 'Fabes con almejas y kokotxas de bacalao', price: '19,50 €' },
      { name: 'Judías blancas con perdiz', price: '16,00 €' },
      { name: 'Fabada asturiana', price: '16,00 €' },
      { name: 'Crema de bogavante', price: '13,00 €' },
    ],
  },
  {
    id: 'arroces', name: 'Arroces', note: 'Mínimo dos personas · 30 minutos', dishes: [
      { name: 'Arroz caldoso con bogavante', price: '24,00 € / persona' },
      { name: 'Arroz caldoso con carabineros', price: '27,50 € / persona' },
    ],
  },
  {
    id: 'carnes', name: 'Carnes', note: 'Producto, brasa y recetas de la casa', groups: [
      { name: 'Carnes', dishes: [
        { name: 'Entrecot de vaca madurada 40 días', price: '24,50 €', featured: true, image: { src: '/images/platos/entrecot.png', width: 1086, height: 1448, position: 'center 48%' } },
        { name: 'Chuletón de vaca madurada 40 días', description: '1 kg aprox. para dos personas', price: '58,00 €' },
        { name: 'Entrecot de añojo', price: '21,50 €' },
        { name: 'Solomillo de añojo', price: '24,00 €' },
        { name: 'Chuletas de lechazo', price: '20,00 €' },
        { name: 'Hamburguesa de buey Wagyu', price: '19,00 €' },
      ] },
      { name: 'Nuestros guisos', dishes: [
        { name: 'Rabo de toro deshuesado y corazón de foie', price: '23,00 €' },
        { name: 'Perdiz Mesón', price: '22,00 €' },
        { name: 'Carrillera de cerdo ibérico en reducción de Pedro Ximénez', price: '20,00 €' },
        { name: 'Capón en pepitoria', price: '20,00 €' },
        { name: 'Muslos de pato en confit con compota de manzana', price: '20,00 €' },
      ] },
      { name: 'Nuestros asados', dishes: [
        { name: 'Paletilla de lechazo', price: '30,00 €' },
        { name: 'Cuchifrito', price: '23,50 €' },
        { name: 'Cuartos de lechazo estilo Aranda', price: '58,00 €' },
        { name: 'Cochinillo asado al estilo segoviano', price: '23,50 €' },
      ] },
      { name: 'Para acompañar nuestras carnes', dishes: [
        { name: 'Roquefort o pimienta blanca', price: '3,50 €' },
        { name: 'Foie con reducción de Pedro Ximénez', price: '10,00 €' },
        { name: 'Crema de queso manchego', price: '4,50 €' },
      ] },
    ],
  },
  {
    id: 'pescados', name: 'Pescados', note: 'Selección del mar', dishes: [
      { name: 'Merluza del Cantábrico en salsa marinera', price: '23,00 €' },
      { name: 'Lenguado a la plancha', price: '24,00 €' },
      { name: 'Lomo de lubina a la plancha bañado en salsa de piquillos', price: '19,00 €' },
      { name: 'Dorada a la sal', price: '19,00 €' },
      { name: 'Lomo de rodaballo a la bilbaína', price: '21,00 €' },
      { name: 'Lomos de bacalao sobre pisto manchego', price: '20,00 €' },
      { name: 'Kokotxas de bacalao confitadas al pil pil', price: '24,50 €' },
      { name: 'Emperador a la plancha con salsa de gambas y ajitos', price: '23,50 €' },
      { name: 'Atún a la plancha con salsa de soja', price: '23,50 €' },
    ],
  },
  {
    id: 'ninos', name: 'Para los niños', note: 'Platos pensados para los más pequeños', dishes: [
      { name: 'Sopa de fideos', price: '7,50 €' },
      { name: 'Arroz blanco con tomate y huevo frito', price: '9,50 €' },
      { name: 'Espaguetis con tomate', price: '8,50 €' },
      { name: 'Lomo de cerdo con patatas', price: '10,50 €' },
      { name: 'Escalope de ternera con patatas', price: '14,00 €' },
      { name: 'Escalope de pollo con patatas', price: '11,00 €' },
      { name: 'Calamares, nuggets de pollo y patatas fritas', price: '10,50 €' },
      { name: 'Bistec de añojo', price: '14,00 €' },
      { name: 'Varitas de merluza con patatas fritas', price: '10,00 €' },
    ],
  },
  {
    id: 'postres', name: 'Sabores', note: 'El último gesto de la mesa', dishes: [
      { name: 'Marianitos', description: 'Milhoja rellena de crema de sopa de almendras acompañada de helado', price: '7,00 €' },
      { name: 'Petit Suisse de chocolate blanco', description: 'Con helado de chocolate con leche', price: '7,00 €' },
      { name: 'Mini tartitas de queso', description: 'Bañadas con nuestra salsa casera de arándanos', price: '7,00 €' },
      { name: 'Brownie de chocolate', description: 'Sobre crema de chocolate blanco con helado de nata', price: '7,00 €' },
      { name: 'El clásico del norte de Italia, tiramisú', price: '6,50 €' },
      { name: 'Fina tarta de manzana templada con helado de vainilla', price: '7,50 €' },
      { name: 'Espuma de donut sobre helado de turrón de Jijona', price: '7,00 €' },
      { name: 'Espuma de queso sobre helado de galleta María', price: '7,00 €' },
      { name: 'Torrija de pan de brioche', description: 'Sobre crema de cítricos, con helado de nata bañado en miel', price: '7,50 €' },
      { name: 'Tarta de queso manchego al 30 %', description: 'Con base de galleta y lágrima de confitura de albaricoque', price: '7,50 €', featured: true },
      { name: 'Sorbete de limón', price: '7,00 €' },
    ],
  },
];
