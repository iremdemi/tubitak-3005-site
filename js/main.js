const siteContent = {
  tr: {
    nav: {
      framework: "Kavramsal Çerçeve", research: "Saha Araştırması", data: "Veri Analizi", findings: "Bulgular", policy: "Politika Önerileri", publications: "Yayınlar"
    },
    hero: {
      title: "İhracat Teşviklerinin Dış Ticaret Girişimciliği Perspektifiyle Revize Edilmesine Yönelik Politika Önerileri",
      desc: "TR42 Doğu Marmara Bölgesi'ndeki 192 ihracatçı firmanın katılımıyla gerçekleştirilen Türkiye'nin en kapsamlı dış ticaret girişimciliği saha araştırması.",
      meta: "TÜBİTAK 3005 Projesi"
    },
    map: {
      legend: "Odak Pazarlar", sub: "İhracat Veri Seti",
      grm: "Almanya", usa: "ABD", uk: "Birleşik Krallık", ita: "İtalya", rus: "Rusya", chn: "Çin", fra: "Fransa", irq: "Irak"
    },
    pipeline: [
      { title: "Kavramsal Çerçeve", desc: "Dış Ticaret Girişimciliği ile geleneksel uluslararasılaşma teorileri arasındaki yapısal ayrım.", link: "Çerçeveyi İncele" },
      { title: "Saha Araştırması", desc: "TR42 Bölgesi'nde 192 firma ile yürütülen kapsamlı ampirik veri toplama süreci.", link: "Metodolojiyi Gör" },
      { title: "Veri Analizi", desc: "Çok Kriterli Karar Verme (ÇKKV) modelleri ile elde edilen 9 temel belirleyicinin analizi.", link: "Veri Seti" },
      { title: "Politika Önerileri", desc: "Miktar odaklılıktan katma değer ve inovasyon eksenine geçiş için stratejik yol haritası.", link: "Raporu Oku" }
    ],
    team: [
        { isim: "Prof. Dr. Ahmet Yağmur Ersoy", unvan: "Yürütücü" },
        { isim: "Doç. Dr. Caner Erden", unvan: "Araştırmacı" },
        { isim: "Doç. Dr. Metin Saygılı", unvan: "Araştırmacı" },
        { isim: "Dr. Öğr. Üyesi Çağdaş Ateş", unvan: "Araştırmacı" },
        { isim: "Öğr. Gör. Dr. Semanur Yalçın", unvan: "Araştırmacı" },
        { isim: "Dr. Ömer Alperen Onay", unvan: "Doktora Sonrası Bursiyeri" },
        { isim: "Öğr. Gör. Bilal Torkul", unvan: "Doktora Bursiyeri" },
        { isim: "Furkan Coşgun", unvan: "Yüksek Lisans Bursiyeri" }
    ]
  },
  en: {
    nav: {
      framework: "Conceptual Framework", research: "Field Research", data: "Data Analysis", findings: "Findings", policy: "Policy Recommendations", publications: "Publications"
    },
    hero: {
      title: "Policy Recommendations for Revising Export Incentives from the Perspective of Foreign Trade Entrepreneurship",
      desc: "Turkey's most comprehensive foreign trade entrepreneurship field research conducted with 192 exporting firms in the TR42 East Marmara Region.",
      meta: "TÜBİTAK 3005 Project"
    },
    map: {
      legend: "Target Markets", sub: "Export Data Set",
      grm: "Germany", usa: "USA", uk: "UK", ita: "Italy", rus: "Russia", chn: "China", fra: "France", irq: "Iraq"
    },
    pipeline: [
      { title: "Conceptual Framework", desc: "Structural distinction between Foreign Trade Entrepreneurship and traditional internationalization.", link: "Review Framework" },
      { title: "Field Research", desc: "Comprehensive empirical data collection conducted with 192 firms in the TR42 Region.", link: "View Methodology" },
      { title: "Data Analysis", desc: "Analysis of 9 core determinants obtained through Multi-Criteria Decision Making models.", link: "Data Set" },
      { title: "Policy Recommendations", desc: "Strategic roadmap for transitioning from volume-oriented to value-added and innovation axis.", link: "Read Report" }
    ],
    team: [
        { isim: "Prof. Dr. Ahmet Yagmur Ersoy", unvan: "Principal Investigator" },
        { isim: "Assoc. Prof. Caner Erden", unvan: "Researcher" },
        { isim: "Assoc. Prof. Metin Saygili", unvan: "Researcher" },
        { isim: "Asst. Prof. Cagdas Ates", unvan: "Researcher" },
        { isim: "Lec. Dr. Semanur Yalcin", unvan: "Researcher" },
        { isim: "Dr. Omer Alperen Onay", unvan: "Post-Doc Fellow" },
        { isim: "Lec. Bilal Torkul", unvan: "Ph.D. Scholar" },
        { isim: "Furkan Cosgun", unvan: "M.Sc. Scholar" }
    ]
  }
};

let currentLang = 'tr';

function translateApp() {
  const t = siteContent[currentLang];
  
  // Navigasyon
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.innerText = t.nav[el.getAttribute('data-nav')];
  });

  // Hero Alanı
  const heroTitle = document.getElementById('hero-title');
  const heroDesc = document.getElementById('hero-desc');
  const heroMeta = document.getElementById('hero-meta');
  if(heroTitle) heroTitle.innerText = t.hero.title;
  if(heroDesc) heroDesc.innerText = t.hero.desc;
  if(heroMeta) heroMeta.innerText = t.hero.meta;

  // Araştırma Süreci (Pipeline) Izgarası
  const pipelineEl = document.getElementById('pipeline-grid');
  if(pipelineEl) {
    pipelineEl.innerHTML = t.pipeline.map(item => `
      <article class="pipeline-card">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <a href="#" class="pipeline-link">${item.link} <span>&rarr;</span></a>
      </article>
    `).join('');
  }

  // Harita
  document.querySelectorAll('[data-map]').forEach(el => {
    el.innerText = t.map[el.getAttribute('data-map')];
  });
}

document.addEventListener('DOMContentLoaded', () => {
  translateApp();
  
  const langToggle = document.getElementById('langToggle');
  if(langToggle) {
    langToggle.addEventListener('click', (e) => {
      if(e.target.tagName === 'SPAN') {
        langToggle.querySelectorAll('span').forEach(s => s.classList.remove('active'));
        e.target.classList.add('active');
        currentLang = e.target.getAttribute('data-lang');
        translateApp();
      }
    });
  }
});
