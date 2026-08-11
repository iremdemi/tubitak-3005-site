const dict = {
  tr: {
    menuAnaSayfa: "Ana Sayfa", menuProje: "Proje", menuBulgular: "Bulgular", menuPolitika: "Politika Önerileri", menuYayinlar: "Yayınlar", menuEkip: "Araştırma Ekibimiz", menuIletisim: "İletişim",
    heroTitle: "İHRACAT TEŞVİKLERİNİN DIŞ TİCARET GİRİŞİMCİLİĞİ PERSPEKTİFİYLE REVİZE EDİLMESİNE YÖNELİK POLİTİKA ÖNERİLERİ",
    heroDesc: "TR42 Doğu Marmara Bölgesi'ndeki ihracatçı firmaların katılımıyla yürütülen kapsamlı saha araştırmasının bulguları, somut politika önerilerine dönüşüyor.",
    heroBtn: "POLİTİKA ÖNERİLERİNİ GÖR >",
    sponsorTitle: "PROJE PAYDAŞLARI"
  },
  en: {
    menuAnaSayfa: "Home", menuProje: "Project", menuBulgular: "Findings", menuPolitika: "Policy Recommendations", menuYayinlar: "Publications", menuEkip: "Research Team", menuIletisim: "Contact",
    heroTitle: "POLICY RECOMMENDATIONS FOR REVISING EXPORT INCENTIVES FROM A FOREIGN TRADE ENTREPRENEURSHIP PERSPECTIVE",
    heroDesc: "Findings from a comprehensive field study conducted with exporting firms in the TR42 East Marmara Region are transformed into concrete policy recommendations.",
    heroBtn: "VIEW POLICY RECOMMENDATIONS >",
    sponsorTitle: "PROJECT STAKEHOLDERS"
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
  translateHTML();

  // Dil Değiştirici
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

  // Kayan Görseller (Slider) ve Radar Numaraları Entegrasyonu
  const slides = document.querySelectorAll('.hero-slides .slide');
  const indicators = document.querySelectorAll('.slide-indicators .ind');
  let currentSlide = 0;
  let heroTimer = null;

  if (slides.length > 0 && indicators.length > 0) {
    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      indicators[currentSlide].classList.remove('active');
      
      currentSlide = (index + slides.length) % slides.length;
      
      slides[currentSlide].classList.add('active');
      indicators[currentSlide].classList.add('active');
    }

    function startHeroTimer() {
      heroTimer = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 5000); // Her 5 saniyede bir değişir
    }

    startHeroTimer();

    // Numaralara tıklanarak resim değiştirme özelliği
    indicators.forEach((ind, index) => {
      ind.addEventListener('click', () => {
        clearInterval(heroTimer);
        goToSlide(index);
        startHeroTimer();
      });
    });
  }
});
