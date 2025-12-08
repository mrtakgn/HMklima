import React from 'react'
import './Hakkimizda.css'

const Hakkimizda = () => {
  return (
    <div className="hakkimizda-page">
      <section className="page-header">
        <div className="container">
          <h1>Hakkımızda</h1>
          <p>KLİMA ADAMI olarak yıllardır sektörde güvenilir hizmet sunuyoruz</p>
        </div>
      </section>

      <section className="hakkimizda-content">
        <div className="container">
          <div className="hakkimizda-text">
            <h2>KLİMA ADAMI Hikayesi</h2>
            <p>
              KLİMA ADAMI olarak, yıllardır klima sektöründe müşteri memnuniyetini 
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
              <h3>Misyonumuz</h3>
              <p>
                Müşterilerimize en kaliteli klima hizmetlerini sunarak, 
                yaşam alanlarında konfor ve sağlık sağlamak.
              </p>
            </div>
            <div className="deger-card">
              <h3>Vizyonumuz</h3>
              <p>
                Sektörde öncü ve güvenilir bir marka olarak, sürekli gelişen 
                teknolojiye uyum sağlayarak hizmet kalitemizi artırmak.
              </p>
            </div>
            <div className="deger-card">
              <h3>Değerlerimiz</h3>
              <p>
                Müşteri memnuniyeti, dürüstlük, kalite, hızlı hizmet ve 
                profesyonellik temel değerlerimizdir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hakkimizda

