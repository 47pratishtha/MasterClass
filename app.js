const WHATSAPP_NUMBER = "919999999999";
const FREE_DELIVERY_AT = 250;
const DELIVERY_FEE = 30;
const CART_KEY = "cocoacubs_cart_v3";

const PRODUCTS = [
  {
    id: "milk-date-bar",
    name: "Classic Milk Date Bar",
    desc: "Creamy 34% single-origin cocoa milk chocolate sweetened purely with Arabian Medjool dates.",
    price: 79,
    mrp: 99,
    tag: "Bestseller",
    tagClass: "tag-gold",
    weight: "40 g",
    bg: "#FBEAD0",
    wrap: "#8A5A33"
  },
  {
    id: "hazelnut-crunch",
    name: "Hazelnut Crunch Bites",
    desc: "Slow-roasted hazelnut chunks folded into velvety date-sweetened milk chocolate.",
    price: 99,
    mrp: 129,
    tag: "New Crunch",
    tagClass: "tag-green",
    weight: "45 g",
    bg: "#F6E7CF",
    wrap: "#6B4423"
  },
  {
    id: "dark-date-bar",
    name: "70% Dark Date Bar",
    desc: "Silky 70% dark chocolate with notes of natural caramel and date fiber. Zero bitter bite.",
    price: 89,
    mrp: 109,
    tag: "Rich Cocoa",
    tagClass: "tag-gold",
    weight: "40 g",
    bg: "#EFE0D0",
    wrap: "#3B2314"
  },
  {
    id: "party-box",
    name: "Cubs Party Box (12 Minis)",
    desc: "12 individually wrapped mini bars — perfect for lunchbox surprises, school playdates & gifting.",
    price: 299,
    mrp: 375,
    tag: "12 Pack",
    tagClass: "tag-red",
    weight: "240 g",
    bg: "#FFE4D6",
    wrap: "#C2452A"
  }
];

const SUBSCRIPTION_ITEM = {
  id: "monthly-cub-box",
  name: "Monthly Cub Box (15 Bars + Activity Stickers)",
  desc: "Monthly recurring box with 15 assorted chocolates + collectible sticker activity sheet.",
  price: 449,
  mrp: 599,
  tag: "Save 20%",
  tagClass: "tag-red",
  weight: "360 g",
  bg: "#FFE8D6",
  wrap: "#5C3A21"
};

const BOX_FLAVORS = [
  {
    id: "fl-milk",
    name: "Classic Milk Date",
    desc: "34% Cocoa & Arabian Medjool Dates",
    color: "#C67D45",
    wrap: "#8A5A33"
  },
  {
    id: "fl-hazelnut",
    name: "Crunchy Hazelnut",
    desc: "Slow-roasted hazelnuts in milk chocolate",
    color: "#E5A100",
    wrap: "#6B4423"
  },
  {
    id: "fl-dark",
    name: "70% Dark Date",
    desc: "Antioxidant-rich dark chocolate & caramel notes",
    color: "#5C3A21",
    wrap: "#3B2314"
  },
  {
    id: "fl-almond",
    name: "Almond Butter Crisp",
    desc: "Roasted California almond butter & cocoa",
    color: "#E27B38",
    wrap: "#9B6236"
  },
  {
    id: "fl-berry",
    name: "Wild Berry & Date",
    desc: "Real raspberry & cranberry date fusion",
    color: "#C2452A",
    wrap: "#A82645"
  }
];

const BOX_CONFIGS = {
  6: {
    name: "Custom 6-Bar Stash",
    size: 6,
    price: 199,
    mrp: 249,
    savings: "Save 20%"
  },
  12: {
    name: "Custom 12-Bar Stash",
    size: 12,
    price: 349,
    mrp: 499,
    savings: "Save 30% · Free Delivery"
  }
};

const WHY_ITEMS = [
  {
    icon: "leaf",
    color: "green",
    title: "100% Date-Sweetened",
    text: "Arabian Medjool dates bring rich caramel flavor and natural dietary fiber that prevents sugar spikes in children."
  },
  {
    icon: "heart",
    color: "orange",
    title: "Tooth & Cavity Safe",
    text: "Zero refined sucrose means harmful oral bacteria cannot ferment to erode delicate enamel. Kid-dentist approved."
  },
  {
    icon: "shield",
    color: "green",
    title: "Zero Junk & No Palm Oil",
    text: "No chemical artificial sweeteners (like aspartame/sucralose), no preservatives, no hydrogenated fats, and no added colors."
  },
  {
    icon: "star",
    color: "gold",
    title: "Kid-Tested & Loved",
    text: "Blind-tasted with over 200+ fussy children. It has the melt-in-mouth creaminess of conventional chocolate."
  }
];

const COMPARE_ROWS = [
  ["Sweetener Source", "Refined White Sugar / High Fructose Corn Syrup", "Pure Medjool Dates + Touch of Stevia"],
  ["Added Refined Sugar", "~22g to 26g per standard bar", "0g Added Sugar"],
  ["Dietary Fiber", "< 0.5g (almost zero)", "4.2g (Slow sustained digestion)"],
  ["Palm Oil / Vegetable Fats", "Very commonly used as cheap filler", "Never (Only Pure Cocoa Butter & Milk)"],
  ["Chemical Preservatives", "Artificial emulsifiers & preservatives", "None (100% Clean Label)"],
  ["Price per healthy bar", "₹130 - ₹180 in organic stores", "Affordable from ₹79"]
];

const FAQ_ITEMS = [
  {
    q: "How does the Build-Your-Own Box work?",
    a: "You pick your desired box size (6 or 12 bars) and select any mix of your child's favorite flavors. Once all slots are filled, you can add your custom assortment to the cart with one click!"
  },
  {
    q: "How is it sweet if you don't use sugar?",
    a: "We grind whole premium Medjool dates into a micro-fine paste, which blends seamlessly into our pure cocoa liquor. Dates provide rich caramel sweetness along with vitamins, potassium, and fiber."
  },
  {
    q: "Why is this better for my child's teeth than regular chocolate?",
    a: "Cavity-causing bacteria (Streptococcus mutans) thrive on refined sucrose to produce enamel-eating acid. Because Cocoa Cubs contains no refined sugar, it is vastly safer for tooth enamel."
  },
  {
    q: "Do you use chemical sweeteners like Aspartame or Maltitol?",
    a: "No! Many 'diet' chocolates use artificial sweeteners like aspartame or laxative sugar alcohols like maltitol which upset children's stomachs. Cocoa Cubs uses only real dates and a gentle touch of plant-derived stevia."
  },
  {
    q: "What are the shipping charges and delivery time?",
    a: "We ship orders across India within 3–5 business days in heat-insulated packaging so chocolates never melt. Delivery is ₹30, and completely FREE on orders of ₹250 or more (including all 12-bar boxes!)."
  }
];

const ICONS = {
  leaf: '<path d="M12 2C7 7 4 12 4 16a8 8 0 0 0 16 0c0-4-3-9-8-14z"/><line x1="12" y1="22" x2="12" y2="10"/>',
  heart: '<path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.4-9.5 9-9.5 9z"/>',
  shield: '<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><polyline points="9 12 11 14 15 10"/>',
  star: '<polygon points="12 2 15 9 22 9.3 16.5 13.8 18.5 21 12 16.8 5.5 21 7.5 13.8 2 9.3 9 9"/>'
};

/* --- Global State --- */
let cart = loadCart(); // Array of { id, type: 'standard' | 'custom', name, price, weight, qty, breakdown?: [] }
let customBoxSize = 6;
let customBoxFlavors = {}; // { 'fl-milk': 2, ... }

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {}
}

function formatINR(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function getSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function barArt(p, thumb = false) {
  const label = thumb ? "" : `<text x="111" y="132" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-size="11" font-weight="800" fill="#FFF3E8">Cocoa Cubs</text>`;
  return `<svg viewBox="0 0 222 160" role="img" aria-label="${p.name}">
    <rect width="222" height="160" rx="14" fill="${p.bg || '#FBEAD0'}"/>
    <g transform="rotate(-8 111 80)">
      <rect x="55" y="16" width="112" height="130" rx="12" fill="${p.wrap || '#8A5A33'}"/>
      <rect x="63" y="24" width="96" height="78" rx="8" fill="#3B2314"/>
      <path d="M95 28 V98 M131 28 V98 M67 52 H155 M67 76 H155" stroke="${p.wrap || '#8A5A33'}" stroke-width="3"/>
      <rect x="55" y="106" width="112" height="36" rx="10" fill="${p.wrap || '#8A5A33'}"/>
      ${label}
    </g>
  </svg>`;
}

/* --- Render Catalog --- */
function renderProducts() {
  const grid = $("#productGrid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map((p) => `
    <article class="product-card">
      ${p.tag ? `<span class="tag ${p.tagClass}">${p.tag}</span>` : ""}
      <div class="product-art">${barArt(p)}</div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-meta-row">
          <span>Net Wt: ${p.weight}</span>
          <span>100% Natural</span>
        </div>
        <div class="product-foot">
          <div class="price-group">
            <span class="price">${formatINR(p.price)}</span>
            <span class="mrp">${formatINR(p.mrp)}</span>
          </div>
          <button class="add-btn" data-standard-id="${p.id}">Add to Cart</button>
        </div>
      </div>
    </article>`).join("");
}

/* --- Build Your Own Box Logic --- */
function getCustomBoxFilledCount() {
  return Object.values(customBoxFlavors).reduce((a, b) => a + b, 0);
}

function renderFlavorPickers() {
  const list = $("#flavorPickersList");
  if (!list) return;

  const filledCount = getCustomBoxFilledCount();
  const isFull = filledCount >= customBoxSize;

  list.innerHTML = BOX_FLAVORS.map((f) => {
    const count = customBoxFlavors[f.id] || 0;
    const canAdd = !isFull;
    const canDec = count > 0;

    return `
      <div class="flavor-picker-card ${count > 0 ? 'has-items' : ''}">
        <div class="flavor-color-bar" style="background: ${f.color};"></div>
        <div class="flavor-info">
          <strong>${f.name}</strong>
          <p>${f.desc}</p>
        </div>
        <div class="flavor-stepper">
          <button type="button" data-flavor-id="${f.id}" data-box-action="dec" ${!canDec ? 'disabled' : ''} aria-label="Decrease ${f.name}">−</button>
          <span class="flavor-count-display">${count}</span>
          <button type="button" data-flavor-id="${f.id}" data-box-action="inc" ${!canAdd ? 'disabled' : ''} aria-label="Increase ${f.name}">+</button>
        </div>
      </div>`;
  }).join("");
}

function renderBoxSlots() {
  const container = $("#boxSlotsContainer");
  const counterEl = $("#previewSlotCounter");
  const fillBar = $("#boxFillBar");
  const pillsEl = $("#boxSummaryPills");
  const addBtn = $("#addCustomBoxBtn");
  const titleEl = $("#previewBoxTitle");
  const priceEl = $("#customBoxPrice");
  const mrpEl = $("#customBoxMrp");
  const savingsEl = $("#customBoxSavings");
  const remainingText = $("#slotsRemainingText");

  const config = BOX_CONFIGS[customBoxSize];
  const filledCount = getCustomBoxFilledCount();
  const remaining = customBoxSize - filledCount;

  titleEl.textContent = config.name;
  priceEl.textContent = formatINR(config.price);
  mrpEl.textContent = formatINR(config.mrp);
  savingsEl.textContent = config.savings;

  container.className = `box-slots-container ${customBoxSize === 12 ? 'slots-12' : ''}`;
  counterEl.textContent = `${filledCount} / ${customBoxSize} Bars Added`;
  fillBar.style.width = `${Math.min(100, (filledCount / customBoxSize) * 100)}%`;

  if (remaining > 0) {
    remainingText.textContent = `Pick ${remaining} more bar${remaining > 1 ? 's' : ''} to complete your box`;
    addBtn.disabled = true;
    addBtn.textContent = `Fill ${remaining} More Bar${remaining > 1 ? 's' : ''}`;
  } else {
    remainingText.innerHTML = `<strong style="color:var(--green)">🎉 Box is complete and ready to pack!</strong>`;
    addBtn.disabled = false;
    addBtn.textContent = `Add ${config.name} to Cart (${formatINR(config.price)})`;
  }

  // Build flattened slots array
  const slots = [];
  for (const f of BOX_FLAVORS) {
    const qty = customBoxFlavors[f.id] || 0;
    for (let i = 0; i < qty; i++) {
      slots.push(f);
    }
  }

  let slotsHtml = "";
  for (let i = 0; i < customBoxSize; i++) {
    if (i < slots.length) {
      const f = slots[i];
      slotsHtml += `
        <div class="slot-item filled" style="background: ${f.wrap};">
          <div class="slot-mini-bar" style="background: #3B2314; border: 1px solid ${f.color};"></div>
          <span class="slot-name">${f.name}</span>
          <button type="button" class="slot-remove-btn" data-slot-flavor="${f.id}" aria-label="Remove one ${f.name}">&times;</button>
        </div>`;
    } else {
      slotsHtml += `
        <div class="slot-item empty">
          <span>+ Empty</span>
        </div>`;
    }
  }
  container.innerHTML = slotsHtml;

  // Render summary pills
  const selectedEntries = Object.entries(customBoxFlavors).filter(([_, count]) => count > 0);
  if (selectedEntries.length === 0) {
    pillsEl.innerHTML = `<span class="empty-hint">Click + on any flavor to add bars to this box</span>`;
  } else {
    pillsEl.innerHTML = selectedEntries.map(([fid, count]) => {
      const flavor = BOX_FLAVORS.find((x) => x.id === fid);
      return `<span class="flavor-summary-pill" style="border-left: 4px solid ${flavor.color};">${count}× ${flavor.name}</span>`;
    }).join("");
  }
}

function updateCustomBoxUI() {
  renderFlavorPickers();
  renderBoxSlots();
}

function changeFlavorQty(flavorId, delta) {
  const currentCount = customBoxFlavors[flavorId] || 0;
  const filledCount = getCustomBoxFilledCount();

  if (delta > 0 && filledCount >= customBoxSize) {
    toast(`Box is already full (${customBoxSize} bars)! Remove one to swap.`);
    return;
  }

  const newCount = currentCount + delta;
  if (newCount <= 0) {
    delete customBoxFlavors[flavorId];
  } else {
    customBoxFlavors[flavorId] = newCount;
  }

  updateCustomBoxUI();
}

function resetCustomBox() {
  customBoxFlavors = {};
  updateCustomBoxUI();
  toast("Custom box cleared.");
}

function addCustomBoxToCart() {
  const filledCount = getCustomBoxFilledCount();
  if (filledCount < customBoxSize) {
    toast(`Please fill all ${customBoxSize} slots before adding to cart.`);
    return;
  }

  const config = BOX_CONFIGS[customBoxSize];
  const breakdown = Object.entries(customBoxFlavors)
    .filter(([_, count]) => count > 0)
    .map(([fid, count]) => {
      const f = BOX_FLAVORS.find((x) => x.id === fid);
      return { name: f.name, count };
    });

  // Create unique signature
  const signature = `${customBoxSize}-` + breakdown.map((b) => `${b.count}x${b.name}`).sort().join("|");
  const existingIndex = cart.findIndex((item) => item.signature === signature);

  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: `custom-box-${Date.now()}`,
      signature,
      type: "custom",
      name: config.name,
      price: config.price,
      weight: customBoxSize === 6 ? "240 g" : "480 g",
      qty: 1,
      breakdown,
      wrap: "#5C3A21",
      bg: "#FFE8D6"
    });
  }

  saveCart();
  renderCart();
  openCart();
  toast(`🎉 ${config.name} added to your stash!`);
}

/* --- Cart Handling --- */
function addStandardProduct(productId) {
  const p = PRODUCTS.find((x) => x.id === productId) || (SUBSCRIPTION_ITEM.id === productId ? SUBSCRIPTION_ITEM : null);
  if (!p) return;

  const existing = cart.find((item) => item.type === "standard" && item.id === p.id);
  if (existing) {
    existing.qty = Math.min(existing.qty + 1, 20);
  } else {
    cart.push({
      id: p.id,
      type: "standard",
      name: p.name,
      price: p.price,
      weight: p.weight,
      qty: 1,
      wrap: p.wrap,
      bg: p.bg
    });
  }

  saveCart();
  renderCart();
  toast(`${p.name} added to cart!`);
}

function updateCartItemQty(index, delta) {
  if (index < 0 || index >= cart.length) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
    toast("Item removed from stash");
  }
  saveCart();
  renderCart();
}

function removeCartItem(index) {
  if (index < 0 || index >= cart.length) return;
  cart.splice(index, 1);
  saveCart();
  renderCart();
  toast("Item removed from stash");
}

function renderCart() {
  const itemsEl = $("#cartItems");
  const countEl = $("#drawerItemCount");
  if (!itemsEl) return;

  const subtotal = getSubtotal();
  const totalCount = cartCount();

  if (countEl) {
    countEl.textContent = totalCount === 1 ? "1 item" : totalCount + " items";
  }

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty">
      <strong>Your cub stash is empty</strong>
      <p>Add some healthy date chocolates to surprise your little ones!</p>
    </div>`;
    $("#drawerFoot").hidden = true;
    $("#shipMsg").textContent = "Free delivery on orders above " + formatINR(FREE_DELIVERY_AT);
    $("#shipBar").style.width = "0%";
  } else {
    itemsEl.innerHTML = cart.map((item, index) => {
      let breakdownHtml = "";
      if (item.breakdown && item.breakdown.length > 0) {
        breakdownHtml = `<div class="cart-line-breakdown">${item.breakdown.map((b) => `${b.count}× ${b.name}`).join(", ")}</div>`;
      }

      return `
        <div class="cart-line">
          <div class="cart-thumb">${barArt(item, true)}</div>
          <div class="cart-line-info">
            <strong>${item.name}</strong>
            <span>${formatINR(item.price)} · ${item.weight}</span>
            ${breakdownHtml}
            <div class="qty">
              <button data-cart-index="${index}" data-cart-action="dec" aria-label="Decrease quantity">−</button>
              <span>${item.qty}</span>
              <button data-cart-index="${index}" data-cart-action="inc" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div class="cart-line-right">
            <span class="line-total">${formatINR(item.qty * item.price)}</span>
            <button class="remove-btn" data-cart-index="${index}" data-cart-action="remove">Remove</button>
          </div>
        </div>`;
    }).join("");

    const fee = subtotal >= FREE_DELIVERY_AT ? 0 : DELIVERY_FEE;
    $("#drawerFoot").hidden = false;
    $("#subtotal").textContent = formatINR(subtotal);
    $("#deliveryFee").innerHTML = fee === 0 ? '<b style="color:var(--green)">FREE</b>' : formatINR(fee);
    $("#total").textContent = formatINR(subtotal + fee);

    const remaining = FREE_DELIVERY_AT - subtotal;
    if (remaining > 0) {
      $("#shipMsg").textContent = "Add " + formatINR(remaining) + " more for FREE delivery!";
    } else {
      $("#shipMsg").innerHTML = "🎉 <strong style='color:var(--green)'>You unlocked FREE Express Delivery!</strong>";
    }
    $("#shipBar").style.width = Math.min(100, (subtotal / FREE_DELIVERY_AT) * 100) + "%";
  }

  const badge = $("#cartCount");
  if (badge) {
    badge.hidden = totalCount === 0;
    badge.textContent = totalCount;
    badge.classList.remove("pop");
    void badge.offsetWidth;
    if (totalCount > 0) badge.classList.add("pop");
  }
}

/* --- Toast & Modals --- */
let toastTimer = null;
function toast(msg) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}

function syncLock() {
  const drawerOpen = $("#drawer") && $("#drawer").classList.contains("open");
  const modalOpen = $("#overlay") && $("#overlay").classList.contains("show");
  document.body.classList.toggle("no-scroll", drawerOpen || modalOpen);
}

function openCart() {
  $("#drawer").classList.add("open");
  $("#backdrop").classList.add("show");
  syncLock();
}

function closeCart() {
  $("#drawer").classList.remove("open");
  $("#backdrop").classList.remove("show");
  syncLock();
}

function openCheckout() {
  if (cartCount() === 0) return;
  closeCart();
  $("#formView").hidden = false;
  $("#doneView").hidden = true;
  clearInvalid();
  setTimeout(() => $("#overlay").classList.add("show"), 100);
  document.body.classList.add("no-scroll");
}

function closeModal() {
  $("#overlay").classList.remove("show");
  syncLock();
}

function clearInvalid() {
  $("#formError").hidden = true;
  for (const el of document.querySelectorAll("#checkoutForm .invalid")) {
    el.classList.remove("invalid");
  }
}

function markInvalid(el) {
  el.classList.add("invalid");
}

/* --- Checkout Form Submit & WhatsApp Message Generator --- */
$("#checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  clearInvalid();

  const name = $("#fName").value.trim();
  const phone = $("#fPhone").value.trim();
  const pincode = $("#fPincode").value.trim();
  const address = $("#fAddress").value.trim();

  let ok = true;
  if (name.length < 3) { markInvalid($("#fName")); ok = false; }
  if (!/^[6-9]\d{9}$/.test(phone)) { markInvalid($("#fPhone")); ok = false; }
  if (!/^\d{6}$/.test(pincode)) { markInvalid($("#fPincode")); ok = false; }
  if (address.length < 8) { markInvalid($("#fAddress")); ok = false; }

  if (!ok) {
    $("#formError").hidden = false;
    return;
  }

  const subtotal = getSubtotal();
  const fee = subtotal >= FREE_DELIVERY_AT ? 0 : DELIVERY_FEE;

  let itemsList = "";
  for (const item of cart) {
    itemsList += `\n• ${item.qty} x ${item.name} — ${formatINR(item.qty * item.price)}`;
    if (item.breakdown && item.breakdown.length > 0) {
      itemsList += `  [Mix: ${item.breakdown.map((b) => `${b.count}x ${b.name}`).join(", ")}]`;
    }
  }

  const msg =
    `🐻 *New Cocoa Cubs Order!*` +
    itemsList +
    `\n\n*Subtotal:* ${formatINR(subtotal)}` +
    `\n*Delivery:* ${fee === 0 ? "FREE" : formatINR(fee)}` +
    `\n*Total Payable:* ${formatINR(subtotal + fee)}` +
    `\n\n*Parent Name:* ${name}` +
    `\n*WhatsApp Phone:* ${phone}` +
    `\n*Delivery Address:* ${address}, PIN: ${pincode}` +
    `\n*Payment Mode:* Cash / UPI on Delivery`;

  $("#orderPreview").textContent = msg;
  $("#waLink").href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(msg);
  $("#formView").hidden = true;
  $("#doneView").hidden = false;
});

$("#waLink").addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
  closeModal();
  toast("Order transferred to WhatsApp! We'll confirm shortly.");
});

/* --- Event Delegations --- */
document.addEventListener("click", (e) => {
  // Add standard product
  const stdAdd = e.target.closest("[data-standard-id]");
  if (stdAdd) {
    addStandardProduct(stdAdd.dataset.standardId);
    return;
  }

  // Custom Box Flavor steppers
  const boxBtn = e.target.closest("[data-box-action]");
  if (boxBtn) {
    const { flavorId, boxAction } = boxBtn.dataset;
    changeFlavorQty(flavorId, boxAction === "inc" ? 1 : -1);
    return;
  }

  // Remove single slot
  const slotRemove = e.target.closest("[data-slot-flavor]");
  if (slotRemove) {
    changeFlavorQty(slotRemove.dataset.slotFlavor, -1);
    return;
  }

  // Size option switch
  const sizeOption = e.target.closest(".size-option-card");
  if (sizeOption) {
    $$(".size-option-card").forEach((el) => el.classList.remove("active"));
    sizeOption.classList.add("active");
    customBoxSize = parseInt(sizeOption.dataset.size, 10);
    
    // Trim if filled count exceeds new size
    let filled = getCustomBoxFilledCount();
    if (filled > customBoxSize) {
      customBoxFlavors = {};
      toast(`Switched to ${customBoxSize}-bar box. Please select your flavors.`);
    }
    updateCustomBoxUI();
    return;
  }

  // Cart actions
  const cartBtn = e.target.closest("[data-cart-action]");
  if (cartBtn) {
    const idx = parseInt(cartBtn.dataset.cartIndex, 10);
    const act = cartBtn.dataset.cartAction;
    if (act === "inc") updateCartItemQty(idx, 1);
    if (act === "dec") updateCartItemQty(idx, -1);
    if (act === "remove") removeCartItem(idx);
    return;
  }

  // FAQ toggle
  const fq = e.target.closest(".faq-q");
  if (fq) {
    fq.parentElement.classList.toggle("open");
  }
});

// Add Custom Box CTA
$("#addCustomBoxBtn").addEventListener("click", addCustomBoxToCart);
$("#resetCustomBoxBtn").addEventListener("click", resetCustomBox);

// Subscription Box CTA
const subBtn = $("#subscribeBtn");
if (subBtn) {
  subBtn.addEventListener("click", () => {
    addStandardProduct(SUBSCRIPTION_ITEM.id);
    openCart();
  });
}

// Drawer & Modal events
$("#cartBtn").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
$("#backdrop").addEventListener("click", closeCart);
$("#checkoutBtn").addEventListener("click", openCheckout);
$("#closeModal").addEventListener("click", closeModal);

$("#overlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeCart();
  }
});

/* --- Informational Sections --- */
function renderWhy() {
  const grid = $("#whyGrid");
  if (!grid) return;
  grid.innerHTML = WHY_ITEMS.map((w) => `
    <div class="why-card">
      <div class="why-icon ${w.color}">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${ICONS[w.icon]}</svg>
      </div>
      <h3>${w.title}</h3>
      <p>${w.text}</p>
    </div>`).join("");
}

function renderCompare() {
  const tbody = $("#compareBody");
  if (!tbody) return;
  tbody.innerHTML = COMPARE_ROWS.map((r) => `
    <tr>
      <td><strong>${r[0]}</strong></td>
      <td>${r[1]}</td>
      <td class="us">${r[2]}</td>
    </tr>`).join("");
}

function renderFaq() {
  const list = $("#faqList");
  if (!list) return;
  list.innerHTML = FAQ_ITEMS.map((f, i) => `
    <div class="faq-item ${i === 0 ? 'open' : ''}">
      <button class="faq-q" type="button">
        <span>${f.q}</span>
        <svg class="chev" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join("");
}

$("#year").textContent = new Date().getFullYear();

// Initial Renders
renderProducts();
renderWhy();
renderCompare();
renderFaq();
renderCart();
updateCustomBoxUI();
/* ===================================================
   AI CHATBOT ENGINE (Cubby AI)
=================================================== */
const GEMINI_API_KEY_STORAGE = "cocoacubs_gemini_api_key";
let geminiApiKey = localStorage.getItem(GEMINI_API_KEY_STORAGE) || "";

const chatWidget = $("#chatWidget");
const chatLauncherBtn = $("#chatLauncherBtn");
const chatWindow = $("#chatWindow");
const closeChatBtn = $("#closeChatBtn");
const chatMessages = $("#chatMessages");
const chatInputForm = $("#chatInputForm");
const chatTextInput = $("#chatTextInput");
const chatQuickPrompts = $("#chatQuickPrompts");
const chatSettingsBtn = $("#chatSettingsBtn");
const chatSettingsPanel = $("#chatSettingsPanel");
const closeSettingsPanel = $("#closeSettingsPanel");
const geminiApiKeyInput = $("#geminiApiKeyInput");
const saveApiKeyBtn = $("#saveApiKeyBtn");

if (geminiApiKeyInput && geminiApiKey) {
  geminiApiKeyInput.value = geminiApiKey;
}

function openChatWindow() {
  if (!chatWindow) return;
  chatWindow.hidden = false;
  setTimeout(() => chatWindow.classList.add("open"), 10);
  const dot = $(".chat-badge-dot");
  if (dot) dot.style.display = "none";
  if (chatTextInput) chatTextInput.focus();
  scrollToBottom();
}

function closeChatWindow() {
  if (!chatWindow) return;
  chatWindow.classList.remove("open");
  setTimeout(() => { chatWindow.hidden = true; }, 250);
}

function scrollToBottom() {
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function appendUserMessage(text) {
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const msgEl = document.createElement("div");
  msgEl.className = "chat-msg user-msg";
  msgEl.innerHTML = `
    <div class="msg-bubble">
      <p>${escapeHtml(text)}</p>
    </div>
    <span class="msg-time">${time}</span>
  `;
  chatMessages.appendChild(msgEl);
  scrollToBottom();
}

function showTypingIndicator() {
  const typingEl = document.createElement("div");
  typingEl.className = "chat-msg bot-msg typing-msg";
  typingEl.id = "chatTypingIndicator";
  typingEl.innerHTML = `
    <div class="msg-bubble typing-bubble">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>
  `;
  chatMessages.appendChild(typingEl);
  scrollToBottom();
}

function hideTypingIndicator() {
  const el = $("#chatTypingIndicator");
  if (el) el.remove();
}

function appendBotMessage(htmlContent, actionBtn = null) {
  hideTypingIndicator();
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const msgEl = document.createElement("div");
  msgEl.className = "chat-msg bot-msg";
  
  let actionHtml = "";
  if (actionBtn) {
    actionHtml = `<button type="button" class="msg-action-btn" data-bot-action="${actionBtn.action}">${actionBtn.label}</button>`;
  }

  msgEl.innerHTML = `
    <div class="msg-bubble">
      ${htmlContent}
      ${actionHtml}
    </div>
    <span class="msg-time">${time}</span>
  `;
  chatMessages.appendChild(msgEl);
  scrollToBottom();
}

function escapeHtml(string) {
  const div = document.createElement("div");
  div.innerText = string;
  return div.innerHTML;
}

/* Smart Knowledge Base Response Generator */
function getSimulatedBotResponse(query) {
  const q = query.toLowerCase();

  // Teeth / Cavities
  if (q.includes("teeth") || q.includes("cavity") || q.includes("cavities") || q.includes("dentist") || q.includes("enamel")) {
    return {
      text: `<p><strong>Great question! 🦷</strong></p>
      <p>Standard chocolates are packed with refined sucrose (~22g per bar), which oral bacteria (<em>Streptococcus mutans</em>) ferment into enamel-destroying lactic acid.</p>
      <p><strong>Cocoa Cubs</strong> uses 0g refined sugar. Our Medjool date sweetness contains whole dietary fibers and minerals, meaning cavity-causing bacteria cannot rapidly ferment it into harmful acids!</p>`,
      action: { label: "🍫 See Nutrition Compare", action: "go-comparison" }
    };
  }

  // Dates vs Sugar / Sweetener
  if (q.includes("date") || q.includes("sugar") || q.includes("sweetener") || q.includes("aspartame") || q.includes("stevia")) {
    return {
      text: `<p><strong>Why Medjool Dates? 🌴</strong></p>
      <p>Unlike white sugar or harmful artificial sweeteners (like aspartame in Diet Coke or laxative maltitol), Arabian Medjool dates are a 100% natural whole superfood:</p>
      <ul>
        <li><strong>Low Glycemic Index:</strong> 4.2g fiber prevents sugar spikes & hyperactivity</li>
        <li><strong>Rich in Nutrients:</strong> Packed with potassium, magnesium & antioxidants</li>
        <li><strong>Caramel Flavor:</strong> Kids love the velvety taste!</li>
      </ul>`,
      action: { label: "📦 Build a Custom Box", action: "go-custom-box" }
    };
  }

  // Box Recommendation / Flavors / Age
  if (q.includes("box") || q.includes("flavor") || q.includes("recommend") || q.includes("pick") || q.includes("kid") || q.includes("child") || q.includes("age")) {
    return {
      text: `<p><strong>Here are my top recommendations for kids: 🐻</strong></p>
      <ul>
        <li><strong>Ages 3–6:</strong> <em>Classic Milk Date</em> & <em>Wild Berry Date</em> (mild, creamy & fruity)</li>
        <li><strong>Ages 7–12:</strong> <em>Crunchy Hazelnut</em> & <em>Almond Butter Crisp</em> (crunchy & nutty)</li>
        <li><strong>For Moms & Dads:</strong> <em>70% Dark Date Bar</em> (deep rich cocoa, zero bitterness)</li>
      </ul>
      <p>You can mix all 5 flavors in our <strong>Custom Box Builder</strong> (6-pack for ₹199 or 12-pack for ₹349 with Free Shipping)!</p>`,
      action: { label: "✨ Open Box Builder", action: "go-custom-box" }
    };
  }

  // Ingredients / Palm Oil / Allergens / Clean label
  if (q.includes("ingredient") || q.includes("palm oil") || q.includes("preservative") || q.includes("allergen") || q.includes("nut") || q.includes("milk") || q.includes("clean")) {
    return {
      text: `<p><strong>Our 100% Clean Label Promise: 🛡️</strong></p>
      <ul>
        <li><strong>Zero Palm Oil:</strong> Made only with pure cocoa butter & milk</li>
        <li><strong>Zero Preservatives:</strong> No artificial emulsifiers, colors or chemical flavors</li>
        <li><strong>Allergen info:</strong> Contains dairy. Hazelnut & Almond flavors contain tree nuts (made in a facility that handles nuts).</li>
      </ul>`,
      action: { label: "🔍 View Shop Flavors", action: "go-shop" }
    };
  }

  // Price / Cost / Budget / Delivery / COD / Shipping
  if (q.includes("price") || q.includes("cost") || q.includes("cheap") || q.includes("budget") || q.includes("delivery") || q.includes("shipping") || q.includes("cod") || q.includes("order")) {
    return {
      text: `<p><strong>Budget-Friendly Snacking from ₹79! 💸</strong></p>
      <p>While organic chocolate brands charge ₹150+ per bar, Cocoa Cubs starts at just <strong>₹79</strong>.</p>
      <p>🚚 <strong>Delivery:</strong> ₹30 flat, or <strong>FREE</strong> on orders above ₹250. We support <strong>Cash on Delivery (COD)</strong> & WhatsApp tracking across India!</p>`,
      action: { label: "🛒 View Cart / Stash", action: "go-cart" }
    };
  }

  // Subscription / Monthly Box
  if (q.includes("subscription") || q.includes("monthly") || q.includes("sticker")) {
    return {
      text: `<p><strong>The Monthly Cub Box 🎁</strong></p>
      <p>Get 15 assorted chocolates delivered on the 1st of every month for just <strong>₹449/mo</strong> (Save 20% + Free Delivery). Every box comes with a surprise collectible Cub activity sticker sheet!</p>`,
      action: { label: "🎁 View Monthly Box", action: "go-subscription" }
    };
  }

  // Default response
  return {
    text: `<p>Cocoa Cubs makes <strong>100% date-sweetened chocolates</strong> with 0g added sugar, tooth-safe ingredients, and zero palm oil starting at just ₹79!</p>
    <p>Would you like to customize a 6 or 12-bar box, or explore our nutrition comparison?</p>`,
    action: { label: "📦 Build Your Own Box", action: "go-custom-box" }
  };
}

/* Optional Live Gemini API Call */
async function callGeminiApi(promptText) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`;
  const systemInstruction = "You are Cubby, a friendly, warm pediatric nutrition expert and guide for 'Cocoa Cubs', a budget-friendly date-sweetened healthy chocolate brand for children and mothers in India. Key points: 0g added sugar, sweetened with Arabian Medjool dates, tooth-friendly, no palm oil, no artificial sweeteners (no aspartame/maltitol), ₹79 single bar, 6-bar box ₹199, 12-bar box ₹349 (free delivery over ₹250, COD available). Keep answers concise (2-3 short paragraphs), warm, encouraging to mothers, and helpful.";

  const body = {
    contents: [
      {
        role: "user",
        parts: [{ text: `${systemInstruction}\n\nUser Question: ${promptText}` }]
      }
    ]
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    throw new Error(`Gemini API Error: ${res.statusText}`);
  }

  const data = await res.json();
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) throw new Error("Empty response from Gemini");

  // Format basic markdown
  const formattedHtml = rawText
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .split("\n\n")
    .map(p => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
    .join("");

  return {
    text: formattedHtml,
    action: { label: "📦 Customize a Box", action: "go-custom-box" }
  };
}

async function handleUserChatSubmit(userInput) {
  const text = userInput.trim();
  if (!text) return;

  appendUserMessage(text);
  if (chatTextInput) chatTextInput.value = "";
  showTypingIndicator();

  try {
    if (geminiApiKey && geminiApiKey.startsWith("AIzaSy")) {
      try {
        const response = await callGeminiApi(text);
        appendBotMessage(response.text, response.action);
        return;
      } catch (err) {
        console.warn("Gemini API call failed, falling back to built-in knowledge base:", err);
      }
    }

    // Fallback or default smart response with realistic natural delay
    setTimeout(() => {
      const response = getSimulatedBotResponse(text);
      appendBotMessage(response.text, response.action);
    }, 600);
  } catch (e) {
    hideTypingIndicator();
    appendBotMessage("<p>Oops! Something went wrong. How else can I help you?</p>");
  }
}

/* Chat Event Handlers */
if (chatLauncherBtn) chatLauncherBtn.addEventListener("click", openChatWindow);
if (closeChatBtn) closeChatBtn.addEventListener("click", closeChatWindow);

if (chatInputForm) {
  chatInputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleUserChatSubmit(chatTextInput.value);
  });
}

if (chatQuickPrompts) {
  chatQuickPrompts.addEventListener("click", (e) => {
    const chip = e.target.closest(".prompt-chip");
    if (chip && chip.dataset.prompt) {
      handleUserChatSubmit(chip.dataset.prompt);
    }
  });
}

// Bot Message Action Button Click Delegation
if (chatMessages) {
  chatMessages.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-bot-action]");
    if (!btn) return;
    const action = btn.dataset.botAction;
    closeChatWindow();

    if (action === "go-custom-box") {
      const sec = $("#custom-box");
      if (sec) sec.scrollIntoView({ behavior: "smooth" });
    } else if (action === "go-shop") {
      const sec = $("#shop");
      if (sec) sec.scrollIntoView({ behavior: "smooth" });
    } else if (action === "go-comparison") {
      const sec = $("#comparison");
      if (sec) sec.scrollIntoView({ behavior: "smooth" });
    } else if (action === "go-subscription") {
      const sec = $("#subscription");
      if (sec) sec.scrollIntoView({ behavior: "smooth" });
    } else if (action === "go-cart") {
      openCart();
    }
  });
}

// Settings Panel toggle
if (chatSettingsBtn) {
  chatSettingsBtn.addEventListener("click", () => {
    if (chatSettingsPanel) chatSettingsPanel.hidden = !chatSettingsPanel.hidden;
  });
}

if (closeSettingsPanel) {
  closeSettingsPanel.addEventListener("click", () => {
    if (chatSettingsPanel) chatSettingsPanel.hidden = true;
  });
}

if (saveApiKeyBtn) {
  saveApiKeyBtn.addEventListener("click", () => {
    const val = geminiApiKeyInput.value.trim();
    geminiApiKey = val;
    localStorage.setItem(GEMINI_API_KEY_STORAGE, val);
    if (chatSettingsPanel) chatSettingsPanel.hidden = true;
    toast(val ? "Gemini AI Key saved!" : "Using built-in nutrition knowledge base.");
  });
}