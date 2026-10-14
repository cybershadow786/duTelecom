/**
 * Du Telecom by Oceanside Channel Partner
 * Official WiFi & Fiber Plans Application Logic
 * WhatsApp Ordering: +971 45749939
 */

const WHATSAPP_NUMBER = "97145749939"; // UAE international format without + or spaces
const WHATSAPP_DISPLAY = "+971 45749939";

// Official du Telecom WiFi Plans Database (Wireless 5G & Fiber Broadband)
const DU_PLANS = [
  // --- WIRELESS 5G PLANS ---
  {
    id: "wireless-basic",
    name: "du Home Wireless 5G Basic",
    category: "wireless",
    speed: "5G Ultra Speed",
    speedNote: "Up to 500+ Mbps depending on 5G network coverage",
    price: 199,
    originalPrice: 229,
    vatNote: "+ 5% VAT (AED 208.95 total)",
    contract: "12 Months Contract",
    tag: "⚡ Instant Plug & Play",
    tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    isPopular: false,
    router: "Free 5G Wi-Fi 6 Router (AED 0 upfront)",
    features: [
      "Unlimited 5G High-Speed Data",
      "Instant Plug & Play (No drilling, no cables, no NOC)",
      "Free 5G Wi-Fi 6 Advanced Router Included",
      "Connect 32+ devices simultaneously",
      "Same-day Express Delivery across all Emirates",
      "AED 0 Upfront Installation & Zero Deposit"
    ],
    bestFor: "Apartments, renters, students, and immediate setup",
    orderMessage: "Hi Oceanside Channel Partner! I would like to order the du Home Wireless 5G Basic plan (AED 199/month). Please contact me for same-day delivery."
  },
  {
    id: "wireless-entertainment",
    name: "du Home Wireless 5G Entertainment",
    category: "wireless",
    speed: "5G Ultra Fast + Streaming",
    speedNote: "Prioritized 5G speeds for 4K streaming & family",
    price: 299,
    originalPrice: 349,
    vatNote: "+ 5% VAT (AED 313.95 total)",
    contract: "12 Months Contract",
    tag: "🔥 Most Popular 5G",
    tagColor: "bg-pink-500/10 text-pink-400 border-pink-500/30",
    isPopular: true,
    router: "Free Premium 5G Wi-Fi 6 Router",
    features: [
      "Unlimited Ultra-Fast 5G Data",
      "12 Months FREE Disney+ & OSN+ Streaming Bundled",
      "Free Premium 5G Wi-Fi 6 Router included",
      "Instant Setup in 5 minutes – zero technician required",
      "Optimized for smooth 4K Ultra HD multi-screen streaming",
      "Same-day Express Delivery + Free SIM Activation"
    ],
    bestFor: "Families, binge streamers, movie lovers, and modern homes",
    orderMessage: "Hi Oceanside Channel Partner! I would like to order the du Home Wireless 5G Entertainment plan (AED 299/month) with free Disney+ and OSN+. Please contact me."
  },
  {
    id: "wireless-gaming",
    name: "du Home Wireless 5G Gaming / Ultra",
    category: "wireless",
    speed: "5G Low-Latency Ultra",
    speedNote: "Dedicated QoS priority routing for low ping",
    price: 399,
    originalPrice: 449,
    vatNote: "+ 5% VAT (AED 418.95 total)",
    contract: "12 Months Contract",
    tag: "🎮 Gamers & Heavy Users",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    isPopular: false,
    router: "Free High-Performance Gaming 5G Router",
    features: [
      "Unlimited Uncapped 5G High-Priority Data",
      "Optimized ultra-low ping for esports & competitive gaming",
      "GeForce NOW cloud gaming ready bundle",
      "VIP Streaming subscriptions included",
      "Next-Gen 5G Wi-Fi 6 Router with high-gain antennas",
      "Priority VIP Customer Onboarding via Oceanside"
    ],
    bestFor: "Competitive gamers, content creators, tech enthusiasts",
    orderMessage: "Hi Oceanside Channel Partner! I would like to order the du Home Wireless 5G Gaming / Ultra plan (AED 399/month). Please contact me for dispatch."
  },

  // --- HOME FIBER PLANS ---
  {
    id: "fiber-starter",
    name: "du Home Starter Fiber (250 Mbps)",
    category: "fiber",
    speed: "250 Mbps Download",
    speedNote: "Stable optical fiber with 60 Mbps upload",
    price: 389,
    promoPrice: 311,
    vatNote: "+ 5% VAT (Special Promo: AED 311/mo online!)",
    contract: "24 Months Contract",
    tag: "⭐ Best Starter Fiber",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    isPopular: false,
    router: "Free Advanced Wi-Fi Router",
    features: [
      "250 Mbps Unlimited Optical Fiber Internet",
      "100% Dedicated Fiber-to-the-Home reliability",
      "Free Advanced Dual-Band Wi-Fi Router",
      "Free Landline with unlimited calls to UAE landlines",
      "Essential TV Package / Streaming access included",
      "FREE Standard Technician Installation (Save AED 200!)"
    ],
    bestFor: "1-2 bedroom apartments, reliable remote work & Zoom",
    orderMessage: "Hi Oceanside Channel Partner! I would like to order the du Home Starter Fiber plan (250 Mbps - AED 389/mo). Please check fiber coverage for my building."
  },
  {
    id: "fiber-basic",
    name: "du Home Basic Fiber (500 Mbps / 1 Gbps)",
    category: "fiber",
    speed: "500 Mbps - 1 Gbps Gigabit Speed",
    speedNote: "Next-gen fiber with ultra-low latency",
    price: 429,
    promoPrice: 343,
    vatNote: "+ 5% VAT (Special Promo: AED 343/mo for online orders!)",
    contract: "24 Months Contract",
    tag: "🏆 Top Recommended Fiber",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    isPopular: true,
    router: "Free Premium Wi-Fi 6 Router",
    features: [
      "Up to 1 Gbps Blazing Optical Fiber Speed",
      "1x HDTV 4K Recordable Receiver included",
      "Disney+ & OSN+ bundled subscriptions",
      "Free Landline with unlimited national calls",
      "Free Expert Fiber Installation + Zero Deposit",
      "Ultra-low latency for seamless multiplayer gaming"
    ],
    bestFor: "Modern households, multi-device 4K streaming, gamers",
    orderMessage: "Hi Oceanside Channel Partner! I would like to order the du Home Basic Fiber plan (1 Gbps - AED 429/mo). Please schedule fiber installation for my address."
  },
  {
    id: "fiber-advanced",
    name: "du Home Advanced Fiber (1 Gbps Multi-Room Mesh)",
    category: "fiber",
    speed: "1 Gbps Gigabit Ultra",
    speedNote: "Gigabit fiber with dual-mesh whole-home coverage",
    price: 549,
    promoPrice: 439,
    vatNote: "+ 5% VAT (Special Promo: AED 439/mo on 24-month terms!)",
    contract: "24 Months Contract",
    tag: "🏡 Large Homes & Villas",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    isPopular: false,
    router: "2x Premium Mesh Wi-Fi Routers Included",
    features: [
      "1 Gbps Dedicated Gigabit Optical Fiber",
      "2x Premium Mesh Wi-Fi Routers for 100% dead-zone free coverage",
      "2x HDTV 4K Recordable Set-Top Boxes",
      "Full Entertainment TV Pack + Disney+ & OSN+ included",
      "Unlimited national landline calling",
      "Free VIP White-Glove Installation & Signal Tuning"
    ],
    bestFor: "Large 3-5 bedroom apartments, multi-story villas, smart homes",
    orderMessage: "Hi Oceanside Channel Partner! I would like to order the du Home Advanced Fiber plan (1 Gbps with 2 Mesh Routers - AED 549/mo). Please assist with villa survey and installation."
  },
  {
    id: "fiber-ultimate",
    name: "du Home Ultimate Fiber (1 Gbps VIP Max)",
    category: "fiber",
    speed: "1 Gbps Maximum VIP Fiber",
    speedNote: "Highest network priority with all-inclusive entertainment",
    price: 749,
    promoPrice: 599,
    vatNote: "+ 5% VAT (Special Promo: AED 599/mo online discount!)",
    contract: "24 Months Contract",
    tag: "👑 Ultimate VIP Experience",
    tagColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    isPopular: false,
    router: "2x Ultimate High-Performance Tri-Band Mesh Routers",
    features: [
      "1 Gbps Symmetrical Fiber Performance with VIP routing",
      "2x Ultimate Tri-Band High-Performance Mesh Routers",
      "Complete VIP Entertainment: beIN Sports, OSN+, Disney+, Prime Video",
      "Multiple 4K Recordable TV Boxes for every living room",
      "Dedicated Oceanside Priority Account Manager",
      "Free Expedited Fiber Installation + Free Landline"
    ],
    bestFor: "Luxury villas, premium residences, sports fans, elite bandwidth",
    orderMessage: "Hi Oceanside Channel Partner! I would like to order the du Home Ultimate Fiber plan (AED 749/mo VIP). Please arrange VIP installation."
  }
];

// Helper: Generate WhatsApp URL
function createWhatsAppUrl(message) {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
}

// Render Plans into the DOM
function renderPlans(plansToRender) {
  const container = document.getElementById("plans-container");
  if (!container) return;

  container.innerHTML = "";

  plansToRender.forEach(plan => {
    const card = document.createElement("div");
    card.id = plan.id;
    card.className = `glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 scroll-mt-28 ${
      plan.isPopular ? "featured-card ring-1 ring-cyan-400/50" : ""
    }`;

    // Tag / Badge
    const tagHtml = `<span class="badge-pill border ${plan.tagColor}">${plan.tag}</span>`;
    
    // Price display
    let priceHtml = "";
    if (plan.promoPrice) {
      priceHtml = `
        <div class="mt-4">
          <div class="flex items-baseline gap-2">
            <span class="text-4xl font-extrabold text-white tracking-tight">AED ${plan.promoPrice}</span>
            <span class="text-sm line-through text-slate-400">AED ${plan.price}</span>
            <span class="text-sm font-medium text-slate-400">/ month</span>
          </div>
          <p class="text-xs text-cyan-400 font-semibold mt-1">Special Online Promo Rate!</p>
          <p class="text-xs text-slate-400">${plan.vatNote}</p>
        </div>
      `;
    } else if (plan.originalPrice) {
      priceHtml = `
        <div class="mt-4">
          <div class="flex items-baseline gap-2">
            <span class="text-4xl font-extrabold text-white tracking-tight">AED ${plan.price}</span>
            <span class="text-sm line-through text-slate-400">AED ${plan.originalPrice}</span>
            <span class="text-sm font-medium text-slate-400">/ month</span>
          </div>
          <p class="text-xs text-slate-400 mt-1">${plan.vatNote}</p>
        </div>
      `;
    } else {
      priceHtml = `
        <div class="mt-4">
          <div class="flex items-baseline gap-2">
            <span class="text-4xl font-extrabold text-white tracking-tight">AED ${plan.price}</span>
            <span class="text-sm font-medium text-slate-400">/ month</span>
          </div>
          <p class="text-xs text-slate-400 mt-1">${plan.vatNote}</p>
        </div>
      `;
    }

    // Features list
    const featuresHtml = plan.features.map(f => `
      <li class="flex items-start gap-2.5 text-sm text-slate-300">
        <svg class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>${f}</span>
      </li>
    `).join("");

    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start gap-2 mb-2">
          ${tagHtml}
          <span class="text-xs px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 font-medium border border-slate-700/50">
            ${plan.contract}
          </span>
        </div>

        <h3 class="text-xl sm:text-2xl font-bold text-white mt-3 group-hover:text-cyan-300 transition-colors">
          ${plan.name}
        </h3>

        <div class="flex items-center gap-2 mt-2 text-cyan-400 font-semibold text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span>${plan.speed}</span>
        </div>
        <p class="text-xs text-slate-400 mt-0.5">${plan.speedNote}</p>

        ${priceHtml}

        <div class="my-5 p-3 rounded-xl bg-slate-800/50 border border-slate-700/40 text-xs text-slate-300 flex items-center gap-2.5">
          <svg class="w-5 h-5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
          </svg>
          <div>
            <span class="text-white font-semibold block">Router Included:</span>
            ${plan.router}
          </div>
        </div>

        <div class="border-t border-slate-800 pt-4 mb-6">
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Plan Inclusions:</p>
          <ul class="space-y-2.5">
            ${featuresHtml}
          </ul>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800/60 flex flex-col gap-2.5">
        <button 
          onclick="openOrderModal('${plan.id}')"
          class="w-full py-3.5 px-4 rounded-xl font-bold text-slate-900 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer text-sm">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
          Order Now
        </button>

        <a 
          href="${createWhatsAppUrl(plan.orderMessage)}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-full py-2.5 px-4 rounded-xl font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center justify-center gap-2 text-xs text-center">
          <svg class="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          1-Click WhatsApp Order
        </a>

        <div class="flex items-center justify-between text-[11px] pt-1 px-1">
          <a href="plan.html?id=${plan.id}" class="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 hover:underline">
            <span>Open Dedicated Plan Page</span>
            <span>→</span>
          </a>
          <a href="#${plan.id}" class="text-slate-500 hover:text-slate-400 text-[10px]">
            #${plan.id}
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Plan Filtering Logic
function filterPlans(category) {
  // Update button active states
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    if (btn.getAttribute("data-category") === category) {
      btn.className = "filter-btn px-5 py-2.5 rounded-full font-bold text-sm bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/25 transition-all";
    } else {
      btn.className = "filter-btn px-5 py-2.5 rounded-full font-medium text-sm text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 transition-all";
    }
  });

  if (category === "all") {
    renderPlans(DU_PLANS);
  } else {
    const filtered = DU_PLANS.filter(p => p.category === category);
    renderPlans(filtered);
  }
}

// Modal Order Logic
let activeSelectedPlan = null;

function openOrderModal(planId) {
  const plan = DU_PLANS.find(p => p.id === planId);
  if (!plan) return;
  activeSelectedPlan = plan;

  const modal = document.getElementById("order-modal");
  const modalPlanName = document.getElementById("modal-plan-name");
  const modalPlanPrice = document.getElementById("modal-plan-price");
  const modalPlanSpeed = document.getElementById("modal-plan-speed");
  const modalPlanRouter = document.getElementById("modal-plan-router");
  
  if (modalPlanName) modalPlanName.textContent = plan.name;
  if (modalPlanPrice) modalPlanPrice.textContent = plan.promoPrice ? `AED ${plan.promoPrice} / month (Online Promo!)` : `AED ${plan.price} / month (+5% VAT)`;
  if (modalPlanSpeed) modalPlanSpeed.textContent = plan.speed;
  if (modalPlanRouter) modalPlanRouter.textContent = plan.router;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeOrderModal() {
  const modal = document.getElementById("order-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

function submitWhatsAppOrder(event) {
  if (event) event.preventDefault();
  
  const customerName = document.getElementById("order-name")?.value.trim() || "Customer";
  const emirate = document.getElementById("order-emirate")?.value || "Dubai";
  const area = document.getElementById("order-area")?.value.trim() || "UAE";
  const contactNote = document.getElementById("order-notes")?.value.trim() || "No extra notes";

  if (!activeSelectedPlan) {
    activeSelectedPlan = DU_PLANS[0];
  }

  const message = `*NEW DU ORDER REQUEST via Oceanside Channel Partner*
---------------------------------------
*Selected Plan:* ${activeSelectedPlan.name}
*Monthly Rate:* AED ${activeSelectedPlan.promoPrice || activeSelectedPlan.price}/month (+VAT)
*Plan Speed:* ${activeSelectedPlan.speed}
*Hardware:* ${activeSelectedPlan.router}
---------------------------------------
*Customer Details:*
• Name: ${customerName}
• Emirate: ${emirate}
• Area / Building: ${area}
• Notes: ${contactNote}
---------------------------------------
Please confirm my order and arrange delivery/installation. Thank you!`;

  const url = createWhatsAppUrl(message);
  window.open(url, "_blank");
  closeOrderModal();
}

// Interactive Recommendation Quiz
function handleQuizSubmit(e) {
  e.preventDefault();
  const residence = document.getElementById("quiz-residence")?.value;
  const need = document.getElementById("quiz-need")?.value;
  const users = document.getElementById("quiz-users")?.value;

  let recommendedId = "wireless-entertainment"; // default fallback

  if (residence === "villa" || users === "heavy") {
    recommendedId = "fiber-advanced";
  } else if (need === "plug-and-play" && users === "light") {
    recommendedId = "wireless-basic";
  } else if (need === "plug-and-play") {
    recommendedId = "wireless-entertainment";
  } else if (need === "gaming") {
    recommendedId = residence === "villa" ? "fiber-basic" : "wireless-gaming";
  } else if (need === "fiber") {
    recommendedId = users === "light" ? "fiber-starter" : "fiber-basic";
  }

  const plan = DU_PLANS.find(p => p.id === recommendedId);
  const resultContainer = document.getElementById("quiz-result");
  const resultContent = document.getElementById("quiz-result-content");

  if (resultContainer && resultContent && plan) {
    resultContent.innerHTML = `
      <div class="p-5 rounded-2xl bg-cyan-950/60 border border-cyan-500/40">
        <div class="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
          <span>🎯 Top Match for You</span>
        </div>
        <h4 class="text-xl font-bold text-white">${plan.name}</h4>
        <p class="text-sm text-cyan-200 mt-1">${plan.speed} • ${plan.promoPrice ? `AED ${plan.promoPrice}/mo (Promo)` : `AED ${plan.price}/mo`}</p>
        <p class="text-xs text-slate-300 mt-2">${plan.bestFor}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <button onclick="openOrderModal('${plan.id}')" class="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all">
            Order This Plan Now
          </button>
          <a href="${createWhatsAppUrl(plan.orderMessage)}" target="_blank" class="px-5 py-2.5 rounded-xl font-bold text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all flex items-center gap-1.5">
            Order on WhatsApp
          </a>
        </div>
      </div>
    `;
    resultContainer.classList.remove("hidden");
  }
}

// Coverage Checker Simulator
function handleCoverageCheck(e) {
  e.preventDefault();
  const emirate = document.getElementById("cov-emirate")?.value;
  const area = document.getElementById("cov-area")?.value.trim();
  const resultDiv = document.getElementById("cov-result");

  if (!area) return;

  resultDiv.innerHTML = `
    <div class="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm animate-pulse">
      <div class="flex items-center gap-2 font-bold mb-1">
        <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Coverage Verified in ${area}, ${emirate}!</span>
      </div>
      <p class="text-xs text-slate-300 mt-1">
        Both du 5G Wireless (Instant Same-Day Dispatch) and Ultra-Fast Fiber Broadband are supported at your location.
      </p>
      <div class="mt-3">
        <a href="${createWhatsAppUrl(`Hi Oceanside Channel Partner! I checked coverage for ${area}, ${emirate}. Please confirm same-day delivery of du WiFi.`)}" 
           target="_blank" 
           class="inline-flex items-center gap-2 text-xs font-bold text-slate-900 bg-emerald-400 px-4 py-2 rounded-lg hover:bg-emerald-300 transition-all">
          Confirm Free Delivery to ${area} on WhatsApp
        </a>
      </div>
    </div>
  `;
  resultDiv.classList.remove("hidden");
}

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

// FAQ Accordion Toggle
function toggleFaq(btn) {
  const content = btn.nextElementSibling;
  const arrow = btn.querySelector(".faq-arrow");
  
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    arrow?.classList.add("rotate-180");
  } else {
    content.classList.add("hidden");
    arrow?.classList.remove("rotate-180");
  }
}

// Hash Navigation & Scroll Highlighter
function handleHashNavigation() {
  const hash = window.location.hash;
  if (!hash) return;
  
  if (hash.startsWith("#order-")) {
    const planId = hash.replace("#order-", "");
    openOrderModal(planId);
  } else {
    const targetId = hash.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
        targetElement.classList.add("ring-4", "ring-cyan-400", "scale-[1.02]");
        setTimeout(() => {
          targetElement.classList.remove("ring-4", "ring-cyan-400", "scale-[1.02]");
        }, 3000);
      }, 100);
    }
  }
}

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderPlans(DU_PLANS);
  handleHashNavigation();

  window.addEventListener("hashchange", handleHashNavigation);

  // Close modal on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeOrderModal();
  });

  // Modal backdrop click
  const modalBackdrop = document.getElementById("order-modal");
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeOrderModal();
    });
  }
});

