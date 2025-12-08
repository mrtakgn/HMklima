import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (hash) => {
    const element = document.querySelector(hash)
    if (element) {
      const headerHeight = 100
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementTop - headerHeight
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      })
      window.history.pushState(null, '', hash)
    }
  }

  return (
    <>
      <section className="hero">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              HM KLİMA
            </h1>
            <h2 className="hero-subtitle-main">
              Yaz Serin, Kış Sıcak
            </h2>
            <p className="hero-description">
              Profesyonel klima tamir, bakım ve montaj hizmetleri.
            </p>
            <p className="hero-description-secondary">
              Hızlı çözüm garantisi ile yanınızdayız.
            </p>
            <div className="hero-buttons">
              <a href="#iletisim" className="btn btn-primary" onClick={(e) => {
                e.preventDefault()
                scrollToSection('#iletisim')
              }}>
                📞 Hemen Arayın
              </a>
              <a href="#hizmetlerimiz" className="btn btn-secondary" onClick={(e) => {
                e.preventDefault()
                scrollToSection('#hizmetlerimiz')
              }}>
                🛠️ Hizmetlerimiz
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-features-section">
        <div className="container">
          <div className="hero-features">
            <div className="hero-feature">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">⚡</span>
              </div>
              <span className="feature-text">Hızlı Servis</span>
            </div>
            <div className="hero-feature">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">✓</span>
              </div>
              <span className="feature-text">Garantili İş</span>
            </div>
            <div className="hero-feature">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">🏆</span>
              </div>
              <span className="feature-text">Uzman Ekip</span>
            </div>
            <div className="hero-feature">
              <div className="feature-icon-wrapper">
                <span className="feature-icon">💰</span>
              </div>
              <span className="feature-text">Uygun Fiyat</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

