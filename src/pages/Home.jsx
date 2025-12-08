import React from 'react'
import Hero from '../components/Hero'
import HakkimizdaOzet from '../components/HakkimizdaOzet'
import HizmetlerOzet from '../components/HizmetlerOzet'
import NedenBiz from '../components/NedenBiz'
import CagriFormu from '../components/CagriFormu'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <section id="hakkimizda">
        <HakkimizdaOzet />
      </section>
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

