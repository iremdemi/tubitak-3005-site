document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const bubble = document.getElementById('qaWelcomeBubble');
    const chatBox = document.getElementById('qaChatBox');
    if (bubble && chatBox && !chatBox.classList.contains('open')) {
      bubble.classList.add('show');
    }
  }, 1500);
});

const toggleBtn = document.getElementById('qaToggleBtn');
const chatBox = document.getElementById('qaChatBox');
const chatClose = document.getElementById('qaChatClose');
const welcomeBubble = document.getElementById('qaWelcomeBubble');
const welcomeClose = document.getElementById('qaWelcomeClose');
const sendBtn = document.getElementById('qaSendBtn');
const userInput = document.getElementById('qaUserInput');
const chatMessages = document.getElementById('qaChatMessages');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    chatBox.classList.toggle('open');
    if (welcomeBubble) welcomeBubble.classList.remove('show');
  });
}

if (chatClose) {
  chatClose.addEventListener('click', () => {
    chatBox.classList.remove('open');
  });
}

if (welcomeClose) {
  welcomeClose.addEventListener('click', (e) => {
    e.stopPropagation();
    if (welcomeBubble) welcomeBubble.classList.remove('show');
  });
}

function addMessage(text, sender) {
  if (!chatMessages) return;
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('qa-msg', sender);
  msgDiv.innerText = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleUserQuery() {
  if (!userInput) return;
  const query = userInput.value.trim();
  if (!query) return;

  addMessage(query, 'user');
  userInput.value = '';

  setTimeout(() => {
    const q = query.toLowerCase();
    let answer = "Bu konuda henüz sistemimizde ayrıntılı bir veri bulunmuyor veya sorunuz kapsam dışı. Dilerseniz araştırma ekibimizle iletişime geçebilir ya da ana sayfamızdaki bölümleri inceleyebilirsiniz.";

    if (q.includes('amaç') || q.includes('amac') || q.includes('araştırmanın amacı') || q.includes('nedir bu proje')) {
      answer = "Bu araştırmanın amacı, TR42 Doğu Marmara Bölgesi'ndeki ihracatçı firmaların katılımıyla dış ticaret girişimciliğini şekillendiren stratejik, ekonomik ve politik dinamikleri incelemektir.";
    } else if (q.includes('neyi inceliyor') || q.includes('inceleme')) {
      answer = "Proje; dış ticaret girişimciliğinin finansal belirleyicilerini, risk yönetimi kapasitelerini, inovasyon süreçlerini ve bölgedeki ihracat dinamiklerini incelemektedir.";
    } else if (q.includes('kurum') || q.includes('kim yürüttü') || q.includes('hangi kurum')) {
      answer = "Araştırma, TÜBİTAK 3005 desteğiyle Sakarya Üniversitesi bünyesinde yürütülmektedir.";
    } else if (q.includes('sürdü') || q.includes('süre') || q.includes('ne kadar')) {
      answer = "Proje saha çalışmaları ve analiz süreçleri dahil olmak üzere toplam 15 ay sürmüştür.";
    } else if (q.includes('kapsam') || q.includes('kapsamı')) {
      answer = "Araştırma TR42 Doğu Marmara Bölgesi'ni (Kocaeli, Sakarya, Düzce, Bolu, Yalova) ve bu bölgedeki 192 ihracatçı firmayı kapsamaktadır.";
    } else if (q.includes('hedef kitle') || q.includes('kitle')) {
      answer = "Araştırmanın hedef kitlesi; ihracatçı firmaların üst düzey karar vericileri, alanında uzman akademisyenler, kamu kurumları ve öğrencilerdir.";
    } else if (q.includes('dış ticaret girişimciliği nedir') || q.includes('dis ticaret girisimciligi nedir')) {
      answer = "Dış ticaret girişimciliği; sadece bireysel kâr elde etme odaklı olmayan, devletlerin dış ticaret politikaları, yerli üretimi koruma arzusu ve makroekonomik stratejileriyle harmanlanmış uluslararası ticari faaliyetler bütünüdür.";
    } else if (q.includes('geleneksel') && q.includes('farkı')) {
      answer = "Geleneksel girişimcilik yerel pazar odaklı ve kısıtlı ölçekliyken; dış ticaret girişimciliği makro politikalar, küresel tedarik zincirleri ve uluslararası rekabet dinamikleriyle doğrudan ilişkilidir.";
    } else if (q.includes('uluslararası') && q.includes('farkı')) {
      answer = "Uluslararası girişimcilik genel bir sınır ötesi ticareti ifade ederken; dış ticaret girişimciliği ekonomik milliyetçilik, devlet teşvikleri ve ülkenin dış ticaret stratejileri ekseninde şekillenir.";
    } else if (q.includes('kim geliştirdi') || q.includes('kavramı kim')) {
      answer = "Dış ticaret girişimciliği kavramı ve teorik altyapısı Prof. Dr. Ahmet Yağmur Ersoy tarafından literatüre kazandırılmıştır.";
    } else if (q.includes('neden önemlidir') || q.includes('önemi')) {
      answer = "Ülkelerin küresel rekabette güç kazanması, ihracat hacminin artırılması ve ekonomik kırılganlıklara karşı dirençli bir yapı oluşturulması açısından kritik önem taşır.";
    } else if (q.includes('türkiye açısından') || q.includes('stratejik')) {
      answer = "Türkiye'nin dış ticaret açığını kapatması, ihracatta katma değeri artırması ve bölgesel sanayi merkezlerinin küresel entegrasyonu açısından stratejiktir.";
    } else if (q.includes('tr42') || q.includes('bölgesi neresidir')) {
      answer = "TR42 Bölgesi; Kocaeli, Sakarya, Düzce, Bolu ve Yalova illerini kapsayan Türkiye'nin en kritik sınai ve ekonomik hinterlantlarından biridir.";
    } else if (q.includes('neden tr42') || q.includes('neden yapıldı')) {
      answer = "TR42 Bölgesi, Türkiye'nin ihracat ve sanayi üretiminde öncü rol oynaması ve yoğun bir dış ticaret ekosistemine sahip olması nedeniyle seçilmiştir.";
    } else if (q.includes('hangi iller')) {
      answer = "Araştırmaya Kocaeli, Sakarya, Düzce, Bolu ve Yalova illeri dahil edilmiştir.";
    } else if (q.includes('kaç firma incelendi') || q.includes('kaç firma')) {
      answer = "Bölgede toplam 192 ihracatçı firma detaylı olarak incelenmiştir.";
    } else if (q.includes('en önemli bulgu') || q.includes('bulgu')) {
      answer = "En önemli bulgu, dış ticaret girişimciliğinin %86,8 olasılıkla finansal yapı ve özkaynak performansına dayanmasıdır.";
    } else if (q.includes('finans') && q.includes('ilk sırada')) {
      answer = "Küresel pazarlardaki yüksek maliyetler ve riskler, işletmelerin özkaynak gücünü ve finansal dayanıklılığını bir numaralı katalizör haline getirmektedir.";
    } else if (q.includes('rekabet')) {
      answer = "Küresel pazarlardaki sert dalgalanmalara uyum sağlamak ve pazar payını korumak için rekabet gücü stratejik bir kriterdir.";
    } else if (q.includes('risk yönetimi')) {
      answer = "Artan korumacılık eğilimleri ve tedarik zinciri kırılmalarına karşı proaktif önlem alabilmek için risk yönetimi şarttır.";
    } else if (q.includes('inovasyon')) {
      answer = "Sadece mevcut ürünleri satmak değil, katma değerli üretim süreçleri tasarlamak sürdürülebilir ihracatın belkemiğidir.";
    } else if (q.includes('devlet teşviklerinin etkisi')) {
      answer = "Mevcut miktar odaklı desteklerin ötesine geçilerek, firmaların kârlılık ve özsermaye yapısını destekleyen modellere dönüştürülmesi gerektiği tespit edilmiştir.";
    } else if (q.includes('belirleyiciler')) {
      answer = "Araştırma sonucunda dış ticaret girişimciliğini şekillendiren 9 temel belirleyici saptanmıştır.";
    } else if (q.includes('teşvikler nelerdir') || q.includes('tesvikler')) {
      answer = "İhracat teşvikleri; devletlerin üreticileri uluslararası pazarlara yönlendirmek, maliyetlerini azaltmak ve rekabet güçlerini artırmak için sunduğu finansal ve idari desteklerdir.";
    } else if (q.includes('nasıl yararlanabilir') || q.includes('yararlanma')) {
      answer = "Firmalar özkaynak performanslarını güçlendirerek, kârlılık odaklı projeler geliştirip ilgili kamu kurumlarına ve ihracatçı birliklerine başvuru yaparak yararlanabilirler.";
    } else if (q.includes('politika önerileri') || q.includes('öneriler')) {
      answer = "Kârlılık ve özsermaye odaklı destek modellerinin hayata geçirilmesi ve yeni korumacılığa karşı bölgesel pazar istihbarat ağlarının güçlendirilmesi önerilmektedir.";
    } else if (q.includes('kamu için')) {
      answer = "Kamu kurumlarının miktar bazlı desteklerden vazgeçip katma değer ve özsermaye gücünü ödüllendiren yeni nesil modeller kurması beklenmektedir.";
    } else if (q.includes('firmalar için')) {
      answer = "Firmaların risk yönetimi kapasitelerini artırmaları, pazar okuryazarlığına yatırım yapmaları ve inovatif üretim süreçlerine geçmeleri önerilir.";
    } else if (q.includes('yayınlar') || q.includes('makale') || q.includes('kitap') || q.includes('rapor')) {
      answer = "Araştırma bulgularına dayalı tam metin politika raporlarına, akademik makalelere ve bültenlere web sitemizin ilgili bölümlerinden erişebilirsiniz.";
    } else if (q.includes('yürütücü kim') || q.includes('yürütücü') || q.includes('ahmet yağmur')) {
      answer = "Proje Yürütücüsü Sakarya Üniversitesi'nden Prof. Dr. Ahmet Yağmur Ersoy'dur.";
    } else if (q.includes('araştırmacılar kimler') || q.includes('ekip') || q.includes('kimler')) {
      answer = "Ekip üyelerimiz: Doç. Dr. Caner Erden, Doç. Dr. Metin Saygılı, Dr. Öğr. Üyesi Çağdaş Ateş, Öğr. Gör. Dr. Semanur Yalçın, Dr. Ömer Alperen Onay, Öğr. Gör. Bilak Torkul ve Furkan Coşgun'dur.";
    } else if (q.includes('kaç il') || q.includes('kaç firma') || q.includes('örneklem') || q.includes('istatistik')) {
      answer = "Araştırma kapsamında 5 ilde (Kocaeli, Sakarya, Düzce, Bolu, Yalova) toplam 192 firma incelenmiş; 9 temel belirleyici analiz edilmiştir.";
    } else if (q.includes('nasıl kullanabilirim') || q.includes('nereden başlamalıyım')) {
      answer = "Üst menüden Proje, Bulgular, Yayınlar veya Araştırma Ekibimiz sekmelerine tıklayarak detaylı bilgi alabilirsiniz.";
    } else if (q.includes('iletişim')) {
      answer = "Destekleyen kurumlar ve iletişim bilgileri sayfanın en altındaki Footer alanında yer almaktadır.";
    }

    addMessage(answer, 'bot');
  }, 600);
}

if (sendBtn) sendBtn.addEventListener('click', handleUserQuery);
if (userInput) {
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUserQuery();
  });
}
