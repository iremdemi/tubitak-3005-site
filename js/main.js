// ÇEVİRİ DİCTIONARY
const dict = {
  tr: {
    menuAnaSayfa: "Ana Sayfa", menuProje: "Kurumsal", menuBulgular: "Bulgular", menuPolitika: "Politika Önerileri", menuYayinlar: "Yayınlar", menuEkip: "Araştırma Ekibimiz", menuIletisim: "İletişim",
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
    menuAnaSayfa: "Home", menuProje: "Corporate", menuBulgular: "Findings", menuPolitika: "Policy Recommendations", menuYayinlar: "Publications", menuEkip: "Research Team", menuIletisim: "Contact",
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

document.addEventListener("DOMContentLoaded", () => {
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

  // EKİP DATASI (Marquee için)
  const ekipData = [
    { isim: "Prof. Dr. Ahmet Yağmur Ersoy", unvan: "Yürütücü", img: "img/WhatsApp Image 2026-08-05 at 18.49.44.jpeg" },
    { isim: "Doç. Dr. Caner Erden", unvan: "Araştırmacı", img: "img/WhatsApp Image 2026-08-05 at 18.49.58.jpeg" },
    { isim: "Doç. Dr. Metin Saygılı", unvan: "Araştırmacı", img: "img/WhatsApp Image 2026-08-05 at 18.51.33.jpeg" },
    { isim: "Dr. Öğr. Üyesi Çağdaş Ateş", unvan: "Araştırmacı", img: "img/WhatsApp Image 2026-08-05 at 18.52.02.jpeg" },
    { isim: "Öğr. Gör. Dr. Semanur Yalçın", unvan: "Araştırmacı", img: "img/WhatsApp Image 2026-08-05 at 18.52.24.jpeg" },
    { isim: "Öğr. Gör. Bilal Torkul", unvan: "Doktora Bursiyeri", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
    { isim: "Dr. Ömer Alperen Onay", unvan: "Doktora Sonrası Bursiyeri", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    { isim: "Furkan Coşgun", unvan: "Yüksek Lisans Bursiyeri", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" }
  ];

  const track = document.getElementById('teamTrack');
  if(track) {
    let teamHTML = '';
    ekipData.forEach(k => {
      teamHTML += `<div class="team-member"><img src="${k.img}" alt="${k.isim}"><div class="team-info"><h4>${k.isim}</h4><span>${k.unvan}</span></div></div>`;
    });
    track.innerHTML = teamHTML + teamHTML;
  }

  // HERO SLIDER MANTIĞI
  const slides = document.querySelectorAll('.slide');
  const numbers = document.querySelectorAll('.h-num');
  
  if (slides.length > 0 && numbers.length > 0) {
    let currentSlide = 0;
    let slideInterval;

    window.changeSlide = function(index) {
      slides[currentSlide].classList.remove('active');
      numbers[currentSlide].classList.remove('active');
      currentSlide = index;
      slides[currentSlide].classList.add('active');
      numbers[currentSlide].classList.add('active');
      resetInterval();
    };

    function nextSlide() {
      let nextIndex = (currentSlide + 1) % slides.length;
      window.changeSlide(nextIndex);
    }

    function resetInterval() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }

    resetInterval();
  }

  translateHTML();
});
