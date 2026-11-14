/* ==========================================================================
   FAIZAL_SCRIPT: GEUGEUT COFFEE
   ========================================================================== */

const faizal_defaultIngredients = [
  { id: 'ING-01', name: 'Biji Kopi Kebun Geugeut', stock: 3500, unit: 'Gram', min: 500 },
  { id: 'ING-02', name: 'Susu UHT Fresh', stock: 6000, unit: 'Ml', min: 1000 },
  { id: 'ING-03', name: 'Indomie Goreng (Pack)', stock: 50, unit: 'Pcs', min: 10 },
  { id: 'ING-04', name: 'Indomie Rendang (Pack)', stock: 30, unit: 'Pcs', min: 10 },
  { id: 'ING-05', name: 'Indomie Soto (Pack)', stock: 30, unit: 'Pcs', min: 10 },
  { id: 'ING-06', name: 'Indomie Ayam Bawang (Pack)', stock: 30, unit: 'Pcs', min: 10 },
  { id: 'ING-07', name: 'Indomie Aceh (Pack)', stock: 30, unit: 'Pcs', min: 10 },
  { id: 'ING-08', name: 'Basreng Mentah', stock: 2000, unit: 'Gram', min: 300 },
  { id: 'ING-09', name: 'Kentang Frozen', stock: 3000, unit: 'Gram', min: 500 },
  { id: 'ING-10', name: 'Sosis Jumbo/Besar', stock: 40, unit: 'Pcs', min: 8 },
  { id: 'ING-11', name: 'Sosis Cocktail/Kecil', stock: 60, unit: 'Pcs', min: 10 },
  { id: 'ING-12', name: 'Pisang Fresh', stock: 50, unit: 'Pcs', min: 10 },
  { id: 'ING-13', name: 'Bakso Sapi', stock: 80, unit: 'Pcs', min: 15 },
  { id: 'ING-14', name: 'Wonton / Pangsit Chili Oil', stock: 60, unit: 'Pcs', min: 10 },
  { id: 'ING-15', name: 'Cireng Original/Balado', stock: 100, unit: 'Pcs', min: 20 },
  { id: 'ING-16', name: 'Beras Nasi Goreng', stock: 4000, unit: 'Gram', min: 500 },
  { id: 'ING-17', name: 'Roti Tawar Slice', stock: 50, unit: 'Pcs', min: 10 },
  { id: 'ING-18', name: 'Telur Ayam Fresh', stock: 60, unit: 'Pcs', min: 12 },
  { id: 'ING-19', name: 'Buah Alpukat', stock: 2500, unit: 'Gram', min: 500 },
  { id: 'ING-20', name: 'Buah Mangga', stock: 2500, unit: 'Gram', min: 500 },
  { id: 'ING-21', name: 'Pop Ice Sachet (Varian)', stock: 100, unit: 'Pcs', min: 20 },
  { id: 'ING-22', name: 'Nutrisari / Jeniper', stock: 60, unit: 'Pcs', min: 10 },
  { id: 'ING-23', name: 'Bubuk Smoothies Matcha/Stroberi', stock: 1500, unit: 'Gram', min: 200 },
  { id: 'ING-24', name: 'Teh Celup', stock: 200, unit: 'Pcs', min: 30 }
];

const faizal_menuItems = [
  { id: 'MKN-01', name: 'Basreng', category: 'Makanan & Camilan', price: 5000, img: 'images/basreng.jpg', recipe: [{ ingId: 'ING-08', qty: 100 }] },
  { id: 'MKN-02', name: 'Kentang Goreng', category: 'Makanan & Camilan', price: 7000, img: 'images/kentang goreng.jpg', recipe: [{ ingId: 'ING-09', qty: 150 }] },
  { id: 'MKN-03', name: 'Sosis Besar', category: 'Makanan & Camilan', price: 5000, img: 'images/sosis.jpg', recipe: [{ ingId: 'ING-10', qty: 1 }] },
  { id: 'MKN-04', name: 'Sosis Kecil', category: 'Makanan & Camilan', price: 2500, img: 'images/sosis kecil.jpg', recipe: [{ ingId: 'ING-11', qty: 1 }] },
  { id: 'MKN-05', name: 'Pisang Nugget', category: 'Makanan & Camilan', price: 7000, img: 'images/pisang nugget.jpg', recipe: [{ ingId: 'ING-12', qty: 2 }] },
  { id: 'MKN-06', name: 'Bakso Bakar', category: 'Makanan & Camilan', price: 2500, img: 'images/bakso bakar.jpg', recipe: [{ ingId: 'ING-13', qty: 3 }] },
  { id: 'MKN-07', name: 'Wonton Chili Oil', category: 'Makanan & Camilan', price: 8000, img: 'images/wonton chili oil.jpg', recipe: [{ ingId: 'ING-14', qty: 5 }] },
  { id: 'MKN-08', name: 'Wonton Chili Oil 1/2 Porsi', category: 'Makanan & Camilan', price: 5000, img: 'images/wonton chili oil setengah porsi.jpg', recipe: [{ ingId: 'ING-14', qty: 3 }] },
  { id: 'MKN-09', name: 'Cireng Original', category: 'Makanan & Camilan', price: 5000, img: 'images/cireng original.jpg', recipe: [{ ingId: 'ING-15', qty: 5 }] },
  { id: 'MKN-10', name: 'Cireng Balado', category: 'Makanan & Camilan', price: 7000, img: 'images/cireng balado.jpg', recipe: [{ ingId: 'ING-15', qty: 5 }] },
  { id: 'MKN-11', name: 'Nasi Goreng', category: 'Makanan & Camilan', price: 12000, img: 'images/nasi goreng.jpg', recipe: [{ ingId: 'ING-16', qty: 150 }, { ingId: 'ING-18', qty: 1 }] },
  { id: 'MKN-12', name: 'Roti Bakar', category: 'Makanan & Camilan', price: 6000, img: 'images/roti bakar.jpg', recipe: [{ ingId: 'ING-17', qty: 2 }] },
  { id: 'MKN-13', name: 'Sandwich', category: 'Makanan & Camilan', price: 8000, img: 'images/sandwich.jpg', recipe: [{ ingId: 'ING-17', qty: 2 }, { ingId: 'ING-10', qty: 1 }] },
  { id: 'IND-01', name: 'Indomie Goreng', category: 'Indomie', price: 6000, img: 'images/indomie goreng.jpg', recipe: [{ ingId: 'ING-03', qty: 1 }] },
  { id: 'IND-02', name: 'Indomie Rendang', category: 'Indomie', price: 6000, img: 'images/indomie rendang.jpg', recipe: [{ ingId: 'ING-04', qty: 1 }] },
  { id: 'IND-03', name: 'Indomie Soto', category: 'Indomie', price: 6000, img: 'images/indomie soto.jpg', recipe: [{ ingId: 'ING-05', qty: 1 }] },
  { id: 'IND-04', name: 'Indomie Ayam Bawang', category: 'Indomie', price: 6000, img: 'images/indomie ayam bawang.jpg', recipe: [{ ingId: 'ING-06', qty: 1 }] },
  { id: 'IND-05', name: 'Indomie Aceh', category: 'Indomie', price: 6000, img: 'images/indomie aceh.jpg', recipe: [{ ingId: 'ING-07', qty: 1 }] },
  { id: 'TOP-01', name: 'Topping Sosis', category: 'Topping', price: 2500, img: 'images/toping sosis.jpg', recipe: [{ ingId: 'ING-11', qty: 1 }] },
  { id: 'TOP-02', name: 'Topping Bakso', category: 'Topping', price: 2000, img: 'images/toping bakso.jpg', recipe: [{ ingId: 'ING-13', qty: 2 }] },
  { id: 'TOP-03', name: 'Topping Telur', category: 'Topping', price: 2500, img: 'images/toping telur.jpg', recipe: [{ ingId: 'ING-18', qty: 1 }] },
  { id: 'KOP-01', name: 'Kopi Latte (Ice/Hot)', category: 'Menu Kopi', price: 15000, img: 'images/kopi latte.jpg', recipe: [{ ingId: 'ING-01', qty: 18 }, { ingId: 'ING-02', qty: 120 }] },
  { id: 'KOP-02', name: 'Kopi Americano (Ice/Hot)', category: 'Menu Kopi', price: 12000, img: 'images/kopi americano.jpg', recipe: [{ ingId: 'ING-01', qty: 18 }] },
  { id: 'KOP-03', name: 'Kopi Tubruk Kebun', category: 'Menu Kopi', price: 5000, img: 'images/kopi tubruk kebun.jpg', recipe: [{ ingId: 'ING-01', qty: 12 }] },
  { id: 'MNM-01', name: 'Jus Alpukat', category: 'Minuman', price: 9000, img: 'images/jus alpukat.jpg', recipe: [{ ingId: 'ING-19', qty: 120 }] },
  { id: 'MNM-02', name: 'Jus Mangga', category: 'Minuman', price: 8000, img: 'images/jus mangga.jpg', recipe: [{ ingId: 'ING-20', qty: 120 }] },
  { id: 'MNM-03', name: 'Pop Ice Stroberi', category: 'Minuman', price: 5000, img: 'images/pop ice stroberi.jpg', recipe: [{ ingId: 'ING-21', qty: 1 }] },
  { id: 'MNM-04', name: 'Pop Ice Mangga', category: 'Minuman', price: 5000, img: 'images/pop ice mangga.jpg', recipe: [{ ingId: 'ING-21', qty: 1 }] },
  { id: 'MNM-05', name: 'Pop Ice Taro', category: 'Minuman', price: 5000, img: 'images/pop ice taro.jpg', recipe: [{ ingId: 'ING-21', qty: 1 }] },
  { id: 'MNM-06', name: 'Pop Ice Coklat', category: 'Minuman', price: 5000, img: 'images/pop ice coklat.jpg', recipe: [{ ingId: 'ING-21', qty: 1 }] },
  { id: 'MNM-07', name: 'Nutrisari Segar', category: 'Minuman', price: 4000, img: 'images/nutrisari.jpg', recipe: [{ ingId: 'ING-22', qty: 1 }] },
  { id: 'MNM-08', name: 'Jeniper (Jeruk Nipis)', category: 'Minuman', price: 7000, img: 'images/jeniper.jpg', recipe: [{ ingId: 'ING-22', qty: 1 }] },
  { id: 'MNM-09', name: 'Es Teh Manis', category: 'Minuman', price: 4000, img: 'images/es teh manis.jpg', recipe: [{ ingId: 'ING-24', qty: 1 }] },
  { id: 'MNM-10', name: 'Smoothies Matcha', category: 'Minuman', price: 9000, img: 'images/smoothies matcha.jpg', recipe: [{ ingId: 'ING-23', qty: 30 }, { ingId: 'ING-02', qty: 100 }] },
  { id: 'MNM-11', name: 'Smoothies Stroberi', category: 'Minuman', price: 9000, img: 'images/smoothies stroberi.jpg', recipe: [{ ingId: 'ING-23', qty: 30 }, { ingId: 'ING-02', qty: 100 }] }
];

let faizal_cartState = [];
let faizal_chartInstance = null;

function faizal_getStock() {
  let data = localStorage.getItem('faizal_gg_stock');
  if (!data) {
    localStorage.setItem('faizal_gg_stock', JSON.stringify(faizal_defaultIngredients));
    return faizal_defaultIngredients;
  }
  return JSON.parse(data);
}

function faizal_saveStock(data) {
  localStorage.setItem('faizal_gg_stock', JSON.stringify(data));
}

function faizal_getTransactions() {
  let data = localStorage.getItem('faizal_gg_trx');
  return data ? JSON.parse(data) : [];
}

function faizal_saveTransaction(trx) {
  let list = faizal_getTransactions();
  list.push(trx);
  localStorage.setItem('faizal_gg_trx', JSON.stringify(list));
}

const faizal_formatRupiah = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

function faizal_calcPortions(item, ingredients) {
  let minP = Infinity;
  item.recipe.forEach(r => {
    let ing = ingredients.find(i => i.id === r.ingId);
    if (ing) {
      let p = Math.floor(ing.stock / r.qty);
      if (p < minP) minP = p;
    }
  });
  return minP === Infinity ? 0 : minP;
}

/* INIT OTOMATIS SESUAI HALAMAN YANG DIBUKA */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('featured-grid')) faizal_renderFeaturedHome();
  if (document.getElementById('products-grid')) {
    faizal_renderMenuGrid('All', '');
    faizal_setupCategoryPills();
  }
  if (document.getElementById('inventoryTableBody')) faizal_renderInventory();
  if (document.getElementById('analyticsChart')) faizal_renderReports();
});

/* 1. HALAMAN UTAMA (INDEX.HTML) */
function faizal_renderFeaturedHome() {
  const grid = document.getElementById('featured-grid');
  const featuredIds = ['KOP-01', 'KOP-03', 'MKN-07', 'MKN-11', 'IND-01', 'MNM-10'];
  faizal_menuItems.filter(m => featuredIds.includes(m.id)).forEach(item => {
    grid.innerHTML += `
      <div class="faizal_prod-card">
        <div class="faizal_prod-img-frame"><img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Geugeut+Coffee';"></div>
        <div class="faizal_prod-info">
          <div class="faizal_prod-title">${item.name}</div>
          <div class="faizal_prod-category-tag">${item.category}</div>
          <div class="faizal_prod-price">${faizal_formatRupiah(item.price)}</div>
          <a href="order.html" class="faizal_btn-add-item" style="text-align:center;text-decoration:none;">Pesan Sekarang</a>
        </div>
      </div>
    `;
  });
}

/* 2. HALAMAN ORDER & KASIR (ORDER.HTML & POS.HTML) */
function faizal_setupCategoryPills() {
  document.querySelectorAll('.faizal_cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.faizal_cat-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const kw = document.getElementById('searchInput') ? document.getElementById('searchInput').value : '';
      faizal_renderMenuGrid(btn.dataset.cat, kw);
    });
  });
}

function faizal_handleSearch() {
  const activeCat = document.querySelector('.faizal_cat-pill.active')?.dataset.cat || 'All';
  const searchEl = document.getElementById('searchInput');
  const kw = searchEl ? searchEl.value : '';
  faizal_renderMenuGrid(activeCat, kw);
}

function faizal_renderMenuGrid(cat, kw) {
  const container = document.getElementById('products-grid');
  container.innerHTML = '';
  const ingredients = faizal_getStock();

  faizal_menuItems.filter(item => {
    const matchCat = cat === 'All' || item.category === cat;
    const matchKw = item.name.toLowerCase().includes(kw.toLowerCase());
    return matchCat && matchKw;
  }).forEach(item => {
    const portions = faizal_calcPortions(item, ingredients);
    const isOut = portions <= 0;
    container.innerHTML += `
      <div class="faizal_prod-card">
        <div class="faizal_prod-img-frame">
          <img src="${item.img}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Geugeut+Coffee';">
          <span class="faizal_badge-portion" style="color:${isOut ? 'var(--status-red)' : 'var(--status-green)'}">${isOut ? 'Habis' : 'Stok: ' + portions}</span>
        </div>
        <div class="faizal_prod-info">
          <div class="faizal_prod-title">${item.name}</div>
          <div class="faizal_prod-category-tag">${item.category}</div>
          <div class="faizal_prod-price">${faizal_formatRupiah(item.price)}</div>
          <button class="faizal_btn-add-item" ${isOut ? 'disabled' : ''} onclick="faizal_addToCart('${item.id}')">+ Tambah</button>
        </div>
      </div>
    `;
  });
}

function faizal_addToCart(id) {
  const item = faizal_menuItems.find(m => m.id === id);
  const limit = faizal_calcPortions(item, faizal_getStock());
  const existing = faizal_cartState.find(c => c.id === id);

  if (existing) {
    if (existing.qty + 1 > limit) return alert('Stok bahan tidak mencukupi!');
    existing.qty++;
  } else {
    if (limit < 1) return alert('Stok bahan habis!');
    faizal_cartState.push({ ...item, qty: 1 });
  }
  faizal_updateCartUI();
}

function faizal_adjustQty(id, delta) {
  const item = faizal_menuItems.find(m => m.id === id);
  const limit = faizal_calcPortions(item, faizal_getStock());
  const existing = faizal_cartState.find(c => c.id === id);
  if (!existing) return;

  if (delta > 0 && existing.qty + delta > limit) return alert('Batas stok maksimal tercapai!');
  existing.qty += delta;
  if (existing.qty <= 0) faizal_cartState = faizal_cartState.filter(c => c.id !== id);
  faizal_updateCartUI();
}

function faizal_resetCart() {
  faizal_cartState = [];
  faizal_updateCartUI();
}

function faizal_updateCartUI() {
  const list = document.getElementById('cart-list');
  if (!list) return;
  list.innerHTML = '';
  let subtotal = 0;

  faizal_cartState.forEach(i => {
    subtotal += i.price * i.qty;
    list.innerHTML += `
      <div class="faizal_cart-row">
        <div>
          <div style="font-weight:600;font-size:0.85rem;">${i.name}</div>
          <div style="font-size:0.75rem;color:var(--accent-cream-muted);">${faizal_formatRupiah(i.price)} x ${i.qty}</div>
        </div>
        <div style="display:flex;align-items:center;gap:0.4rem;">
          <button class="faizal_btn-qty-step" onclick="faizal_adjustQty('${i.id}', -1)">-</button>
          <span>${i.qty}</span>
          <button class="faizal_btn-qty-step" onclick="faizal_adjustQty('${i.id}', 1)">+</button>
        </div>
      </div>
    `;
  });

  const tax = subtotal * 0.1;
  document.getElementById('val-subtotal').innerText = faizal_formatRupiah(subtotal);
  document.getElementById('val-tax').innerText = faizal_formatRupiah(tax);
  document.getElementById('val-total').innerText = faizal_formatRupiah(subtotal + tax);
  const badge = document.getElementById('badge-count');
  if (badge) badge.innerText = `${faizal_cartState.reduce((a, b) => a + b.qty, 0)} item`;
}

function faizal_checkout(source) {
  if (!faizal_cartState.length) return alert('Keranjang masih kosong!');

  const ingredients = faizal_getStock();
  faizal_cartState.forEach(ci => {
    ci.recipe.forEach(r => {
      const ing = ingredients.find(i => i.id === r.ingId);
      if (ing) ing.stock -= r.qty * ci.qty;
    });
  });
  faizal_saveStock(ingredients);

  const subtotal = faizal_cartState.reduce((a, b) => a + b.price * b.qty, 0);
  const total = subtotal * 1.1;
  const methodEl = document.getElementById('posPaymentMethod');
  const method = methodEl ? methodEl.value : 'QRIS (Self-Order)';

  const trx = {
    id: 'GG-' + Math.floor(100000 + Math.random() * 900000),
    time: new Date().toLocaleTimeString('id-ID'),
    items: [...faizal_cartState],
    total: total,
    method: method,
    source: source
  };
  faizal_saveTransaction(trx);

  if (document.getElementById('receiptModal')) {
    document.getElementById('receiptMeta').innerHTML = `<div>No: ${trx.id}</div><div>Waktu: ${trx.time}</div><div>Tipe: ${trx.source}</div>`;
    document.getElementById('receiptItems').innerHTML = trx.items.map(i => `<div style="display:flex;justify-content:space-between;font-size:0.8rem;"><span>${i.name} x${i.qty}</span><span>${faizal_formatRupiah(i.price*i.qty)}</span></div>`).join('');
    document.getElementById('receiptTotalVal').innerText = faizal_formatRupiah(trx.total);
    document.getElementById('receiptMethodVal').innerText = trx.method;
    document.getElementById('receiptModal').classList.add('active');
  } else {
    alert(`Pesanan ${trx.id} berhasil dikirim! Total: ${faizal_formatRupiah(trx.total)}`);
  }

  faizal_cartState = [];
  faizal_updateCartUI();
  faizal_handleSearch();
}

function faizal_closeModal() {
  document.getElementById('receiptModal').classList.remove('active');
}

/* 3. HALAMAN STOK (INVENTORY.HTML) */
function faizal_renderInventory() {
  const tbody = document.getElementById('inventoryTableBody');
  tbody.innerHTML = '';
  faizal_getStock().forEach(ing => {
    const stClass = ing.stock <= 0 ? 'habis' : (ing.stock <= ing.min ? 'menipis' : 'aman');
    const stText = ing.stock <= 0 ? 'Habis' : (ing.stock <= ing.min ? 'Menipis' : 'Aman');
    tbody.innerHTML += `
      <tr>
        <td><code>${ing.id}</code></td>
        <td><strong>${ing.name}</strong></td>
        <td>${ing.stock.toLocaleString('id-ID')}</td>
        <td>${ing.unit}</td>
        <td>${ing.min}</td>
        <td><span class="faizal_pill-status ${stClass}">${stText}</span></td>
        <td style="text-align:center;"><button class="faizal_btn-refill" onclick="faizal_refillStock('${ing.id}')">+ Refill</button></td>
      </tr>
    `;
  });
}

function faizal_refillStock(id) {
  const data = faizal_getStock();
  const ing = data.find(i => i.id === id);
  const add = prompt(`Tambah stok ${ing.name} (${ing.unit}):`, '500');
  if (add && !isNaN(add)) {
    ing.stock += parseInt(add);
    faizal_saveStock(data);
    faizal_renderInventory();
  }
}

/* 4. HALAMAN LAPORAN (REPORTS.HTML) */
function faizal_renderReports() {
  const trxs = faizal_getTransactions();
  const omzet = trxs.reduce((a, b) => a + b.total, 0);
  const map = {};
  trxs.forEach(t => t.items.forEach(i => map[i.name] = (map[i.name] || 0) + i.qty));
  let best = '-'; let max = 0;
  for (let k in map) if (map[k] > max) { max = map[k]; best = `${k} (${max})`; }

  document.getElementById('metricOmzet').innerText = faizal_formatRupiah(omzet);
  document.getElementById('metricTrxCount').innerText = trxs.length;
  document.getElementById('metricBestSeller').innerText = best;

  const ctx = document.getElementById('analyticsChart').getContext('2d');
  faizal_chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: trxs.length ? trxs.map(t => t.id) : ['Belum ada transaksi'],
      datasets: [{
        label: 'Omzet Penjualan (Rp)',
        data: trxs.length ? trxs.map(t => t.total) : [0],
        borderColor: '#c59b27', backgroundColor: 'rgba(197, 155, 39, 0.15)', fill: true, tension: 0.35
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
}

/* 5. HALAMAN KONTAK (CONTACT.HTML) */
function faizal_submitContactForm(e) {
  e.preventDefault();
  const nama = document.getElementById('contactName').value;
  alert(`Terima kasih ${nama}! Pesan Anda telah berhasil terkirim kepada pemilik Geugeut Coffee.`);
  e.target.reset();
}