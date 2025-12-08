import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Hash değişikliklerini dinle
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
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
        }, 200)
      }
    }

    // Sayfa yüklendiğinde hash varsa scroll yap
    setTimeout(handleHashChange, 500)
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavClick = (e, hash) => {
    e.preventDefault()
    e.stopPropagation()
    closeMenu()
    
    if (hash === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.history.pushState(null, '', '/')
      return
    }

    // Scroll işlemini hemen yap
    const scrollToElement = () => {
      const element = document.querySelector(hash)
      if (element) {
        const headerHeight = 100
        const yOffset = -headerHeight
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

        window.scrollTo({
          top: y,
          behavior: 'smooth'
        })
        window.history.pushState(null, '', hash)
      }
    }

    // Hemen dene, eğer olmazsa kısa bir gecikme ile tekrar dene
    scrollToElement()
    setTimeout(scrollToElement, 50)
  }

  const isActive = (hash) => {
    if (hash === '#' && !window.location.hash) return 'active'
    return window.location.hash === hash ? 'active' : ''
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo" onClick={(e) => handleNavClick(e, '#')}>
            <span className="logo-text">HM KLİMA</span>
          </a>
          
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <a 
              href="#"
              className={`nav-link ${isActive('#')}`}
              onClick={(e) => handleNavClick(e, '#')}
            >
              Ana Sayfa
            </a>
            <a 
              href="#hakkimizda"
              className={`nav-link ${isActive('#hakkimizda')}`}
              onClick={(e) => handleNavClick(e, '#hakkimizda')}
            >
              Hakkımızda
            </a>
            <a 
              href="#hizmetlerimiz"
              className={`nav-link ${isActive('#hizmetlerimiz')}`}
              onClick={(e) => handleNavClick(e, '#hizmetlerimiz')}
            >
              Hizmetlerimiz
            </a>
            <a 
              href="#iletisim"
              className={`nav-link ${isActive('#iletisim')}`}
              onClick={(e) => handleNavClick(e, '#iletisim')}
            >
              İletişim
            </a>
          </nav>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

