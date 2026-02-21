/* ─────────────────────────────────────────
   TELIKOM — SHARED APP LOGIC
──────────────────────────────────────────*/

// ── PRODUCTS DATA ──────────────────────────
const PRODUCTS = [
  {
    id: 'p001', name: 'iPhone 15 Pro Max', brand: 'Apple', category: 'Смартфони',
    price: 56999, oldPrice: 62999, rating: 4.9, reviews: 312,
    badge: 'hit', inStock: true, emoji: '📱',
    specs: { Процесор: 'Apple A17 Pro', 'Оперативна пам\'ять': '8 ГБ', 'Пам\'ять': '256 ГБ', Дисплей: '6.7" OLED 120 Гц', Камера: '48 MP + 12 MP + 12 MP', Батарея: '4422 мАг', Гарантія: '12 місяців' },
    description: 'Потужний флагман від Apple з чіпом A17 Pro. Titanium корпус, ProRAW камера, USB-C 3.0. Максимум можливостей у твоїх руках.'
  },
  {
    id: 'p002', name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', category: 'Смартфони',
    price: 51999, oldPrice: null, rating: 4.8, reviews: 245,
    badge: 'new', inStock: true, emoji: '📱',
    specs: { Процесор: 'Snapdragon 8 Gen 3', 'Оперативна пам\'ять': '12 ГБ', 'Пам\'ять': '256 ГБ', Дисплей: '6.8" Dynamic AMOLED 120 Гц', Камера: '200 MP', Батарея: '5000 мАг', Гарантія: '12 місяців' },
    description: 'Samsung Galaxy S24 Ultra — флагман нового покоління зі вбудованим S Pen та камерою 200 МП.'
  },
  {
    id: 'p003', name: 'MacBook Pro 14" M3 Pro', brand: 'Apple', category: 'Ноутбуки',
    price: 94999, oldPrice: 102999, rating: 5.0, reviews: 187,
    badge: 'hit', inStock: true, emoji: '💻',
    specs: { Процесор: 'Apple M3 Pro', 'Оперативна пам\'ять': '18 ГБ', 'Пам\'ять': '512 ГБ SSD', Дисплей: '14.2" Liquid Retina XDR', Відеокарта: 'Apple GPU 18 ядер', Батарея: '22 год', Гарантія: '12 місяців' },
    description: 'MacBook Pro 14" на чіпі M3 Pro — для профі. Неймовірна продуктивність, яскравий XDR дисплей і до 22 годин автономної роботи.'
  },
  {
    id: 'p004', name: 'ASUS ROG Zephyrus G14', brand: 'ASUS', category: 'Ноутбуки',
    price: 74999, oldPrice: 82000, rating: 4.7, reviews: 98,
    badge: 'sale', inStock: true, emoji: '💻',
    specs: { Процесор: 'AMD Ryzen 9 8945HS', 'Оперативна пам\'ять': '32 ГБ DDR5', 'Пам\'ять': '1 ТБ NVMe SSD', Дисплей: '14" OLED 120 Гц 2880×1800', Відеокарта: 'NVIDIA RTX 4070', Батарея: '73 Вт·год', Гарантія: '24 місяці' },
    description: 'Ігровий ноутбук із OLED-дисплеєм і RTX 4070. Компактний формат — максимальна потужність.'
  },
  {
    id: 'p005', name: 'iPad Pro 12.9" M2', brand: 'Apple', category: 'Планшети',
    price: 44999, oldPrice: null, rating: 4.8, reviews: 156,
    badge: 'new', inStock: true, emoji: '📲',
    specs: { Процесор: 'Apple M2', 'Оперативна пам\'ять': '8 ГБ', 'Пам\'ять': '256 ГБ', Дисплей: '12.9" Liquid Retina XDR', Камера: '12 MP + 10 MP', 'Face ID': 'Так', Гарантія: '12 місяців' },
    description: 'iPad Pro з чіпом M2 — потужність ноутбука у форматі планшета. Ідеальний для творчості та продуктивності.'
  },
  {
    id: 'p006', name: 'Sony WH-1000XM5', brand: 'Sony', category: 'Навушники',
    price: 11999, oldPrice: 14999, rating: 4.9, reviews: 421,
    badge: 'hit', inStock: true, emoji: '🎧',
    specs: { Тип: 'Накладні бездротові', ANC: 'Так (Industry-best)', Чіп: 'V1 + QN1', 'Час роботи': '30 годин', Bluetooth: '5.2', Мікрофон: '8 мікрофонів', Гарантія: '12 місяців' },
    description: 'Найкраші навушники з шумозаглушенням у світі. Ультра-комфорт, преміальний звук і 30 годин музики.'
  },
  {
    id: 'p007', name: 'Apple Watch Series 9', brand: 'Apple', category: 'Смарт-годинники',
    price: 16999, oldPrice: null, rating: 4.7, reviews: 203,
    badge: 'new', inStock: true, emoji: '⌚',
    specs: { Чіп: 'Apple S9 SiP', Дисплей: 'Retina Always-On', GPS: 'Так', ЧСС: 'Так (постійно)', ЕКГ: 'Так', 'Захист': 'WR50', Гарантія: '12 місяців' },
    description: 'Apple Watch Series 9 — розумний годинник з Siri, ЕКГ та постійно активним дисплеєм. Стиль і здоров\'я разом.'
  },
  {
    id: 'p008', name: 'PlayStation 5 Slim', brand: 'Sony', category: 'Ігрові консолі',
    price: 21999, oldPrice: 24999, rating: 5.0, reviews: 534,
    badge: 'hit', inStock: false, emoji: '🎮',
    specs: { Процесор: 'AMD Zen 2 (8 ядер)', Відеокарта: 'AMD RDNA 2 (10.3 TFLOPS)', RAM: '16 ГБ GDDR6', 'Накопичувач': '1 ТБ SSD', Роздільна: '4K 120 fps', 'Ray Tracing': 'Так', Гарантія: '12 місяців' },
    description: 'PlayStation 5 Slim — нова компактна версія PS5. 4K 120fps, Ray Tracing, SSD NVMe — ігри нового покоління.'
  },
  {
    id: 'p009', name: 'AirPods Pro 2nd Gen', brand: 'Apple', category: 'Навушники',
    price: 8999, oldPrice: 9999, rating: 4.8, reviews: 389,
    badge: 'sale', inStock: true, emoji: '🎧',
    specs: { Тип: 'TWS', Чіп: 'Apple H2', ANC: 'Adaptive Transparency', 'Час роботи': '6 год (30 з кейсом)', Вологозахист: 'IP54', 'Spatial Audio': 'Так', Гарантія: '12 місяців' },
    description: 'AirPods Pro 2 з H2 чіпом — найкращий ANC у форматі TWS. Персоналізований просторовий звук і до 30 годин з кейсом.'
  },
  {
    id: 'p010', name: 'Xiaomi Smart Display 10', brand: 'Xiaomi', category: 'Smart Home',
    price: 6499, oldPrice: null, rating: 4.5, reviews: 87,
    badge: 'new', inStock: true, emoji: '🏠',
    specs: { Дисплей: '10" IPS 1280×800', 'Розумний дім': 'Matter + Mi Home', Камера: '8 MP', Мікрофон: 'Far-field 6 мікрофонів', WiFi: 'Wi-Fi 6', Bluetooth: '5.0', Гарантія: '12 місяців' },
    description: 'Розумний дисплей для вашого дому. Керування SmartHome, відеодзвінки, музика та асистент — все в одному пристрої.'
  },
  {
    id: 'p011', name: 'Samsung Galaxy Tab S9+', brand: 'Samsung', category: 'Планшети',
    price: 38999, oldPrice: 41999, rating: 4.7, reviews: 134,
    badge: null, inStock: true, emoji: '📲',
    specs: { Процесор: 'Snapdragon 8 Gen 2', 'Оперативна пам\'ять': '12 ГБ', 'Пам\'ять': '256 ГБ', Дисплей: '12.4" Dynamic AMOLED 2X', Камера: '13 MP + 8 MP', Стілус: 'S Pen включено', Гарантія: '12 місяців' },
    description: 'Флагманський Android-планшет з AMOLED-дисплеєм і S Pen у комплекті. Для роботи, навчання і творчості.'
  },
  {
    id: 'p012', name: 'Anker USB-C 140W GaN', brand: 'Anker', category: 'Аксесуари',
    price: 1899, oldPrice: 2299, rating: 4.6, reviews: 211,
    badge: 'sale', inStock: true, emoji: '🔌',
    specs: { Потужність: '140 Вт', Порти: '2x USB-C + 1x USB-A', Технологія: 'GaN III', Сумісність: 'MacBook Pro / iPhone / Samsung', Захист: 'OVP / OCP / SCP', Розмір: '65×65×32 мм', Гарантія: '18 місяців' },
    description: 'Компактний GaN зарядний пристрій 140 Вт — заряджай ноутбук, телефон і планшет одночасно.'
  }
];

// ── CART LOGIC ─────────────────────────────
const Cart = {
  get() {
    try { return JSON.parse(localStorage.getItem('tl_cart')) || []; }
    catch { return []; }
  },
  save(items) {
    localStorage.setItem('tl_cart', JSON.stringify(items));
    Cart.updateBadge();
  },
  add(productId, qty = 1) {
    const items = Cart.get();
    const idx = items.findIndex(i => i.id === productId);
    if (idx > -1) {
      items[idx].qty += qty;
    } else {
      items.push({ id: productId, qty });
    }
    Cart.save(items);
    showToast('Товар додано до кошика', 'success');
  },
  remove(productId) {
    const items = Cart.get().filter(i => i.id !== productId);
    Cart.save(items);
  },
  setQty(productId, qty) {
    const items = Cart.get();
    const idx = items.findIndex(i => i.id === productId);
    if (idx > -1) {
      items[idx].qty = Math.max(1, qty);
      Cart.save(items);
    }
  },
  clear() { Cart.save([]); },
  count() { return Cart.get().reduce((s, i) => s + i.qty, 0); },
  total() {
    return Cart.get().reduce((s, i) => {
      const p = PRODUCTS.find(p => p.id === i.id);
      return s + (p ? p.price * i.qty : 0);
    }, 0);
  },
  items() {
    return Cart.get().map(i => {
      const p = PRODUCTS.find(p => p.id === i.id);
      return p ? { ...p, qty: i.qty } : null;
    }).filter(Boolean);
  },
  updateBadge() {
    document.querySelectorAll('.cart-badge').forEach(el => {
      const c = Cart.count();
      el.textContent = c;
      el.style.display = c > 0 ? 'flex' : 'none';
    });
  }
};

// ── ORDER LOGIC ────────────────────────────
const Orders = {
  get() {
    try { return JSON.parse(localStorage.getItem('tl_orders')) || []; }
    catch { return []; }
  },
  save(orders) { localStorage.setItem('tl_orders', JSON.stringify(orders)); },
  create(data) {
    const orders = Orders.get();
    const id = 'TL' + Date.now().toString(36).toUpperCase();
    const order = {
      id,
      ...data,
      createdAt: new Date().toISOString(),
      status: 'new'
    };
    orders.push(order);
    Orders.save(orders);
    return order;
  },
  find(id) { return Orders.get().find(o => o.id === id); },
  update(id, status) {
    const orders = Orders.get();
    const idx = orders.findIndex(o => o.id === id);
    if (idx > -1) { orders[idx].status = status; Orders.save(orders); }
  }
};

// ── TOAST ──────────────────────────────────
function showToast(msg, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || '💬'}</span><span class="toast-msg">${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut .3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ── STAR RATING ────────────────────────────
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '☆';
  return `<span class="stars">${s}</span>`;
}

// ── FORMAT PRICE ───────────────────────────
function formatPrice(n) {
  return n.toLocaleString('uk-UA') + ' ₴';
}

// ── PRODUCT CARD HTML ──────────────────────
function productCard(p) {
  const badgeMap = { new: ['badge-new', 'НОВИНКА'], sale: ['badge-sale', 'АКЦІЯ'], hit: ['badge-hit', 'ХІТ'] };
  const badge = p.badge ? `<div class="product-badge ${badgeMap[p.badge][0]}">${badgeMap[p.badge][1]}</div>` : '';
  const oldPrice = p.oldPrice ? `<span class="product-price-old">${formatPrice(p.oldPrice)}</span>` : '';
  const stockBadge = p.inStock
    ? '<span class="availability in-stock">● В наявності</span>'
    : '<span class="availability out-stock">● Нема</span>';
  return `
  <div class="product-card fade-in" data-id="${p.id}" data-category="${p.category}" data-brand="${p.brand}">
    <a href="product.html?id=${p.id}" style="display:contents">
      <div class="product-img">
        ${badge}
        <span style="font-size:5rem">${p.emoji}</span>
      </div>
    </a>
    <div class="product-body">
      <div class="product-brand">${p.brand}</div>
      <a href="product.html?id=${p.id}"><div class="product-name">${p.name}</div></a>
      <div class="product-rating">${renderStars(p.rating)} ${p.rating} (${p.reviews})</div>
      ${stockBadge}
      <div class="product-price-row">
        <div>
          <div class="product-price">${formatPrice(p.price)}</div>
          ${oldPrice}
        </div>
      </div>
    </div>
    <div class="product-footer">
      <button class="btn btn-primary btn-sm" style="flex:1" onclick="Cart.add('${p.id}'); event.stopPropagation()" ${!p.inStock ? 'disabled style="opacity:.5;cursor:not-allowed"' : ''}>
        🛒 До кошика
      </button>
      <a href="product.html?id=${p.id}" class="btn btn-ghost btn-sm btn-icon">👁</a>
    </div>
  </div>`;
}

// ── NAV MOBILE ─────────────────────────────
function initNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  }
  // highlight active
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
  Cart.updateBadge();
}

// ── COUNTDOWN ──────────────────────────────
function initCountdown(endMs) {
  function tick() {
    const diff = Math.max(0, endMs - Date.now());
    const h = Math.floor(diff / 36e5);
    const m = Math.floor((diff % 36e5) / 6e4);
    const s = Math.floor((diff % 6e4) / 1e3);
    const d = Math.floor(diff / 864e5);
    const el = id => document.getElementById(id);
    if (el('cd-days')) el('cd-days').textContent = String(d).padStart(2, '0');
    if (el('cd-hours')) el('cd-hours').textContent = String(h % 24).padStart(2, '0');
    if (el('cd-mins')) el('cd-mins').textContent = String(m).padStart(2, '0');
    if (el('cd-secs')) el('cd-secs').textContent = String(s).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
}

// ── GET QUERY PARAM ────────────────────────
function getParam(key) {
  return new URLSearchParams(location.search).get(key);
}

// ── INIT ───────────────────────────────────
document.addEventListener('DOMContentLoaded', initNav);
