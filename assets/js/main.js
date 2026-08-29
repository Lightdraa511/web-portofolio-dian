/**
 * NEOBRUTALISM ENGINE — DIAN ARDIANSAH
 * Powered by GSAP 3.12.5 & ScrollTrigger
 * 1. Project Cards Rendering with Top Screenshot Carousel
 * 2. GSAP Entrance & Scroll Animations
 * 3. Interactive Modal with GSAP Bounce
 * 4. WhatsApp Direct Message Dispatch
 */

// 1. REAL PROJECTS DATA
const projectsData = {
  'kknm-pelaksanaan': {
    id: 'kknm-pelaksanaan',
    number: '01',
    category: 'ACADEMIC WEB SYSTEM',
    title: 'Aplikasi Pelaksanaan KKNM Terintegrasi via REST API',
    tech: ['Laravel', 'MySQL', 'REST API', 'Filament', 'DomPDF'],
    description: 'Aplikasi web sistem pelaksanaan KKNM multi-role (Mahasiswa, Dosen Pembimbing Lapangan, Koordinator Program, dan Administrator) — terintegrasi via REST API dari sistem pendaftaran, pencatatan logbook harian individu & kelompok, verifikasi laporan akhir & naskah artikel ilmiah oleh DPL dan Koordinator Program, hingga portal penilaian akhir otomatis berformat PDF.',
    features: [
      'Autentikasi Multi-Role 4 Pengguna: Mahasiswa, DPL, Koordinator Program & Administrator',
      'Sinkronisasi Data Kelompok & Mahasiswa Real-Time via REST API dengan Sistem Pendaftaran',
      'Pencatatan Logbook Individu Harian (Input Kegiatan, Uraian Tugas & Jam Efektif)',
      'Verifikasi Logbook Individu Bertingkat oleh Ketua Kelompok & Dosen Pembimbing Lapangan (DPL)',
      'Pencatatan Logbook Kelompok Harian dengan Pembagian PIC Lapangan & Uraian Kerja',
      'Verifikasi & Review Logbook Kelompok secara Terpadu oleh DPL',
      'Modul Pengajuan Laporan Akhir & Verifikasi Ganda oleh DPL serta Koordinator Program',
      'Modul Pengajuan Naskah Artikel Ilmiah & Verifikasi Ganda oleh DPL serta Koordinator Program',
      'Portal Penilaian Mahasiswa oleh DPL & Ekspor Rekapitulasi Nilai Otomatis ke Dokumen PDF (DomPDF)'
    ],
    screenshots: [
      { title: 'Landing Page & Portal Pelaksanaan KKNM UNLA', badge: '01. LANDING PAGE', image: 'assets/images/projects/pelaksanaan-kknm/landing-page.png' },
      { title: 'Portal Autentikasi 4 Role (Mahasiswa, DPL, Program, Admin)', badge: '02. MULTI-ROLE LOGIN', image: 'assets/images/projects/pelaksanaan-kknm/multi-role-login.png' },
      { title: 'Modul Input Kegiatan Logbook Harian Individu', badge: '03. LOGBOOK INDIVIDU', image: 'assets/images/projects/pelaksanaan-kknm/logbook-individu.png' },
      { title: 'Panel Verifikasi Logbook Individu (Ketua & DPL)', badge: '04. VERIFIKASI INDIVIDU', image: 'assets/images/projects/pelaksanaan-kknm/verifikasi-logbook-individu.png' },
      { title: 'Modul Input Kegiatan Logbook Harian Kelompok', badge: '05. LOGBOOK KELOMPOK', image: 'assets/images/projects/pelaksanaan-kknm/logbook-kelompok.png' },
      { title: 'Panel Verifikasi Logbook Kelompok oleh DPL', badge: '06. VERIFIKASI KELOMPOK', image: 'assets/images/projects/pelaksanaan-kknm/verifikasi-logbook-kelompok.png' },
      { title: 'Modul Laporan Akhir (Verifikasi DPL & Koordinator Program)', badge: '07. LAPORAN AKHIR', image: 'assets/images/projects/pelaksanaan-kknm/laporan-akhir.png' },
      { title: 'Modul Artikel Ilmiah (Verifikasi DPL & Koordinator Program)', badge: '08. ARTIKEL ILMIAH', image: 'assets/images/projects/pelaksanaan-kknm/artikel-ilmiah.png' },
      { title: 'Portal Penilaian & Input Nilai Akhir Mahasiswa oleh DPL', badge: '09. PENILAIAN DPL', image: 'assets/images/projects/pelaksanaan-kknm/penilaian-dpl.png' }
    ]
  },
  'kknm-pendaftaran': {
    id: 'kknm-pendaftaran',
    number: '02',
    category: 'KERJA PRAKTIK',
    title: 'Aplikasi Pendaftaran KKNM Berbasis Web',
    tech: ['Laravel', 'MySQL', 'Filament', 'Bootstrap 5', 'Laravel Breeze'],
    description: 'Platform pendaftaran KKNM online yang menggantikan alur manual via WhatsApp & Google Form. Dilengkapi validasi NIM real-time, manajemen kuota lokasi dinamis, alur upload dokumen persyaratan terstruktur, dan admin panel komprehensif untuk monitoring seluruh proses pendaftaran mahasiswa.',
    features: [
      'Portal Registrasi Akun & Validasi NIM Otomatis (Pre-registration Mahasiswa)',
      'Modul Pembayaran Biaya KKNM, Rincian Tagihan & Upload Bukti Transfer',
      'Pemilihan Lokasi KKNM dengan Sistem Kuota Dinamis & Real-time Availability',
      'Manajemen Distribusi Alokasi Kuota Wilayah Berdasarkan Program Studi & Fakultas',
      'Formulir Pendaftaran Terpadu, Ukuran Kaos & Upload Dokumen Persyaratan (KRS/Surat Izin)',
      'Admin Panel Filament: Monitoring Status Pendaftar, Approval Pembayaran & Verifikasi Berkas',
      'Rekapitulasi Data Peserta KKNM Terpusat & Ekspor Laporan Otomatis'
    ],
    screenshots: [
      { title: 'Landing Page & Informasi Jadwal Pendaftaran', badge: '01. LANDING PAGE', image: 'assets/images/projects/pendaftaran-kknm/landing-page.png' },
      { title: 'Registrasi Akun & Validasi NIM Otomatis', badge: '02. REGISTRASI & NIM', image: 'assets/images/projects/pendaftaran-kknm/registrasi-nim.png' },
      { title: 'Modul Pembayaran & Upload Bukti Transfer', badge: '03. PEMBAYARAN', image: 'assets/images/projects/pendaftaran-kknm/pembayaran.png' },
      { title: 'Katalog Pemilihan Lokasi KKNM & Kuota Wilayah', badge: '04. PILIH LOKASI', image: 'assets/images/projects/pendaftaran-kknm/pilih-lokasi.png' },
      { title: 'Detail Alokasi Kuota per Program Studi', badge: '05. KUOTA PRODI', image: 'assets/images/projects/pendaftaran-kknm/detail-kuota-lokasi.png' },
      { title: 'Formulir Pendaftaran Lengkap & Upload Berkas', badge: '06. FORM PENDAFTARAN', image: 'assets/images/projects/pendaftaran-kknm/form-pendaftaran.png' },
      { title: 'Dashboard Monitoring Admin Panel (Filament)', badge: '07. ADMIN MONITORING', image: 'assets/images/projects/pendaftaran-kknm/admin-dashboard.png' }
    ]
  },
  'bkad-tangsel': {
    id: 'bkad-tangsel',
    number: '03',
    category: 'GOVERNMENT SYSTEM',
    title: 'SITEPAD — Monitoring Aset Daerah Berbasis LBS (BKAD Tangsel)',
    tech: ['Laravel REST API', 'Flutter', 'Geolocator', 'LBS / GIS Mapping', 'Excel / CSV / PDF Export'],
    description: 'Aplikasi mobile sistem monitoring aset daerah SITEPAD untuk Badan Keuangan dan Aset Daerah (BKAD) Kota Tangerang Selatan — terintegrasi dengan backend REST API Laravel, pemetaan geolokasi titik koordinat real-time (Location-Based Services), inventarisasi data fisik aset, serta modul ekspor laporan multi-format (Excel, CSV, dan PDF).',
    features: [
      'Autentikasi & Manajemen Sesi Operator SITEPAD BKAD Kota Tangerang Selatan',
      'Dashboard Utama: Monitoring Aktivitas Terbaru & Pemetaan Ringkas Titik Aset',
      'Pemetaan Sebaran Lokasi Aset Real-Time (LBS dengan Filter Kecamatan & Kelurahan)',
      'Katalog Inventarisasi Data Aset dengan Filter Luas Wilayah & Identitas SKPD',
      'Modul Ekspor Laporan Rekapitulasi Data Aset Terpadu (Format Excel, CSV, dan PDF)',
      'Backend REST API Laravel dengan Endpoint Terenkripsi & Sinkronisasi Mobile Cepat',
      'Manajemen Profil Operator Lapangan & Pengaturan Keamanan Akun Terintegrasi'
    ],
    screenshots: [
      { title: 'Dashboard Utama & Aktivitas Monitoring Aset Terkini', badge: '01. DASHBOARD', image: 'assets/images/projects/lbs/home-dashboard.jpg' },
      { title: 'Peta Sebaran Lokasi Aset Berbasis LBS & Filter Wilayah', badge: '02. PETA LBS', image: 'assets/images/projects/lbs/peta-sebaran-lbs.jpg' },
      { title: 'Daftar Inventaris Aset & Modul Ekspor Data (Excel/CSV/PDF)', badge: '03. DAFTAR ASET & EKSPOR', image: 'assets/images/projects/lbs/daftar-aset-export.jpg' },
      { title: 'Portal Login & Autentikasi Operator SITEPAD BKAD', badge: '04. LOGIN SITEPAD', image: 'assets/images/projects/lbs/login.jpg' },
      { title: 'Manajemen Profil Operator & Keamanan Akun', badge: '05. PROFIL OPERATOR', image: 'assets/images/projects/lbs/profil-operator.jpg' }
    ]
  }
};

// 2. RENDER TECH STACK MARQUEE (ONLY ACTUAL USED TECH & FIXED CSS3 LOGO)
function renderTechMarquee() {
  const brand = (slug, color) => `https://cdn.simpleicons.org/${slug}${color ? '/' + color : ''}`;

  const LOGOS_ROW_1 = [
    { name: 'Laravel', role: 'Backend Framework', icon: brand('laravel', 'ff2d20') },
    { name: 'React', role: 'Frontend Library', icon: brand('react', '61dafb') },
    { name: 'PHP 8.x', role: 'Backend Core', icon: brand('php', '777bb4') },
    { name: 'MySQL', role: 'Relational Database', icon: brand('mysql', '00758f') },
    { name: 'REST API', role: 'API Architecture', icon: brand('json', 'ffffff') },
    { name: 'Tailwind CSS', role: 'Utility-First CSS', icon: brand('tailwindcss', '38bdf8') }
  ];

  const LOGOS_ROW_2 = [
    { name: 'JavaScript', role: 'ES6+ Language', icon: brand('javascript', 'f7df1e') },
    { name: 'HTML5', role: 'Semantic Markup', icon: brand('html5', 'e34f26') },
    { name: 'CSS3', role: 'Modern Styling', icon: brand('css', '1572b6') },
    { name: 'Git', role: 'Version Control', icon: brand('git', 'f05032') },
    { name: 'GitHub', role: 'Repo & Collab', icon: brand('github', 'ffffff') },
    { name: 'Bootstrap', role: 'UI Framework', icon: brand('bootstrap', '7952b3') }
  ];

  const tile = (item) => `
    <div class="tech-item-card">
      <div class="tech-logo-svg">
        <img src="${item.icon}" alt="${item.name}" loading="lazy" onerror="this.onerror=null; this.src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg';">
      </div>
      <div class="tech-meta">
        <strong>${item.name}</strong>
        <span>${item.role}</span>
      </div>
    </div>`;

  const track1 = [...LOGOS_ROW_1, ...LOGOS_ROW_1, ...LOGOS_ROW_1, ...LOGOS_ROW_1];
  const track2 = [...LOGOS_ROW_2, ...LOGOS_ROW_2, ...LOGOS_ROW_2, ...LOGOS_ROW_2];

  const lane1 = document.querySelector('[data-tech-row="1"]');
  const lane2 = document.querySelector('[data-tech-row="2"]');

  if (lane1) {
    lane1.innerHTML = `<div class="tech-marquee-track">${track1.map(tile).join('')}</div>`;
  }
  if (lane2) {
    lane2.innerHTML = `<div class="tech-marquee-track">${track2.map(tile).join('')}</div>`;
  }
}

// 3. RENDER PROJECTS STACK (SINGLE PRIMARY SCREEN PREVIEW + DETAILS BUTTON UNDER TOOLS)
function renderProjectCards() {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  container.innerHTML = Object.values(projectsData).map((p) => {
    const mainScreen = p.screenshots[0] || { title: 'Primary Module Preview', badge: 'MAIN SYSTEM' };

    return `
    <div class="project-neo-card gsap-reveal">
      
      <!-- Card Header -->
      <div class="project-card-header">
        <div class="project-id-title">
          <span class="project-num-badge">${p.number}</span>
          <div class="project-headline-box">
            <span class="project-category-pill">${p.category}</span>
            <h3 class="project-name-h3" onclick="openProjectModal('${p.id}')" title="Klik untuk lihat detail & screenshot">${p.title}</h3>
          </div>
        </div>
      </div>

      <!-- Single Primary Mockup Preview (Clickable) -->
      <div class="project-primary-preview" onclick="openProjectModal('${p.id}')" title="Klik untuk membuka detail & galeri preview">

        ${mainScreen.image ? `
          <div class="mock-screen-image-container">
            <img src="${mainScreen.image}" alt="${mainScreen.title}" class="mock-screen-real-img" />
            <div class="mock-image-overlay">
              <div class="mock-module-headline">${mainScreen.title}</div>
              <span class="mock-click-hint"><i data-lucide="zoom-in"></i> Klik untuk detail & galeri &rarr;</span>
            </div>
          </div>
        ` : `
          <div class="mock-screen-stage">
            <div class="mock-module-headline">${mainScreen.title}</div>
            <span class="mock-click-hint"><i data-lucide="zoom-in"></i> Klik untuk preview screenshot & detail lengkap &rarr;</span>
          </div>
        `}
      </div>

      <!-- Card Footer: Description, Tools & Action Button Under Tools -->
      <div class="project-card-footer">
        <p class="project-desc-snippet">${p.description}</p>
        
        <div class="project-tags-row">
          ${p.tech.map((t) => `<span class="project-tag-item">${t}</span>`).join('')}
        </div>

        <div class="project-actions-row">
          <button onclick="openProjectModal('${p.id}')" class="neo-btn btn-neo-yellow" style="padding: 0.65rem 1.4rem; font-size: 0.85rem;">
            <i data-lucide="layers"></i>
            <span>LIHAT DETAIL &amp; SS</span>
          </button>
        </div>
      </div>

    </div>
  `;
  }).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

// 4. MODAL TAB SWITCHER
function switchModalTab(tabName) {
  // Update Tab buttons
  document.querySelectorAll('.modal-tab-btn').forEach((btn) => {
    if (btn.getAttribute('data-tab') === tabName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update Tab panes
  const panes = {
    overview: document.getElementById('tabOverview'),
    features: document.getElementById('tabFeatures'),
    gallery: document.getElementById('tabGallery')
  };

  Object.keys(panes).forEach((key) => {
    if (panes[key]) {
      if (key === tabName) {
        panes[key].classList.add('active');
      } else {
        panes[key].classList.remove('active');
      }
    }
  });

  if (window.lucide) {
    lucide.createIcons();
  }
}

// 5. GSAP ANIMATIONS
function initGSAP() {
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Hero Entrance
  const heroTL = gsap.timeline();
  heroTL
    .from('#navbar', { y: -60, opacity: 0, duration: 0.6, ease: 'power2.out' })
    .from('#heroBadgeCluster', { x: -50, opacity: 0, duration: 0.7, ease: 'back.out(1.4)' }, '-=0.3')
    .from('#travelingPortrait', { scale: 0.85, opacity: 0, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.5');

  // Scroll Reveals
  gsap.utils.toArray('.gsap-reveal').forEach((elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: 'top 88%',
        toggleActions: 'play none none reset'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });
  });

  // Skill Bar Grow + Percentage Counter Animation
  document.querySelectorAll('.skill-bar-fill[data-target]').forEach((bar, i) => {
    const target = parseFloat(bar.getAttribute('data-target'));
    const item = bar.closest('.skill-level-item');
    const counter = item ? item.querySelector('.skill-pct-counter') : null;
    const obj = { val: 0 };

    // Reset to initial state
    gsap.set(bar, { width: '0%' });
    if (counter) counter.textContent = '0';

    ScrollTrigger.create({
      trigger: item || bar,
      start: 'top 90%',
      onEnter: () => {
        // Animate bar width
        gsap.fromTo(bar,
          { width: '0%' },
          { width: target + '%', duration: 1.2, delay: i * 0.08, ease: 'power2.out' }
        );
        // Animate counter number
        if (counter) {
          obj.val = 0;
          gsap.to(obj, {
            val: target,
            duration: 1.2,
            delay: i * 0.08,
            ease: 'power2.out',
            onUpdate: () => { counter.textContent = Math.round(obj.val); },
            onComplete: () => { counter.textContent = target; }
          });
        }
      },
      onLeaveBack: () => {
        gsap.killTweensOf(bar);
        if (counter) gsap.killTweensOf(obj);
        gsap.set(bar, { width: '0%' });
        if (counter) { obj.val = 0; counter.textContent = '0'; }
      }
    });
  });

  // Traveling Photo Transition: Smoothly moves photo from Hero to About Me on scroll
  const photo = document.getElementById('travelingPortrait');
  const heroSlot = document.getElementById('heroPhotoSlot');
  const aboutDesktopSlot = document.getElementById('aboutDesktopPhotoSlot');
  const aboutMobileSlot = document.getElementById('aboutMobilePhotoSlot');

  if (photo && heroSlot && (aboutDesktopSlot || aboutMobileSlot)) {
    function setupTravelingPhoto() {
      const isDesktop = window.innerWidth > 1024;

      // Kill all existing ScrollTriggers and tweens on the photo
      ScrollTrigger.getAll().forEach(st => {
        if (st.animation && st.animation.targets && st.animation.targets().includes(photo)) {
          st.kill();
        }
      });
      gsap.killTweensOf(photo);
      gsap.set(photo, { clearProps: 'all' });

      // Only perform cross-section traveling animation on desktop screens
      if (!isDesktop || !aboutDesktopSlot) {
        return;
      }

      const heroRect = heroSlot.getBoundingClientRect();
      const targetRect = aboutDesktopSlot.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;

      const deltaX = targetRect.left - heroRect.left;
      const deltaY = (targetRect.top + scrollY) - (heroRect.top + scrollY);

      gsap.to(photo, {
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          endTrigger: '#about',
          end: 'top 20%',
          scrub: 0.3,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          onRefreshInit: () => {
            gsap.set(photo, { clearProps: 'transform,opacity' });
          }
        },
        x: deltaX,
        y: deltaY,
        scale: 1,
        transformOrigin: 'top left',
        ease: 'none'
      });
    }

    requestAnimationFrame(() => {
      setupTravelingPhoto();
      ScrollTrigger.refresh();
    });

    window.addEventListener('resize', () => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
      setupTravelingPhoto();
    });
  }
}

// 6. INTERACTIVE MODAL LOGIC
function openProjectModal(projectId) {
  const data = projectsData[projectId];
  if (!data) return;

  const modal = document.getElementById('projectModal');
  const modalWindow = document.getElementById('modalWindow');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalTechStack = document.getElementById('modalTechStack');
  const modalDescription = document.getElementById('modalDescription');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalGallery = document.getElementById('modalGallery');

  if (modalCategory) modalCategory.textContent = data.category;
  if (modalTitle) modalTitle.textContent = data.title;
  if (modalDescription) modalDescription.textContent = data.description;

  if (modalTechStack) {
    modalTechStack.innerHTML = data.tech
      .map((t) => `<span class="modal-tech-badge">${t}</span>`)
      .join('');
  }

  if (modalFeatures) {
    modalFeatures.innerHTML = data.features
      .map((f) => `
        <div class="modal-feature-item">
          <span class="modal-feature-check">✓</span>
          <span>${f}</span>
        </div>
      `)
      .join('');
  }

  if (modalGallery) {
    modalGallery.innerHTML = data.screenshots
      .map((s, idx) => `
        <div class="gallery-card-item" onclick="${s.image ? `openImageLightbox('${s.image}', '${s.title.replace(/'/g, "\\'")}')` : ''}" title="${s.image ? 'Klik untuk melihat preview penuh' : ''}">
          <div class="gallery-screen-mock ${s.image ? 'has-real-image' : ''}">
            ${s.image ? `
              <span class="gallery-mock-badge-overlay">${s.badge}</span>
              <img src="${s.image}" alt="${s.title}" class="gallery-real-img" />
            ` : `
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div style="display:flex; gap:4px;">
                  <span style="width:6px; height:6px; border-radius:50%; background:#ef4444;"></span>
                  <span style="width:6px; height:6px; border-radius:50%; background:#eab308;"></span>
                  <span style="width:6px; height:6px; border-radius:50%; background:#22c55e;"></span>
                </div>
                <span style="font-size:8px; font-weight:800; color:#fbbf24; background:#000; padding:1px 4px; border:1px solid #333;">${s.badge}</span>
              </div>
              <div style="font-family:monospace; font-size:10px; color:#22c55e; margin:auto;">UI MODULE #${idx + 1}</div>
            `}
          </div>
          <div class="gallery-label">
            <span>${s.title}</span>
          </div>
        </div>
      `)
      .join('');
  }

  // Reset to first tab
  switchModalTab('overview');

  // ✅ Clear any GSAP leftover styles from previous close animation
  if (typeof gsap !== 'undefined') {
    gsap.killTweensOf([modal, modalWindow]);
    gsap.set(modal, { clearProps: 'opacity,visibility' });
    gsap.set(modalWindow, { clearProps: 'opacity,scale,transform' });
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  if (typeof gsap !== 'undefined') {
    gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: 0.25 });
    gsap.fromTo(
      modalWindow,
      { scale: 0.8, y: 30 },
      { scale: 1, y: 0, duration: 0.35, ease: 'back.out(1.5)' }
    );
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  const modalWindow = document.getElementById('modalWindow');

  if (typeof gsap !== 'undefined') {
    gsap.killTweensOf([modal, modalWindow]);
    gsap.to(modalWindow, { scale: 0.85, opacity: 0, duration: 0.2, ease: 'power2.in' });
    gsap.to(modal, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        // ✅ Clear GSAP inline styles so next open starts fresh
        gsap.set(modal, { clearProps: 'opacity' });
        gsap.set(modalWindow, { clearProps: 'opacity,scale,transform' });
      }
    });
  } else {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// 7. IMAGE FULLSCREEN PREVIEW MODAL LOGIC
function openImageLightbox(imageSrc, imageTitle) {
  const lb = document.getElementById('imageLightbox');
  const lbWindow = document.getElementById('lightboxWindow');
  const lbImg = document.getElementById('lightboxImg');
  const lbTitle = document.getElementById('lightboxTitle');

  if (!lb || !lbImg) return;

  lbImg.src = imageSrc;
  if (lbTitle) lbTitle.textContent = imageTitle || 'Screenshot Preview';

  lb.classList.add('open');

  if (typeof gsap !== 'undefined') {
    gsap.killTweensOf([lb, lbWindow]);
    gsap.set(lb, { clearProps: 'opacity,visibility' });
    gsap.set(lbWindow, { clearProps: 'opacity,scale,transform' });

    gsap.fromTo(lb, { opacity: 0 }, { opacity: 1, duration: 0.2 });
    gsap.fromTo(
      lbWindow,
      { scale: 0.85, y: 20 },
      { scale: 1, y: 0, duration: 0.3, ease: 'back.out(1.4)' }
    );
  }

  if (window.lucide) {
    lucide.createIcons();
  }
}

function closeImageLightbox(e) {
  const lb = document.getElementById('imageLightbox');
  const lbWindow = document.getElementById('lightboxWindow');

  if (!lb) return;

  if (typeof gsap !== 'undefined') {
    gsap.killTweensOf([lb, lbWindow]);
    gsap.to(lbWindow, { scale: 0.9, opacity: 0, duration: 0.18, ease: 'power2.in' });
    gsap.to(lb, {
      opacity: 0,
      duration: 0.18,
      onComplete: () => {
        lb.classList.remove('open');
        gsap.set(lb, { clearProps: 'opacity' });
        gsap.set(lbWindow, { clearProps: 'opacity,scale,transform' });
      }
    });
  } else {
    lb.classList.remove('open');
  }
}

// 8. EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
  renderTechMarquee();
  renderProjectCards();
  initGSAP();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link-item, .nav-cta-btn').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Close modal on background click or ESC
  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const lb = document.getElementById('imageLightbox');
      if (lb && lb.classList.contains('open')) {
        closeImageLightbox();
      } else {
        closeProjectModal();
      }
    }
  });

  // WhatsApp Form Submit
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !message) {
        alert('Mohon lengkapi nama dan pesan Anda.');
        return;
      }

      const targetPhone = '6285156527740';
      const waText = `*Halo Dian Ardiansah (Inquiry Portofolio)*%0A%0A` +
                     `*Nama / Instansi:* ${encodeURIComponent(name)}%0A` +
                     `*Kontak:* ${encodeURIComponent(email)}%0A` +
                     `*Pesan / Kebutuhan:*%0A${encodeURIComponent(message)}`;

      const waUrl = `https://wa.me/${targetPhone}?text=${waText}`;
      window.open(waUrl, '_blank');
      contactForm.reset();
    });
  }

  if (window.lucide) {
    lucide.createIcons();
  }
});
