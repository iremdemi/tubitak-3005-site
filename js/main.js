const dict = {
  tr: {
    menuAnaSayfa: "Ana Sayfa", menuProje: "Kurumsal", menuBulgular: "Bulgular", menuYayinlar: "Yayınlar", menuEkip: "Araştırma Ekibimiz", menuIletisim: "İletişim",
    heroTitle: "İhracat Teşviklerinin Dış Ticaret Girişimciliği Perspektifiyle Revize Edilmesine Yönelik Politika Önerileri",
    heroDesc: "TR42 Doğu Marmara Bölgesi'ndeki ihracatçı firmaların katılımıyla yürütülen kapsamlı bir saha araştırmasının bulguları, somut politika önerilerine dönüşüyor.",
    heroBtn: "Daha Fazla Bilgi Al", sponsorTitle: "Yürütücü ve Destekleyen Kurumlar",
    findingsTitle: "Araştırmadan Bulgular", findingsMore: "Tümünü Gör &gt;",
    f1Title: "Finansal Belirleyiciler Dış Ticarette İlk Sırada Yer Alıyor",
    f2Title: "Teşviklerde Yeni Paradigma", f3Title: "TR42 Bölgesi Sanayi Hinterlandı", f4Title: "Ticari Milliyetçilik: Katma Değer Kimin?",
    teamTitle: "Araştırma Ekibi", readMoreTxt: "İncele &gt;",
    statFirma: "Saha Araştırmasına Katılan<br>İhracatçı Firma", statIl: "Stratejik İl<br>(Kocaeli, Sakarya, Düzce, Bolu, Yalova)", statSektor: "Odak<br>Sektör", statAy: "Ay<br>Proje Süresi",
    footDesc: "TR42 Doğu Marmara Bölgesi'ndeki dış ticaret girişimciliğinin geliştirilmesi ve kamu politikalarının revize edilmesine yönelik bağımsız araştırma platformudur.",
    footKurumsal: "Kurumsal", footIcerik: "İçerikler", footIletisim: "İletişim", footKurumAdi: "Sakarya Üniversitesi", footProgram: "TÜBİTAK 3005 Destekli", footCopy: "Copyright &copy; 2026 DTG Research Portal. Tüm hakları saklıdır."
  },
  en: {
    menuAnaSayfa: "Home", menuProje: "Corporate", menuBulgular: "Findings", menuYayinlar: "Publications", menuEkip: "Research Team", menuIletisim: "Contact",
    heroTitle: "Policy Recommendations for Revising Export Incentives from a Foreign Trade Entrepreneurship Perspective",
    heroDesc: "Findings from a comprehensive field study conducted with exporting firms in the TR42 East Marmara Region are transformed into concrete policy recommendations.",
    heroBtn: "Learn More", sponsorTitle: "Project Stakeholders",
    findingsTitle: "Research Findings", findingsMore: "View All &gt;",
    f1Title: "Financial Determinants Rank First in Foreign Trade",
    f2Title: "New Paradigm in Incentives", f3Title: "TR42 Region Industrial Hinterland", f4Title: "Commercial Nationalism: Who Owns the Value Added?",
    teamTitle: "Research Team", readMoreTxt: "Read More &gt;",
    statFirma: "Exporting Firms<br>Included in Field Research", statIl: "Strategic Provinces<br>(Kocaeli, Sakarya, Düzce, Bolu, Yalova)", statSektor: "Focus<br>Sectors", statAy: "Months<br>Project Duration",
    footDesc: "Independent research platform dedicated to developing foreign trade entrepreneurship and revising public policies in the TR42 East Marmara Region.",
    footKurumsal: "Corporate", footIcerik: "Contents", footIletisim: "Contact", footKurumAdi: "Sakarya University", footProgram: "TÜBİTAK 3005 Supported", footCopy: "Copyright &copy; 2026 DTG Research Portal. All rights reserved."
  }
};

let currentLang = 'tr';

function translateHTML() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[currentLang][key]) {
      el.innerHTML = dict[currentLang][key];
    }
  });
}

let currentVideoIndex = 0;
let autoAdvanceTimer = null;

document.addEventListener("DOMContentLoaded", () => {
  translateHTML();

  // YENİ DÜNYA İKONLU DİL DEĞİŞTİRİCİ
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'tr' ? 'en' : 'tr';
      translateHTML();
    });
  }

  // YAPIŞKAN (STICKY) HEADER MANTIĞI
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // SCROLL REVEAL (AŞAĞI KAYDIRDIKÇA BELİREN ÖĞELER)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  
  revealElements.forEach(el => revealObserver.observe(el));

  // MOBİL MENÜ MANTIĞI
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  function openMobileNav() {
    if (mobileNav) mobileNav.classList.add('is-open');
    if (mobileNavOverlay) mobileNavOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileNav() {
    if (mobileNav) mobileNav.classList.remove('is-open');
    if (mobileNavOverlay) mobileNavOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.contains('is-open') ? closeMobileNav() : openMobileNav();
    });
  }
  if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileNav);
  document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', closeMobileNav));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileNav(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 1024) closeMobileNav(); });

  // VİDEO OYNATMA MANTIĞI (DEĞİŞTİRİLMEDİ)
  const heroVideos = Array.from(document.querySelectorAll('.hero-video'));

  function ensureLoaded(video) {
    if (!video) return;
    const source = video.querySelector('source');
    if (source && !source.src) {
      source.src = source.getAttribute('data-src');
      video.preload = 'auto';
      video.load();
    }
  }

  window.playVideo = function(index, isAuto) {
  if(!heroVideos.length) return;

  currentVideoIndex = index;

  const targetVideo = heroVideos[index];
  ensureLoaded(targetVideo);

  const tryPlay = () => {
    const playPromise = targetVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => { });
    }
  };
  if (targetVideo.readyState >= 2) {
    tryPlay();
  } else {
    targetVideo.addEventListener('loadeddata', tryPlay, { once: true });
  }

  heroVideos.forEach(v => v.classList.remove('active'));
  targetVideo.classList.add('active');

  heroVideos.forEach((v, i) => {
    if (i !== index && i !== (index + 1) % heroVideos.length) {
      v.pause();
    }
  });

  const nextIndex = (index + 1) % heroVideos.length;
  ensureLoaded(heroVideos[nextIndex]);

  startAutoAdvance();
};

function waitUntilReady(video, maxWaitMs, cb) {
  const start = Date.now();
  (function check() {
    if (video.readyState >= 3 || Date.now() - start > maxWaitMs) {
      cb();
    } else {
      setTimeout(check, 250);
    }
  })();
}

function startAutoAdvance() {
  if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
  autoAdvanceTimer = setTimeout(() => {
    const nextIndex = (currentVideoIndex + 1) % heroVideos.length;
    ensureLoaded(heroVideos[nextIndex]);
    waitUntilReady(heroVideos[nextIndex], 4000, () => {
      window.playVideo(nextIndex, true);
    });
  }, 9000);
}
if (heroVideos.length) {
  setTimeout(() => {
    ensureLoaded(heroVideos[1]);
    if (heroVideos[1]) {
      heroVideos[1].addEventListener('loadeddata', () => {
        const p = heroVideos[1].play();
        if (p !== undefined) p.catch(() => {});
      }, { once: true });
    }
  }, 1200);
  startAutoAdvance();

  function unlockVideosOnFirstTouch() {
    heroVideos.forEach(v => {
      ensureLoaded(v);
      const p = v.play();
      if (p !== undefined) p.catch(() => {});
    });
    document.removeEventListener('touchstart', unlockVideosOnFirstTouch);
    document.removeEventListener('click', unlockVideosOnFirstTouch);
  }
  document.addEventListener('touchstart', unlockVideosOnFirstTouch, { once: true, passive: true });
  document.addEventListener('click', unlockVideosOnFirstTouch, { once: true });
}

  const anonSVG = `<svg class="anon-icon" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;

  const ekipData = [
    { isim: "Prof. Dr. Ahmet Yağmur Ersoy", unvan: "Yürütücü", img: "img/WhatsApp Image 2026-08-05 at 18.49.44.jpeg" },
    { isim: "Doç. Dr. Caner Erden", unvan: "Araştırmacı", img: "img/caner erden.jpeg" },
    { isim: "Doç. Dr. Metin Saygılı", unvan: "Araştırmacı", img: "img/WhatsApp Image 2026-08-05 at 18.51.33.jpeg" },
    { isim: "Dr. Öğr. Üyesi Çağdaş Ateş", unvan: "Araştırmacı", img: "img/WhatsApp Image 2026-08-05 at 18.52.02.jpeg" },
    { isim: "Öğr. Gör. Dr. Semanur Yalçın", unvan: "Araştırmacı", img: "img/WhatsApp Image 2026-08-05 at 18.52.24.jpeg" },
    { isim: "Öğr. Gör. Bilal Torkul", unvan: "Doktora Bursiyeri", img: "img/bilal torkul.jpeg" },
    { isim: "Dr. Ömer Alperen Onay", unvan: "Doktora Sonrası Bursiyeri", img: "img/ömer alperen onay.jpg" },
    { isim: "Furkan Coşgun", unvan: "Yüksek Lisans Bursiyeri", img: "img/furkan coşgun.jpeg" }
  ];

  const track = document.getElementById('teamTrack');
  if(track) {
    let teamHTML = '';
    ekipData.forEach(k => {
      let imageElement = k.img ? `<img src="${k.img}" alt="${k.isim}" class="real-photo">` : anonSVG;
      teamHTML += `
        <div class="team-member">
          <div class="img-wrapper">${imageElement}</div>
          <div class="team-info"><h4>${k.isim}</h4><span>${k.unvan}</span></div>
        </div>`;
    });
    track.innerHTML = teamHTML + teamHTML;
  }
});
