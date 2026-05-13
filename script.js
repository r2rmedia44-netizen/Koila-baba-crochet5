/* ===== DEFAULT PRODUCTS ===== */
const DEFAULT_PRODUCTS = [
  // FLOWERS
  { id: 1, name: "Crimson Rose", desc: "Deep red crocheted rose, handcrafted with care", emoji: "🌹", price: 120, category: "flowers", tag: "FLOWER" },
  { id: 2, name: "Blush Peony", desc: "Soft pink peony, beautifully layered petals", emoji: "🌸", price: 140, category: "flowers", tag: "FLOWER" },
  { id: 3, name: "Sunlit Daisy", desc: "Cheerful yellow daisy in premium yarn", emoji: "🌻", price: 90, category: "flowers", tag: "FLOWER" },
  { id: 4, name: "Lavender Bloom", desc: "Elegant lavender sprig, soothing and serene", emoji: "💜", price: 110, category: "flowers", tag: "FLOWER" },
  { id: 5, name: "Ivory Magnolia", desc: "Classic white magnolia, timeless beauty", emoji: "🤍", price: 160, category: "flowers", tag: "FLOWER" },
  { id: 6, name: "Wild Sunflower", desc: "Bold sunflower bloom full of warmth", emoji: "🌼", price: 100, category: "flowers", tag: "FLOWER" },
  { id: 7, name: "Blue Hydrangea", desc: "Clusters of blue blooms, uniquely crafted", emoji: "💙", price: 130, category: "flowers", tag: "FLOWER" },
  { id: 8, name: "Dusty Tulip", desc: "Vintage-toned tulip in muted hues", emoji: "🌷", price: 95, category: "flowers", tag: "FLOWER" },
  // CHARACTERS
  { id: 9, name: "Bunny Bouquet", desc: "Adorable bunny holding a spring flower arrangement", emoji: "🐰", price: 380, category: "characters", tag: "CHARACTER" },
  { id: 10, name: "Teddy Bear", desc: "Huggable bear holding a mini bouquet with love", emoji: "🧸", price: 420, category: "characters", tag: "CHARACTER" },
  { id: 11, name: "Ducky Friend", desc: "Sweet yellow duck with floral accessories", emoji: "🐥", price: 350, category: "characters", tag: "CHARACTER" },
  { id: 12, name: "Kitty Bloom", desc: "Cute cat character wrapped in yarn flowers", emoji: "🐱", price: 390, category: "characters", tag: "CHARACTER" },
  // BOUQUETS
  { id: 13, name: "Spring Dream Bouquet", desc: "A full bouquet of mixed crochet blooms", emoji: "💐", price: 480, category: "bouquet", tag: "BOUQUET" },
  { id: 14, name: "Bridal White Set", desc: "Elegant all-white bridal bouquet in premium yarn", emoji: "🤍", price: 650, category: "bouquet", tag: "BOUQUET" },
  { id: 15, name: "Sunset Arrangement", desc: "Warm oranges and pinks in a full bouquet", emoji: "🌅", price: 520, category: "bouquet", tag: "BOUQUET" },
  // PIPE CLEANER FLOWERS
  { id: 16, name: "Pipe Cleaner Bouquet", desc: "Mini mixed bouquet crafted from pipe cleaner flowers", emoji: "🌺", price: 180, category: "pipe-cleaner", tag: "PIPE CLEANER" },
  { id: 17, name: "Pipe Cleaner Lily", desc: "Elegant white lily crafted from pearl pipe cleaners", emoji: "🪷", price: 60, category: "pipe-cleaner", tag: "PIPE CLEANER" },
  { id: 18, name: "Rainbow PC Set", desc: "Colourful pipe cleaner flower set, 5 blooms", emoji: "🌈", price: 240, category: "pipe-cleaner", tag: "PIPE CLEANER" },
  // ACCESSORIES
  { id: 19, name: "Floral Hair Pin", desc: "Delicate crochet flower hair accessory", emoji: "⭐", price: 80, category: "accessories", tag: "ACCESSORY" },
  { id: 20, name: "Bloom Keychain", desc: "Miniature rose bouquet keychain charm", emoji: "🌻", price: 65, category: "accessories", tag: "ACCESSORY" },
  { id: 21, name: "Petal Brooch", desc: "Wearable crochet flower brooch, gold pin", emoji: "✨", price: 110, category: "accessories", tag: "ACCESSORY" },
  // BAGS
  { id: 22, name: "Mini Tote Bag", desc: "Crocheted mini tote with floral motif", emoji: "👜", price: 350, category: "bags", tag: "BAG" },
  { id: 23, name: "Drawstring Pouch", desc: "Cute yarn drawstring pouch for gifting", emoji: "🎁", price: 180, category: "bags", tag: "BAG" },
  // CHARMS
  { id: 24, name: "Rose Charm", desc: "Tiny crocheted rose charm for bags & keys", emoji: "🌹", price: 45, category: "charms", tag: "CHARM" },
  { id: 25, name: "Sunflower Charm", desc: "Bright sunflower charm, cheerful and cute", emoji: "🌻", price: 45, category: "charms", tag: "CHARM" },
  // OCCASIONS
  { id: 26, name: "Birthday Bloom Set", desc: "Festive crochet bouquet for birthdays", emoji: "🎂", price: 320, category: "occasions", tag: "OCCASION" },
  { id: 27, name: "Anniversary Special", desc: "Romantic red rose set for anniversaries", emoji: "❤️", price: 580, category: "occasions", tag: "OCCASION" },
  { id: 28, name: "Graduation Gift", desc: "Celebratory bouquet for graduates", emoji: "🎓", price: 420, category: "occasions", tag: "OCCASION" },
];

/* ===== BUILDER DATA ===== */
const BUILDER_FLOWERS = [
  { id: "bf1", name: "Crimson Rose", emoji: "🌹", price: 120 },
  { id: "bf2", name: "Blush Peony", emoji: "🌸", price: 140 },
  { id: "bf3", name: "Sunlit Daisy", emoji: "🌻", price: 90 },
  { id: "bf4", name: "Lavender Bloom", emoji: "💜", price: 110 },
  { id: "bf5", name: "Ivory Magnolia", emoji: "🤍", price: 160 },
  { id: "bf6", name: "Wild Sunflower", emoji: "🌼", price: 100 },
  { id: "bf7", name: "Blue Hydrangea", emoji: "💙", price: 130 },
  { id: "bf8", name: "Dusty Tulip", emoji: "🌷", price: 95 },
  { id: "bf9", name: "Peach Lily", emoji: "🪷", price: 115 },
  { id: "bf10", name: "White Jasmine", emoji: "🌿", price: 85 },
];

const BUILDER_WRAPPERS = [
  { id: "bw1", name: "Kraft Paper", emoji: "📜", price: 50 },
  { id: "bw2", name: "Satin Ribbon", emoji: "🎀", price: 80 },
  { id: "bw3", name: "Jute Twine", emoji: "🪢", price: 60 },
  { id: "bw4", name: "Velvet Wrap", emoji: "🟥", price: 100 },
  { id: "bw5", name: "Gift Box", emoji: "📦", price: 120 },
  { id: "bw6", name: "Lace Wrap", emoji: "🤍", price: 90 },
];

const BUILDER_EXTRAS = [
  { id: "be1", name: "Gold Bow", emoji: "🎗️", price: 40 },
  { id: "be2", name: "Tissue Paper", emoji: "📄", price: 25 },
  { id: "be3", name: "Greeting Card", emoji: "💌", price: 55 },
  { id: "be4", name: "Baby's Breath", emoji: "🤍", price: 55 },
  { id: "be5", name: "Dried Leaves", emoji: "🍂", price: 45 },
  { id: "be6", name: "Scent Sachet", emoji: "🌿", price: 60 },
];

/* ===== STORAGE HELPERS ===== */
function getProducts() {
  const stored = localStorage.getItem('kbc_products');
  if (stored) return JSON.parse(stored);
  localStorage.setItem('kbc_products', JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS;
}

function saveProducts(products) {
  localStorage.setItem('kbc_products', JSON.stringify(products));
}

function resetProducts() {
  localStorage.setItem('kbc_products', JSON.stringify(DEFAULT_PRODUCTS));
}

/* ===== NAVBAR / MENU ===== */
function initNavbar() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ===== PRODUCT CARD HTML ===== */
function productCardHTML(p, waNumber = '918638733586') {
  const msg = encodeURIComponent(`Hi! I'd like to order: *${p.name}* (₹${p.price})\n\nPlease confirm availability and delivery details.`);
  const waLink = `https://wa.me/${waNumber}?text=${msg}`;
  return `
    <div class="product-card" data-category="${p.category}">
      <div class="product-card-image">
        <span class="product-tag">${p.tag || p.category.toUpperCase()}</span>
        <span>${p.emoji}</span>
      </div>
      <div class="product-card-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="product-card-footer">
          <span class="product-price">₹${p.price}</span>
          <a href="${waLink}" target="_blank" class="btn-whatsapp">
            <span>📲</span> Order
          </a>
        </div>
      </div>
    </div>`;
}

/* ===== TOAST ===== */
function showToast(msg) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.id = 'globalToast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ===== WHATSAPP ORDER BUILDER ===== */
function openWhatsAppOrder(items, total) {
  const wa = '918638733586';
  let msg = `Hello! I'd like to place a custom bouquet order:\n\n`;
  if (items.flowers && items.flowers.length) {
    msg += `🌸 *Flowers:* ${items.flowers.map(f => f.name).join(', ')}\n`;
  }
  if (items.wrapper) {
    msg += `🎁 *Wrapper:* ${items.wrapper.name}\n`;
  }
  if (items.extras && items.extras.length) {
    msg += `✨ *Extras:* ${items.extras.map(e => e.name).join(', ')}\n`;
  }
  msg += `\n💰 *Total:* ₹${total}\n\nPlease confirm availability and delivery!`;
  window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* ===== ADMIN AUTH ===== */
function isAdminLoggedIn() {
  return sessionStorage.getItem('kbc_admin') === 'true';
}
function adminLogin(pw) {
  if (pw === '234123') {
    sessionStorage.setItem('kbc_admin', 'true');
    return true;
  }
  return false;
}
function adminLogout() {
  sessionStorage.removeItem('kbc_admin');
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  // Ensure default products are seeded
  getProducts();
});
   
