const dict = {
  tr: {
    menuAnaSayfa: "Ana Sayfa", menuProje: "Kurumsal", menuBulgular: "Bulgular", menuYayinlar: "Yayınlar", menuEkip: "Araştırma Ekibimiz", menuIletisim: "İletişim",
    heroTitle: "İHRACAT TEŞVİKLERİNİN DIŞ TİCARET GİRİŞİMCİLİĞİ PERSPEKTİFİYLE REVİZE EDİLMESİNE YÖNELİK POLİTİKA ÖNERİLERİ",
    heroDesc: "TR42 Doğu Marmara Bölgesi'ndeki ihracatçı firmaların katılımıyla yürütülen kapsamlı bir saha araştırmasının bulguları, somut politika önerilerine dönüşüyor.",
    heroBtn: "POLİTİKA ÖNERİLERİNİ GÖR &gt;", sponsorTitle: "YÜRÜTÜCÜ VE DESTEKLEYEN KURUMLAR",
    findingsTitle: "ARAŞTIRMADAN BULGULAR", findingsMore: "Tümünü Gör &gt;",
    f1Title: "FİNANSAL BELİRLEYİCİLER DIŞ TİCARETTE İLK SIRADA YER ALIYOR",
    f2Title: "TEŞVİKLERDE YENİ PARADİGMA", f3Title: "TR42 BÖLGESİ SANAYİ HİNTERLANDI", f4Title: "TİCARİ MİLLİYETÇİLİK: KATMA DEĞER KİMİN?",
    teamTitle: "ARAŞTIRMA EKİBİ", readMoreTxt: "İNCELE &gt;",
    statFirma: "Saha Araştırmasına Katılan<br>İhracatçı Firma", statIl: "Stratejik İl<br>(Kocaeli, Sakarya, Düzce, Bolu, Yalova)", statSektor: "Odak<br>Sektör", statAy: "Ay<br>Proje Süresi",
    footDesc: "TR42 Doğu Marmara Bölgesi'ndeki dış ticaret girişimciliğinin geliştirilmesi ve kamu politikalarının revize edilmesine yönelik bağımsız araştırma platformudur.",
    footKurumsal: "KURUMSAL", footIcerik: "İÇERİKLER", footIletisim: "İLETİŞİM", footKurumAdi: "Sakarya Üniversitesi", footProgram: "TÜBİTAK 3005 Destekli", footCopy: "Copyright &copy; 2026 DTG Research Portal. Tüm hakları saklıdır."
  },
  en: {
    menuAnaSayfa: "Home", menuProje: "Corporate", menuBulgular: "Findings", menuYayinlar: "Publications", menuEkip: "Research Team", menuIletisim: "Contact",
    heroTitle: "POLICY RECOMMENDATIONS FOR REVISING EXPORT INCENTIVES FROM A FOREIGN TRADE ENTREPRENEURSHIP PERSPECTIVE",
    heroDesc: "Findings from a comprehensive field study conducted with exporting firms in the TR42 East Marmara Region are transformed into concrete policy recommendations.",
    heroBtn: "VIEW POLICY RECOMMENDATIONS &gt;", sponsorTitle: "PROJECT STAKEHOLDERS",
    findingsTitle: "RESEARCH FINDINGS", findingsMore: "View All &gt;",
    f1Title: "FINANCIAL DETERMINANTS RANK FIRST IN FOREIGN TRADE",
    f2Title: "NEW PARADIGM IN INCENTIVES", f3Title: "TR42 REGION INDUSTRIAL HINTERLAND", f4Title: "COMMERCIAL NATIONALISM: WHO OWNS THE VALUE ADDED?",
    teamTitle: "RESEARCH TEAM", readMoreTxt: "READ MORE &gt;",
    statFirma: "Exporting Firms<br>Included in Field Research", statIl: "Strategic Provinces<br>(Kocaeli, Sakarya, Düzce, Bolu, Yalova)", statSektor: "Focus<br>Sectors", statAy: "Months<br>Project Duration",
    footDesc: "Independent research platform dedicated to developing foreign trade entrepreneurship and revising public policies in the TR42 East Marmara Region.",
    footKurumsal: "CORPORATE", footIcerik: "CONTENTS", footIletisim: "CONTACT", footKurumAdi: "Sakarya University", footProgram: "TÜBİTAK 3005 Supported", footCopy: "Copyright &copy; 2026 DTG Research Portal. All rights reserved."
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

// 6 VİDEO DA SAYFA AÇILIR AÇILMAZ ARKA PLANDA YÜKLENİR VE SESSİZCE DÖNGÜDE ÇALIŞIR.
// Geçiş sırasında ağdan yeniden indirme olmadığı için hiç takılma/kasma yaşanmaz,
// sadece görünür olan video CSS ile (opacity) değişir.
let currentVideoIndex = 0;
let autoAdvanceTimer = null;

document.addEventListener("DOMContentLoaded", () => {
  translateHTML();

  // DİL DEĞİŞTİRİCİ
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', (e) => {
      if (e.target.tagName === 'SPAN') {
        langToggle.querySelectorAll('span').forEach(s => s.classList.remove('active'));
        e.target.classList.add('active');
        currentLang = e.target.getAttribute('data-lang');
        translateHTML();
      }
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

  // VİDEO VE YEDEK FOTOĞRAF DEĞİŞTİRME MANTIĞI
  const heroVideos = Array.from(document.querySelectorAll('.hero-video'));
  const vNums = document.querySelectorAll('.v-num');

  // Bir videoyu, kaynagini henuz baglamamissa (data-src) simdi baglayip
  // yuklemeye baslatir. Ayni anda sadece 1-2 video yuklendigi icin
  // bant genisligi bolunmuyor, hicbiri birbirini yavaslatmiyor.
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

  vNums.forEach(n => n.classList.remove('active'));
  vNums[index].classList.add('active');

  const targetVideo = heroVideos[index];
  ensureLoaded(targetVideo);

  // Gorunur olan videoyu gercekten oynattigimizdan emin ol
  // (bazi tarayicilar gizliyken/opacity 0 iken videoyu durdurabiliyor)
  const tryPlay = () => {
    const playPromise = targetVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => { /* sessizce yut, poster zaten görünür kalır */ });
    }
  };
  if (targetVideo.readyState >= 2) {
    tryPlay();
  } else {
    targetVideo.addEventListener('loadeddata', tryPlay, { once: true });
  }

  heroVideos.forEach(v => v.classList.remove('active'));
  targetVideo.classList.add('active');

  // Kullanicinin gormeyecegi eski videoyu durdurup kaynagini boşa harcamayalim
  heroVideos.forEach((v, i) => {
    if (i !== index && i !== (index + 1) % heroVideos.length) {
      v.pause();
    }
  });

  // Sıradaki videoyu, ona gecmeden birkac saniye once arka planda yuklemeye basla
  const nextIndex = (index + 1) % heroVideos.length;
  ensureLoaded(heroVideos[nextIndex]);

  // Elle bir videoya tıklanınca otomatik döngüyü sıfırla, akış bozulmasın
  if (!isAuto) {
    startAutoAdvance();
  }
};

// SABANCI TARZI: videolar kendiliğinden, sırayla, yavaşça birbirine geçer
function startAutoAdvance() {
  if (autoAdvanceTimer) clearInterval(autoAdvanceTimer);
  autoAdvanceTimer = setInterval(() => {
    const nextIndex = (currentVideoIndex + 1) % heroVideos.length;
    window.playVideo(nextIndex, true);
  }, 5500);
}
if (heroVideos.length) {
  // ilk video zaten preload="auto" ile geliyor; ikinci videoyu hemen simdiden
  // arka planda yuklemeye basla ki sira ona gelince hazir olsun
  ensureLoaded(heroVideos[1]);
  startAutoAdvance();
}

  // ANONİM İKON SVG
  const anonSVG = `<svg class="anon-icon" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;

  // EKİP DATASI
  const ekipData = [
    { isim: "Prof. Dr. Ahmet Yağmur Ersoy", unvan: "Yürütücü", img: "img/WhatsApp Image 2026-08-05 at 18.49.44.jpeg" },
    { isim: "Doç. Dr. Caner Erden", unvan: "Araştırmacı", img: "img/WhatsApp Image 2026-08-05 at 18.49.58.jpeg" },
    { isim: "Doç. Dr. Metin Saygılı", unvan: "Araştırmacı", img: "img/WhatsApp Image 2026-08-05 at 18.51.33.jpeg" },
    { isim: "Dr. Öğr. Üyesi Çağdaş Ateş", unvan: "Araştırmacı", img: "img/WhatsApp Image 2026-08-05 at 18.52.02.jpeg" },
    { isim: "Öğr. Gör. Dr. Semanur Yalçın", unvan: "Araştırmacı", img: "img/WhatsApp Image 2026-08-05 at 18.52.24.jpeg" },
    { isim: "Öğr. Gör. Bilal Torkul", unvan: "Doktora Bursiyeri", img: "" },
    { isim: "Dr. Ömer Alperen Onay", unvan: "Doktora Sonrası Bursiyeri", img: "" },
    { isim: "Furkan Coşgun", unvan: "Yüksek Lisans Bursiyeri", img: "" }
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
