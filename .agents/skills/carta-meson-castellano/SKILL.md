---
name: meson-castellano-demo-visual
description: Construye o rediseña una demo web premium para Mesón Castellano siguiendo fielmente la referencia visual proporcionada. Prioriza una home funcional en Astro, Tailwind CSS y GSAP, con hero nocturno elegante, alternancia marfil/negro, transiciones curvas y fotografías reales.
---

# Skill: Demo web basada en la referencia visual de Mesón Castellano

## Objetivo principal

Crear una **demo web real, navegable y responsive** para **Mesón Castellano**, tomando como fuente principal de dirección artística la captura visual proporcionada por el usuario.

La prioridad no es diseñar una web distinta ni reinterpretar libremente la marca. La prioridad es convertir la referencia visual en una interfaz web convincente, moderna y funcional que pueda enseñarse al cliente en lugar de una imagen estática.

El resultado debe conservar de la referencia:

- el hero nocturno y elegante;
- la composición centrada del logotipo;
- la navegación discreta en la parte superior;
- la alternancia de secciones marfil y negro;
- las transiciones curvas entre bloques;
- la fotografía cálida;
- la mezcla de tradición y modernidad;
- los títulos editoriales;
- los pequeños acentos dorados;
- los bloques amplios con imágenes;
- el ritmo vertical limpio;
- el footer oscuro;
- la sensación de restaurante histórico actualizado.

La web debe parecer una pieza hecha específicamente para Mesón Castellano, no una plantilla de WordPress.

---

# Fuente de verdad visual

Antes de escribir código, revisar obligatoriamente:

1. la captura completa de referencia;
2. el logotipo real;
3. todas las fotografías reales disponibles;
4. la carta o materiales gráficos existentes;
5. la estructura actual del proyecto;
6. cualquier dato ya confirmado del restaurante.

La captura de referencia manda sobre descripciones genéricas.

Cuando una instrucción abstracta contradiga la captura, seguir la captura siempre que no afecte a accesibilidad, rendimiento o responsive.

## Elementos visuales que deben replicarse

- Hero de gran altura, nocturno y cinematográfico.
- Iluminación blanca cálida, elegante y contenida.
- Nada de neones rosas, morados o colores exóticos dominantes.
- Logotipo o nombre centrado dentro del hero.
- Navegación superior sin logotipo grande en la esquina izquierda.
- Fondo marfil cálido en secciones editoriales.
- Fondo negro carbón en secciones gastronómicas y corporativas.
- Curvas amplias y suaves en la unión entre secciones.
- Contenedores oscuros con esquinas redondeadas.
- Imágenes con proporciones panorámicas y radios amplios.
- Tipografía serif grande en titulares.
- Sans serif limpia en textos, navegación y botones.
- Dorado envejecido usado solo como acento.
- Mucho espacio en blanco.
- Composición asimétrica y editorial.
- Transiciones visuales fluidas, no cortes rectos repetitivos.
- Footer negro integrado con una última curva clara.

## Elementos que no deben aparecer

- Logotipo grande en la esquina superior izquierda del hero.
- Tarjetas repetitivas tipo plantilla.
- Bloques rectangulares rígidos sin relación entre ellos.
- Exceso de sombras.
- Botones grandes de estilo SaaS.
- Gradientes tecnológicos.
- Neón violeta, fucsia o azul eléctrico.
- Glassmorphism evidente.
- Iconografía genérica excesiva.
- Carruseles innecesarios.
- Texto de relleno inventado presentado como real.
- Fotografías inventadas del supuesto local.

---

# Regla crítica sobre fotografías

Usar exclusivamente:

- fotografías reales aportadas por el usuario;
- fotografías ya existentes dentro del proyecto;
- imágenes de platos reales confirmados;
- recursos gráficos oficiales del restaurante.

No generar ni inventar:

- fachadas;
- salones;
- jardines;
- terrazas;
- salas de reuniones;
- espacios para eventos;
- platos concretos;
- distribución interior del establecimiento.

Si no existe una fotografía adecuada para una sección:

1. reutilizar de forma distinta una imagen real;
2. crear una composición tipográfica;
3. usar textura, color, ilustración lineal o detalle del logotipo;
4. dejar un placeholder claramente marcado como pendiente;
5. no representar un espacio ficticio.

Los placeholders deben llevar comentarios como:

```astro
<!-- TODO: sustituir por fotografía real del salón de eventos -->
```

---

# Identidad confirmada

Nombre visible:

```text
Mesón Castellano
```

Línea histórica:

```text
Casa fundada en 1959
```

Datos conocidos:

```text
Teléfono: 925 79 00 14
Dirección: Carretera N-V, km 74, Maqueda
Reservas: MyRestoo
```

No inventar correo, horarios, redes sociales, reseñas, precios, capacidad, nombres de salones ni servicios concretos.

Centralizar estos datos en:

```text
src/data/restaurant.ts
```

Marcar cualquier dato pendiente con `null`, `undefined` o comentarios claros.

---

# Alcance prioritario: demo rápida

Para una primera entrega, construir primero una home completa y navegable.

Orden de trabajo:

1. revisar el repositorio;
2. localizar assets reales;
3. crear sistema visual;
4. desarrollar la home;
5. hacerla responsive;
6. añadir animaciones mínimas;
7. ejecutar build;
8. corregir errores;
9. entregar la demo.

No bloquear la demo por falta de páginas secundarias.

La primera versión debe incluir:

- header;
- hero;
- legado;
- gastronomía;
- eventos;
- empresas;
- reseñas o bloque de confianza;
- contacto/reserva;
- footer.

Las páginas secundarias pueden enlazar temporalmente a secciones de la home si todavía no están construidas.

---

# Stack técnico

Usar:

- Astro;
- TypeScript;
- Tailwind CSS;
- componentes Astro reutilizables;
- GSAP solo cuando aporte una mejora real;
- JavaScript mínimo;
- SVG inline;
- HTML semántico;
- utilidades de imagen de Astro cuando sea posible.

No introducir React, Vue o Svelte para esta demo salvo necesidad técnica real.

No instalar una librería para algo que pueda resolverse con CSS.

---

# Estructura recomendada

```text
src/
  components/
    Header.astro
    MobileMenu.astro
    Hero.astro
    CurvedDivider.astro
    EditorialSection.astro
    DarkFeatureSection.astro
    EventsSection.astro
    BusinessSection.astro
    ReviewsSection.astro
    ReservationSection.astro
    Footer.astro
    SectionEyebrow.astro
    ImageFrame.astro
  data/
    restaurant.ts
    navigation.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    carta.astro
    eventos.astro
    contacto.astro
  scripts/
    animations.ts
  styles/
    global.css

public/
  images/
    logo/
    hero/
    restaurant/
    dishes/
    events/
    references/
```

No duplicar contenido en varios componentes.

---

# Sistema visual

## Paleta

Definir variables CSS o tokens Tailwind:

```css
:root {
  --color-ink: #090909;
  --color-carbon: #111211;
  --color-carbon-soft: #171816;
  --color-ivory: #f4f0e9;
  --color-ivory-soft: #ebe4d9;
  --color-paper: #ded4c5;
  --color-gold: #b18a48;
  --color-gold-soft: #cfb37a;
  --color-text: #171717;
  --color-muted: #766f66;
  --color-white: #fffdf8;
}
```

La proporción aproximada de uso debe ser:

- 45 % marfil;
- 40 % negro/carbón;
- 10 % fotografía;
- 5 % dorado y detalles.

No usar dorado amarillo puro.

## Tipografía

Usar como máximo dos familias:

- títulos: `Cormorant Garamond`, `Bodoni Moda` o similar;
- interfaz y cuerpo: `Manrope`, `Inter` o `Instrument Sans`.

El logotipo debe utilizarse como imagen real, no reconstruirse con una fuente.

Jerarquía orientativa:

```css
--text-hero: clamp(3.2rem, 7vw, 7.5rem);
--text-h2: clamp(2.5rem, 5vw, 5rem);
--text-h3: clamp(1.8rem, 3vw, 3rem);
--text-body: clamp(1rem, 1.2vw, 1.125rem);
```

Usar interlineado generoso y anchos de texto controlados.

---

# Forma y geometría

La referencia utiliza una mezcla de curvas y esquinas suaves.

Aplicar:

- curvas SVG o CSS entre hero y sección clara;
- radios entre `24px` y `40px` en bloques oscuros;
- imágenes con radios entre `18px` y `28px`;
- contenedores amplios;
- secciones oscuras que parezcan piezas incrustadas en el fondo marfil;
- transiciones curvas que conecten visualmente footer y contenido;
- líneas doradas cortas bajo algunos títulos.

Evitar poner una curva distinta en cada bloque. Deben sentirse coherentes.

Crear un componente reutilizable:

```text
CurvedDivider.astro
```

Con variantes:

- `dark-to-light`;
- `light-to-dark`;
- `footer-wave`.

Las curvas deben ser responsive y no crear huecos ni scroll horizontal.

---

# Header

## Escritorio

El header debe:

- estar superpuesto sobre el hero;
- tener el menú alineado en la zona superior derecha o centrado;
- no mostrar un logotipo grande en la esquina superior izquierda;
- ser visualmente ligero;
- tener fondo transparente al inicio;
- cambiar a negro translúcido al hacer scroll;
- incluir un botón fino de reserva;
- usar tipografía pequeña y espaciada;
- tener una altura contenida.

Navegación sugerida:

```text
RESTAURANTE
EVENTOS
EMPRESAS
SOBRE NOSOTROS
CONTACTO
RESERVAR
```

El CTA debe ser de borde dorado fino, no un botón sólido grande.

## Móvil

- Logotipo reducido o nombre breve.
- Botón de menú accesible.
- Panel de menú limpio y oscuro.
- CTA de reserva visible.
- No tapar el contenido.
- Áreas táctiles mínimas de 44 px.

---

# Hero

El hero debe seguir muy de cerca la referencia visual.

## Composición

- Altura aproximada: `min-height: 88svh` en escritorio.
- Fotografía real de fondo.
- `object-cover`.
- Punto focal configurable.
- Overlay negro suave.
- Degradado inferior para la transición.
- Navegación en la parte superior.
- Logotipo real centrado.
- “Casa fundada en 1959” debajo.
- Línea decorativa dorada.
- Texto secundario:
  - `COCINA CASTELLANA`
  - `CELEBRACIONES Y EVENTOS`
- Indicador de scroll opcional.
- Curva blanca/marfil al final del hero.

No colocar CTA gigante en el centro si rompe la composición. Puede usarse un CTA discreto o dejar la acción principal en el header.

## Iluminación

La fotografía debe percibirse:

- nocturna;
- elegante;
- cálida;
- con blancos suaves;
- con luces de ambiente reales;
- sin dominante magenta;
- sin saturación exagerada.

No modificar la imagen real hasta hacer que parezca otro local.

## Logotipo

- Usar el archivo real.
- Color blanco o versión original.
- Centrado.
- Ancho fluido con `clamp`.
- No repetirlo innecesariamente dentro del hero.
- No reinterpretarlo con texto HTML salvo fallback accesible.

---

# Sección 1: legado

Fondo marfil.

Composición:

- texto a la izquierda;
- imagen real amplia a la derecha;
- ilustración lineal o textura muy tenue en un extremo;
- título:
  - `Tradición, calidad`
  - `y un toque moderno`
- etiqueta pequeña:
  - `SOBRE NOSOTROS`
- párrafo corto;
- botón fino:
  - `CONÓCENOS`

La transición desde el hero debe ser curva, no un corte horizontal.

La imagen debe tener radio amplio y no parecer una tarjeta genérica.

---

# Sección 2: gastronomía

Fondo negro carbón dentro de un bloque grande redondeado.

Composición:

- fotografía real de plato a la izquierda;
- contenido a la derecha;
- detalle botánico o ilustración lineal muy tenue;
- etiqueta:
  - `GASTRONOMÍA`
- título:
  - `Cocina que enamora`
- texto breve;
- botón:
  - `VER CARTA`

El bloque debe ocupar casi todo el ancho, dejando aire lateral.

No inventar un plato si no existe fotografía real.

Si no hay foto adecuada, utilizar una composición visual basada en una fotografía real de producto o mesa.

---

# Sección 3: eventos

Fondo marfil.

Composición editorial:

- texto a la izquierda;
- mosaico de imágenes reales a la derecha;
- una imagen principal vertical o cuadrada;
- dos imágenes secundarias apiladas;
- radios amplios;
- separación estrecha y elegante.

Texto:

```text
EVENTOS

Momentos inolvidables
```

Servicios permitidos solo cuando estén confirmados:

- bodas;
- comuniones;
- bautizos;
- reuniones de empresa;
- celebraciones.

No afirmar espacios, capacidades ni servicios no confirmados.

CTA:

```text
DESCUBRE NUESTROS ESPACIOS
```

Si faltan fotografías reales suficientes, usar una sola imagen grande y reforzar el diseño con tipografía, no duplicar imágenes artificialmente.

---

# Sección 4: empresas

Bloque negro redondeado.

Composición:

- imagen real de reunión, salón o mesa preparada a la izquierda;
- contenido a la derecha;
- etiqueta:
  - `EMPRESAS`
- título:
  - `Tu evento, nuestro compromiso`
- texto sobrio;
- CTA:
  - `MÁS INFORMACIÓN`

No mostrar una sala de reuniones ficticia.

Si no existe fotografía empresarial real, usar una fotografía real de mesa o salón y mantener el texto general.

---

# Sección 5: confianza o reseñas

Fondo marfil.

Composición:

- reseña o mensaje de confianza a la izquierda;
- imagen panorámica real a la derecha;
- última curva clara que se funde con el footer negro.

No inventar testimonios.

Si no existen reseñas confirmadas, sustituir el bloque por:

```text
Una casa con historia desde 1959
```

Y usar:

- teléfono;
- dirección;
- acceso a reserva;
- enlace a Google Maps si está confirmado.

---

# Reserva y contacto

La reserva debe estar disponible desde:

- botón superior;
- botones internos;
- footer;
- menú móvil.

Usar el enlace real de MyRestoo cuando esté disponible.

Si todavía no se ha proporcionado la URL:

```astro
<!-- TODO: añadir URL real de MyRestoo -->
```

Mientras tanto, usar un enlace telefónico:

```html
<a href="tel:+34925790014">Reservar por teléfono</a>
```

Dirección confirmada:

```text
Carretera N-V, km 74, Maqueda
```

No crear un formulario falso.

---

# Footer

Fondo negro.

Debe incluir:

- logotipo real;
- “Casa fundada en 1959”;
- navegación;
- dirección;
- teléfono;
- horario solo si está confirmado;
- enlaces legales;
- crédito discreto de Altaria Lights si se solicita.

La parte superior del footer debe integrarse mediante una curva amplia, no mediante un corte rígido.

No inventar redes sociales ni correo.

---

# Diseño responsive

Diseñar desde móvil.

Comprobar:

- 320 px;
- 375 px;
- 390 px;
- 430 px;
- 768 px;
- 1024 px;
- 1280 px;
- 1440 px;
- 1920 px.

## En móvil

- hero de `80svh` como mínimo;
- logotipo centrado y legible;
- navegación en panel;
- secciones en una columna;
- curvas simplificadas;
- bloques oscuros con radio menor;
- imágenes con altura controlada;
- tipografía sin desbordes;
- botones a ancho adecuado;
- sin scroll horizontal;
- mosaicos convertidos en grid de una o dos columnas;
- animaciones reducidas.

No convertir todas las secciones en tarjetas apiladas idénticas.

---

# Animaciones

Las animaciones deben mejorar la percepción premium, no protagonizar la web.

Usar CSS para:

- hover;
- opacidad;
- subrayados;
- cambios de header;
- pequeños desplazamientos;
- zoom mínimo de imagen.

Usar GSAP solo para:

- entrada del hero;
- reveal de títulos;
- máscaras de imagen;
- desplazamiento suave muy ligero;
- aparición escalonada de mosaicos;
- animación de líneas doradas.

Duraciones recomendadas:

- entre `0.5s` y `1.1s`;
- easing suave;
- desplazamientos máximos de `24px`;
- zoom máximo aproximado de `1.04`.

No usar:

- scroll hijacking;
- cursores personalizados;
- animaciones constantes;
- blobs;
- partículas;
- efectos 3D;
- letras que se mueven continuamente;
- parallax agresivo.

Respetar:

```css
@media (prefers-reduced-motion: reduce)
```

---

# Componentes clave

## `CurvedDivider.astro`

Debe:

- aceptar orientación y colores;
- usar SVG responsive;
- ser decorativo;
- incluir `aria-hidden="true"`;
- evitar espacios vacíos;
- poder solaparse ligeramente con secciones.

## `DarkFeatureSection.astro`

Debe permitir:

- imagen izquierda o derecha;
- eyebrow;
- título;
- texto;
- CTA;
- detalle decorativo;
- radios consistentes.

## `ImageFrame.astro`

Debe controlar:

- proporción;
- radio;
- `object-position`;
- lazy loading;
- alt;
- tamaño responsive.

---

# Uso de Tailwind

Usar Tailwind para:

- estructura;
- grids;
- espaciado;
- breakpoints;
- tipografía;
- colores;
- radios;
- estados;
- foco;
- transiciones.

Crear tokens compartidos.

Contenedor base:

```html
<div class="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
```

Espaciado de sección orientativo:

```html
<section class="py-20 sm:py-24 lg:py-32">
```

Los bloques oscuros pueden usar:

```html
<div class="overflow-hidden rounded-[28px] bg-[var(--color-carbon)] lg:rounded-[40px]">
```

No abusar de clases arbitrarias sin sistema.

---

# Accesibilidad

Obligatorio:

- HTML semántico;
- foco visible;
- contraste suficiente;
- menú usable con teclado;
- botón de menú con `aria-expanded`;
- imágenes con `alt` real;
- decoraciones con `aria-hidden`;
- encabezados jerárquicos;
- enlaces y botones correctos;
- áreas táctiles mínimas;
- `prefers-reduced-motion`;
- textos legibles;
- no poner texto esencial dentro de fotografías.

---

# SEO local

Preparar:

- `title`;
- meta description;
- canonical;
- Open Graph;
- favicon;
- sitemap;
- robots;
- JSON-LD `Restaurant`;
- dirección;
- teléfono;
- año de fundación;
- tipo de cocina solo si está confirmado;
- URL de reserva real cuando exista.

Ejemplo inicial:

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Mesón Castellano",
  "foundingDate": "1959",
  "telephone": "+34925790014",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Carretera N-V, km 74",
    "addressLocality": "Maqueda",
    "addressCountry": "ES"
  }
}
```

No completar campos no confirmados.

---

# Rendimiento

Objetivos:

- hero optimizado;
- imágenes WebP o AVIF;
- `fetchpriority="high"` solo en hero;
- lazy loading fuera del hero;
- dimensiones explícitas;
- fuentes limitadas;
- scripts diferidos;
- GSAP cargado solo si se usa;
- CLS mínimo;
- sin vídeos pesados para la primera demo;
- build sin errores.

No sacrificar velocidad por efectos visuales.

---

# Flujo obligatorio del agente

Cuando se active esta skill:

1. leer `AGENTS.md`;
2. revisar la captura de referencia;
3. revisar el logotipo real;
4. revisar todos los assets;
5. localizar datos confirmados;
6. revisar el proyecto existente;
7. explicar brevemente qué se va a conservar;
8. implementar la demo directamente;
9. no pedir confirmación para decisiones evidentes;
10. no borrar trabajo válido sin necesidad;
11. no inventar imágenes ni datos;
12. ejecutar el proyecto;
13. ejecutar `pnpm build`;
14. corregir errores;
15. revisar responsive;
16. comprobar consola;
17. listar los datos o imágenes que siguen pendientes.

Cuando el usuario pida una modificación de código, entregar siempre los archivos completos modificados, listos para copiar y pegar.

---

# Orden de implementación recomendado

## Fase 1: inspección

- detectar stack;
- listar imágenes;
- identificar logo;
- comprobar rutas;
- revisar dependencias;
- detectar componentes existentes.

## Fase 2: base visual

- variables de color;
- tipografías;
- contenedor;
- botones;
- radios;
- curvas;
- estilos globales.

## Fase 3: home

- header;
- hero;
- legado;
- gastronomía;
- eventos;
- empresas;
- confianza;
- footer.

## Fase 4: responsive

- móvil;
- tablet;
- escritorio;
- navegación;
- imágenes;
- curvas;
- tipografía.

## Fase 5: movimiento

- header;
- hero reveal;
- secciones;
- imágenes;
- reduced motion.

## Fase 6: validación

- build;
- consola;
- enlaces;
- accesibilidad;
- SEO;
- rendimiento;
- datos inventados;
- scroll horizontal.

---

# Criterios de aceptación

La demo se considera correcta cuando:

- se reconoce claramente la referencia visual;
- el hero mantiene la estética nocturna elegante;
- el logotipo está centrado y no aparece grande arriba a la izquierda;
- la iluminación es blanca cálida, no neón;
- las secciones alternan marfil y negro;
- las curvas integran los bloques;
- el diseño no parece WordPress;
- las fotografías utilizadas son reales;
- no se inventa el local;
- la web funciona en móvil;
- la navegación funciona;
- la reserva es accesible;
- no existe scroll horizontal;
- las animaciones son discretas;
- el build termina sin errores;
- no hay errores de consola;
- el código es reutilizable;
- la demo puede enseñarse al cliente inmediatamente.

---

# Mensaje visual central

> Mesón Castellano es una casa con historia desde 1959, presentada con una elegancia contemporánea, cálida y auténtica.

# Resultado esperado

No entregar únicamente un análisis, wireframe o listado de recomendaciones.

Entregar una **demo web implementada**, funcional y visualmente próxima a la referencia proporcionada.
