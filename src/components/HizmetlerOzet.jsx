import React from 'react'
import './HizmetlerOzet.css'

const HizmetlerOzet = () => {
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
      icon: '💰',
      title: 'İkinci El Klima Alım Satımı',
      description: 'İkinci el klima alım ve satım hizmeti ile uygun fiyatlı çözümler.',
      details: [
        'Kaliteli ikinci el klima satışı',
        'İkinci el klima alımı',
        'Klima değer tespiti',
        'Garantili ürünler',
        'Test edilmiş cihazlar',
        'Montaj hizmeti dahil'
      ],
      price: 'Uygun Fiyatlar'
    }
  ]

  return (
    <section className="hizmetler-ozet">
      <div className="container">
        <h2 className="section-title">Hizmetlerimiz</h2>
        <p className="section-subtitle">
          Klima ihtiyaçlarınız için kapsamlı ve profesyonel çözümler
        </p>
        
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
  )
}

export default HizmetlerOzet

