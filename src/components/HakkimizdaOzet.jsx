import React from 'react'
import './HakkimizdaOzet.css'

const HakkimizdaOzet = () => {
  return (
    <section className="hakkimizda-ozet">
      <div className="container">
        <h2 className="section-title">Hakkımızda</h2>

        <div className="hakkimizda-content-wrapper">
          <div className="hakkimizda-text">
           
            <p>
              HM KLİMA olarak, yıllardır klima sektöründe müşteri memnuniyetini 
              ön planda tutarak hizmet vermekteyiz. Tecrübeli ekibimiz ve 
              kaliteli hizmet anlayışımız ile binlerce müşterimize hizmet verdik.
            </p>
            <p>
              Klima tamiri, bakımı, montajı ve tüm klima ihtiyaçlarınız için 
              yanınızdayız. Modern ekipmanlarımız ve güncel teknoloji bilgisi ile 
              her marka ve model klimaya hizmet verebiliyoruz.
            </p>
          </div>

          <div className="degerler-grid">
            <div className="deger-card">
              <h4>Misyonumuz</h4>
              <p>
                Müşterilerimize en kaliteli klima hizmetlerini sunarak, 
                yaşam alanlarında konfor ve sağlık sağlamak.
              </p>
            </div>
            <div className="deger-card">
              <h4>Vizyonumuz</h4>
              <p>
                Sektörde öncü ve güvenilir bir marka olarak, sürekli gelişen 
                teknolojiye uyum sağlayarak hizmet kalitemizi artırmak.
              </p>
            </div>
            <div className="deger-card">
              <h4>Değerlerimiz</h4>
              <p>
                Müşteri memnuniyeti, dürüstlük, kalite, hızlı hizmet ve 
                profesyonellik temel değerlerimizdir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HakkimizdaOzet

