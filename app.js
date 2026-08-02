/* ==========================================================================
   AGGENDA WEBAPP - JAVASCRIPT APPLICATION LOGIC
   Features: SPA Navigation, Hero Slider (6 slides), Repeating Groups,
   Color-coded Chronological Reservations, Interactive Chats, Favorites System,
   Theme Switcher & Modal Views.
   ========================================================================== */

// --- DATA STRUCTURES ---

const HERO_SLIDES = [
  {
    id: 'slide-1',
    category: 'Médicos & Salud',
    title: 'Consultas Médicas VIP & Especialistas',
    summary: 'Agenda citas presenciales y telemedicina instantánea con los mejores profesionales en salud y clínicas del país.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80',
    dateBadge: 'Disponibilidad Hoy',
    type: 'medicos'
  },
  {
    id: 'slide-2',
    category: 'Gastronomía & Gourmet',
    title: 'Experiencias Gastronómicas 5 Estrellas',
    summary: 'Reserva tu mesa exclusiva en los restaurantes galardonados del mundo sin filas ni esperas.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    dateBadge: 'Mesas VIP',
    type: 'restaurantes'
  },
  {
    id: 'slide-3',
    category: 'Hospedajes de Lujo',
    title: 'Escapadas de Lujo & Resorts Boutique',
    summary: 'Suites de ensueño, villas privadas y hospedajes exóticos con atención personalizada 24/7.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    dateBadge: 'Oferta Especial',
    type: 'hospedajes'
  },
  {
    id: 'slide-4',
    category: 'Evento Próximo',
    title: 'Usyk vs. Dubois II – World Championship',
    summary: 'Todos los cinturones en juego. La revancha de los pesos pesados en vivo desde el estadio de Wembley.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1200&q=80',
    dateBadge: 'Sáb 19 - Jul. en 11:30',
    type: 'eventos'
  },
  {
    id: 'slide-5',
    category: 'Proyecto Inmobiliario',
    title: 'Lanzamiento: Reserve Pent-houses',
    summary: 'Invierte en preventa exclusiva de apartamentos de ultra lujo con arquitectura sostenible e inteligente.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    dateBadge: 'Preventa VIP',
    type: 'inmobiliaria'
  },
  {
    id: 'slide-6',
    category: 'Belleza & Wellness',
    title: 'Spa & Salón de Belleza Elite',
    summary: 'Tratamientos estéticos de alta gama, rituales de spa relajantes y estilistas expertos a tu alcance.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    dateBadge: 'Descuento 20%',
    type: 'belleza'
  }
];

const CATEGORIES = [
  { id: 'medicos', name: 'Médicos', icon: '🩺', colorClass: 'med' },
  { id: 'restaurantes', name: 'Restaurantes', icon: '🍽️', colorClass: 'rest' },
  { id: 'hospedajes', name: 'Hospedajes', icon: '🛏️', colorClass: 'hotel' },
  { id: 'belleza', name: 'Belleza', icon: '💇‍♀️', colorClass: 'beauty' },
  { id: 'odontologos', name: 'Odontólogos', icon: '🦷', colorClass: 'odonto' },
  { id: 'eventos', name: 'Eventos', icon: '🎟️', colorClass: 'event' },
  { id: 'inmobiliaria', name: 'Inmobiliaria', icon: '🏙️', colorClass: 'real' }
];

const TOP_RESTAURANTS = [
  {
    id: 'rest-1',
    title: 'Disfrutar',
    location: 'Barcelona - España',
    rating: '4.9 ★ (340)',
    price: '$$$$',
    category: 'restaurantes',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80',
    description: 'Reconocido como el Mejor Restaurante del Mundo. Menú degustación vanguardista en un ambiente mediterráneo refinado.'
  },
  {
    id: 'rest-2',
    title: 'Central Restaurante',
    location: 'Lima - Perú',
    rating: '4.9 ★ (512)',
    price: '$$$$',
    category: 'restaurantes',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    description: 'Una experiencia gastronómica a través de las diferentes altitudes de los Andes y la Amazonía peruana.'
  },
  {
    id: 'rest-3',
    title: 'Asador Etxebarri',
    location: 'Atxondo - España',
    rating: '4.8 ★ (290)',
    price: '$$$',
    category: 'restaurantes',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    description: 'La cuna del asado de alta cocina mundial con leña de árboles autóctonos seleccionados.'
  },
  {
    id: 'rest-4',
    title: 'Alchemist',
    location: 'Copenhague - Dinamarca',
    rating: '5.0 ★ (180)',
    price: '$$$$$',
    category: 'restaurantes',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80',
    description: 'Cocina holística inmersiva que combina artes escénicas, diseño sensorial y alta gastronomía.'
  }
];

const TOP_HOTELS = [
  {
    id: 'hotel-1',
    title: 'Ellerman House',
    location: 'Cape Town - Sudáfrica',
    rating: '4.95 ★ (210)',
    price: '$850 / noche',
    category: 'hospedajes',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    description: 'Boutique hotel icónico en Bantry Bay con vistas panorámicas al Océano Atlántico, cava privada y galería de arte.'
  },
  {
    id: 'hotel-2',
    title: 'Singita Boulders Lodge',
    location: 'Hazyview - Sudáfrica',
    rating: '5.0 ★ (145)',
    price: '$1,400 / noche',
    category: 'hospedajes',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
    description: 'Safari lodge ultra exclusivo integrado en la reserva salvaje a orillas del río Sand.'
  },
  {
    id: 'hotel-3',
    title: 'Aman Tokyo',
    location: 'Tokio - Japón',
    rating: '4.9 ★ (380)',
    price: '$1,100 / noche',
    category: 'hospedajes',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
    description: 'Santuario zen urbano en las alturas de la torre Otemachi con vistas espectaculares al Monte Fuji.'
  },
  {
    id: 'hotel-4',
    title: 'Villa d\'Este',
    location: 'Lago de Como - Italia',
    rating: '4.9 ★ (420)',
    price: '$1,250 / noche',
    category: 'hospedajes',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
    description: 'Palacio renacentista del siglo XVI rodeado de 25 hectáreas de jardines flotantes en el Lago Como.'
  }
];

const UNMISSABLE_EVENTS = [
  {
    id: 'event-1',
    title: 'Usyk vs Dubois II Championship',
    location: 'Estadio de Wembley - Londres',
    rating: '5.0 ★ (1.2k)',
    price: 'Desde $180',
    category: 'eventos',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80',
    description: 'La pelea del siglo por la unificación indiscutida de los títulos de peso pesado mundial.'
  },
  {
    id: 'event-2',
    title: 'Cirque du Soleil: KÀ Show',
    location: 'MGM Grand - Las Vegas',
    rating: '4.9 ★ (890)',
    price: 'Desde $110',
    category: 'eventos',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
    description: 'Una producción acrobática monumental con escenario móvil 360 grados y tecnología de proyección de vanguardia.'
  },
  {
    id: 'event-3',
    title: 'Coldplay: Music of the Spheres Tour',
    location: 'Estadio Olímpico',
    rating: '5.0 ★ (3.4k)',
    price: 'Desde $140',
    category: 'eventos',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80',
    description: 'La experiencia en vivo más colorida y sostenible del planeta con pulseras LED interactiva.'
  }
];

const REAL_ESTATE_PROJECTS = [
  {
    id: 'real-1',
    title: 'The Reserve Pent-houses',
    location: 'Distrito Financiero VIP',
    rating: '4.95 ★ (85)',
    price: 'Desde $450,000 USD',
    category: 'inmobiliaria',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80',
    description: 'Torres residenciales inteligentes con helipuerto, domótica total y acabados en mármol italiano.'
  },
  {
    id: 'real-2',
    title: 'Ocean Sky Towers & Marina',
    location: 'Cartagena de Indias',
    rating: '4.9 ★ (62)',
    price: 'Desde $320,000 USD',
    category: 'inmobiliaria',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    description: 'Apartamentos con marina privada, muelle para yates y terraza con piscina sin fin sobre el mar Caribe.'
  },
  {
    id: 'real-3',
    title: 'Horizon Eco Luxury Villas',
    location: 'Valle del Bravo',
    rating: '5.0 ★ (40)',
    price: 'Desde $680,000 USD',
    category: 'inmobiliaria',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    description: 'Residencias campestres en medio del bosque con paneles solares, huertos orgánicos y spa privado.'
  }
];

// CHRONOLOGICALLY SORTED RESERVATIONS (From closest date to furthest)
let RESERVATIONS = [
  {
    id: 'res-101',
    title: 'Cita Médica Cardiología Especializada',
    provider: 'Dr. Carlos Mendoza',
    category: 'medicos',
    categoryLabel: 'Médico',
    categoryClass: 'cat-medico',
    date: '2026-08-02',
    time: '09:30 AM',
    displayDate: 'Sáb 2 de Agosto - 09:30 AM',
    location: 'Clínica Santa Sofía - Cons. 402',
    status: 'confirmada',
    statusLabel: 'Confirmada',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80',
    code: 'MED-9482'
  },
  {
    id: 'res-102',
    title: 'Valoración Estética & Limpieza Ultrasonido',
    provider: 'Dra. Andrea Ruiz',
    category: 'odontologos',
    categoryLabel: 'Odontología',
    categoryClass: 'cat-medico',
    date: '2026-08-05',
    time: '02:00 PM',
    displayDate: 'Mié 5 de Agosto - 02:00 PM',
    location: 'Estética Dental Premier - Sede Norte',
    status: 'confirmada',
    statusLabel: 'Confirmada',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=200&q=80',
    code: 'ODO-3109'
  },
  {
    id: 'res-103',
    title: 'Reserva de Mesa Tasting Menu (Mesa 4 VIP)',
    provider: 'Restaurante Disfrutar',
    category: 'restaurantes',
    categoryLabel: 'Restaurante',
    categoryClass: 'cat-restaurante',
    date: '2026-08-14',
    time: '08:30 PM',
    displayDate: 'Vie 14 de Agosto - 08:30 PM',
    location: 'Carrer de Villarroel, 163, Barcelona',
    status: 'confirmada',
    statusLabel: 'Confirmada',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=200&q=80',
    code: 'RES-8821'
  },
  {
    id: 'res-104',
    title: 'Visita Guiada Showroom & Pent-house Modelo',
    provider: 'The Reserve Pent-houses',
    category: 'inmobiliaria',
    categoryLabel: 'Inmobiliaria',
    categoryClass: 'cat-inmobiliaria',
    date: '2026-08-20',
    time: '03:00 PM',
    displayDate: 'Jue 20 de Agosto - 03:00 PM',
    location: 'Av. Las Palmas #45-10',
    status: 'pendiente',
    statusLabel: 'En Proceso',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=200&q=80',
    code: 'INM-0042'
  },
  {
    id: 'res-105',
    title: 'Hospedaje 3 Noches Ocean Suite',
    provider: 'Ellerman House Cape Town',
    category: 'hospedajes',
    categoryLabel: 'Hospedaje',
    categoryClass: 'cat-hospedaje',
    date: '2026-09-10',
    time: '12:00 PM',
    displayDate: 'Jue 10 de Septiembre - Check-in 12:00 PM',
    location: '180 Kloof Rd, Bantry Bay, Cape Town',
    status: 'confirmada',
    statusLabel: 'Confirmada',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=200&q=80',
    code: 'HOS-7714'
  },
  {
    id: 'res-106',
    title: 'Entradas Zona Ringside VIP Usyk vs Dubois',
    provider: 'Wembley Stadium Events',
    category: 'eventos',
    categoryLabel: 'Evento',
    categoryClass: 'cat-evento',
    date: '2026-09-25',
    time: '07:00 PM',
    displayDate: 'Vie 25 de Septiembre - 07:00 PM',
    location: 'Wembley, London HA9 0WS, Reino Unido',
    status: 'completada',
    statusLabel: 'Completada',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=200&q=80',
    code: 'EVE-1109'
  }
];

let FAVORITES_IDS = new Set(['rest-1', 'hotel-1', 'event-1', 'real-1', 'rest-2', 'hotel-3']);

let CONVERSATIONS = [
  {
    id: 'chat-1',
    name: 'Dr. Carlos Mendoza',
    role: 'Médico Cardiólogo',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80',
    categoryTag: 'Médico',
    categoryClass: 'med',
    city: 'Bogotá',
    unreadCount: 1,
    time: '10:45 AM',
    serviceTitle: 'Cita Médica - Sáb 2 Ago 09:30 AM',
    messages: [
      { sender: 'provider', text: 'Hola Mauricio, confirmamos tu cita cardiaca para el Sábado 2 de Agosto a las 9:30 AM en la Clínica Santa Sofía.', time: '10:40 AM' },
      { sender: 'user', text: 'Excelente Dr., ¿debo asistir en ayunas para los exámenes preliminares?', time: '10:42 AM' },
      { sender: 'provider', text: 'Sí, por favor asistir con 8 horas de ayuno para el perfil lipídico completo.', time: '10:45 AM' }
    ]
  },
  {
    id: 'chat-2',
    name: 'Concierge Ellerman House',
    role: 'Atención VIP Hospedaje',
    avatar: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=200&q=80',
    categoryTag: 'Hospedaje',
    categoryClass: 'hotel',
    city: 'Cape Town',
    unreadCount: 1,
    time: 'Ayer',
    serviceTitle: 'Reserva Ocean Suite - 10 Septiembre',
    messages: [
      { sender: 'provider', text: 'Estimado Mauricio, su Ocean Suite en Cape Town está lista. ¿Desea coordinar transporte privado desde el aeropuerto de Ciudad del Cabo?', time: 'Ayer' }
    ]
  },
  {
    id: 'chat-3',
    name: 'Maître Disfrutar Barcelona',
    role: 'Reserva Gastronómica',
    avatar: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=200&q=80',
    categoryTag: 'Restaurante',
    categoryClass: 'rest',
    city: 'Barcelona',
    unreadCount: 0,
    time: '24 Jul',
    serviceTitle: 'Mesa Tasting Menu - 14 Agosto',
    messages: [
      { sender: 'user', text: 'Hola, quisiéramos solicitar una copa de bienvenida de champagne para la celebración de aniversario.', time: '24 Jul' },
      { sender: 'provider', text: 'Con todo gusto Sr. Morales, lo tenemos anotado en sus notas especiales de mesa.', time: '24 Jul' }
    ]
  },
  {
    id: 'chat-4',
    name: 'Dra. Carmenza González N',
    role: 'Médico Psicólogo',
    avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&q=80',
    categoryTag: 'Médico',
    categoryClass: 'med',
    city: 'Manizales',
    unreadCount: 0,
    time: '22 Jul',
    serviceTitle: 'Consulta de Terapia de Pareja',
    messages: [
      { sender: 'provider', text: 'Hola Mauricio, ¿cómo has estado? Te escribo para confirmar si asistirán a la sesión de este miércoles.', time: '22 Jul' },
      { sender: 'user', text: 'Hola Dra., sí, por supuesto. Estaremos puntuales a las 4:00 PM.', time: '22 Jul' }
    ]
  },
  {
    id: 'chat-5',
    name: 'Studio Glamour',
    role: 'Peluquería & Estilismo',
    avatar: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=200&q=80',
    categoryTag: 'Belleza',
    categoryClass: 'beauty',
    city: 'Bogotá',
    unreadCount: 0,
    time: '18 Jul',
    serviceTitle: 'Corte y Tinte de Cabello',
    messages: [
      { sender: 'user', text: 'Hola, me gustaría saber si tienen disponibilidad para mañana en la tarde.', time: '18 Jul' },
      { sender: 'provider', text: 'Hola Mauricio, sí tenemos espacio a las 3:00 PM y a las 5:30 PM. ¿Cuál prefieres?', time: '18 Jul' }
    ]
  },
  {
    id: 'chat-6',
    name: 'Cabaña Bosque de Niebla',
    role: 'Hospedaje Cabaña',
    avatar: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=200&q=80',
    categoryTag: 'Hospedaje',
    categoryClass: 'hotel',
    city: 'Salento',
    unreadCount: 0,
    time: '15 Jul',
    serviceTitle: 'Alquiler de Cabaña de Campo',
    messages: [
      { sender: 'provider', text: 'Hola Mauricio, te enviamos las indicaciones de llegada para la cabaña. El clima está algo frío, te recomendamos traer abrigo.', time: '15 Jul' }
    ]
  }
];

// STATE MANAGEMENT
let activeTab = 'inicio';
let currentSlideIndex = 0;
let slideInterval = null;
let activeChatId = null;
let activeModalItem = null;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  renderCategories();
  renderRepeatingGroups();
  renderReservations();
  renderChatList();
  renderActiveChat();
  renderFavorites();
});

// --- NAVIGATION BETWEEN 5 SECTIONS ---
function switchTab(tabId) {
  activeTab = tabId;
  
  // Toggle active view
  document.querySelectorAll('.app-view').forEach(view => {
    view.classList.remove('active');
  });
  const targetView = document.getElementById(`view-${tabId}`);
  if (targetView) targetView.classList.add('active');

  // Toggle bottom nav bar active state
  document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-tab') === tabId) {
      item.classList.add('active');
    }
  });

  if (tabId === 'chats') {
    const layout = document.querySelector('.chats-layout');
    if (layout) {
      layout.classList.remove('show-chat-detail');
    }
    activeChatId = null;
    renderChatList();
    renderActiveChat();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- HERO CAROUSEL LOGIC ---
function initHeroCarousel() {
  const track = document.getElementById('carouselTrack');
  const indicators = document.getElementById('carouselIndicators');

  if (!track || !indicators) return;

  track.innerHTML = '';
  indicators.innerHTML = '';

  HERO_SLIDES.forEach((slide, index) => {
    // Render slide element
    const slideEl = document.createElement('div');
    slideEl.className = `hero-slide ${index === 0 ? 'active' : ''}`;
    slideEl.style.backgroundImage = `url('${slide.image}')`;
    
    slideEl.innerHTML = `
      <div class="slide-overlay"></div>
      <div class="slide-top-bar">
        <span class="slide-badge">${slide.dateBadge}</span>
      </div>
      <div class="slide-content">
        <h2 class="slide-title">${slide.title}</h2>
        <p class="slide-summary">${slide.summary}</p>
        <button class="slide-btn" onclick="openHeroModal('${slide.id}')">Ver más</button>
      </div>
    `;
    track.appendChild(slideEl);

    // Render dot indicator
    const dot = document.createElement('div');
    dot.className = `indicator-dot ${index === 0 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(index);
    indicators.appendChild(dot);
  });

  startAutoSlide();
}

function startAutoSlide() {
  stopAutoSlide();
  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 5000);
}

function stopAutoSlide() {
  if (slideInterval) clearInterval(slideInterval);
}

function moveSlide(direction) {
  let newIndex = currentSlideIndex + direction;
  if (newIndex < 0) newIndex = HERO_SLIDES.length - 1;
  if (newIndex >= HERO_SLIDES.length) newIndex = 0;
  goToSlide(newIndex);
}

function goToSlide(index) {
  currentSlideIndex = index;
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.indicator-dot');

  slides.forEach((s, i) => s.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

function openHeroModal(slideId) {
  const slide = HERO_SLIDES.find(s => s.id === slideId);
  if (slide) {
    openModal({
      title: slide.title,
      subtitle: slide.category + ' - Aggenda Exclusivo',
      category: slide.category,
      rating: '5.0 ★ VIP',
      price: slide.dateBadge,
      image: slide.image,
      description: slide.summary + ' Reserva con prioridad través de nuestra red concierge y disfruta de beneficios únicos como socio Aggenda Gold.',
      id: slide.id
    });
  }
}

// --- CATEGORIES RENDER ---
function renderCategories() {
  const container = document.getElementById('categoriesGroup');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <div class="category-chip" onclick="filterCategory('${cat.id}')">
      <div class="cat-icon-box ${cat.colorClass}">
        ${cat.icon}
      </div>
      <span class="category-name">${cat.name}</span>
    </div>
  `).join('');
}

function filterCategory(catId) {
  showCategoryProviders(catId);
}

// --- REPEATING GROUPS RENDER ---
function renderRepeatingGroups() {
  renderCardGroup('restaurantsGroup', TOP_RESTAURANTS);
  renderCardGroup('hotelsGroup', TOP_HOTELS);
  renderCardGroup('eventsGroup', UNMISSABLE_EVENTS);
  renderCardGroup('realEstateGroup', REAL_ESTATE_PROJECTS);
}

function renderCardGroup(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map(item => {
    const isFav = FAVORITES_IDS.has(item.id);
    return `
      <div class="service-card" onclick="openModalById('${item.id}')">
        <div class="card-image-box">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <button class="card-fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavoriteCard('${item.id}', this)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <span class="card-tag">${item.category.toUpperCase()}</span>
        </div>
        <div class="card-content">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-location">📍 ${item.location}</p>
          <div class="card-footer-row">
            <span class="card-rating">${item.rating}</span>
            <span class="card-price">${item.price}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- RESERVATIONS RENDER & FILTERS ---
function renderReservations(statusFilter = 'all') {
  const container = document.getElementById('reservationsList');
  if (!container) return;

  // Filter reservations
  let filtered = RESERVATIONS;
  if (statusFilter === 'proxima') {
    filtered = RESERVATIONS.filter(r => r.status === 'confirmada' || r.status === 'pendiente');
  } else if (statusFilter === 'completada') {
    filtered = RESERVATIONS.filter(r => r.status === 'completada');
  } else if (statusFilter === 'cancelada') {
    filtered = RESERVATIONS.filter(r => r.status === 'cancelada');
  }

  // Sort chronologically (closest first)
  filtered.sort((a, b) => new Date(a.date) - new Date(b.date));

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state">No hay reservas registradas en este estado.</div>`;
    return;
  }

  container.innerHTML = filtered.map(res => `
    <div class="reservation-card ${res.categoryClass}">
      <div class="res-header-row">
        <span class="res-category-badge">${res.categoryLabel}</span>
        <span class="res-status-tag ${res.status}">${res.statusLabel}</span>
      </div>

      <div class="res-body">
        <img src="${res.image}" class="res-thumb" alt="${res.title}">
        <div class="res-details">
          <h3 class="res-title">${res.title}</h3>
          <div class="res-datetime">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            ${res.displayDate}
          </div>
          <p class="res-location">📍 ${res.location}</p>
        </div>
      </div>

      <div class="res-actions">
        <button class="res-action-btn primary" onclick="showReservationQR('${res.code}', '${res.title}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          Ver QR (${res.code})
        </button>
        <button class="res-action-btn" onclick="openChatWithProvider('${res.provider}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          Chat
        </button>
        <button class="res-action-btn" onclick="showToast('Solicitud de reprogramación enviada')">
          Reprogramar
        </button>
      </div>
    </div>
  `).join('');
}

function filterReservationsStatus(status, btn) {
  document.querySelectorAll('#view-reservas .pill-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderReservations(status);
}

function showReservationQR(code, title) {
  openModal({
    title: `Código QR de Reserva: ${code}`,
    subtitle: title,
    category: 'Reserva Confirmada',
    rating: 'VÁLIDO EN ENTRADA',
    price: code,
    image: 'https://images.unsplash.com/photo-1595079672139-cee25a1d30f2?auto=format&fit=crop&w=600&q=80',
    description: `Presenta este pase QR digital al llegar al establecimiento o clínica. Código de confirmación: ${code}.`
  });
}

// --- CHATS LOGIC ---
function renderChatList() {
  const container = document.getElementById('conversationsContainer');
  if (!container) return;

  container.innerHTML = CONVERSATIONS.map(c => `
    <div class="conversation-item ${c.id === activeChatId ? 'active' : ''}" onclick="selectChat('${c.id}')">
      <div class="avatar-wrapper">
        <img src="${c.avatar}" class="avatar-img" alt="${c.name}">
        <span class="service-type-dot ${c.categoryClass}"></span>
      </div>
      <div class="conv-info">
        <div class="conv-top-row">
          <span class="conv-name">${c.name}</span>
          <span class="conv-time">${c.time}</span>
        </div>
        <div class="conv-meta" style="font-size:11.5px;color:var(--text-muted);margin-bottom:2px;font-weight:600;">
          <span style="color:var(--text-main);">${c.categoryTag}</span> • <span>${c.city}</span>
        </div>
        <div class="conv-msg">${c.messages[c.messages.length - 1].text}</div>
      </div>
      ${c.unreadCount > 0 ? `<span class="conv-badge">${c.unreadCount}</span>` : ''}
    </div>
  `).join('');
}

function renderActiveChat() {
  const detailPanel = document.getElementById('chatDetailPanel');
  if (!detailPanel) return;

  const conv = CONVERSATIONS.find(c => c.id === activeChatId);

  if (!conv) {
    detailPanel.innerHTML = `
      <div class="chat-empty-state">
        <div style="font-size:48px;margin-bottom:16px;">💬</div>
        <h3 style="font-size:18px;font-weight:800;color:var(--text-main);margin-bottom:8px;">Tus Mensajes</h3>
        <p style="font-size:13.5px;max-width:280px;line-height:1.4;">Selecciona un contacto de la lista para ver su información y abrir la conversación.</p>
      </div>
    `;
    return;
  }

  // Restore details layout structure if it was empty state
  if (detailPanel.querySelector('.chat-empty-state')) {
    detailPanel.innerHTML = `
      <div class="active-chat-header" id="activeChatHeader"></div>
      <div class="service-context-banner" id="serviceContextBanner"></div>
      <div class="chat-messages-body" id="chatMessagesBody"></div>
      <div class="quick-replies-bar" id="quickRepliesBar">
        <button class="quick-chip" onclick="sendQuickReply('¿Cuáles son los requisitos de llegada?')">📋 Requisitos de llegada</button>
        <button class="quick-chip" onclick="sendQuickReply('¿Puedo modificar la hora de mi reserva?')">⏰ Modificar hora</button>
        <button class="quick-chip" onclick="sendQuickReply('Solicitar ubicación exacta y parqueadero')">📍 Ubicación / Parqueadero</button>
      </div>
      <div class="chat-input-footer">
        <button class="attach-btn" onclick="simulateAttachment()" title="Adjuntar documento">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
        </button>
        <input type="text" id="chatTextInput" placeholder="Escribe un mensaje al prestador..." onkeydown="handleChatKeyDown(event)">
        <button class="send-btn" onclick="sendChatMessage()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </div>
    `;
  }

  // Update header
  const header = document.getElementById('activeChatHeader');
  if (header) {
    header.innerHTML = `
      <button class="chat-back-btn" onclick="goBackToContacts()" title="Volver a contactos">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      <img src="${conv.avatar}" class="avatar-img" alt="${conv.name}" style="width:40px;height:40px;">
      <div>
        <h3 style="font-size:15px;font-weight:800;margin:0;">${conv.name}</h3>
        <span style="font-size:12px;color:var(--text-muted);">${conv.role} • <strong style="color:var(--text-main);">${conv.categoryTag}</strong></span>
      </div>
    `;
  }

  // Update banner
  const banner = document.getElementById('serviceContextBanner');
  if (banner) {
    banner.innerHTML = `
      <span>📌 Service: <strong>${conv.serviceTitle}</strong></span>
      <button onclick="showToast('Verificando estado del servicio...')" style="background:none;border:none;color:#2563eb;font-weight:700;cursor:pointer;">Ver Ticket</button>
    `;
  }

  // Render messages
  const body = document.getElementById('chatMessagesBody');
  if (body) {
    body.innerHTML = conv.messages.map(m => `
      <div class="chat-bubble ${m.sender}">
        ${m.text}
        <div class="bubble-time">${m.time}</div>
      </div>
    `).join('');
    body.scrollTop = body.scrollHeight;
  }
}

function selectChat(chatId) {
  activeChatId = chatId;
  const conv = CONVERSATIONS.find(c => c.id === chatId);
  if (conv) conv.unreadCount = 0;

  const layout = document.querySelector('.chats-layout');
  if (layout) {
    layout.classList.add('show-chat-detail');
  }

  renderChatList();
  renderActiveChat();
}

function goBackToContacts() {
  const layout = document.querySelector('.chats-layout');
  if (layout) {
    layout.classList.remove('show-chat-detail');
  }
  activeChatId = null;
  renderChatList();
  renderActiveChat();
}

function handleChatKeyDown(event) {
  if (event.key === 'Enter') {
    sendChatMessage();
  }
}

function sendChatMessage() {
  const input = document.getElementById('chatTextInput');
  if (!input || !input.value.trim()) return;

  const msgText = input.value.trim();
  input.value = '';

  const conv = CONVERSATIONS.find(c => c.id === activeChatId);
  if (conv) {
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    conv.messages.push({ sender: 'user', text: msgText, time: timeNow });
    renderActiveChat();

    // Simulated response
    setTimeout(() => {
      conv.messages.push({
        sender: 'provider',
        text: `Hola Mauricio, hemos recibido tu mensaje: "${msgText}". Un asistente se encargará de procesarlo de inmediato.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      renderActiveChat();
    }, 1200);
  }
}

function sendQuickReply(text) {
  const input = document.getElementById('chatTextInput');
  if (input) {
    input.value = text;
    sendChatMessage();
  }
}

function simulateAttachment() {
  showToast('📷 Adjunto seleccionado (simulación)');
}

function openChatWithProvider(providerName) {
  switchTab('chats');
  const found = CONVERSATIONS.find(c => c.name.toLowerCase().includes(providerName.toLowerCase()));
  if (found) {
    selectChat(found.id);
  } else {
    showToast(`Iniciando chat directo con ${providerName}...`);
  }
}

// --- FAVORITES RENDER & SYSTEM ---
function getAllItemsList() {
  return [...TOP_RESTAURANTS, ...TOP_HOTELS, ...UNMISSABLE_EVENTS, ...REAL_ESTATE_PROJECTS];
}

function renderFavorites(categoryFilter = 'all') {
  const grid = document.getElementById('favoritesGrid');
  const countTag = document.getElementById('favCountTag');
  if (!grid) return;

  const allItems = getAllItemsList();
  let favItems = allItems.filter(item => FAVORITES_IDS.has(item.id));

  if (categoryFilter !== 'all') {
    favItems = favItems.filter(item => item.category === categoryFilter);
  }

  if (countTag) countTag.textContent = `${FAVORITES_IDS.size} guardados`;

  if (favItems.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">No tienes elementos en favoritos para esta categoría.</div>`;
    return;
  }

  grid.innerHTML = favItems.map(item => `
    <div class="service-card fav-card" onclick="openModalById('${item.id}')">
      <div class="card-image-box">
        <img src="${item.image}" alt="${item.title}">
        <button class="card-fav-btn active" onclick="event.stopPropagation(); toggleFavoriteCard('${item.id}', this)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
        <span class="card-tag">${item.category.toUpperCase()}</span>
      </div>
      <div class="card-content">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-location">📍 ${item.location}</p>
        <div class="card-footer-row">
          <span class="card-rating">${item.rating}</span>
          <button class="btn-primary" style="padding:6px 14px;font-size:12px;" onclick="event.stopPropagation(); openModalById('${item.id}')">Reservar</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterFavCategory(cat, btn) {
  document.querySelectorAll('#favCategoryFilter .pill-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderFavorites(cat);
}

function toggleFavoriteCard(itemId, btnEl) {
  if (FAVORITES_IDS.has(itemId)) {
    FAVORITES_IDS.delete(itemId);
    if (btnEl) btnEl.classList.remove('active');
    showToast('Removido de Favoritos');
  } else {
    FAVORITES_IDS.add(itemId);
    if (btnEl) btnEl.classList.add('active');
    showToast('❤️ Guardado en Favoritos');
  }
  renderFavorites();
}

// --- MODAL FUNCTIONS ---
function openModalById(itemId) {
  const item = getAllItemsList().find(i => i.id === itemId);
  if (item) {
    openModal(item);
  }
}

function openModal(item) {
  activeModalItem = item;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalSubtitle').textContent = item.subtitle || item.location;
  document.getElementById('modalCategoryBadge').textContent = item.category ? item.category.toUpperCase() : 'AGGENDA';
  document.getElementById('modalRating').textContent = item.rating || '4.9 ★';
  document.getElementById('modalPrice').textContent = item.price || '$$$';
  document.getElementById('modalDescription').textContent = item.description || 'Servicio destacado en la plataforma Aggenda.';
  document.getElementById('modalImg').src = item.image;

  const isFav = FAVORITES_IDS.has(item.id);
  const modalFavBtn = document.getElementById('modalFavBtn');
  if (modalFavBtn) {
    modalFavBtn.classList.toggle('active', isFav);
  }

  document.getElementById('detailModal').classList.add('active');
}

function closeModal() {
  document.getElementById('detailModal').classList.remove('active');
}

function toggleModalFav() {
  if (activeModalItem) {
    toggleFavoriteCard(activeModalItem.id);
    const isFav = FAVORITES_IDS.has(activeModalItem.id);
    document.getElementById('modalFavBtn').classList.toggle('active', isFav);
  }
}
function simulateBookingProcess() {
  startBookingFlow();
}

/* ================= BOOKING FLOW ENGINE ================= */

let bookingState = {
  step: 1,
  date: null,
  time: null,
  calYear: null,
  calMonth: null,
  code: '',
  item: null
};

const AVAILABLE_TIMES = [
  '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM'
];

function startBookingFlow() {
  const item = activeModalItem;
  if (!item) return;
  closeModal();

  const today = new Date();
  bookingState = {
    step: 1,
    date: { year: today.getFullYear(), month: today.getMonth(), day: today.getDate() },
    time: AVAILABLE_TIMES[0],
    calYear: today.getFullYear(),
    calMonth: today.getMonth(),
    code: generateBookingCode(item.category || 'AGG'),
    item: item
  };

  // Render service mini card
  const cat = item.category || 'servicio';
  document.getElementById('bookingServiceCard').innerHTML = `
    <img src="${item.image || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80'}" alt="${item.title}">
    <div class="booking-service-info">
      <h3>${item.title}</h3>
      <p>${item.subtitle || item.location || ''}</p>
      <span class="bsi-cat">${cat}</span>
    </div>
  `;

  // Reset form
  document.getElementById('bookingName').value = 'Mauricio Morales';
  document.getElementById('bookingPhone').value = '';
  document.getElementById('bookingEmail').value = '';
  document.getElementById('bookingNotes').value = '';
  const cb = document.getElementById('bookingTerms');
  if (cb) cb.checked = false;

  renderBookingCalendar();
  renderBookingTimeSlots();
  goToBookingStep(1);

  document.getElementById('bookingOverlay').classList.add('active');
}

function closeBookingFlow() {
  document.getElementById('bookingOverlay').classList.remove('active');
}

function generateBookingCode(category) {
  const prefixes = {
    medicos: 'MED', restaurantes: 'RES', hospedajes: 'HOS',
    belleza: 'BEL', odontologos: 'ODO', eventos: 'EVE',
    inmobiliaria: 'INM'
  };
  const prefix = prefixes[category] || 'AGG';
  const num = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${num}`;
}

function goToBookingStep(step) {
  // Validation
  if (step === 2 && (!bookingState.date || !bookingState.time)) {
    showToast('Selecciona fecha y horario para continuar');
    return;
  }
  if (step === 3) {
    const name = document.getElementById('bookingName').value.trim();
    const phone = document.getElementById('bookingPhone').value.trim();
    const email = document.getElementById('bookingEmail').value.trim();
    if (!name || !phone || !email) {
      showToast('Completa todos los campos obligatorios');
      return;
    }
    renderBookingSummary();
  }

  bookingState.step = step;
  document.querySelectorAll('.booking-step').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`bookingStep${step}`);
  if (target) target.classList.add('active');

  renderBookingProgress();

  // Scroll to top of booking container
  document.querySelector('.booking-container').scrollTo({ top: 0, behavior: 'smooth' });
}

function renderBookingProgress() {
  const step = bookingState.step;
  const labels = ['Fecha', 'Datos', 'Resumen', 'Listo'];
  const container = document.getElementById('bookingProgress');

  container.innerHTML = labels.map((label, i) => {
    const num = i + 1;
    const isActive = num === step;
    const isDone = num < step;
    const circleClass = isDone ? 'done' : (isActive ? 'active' : '');
    const stepClass = isDone ? 'done' : (isActive ? 'active' : '');
    const icon = isDone ? '✓' : num;
    return `
      <div class="bp-step ${stepClass}">
        <div>
          <div class="bp-circle ${circleClass}">${icon}</div>
          <div class="bp-label">${label}</div>
        </div>
      </div>
      ${num < 4 ? `<div class="bp-line ${isDone ? 'done' : ''}"></div>` : ''}
    `;
  }).join('');
}

function renderBookingCalendar() {
  const year = bookingState.calYear;
  const month = bookingState.calMonth;
  const today = new Date();
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun

  let html = `
    <div class="cal-header">
      <button class="cal-nav-btn" onclick="changeBookingMonth(-1)">‹</button>
      <span>${monthNames[month]} ${year}</span>
      <button class="cal-nav-btn" onclick="changeBookingMonth(1)">›</button>
    </div>
    <div class="cal-weekdays">
      <span>Do</span><span>Lu</span><span>Ma</span><span>Mi</span>
      <span>Ju</span><span>Vi</span><span>Sá</span>
    </div>
    <div class="cal-days">
  `;

  // Empty cells for padding
  for (let i = 0; i < firstDay; i++) {
    html += '<button class="cal-day empty"></button>';
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj = new Date(year, month, d);
    const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    const isSelected = bookingState.date && d === bookingState.date.day && month === bookingState.date.month && year === bookingState.date.year;

    let cls = 'cal-day';
    if (isPast) cls += ' disabled';
    if (isToday) cls += ' today';
    if (isSelected) cls += ' selected';

    html += `<button class="${cls}" ${isPast ? 'disabled' : `onclick="selectBookingDate(${d})"`}>${d}</button>`;
  }

  html += '</div>';
  document.getElementById('bookingCalendar').innerHTML = html;
}

function changeBookingMonth(dir) {
  bookingState.calMonth += dir;
  if (bookingState.calMonth > 11) { bookingState.calMonth = 0; bookingState.calYear++; }
  if (bookingState.calMonth < 0) { bookingState.calMonth = 11; bookingState.calYear--; }
  renderBookingCalendar();
}

function selectBookingDate(day) {
  bookingState.date = { year: bookingState.calYear, month: bookingState.calMonth, day: day };
  renderBookingCalendar();
}

function renderBookingTimeSlots() {
  const container = document.getElementById('bookingTimeSlots');
  container.innerHTML = AVAILABLE_TIMES.map(time => {
    const isSelected = bookingState.time === time;
    return `<button class="time-slot ${isSelected ? 'selected' : ''}" onclick="selectBookingTime('${time}')">${time}</button>`;
  }).join('');
}

function selectBookingTime(time) {
  bookingState.time = time;
  renderBookingTimeSlots();
}

function renderBookingSummary() {
  const item = bookingState.item;
  const date = bookingState.date;
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const dateObj = new Date(date.year, date.month, date.day);
  const dayName = dayNames[dateObj.getDay()];
  const dateStr = `${dayName} ${date.day} de ${monthNames[date.month]}, ${date.year}`;

  const name = document.getElementById('bookingName').value;
  const phone = document.getElementById('bookingPhone').value;
  const email = document.getElementById('bookingEmail').value;
  const notes = document.getElementById('bookingNotes').value;
  const cat = item.category || 'servicio';

  document.getElementById('bookingSummary').innerHTML = `
    <div class="booking-summary-header">
      <img src="${item.image || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'}" alt="${item.title}">
      <span class="bsh-badge">${cat.toUpperCase()}</span>
    </div>
    <div class="booking-summary-body">
      <h3>${item.title}</h3>
      <div class="bsb-row"><span class="bsb-icon">📅</span><span class="bsb-label">Fecha</span><span class="bsb-value">${dateStr}</span></div>
      <div class="bsb-row"><span class="bsb-icon">🕐</span><span class="bsb-label">Hora</span><span class="bsb-value">${bookingState.time}</span></div>
      <div class="bsb-row"><span class="bsb-icon">📍</span><span class="bsb-label">Lugar</span><span class="bsb-value">${item.subtitle || item.location || 'Aggenda'}</span></div>
      <div class="bsb-row"><span class="bsb-icon">👤</span><span class="bsb-label">Cliente</span><span class="bsb-value">${name}</span></div>
      <div class="bsb-row"><span class="bsb-icon">📱</span><span class="bsb-label">Tel</span><span class="bsb-value">${phone}</span></div>
      <div class="bsb-row"><span class="bsb-icon">📧</span><span class="bsb-label">Email</span><span class="bsb-value">${email}</span></div>
      ${notes ? `<div class="bsb-row"><span class="bsb-icon">📝</span><span class="bsb-label">Notas</span><span class="bsb-value">${notes}</span></div>` : ''}
    </div>
  `;

  document.getElementById('bookingCodeBox').innerHTML = `
    <div>
      <div class="code-label">Código de Reserva</div>
      <div class="code-value">${bookingState.code}</div>
    </div>
  `;
}

function confirmBooking() {
  const termsCheckbox = document.getElementById('bookingTerms');
  if (!termsCheckbox.checked) {
    showToast('Debes aceptar los términos y condiciones');
    return;
  }

  const item = bookingState.item;
  const date = bookingState.date;
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const dateObj = new Date(date.year, date.month, date.day);
  const dayAbbr = dayNames[dateObj.getDay()];
  const dateFormatted = `${date.year}-${String(date.month + 1).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`;
  const displayDate = `${dayAbbr} ${date.day} de ${monthNames[date.month]} - ${bookingState.time}`;

  const catMap = {
    medicos: { label: 'Médico', cls: 'cat-medico' },
    restaurantes: { label: 'Restaurante', cls: 'cat-restaurante' },
    hospedajes: { label: 'Hospedaje', cls: 'cat-hospedaje' },
    belleza: { label: 'Belleza', cls: 'cat-belleza' },
    odontologos: { label: 'Odontología', cls: 'cat-medico' },
    eventos: { label: 'Evento', cls: 'cat-evento' },
    inmobiliaria: { label: 'Inmobiliaria', cls: 'cat-inmobiliaria' }
  };
  const catInfo = catMap[item.category] || { label: 'Servicio', cls: 'cat-medico' };

  // Add to RESERVATIONS
  const newRes = {
    id: `res-${Date.now()}`,
    title: item.title,
    provider: item.subtitle || item.title,
    category: item.category || 'medicos',
    categoryLabel: catInfo.label,
    categoryClass: catInfo.cls,
    date: dateFormatted,
    time: bookingState.time,
    displayDate: displayDate,
    location: item.subtitle || item.location || 'Aggenda',
    status: 'confirmada',
    statusLabel: 'Confirmada',
    image: item.image || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80',
    code: bookingState.code
  };
  RESERVATIONS.unshift(newRes);
  renderReservations();

  // Show success
  document.getElementById('bookingSuccess').innerHTML = `
    <div class="success-circle">
      <svg viewBox="0 0 24 24"><polyline points="6 12 10 16 18 8"></polyline></svg>
    </div>
    <h2 class="success-title">¡Reserva Confirmada!</h2>
    <p class="success-subtitle">Tu cita con <b>${item.title}</b> ha sido agendada exitosamente. Recibirás una confirmación por WhatsApp y Email.</p>
    <div class="success-code-card">
      <div class="scc-label">Código de Confirmación</div>
      <div class="scc-code">${bookingState.code}</div>
      <div class="scc-qr">📱 Presenta este código al llegar</div>
    </div>
    <div class="success-actions">
      <button class="booking-btn primary" onclick="closeBookingFlow(); switchTab('reservas');">📋 Ver Mis Reservas</button>
      <button class="booking-btn secondary" onclick="closeBookingFlow(); openChatWithProvider('${(item.title || '').replace(/'/g, '')}');">💬 Contactar Prestador</button>
      <button class="booking-btn secondary" onclick="closeBookingFlow()">Cerrar</button>
    </div>
  `;

  goToBookingStep(4);
  launchConfetti();
}

function launchConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (6 + Math.random() * 8) + 'px';
    piece.style.height = (6 + Math.random() * 8) + 'px';
    piece.style.animationDuration = (2 + Math.random() * 2) + 's';
    piece.style.animationDelay = (Math.random() * 0.8) + 's';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    container.appendChild(piece);
  }

  setTimeout(() => container.remove(), 4500);
}

function openChatFromModal() {
  closeModal();
  if (activeModalItem) {
    openChatWithProvider(activeModalItem.title);
  }
}

/* ================= CATEGORY SEARCH & PROVIDERS ================= */

const SUBCATEGORIES = {
  medicos: [
    { id: 'psicologo', name: 'Psicólogo', icon: '🧠' },
    { id: 'pediatra', name: 'Pediatra', icon: '👶' },
    { id: 'neurologo', name: 'Neurólogo', icon: '🧬' },
    { id: 'ortopedista', name: 'Ortopedista', icon: '🦴' },
    { id: 'cardiologo', name: 'Cardiólogo', icon: '❤️' },
    { id: 'dermatologo', name: 'Dermatólogo', icon: '🩺' },
    { id: 'ginecologo', name: 'Ginecólogo', icon: '🏥' }
  ],
  restaurantes: [
    { id: 'italiana', name: 'Italiana', icon: '🍝' },
    { id: 'peruana', name: 'Peruana', icon: '🥘' },
    { id: 'oriental', name: 'Oriental', icon: '🍜' },
    { id: 'colombiana', name: 'Colombiana', icon: '🫕' },
    { id: 'mexicana', name: 'Mexicana', icon: '🌮' },
    { id: 'francesa', name: 'Francesa', icon: '🥐' }
  ],
  hospedajes: [
    { id: 'casa', name: 'Casa', icon: '🏠' },
    { id: 'apartamento', name: 'Apartamento', icon: '🏢' },
    { id: 'hotel', name: 'Hotel', icon: '🏨' },
    { id: 'cabana', name: 'Cabaña', icon: '🛖' },
    { id: 'villa', name: 'Villa', icon: '🏡' }
  ],
  belleza: [
    { id: 'peluqueria', name: 'Peluquería', icon: '💇‍♀️' },
    { id: 'spa', name: 'Spa', icon: '🧖‍♀️' },
    { id: 'unas', name: 'Uñas', icon: '💅' },
    { id: 'maquillaje', name: 'Maquillaje', icon: '💄' },
    { id: 'barberia', name: 'Barbería', icon: '✂️' }
  ],
  odontologos: [
    { id: 'ortodoncia', name: 'Ortodoncia', icon: '🦷' },
    { id: 'estetica', name: 'Estética', icon: '✨' },
    { id: 'endodoncia', name: 'Endodoncia', icon: '🔬' },
    { id: 'general', name: 'General', icon: '🏥' }
  ],
  eventos: [
    { id: 'deportes', name: 'Deportes', icon: '⚽' },
    { id: 'conciertos', name: 'Conciertos', icon: '🎵' },
    { id: 'teatro', name: 'Teatro', icon: '🎭' },
    { id: 'conferencias', name: 'Conferencias', icon: '🎤' }
  ],
  inmobiliaria: [
    { id: 'apartamentos', name: 'Apartamentos', icon: '🏢' },
    { id: 'casas', name: 'Casas', icon: '🏠' },
    { id: 'lotes', name: 'Lotes', icon: '📐' },
    { id: 'comercial', name: 'Comercial', icon: '🏪' }
  ]
};

const PROVIDERS_DATA = {
  medicos: [
    { name: 'Dra. Marcela Gómez F.', specialty: 'Psicólogo', location: 'Manizales - Colombia', phone: '3148904919', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80', rating: '0.0', reviews: '0', subcat: 'psicologo' },
    { name: 'Dra. Carmenza González N', specialty: 'Psicólogo', location: 'Manizales - Colombia', phone: '314 8904919', avatar: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80', rating: '4.8', reviews: '12', subcat: 'psicologo' },
    { name: 'Dr. Carlos Mendoza', specialty: 'Cardiólogo', location: 'Bogotá - Colombia', phone: '315 2204567', avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80', rating: '4.9', reviews: '87', subcat: 'cardiologo' },
    { name: 'Dr. Andrés Ramírez', specialty: 'Pediatra', location: 'Medellín - Colombia', phone: '310 5567890', avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80', rating: '4.7', reviews: '45', subcat: 'pediatra' },
    { name: 'Dra. Laura Martínez', specialty: 'Neurólogo', location: 'Cali - Colombia', phone: '318 7728456', avatar: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=300&q=80', rating: '4.9', reviews: '62', subcat: 'neurologo' },
    { name: 'Dr. Julio Pérez', specialty: 'Ortopedista', location: 'Barranquilla - Colombia', phone: '312 9911234', avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80', rating: '4.6', reviews: '33', subcat: 'ortopedista' },
    { name: 'Dra. Sofía Herrera', specialty: 'Dermatólogo', location: 'Pereira - Colombia', phone: '317 4455678', avatar: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=300&q=80', rating: '4.8', reviews: '51', subcat: 'dermatologo' }
  ],
  restaurantes: [
    { name: 'Maido', location: 'Miraflores - Peru', rating: '4.98', reviews: '1.260', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80', detail: 'A 18 km de distancia', hours: 'ABRE EN 1 HORA', subcat: 'peruana', type: 'image-card' },
    { name: 'Osteria Francescana', location: 'Módena - Italia', rating: '4.95', reviews: '2.180', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80', detail: 'A 5 km de distancia', hours: 'ABIERTO', subcat: 'italiana', type: 'image-card' },
    { name: 'Narisawa', location: 'Tokio - Japón', rating: '4.92', reviews: '890', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', detail: 'A 32 km de distancia', hours: 'ABRE EN 3 HORAS', subcat: 'oriental', type: 'image-card' },
    { name: 'Andrés Carne de Res', location: 'Chía - Colombia', rating: '4.85', reviews: '3.400', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80', detail: 'A 25 km de distancia', hours: 'ABIERTO', subcat: 'colombiana', type: 'image-card' },
    { name: 'Pujol', location: 'CDMX - México', rating: '4.90', reviews: '1.800', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80', detail: 'A 12 km de distancia', hours: 'ABIERTO', subcat: 'mexicana', type: 'image-card' }
  ],
  hospedajes: [
    { name: 'Ellerman House', location: 'Cape Town - Sudáfrica', rating: '4.98', reviews: '1.260', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', detail: 'Luminosa y con luz natural, esta acogedora...', rooms: '1 Habitación - 1 Cama', price: '$850.000 COP/Noche', subcat: 'hotel', type: 'image-card' },
    { name: 'Villa del Lago', location: 'Guatapé - Colombia', rating: '4.85', reviews: '320', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', detail: 'Espectacular vista al embalse...', rooms: '3 Habitaciones - 2 Baños', price: '$450.000 COP/Noche', subcat: 'casa', type: 'image-card' },
    { name: 'Sky Loft Poblado', location: 'Medellín - Colombia', rating: '4.90', reviews: '180', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80', detail: 'Moderno apartamento con vistas panorámicas...', rooms: '2 Habitaciones - 1 Cama King', price: '$380.000 COP/Noche', subcat: 'apartamento', type: 'image-card' },
    { name: 'Cabaña Bosque de Niebla', location: 'Salento - Colombia', rating: '4.92', reviews: '95', image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=600&q=80', detail: 'Refugio en medio del bosque cafetero...', rooms: '1 Habitación - Chimenea', price: '$320.000 COP/Noche', subcat: 'cabana', type: 'image-card' },
    { name: 'Villa Amanecer', location: 'Cartagena - Colombia', rating: '4.95', reviews: '210', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80', detail: 'Villa frente al mar con piscina privada...', rooms: '4 Habitaciones - 5 Baños', price: '$1.200.000 COP/Noche', subcat: 'villa', type: 'image-card' }
  ],
  belleza: [
    { name: 'Studio Glamour', specialty: 'Peluquería & Estilismo', location: 'Bogotá - Colombia', phone: '315 2209876', avatar: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=300&q=80', rating: '4.8', reviews: '120', subcat: 'peluqueria' },
    { name: 'Zen Spa Premium', specialty: 'Spa & Wellness', location: 'Medellín - Colombia', phone: '310 4456789', avatar: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=300&q=80', rating: '4.9', reviews: '85', subcat: 'spa' },
    { name: 'Nails Art Studio', specialty: 'Uñas & Nail Art', location: 'Cali - Colombia', phone: '318 3345678', avatar: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=300&q=80', rating: '4.7', reviews: '67', subcat: 'unas' },
    { name: 'Barber Kings', specialty: 'Barbería Premium', location: 'Manizales - Colombia', phone: '312 8876543', avatar: 'https://images.unsplash.com/photo-1503951914875-452f35780e85?auto=format&fit=crop&w=300&q=80', rating: '4.9', reviews: '142', subcat: 'barberia' }
  ],
  odontologos: [
    { name: 'Dra. Andrea Ruiz', specialty: 'Ortodoncia', location: 'Bogotá - Colombia', phone: '315 7789012', avatar: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=300&q=80', rating: '4.9', reviews: '78', subcat: 'ortodoncia' },
    { name: 'Dr. Felipe Torres', specialty: 'Estética Dental', location: 'Medellín - Colombia', phone: '310 2234567', avatar: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=300&q=80', rating: '4.8', reviews: '56', subcat: 'estetica' },
    { name: 'Dra. María Salazar', specialty: 'Endodoncia', location: 'Cali - Colombia', phone: '318 9912345', avatar: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=300&q=80', rating: '4.7', reviews: '42', subcat: 'endodoncia' }
  ],
  eventos: [
    { name: 'Usyk vs Dubois II', location: 'Wembley - Londres', rating: '5.0', reviews: '1.2k', image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=600&q=80', detail: 'Campeonato Mundial Pesos Pesados', hours: 'Sáb 25 Sep - 7:00 PM', price: 'Desde $180 USD', subcat: 'deportes', type: 'image-card' },
    { name: 'Coldplay World Tour', location: 'Estadio Olímpico', rating: '5.0', reviews: '3.4k', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=600&q=80', detail: 'Music of the Spheres', hours: 'Dom 10 Oct - 6:00 PM', price: 'Desde $140 USD', subcat: 'conciertos', type: 'image-card' },
    { name: 'Cirque du Soleil: KÀ', location: 'MGM Grand - Las Vegas', rating: '4.9', reviews: '890', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80', detail: 'Show acrobático inmersivo', hours: 'Todos los viernes 8PM', price: 'Desde $110 USD', subcat: 'teatro', type: 'image-card' }
  ],
  inmobiliaria: [
    { name: 'The Reserve Pent-houses', location: 'Distrito Financiero VIP', rating: '4.95', reviews: '85', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80', detail: 'Torres residenciales con helipuerto', rooms: 'Desde 120 m² - 3 Alcobas', price: 'Desde $450,000 USD', subcat: 'apartamentos', type: 'image-card' },
    { name: 'Ocean Sky Towers', location: 'Cartagena de Indias', rating: '4.9', reviews: '62', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80', detail: 'Marina privada y muelle para yates', rooms: 'Desde 95 m² - 2 Alcobas', price: 'Desde $320,000 USD', subcat: 'apartamentos', type: 'image-card' },
    { name: 'Horizon Eco Villas', location: 'Valle del Bravo', rating: '5.0', reviews: '40', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80', detail: 'Paneles solares y huertos orgánicos', rooms: 'Desde 250 m² - Lote 1000 m²', price: 'Desde $680,000 USD', subcat: 'casas', type: 'image-card' }
  ]
};

let currentProviderCategory = '';
let currentSubcategoryFilter = 'all';

function openCategorySearch() {
  const overlay = document.getElementById('categorySearchOverlay');
  const panel = document.getElementById('categorySearchPanel');
  const grid = document.getElementById('catSearchGrid');
  
  grid.innerHTML = CATEGORIES.map(cat => `
    <div class="cat-search-item" onclick="closeCategorySearch(); showCategoryProviders('${cat.id}')">
      <div class="cat-search-emoji ${cat.colorClass}">${cat.icon}</div>
      <span class="cat-search-item-label">${cat.name}</span>
    </div>
  `).join('');

  overlay.classList.add('active');
  panel.classList.add('active');
  
  setTimeout(() => {
    document.getElementById('catSearchInput').focus();
  }, 350);
}

function closeCategorySearch() {
  document.getElementById('categorySearchOverlay').classList.remove('active');
  document.getElementById('categorySearchPanel').classList.remove('active');
  document.getElementById('catSearchInput').value = '';
}

function filterCategorySearch(query) {
  const grid = document.getElementById('catSearchGrid');
  const filtered = CATEGORIES.filter(cat =>
    cat.name.toLowerCase().includes(query.toLowerCase())
  );
  grid.innerHTML = filtered.map(cat => `
    <div class="cat-search-item" onclick="closeCategorySearch(); showCategoryProviders('${cat.id}')">
      <div class="cat-search-emoji ${cat.colorClass}">${cat.icon}</div>
      <span class="cat-search-item-label">${cat.name}</span>
    </div>
  `).join('');
}

function showCategoryProviders(categoryId) {
  currentProviderCategory = categoryId;
  currentSubcategoryFilter = 'all';
  
  if (categoryId !== 'all') {
    const category = CATEGORIES.find(c => c.id === categoryId);
    if (!category) return;
  }

  // Update search placeholder based on category
  const nameSearch = document.getElementById('providersNameSearch');
  const placeholders = {
    medicos: 'Busca por Nombre y/o Apellido',
    restaurantes: 'Busca por nombre del Restaurante',
    hospedajes: 'Ingresa un destino',
    belleza: 'Busca por Nombre del Salón',
    odontologos: 'Busca por Nombre y/o Apellido',
    eventos: 'Busca un evento',
    inmobiliaria: 'Busca un proyecto'
  };
  nameSearch.placeholder = placeholders[categoryId] || 'Busca en todos los servicios...';
  nameSearch.value = '';

  renderSubcategories(categoryId);
  renderProvidersList(categoryId, 'all');

  document.getElementById('providersViewOverlay').classList.add('active');
}

function closeProvidersView() {
  document.getElementById('providersViewOverlay').classList.remove('active');
}

function renderSubcategories(categoryId) {
  const container = document.getElementById('providersSubcategories');
  const subcats = categoryId === 'all'
    ? CATEGORIES.map(c => ({ id: c.id, name: c.name, icon: c.icon }))
    : (SUBCATEGORIES[categoryId] || []);

  const isTodosActive = currentSubcategoryFilter === 'all';
  let html = `
    <div class="subcat-item ${isTodosActive ? 'active' : ''}" onclick="filterBySubcategory('all')">
      <div class="subcat-icon" style="background:var(--bg-surface);border-color:${isTodosActive ? 'var(--text-main)' : 'var(--border-color)'}">
        🗂️
      </div>
      <span class="subcat-label">Todos</span>
    </div>
  `;

  html += subcats.map(sub => `
    <div class="subcat-item ${currentSubcategoryFilter === sub.id ? 'active' : ''}" onclick="filterBySubcategory('${sub.id}')">
      <div class="subcat-icon" style="background:var(--bg-surface);border-color:${currentSubcategoryFilter === sub.id ? 'var(--text-main)' : 'var(--border-color)'}">
        ${sub.icon}
      </div>
      <span class="subcat-label">${sub.name}</span>
    </div>
  `).join('');

  container.innerHTML = html;
}

function filterBySubcategory(subcatId) {
  if (subcatId === 'all') {
    currentSubcategoryFilter = 'all';
  } else {
    currentSubcategoryFilter = currentSubcategoryFilter === subcatId ? 'all' : subcatId;
  }
  renderSubcategories(currentProviderCategory);
  renderProvidersList(currentProviderCategory, currentSubcategoryFilter);
}

function filterProvidersByName(query) {
  renderProvidersList(currentProviderCategory, currentSubcategoryFilter, query);
}

function renderProvidersList(categoryId, subcatFilter, nameQuery = '') {
  const container = document.getElementById('providersList');
  let providers = [];

  if (categoryId === 'all') {
    Object.keys(PROVIDERS_DATA).forEach(cat => {
      if (subcatFilter === 'all' || subcatFilter === cat) {
        const tagged = PROVIDERS_DATA[cat].map(p => ({ ...p, categoryId: cat }));
        providers = providers.concat(tagged);
      }
    });
  } else {
    providers = (PROVIDERS_DATA[categoryId] || []).map(p => ({ ...p, categoryId }));
    if (subcatFilter && subcatFilter !== 'all') {
      providers = providers.filter(p => p.subcat === subcatFilter);
    }
  }

  if (nameQuery.trim().length > 0) {
    const q = nameQuery.toLowerCase();
    providers = providers.filter(p => 
      p.name.toLowerCase().includes(q) ||
      (p.specialty && p.specialty.toLowerCase().includes(q)) ||
      p.location.toLowerCase().includes(q)
    );
  }

  if (providers.length === 0) {
    container.innerHTML = `<div style="padding:40px 20px;text-align:center;color:var(--text-muted);">
      <p style="font-size:32px;margin-bottom:8px;">🔍</p>
      <p style="font-weight:600;">No se encontraron resultados</p>
      <p style="font-size:13px;">Intenta con otro término de búsqueda</p>
    </div>`;
    return;
  }

  container.innerHTML = providers.map(provider => {
    if (provider.type === 'image-card') {
      return renderImageProviderCard(provider, provider.categoryId);
    } else {
      return renderAvatarProviderCard(provider, provider.categoryId);
    }
  }).join('');
}

function openProviderModal(categoryId, providerName) {
  let provider = null;
  let actualCategory = categoryId;

  if (!categoryId || categoryId === 'all') {
    for (const cat in PROVIDERS_DATA) {
      provider = PROVIDERS_DATA[cat].find(p => p.name === providerName);
      if (provider) {
        actualCategory = cat;
        break;
      }
    }
  } else {
    provider = (PROVIDERS_DATA[categoryId] || []).find(p => p.name === providerName);
  }

  if (!provider) return;

  const item = {
    id: provider.name,
    title: provider.name,
    subtitle: provider.specialty || provider.location,
    location: provider.location,
    category: actualCategory,
    rating: provider.rating ? `${provider.rating} ★ (${provider.reviews || '0'})` : '4.9 ★',
    price: provider.price || 'N/A',
    description: provider.detail || provider.hours || provider.rooms || `Servicio profesional de la categoría ${actualCategory.toUpperCase()} destacado en la plataforma Aggenda.`,
    image: provider.image || provider.avatar || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'
  };
  openModal(item);
}

function renderAvatarProviderCard(p, categoryId) {
  const cat = categoryId || p.categoryId || 'all';
  return `
    <div class="provider-card">
      <div class="provider-card-body">
        <div class="provider-card-top">
          <img src="${p.avatar}" alt="${p.name}" class="provider-avatar">
          <div class="provider-info">
            <h3 class="provider-name">${p.name}</h3>
            <p class="provider-specialty">${p.specialty}</p>
            <p class="provider-location">${p.location}</p>
            <p class="provider-phone">${p.phone}</p>
            <button class="provider-see-more" onclick="openProviderModal('${cat}', '${p.name.replace(/'/g, "\\'")}')">
              Ver Más
            </button>
          </div>
        </div>
      </div>
      <div class="provider-card-footer">
        <div class="provider-rating">
          <span class="star">★</span> ${p.rating} (${p.reviews})
        </div>
        <div class="provider-footer-actions">
          <button class="provider-icon-btn" onclick="showToast('Videollamada con ${p.name.replace(/'/g, '')}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
          </button>
          <button class="provider-icon-btn" onclick="showToast('Guardado en favoritos')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <button class="provider-book-btn" onclick="showToast('🎉 Agendando con ${p.name.replace(/'/g, '')}...')">
            AGENDAR
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderImageProviderCard(p, categoryId) {
  const cat = categoryId || p.categoryId || 'all';
  return `
    <div class="provider-card image-card">
      <img src="${p.image}" alt="${p.name}" class="provider-card-image">
      <div class="provider-card-body">
        <div class="provider-card-info-row">
          <h3 class="provider-card-title">${p.name}</h3>
          <div class="provider-card-rating">
            <span class="star">★</span> ${p.rating} (${p.reviews})
            <button class="provider-icon-btn" style="margin-left:4px;" onclick="event.stopPropagation(); showToast('Guardado en favoritos')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>
        </div>
        <p class="provider-card-location-text">${p.location}</p>
        ${p.detail ? `<p class="provider-card-detail">${p.detail}</p>` : ''}
        ${p.hours ? `<p class="provider-card-detail">${p.hours}</p>` : ''}
        ${p.rooms ? `<p class="provider-card-detail">${p.rooms}</p>` : ''}
        ${p.price ? `<p class="provider-card-price">${p.price}</p>` : ''}
        <div class="provider-card-footer-row">
          <button class="provider-see-more" style="background:var(--border-color); color:var(--text-main); margin-top:0;" onclick="openProviderModal('${cat}', '${p.name.replace(/'/g, "\\'")}')">
            Ver Más
          </button>
          <button class="provider-card-reserve-btn" onclick="showToast('🎉 Reservando en ${p.name.replace(/'/g, '')}...')">
            RESERVAR
          </button>
        </div>
      </div>
    </div>
  `;
}

// --- THEME TOGGLE & UTILS ---
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);

  const switchEl = document.getElementById('themeSwitch');
  if (switchEl) switchEl.checked = (next === 'dark');

  showToast(`Modo ${next === 'dark' ? 'Oscuro 🌙' : 'Claro ☀️'} activado`);
}

function handleGlobalSearch(query) {
  if (query.length > 2) {
    showToast(`Buscando: "${query}"...`);
  }
}

function showNotificationToast() {
  showToast('🔔 Tienes 3 notificaciones de tus próximas citas');
}

function showProfileToast(featureName) {
  showToast(`Abriendo ${featureName}...`);
}

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);
}
