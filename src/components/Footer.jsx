import React from 'react'
import './Footer.css'

const Footer = () => {
  const handleLinkClick = (e, hash) => {
    e.preventDefault()
    if (hash === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const element = document.querySelector(hash)
    if (element) {
      const headerHeight = 100
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementTop - headerHeight
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HM KLİMA</h3>
            <p>Profesyonel klima tamir, bakım ve montaj hizmetleri. Müşteri memnuniyeti bizim önceliğimizdir.</p>
          </div>

          <div className="footer-section">
            <h4>Hızlı Linkler</h4>
            <ul>
              <li><a href="#" onClick={(e) => handleLinkClick(e, '#')}>Ana Sayfa</a></li>
              <li><a href="#hakkimizda" onClick={(e) => handleLinkClick(e, '#hakkimizda')}>Hakkımızda</a></li>
              <li><a href="#hizmetlerimiz" onClick={(e) => handleLinkClick(e, '#hizmetlerimiz')}>Hizmetlerimiz</a></li>
              <li><a href="#iletisim" onClick={(e) => handleLinkClick(e, '#iletisim')}>İletişim</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Hizmetlerimiz</h4>
            <ul>
              <li>Klima Tamiri</li>
              <li>Klima Bakımı</li>
              <li>Klima Montajı</li>
              <li>Gaz Dolum</li>
              <li>İkinci El Klima Alım Satımı</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>İletişim</h4>
            <ul className="contact-info">
              <li>
                <span className="icon">📞</span>
                <div>
                  <div>Mine Usta: <a href="tel:05413203885">0541 320 38 85</a></div>
                  <div>Hasan Usta: <a href="tel:05413203885">0541 320 38 85</a></div>
                </div>
              </li>
              <li>
                <span className="icon">✉️</span>
                <span>info@hmklima.com</span>
              </li>
              <li>
                <span className="icon">📍</span>
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HM KLİMA. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

