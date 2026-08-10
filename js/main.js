const dict = {
  tr: {
    menuAnaSayfa: "Ana Sayfa", menuProje: "Proje", menuBulgular: "Bulgular", menuPolitika: "Politika Önerileri", menuYayinlar: "Yayınlar", menuEkip: "Araştırma Ekibimiz", menuIletisim: "İletişim",
    dropAmac: "Araştırma Amacı", dropKapsam: "Saha Kapsamı", dropBelirleyiciler: "Temel Belirleyiciler", dropAnalizler: "Güncel Analizler", dropRaporlar: "İndirilebilir Raporlar", dropMakaleler: "Akademik Yayınlar", dropEkipUyeleri: "Ekip Üyeleri", dropKurumlar: "Destekleyen Kurumlar",
    btnPolitika: "Politika Önerileri",
    heroTitle: "İhracat Teşviklerinin Dış Ticaret Girişimciliği Perspektifiyle Revize Edilmesine Yönelik Politika Önerileri",
    heroDesc: "TR42 Doğu Marmara Bölgesi'ndeki 192 ihracatçı firmanın katılımıyla gerçekleştirilen Türkiye'nin en kapsamlı dış ticaret girişimciliği saha araştırması.",
    svc1Title: "Saha Araştırması", svc1Desc: "TR42 bölgesinde yürütülen çalışma",
    svc2Title: "Bulgular", svc2Desc: "Güncel analiz ve sonuçlar",
    svc3Title: "Politika Önerileri", svc3Desc: "Kanıta dayalı öneriler",
    svc4Desc: "Uzman akademik kadro",
    mapBoxSub: "TÜBİTAK 3005 Destekli Proje",
    mapGrm: "Almanya", mapUsa: "ABD", mapUk: "Birleşik Krallık", mapIta: "İtalya", mapRus: "Rusya", mapChn: "Çin", mapFra: "Fransa", mapIrq: "Irak",
    teamTitle: "Araştırma Ekibi",
    brandTitleFoot: "Dış Ticaret Girişimciliği ve İhracat Teşvikleri Araştırma Portalı",
    footDesc: "TR42 Doğu Marmara Bölgesi'ndeki dış ticaret girişimciliğinin geliştirilmesi ve kamu politikalarının revize edilmesine yönelik bağımsız araştırma platformudur.",
    footSupp: "Destekleyen Kurumlar:", footK1: "T.C. Ticaret Bakanlığı", footK2: "Türkiye İhracatçılar Meclisi (TİM)", footK3: "TR42 Doğu Marmara Kalkınma Ajansı (MARKA)",
    footCopy: "&copy; 2026 Tüm Hakları Saklıdır. Araştırma verileri kaynak gösterilmeden kullanılamaz.",
    readMoreTxt: "Detaylı İncele",
    footContactTitle: "Bize Ulaşın", footFormName: "Ad Soyad", footFormEmail: "E-posta", footFormMessage: "Mesajınız", footFormSend: "Gönder"
  },
  en: {
    menuAnaSayfa: "HOME", menuProje: "PROJECT", menuBulgular: "FINDINGS", menuPolitika: "POLICY RECOMMENDATIONS", menuYayinlar: "PUBLICATIONS", menuEkip: "RESEARCH TEAM", menuIletisim: "CONTACT",
    dropAmac: "Research Purpose", dropKapsam: "Field Scope", dropBelirleyiciler: "Core Determinants", dropAnalizler: "Latest Analyses", dropRaporlar: "Downloadable Reports", dropMakaleler: "Academic Publications", dropEkipUyeleri: "Team Members", dropKurumlar: "Supporting Institutions",
    btnPolitika: "Policy Recommendations",
    heroTitle: "Policy Recommendations for Revising Export Incentives from the Perspective of Foreign Trade Entrepreneurship",
    heroDesc: "Turkey's most comprehensive foreign trade entrepreneurship field research conducted with 192 exporting firms in the TR42 East Marmara Region.",
    svc1Title: "Field Research", svc1Desc: "Study conducted in the TR42 region",
    svc2Title: "Findings", svc2Desc: "Latest analysis and results",
    svc3Title: "Policy Recommendations", svc3Desc: "Evidence-based proposals",
    svc4Desc: "Expert academic staff",
    mapBoxSub: "TÜBİTAK 3005 Supported Project",
    mapGrm: "Germany", mapUsa: "USA", mapUk: "United Kingdom", mapIta: "Italy", mapRus: "Russia", mapChn: "China", mapFra: "France", mapIrq: "Iraq",
    teamTitle: "Research Team",
    brandTitleFoot: "Foreign Trade Entrepreneurship & Export Incentives Research Portal",
    footDesc: "Independent research platform dedicated to developing foreign trade entrepreneurship and revising public policies in the TR42 East Marmara Region.",
    footSupp: "Supporting Institutions:", footK1: "T.R. Ministry of Trade", footK2: "Turkish Exporters Assembly (TIM)", footK3: "TR42 East Marmara Development Agency (MARKA)",
    footCopy: "&copy; 2026 All Rights Reserved. Research data cannot be used without citation.",
    readMoreTxt: "Read Analysis",
    footContactTitle: "Contact Us", footFormName: "Full Name", footFormEmail: "Email", footFormMessage: "Your Message", footFormSend: "Send"
  }
};

let currentLang = 'tr';

const siteContent = {
  tr: {
    haberler: [
      { 
        baslik: "Kavramsal Çerçeve: Uluslararası Girişimcilik ile Dış Ticaret Girişimciliği Arasındaki Yapısal Ayrım ve 'Milli Değer' Ekseni", 
        ozet: "Geleneksel 'Uluslararası Girişimcilik' kavramı ile projemizin temelini oluşturan 'Dış Ticaret Girişimciliği' arasındaki yapısal ve iktisadi ayrım.", 
        gorsel: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
        full: `Girişimlerin küreselleşme süreçleri, iktisat ve işletme literatüründe uzun yıllardır farklı teorilerle açıklanmaktadır. Ancak mevcut yaklaşımların büyük bir kısmı, katma değerin nerede üretildiğinden ziyade pazarın nasıl genişletildiğine odaklanır. Bu noktada, geleneksel "Uluslararası Girişimcilik" kavramı ile projemizin temelini oluşturan "Dış Ticaret Girişimciliği" arasında yapısal ve iktisadi bir ayrım yapılması zorunludur.\n\nGeleneksel uluslararası girişimcilik; girişimcinin değer yaratma, kâr elde etme veya büyüme hedefleri doğrultusunda üretim ve yatırım faaliyetlerini sınır ötesine taşımasını ifade eder. Bu modelde girişimci, yabancı pazarlarda doğrudan yatırımlar yapar, ortaklıklar kurar ya da şirket satın almaları gerçekleştirir. Ancak bu durum, Uppsala Modeli gibi aşamalı uluslararasılaşma teorilerinde de görüldüğü üzere, yaratılan katma değerin ve ekonomik kazanımların hedef ülkede yatırıma dönüşmesiyle sonuçlanır. Bizim "ticari milliyetçilik" olarak adlandırdığımız bu olgu, ana ülkede bir katma değer artışı sağlamaktan ziyade, hedef pazarın sınırları içerisinde bir sermaye birikimi yaratır.\n\nBuna karşın Dış Ticaret Girişimciliği, üretimi ve katma değer yaratma sürecini tamamen kendi orijin ülkesinde (Türkiye'de) tutan bir yaklaşımdır. Dış ticaret girişimcisi, yerli sanayi tarafından üretilen katma değerleri dış satım yoluyla küresel pazarlara ulaştırır; ancak elde ettiği parasal karşılıkları yurt dışındaki faaliyetleri büyütmek için kullanmak yerine, tamamen kendi ülkesine getirerek yerli sabit sermaye yatırımlarına dönüştürür. Bu yönüyle dış ticaret girişimciliği, küresel korumacılık rüzgarlarının estiği günümüz dünyasında, "yüzde yüz yerli" değer üretimini önceleyen milli bir ekonomik savunma modelidir. Ülke içindeki üretimi besleyen, yerli yenilik kapasitesini artıran ve istihdamı doğrudan destekleyen bu model, Türkiye’nin On Birinci ve On İkinci Kalkınma Planlarında vurgulanan sürdürülebilir büyüme hedeflerinin de ana motorudur.`
      },
      { 
        baslik: "Kamu Teşviklerinde Paradigma Değişimi: Miktar Odaklı Desteklerden Katma Değer ve Girişimcilik Odaklı Destek Modeline", 
        ozet: "Mevcut ihracat teşviklerinin miktar odaklı yapısından sıyrılarak, yüksek katma değerli ve girişimcilik odaklı yeni bir modele geçiş zorunluluğu.", 
        gorsel: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        full: `Türkiye Cumhuriyeti, makroekonomik istikrarı ve kalkınmayı desteklemek amacıyla uzun yıllardır ihracat odaklı bir büyüme stratejisi takip etmektedir. Kamu otoritesi, Ticaret Bakanlığı, KOSGEB, TÜBİTAK ve Eximbank gibi çeşitli kurumlar aracılığıyla ihracatı özendirmek amacıyla son derece geniş ve kapsamlı bir teşvik mekanizması kurgulamıştır. Ancak yürürlükteki bu destek araçlarının küresel rekabette üstünlük sağlayacak yenilikçi yatırımlardan ziyade, doğrudan ihracat hacmini (miktar bazında) artırmaya odaklandığı görülmektedir.\n\nİhracatın miktar bazında artırılması gayreti, mikro düzeyde firmaların teknolojik derinleşmesini geciktirmekte ve yüksek katma değerli ürünlerin üretimini arka plana itmektedir. Daha da önemlisi, mevcut teşvik ve destek mekanizmaları, doğası gereği ölçek ekonomisi avantajına sahip olan büyük ölçekli işletmelerin üretim yapısını desteklemeye daha yatkındır. Bu durum, yüksek finansal risk barındıran, başlangıç aşamasındaki (startup) yenilikçi girişimlerin ve dinamik KOBİ'lerin küresel pazarlara açılırken kamu kaynaklarından yeterince faydalanamamasına yol açmaktadır. KOSGEB ve TÜBİTAK gibi kurumların sunduğu yenilikçi ürün destekleri ise çoğunlukla ithal ikamesi seviyesinde kalmakta, küresel pazarlarda yıkıcı bir rekabet avantajı yaratamamaktadır.\n\nOn İkinci Kalkınma Planı'nda açıkça ortaya konan "ileri teknolojiye dayalı, yüksek katma değer üreten ve kaliteli finansman imkanlarıyla desteklenen ekonomi modeli" hedefine ulaşılabilmesi için teşvik sisteminde radikal bir paradigma değişimine ihtiyaç vardır. Yeni nesil teşvik politikaları, bürokratik prosedürlerin sadeleştirildiği, vergi teşviklerinin etkinleştirildiği ve doğrudan "dış ticaret girişimcisini" hedef alan esnek ve dinamik modüller içermelidir. Teşviklerin verimliliğini artırmak, ancak sahadaki uygulayıcıların ve girişimcilerin gerçek beklentilerini doğru analiz eden bilimsel bir altyapı ile mümkündür.`
      },
      { 
        baslik: "Sahadan Bulgularla İhracatın Yapı Taşları: Dış Ticaret Girişimciliğini Belirleyen Öncelikli Faktörler", 
        ozet: "Kapsamlı saha araştırması sonuçlarına göre, dış ticaret girişimciliğinin başarısında en birincil rolü oynayan 9 belirleyici faktör.", 
        gorsel: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        full: `Dış ticaret girişimciliğinin önündeki engelleri kaldırmak ve kamu teşviklerini optimize etmek için öncelikle bu girişimcilik türünü besleyen temel belirleyicilerin ortaya konulması gerekir. Bu doğrultuda yürütülen kapsamlı saha araştırması, literatürdeki teorik yaklaşımlar ile iş dünyasının pratik deneyimlerini bir araya getirerek dış ticaret girişimciliğini şekillendiren 9 nihai belirleyiciyi ortaya koymuştur.\n\nGelişmiş olasılıksal analiz sonuçlarına göre, dış ticaret girişimciliğinin başarısında en birincil rolü %12,86'lık nihai grup ağırlığı ile "Finansal Belirleyiciler" (özkaynak yapısı, kârlılık ve genel finansal performans) üstlenmektedir. Yapılan simülasyon analizlerinde finansal faktörlerin diğer tüm kriterleri geride bırakarak birinci sırada yer alma olasılığı %86,80 olarak hesaplanmıştır. Bu çarpıcı bulgu, dış ticaret girişimcilerinin küresel pazarlara açılırken devlet desteklerinden ziyade kendi özkaynak güçlerine ve kârlılık rasyolarına güvendiklerini; finansal kırılganlıkların ise ihracat faaliyetlerinin önündeki en büyük engel olduğunu kanıtlamaktadır.\n\nFinansal belirleyicileri sırasıyla şu stratejik unsurlar takip etmektedir:\n• Rekabet, Fırsatlar ve Riskler (%11,68): Küresel pazarlardaki dalgalanmaları okuma ve risk yönetimi kapasitesi.\n• Stratejik Kararlar, Kurumsal Beceriler ve İnovasyon (%11,59): Firmaların yenilikçi süreçler tasarlama ve yönetsel olgunluk seviyeleri.\n• Girişimci Özellikleri, Deneyimi ve Networkü (%11,45): Yöneticilerin uluslararası vizyonu ve sektörel iş birlikleri.\n\nBu kriterlerin ağırlıklarının birbirine son derece yakın çıkması, uzmanların bu unsurları bir bütünün tamamlayıcı parçaları olarak gördüğünü kanıtlamaktadır. Pratik açıdan bu sonuçlar, yalnızca dışsal devlet teşviklerine odaklanmak yerine, firmaların stratejik, finansal ve yönetsel iç kapasitelerinin güçlendirilmesinin sürdürülebilir ihracat üzerinde çok daha büyük bir çarpan etkisi yaratacağına işaret etmektedir.`
      },
      { 
        baslik: "Bölgesel Kalkınmanın İhracat Motoru: TR42 Doğu Marmara Sanayi Hinterlandının Stratejik Önemi ve Yeni Korumacılık", 
        ozet: "Doğu Marmara Bölgesinin (TR42) Türkiye ekonomisindeki omurga rolü ve yeni korumacılık eğilimlerine karşı çözüm stratejileri.", 
        gorsel: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        full: `Bölgesel kalkınma, ülke kaynaklarının etkin kullanımı ve bölgelerarası refah farklılıklarının giderilmesi açısından iktisat politikalarının en kritik alanlarından biridir. Türkiye’nin On Birinci ve On İkinci Kalkınma Planlarında da vurgulandığı üzere, ihracat odaklı büyüme hedeflerinin yerel düzeyde hayata geçirilmesinde Kalkınma Ajansları ve bölgesel sanayi kümelenmeleri hayati bir role sahiptir.\n\nAvrupa Birliği istatistiksel sınıflandırmasına göre TR42 olarak adlandırılan Doğu Marmara Bölgesi (Kocaeli, Sakarya, Bolu, Düzce ve Yalova), üretim, ulaşım ve lojistik hatları bakımından Türkiye ekonomisinin omurgasını oluşturmaktadır. Coğrafi olarak Türkiye'nin en büyük tüketim ve ticaret merkezi olan İstanbul'a yakınlığı, ulusal ve uluslararası ulaşım koridorlarının üzerinde yer alması ve güçlü liman altyapısı, bölgeyi benzersiz bir üretim üssü haline getirmektedir. Temmuz 2024 verilerine göre Kocaeli ihracat hacminde Türkiye genelinde 4. sırada, Sakarya ise 7. sırada yer alarak bu gücü tescillemektedir. TR42 bölgesi, İstanbul’un ağır sanayi yükünü omuzlayan stratejik bir sınai hinterlant niteliğindedir.\n\nPandemi sonrasında küresel tedarik zincirlerinde yaşanan kırılmalar ve yükselen "yeni korumacılık" eğilimleri, bölgesel kalkınmanın ve yerli üretim ağlarının önemini bir kez daha ortaya koymuştur. Küresel pazarlardaki korumacı duvarları aşmanın yolu, TR42 gibi güçlü sanayi bölgelerinde faaliyet gösteren dış ticaret girişimcilerinin yeşil ve dijital dönüşüm süreçlerine adaptasyonunu hızlandırmaktan geçmektedir. Bölgedeki girişimcilerin yenilik kapasitelerini artıracak, karbon sınır düzenlemelerine uyum sağlayacak ve kaliteli finansmana erişimlerini kolaylaştıracak yerel ve ulusal politika araçlarının geliştirilmesi, Türkiye'nin küresel ticaretteki konumunu daha da sağlamlaştıracaktır.`
      },
      { 
        baslik: "Ticari Milliyetçilik: Bir Girişimin Yarattığı Zenginlik Hangi Ülkeye Aittir?", 
        ozet: "Bir firma küresel ölçekte 'başarılı' sayılabilir; ama yarattığı zenginlik başka bir ülkenin sermaye stokuna eklenmişse, bu başarı kimin lehinedir? 'Ticari milliyetçilik' kavramı tam da bu soruyu masaya yatırıyor.", 
        gorsel: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        full: `Bir girişimin "uluslararası" ya da "küresel" sayılması için genellikle tek bir ölçüt aranır: sınır ötesinde faaliyet göstermek. Ancak bu ölçüt, gözden kaçırdığı asıl soruyu gizler: yaratılan zenginlik nihayetinde hangi ülkenin sermaye stokuna eklenir? Uppsala Modeli'nden bu yana klasik uluslararasılaşma teorileri, bir firmanın yurt dışında doğrudan yatırım yapmasını, ortaklık kurmasını ya da şirket satın almasını "olgunlaşmanın" doğal bir aşaması olarak sunar. Bu anlatıda, katma değerin nerede biriktiği neredeyse hiç sorgulanmaz.\n\nProjemizin çıkış noktalarından biri, bu sessiz varsayımı tersine çevirmektir. "Ticari milliyetçilik" olarak adlandırdığımız yaklaşım, bir ekonomik faaliyetin başarısını yalnızca ciro veya pazar payıyla değil, yarattığı değerin hangi ülkede sabit sermayeye, istihdama ve yenilik kapasitesine dönüştüğüyle ölçer. Bu çerçevede dış ticaret girişimciliği, yurt dışına yatırım yapmak yerine, üretimi ve katma değer yaratma sürecini bilinçli biçimde yurt içinde tutan; yalnızca dış satım yoluyla küresel pazara açılan bir modeldir. Aradaki fark kozmetik değildir: biri sermayeyi ihraç eder, diğeri sermayeyi ithal eder.\n\nBu ayrımın bir akademik incelik olmadığını, doğrudan bir politika meselesi olduğunu vurgulamak gerekir. Teşvik sistemleri bugüne kadar çoğunlukla ihracat hacmini büyütmeyi hedefledi; hangi model üzerinden büyüdüğünü, yani yaratılan değerin nerede kaldığını sorgulamadı. Küresel korumacılığın yükseldiği, tedarik zincirlerinin yeniden ulusal sınırlara çekildiği bir dönemde, bu ayrımı gözden kaçırmanın maliyeti giderek artıyor.`
      },
      { 
        baslik: "Neden Şimdi? Tedarik Zincirleri Kırılırken Dış Ticaret Girişimciliğinin Yükselişi", 
        ozet: "Pandemi sonrası kırılan tedarik zincirleri ve yükselen korumacılık, dış ticaret girişimciliğini akademik bir merak konusu olmaktan çıkarıp acil bir politika gündemine dönüştürdü.", 
        gorsel: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        full: `Birkaç yıl öncesine kadar "tedarik zinciri" kavramı, çoğu politika yapıcı için soyut bir mühendislik meselesiydi. Pandemi, bunun hiç de öyle olmadığını gösterdi: bir limandaki tıkanıklık, binlerce kilometre ötedeki bir fabrikayı durdurabiliyor. Bu kırılganlık, "reshoring" ve "friend-shoring" gibi kavramları iktisat literatürünün merkezine taşıdı; devletler artık üretimin nerede yapıldığını, sadece maliyet değil güvenlik meselesi olarak da görüyor.\n\nBu yeni denklemde Türkiye'nin konumu hem fırsat hem risk barındırıyor. Avrupa'ya coğrafi yakınlığı ve TR42 gibi güçlü sanayi hinterlantları, ülkeyi tedarik zincirlerinin yeniden şekillendiği bu dönemde doğal bir alternatif haline getiriyor. Ancak bu fırsatın gerçek bir kazanıma dönüşmesi, sahada faaliyet gösteren dış ticaret girişimcilerinin doğru araçlarla desteklenmesine bağlı. On Birinci ve On İkinci Kalkınma Planları'nda tekrar eden "yerli ve milli üretim" vurgusu, bu ihtiyacın siyasi karşılığını da gösteriyor.\n\nPolitika pencereleri sonsuza kadar açık kalmaz. Tedarik zincirleri yeniden konumlanırken teşvik mimarisini doğru kurmak, önümüzdeki on yılın rekabet gücünü büyük ölçüde belirleyecek. Bu araştırmanın aciliyeti de tam olarak buradan geliyor: geç kalınan her yıl, yeniden şekillenen küresel ticaret haritasında daha dezavantajlı bir konumdan başlamak anlamına gelir.`
      }
    ],
    ekip: [
      { isim: "Prof. Dr. Ahmet Yağmur Ersoy", unvan: "Yürütücü", fotograf: "img/WhatsApp Image 2026-08-05 at 18.49.44.jpeg" },
      { isim: "Doç. Dr. Caner Erden", unvan: "Araştırmacı", fotograf: "img/WhatsApp Image 2026-08-05 at 18.49.58.jpeg" },
      { isim: "Doç. Dr. Metin Saygılı", unvan: "Araştırmacı", fotograf: "img/WhatsApp Image 2026-08-05 at 18.51.33.jpeg" },
      { isim: "Dr. Öğr. Üyesi Çağdaş Ateş", unvan: "Araştırmacı", fotograf: "img/WhatsApp Image 2026-08-05 at 18.52.02.jpeg" },
      { isim: "Öğr. Gör. Dr. Semanur Yalçın", unvan: "Araştırmacı", fotograf: "img/WhatsApp Image 2026-08-05 at 18.52.24.jpeg" },
      { isim: "Dr. Ömer Alperen Onay", unvan: "Doktora Sonrası Bursiyeri", fotograf: "" },
      { isim: "Öğr. Gör. Bilal Torkul", unvan: "Doktora Bursiyeri", fotograf: "" },
      { isim: "Furkan Coşgun", unvan: "Yüksek Lisans Bursiyeri", fotograf: "" }
    ]
  },
  en: {
    haberler: [
      { 
        baslik: "Conceptual Framework: Structural Distinction Between International and Foreign Trade Entrepreneurship", 
        ozet: "The structural and economic distinction between traditional 'International Entrepreneurship' and 'Foreign Trade Entrepreneurship'.", 
        gorsel: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
        full: `The globalization processes of ventures have been explained by various theories in economics and business literature for many years. However, most existing approaches focus on how the market is expanded rather than where the value-added is produced. At this point, a structural and economic distinction must be made between the traditional concept of "International Entrepreneurship" and "Foreign Trade Entrepreneurship," which forms the basis of our project.\n\nTraditional international entrepreneurship refers to the entrepreneur moving production and investment activities across borders in line with value creation, profit, or growth objectives. In this model, the entrepreneur makes direct investments, forms partnerships, or acquires companies in foreign markets. However, as seen in gradual internationalization theories like the Uppsala Model, this results in the created value-added and economic gains turning into investments in the target country. This phenomenon, which we call "commercial nationalism," creates capital accumulation within the borders of the target market rather than providing a value-added increase in the home country.\n\nIn contrast, Foreign Trade Entrepreneurship is an approach that keeps the production and value creation process entirely in its country of origin (Turkey). The foreign trade entrepreneur delivers the value-added produced by the domestic industry to global markets through exports; however, instead of using the monetary returns obtained to expand operations abroad, they bring it entirely back to their own country and turn it into domestic fixed capital investments. In this respect, foreign trade entrepreneurship is a national economic defense model that prioritizes "100% domestic" value production in today's world where global protectionism winds are blowing. This model, which feeds domestic production, increases domestic innovation capacity, and directly supports employment, is also the main engine of the sustainable growth targets emphasized in Turkey's Eleventh and Twelfth Development Plans.`
      },
      { 
        baslik: "Paradigm Shift in Public Incentives: From Quantity-Oriented Supports to a Value-Added Model", 
        ozet: "The necessity of transitioning from quantity-oriented export incentives to a high value-added and entrepreneurship-oriented new model.", 
        gorsel: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        full: `The Republic of Turkey has been following an export-oriented growth strategy for many years to support macroeconomic stability and development. The public authority has designed a very broad and comprehensive incentive mechanism to encourage exports through various institutions such as the Ministry of Trade, KOSGEB, TÜBİTAK, and Eximbank. However, it is observed that these current support tools focus on directly increasing the export volume (in terms of quantity) rather than innovative investments that will provide superiority in global competition.\n\nThe effort to increase exports on a quantity basis delays the technological deepening of firms at the micro level and pushes the production of high value-added products into the background. More importantly, existing incentive and support mechanisms are naturally more inclined to support the production structure of large-scale enterprises that have economies of scale advantages. This situation causes innovative start-ups and dynamic SMEs with high financial risks to be unable to sufficiently benefit from public resources when expanding into global markets. Innovative product supports provided by institutions like KOSGEB and TÜBİTAK often remain at the level of import substitution and cannot create a disruptive competitive advantage in global markets.\n\nTo achieve the "economic model based on advanced technology, producing high value-added, and supported by quality financing opportunities" target clearly stated in the Twelfth Development Plan, a radical paradigm shift in the incentive system is needed. New generation incentive policies should include flexible and dynamic modules that simplify bureaucratic procedures, activate tax incentives, and directly target the "foreign trade entrepreneur." Increasing the efficiency of incentives is only possible with a scientific infrastructure that correctly analyzes the real expectations of practitioners and entrepreneurs in the field.`
      },
      { 
        baslik: "Building Blocks of Exports with Field Findings: Priority Factors", 
        ozet: "The 9 ultimate determinants shaping foreign trade entrepreneurship based on comprehensive field research results.", 
        gorsel: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        full: `To remove the obstacles to foreign trade entrepreneurship and optimize public incentives, the fundamental determinants feeding this type of entrepreneurship must first be revealed. The comprehensive field research conducted in this direction has brought together theoretical approaches in the literature and the practical experiences of the business world to reveal 9 ultimate determinants shaping foreign trade entrepreneurship.\n\nAccording to the results of advanced probabilistic analysis, "Financial Determinants" (equity structure, profitability, and general financial performance) play the primary role in the success of foreign trade entrepreneurship with a final group weight of 12.86%. In the simulation analyses conducted, the probability of financial factors ranking first by surpassing all other criteria was calculated as 86.80%. This striking finding proves that foreign trade entrepreneurs rely on their own equity strength and profitability ratios rather than government supports when expanding into global markets; and financial fragilities are the biggest obstacle to export activities.\n\nFinancial determinants are followed by these strategic elements respectively:\n• Competition, Opportunities, and Risks (11.68%): Capacity to read fluctuations in global markets and risk management.\n• Strategic Decisions, Corporate Skills, and Innovation (11.59%): Firms' managerial maturity levels and designing innovative processes.\n• Entrepreneur Characteristics, Experience, and Network (11.45%): Managers' international vision and sectoral collaborations.\n\nThe fact that the weights of these criteria are very close to each other proves that experts see these elements as complementary parts of a whole. Practically, these results indicate that strengthening the strategic, financial, and managerial internal capacities of firms will create a much larger multiplier effect on sustainable exports than focusing solely on external government incentives.`
      },
      { 
        baslik: "Export Engine of Regional Development: Strategic Importance of TR42 East Marmara", 
        ozet: "The strategic importance of the TR42 East Marmara Industrial Hinterland and solutions against rising new protectionism trends.", 
        gorsel: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        full: `Regional development is one of the most critical areas of economic policies in terms of effective use of national resources and eliminating inter-regional welfare differences. As emphasized in Turkey's Eleventh and Twelfth Development Plans, Development Agencies and regional industrial clusters play a vital role in implementing export-oriented growth targets at the local level.\n\nThe East Marmara Region (Kocaeli, Sakarya, Bolu, Düzce, and Yalova), designated as TR42 according to the European Union statistical classification, forms the backbone of the Turkish economy in terms of production, transportation, and logistics lines. Its proximity to Istanbul, geographically Turkey's largest consumption and trade center, its location on national and international transportation corridors, and its strong port infrastructure make the region a unique production base. According to July 2024 data, Kocaeli ranks 4th and Sakarya 7th in Turkey in export volume, certifying this strength. The TR42 region is a strategic industrial hinterland shouldering Istanbul's heavy industry burden.\n\nThe disruptions in global supply chains after the pandemic and the rising "new protectionism" trends have once again revealed the importance of regional development and domestic production networks. The way to overcome protectionist walls in global markets is to accelerate the adaptation of foreign trade entrepreneurs operating in strong industrial regions like TR42 to green and digital transformation processes. Developing local and national policy tools that will increase the innovation capacities of entrepreneurs in the region, ensure compliance with carbon border adjustments, and facilitate their access to quality finance will further solidify Turkey's position in global trade.`
      },
      { 
        baslik: "Commercial Nationalism: Which Country Does a Venture's Wealth Belong To?", 
        ozet: "A firm can be considered 'globally successful' even as the wealth it creates is added to another country's capital stock. The concept of 'commercial nationalism' puts exactly this question on the table.", 
        gorsel: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        full: `A venture is usually judged "international" or "global" by a single yardstick: operating across borders. But that yardstick conceals the question that actually matters: which country's capital stock does the value created ultimately join? Since the Uppsala Model, classical internationalization theories have presented direct investment, partnerships, or acquisitions abroad as a natural stage of "maturity." In that narrative, where the value-added ultimately settles is barely questioned at all.\n\nOne of the starting points of our project is to invert this quiet assumption. What we call "commercial nationalism" measures the success of an economic activity not merely by revenue or market share, but by where the value it creates turns into fixed capital, employment, and innovation capacity. Under this lens, foreign trade entrepreneurship is a model that deliberately keeps production and value creation at home rather than investing abroad, reaching global markets solely through exports. The difference is not cosmetic: one model exports capital, the other imports it.\n\nIt is worth stressing that this distinction is not an academic nicety but a direct policy matter. Incentive systems have so far mostly targeted growing export volume, without asking which model that growth follows, that is, where the value created actually stays. At a time when global protectionism is rising and supply chains are being pulled back within national borders, the cost of overlooking this distinction keeps growing.`
      },
      { 
        baslik: "Why Now? The Rise of Foreign Trade Entrepreneurship as Supply Chains Fracture", 
        ozet: "Supply chains broken by the pandemic and rising protectionism have turned foreign trade entrepreneurship from an academic curiosity into an urgent policy agenda.", 
        gorsel: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        full: `Until a few years ago, "supply chain" was, for most policymakers, an abstract engineering matter. The pandemic showed it was anything but: a bottleneck at a single port could halt a factory thousands of kilometers away. That fragility pushed concepts like "reshoring" and "friend-shoring" to the center of economic literature; states now treat where production happens as a matter of security, not just cost.\n\nIn this new equation, Turkey's position carries both opportunity and risk. Its geographic proximity to Europe and strong industrial hinterlands like TR42 make the country a natural alternative as supply chains are reshaped. But turning that opportunity into a real gain depends on supporting foreign trade entrepreneurs on the ground with the right tools. The recurring emphasis on "domestic and national production" in Turkey's Eleventh and Twelfth Development Plans reflects the political counterpart of this need.\n\nPolicy windows do not stay open forever. Getting the incentive architecture right while supply chains are being repositioned will largely determine competitiveness over the next decade. That is precisely where the urgency of this research comes from: every year of delay means starting from a more disadvantaged position on a global trade map that is already being redrawn.`
      }
    ],
    ekip: [
      { isim: "Prof. Dr. Ahmet Yagmur Ersoy", unvan: "Principal Investigator", fotograf: "img/WhatsApp Image 2026-08-05 at 18.49.44.jpeg" },
      { isim: "Assoc. Prof. Caner Erden", unvan: "Researcher", fotograf: "img/WhatsApp Image 2026-08-05 at 18.49.58.jpeg" },
      { isim: "Assoc. Prof. Metin Saygili", unvan: "Researcher", fotograf: "img/WhatsApp Image 2026-08-05 at 18.51.33.jpeg" },
      { isim: "Asst. Prof. Cagdas Ates", unvan: "Researcher", fotograf: "img/WhatsApp Image 2026-08-05 at 18.52.02.jpeg" },
      { isim: "Lec. Dr. Semanur Yalcin", unvan: "Researcher", fotograf: "img/WhatsApp Image 2026-08-05 at 18.52.24.jpeg" },
      { isim: "Dr. Omer Alperen Onay", unvan: "Post-Doc Fellow", fotograf: "" },
      { isim: "Lec. Bilal Torkul", unvan: "Ph.D. Scholar", fotograf: "" },
      { isim: "Furkan Cosgun", unvan: "M.Sc. Scholar", fotograf: "" }
    ]
  }
};

function translateHTML() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[currentLang][key]) {
      el.innerHTML = dict[currentLang][key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[currentLang][key]) {
      el.setAttribute('placeholder', dict[currentLang][key]);
    }
  });
}

function renderDynamicData() {
  const data = siteContent[currentLang];
  
  const ekipEl = document.getElementById('ekip-container');
  if (ekipEl) {
    ekipEl.innerHTML = '';
    data.ekip.forEach(kisi => {
      const avatar = kisi.fotograf
        ? `<img src="${kisi.fotograf}" alt="${kisi.isim}">`
        : `<div class="tc-avatar-fallback"><svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>`;
      ekipEl.insertAdjacentHTML('beforeend', `<div class="team-card"><div class="tc-img-wrap">${avatar}</div><div class="tc-content"><h3>${kisi.isim}</h3><span class="tc-role">${kisi.unvan}</span></div></div>`);
    });
  }

  const svc2El = document.getElementById('svc2-list');
  if (svc2El) {
    svc2El.innerHTML = data.haberler.slice(0, 4).map(h => `<div class="service-card-list-item">${h.baslik}</div>`).join('');
  }

  const priorityGridEl = document.getElementById('priorityGrid');
  if (priorityGridEl) {
    const prIcons = [
      '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>', '<path d="M9 17V9m6 8V5m-11 12h16"/>', '<path d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"/>',
      '<path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15z"/>', '<circle cx="12" cy="10" r="3"/><path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z"/>', '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'
    ];
    priorityGridEl.innerHTML = data.haberler.slice(0, 6).map((h, i) => `<button class="priority-card" onclick="openModal(${i})" type="button"><div class="priority-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${prIcons[i % prIcons.length]}</svg></div><h3>${h.baslik}</h3><p>${h.ozet}</p></button>`).join('');
  }

  initTeamRotator(data);
  
  setTimeout(() => { if(typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh(); }, 500);
}

let teamRotatorTimer = null;
function initTeamRotator(data) {
  const photosEl = document.getElementById('svc4-photos');
  const nameEl = document.getElementById('svc4-name');
  const roleEl = document.getElementById('svc4-role');
  if (!photosEl || !nameEl || !roleEl) return;

  const withPhotos = data.ekip.filter(k => k.fotograf);
  if (withPhotos.length === 0) return;

  photosEl.innerHTML = withPhotos.map((k, i) => `<img src="${k.fotograf}" alt="${k.isim}" class="${i === 0 ? 'active' : ''}">`).join('');

  const imgs = photosEl.querySelectorAll('img');
  let idx = 0;
  nameEl.textContent = withPhotos[0].isim;
  roleEl.textContent = withPhotos[0].unvan;

  if (teamRotatorTimer) clearInterval(teamRotatorTimer);
  teamRotatorTimer = setInterval(() => {
    imgs[idx].classList.remove('active');
    idx = (idx + 1) % withPhotos.length;
    imgs[idx].classList.add('active');
    nameEl.textContent = withPhotos[idx].isim;
    roleEl.textContent = withPhotos[idx].unvan;
  }, 1800);
}

function openModal(index) {
  const article = siteContent[currentLang].haberler[index];
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalImage = document.getElementById('modalImage');
  const overlay = document.getElementById('articleModalOverlay');

  if(article && modalTitle && modalBody && overlay) {
    modalTitle.innerText = article.baslik;
    if (modalImage) { modalImage.src = article.gorsel; modalImage.alt = article.baslik; }
    const paragraphs = article.full.split('\n').filter(p => p.trim() !== '');
    modalBody.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
    
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden'; 
  }
}

function closeModal() {
  const overlay = document.getElementById('articleModalOverlay');
  if(overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = ''; 
  }
}

// BÜTÜN BOŞLUK SORUNUNU ÇÖZEN ANİMASYON FONKSİYONU
function initAnimations() {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.gsap-reveal').forEach(elem => {
      gsap.to(elem, {
        scrollTrigger: { trigger: elem, start: "top 85%" },
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out"
      });
    });
  } else {
    // EĞER GSAP YÜKLENMEZSE, YEDEK OLARAK HER ŞEYİ GÖRÜNÜR YAP
    document.querySelectorAll('.gsap-reveal').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('header');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) { header.classList.add('scrolled'); } else { header.classList.remove('scrolled'); }
    if (scrollIndicator) { if (window.scrollY > 50) { scrollIndicator.classList.add('hidden'); } else { scrollIndicator.classList.remove('hidden'); } }
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      const overlay = document.getElementById('articleModalOverlay');
      if(overlay && overlay.classList.contains('open')) closeModal();
      const navMenu = document.querySelector('.nav-menu');
      if(navMenu && navMenu.classList.contains('is-open')){
        navMenu.classList.remove('is-open');
        document.getElementById('navOverlay').classList.remove('is-open');
        document.getElementById('menuToggle').setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }
  });

  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.querySelector('.nav-menu');
  const navOverlay = document.getElementById('navOverlay');

  function openMobileNav(){ navMenu.classList.add('is-open'); navOverlay.classList.add('is-open'); menuToggle.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; }
  function closeMobileNav(){ navMenu.classList.remove('is-open'); navOverlay.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; document.querySelectorAll('.nav-item.has-dropdown.is-open').forEach(i => i.classList.remove('is-open')); }
  if(menuToggle){ menuToggle.addEventListener('click', () => { navMenu.classList.contains('is-open') ? closeMobileNav() : openMobileNav(); }); }
  if(navOverlay) navOverlay.addEventListener('click', closeMobileNav);

  document.querySelectorAll('.dropdown-icon').forEach(icon => {
    icon.addEventListener('click', (e) => { if(window.innerWidth <= 1024){ e.preventDefault(); e.stopPropagation(); icon.closest('.nav-item').classList.toggle('is-open'); } });
  });

  document.querySelectorAll('.nav-menu a').forEach(a => {
    a.addEventListener('click', () => { if(window.innerWidth <= 1024) closeMobileNav(); });
  });

  window.addEventListener('resize', () => { if(window.innerWidth > 1024) closeMobileNav(); });

  const closeBtn = document.getElementById('modalCloseBtn');
  const overlay = document.getElementById('articleModalOverlay');
  if(closeBtn) closeBtn.addEventListener('click', closeModal);
  if(overlay) overlay.addEventListener('click', (e) => { if(e.target === overlay) closeModal(); });

  const track = document.getElementById('ekip-container');
  const prevBtn = document.getElementById('teamPrev');
  const nextBtn = document.getElementById('teamNext');

  if (track && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => { track.scrollBy({ left: -310, behavior: 'smooth' }); });
    nextBtn.addEventListener('click', () => { track.scrollBy({ left: 310, behavior: 'smooth' }); });
  }

  const slides = document.querySelectorAll('.hero-slide');
  const heroPrev = document.getElementById('heroPrev');
  const heroNext = document.getElementById('heroNext');
  if (slides.length > 0) {
    let currentSlide = 0;
    let heroTimer = null;

    function goToSlide(index){ slides[currentSlide].classList.remove('active'); currentSlide = (index + slides.length) % slides.length; slides[currentSlide].classList.add('active'); }
    function startHeroTimer(){ heroTimer = setInterval(() => { goToSlide(currentSlide + 1); }, 5500); }
    startHeroTimer();

    function manualNav(delta){ clearInterval(heroTimer); goToSlide(currentSlide + delta); startHeroTimer(); }
    if(heroPrev) heroPrev.addEventListener('click', () => manualNav(-1));
    if(heroNext) heroNext.addEventListener('click', () => manualNav(1));

    window.addEventListener('load', () => {
      setTimeout(() => { slides.forEach(s => { const bg = s.getAttribute('data-bg'); if(bg) s.style.backgroundImage = `url('${bg}')`; }); }, 400);
    });
  }

  translateHTML();
  renderDynamicData();
  
  // EKRANI BEMBEYAZ YAPAN SORUNU ÇÖZEN SATIR:
  initAnimations();
});

document.getElementById('langToggle').addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    document.querySelectorAll('#langToggle span').forEach(s => s.classList.remove('active'));
    e.target.classList.add('active');
    currentLang = e.target.getAttribute('data-lang');
    translateHTML();
    renderDynamicData();
  }
});
