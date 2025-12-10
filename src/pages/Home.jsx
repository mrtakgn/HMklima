import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import HakkimizdaOzet from '../components/HakkimizdaOzet'
import FotoSlider from '../components/FotoSlider'
import HizmetlerOzet from '../components/HizmetlerOzet'
import NedenBiz from '../components/NedenBiz'
import CagriFormu from '../components/CagriFormu'
import './Home.css'

const Home = () => {
  useEffect(() => {
    // Sayfa yüklendiğinde hash varsa scroll yap
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          const headerHeight = 100
          const yOffset = -headerHeight
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

          window.scrollTo({
            top: y,
            behavior: 'smooth'
          })
        }
      }, 200)
    }
  }, [])

  return (
    <div className="home">
      <Hero />
      <section id="hakkimizda">
        <HakkimizdaOzet />
      </section>
      <FotoSlider />
      <section id="hizmetlerimiz">
        <HizmetlerOzet />
      </section>
      <NedenBiz />
      <section id="iletisim">
        <CagriFormu />
      </section>
    </div>
  )
}

export default Home

