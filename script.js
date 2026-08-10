/* ============================================
   KONSUL DIGITAL INDONESIA — JavaScript
   ============================================ */

// ===== DATA ARRAYS =====

const painPoints = [
  {
    icon: 'package-x',
    title: 'Produk jadi tapi gak ada yang beli',
    desc: 'Udah capek bikin, tapi pas dijual sepi. Gak ada funnel, gak ada strategi launch.'
  },
  {
    icon: 'globe-crack',
    title: 'Website mahal, lama, hasilnya zonk',
    desc: 'Bayar jutaan, tunggu berbulan, hasilnya gak converting dan susah diupdate.'
  },
  {
    icon: 'settings-2',
    title: 'Bingung teknis: hosting, domain, payment',
    desc: 'Mau jualan online tapi stuck di teknis. Hosting mahal, payment error, domain bingung.'
  }
];

const services = [
  {
    icon: 'book-open',
    title: 'Produk Digital',
    desc: 'E-book, Template, Course, Notion template. Dari outline sampai file siap jual.',
    features: ['E-book & PDF', 'Template Canva', 'Mini Course', 'Notion Template']
  },
  {
    icon: 'globe',
    title: 'Website Bisnis',
    desc: 'Landing page, Company profile, Portfolio. Fast loading & SEO-ready.',
    features: ['Landing Page', 'Company Profile', 'Portfolio Site', 'Blog / CMS']
  },
  {
    icon: 'shopping-cart',
    title: 'Toko Online',
    desc: 'Shopify, WooCommerce, payment gateway. Siap terima order & payment otomatis.',
    features: ['Shopify Setup', 'WooCommerce', 'Payment Gateway', 'Inventory System']
  },
  {
    icon: 'pen-tool',
    title: 'Branding & Copywriting',
    desc: 'Logo, visual identity, copy yang converting. Biar brand kamu ngena di market.',
    features: ['Logo Design', 'Brand Identity', 'Sales Copy', 'Content Strategy']
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery Call',
    duration: '30 menit',
    desc: 'Bedah bisnis, target market, dan goal kamu. Gratis, no strings attached.'
  },
  {
    step: '02',
    title: 'Design & Approval',
    duration: '3 hari',
    desc: 'Mockup design dikirim. Revisi sampai kamu setuju baru lanjut develop.'
  },
  {
    step: '03',
    title: 'Development',
    duration: '7 hari',
    desc: 'Build website + produk digital. Progress update tiap hari via WhatsApp.'
  },
  {
    step: '04',
    title: 'Launch + Training',
    duration: '1 hari',
    desc: 'Go live! Training 1-on-1 biar kamu bisa manage sendiri tanpa dependency.'
  }
];

const portfolioItems = [
  { img: 'coach-web', client: 'Coach Andi — Mindset Mastery', result: '+150% conversion', tag: 'Website + Course' },
  { img: 'umkm-toko', client: 'Batik Nusantara', result: 'Launch 10 hari', tag: 'Toko Online' },
  { img: 'creator-ebook', client: 'Diana — Content Creator', result: '500+ e-book sold', tag: 'E-book + Landing Page' },
  { img: 'fitness-app', client: 'FitPro Indonesia', result: '+200% leads', tag: 'Website + Automation' },
  { img: 'template-shop', client: 'DesignLab Co.', result: 'Rp 28jt revenue/bln', tag: 'Template Store' },
  { img: 'portfolio-web', client: 'FotoKita Studio', result: '+80% inquiry', tag: 'Portfolio Website' }
];

const pricingPlans = [
  {
    name: 'Starter Web',
    price: 'Rp 2.5jt',
    popular: false,
    features: [
      'Landing page 1 page',
      'Mobile responsive',
      'Hosting 1 tahun',
      'WA button terintegrasi',
      'SSL certificate',
      'Revisi 2x'
    ]
  },
  {
    name: 'Pro Digital',
    price: 'Rp 5.5jt',
    popular: true,
    features: [
      'Website multi-page',
      '1 Produk digital',
      'Email capture system',
      'Payment gateway',
      'Hosting 1 tahun',
      'Revisi 2x + training'
    ]
  },
  {
    name: 'Scale Up',
    price: 'Rp 12jt',
    popular: false,
    features: [
      'Full website custom',
      '3 Produk digital',
      'Automation email',
      'SEO dasar',
      'Analytics dashboard',
      'Priority support 3 bulan'
    ]
  }
];

const testimonials = [
  {
    name: 'Andi Pratama',
    role: 'Life Coach',
    img: 'testimonial-andi',
    text: 'Omzet naik 3x setelah launch. Website + course yang Konsul buat benar-benar converting. Yang paling suka, mereka handle end-to-end.',
    rating: 5
  },
  {
    name: 'Sari Wulandari',
    role: 'UMKM Batik',
    img: 'testimonial-sari',
    text: 'Toko online saya jadi rapi dan bisa terima payment otomatis. Dulu pusing teknis, sekarang tinggal packing orderan. Terima kasih!',
    rating: 5
  },
  {
    name: 'Diana Putri',
    role: 'Content Creator',
    img: 'testimonial-diana',
    text: 'E-book saya laku 500+ copy dalam 2 bulan pertama. Landing page yang mereka buat bikin visitor langsung klik beli. Worth every penny.',
    rating: 5
  }
];

const faqItems = [
  {
    q: 'Lama pengerjaan berapa hari?',
    a: 'Untuk website simple (Starter) sekitar 7 hari kerja. Paket Pro Digital 10-14 hari. Scale Up 14-21 hari. Tergantung kompleksitas dan seberapa cepat approval dari kamu.'
  },
  {
    q: 'Revisi berapa kali?',
    a: 'Standar garansi revisi 2x di phase design. Kalau ada bug setelah launch, kita fix gratis selama 30 hari. Kamu juga bisa upgrade ke paket dengan revisi unlimited.'
  },
  {
    q: 'Pembayaran gimana?',
    a: 'DP 50% di awal, pelunasan 50% setelah project go live. Bisa transfer bank (BCA, Mandiri, BNI) atau QRIS. Untuk paket Scale Up bisa cicil 3x.'
  },
  {
    q: 'Ada garansi?',
    a: 'Ada! Garansi revisi 2x di design phase + 30 hari bug fix gratis setelah launch. Kalau hasilnya gak sesuai brief yang udah disetujui, kita rework tanpa biaya tambahan.'
  },
  {
    q: 'Bisa request fitur tambahan?',
    a: 'Bisa banget! Fitur tambahan di-quote terpisah dengan harga transparan. Kamu approve dulu baru kita kerjain. No surprise billing, promise.'
  }
];


// ===== RENDER FUNCTIONS =====

function renderPainPoints() {
  const container = document.getElementById('pain-cards');
  if (!container) return;

  container.innerHTML = painPoints.map((p, i) => `
    <div class="reveal reveal-delay-${i + 1} bg-white rounded-xl p-6 border border-zinc-200/60 hover:border-red-200 transition-all group">
      <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
        <i data-lucide="${p.icon}" class="w-6 h-6 text-red-500"></i>
      </div>
      <h3 class="font-semibold text-zinc-900 text-base mb-2">${p.title}</h3>
      <p class="text-sm text-zinc-500 leading-relaxed">${p.desc}</p>
    </div>
  `).join('');
}

function renderServices() {
  const container = document.getElementById('service-cards');
  if (!container) return;

  container.innerHTML = services.map((s, i) => `
    <div class="reveal reveal-delay-${i + 1} bg-white rounded-xl p-6 border border-zinc-200/60 hover:border-primary/20 transition-all group hover:shadow-md">
      <div class="w-12 h-12 bg-primary/[0.08] rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
        <i data-lucide="${s.icon}" class="w-6 h-6 text-primary"></i>
      </div>
      <h3 class="font-semibold text-zinc-900 text-lg mb-2">${s.title}</h3>
      <p class="text-sm text-zinc-500 leading-relaxed mb-4">${s.desc}</p>
      <ul class="space-y-1.5">
        ${s.features.map(f => `
          <li class="flex items-center gap-2 text-sm text-zinc-600">
            <i data-lucide="check" class="w-3.5 h-3.5 text-primary flex-shrink-0"></i>
            ${f}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

function renderProcess() {
  const container = document.getElementById('process-steps');
  if (!container) return;

  container.innerHTML = processSteps.map((s, i) => `
    <div class="reveal reveal-delay-${i + 1} relative">
      ${i < processSteps.length - 1 ? `
        <div class="hidden lg:block absolute top-10 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-0.5 bg-primary/15 z-0"></div>
      ` : ''}
      <div class="relative z-10 text-center">
        <div class="w-20 h-20 bg-primary/[0.08] rounded-2xl flex items-center justify-center mx-auto mb-4 border-2 border-primary/15">
          <span class="text-primary font-bold text-2xl">${s.step}</span>
        </div>
        <h3 class="font-semibold text-zinc-900 text-base">${s.title}</h3>
        <span class="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/[0.08] px-3 py-1 rounded-full mt-2 mb-3">
          <i data-lucide="clock" class="w-3 h-3"></i>
          ${s.duration}
        </span>
        <p class="text-sm text-zinc-500 leading-relaxed">${s.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderPortfolio() {
  const container = document.getElementById('portfolio-cards');
  if (!container) return;

  container.innerHTML = portfolioItems.map((p, i) => `
    <div class="reveal reveal-delay-${(i % 3) + 1} portfolio-card group rounded-xl overflow-hidden border border-zinc-200/60 hover:border-primary/20 transition-all hover:shadow-md bg-white">
      <div class="relative overflow-hidden aspect-[16/10]">
        <img src="https://picsum.photos/seed/${p.img}/640/400.jpg" alt="${p.client}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div class="absolute bottom-3 left-3">
          <span class="inline-flex items-center bg-white/90 backdrop-blur-sm text-xs font-medium text-primary px-3 py-1 rounded-full">
            ${p.tag}
          </span>
        </div>
      </div>
      <div class="p-5">
        <h3 class="font-semibold text-zinc-900 text-sm mb-1">${p.client}</h3>
        <p class="text-sm font-medium text-primary flex items-center gap-1">
          <i data-lucide="trending-up" class="w-3.5 h-3.5"></i>
          ${p.result}
        </p>
      </div>
    </div>
  `).join('');
}

function renderPricing() {
  const container = document.getElementById('pricing-cards');
  if (!container) return;

  container.innerHTML = pricingPlans.map((p, i) => `
    <div class="reveal reveal-delay-${i + 1} relative rounded-2xl p-6 sm:p-8 transition-all hover:shadow-lg ${p.popular ? 'pricing-card-popular bg-primary text-white ring-2 ring-primary shadow-xl shadow-primary/15 sm:scale-[1.02]' : 'bg-white border border-zinc-200/60 hover:border-primary/20'}">
      ${p.popular ? `
        <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-zinc-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
          ⭐ Paling Populer
        </span>
      ` : ''}
      <div class="mb-6 ${p.popular ? 'mt-2' : ''}">
        <h3 class="font-semibold text-lg ${p.popular ? 'text-white' : 'text-zinc-900'}">${p.name}</h3>
        <div class="mt-3 flex items-baseline gap-1">
          <span class="text-3xl font-bold ${p.popular ? 'text-white' : 'text-zinc-900'}">${p.price}</span>
        </div>
      </div>
      <ul class="space-y-3 mb-8">
        ${p.features.map(f => `
          <li class="flex items-center gap-2.5 text-sm ${p.popular ? 'text-white/85' : 'text-zinc-600'}">
            <i data-lucide="check-circle-2" class="w-4 h-4 flex-shrink-0 ${p.popular ? 'text-accent' : 'text-primary'}"></i>
            ${f}
          </li>
        `).join('')}
      </ul>
      <a href="#kontak" class="block w-full text-center font-medium px-6 py-3 rounded-xl text-sm transition-all ${p.popular ? 'bg-white text-primary hover:bg-secondary' : 'bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20'}">
        Pilih Paket Ini
      </a>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonial-cards');
  if (!container) return;

  container.innerHTML = testimonials.map((t, i) => `
    <div class="reveal reveal-delay-${i + 1} bg-white rounded-xl p-6 border border-zinc-200/60 hover:border-primary/20 transition-all">
      <div class="flex items-center gap-1 mb-4">
        ${Array.from({ length: t.rating }, () => '<i data-lucide="star" class="w-4 h-4 text-accent fill-accent"></i>').join('')}
      </div>
      <p class="text-sm text-zinc-600 leading-relaxed mb-5">"${t.text}"</p>
      <div class="flex items-center gap-3 pt-4 border-t border-zinc-100">
        <img src="https://picsum.photos/seed/${t.img}/80/80.jpg" alt="${t.name}" class="w-10 h-10 rounded-full object-cover" loading="lazy">
        <div>
          <p class="font-semibold text-sm text-zinc-900">${t.name}</p>
          <p class="text-xs text-zinc-400">${t.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFAQ() {
  const container = document.getElementById('faq-list');
  if (!container) return;

  container.innerHTML = faqItems.map((f, i) => `
    <div class="reveal reveal-delay-${Math.min(i + 1, 5)} faq-item bg-white rounded-xl border border-zinc-200/60 overflow-hidden" data-faq="${i}">
      <button class="faq-toggle w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors" onclick="toggleFaq(${i})">
        <span class="font-medium text-sm text-zinc-800 pr-4">${f.q}</span>
        <i data-lucide="chevron-down" class="w-5 h-5 text-zinc-400 faq-chevron flex-shrink-0"></i>
      </button>
      <div class="faq-answer px-5 pb-5">
        <p class="text-sm text-zinc-500 leading-relaxed pt-2 border-t border-zinc-100">${f.a}</p>
      </div>
    </div>
  `).join('');
}


// ===== FAQ TOGGLE =====

function toggleFaq(index) {
  const items = document.querySelectorAll('.faq-item');
  items.forEach((item, i) => {
    if (i === index) {
      item.classList.toggle('open');
    } else {
      item.classList.remove('open');
    }
  });
}


// ===== MOBILE MENU =====

function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (!menuToggle || !mobileMenu || !menuIcon) return;

  let menuOpen = false;

  menuToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    menuIcon.setAttribute('data-lucide', menuOpen ? 'x' : 'menu');
    lucide.createIcons();
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      menuIcon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });
}


// ===== NAVBAR SCROLL EFFECT =====

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}


// ===== SCROLL REVEAL ANIMATION =====

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}


// ===== CONTACT FORM =====

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const nama = formData.get('nama');
    const email = formData.get('email');
    const wa = formData.get('whatsapp');
    const pesan = formData.get('pesan');

    // Validation
    if (!nama || !email || !wa) {
      showToast('Mohon isi semua field wajib.');
      return;
    }

    // mailto fallback
    const subject = encodeURIComponent(`Konsultasi Gratis - ${nama}`);
    const body = encodeURIComponent(
      `Nama: ${nama}\nEmail: ${email}\nWhatsApp: ${wa}\n\nPesan:\n${pesan}`
    );
    window.location.href = `mailto:hello@konsuldigital.id?subject=${subject}&body=${body}`;

    showToast('Pesan dikirim! Kami akan hubungi kamu < 24 jam.');
    this.reset();
  });
}


// ===== TOAST =====

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}


// ===== ACTIVE NAV LINK HIGHLIGHT =====

function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('text-primary', 'font-semibold');
            link.classList.remove('text-zinc-600');
          } else {
            link.classList.remove('text-primary', 'font-semibold');
            link.classList.add('text-zinc-600');
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => observer.observe(section));
}


// ===== INIT ALL =====

function init() {
  // Render dynamic content
  renderPainPoints();
  renderServices();
  renderProcess();
  renderPortfolio();
  renderPricing();
  renderTestimonials();
  renderFAQ();

  // Initialize Lucide icons (must come after rendering)
  lucide.createIcons();

  // Initialize interactions
  initMobileMenu();
  initNavbarScroll();
  initScrollReveal();
  initContactForm();
  initActiveNavHighlight();
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
