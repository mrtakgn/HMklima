import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Galeri from './pages/Galeri'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeri" element={<Galeri />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

