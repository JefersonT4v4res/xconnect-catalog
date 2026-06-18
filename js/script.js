const WHATSAPP_NUMBER = "5599999999999";
const USD_TO_BRL = 5.22;
const USD_TO_PYG = 6110;
const CARD_FEE = 0.05;

const products = [
  {
    id: 1,
    name: "Celular Huawei Pura 80 Ultra 512GB",
    category: "Celulares",
    brand: "Huawei",
    store: "Shopping China",
    priceUsd: 1300,
    code: "HWP80512",
    spec: ["Memória RAM: 16GB", "Tela: 6.8 polegadas", "Armazenamento: 512GB"],
    description: "Smartphone premium com câmera avançada, acabamento elegante e alto desempenho para uso profissional."
  },
  {
    id: 2,
    name: "Apple MacBook Air 2025",
    category: "Informática",
    brand: "Apple",
    store: "Cellshop",
    priceUsd: 965,
    code: "MBA2025",
    spec: ["RAM: 16GB", "SSD: 256GB", "Tela: 13.6 polegadas"],
    description: "Notebook leve e potente para produtividade, estudos e trabalho remoto."
  },
  {
    id: 3,
    name: "Câmera Digital Nikon Coolpix P950",
    category: "Câmera Digital",
    brand: "Nikon",
    store: "VisãoVip",
    priceUsd: 695,
    code: "NKP950",
    spec: ["16 Megapixels", "Zoom óptico", "Tela: 3.2 polegadas"],
    description: "Câmera digital versátil para fotografia de longa distância, viagens e produção de conteúdo."
  },
  {
    id: 4,
    name: "Carregador Apple USB-C 20W",
    category: "Eletrônicos",
    brand: "Apple",
    store: "Shopping China",
    priceUsd: 26.82,
    code: "195949121296",
    spec: ["Cor: Branco", "Potência: 20W", "Interface: USB-C"],
    description: "Carregador compacto para recarga rápida e segura de iPhones, iPads e acessórios USB-C."
  },
  {
    id: 5,
    name: "Auricular Apple AirPods Pro 3",
    category: "Fones",
    brand: "Apple",
    store: "Mobile Zone",
    priceUsd: 301.15,
    code: "AIRPRO3",
    spec: ["Cancelamento de ruído", "Estojo MagSafe", "Cor: Branco"],
    description: "Fone sem fio premium com cancelamento ativo de ruído e integração com dispositivos Apple."
  },
  {
    id: 6,
    name: "PlayStation 5 Slim",
    category: "Games",
    brand: "Sony",
    store: "Atacado Connect",
    priceUsd: 520,
    code: "PS5SLIM",
    spec: ["SSD 1TB", "Controle DualSense", "Mídia física"],
    description: "Console PlayStation 5 Slim com alto desempenho para jogos da nova geração."
  },
  {
    id: 7,
    name: "Apple Watch Series 9 GPS",
    category: "Relógios",
    brand: "Apple",
    store: "Shopping China",
    priceUsd: 449,
    code: "AWS9GPS",
    spec: ["GPS", "Monitor cardíaco", "Resistente à água"],
    description: "Relógio inteligente com recursos de saúde, notificações e integração com iPhone."
  },
  {
    id: 8,
    name: "Samsung Galaxy A55 256GB",
    category: "Celulares",
    brand: "Samsung",
    store: "Cellshop",
    priceUsd: 489,
    code: "A55256",
    spec: ["256GB", "5G", "Tela AMOLED"],
    description: "Smartphone intermediário com excelente tela, bateria de longa duração e armazenamento amplo."
  },
  {
    id: 9,
    name: "Controle DualSense PS5",
    category: "Games",
    brand: "Sony",
    store: "VisãoVip",
    priceUsd: 99,
    code: "DSPS5",
    spec: ["Bluetooth", "Resposta tátil", "USB-C"],
    description: "Controle sem fio para PlayStation 5 com gatilhos adaptáveis e design ergonômico."
  },
  {
    id: 10,
    name: "Cabo USB-C 100W",
    category: "Eletrônicos",
    brand: "Baseus",
    store: "Mobile Zone",
    priceUsd: 8,
    code: "USB100W",
    spec: ["100W", "USB-C para USB-C", "Cor: Preto"],
    description: "Cabo de alta potência para notebooks, tablets, celulares e carregadores compatíveis."
  },
  {
    id: 11,
    name: "Echo Dot 5ª Geração",
    category: "Casa Inteligente",
    brand: "Amazon",
    store: "Shopping China",
    priceUsd: 70,
    code: "ECHODOT5",
    spec: ["Alexa", "Wi-Fi", "Som aprimorado"],
    description: "Caixa inteligente compacta para controlar dispositivos, ouvir música e usar assistente de voz."
  },
  {
    id: 12,
    name: "Notebook Lenovo IdeaPad i5",
    category: "Notebook",
    brand: "Lenovo",
    store: "Atacado Connect",
    priceUsd: 815,
    code: "LENI5",
    spec: ["Intel i5", "SSD 512GB", "8GB RAM"],
    description: "Notebook para estudo, trabalho e produtividade com SSD rápido e design moderno."
  }
];

const megaMenu = {
  "Eletrônicos": {
    sidebar: [
      ["📱", "Celulares"],
      ["🔌", "Eletrônicos & Eletrodomésticos"],
      ["🖥", "Informática"],
      ["💻", "Notebook"],
      ["🎮", "Games"],
      ["⌚", "Relógios"],
      ["🎧", "Fones"],
      ["🏷", "Ofertas & Descontos"]
    ],
    title: "Eletrônicos & Eletrodomésticos",
    items: [
      "Apple Watch",
      "Amazon Echo",
      "Robô de Limpeza",
      "Câmera Digital",
      "Câmera de Vigilância",
      "Caixa de Som",
      "Óculos VR",
      "GoPro",
      "Videogame",
      "Playstation 5",
      "Playstation 4",
      "Nintendo Switch",
      "Xbox One",
      "Xbox Series S",
      "Xbox Series X",
      "Controle para PS5",
      "Amazon Fire TV Stick",
      "Apple TV",
      "Chromecast",
      "Carregador Portátil",
      "TV",
      "TV Smart",
      "Drone",
      "GPS"
    ]
  },
  "Lojas": {
    sidebar: [["🏬", "Shopping China"], ["🏬", "Cellshop"], ["🏬", "VisãoVip"], ["🏬", "Mobile Zone"], ["🏬", "Atacado Connect"]],
    title: "Lojas parceiras",
    items: ["Shopping China", "Cellshop", "VisãoVip", "Mobile Zone", "Atacado Connect"]
  },
  "Marcas": {
    sidebar: [["🏷", "Apple"], ["🏷", "Samsung"], ["🏷", "Xiaomi"], ["🏷", "Sony"], ["🏷", "Huawei"], ["🏷", "Nikon"]],
    title: "Marcas em destaque",
    items: ["Apple", "Samsung", "Xiaomi", "Sony", "Huawei", "Nikon", "JBL", "Baseus", "Lenovo", "Amazon"]
  },
  "Descontos": {
    sidebar: [["%", "Ofertas"], ["🔥", "Mais procurados"], ["⭐", "Destaques"]],
    title: "Ofertas e descontos",
    items: ["Destaques da semana", "Mais procurados", "Menor preço", "Produtos Apple", "Games", "Acessórios"]
  }
};

const state = {
  search: "",
  stores: new Set(),
  brands: new Set(),
  priceRange: null,
  minPrice: null,
  maxPrice: null,
  sort: "relevance",
  selectedProduct: null,
  quantity: 1,
  bag: []
};

const priceRanges = [
  { label: "Até $79", min: 0, max: 79 },
  { label: "De $80 a $119", min: 80, max: 119 },
  { label: "De $120 a $179", min: 120, max: 179 },
  { label: "De $180 a $269", min: 180, max: 269 },
  { label: "De $270 a $449", min: 270, max: 449 },
  { label: "$450 ou mais", min: 450, max: Infinity }
];

const productGrid = document.querySelector("#productGrid");
const productCount = document.querySelector("#productCount");
const storeFilters = document.querySelector("#storeFilters");
const brandFilters = document.querySelector("#brandFilters");
const priceRangesEl = document.querySelector("#priceRanges");
const activeFilters = document.querySelector("#activeFilters");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const catalogShell = document.querySelector("#catalogo");
const productModal = document.querySelector("#produto");
const navbarToggle = document.querySelector(".navbar__toggle");
const navbarMenu = document.querySelector("#navbarMenu");
const bagDrawer = document.querySelector("#bagDrawer");

function formatUsd(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "USD" }).replace("US$", "US$ ");
}

function formatBrl(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatGs(value) {
  return `Gs. ${Math.round(value).toLocaleString("pt-BR")}`;
}

function productBrl(product) {
  return product.priceUsd * USD_TO_BRL;
}

function makeSvgProduct(product) {
  const typeMap = {
    Celulares: "phone",
    Informática: "laptop",
    Notebook: "laptop",
    "Câmera Digital": "camera",
    Eletrônicos: "charger",
    Fones: "earbuds",
    Games: "gamepad",
    Relógios: "watch",
    "Casa Inteligente": "smart"
  };

  const type = typeMap[product.category] || "box";
  const label = product.brand;

  const icons = {
    phone: `<rect x="116" y="36" width="132" height="252" rx="24" fill="#111827"/><rect x="128" y="58" width="108" height="196" rx="10" fill="#f4d58d"/><circle cx="182" cy="270" r="8" fill="#e2e8f0"/><circle cx="154" cy="92" r="15" fill="#0f172a"/><circle cx="198" cy="92" r="15" fill="#0f172a"/>`,
    laptop: `<rect x="74" y="62" width="236" height="150" rx="12" fill="#111827"/><rect x="92" y="82" width="200" height="110" rx="6" fill="#0f7bff"/><path d="M45 232h295l-28 38H73z" fill="#cbd5e1" stroke="#64748b" stroke-width="4"/>`,
    camera: `<rect x="70" y="88" width="240" height="150" rx="22" fill="#111827"/><circle cx="190" cy="164" r="58" fill="#0f172a" stroke="#64748b" stroke-width="10"/><circle cx="190" cy="164" r="30" fill="#0f7bff"/><rect x="104" y="62" width="80" height="42" rx="12" fill="#1f2937"/>`,
    charger: `<rect x="92" y="92" width="92" height="116" rx="14" fill="#ffffff" stroke="#d7dee8" stroke-width="4"/><rect x="113" y="44" width="16" height="58" rx="8" fill="#f7fafc" stroke="#0f172a" stroke-width="4"/><rect x="151" y="44" width="16" height="58" rx="8" fill="#f7fafc" stroke="#0f172a" stroke-width="4"/><rect x="205" y="132" width="118" height="74" rx="37" fill="#f8fafc" stroke="#d7dee8" stroke-width="4"/><rect x="249" y="162" width="33" height="10" rx="5" fill="#0f172a"/>`,
    earbuds: `<rect x="86" y="156" width="204" height="100" rx="34" fill="#111827"/><ellipse cx="142" cy="106" rx="35" ry="48" fill="#111827"/><ellipse cx="232" cy="106" rx="35" ry="48" fill="#111827"/><rect x="126" y="115" width="34" height="74" rx="16" fill="#1f2937"/><rect x="216" y="115" width="34" height="74" rx="16" fill="#1f2937"/>`,
    gamepad: `<rect x="76" y="112" width="236" height="122" rx="58" fill="#f8fafc" stroke="#0f172a" stroke-width="8"/><path d="M132 158h50M157 133v50" stroke="#0f172a" stroke-width="10" stroke-linecap="round"/><circle cx="238" cy="154" r="12" fill="#0f7bff"/><circle cx="270" cy="176" r="12" fill="#00d05a"/>`,
    watch: `<rect x="146" y="22" width="80" height="322" rx="34" fill="#111827"/><rect x="116" y="96" width="140" height="172" rx="36" fill="#f8fafc" stroke="#111827" stroke-width="8"/><circle cx="186" cy="182" r="42" fill="#0f7bff"/>`,
    smart: `<circle cx="184" cy="170" r="104" fill="#f8fafc" stroke="#cbd5e1" stroke-width="6"/><circle cx="184" cy="170" r="50" fill="#0f7bff"/><path d="M154 170h60" stroke="#ffffff" stroke-width="10" stroke-linecap="round"/>`
  };

  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="380" height="320" viewBox="0 0 380 320">
      <defs><linearGradient id="bg" x1="0" x2="1"><stop stop-color="#ffffff"/><stop offset="1" stop-color="#eef5ff"/></linearGradient></defs>
      <rect width="380" height="320" rx="28" fill="url(#bg)"/>
      ${icons[type]}
      <text x="190" y="304" text-anchor="middle" font-family="Arial" font-weight="800" font-size="18" fill="#64748b">${label}</text>
    </svg>
  `)}`;
}

function unique(key) {
  return [...new Set(products.map(product => product[key]))].sort();
}

function renderCheckboxes() {
  storeFilters.innerHTML = unique("store").map(store => `
    <label class="check">
      <input type="checkbox" data-filter-store="${store}">
      <span></span>${store}
    </label>
  `).join("");

  brandFilters.innerHTML = unique("brand").map(brand => `
    <label class="check">
      <input type="checkbox" data-filter-brand="${brand}">
      <span></span>${brand}
    </label>
  `).join("");

  priceRangesEl.innerHTML = priceRanges.map((range, index) => `
    <button type="button" data-price-range="${index}">
      ${range.label} (${products.filter(product => product.priceUsd >= range.min && product.priceUsd <= range.max).length})
    </button>
  `).join("");
}

function filterProducts() {
  const search = state.search.toLowerCase().trim();

  let result = products.filter(product => {
    const matchesSearch = !search || [product.name, product.brand, product.store, product.category, product.code].join(" ").toLowerCase().includes(search);
    const matchesStore = !state.stores.size || state.stores.has(product.store);
    const matchesBrand = !state.brands.size || state.brands.has(product.brand);
    const matchesPriceRange = !state.priceRange || (product.priceUsd >= state.priceRange.min && product.priceUsd <= state.priceRange.max);
    const matchesMin = state.minPrice === null || product.priceUsd >= state.minPrice;
    const matchesMax = state.maxPrice === null || product.priceUsd <= state.maxPrice;

    return matchesSearch && matchesStore && matchesBrand && matchesPriceRange && matchesMin && matchesMax;
  });

  if (state.sort === "priceAsc") result.sort((a, b) => a.priceUsd - b.priceUsd);
  if (state.sort === "priceDesc") result.sort((a, b) => b.priceUsd - a.priceUsd);
  if (state.sort === "nameAsc") result.sort((a, b) => a.name.localeCompare(b.name));

  return result;
}

function renderActiveFilters() {
  const pills = [];
  state.stores.forEach(store => pills.push(`Loja: ${store}`));
  state.brands.forEach(brand => pills.push(`Marca: ${brand}`));

  if (state.priceRange) pills.push(`Preço: ${state.priceRange.label}`);
  if (state.minPrice !== null) pills.push(`Min: US$ ${state.minPrice}`);
  if (state.maxPrice !== null) pills.push(`Max: US$ ${state.maxPrice}`);
  if (state.search) pills.push(`Busca: ${state.search}`);

  activeFilters.innerHTML = pills.map(pill => `<span class="active-filters__pill">${pill}</span>`).join("");
}

function renderProducts() {
  const filtered = filterProducts();
  productCount.textContent = `Mostrando ${filtered.length} de ${products.length} produtos curados`;

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-card__image-wrap">
        <img class="product-card__image" src="${makeSvgProduct(product)}" alt="${product.name}" />
      </div>

      <span class="product-card__store">${product.store}</span>
      <p class="product-card__category">${product.category}</p>
      <h3 class="product-card__title">${product.name}</h3>
      <p class="product-card__brand">${product.brand}</p>

      <div class="product-card__prices">
        <p class="product-card__price-usd">${formatUsd(product.priceUsd)}</p>
        <p class="product-card__price-brl">${formatBrl(productBrl(product))}</p>
      </div>

      <div class="product-card__actions">
        <button class="product-card__button" type="button" data-detail="${product.id}">Detalhes</button>
        <button class="product-card__button product-card__button--outline" type="button" data-add-bag="${product.id}">Sacolinha</button>
      </div>
    </article>
  `).join("");

  if (!filtered.length) {
    productGrid.innerHTML = `<p>Nenhum produto encontrado com os filtros selecionados.</p>`;
  }

  renderActiveFilters();
}

function makeWhatsappUrl(product, quantity = 1) {
  const message = `Olá! Tenho interesse no produto: ${product.name} (${product.code}). Loja: ${product.store}. Quantidade: ${quantity}. Valor: ${formatUsd(product.priceUsd)} / ${formatBrl(productBrl(product))}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function makeBagWhatsappUrl() {
  if (!state.bag.length) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de tirar uma dúvida sobre os produtos da X Connect.")}`;
  }

  const lines = state.bag.map((item, index) => {
    const product = products.find(product => product.id === item.id);
    return `${index + 1}. ${product.name} | Loja: ${product.store} | Qtd: ${item.qty} | ${formatUsd(product.priceUsd)} / ${formatBrl(productBrl(product))}`;
  });

  const totalUsd = state.bag.reduce((sum, item) => {
    const product = products.find(product => product.id === item.id);
    return sum + product.priceUsd * item.qty;
  }, 0);

  const message = `Olá! Tenho interesse nos seguintes produtos:\n\n${lines.join("\n")}\n\nTotal estimado: ${formatUsd(totalUsd)} / ${formatBrl(totalUsd * USD_TO_BRL)}\n\nPodem verificar disponibilidade e condições?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function setStoreWhatsappLinks() {
  const url = makeBagWhatsappUrl();
  document.querySelector("#navWhatsapp").href = url;
  document.querySelector("#floatingWhatsapp").href = url;
}

function addToBag(productId, qty = 1) {
  const id = Number(productId);
  const existing = state.bag.find(item => item.id === id);

  if (existing) {
    existing.qty += qty;
  } else {
    state.bag.push({ id, qty });
  }

  renderBag();
}

function removeFromBag(productId) {
  state.bag = state.bag.filter(item => item.id !== Number(productId));
  renderBag();
}

function renderBag() {
  const totalQty = state.bag.reduce((sum, item) => sum + item.qty, 0);
  document.querySelector("#bagCount").textContent = totalQty;

  if (!state.bag.length) {
    document.querySelector("#bagList").innerHTML = `<p class="bag-empty">Sua sacolinha está vazia. Adicione produtos do catálogo para enviar tudo pelo WhatsApp.</p>`;
    document.querySelector("#bagTotal").textContent = formatUsd(0);
    document.querySelector("#bagTotalBrl").textContent = formatBrl(0);
    document.querySelector("#sendBagWhatsapp").href = makeBagWhatsappUrl();
    setStoreWhatsappLinks();
    return;
  }

  let totalUsd = 0;

  document.querySelector("#bagList").innerHTML = state.bag.map(item => {
    const product = products.find(product => product.id === item.id);
    const subtotal = product.priceUsd * item.qty;
    totalUsd += subtotal;

    return `
      <article class="bag-item">
        <img src="${makeSvgProduct(product)}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <small>${product.store} • Qtd: ${item.qty}</small>
          <p>${formatUsd(subtotal)}</p>
        </div>
        <button type="button" data-remove-bag="${product.id}" aria-label="Remover ${product.name}">×</button>
      </article>
    `;
  }).join("");

  document.querySelector("#bagTotal").textContent = formatUsd(totalUsd);
  document.querySelector("#bagTotalBrl").textContent = formatBrl(totalUsd * USD_TO_BRL);
  document.querySelector("#sendBagWhatsapp").href = makeBagWhatsappUrl();
  setStoreWhatsappLinks();
}

function openBag() {
  bagDrawer.classList.add("is-open");
  bagDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-bag-open");
}

function closeBag() {
  bagDrawer.classList.remove("is-open");
  bagDrawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-bag-open");
}

function openProduct(productId) {
  const product = products.find(item => item.id === Number(productId));
  if (!product) return;

  state.selectedProduct = product;
  state.quantity = 1;

  const image = makeSvgProduct(product);

  document.querySelector("#detailImage").src = image;
  document.querySelector("#detailImage").alt = product.name;
  document.querySelector("#detailThumb").src = image;
  document.querySelector("#detailThumb").alt = `Miniatura de ${product.name}`;
  document.querySelector("#detailCategory").textContent = product.category;
  document.querySelector("#detailTitle").textContent = product.name;
  document.querySelector("#detailPrice").textContent = formatUsd(product.priceUsd);
  document.querySelector("#detailPriceBrl").textContent = formatBrl(productBrl(product));
  document.querySelector("#detailStore").textContent = product.store;
  document.querySelector("#detailBrand").textContent = product.brand;
  document.querySelector("#detailCode").textContent = product.code;
  document.querySelector("#detailDescription").textContent = product.description;
  document.querySelector("#detailSpecs").innerHTML = product.spec.map(item => `<li>${item}</li>`).join("");
  document.querySelector("#qtyValue").textContent = state.quantity;
  document.querySelector("#detailWhatsapp").href = makeWhatsappUrl(product, state.quantity);

  productModal.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-product-open");
}

function closeProduct() {
  productModal.classList.remove("is-open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-product-open");
}

function updateQuantity(delta) {
  if (!state.selectedProduct) return;
  state.quantity = Math.max(1, state.quantity + delta);
  document.querySelector("#qtyValue").textContent = state.quantity;
  document.querySelector("#detailWhatsapp").href = makeWhatsappUrl(state.selectedProduct, state.quantity);
}

function updateConversion() {
  const usd = Number(document.querySelector("#usdValue").value || 0);
  const currency = document.querySelector("#currencySelect").value;
  const rate = currency === "PYG" ? USD_TO_PYG : USD_TO_BRL;
  const converted = usd * rate;

  document.querySelector("#conversionLabel").textContent = currency === "PYG" ? "Total em Guarani" : "Total em Real";
  document.querySelector("#conversionResult").textContent = currency === "PYG" ? formatGs(converted) : formatBrl(converted);
}

function updateTax() {
  const value = Number(document.querySelector("#taxValue").value || 0);
  const taxBase = Math.max(0, value - 500);
  document.querySelector("#taxResult").textContent = formatUsd(taxBase * 0.5);
}

function updateCard() {
  const value = Number(document.querySelector("#cardValue").value || 0);
  document.querySelector("#cardResult").textContent = formatBrl(value * USD_TO_BRL * (1 + CARD_FEE));
}

function renderMegaMenu(group = "Eletrônicos") {
  const data = megaMenu[group];

  document.querySelector("#megaTitle").textContent = data.title;
  document.querySelector("#megaSidebar").innerHTML = data.sidebar.map((item, index) => `
    <button class="mega-menu__side-button ${index === 1 || index === 0 ? "is-active" : ""}" type="button" data-quick-filter="${item[1]}">
      <span>${item[0]}</span>${item[1]}
    </button>
  `).join("");

  document.querySelector("#megaGrid").innerHTML = data.items.map(item => `
    <button type="button" data-quick-filter="${item}">${item}</button>
  `).join("");
}

document.addEventListener("click", event => {
  const detailButton = event.target.closest("[data-detail]");
  if (detailButton) openProduct(detailButton.dataset.detail);

  const addBagButton = event.target.closest("[data-add-bag]");
  if (addBagButton) addToBag(addBagButton.dataset.addBag);

  const removeBagButton = event.target.closest("[data-remove-bag]");
  if (removeBagButton) removeFromBag(removeBagButton.dataset.removeBag);

  const priceButton = event.target.closest("[data-price-range]");
  if (priceButton) {
    const index = Number(priceButton.dataset.priceRange);
    state.priceRange = state.priceRange === priceRanges[index] ? null : priceRanges[index];
    document.querySelectorAll("[data-price-range]").forEach(button => button.classList.remove("is-active"));
    if (state.priceRange) priceButton.classList.add("is-active");
    renderProducts();
  }

  const quickFilter = event.target.closest("[data-quick-filter]");
  if (quickFilter) {
    state.search = quickFilter.dataset.quickFilter;
    searchInput.value = state.search;
    renderProducts();
    document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth" });
  }

  const menuTab = event.target.closest("[data-menu-category]");
  if (menuTab) {
    document.querySelectorAll("[data-menu-category]").forEach(tab => tab.classList.remove("is-active"));
    menuTab.classList.add("is-active");
    renderMegaMenu(menuTab.dataset.menuCategory);
  }
});

document.addEventListener("change", event => {
  const storeInput = event.target.closest("[data-filter-store]");
  if (storeInput) {
    storeInput.checked ? state.stores.add(storeInput.dataset.filterStore) : state.stores.delete(storeInput.dataset.filterStore);
    renderProducts();
  }

  const brandInput = event.target.closest("[data-filter-brand]");
  if (brandInput) {
    brandInput.checked ? state.brands.add(brandInput.dataset.filterBrand) : state.brands.delete(brandInput.dataset.filterBrand);
    renderProducts();
  }
});

document.querySelector("#clearFilters").addEventListener("click", () => {
  state.search = "";
  state.stores.clear();
  state.brands.clear();
  state.priceRange = null;
  state.minPrice = null;
  state.maxPrice = null;
  searchInput.value = "";
  document.querySelector("#minPrice").value = "";
  document.querySelector("#maxPrice").value = "";
  document.querySelectorAll(".check input").forEach(input => input.checked = false);
  document.querySelectorAll("[data-price-range]").forEach(button => button.classList.remove("is-active"));
  renderProducts();
});

document.querySelector("#applyPrice").addEventListener("click", () => {
  const min = document.querySelector("#minPrice").value;
  const max = document.querySelector("#maxPrice").value;
  state.minPrice = min === "" ? null : Number(min);
  state.maxPrice = max === "" ? null : Number(max);
  state.priceRange = null;
  document.querySelectorAll("[data-price-range]").forEach(button => button.classList.remove("is-active"));
  renderProducts();
});

searchInput.addEventListener("input", event => {
  state.search = event.target.value;
  renderProducts();
});

document.querySelector(".navbar__search").addEventListener("submit", event => {
  event.preventDefault();
  document.querySelector("#catalogo").scrollIntoView({ behavior: "smooth" });
});

sortSelect.addEventListener("change", event => {
  state.sort = event.target.value;
  renderProducts();
});

document.querySelectorAll("[data-tab]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-tab]").forEach(tab => tab.classList.remove("is-active"));
    document.querySelectorAll(".quote-panel").forEach(panel => panel.classList.remove("is-active"));

    button.classList.add("is-active");
    document.querySelector(`#${button.dataset.tab}Panel`).classList.add("is-active");
  });
});

document.querySelector("#usdValue").addEventListener("input", updateConversion);
document.querySelector("#currencySelect").addEventListener("change", updateConversion);
document.querySelector("#taxValue").addEventListener("input", updateTax);
document.querySelector("#cardValue").addEventListener("input", updateCard);

document.querySelector("#closeProductModal").addEventListener("click", closeProduct);
document.querySelector("#closeProductOverlay").addEventListener("click", closeProduct);
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeProduct();
    closeBag();
  }
});
document.querySelector("#qtyMinus").addEventListener("click", () => updateQuantity(-1));
document.querySelector("#qtyPlus").addEventListener("click", () => updateQuantity(1));
document.querySelector("#detailAddBag").addEventListener("click", () => {
  if (state.selectedProduct) {
    addToBag(state.selectedProduct.id, state.quantity);
    openBag();
  }
});

document.querySelector("#openBag").addEventListener("click", openBag);
document.querySelector("#heroOpenBag").addEventListener("click", openBag);
document.querySelector("#closeBag").addEventListener("click", closeBag);
document.querySelector("#closeBagOverlay").addEventListener("click", closeBag);

navbarToggle.addEventListener("click", () => {
  const expanded = navbarToggle.getAttribute("aria-expanded") === "true";
  navbarToggle.setAttribute("aria-expanded", String(!expanded));
  navbarMenu.classList.toggle("is-open");
  document.body.classList.toggle("is-menu-open");
});

navbarMenu.addEventListener("click", event => {
  if (event.target.closest("a")) {
    navbarToggle.setAttribute("aria-expanded", "false");
    navbarMenu.classList.remove("is-open");
    document.body.classList.remove("is-menu-open");
  }
});

renderCheckboxes();
renderMegaMenu();
renderProducts();
renderBag();
updateConversion();
updateTax();
updateCard();
setStoreWhatsappLinks();
