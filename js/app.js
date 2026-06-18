/* ========================================
   ROYAL MOTORS - Configuración & Utilidades
   ======================================== */

// ════════════════════════════════════════
// CONFIGURACIÓN DE SUPABASE
// ════════════════════════════════════════
// IMPORTANTE: Reemplaza estos valores con los tuyos (ver MANUAL.md)
const SUPABASE_URL = 'https://saaghanbiydtvficvjsk.supabase.co';
// ⚠️  ANON KEY incorrecta. Pasos para obtener la correcta:
//  1. Ve a https://supabase.com → tu proyecto → ícono ⚙️ Settings (izquierda abajo)
//  2. Clic en "API" en el menú de Settings
//  3. Bajo "Project API keys" copia la fila "anon" "public"
//  4. El valor correcto SIEMPRE empieza con "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
//  5. Reemplaza la línea de abajo con ese valor
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhYWdoYW5iaXlkdHZmaWN2anNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0ODE4MDEsImV4cCI6MjA5NTA1NzgwMX0.YKkBYrd7Os6xV7qIbx9zi3FcqLRmIJGXOA6gP2Ff8tY';

// Inicializar cliente de Supabase (se carga desde CDN en cada HTML)
const supabaseClient = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

// ════════════════════════════════════════
// CONFIGURACIÓN DE LA EMPRESA
// ════════════════════════════════════════
const RM_CONFIG = {
  whatsappNumber: '56937003368',              // Sin el "+" — formato internacional
  whatsappDefaultMsg: 'Hola, me interesa un vehículo de Royal Motors',
  email: 'contactoroyalmotors@gmail.com',
  emailHR: 'contactoroyalmotors@gmail.com',
  location: 'Viña del Mar & Santiago, Chile',
  phone: '+56 9 37003368',
  hours: 'Lunes a Viernes: 9:00 — 19:00\nSábados: 10:00 — 14:00',
};

const BRANDS = ['Porsche','BMW','Mercedes-Benz','Audi','Land Rover','Lexus','Volvo','Toyota','Hyundai','Kia'];
const TYPES = ['SUV','Sedán','Deportivo','Coupé','Pickup','Hatchback'];
const CATEGORIES = [
  { v: 'alto_valor', l: 'Alto Valor' },
  { v: 'valor_medio', l: 'Valor Medio' }
];

// ════════════════════════════════════════
// DATOS DE EJEMPLO (mientras Supabase no esté configurado)
// ════════════════════════════════════════
const SAMPLE_CARS = [
  {id:'1',brand:'Porsche',model:'Cayenne S',year:2023,price:78900000,category:'alto_valor',type:'SUV',images:['https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800','https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800','https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800'],description:'Porsche Cayenne S en impecable estado. Único dueño, mantenimiento al día en servicio oficial.',specs:{motor:'V6 2.9L Twin-Turbo',hp:'440 HP',transmision:'Automática 8 vel.',combustible:'Bencina',km:'18.500 km',color:'Negro Jet Black',traccion:'AWD'},featured:true,status:'available',whatsapp:'56912345678'},
  {id:'2',brand:'BMW',model:'M4 Competition',year:2022,price:62500000,category:'alto_valor',type:'Coupé',images:['https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800'],description:'BMW M4 Competition con paquete M Performance.',specs:{motor:'I6 3.0L Twin-Turbo',hp:'510 HP',transmision:'Automática 8 vel.',combustible:'Bencina',km:'12.300 km',color:'Azul Isle of Man',traccion:'RWD'},featured:true,status:'available',whatsapp:'56912345678'},
  {id:'3',brand:'Mercedes-Benz',model:'GLE 450 AMG-Line',year:2023,price:55000000,category:'alto_valor',type:'SUV',images:['https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800'],description:'Mercedes-Benz GLE 450 con paquete AMG-Line. Full equipo.',specs:{motor:'I6 3.0L Turbo',hp:'367 HP',transmision:'9G-TRONIC',combustible:'Bencina',km:'22.000 km',color:'Blanco Polar',traccion:'4MATIC'},featured:true,status:'available',whatsapp:'56912345678'},
  {id:'4',brand:'Audi',model:'A5 Sportback',year:2021,price:32000000,category:'valor_medio',type:'Sedán',images:['https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800'],description:'Audi A5 Sportback S-Line.',specs:{motor:'I4 2.0L TFSI',hp:'204 HP',transmision:'S tronic 7 vel.',combustible:'Bencina',km:'35.000 km',color:'Gris Daytona',traccion:'FWD'},featured:false,status:'available',whatsapp:'56912345678'},
  {id:'5',brand:'Volvo',model:'XC60 T8 Recharge',year:2022,price:42000000,category:'valor_medio',type:'SUV',images:['https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800'],description:'Volvo XC60 T8 híbrido enchufable.',specs:{motor:'I4 2.0L Híbrido',hp:'455 HP',transmision:'Automática 8 vel.',combustible:'Híbrido PHEV',km:'28.000 km',color:'Crystal White',traccion:'AWD'},featured:true,status:'available',whatsapp:'56912345678'},
  {id:'6',brand:'Toyota',model:'Hilux SRX',year:2023,price:28000000,category:'valor_medio',type:'Pickup',images:['https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800'],description:'Toyota Hilux SRX tope de línea.',specs:{motor:'I4 2.8L Turbo Diesel',hp:'204 HP',transmision:'Automática 6 vel.',combustible:'Diésel',km:'15.000 km',color:'Gris Oscuro',traccion:'4x4'},featured:false,status:'available',whatsapp:'56912345678'},
];

// ════════════════════════════════════════
// ÍCONOS SVG (reutilizables)
// ════════════════════════════════════════
const ICONS = {
  menu: '<svg width="22" height="16" viewBox="0 0 22 16" fill="none"><path d="M1 1h20M1 8h20M1 15h20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  close: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 1l14 14M15 1L1 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  chevL: '<svg width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M9 1L2 8l7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  chevR: '<svg width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M1 1l7 7-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  whatsapp: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  pin: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1C5.243 1 3 3.243 3 6c0 4.125 5 9 5 9s5-4.875 5-9c0-2.757-2.243-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" fill="currentColor"/></svg>',
  phone: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.5 11.5c-1.1 0-2.1-.2-3.1-.5-.3-.1-.7 0-.9.2l-1.7 2.1c-2.5-1.3-4.6-3.3-5.8-5.8L5 5.4c.3-.3.3-.6.2-.9-.3-1-.5-2-.5-3C4.7 1.2 4.5 1 4.2 1H1.5C1.2 1 1 1.2 1 1.5 1 8.9 7.1 15 14.5 15c.3 0 .5-.2.5-.5v-2.5c0-.3-.2-.5-.5-.5z" fill="currentColor"/></svg>',
  mail: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 3h12c.6 0 1 .4 1 1v8c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1z" stroke="currentColor" stroke-width="1.2"/><path d="M15 4l-7 5-7-5" stroke="currentColor" stroke-width="1.2"/></svg>',
  clock: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.2"/><path d="M8 4v4l3 2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',
  shield: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l8 4v6c0 5.25-3.5 10-8 11.5C7.5 22 4 17.25 4 12V6l8-4z" stroke="currentColor" stroke-width="1.3"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  star: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3l2.8 5.7 6.2 1-4.5 4.3 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.7l6.2-1L12 3z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
  handshake: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 10h4l3 3 5-5 3 3h5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 13l2 2m2-6l2 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  tag: '<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M4 4h8l12 12-8 8L4 12V4z" stroke="currentColor" stroke-width="1.5"/><circle cx="9" cy="9" r="1.5" fill="currentColor"/></svg>',
  card: '<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M3 11h22" stroke="currentColor" stroke-width="1.5"/><path d="M7 16h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  user: '<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  search: '<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="1.5"/><path d="M17 17l7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  car: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 11l1.5-5h9L15 11M2 11h14v4H2v-4z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><circle cx="5" cy="15" r="1.5" stroke="currentColor" stroke-width="1"/><circle cx="13" cy="15" r="1.5" stroke="currentColor" stroke-width="1"/></svg>',
  plus: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  lock: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="8" width="12" height="8" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M6 8V5a3 3 0 016 0v3" stroke="currentColor" stroke-width="1.3"/></svg>',
  globe: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" stroke-width="1.2"/><path d="M2 9h14M9 2c2 2.5 2 11 0 14M9 2c-2 2.5-2 11 0 14" stroke="currentColor" stroke-width="1.2"/></svg>',
  logout: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12 5l4 4-4 4M16 9H6M6 2H3v14h3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  trash: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 4h10M5 4V2h4v2M3 4l1 9h6l1-9" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  edit: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10 2l2 2-8 8H2v-2l8-8z" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/></svg>',
  upload: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 16V4m0 0l-4 4m4-4l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  arrowUp: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 10V2m0 0L2 6m4-4l4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  arrowDown: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2v8m0 0l4-4m-4 4L2 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l4 4 6-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

// ════════════════════════════════════════
// UTILIDADES
// ════════════════════════════════════════
const fmtPrice = (n) => '$' + new Intl.NumberFormat('es-CL').format(n);

const getWhatsAppUrl = (msg) => {
  const message = msg || RM_CONFIG.whatsappDefaultMsg;
  return `https://wa.me/${RM_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

const showToast = (msg) => {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = ICONS.check + ' ' + msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
};

// ════════════════════════════════════════
// NAVBAR (inyectable en cualquier página)
// ════════════════════════════════════════
function renderNavbar(activePage) {
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML = `
    <a href="index.html" class="logo">ROYAL <span>MOTORS</span></a>
    <button class="burger" aria-label="Menu">${ICONS.menu}</button>
    <div class="nav-links">
      <a href="index.html" class="nav-link ${activePage==='home'?'active':''}">Inicio</a>
      <a href="modelos.html" class="nav-link ${activePage==='modelos'?'active':''}">Nuestros Modelos</a>
      <a href="nosotros.html" class="nav-link ${activePage==='nosotros'?'active':''}">Sobre Nosotros</a>
      <a href="contacto.html" class="nav-link ${activePage==='contacto'?'active':''}">Contacto</a>
      <a href="trabaja.html" class="nav-link ${activePage==='trabaja'?'active':''}">Trabaja con Nosotros</a>
      <a href="${getWhatsAppUrl()}" target="_blank" rel="noopener" class="nav-cta">${ICONS.whatsapp} WhatsApp</a>
    </div>
  `;
  document.body.insertBefore(nav, document.body.firstChild);

  // Burger toggle
  const burger = nav.querySelector('.burger');
  const links = nav.querySelector('.nav-links');
  burger.addEventListener('click', () => {
    links.classList.toggle('open');
    burger.innerHTML = links.classList.contains('open') ? ICONS.close : ICONS.menu;
  });

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ════════════════════════════════════════
// FOOTER (inyectable en cualquier página)
// ════════════════════════════════════════
function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer-grid">
      <div>
        <div class="footer-brand">ROYAL MOTORS</div>
        <p class="footer-desc">La forma más inteligente de vender y comprar tu próximo vehículo. Gestión premium en Viña del Mar y Santiago.</p>
      </div>
      <div>
        <div class="footer-title">Navegación</div>
        <a href="index.html" class="footer-link">Inicio</a>
        <a href="modelos.html" class="footer-link">Nuestros Modelos</a>
        <a href="nosotros.html" class="footer-link">Sobre Nosotros</a>
        <a href="contacto.html" class="footer-link">Contacto</a>
      </div>
      <div>
        <div class="footer-title">Servicios</div>
        <span class="footer-link">Consignación</span>
        <span class="footer-link">Financiamiento</span>
        <span class="footer-link">Compra Directa</span>
        <span class="footer-link">Asesoría</span>
      </div>
      <div>
        <div class="footer-title">Contacto</div>
        <span class="footer-link with-icon">${ICONS.pin} ${RM_CONFIG.location}</span>
        <span class="footer-link with-icon">${ICONS.phone} ${RM_CONFIG.phone}</span>
        <span class="footer-link with-icon">${ICONS.mail} ${RM_CONFIG.email}</span>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Royal Motors. Todos los derechos reservados. Desarrollado por Juan Vial R-T • +56 9 9199 9301</span>

    </div>
  `;
  document.body.appendChild(footer);
}

// ════════════════════════════════════════
// BOTÓN WHATSAPP FLOTANTE
// ════════════════════════════════════════
function renderWhatsAppFloat() {
  const a = document.createElement('a');
  a.href = getWhatsAppUrl();
  a.target = '_blank';
  a.rel = 'noopener';
  a.className = 'wa-float';
  a.setAttribute('aria-label', 'Contactar por WhatsApp');
  a.innerHTML = ICONS.whatsapp;
  document.body.appendChild(a);
}

// ════════════════════════════════════════
// CARGAR VEHÍCULOS (Supabase o fallback)
// ════════════════════════════════════════
async function loadCars() {
  // Si Supabase está configurado, traer de la DB
 if (supabaseClient && SUPABASE_URL !== 'https://TU-PROYECTO.supabase.co'){
    try {
      const { data, error } = await supabaseClient
        .from('vehicles')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data.map(v => ({
        ...v,
        images: v.images || [],
        specs: v.specs || {}
      }));
    } catch (e) {
      console.warn('Error cargando de Supabase, usando datos de ejemplo:', e.message);
      return SAMPLE_CARS;
    }
  }
  // Fallback: datos de ejemplo
  return SAMPLE_CARS;
}

// ════════════════════════════════════════
// RENDER DE TARJETA DE AUTO
// ════════════════════════════════════════
function renderCarCard(car) {
  const img = car.images?.[0]
    ? `<img class="car-img" src="${car.images[0]}" alt="${car.brand} ${car.model}" loading="lazy" onerror="this.outerHTML='<div class=&quot;car-img-placeholder&quot;>Sin imagen</div>'">`
    : `<div class="car-img-placeholder">Sin imagen</div>`;

  const badge = car.status === 'sold'
    ? `<div class="car-badge sold">Vendido</div>`
    : (car.featured ? `<div class="car-badge">Destacado</div>` : '');

  return `
    <article class="car-card" data-car-id="${car.id}">
      <div class="car-img-wrap">${img}${badge}</div>
      <div class="car-info">
        <div class="car-brand">${car.brand}</div>
        <div class="car-name">${car.model}</div>
        <div class="car-specs-mini">
          <span>${car.year}</span>
          <span class="sep">|</span>
          <span>${car.type}</span>
          <span class="sep">|</span>
          <span>${car.specs?.km || '—'}</span>
        </div>
        <div class="car-price">${fmtPrice(car.price)} <span class="car-price-label">CLP</span></div>
      </div>
    </article>
  `;
}


// ════════════════════════════════════════
// MODAL DE AUTO — carrusel transform-based
// ════════════════════════════════════════
function openCarModal(car) {
  const existing = document.querySelector('.modal-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  const images = car.images || [];
  const multi  = images.length > 1;

  const specsHtml = car.specs
    ? Object.entries(car.specs)
        .filter(([_, v]) => v)
        .map(([k, v]) => `<div class="spec-item"><span class="spec-label">${k}</span><span class="spec-value">${v}</span></div>`)
        .join('')
    : '';

  const waMsg = `Hola, me interesa el ${car.brand} ${car.model} ${car.year} publicado en Royal Motors.`;
  const waUrl = `https://wa.me/${car.whatsapp || RM_CONFIG.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;

  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <button class="modal-close" aria-label="Cerrar">${ICONS.close}</button>

      <div class="carousel">
        ${images.length
          ? `<div class="carousel-track">
               ${images.map(img => `<img src="${img}" alt="${car.brand} ${car.model}" loading="lazy">`).join('')}
             </div>`
          : `<div class="carousel-empty">Sin imagen disponible</div>`
        }
        ${multi ? `
          <button class="carousel-btn prev" aria-label="Anterior">${ICONS.chevL}</button>
          <button class="carousel-btn next" aria-label="Siguiente">${ICONS.chevR}</button>
          <div class="carousel-dots">
            ${images.map((_,i) => `<button class="carousel-dot ${i===0?'active':''}" aria-label="Imagen ${i+1}"></button>`).join('')}
          </div>
          <div class="carousel-counter"><span id="cCur">1</span> / ${images.length}</div>
        ` : ''}
      </div>

      ${multi ? `
        <div class="carousel-thumbs" id="cThumbs">
          ${images.map((img,i) => `<img class="carousel-thumb ${i===0?'active':''}" src="${img}" alt="Miniatura ${i+1}" data-idx="${i}" loading="lazy">`).join('')}
        </div>
      ` : ''}

      <div class="modal-body">
        <div class="modal-brand">${car.brand}</div>
        <div class="modal-name">${car.model} — ${car.year}</div>
        <div class="modal-price">${fmtPrice(car.price)}</div>
        <p class="modal-desc">${car.description || ''}</p>
        ${specsHtml ? `<div class="specs-grid">${specsHtml}</div>` : ''}
        <a href="${waUrl}" target="_blank" rel="noopener" class="modal-wa">${ICONS.whatsapp} Consultar por WhatsApp</a>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  // ── Cerrar ──────────────────────────────
  const close = () => { overlay.remove(); document.body.style.overflow = ''; };
  overlay.querySelector('.modal-close').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
  });

  // ── Carrusel ────────────────────────────
  if (!multi || !images.length) return;

  let idx = 0;
  const track  = overlay.querySelector('.carousel-track');
  const dots   = overlay.querySelectorAll('.carousel-dot');
  const thumbs = overlay.querySelectorAll('.carousel-thumb');
  const counter = overlay.querySelector('#cCur');

  function goTo(i) {
    idx = (i + images.length) % images.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, k)   => d.classList.toggle('active', k === idx));
    thumbs.forEach((t, k) => t.classList.toggle('active', k === idx));
    if (counter) counter.textContent = idx + 1;
    // scroll thumb into view
    const activeThumb = overlay.querySelector('.carousel-thumb.active');
    if (activeThumb) activeThumb.scrollIntoView({ inline: 'center', behavior: 'smooth' });
  }

  overlay.querySelector('.carousel-btn.prev').addEventListener('click', () => goTo(idx - 1));
  overlay.querySelector('.carousel-btn.next').addEventListener('click', () => goTo(idx + 1));
  dots.forEach((d, i)   => d.addEventListener('click', () => goTo(i)));
  thumbs.forEach((t, i) => t.addEventListener('click', () => goTo(i)));

  // Swipe táctil
  let touchStartX = 0;
  const carouselEl = overlay.querySelector('.carousel');
  carouselEl.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  carouselEl.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(dx < 0 ? idx + 1 : idx - 1);
  });

  // Teclado
  document.addEventListener('keydown', function nav(e) {
    if (!document.querySelector('.modal-overlay')) { document.removeEventListener('keydown', nav); return; }
    if (e.key === 'ArrowRight') goTo(idx + 1);
    if (e.key === 'ArrowLeft')  goTo(idx - 1);
  });
}


// ════════════════════════════════════════
// INICIALIZACIÓN DE PÁGINA
// ════════════════════════════════════════
function initPage(activePage) {
  renderNavbar(activePage);
  renderFooter();
  renderWhatsAppFloat();
}
