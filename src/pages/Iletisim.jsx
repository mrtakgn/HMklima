import React, { useState } from 'react'
import CagriFormu from '../components/CagriFormu'
import './Iletisim.css'

const Iletisim = () => {
  return (
    <div className="iletisim-page">
      <section className="page-header">
        <div className="container">
          <h1>İletişim</h1>
          <p>Bizimle iletişime geçin, size en kısa sürede dönüş yapalım</p>
        </div>
      </section>

      <section className="iletisim-detay">
        <div className="container">
          <div className="iletisim-grid">
            <div className="iletisim-bilgileri">
              <h2>İletişim Bilgileri</h2>
              <p className="iletisim-aciklama">
                Klima ihtiyaçlarınız için 7/24 hizmetinizdeyiz. 
                Hemen arayın veya formu doldurun.
              </p>

              <div className="iletisim-item">
                <div className="iletisim-icon">📞</div>
                <div className="iletisim-content">
                  <h3>Telefon</h3>
                  <p>0555 123 45 67</p>
                  <span>7/24 Hizmet</span>
                </div>
              </div>

              <div className="iletisim-item">
                <div className="iletisim-icon">✉️</div>
                <div className="iletisim-content">
                  <h3>E-posta</h3>
                  <p>info@klimaadami.com</p>
                  <span>24 Saat İçinde Dönüş</span>
                </div>
              </div>

              <div className="iletisim-item">
                <div className="iletisim-icon">📍</div>
                <div className="iletisim-content">
                  <h3>Adres</h3>
                  <p>İstanbul, Türkiye</p>
                  <span>Şehir Geneli Hizmet</span>
                </div>
              </div>

              <div className="iletisim-item">
                <div className="iletisim-icon">🕒</div>
                <div className="iletisim-content">
                  <h3>Çalışma Saatleri</h3>
                  <p>Pazartesi - Pazar</p>
                  <span>7/24 Açık</span>
                </div>
              </div>
            </div>

            <div className="harita-container">
              <div className="harita-placeholder">
                <p>📍</p>
                <p>Harita Görünümü</p>
                <p className="harita-note">Google Maps entegrasyonu buraya eklenebilir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CagriFormu />
    </div>
  )
}

export default Iletisim

