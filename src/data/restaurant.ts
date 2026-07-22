export const restaurant = {
  name: 'Mesón Castellano Maqueda',
  shortName: 'Mesón Castellano',
  foundingYear: 1959,
  address: 'Carretera N-V, km 74, Maqueda',
  phone: '+34 925 79 00 14',
  phoneDisplay: '925 79 00 14',
  phoneHref: '+34925790014',
  email: 'reservas@mesoncastellanomaqueda.es',
  cuisine: 'Cocina tradicional castellana',
  description:
    'Mesón Castellano Maqueda, casa fundada en 1959. Cocina tradicional, producto de calidad y celebraciones en Maqueda, Toledo.',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Mes%C3%B3n%20Castellano%20Maqueda%20Carretera%20N-V%20km%2074',
  bookingUrl: 'https://mesoncastellanomaqueda.myrestoo.net/es/reservar',
  reservationUrl: 'https://mesoncastellanomaqueda.myrestoo.net/es/reservar',
  website: 'https://www.mesoncastellanomaqueda.es',
  instagram: 'https://www.instagram.com/mesoncastellano/',
  instagramHandle: '@mesoncastellano',
  eventsInstagram: 'https://www.instagram.com/laventilladelescribano/',
  eventsInstagramHandle: '@laventilladelescribano',
  bookingHours: {
    lunch: '13:30–16:00',
    dinner: '21:00–23:00',
  },
} as const;

export const assetPaths = {
  logo: '/images/logo/meson-castellano-logo.png',
  hero: '/hero.png',
} as const;
