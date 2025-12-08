import React from 'react'
import './NedenBiz.css'

const NedenBiz = () => {
  const ozellikler = [
    {
      icon: '⏱️',
      title: '7/24 Hızlı Servis',
      description: 'Acil durumlarınız için 7 gün 24 saat hızlı servis hizmeti'
    },
    {
      icon: '🛡️',
      title: 'Garantili İş',
      description: 'Tüm işlerimizde yazılı garanti veriyoruz'
    },
    {
      icon: '👨‍🔧',
      title: 'Uzman Ekip',
      description: 'Yılların deneyimine sahip uzman teknisyenlerimiz'
    },
    {
      icon: '💰',
      title: 'Uygun Fiyat',
      description: 'Kaliteli hizmet, uygun fiyat garantisi'
    },
    {
      icon: '🎯',
      title: 'Profesyonel Hizmet',
      description: 'Her detayda profesyonellik ve müşteri memnuniyeti'
    },
    {
      icon: '📞',
      title: 'Kolay İletişim',
      description: 'Tek tıkla ulaşabileceğiniz hızlı iletişim kanalları'
    }
  ]

  return (
    <section className="neden-biz">
      <div className="container">
        <h2 className="section-title">Neden HM KLİMA?</h2>
        <p className="section-subtitle">
          Müşteri memnuniyeti odaklı hizmet anlayışımız ile sektörde öncüyüz
        </p>

        <div className="ozellikler-grid">
          {ozellikler.map((ozellik, index) => (
            <div key={index} className="ozellik-card">
              <div className="ozellik-icon">{ozellik.icon}</div>
              <h3>{ozellik.title}</h3>
              <p>{ozellik.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NedenBiz

