import React from 'react'
import './Hizmetler.css'

const Hizmetler = () => {
  const hizmetler = [
    {
      icon: '🔧',
      title: 'Klima Tamiri',
      description: 'Tüm marka ve modellerde profesyonel klima tamiri hizmeti sunuyoruz.',
      details: [
        'Kompresör arızaları',
        'Fan motoru tamiri',
        'Elektronik kart tamiri',
        'Gaz kaçak tespiti ve onarımı',
        'Termostat arızaları',
        'Kondenser ve evaporatör temizliği'
      ],
      price: 'Ücretsiz Keşif'
    },
    {
      icon: '🛠️',
      title: 'Klima Bakımı',
      description: 'Düzenli bakım ile klimanızın ömrünü uzatın, enerji tasarrufu sağlayın.',
      details: [
        'Filtre temizliği ve değişimi',
        'Gaz basıncı kontrolü',
        'Kondenser ve evaporatör temizliği',
        'Elektrik bağlantı kontrolü',
        'Genel performans kontrolü',
        'Bakım raporu'
      ],
      price: 'Uygun Fiyatlar'
    },
    {
      icon: '⚙️',
      title: 'Klima Montajı',
      description: 'Uzman ekibimiz ile güvenli ve profesyonel klima montajı yapıyoruz.',
      details: [
        'Ücretsiz keşif ve planlama',
        'Duvar ve tavan montajı',
        'Elektrik bağlantıları',
        'Drenaj hattı kurulumu',
        'Gaz dolumu ve test',
        'Kullanım eğitimi'
      ],
      price: 'Ücretsiz Keşif'
    },
    {
      icon: '💨',
      title: 'Gaz Dolum',
      description: 'Orijinal gaz ile hızlı ve güvenli dolum hizmeti.',
      details: [
        'Orijinal R410A gaz',
        'Orijinal R22 gaz',
        'Basınç kontrolü',
        'Kaçak testi',
        'Performans testi',
        '1 yıl garanti'
      ],
      price: 'Fiyat Garantisi'
    },
    {
      icon: '🧹',
      title: 'Klima Temizliği',
      description: 'Derinlemesine temizlik ile klimanızın verimliliğini artırın.',
      details: [
        'İç ünite temizliği',
        'Dış ünite temizliği',
        'Filtre değişimi',
        'Bakteri ve mantar temizliği',
        'Dezenfeksiyon',
        'Koku giderme'
      ],
      price: 'Uygun Fiyatlar'
    },
    {
      icon: '🚚',
      title: 'Klima Taşıma',
      description: 'Güvenli ve profesyonel klima taşıma hizmeti.',
      details: [
        'Dikkatli söküm',
        'Güvenli taşıma',
        'Yeni konum montajı',
        'Test ve kontrol',
        'Garantili işçilik',
        '7/24 hizmet'
      ],
      price: 'Ücretsiz Keşif'
    }
  ]

  return (
    <div className="hizmetler-page">
      <section className="page-header">
        <div className="container">
          <h1>Hizmetlerimiz</h1>
          <p>Klima ihtiyaçlarınız için kapsamlı ve profesyonel çözümler</p>
        </div>
      </section>

      <section className="hizmetler-detay">
        <div className="container">
          <div className="hizmetler-detay-grid">
            {hizmetler.map((hizmet, index) => (
              <div key={index} className="hizmet-detay-card">
                <div className="hizmet-detay-header">
                  <div className="hizmet-detay-icon">{hizmet.icon}</div>
                  <div>
                    <h3>{hizmet.title}</h3>
                    <span className="hizmet-price">{hizmet.price}</span>
                  </div>
                </div>
                <p className="hizmet-detay-description">{hizmet.description}</p>
                <ul className="hizmet-detay-list">
                  {hizmet.details.map((detail, idx) => (
                    <li key={idx}>✓ {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hizmetler



