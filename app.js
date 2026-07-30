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
    unreadCount: 0,
    time: '24 Jul',
    serviceTitle: 'Mesa Tasting Menu - 14 Agosto',
    messages: [
      { sender: 'user', text: 'Hola, quisiéramos solicitar una copa de bienvenida de champagne para la celebración de aniversario.', time: '24 Jul' },
      { sender: 'provider', text: 'Con todo gusto Sr. Morales, lo tenemos anotado en sus notas especiales de mesa.', time: '24 Jul' }
    ]
  }
];

// STATE MANAGEMENT
let activeTab = 'inicio';
let currentSlideIndex = 0;
let slideInterval = null;
let activeChatId = 'chat-1';
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
  showToast(`Filtrando categoría: ${catId.toUpperCase()}`);
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
        <div class="conv-msg">${c.messages[c.messages.length - 1].text}</div>
      </div>
      ${c.unreadCount > 0 ? `<span class="conv-badge">${c.unreadCount}</span>` : ''}
    </div>
  `).join('');
}

function renderActiveChat() {
  const conv = CONVERSATIONS.find(c => c.id === activeChatId);
  if (!conv) return;

  // Update header
  const header = document.getElementById('activeChatHeader');
  if (header) {
    header.innerHTML = `
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
  closeModal();
  showToast('🎉 ¡Reserva confirmada con éxito!');
  switchTab('reservas');
}

function openChatFromModal() {
  closeModal();
  if (activeModalItem) {
    openChatWithProvider(activeModalItem.title);
  }
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
