// script.js — Data + render + interactions (tidak ada perubahan warna di JS)
// File ini identik dengan versi sage green — semua warna dikelola via CSS variables

const data = {
  heroAvatars: [
    'https://picsum.photos/seed/klien-andi/80/80',
    'https://picsum.photos/seed/klien-sari/80/80',
    'https://picsum.photos/seed/klien-bima/80/80',
    'https://picsum.photos/seed/klien-rina/80/80',
  ],

  painPoints: [
    {
      icon: 'frown',
      title: 'Produk jadi tapi gak ada yang beli',
      desc: 'Udah capek bikin e-book atau course, tapi pas di-launch sepi peminat. Positioning dan copywriting-nya gak nendang.'
    },
    {
      icon: 'clock',
      title: 'Website mahal, lama, hasilnya zonk',
      desc: 'Bayar mahal, nunggu berbulan-bulan, hasilnya gak sesuai ekspektasi. Update konten juga harus bayar terus.'
    },
    {
      icon: 'settings',
      title: 'Bingung teknis: hosting, domain, payment',
      desc: 'Hosting domain ribet, payment gateway gak nyambung, email bisnis gak jalan. Akhirnya ide bisnis kendor.'
    },
  ],

  services: [
    {
      icon: 'book-open',
      title: 'Produk Digital',
      desc: 'E-book, Template, Course, Notion. Dari outline sampai siap jual.'
    },
    {
      icon: 'globe',
      title: 'Website Bisnis',
      desc: 'Landing page, Company profile, Portfolio. Fast loading, SEO-ready.'
    },
    {
      icon: 'shopping-cart',
      title: 'Toko Online',
      desc: 'Shopify, WooCommerce, payment gateway. Siap terima order.'
    },
    {
      icon: 'pen-tool',
      title: 'Branding & Copywriting',
      desc: 'Logo, brand guideline, copy yang converting. Bukan cuma cantik.'
    },
  ],

  processes: [
    { num: '01', title: 'Discovery Call', duration: '30 menit', desc: 'Kita bedah bisnis kamu, target pasar, dan target jualan.' },
    { num: '02', title: 'Design & Approval', duration: '3 hari', desc: 'Mockup dikirim, kamu review, kita revisi sampai cocok.' },
    { num: '03', title: 'Development', duration: '7 hari', desc: 'Website + produk digital dibangun. Progress update harian.' },
    { num: '04', title: 'Launch + Training', duration: '1 hari', desc: 'Go live + training cara update konten dan jualan mandiri.' },
  ],

  portfolios: [
    { name: 'Sari Bakery', cat: 'Toko Online', result: '+150% conversion', img: 'sari-bakery-web' },
    { name: 'Coach Bagus', cat: 'Course Website', result: 'Launch 10 hari', img: 'coach-bagus-web' },
    { name: 'Notion Templates Co', cat: 'Produk Digital', result: '500+ download', img: 'notion-co-web' },
    { name: 'Kopi Senja', cat: 'Landing Page', result: '+320% leads', img: 'kopi-senja-web' },
    { name: 'Studio Yogya', cat: 'Portfolio', result: '8 proyek baru', img: 'studio-yogya-web' },
    { name: 'Rina Make Up', cat: 'Booking Web', result: 'Booking penuh 2 bulan', img: 'rina-mu-web' },
  ],

  pricings: [
    {
      name: 'Starter Web',
      desc: 'Untuk yang baru mulai',
      price: 'Rp 2,5jt',
      period: 'one-time payment',
      features: [
        'Landing page 1 page',
        'Mobile responsive',
        'Hosting 1 tahun',
        'WA button',
        'Revisi 2x',
        'Konsultasi 2 minggu'
      ],
      cta: 'Pilih Paket Ini',
      popular: false
    },
    {
      name: 'Pro Digital',
      desc: 'Website + produk digital',
      price: 'Rp 5,5jt',
      period: 'one-time payment',
      features: [
        'Website 3-5 page',
        '1 produk digital (e-book/template)',
        'Email capture + auto-reply',
        'Payment gateway',
        'Revisi 2x',
        'Konsultasi 1 bulan'
      ],
      cta: 'Pilih Paket Ini',
      popular: true
    },
    {
      name: 'Scale Up',
      desc: 'Untuk yang serius scale',
      price: 'Rp 12jt',
      period: 'one-time payment',
      features: [
        'Full website multi-page',
        '3 produk digital',
        'Automation email marketing',
        'SEO dasar + blog setup',
        'Revisi 3x',
        'Konsultasi 3 bulan'
      ],
      cta: 'Pilih Paket Ini',
      popular: false
    },
  ],

  testimonials: [
    {
      name: 'Andi Pratama',
      role: 'Coach Public Speaking',
      text: 'Omzet naik 3x setelah launch. Website-nya bikin kredibel banget, klien langsung percaya sejak buka halaman.',
      img: 'https://picsum.photos/seed/andi-pratama/120/120',
      result: 'Omzet naik 3x'
    },
    {
      name: 'Sari Wulandari',
      role: 'Owner Sari Bakery',
      text: 'Pesanan online langsung masuk 3 hari setelah launch. Investasi paling worth it tahun ini buat bisnis aku.',
      img: 'https://picsum.photos/seed/sari-wulandari/120/120',
      result: '+150% conversion'
    },
    {
      name: 'Bima Sakti',
      role: 'Notion Creator',
      text: 'Template Notion aku yang tadinya sepi, sekarang konsisten laku. Mereka paham banget positioning produk digital.',
      img: 'https://picsum.photos/seed/bima-sakti/120/120',
      result: '500+ download'
    },
  ],

  faqs: [
    { q: 'Berapa lama pengerjaan?', a: 'Pengerjaan standar 7-14 hari kerja tergantung paket dan kompleksitas. Paket Starter biasanya 7 hari, Pro 10 hari, Scale Up 14 hari. Mulai dihitung setelah DP dan brief lengkap.' },
    { q: 'Revisi berapa kali?', a: 'Setiap paket include revisi 2x (untuk Scale Up 3x). Revisi mencakup perubahan desain, konten, dan layout. Revisi tambahan dikenakan biaya Rp 250rb per revisi mayor.' },
    { q: 'Bayar gimana?', a: 'DP 50% di awal untuk mulai pengerjaan, 50% pelunasan sebelum launch. Pembayaran via transfer bank (BCA, Mandiri) atau e-wallet (GoPay, OVO, DANA). Invoice resmi diberikan.' },
    { q: 'Ada garansi?', a: 'Ya. Garansi revisi 2x dalam 14 hari setelah launch. Jika ada bug teknis dari sisi kami, kami perbaiki gratis selama 30 hari pertama. Garansi tidak berlaku untuk perubahan konten dari pihak klien.' },
    { q: 'Bisa request fitur custom?', a: 'Bisa banget. Untuk fitur di luar paket (membership, advanced automation, custom dashboard, dll), kita bedah dulu kebutuhannya di Discovery Call, lalu kami kasih quote terpisah. Transparan, no hidden fee.' },
  ],
};

// ============ RENDER FUNCTIONS ============

function renderHeroAvatars() {
  document.getElementById('heroAvatars').innerHTML = data.heroAvatars
    .map(src => `<img src="${src}" alt="Klien" loading="lazy">`).join('');
}

function renderPainPoints() {
  document.getElementById('painGrid').innerHTML = data.painPoints.map((p, i) => `
    <div class="card fade-up" style="--delay:${i * 100}ms">
      <div class="card-icon"><i data-lucide="${p.icon}"></i></div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `).join('');
}

function renderServices() {
  document.getElementById('servicesGrid').innerHTML = data.services.map((s, i) => `
    <div class="card fade-up" style="--delay:${i * 100}ms">
      <div class="card-icon"><i data-lucide="${s.icon}"></i></div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');
}

function renderProcess() {
  document.getElementById('processTimeline').innerHTML = data.processes.map((p, i) => `
    <div class="process-step fade-up" style="--delay:${i * 120}ms">
      <div class="process-num">${p.num}</div>
      <div class="process-duration">${p.duration}</div>
      <h3 class="process-title">${p.title}</h3>
      <p class="process-desc">${p.desc}</p>
    </div>
  `).join('');
}

function renderPortfolio() {
  document.getElementById('portfolioGrid').innerHTML = data.portfolios.map((p, i) => `
    <div class="portfolio-card fade-up" style="--delay:${i * 80}ms">
      <div class="portfolio-img">
        <img src="https://picsum.photos/seed/${p.img}/600/450" alt="${p.name}" loading="lazy">
        <div class="portfolio-result"><i data-lucide="trending-up"></i>${p.result}</div>
      </div>
      <div class="portfolio-body">
        <div class="portfolio-cat">${p.cat}</div>
        <div class="portfolio-name">${p.name}</div>
      </div>
    </div>
  `).join('');
}

function renderPricing() {
  document.getElementById('pricingGrid').innerHTML = data.pricings.map((p, i) => `
    <div class="pricing-card ${p.popular ? 'popular' : ''} fade-up" style="--delay:${i * 100}ms">
      ${p.popular ? '<div class="popular-badge">Paling Populer</div>' : ''}
      <div class="pricing-name">${p.name}</div>
      <div class="pricing-desc">${p.desc}</div>
      <div class="pricing-price">${p.price}</div>
      <div class="pricing-period">${p.period}</div>
      <ul class="pricing-features">
        ${p.features.map(f => `<li><i data-lucide="check"></i><span>${f}</span></li>`).join('')}
      </ul>
      <a href="#kontak" class="btn-primary">${p.cta}</a>
    </div>
  `).join('');
}

function renderTestimonials() {
  document.getElementById('testimonialGrid').innerHTML = data.testimonials.map((t, i) => `
    <div class="testimonial-card fade-up" style="--delay:${i * 100}ms">
      <div class="testimonial-result"><i data-lucide="trending-up"></i>${t.result}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <img src="${t.img}" alt="${t.name}" loading="lazy">
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFAQ() {
  document.getElementById('faqList').innerHTML = data.faqs.map((f, i) => `
    <div class="faq-item fade-up" style="--delay:${i * 60}ms">
      <button class="faq-question" aria-expanded="false">
        <span>${f.q}</span>
        <i data-lucide="plus"></i>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">${f.a}</div>
      </div>
    </div>
  `).join('');
}

// ============ INTERACTIONS ============

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      document.getElementById('mobileMenu').classList.remove('open');
    });
  });
}

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    const icon = toggle.querySelector('i');
    if (menu.classList.contains('open')) {
      icon.setAttribute('data-lucide', 'x');
    } else {
      icon.setAttribute('data-lucide', 'menu');
    }
    refreshIcons();
  });
}

function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('active');
        other.querySelector('.faq-answer').style.maxHeight = '0';
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => {
    if (!el.closest('#hero')) {
      observer.observe(el);
    }
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const wa = document.getElementById('wa').value;
    const pesan = document.getElementById('pesan').value;

    const subject = `Konsultasi Gratis - ${nama}`;
    const body = `Halo Konsul Digital Indonesia,%0D%0A%0D%0ANama: ${nama}%0D%0AEmail: ${email}%0D%0AWhatsApp: ${wa}%0D%0A%0D%0APesan:%0D%0A${pesan}`;
    const mailto = `mailto:halo@konsuldigital.id?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailto;

    const btn = form.querySelector('.form-submit');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = 'Membuka email... <i data-lucide="mail"></i>';
    btn.disabled = true;
    refreshIcons();
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.disabled = false;
      refreshIcons();
      form.reset();
    }, 2500);
  });
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', () => {
  renderHeroAvatars();
  renderPainPoints();
  renderServices();
  renderProcess();
  renderPortfolio();
  renderPricing();
  renderTestimonials();
  renderFAQ();

  refreshIcons();
  setTimeout(refreshIcons, 100);

  initSmoothScroll();
  initNavbarScroll();
  initMobileMenu();
  initFAQ();
  initScrollAnimations();
  initContactForm();
});
