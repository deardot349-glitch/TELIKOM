// ===== TELIKOM — COMPONENTS =====
// Shared HTML components rendered into pages

function renderNavbar(activePage) {
  return `
  <nav class="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">TELI<span>KOM</span></a>
      <div class="nav-links">
        <a href="index.html" ${activePage==='index'?'class="active"':''}>Головна</a>
        <a href="catalog.html" ${activePage==='catalog'?'class="active"':''}>Каталог</a>
        <a href="tracking.html" ${activePage==='tracking'?'class="active"':''}>Відстеження</a>
        <a href="admin.html" ${activePage==='admin'?'class="active"':''}>Адмін</a>
      </div>
      <div class="nav-search">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder="Пошук товарів..." id="globalSearch" autocomplete="off">
      </div>
      <div class="nav-actions">
        <a href="cart.html" class="nav-cart-btn">
          🛒 <span id="cartTotal" style="font-size:13px;font-weight:700;display:none"></span>
          <span class="cart-badge" style="display:none">0</span>
        </a>
      </div>
      <button class="nav-mobile-toggle">☰</button>
    </div>
  </nav>
  <div class="mobile-menu">
    <button class="mobile-menu-close">×</button>
    <a href="index.html">Головна</a>
    <a href="catalog.html">Каталог</a>
    <a href="tracking.html">Відстеження</a>
    <a href="cart.html">Кошик</a>
    <a href="admin.html">Адмін</a>
  </div>`;
}

function renderFooter() {
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">TELI<span>KOM</span></div>
          <p class="footer-desc">Офіційний магазин електроніки. Тільки оригінальна продукція з офіційною гарантією. Доставка по всій Україні.</p>
          <div class="social-links">
            <a href="#" class="social-link" title="Instagram">📸</a>
            <a href="#" class="social-link" title="Telegram">✈️</a>
            <a href="#" class="social-link" title="Facebook">👍</a>
            <a href="#" class="social-link" title="TikTok">🎵</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Каталог</div>
          <div class="footer-links">
            <a href="catalog.html?cat=Смартфони">Смартфони</a>
            <a href="catalog.html?cat=Ноутбуки">Ноутбуки</a>
            <a href="catalog.html?cat=Планшети">Планшети</a>
            <a href="catalog.html?cat=Навушники">Навушники</a>
            <a href="catalog.html?cat=Смарт-годинники">Смарт-годинники</a>
            <a href="catalog.html?cat=Ігрові консолі">Ігрові консолі</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Покупцям</div>
          <div class="footer-links">
            <a href="tracking.html">Відстеження</a>
            <a href="cart.html">Кошик</a>
            <a href="checkout.html">Оформлення</a>
            <a href="#">Гарантія</a>
            <a href="#">Повернення</a>
            <a href="#">FAQ</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Контакти</div>
          <div class="footer-links">
            <a href="tel:+380800000000">📞 0800 000 000</a>
            <a href="mailto:info@telikom.ua">✉️ info@telikom.ua</a>
            <a href="#">📍 Київ, Україна</a>
            <a href="#">Пн–Нд: 9:00–21:00</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 TELIKOM. Усі права захищено.</span>
        <span>Офіційний магазин електроніки</span>
      </div>
    </div>
  </footer>`;
}

function initGlobalSearch() {
  const input = document.getElementById('globalSearch');
  if (!input) return;
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      window.location.href = `catalog.html?q=${encodeURIComponent(input.value.trim())}`;
    }
  });
}

function updateNavCartTotal() {
  const total = getCartTotal();
  const el = document.getElementById('cartTotal');
  if (el && total > 0) {
    el.textContent = formatPrice(total);
    el.style.display = 'inline';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initGlobalSearch();
  updateNavCartTotal();
});
