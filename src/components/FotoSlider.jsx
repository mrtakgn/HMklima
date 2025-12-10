import React, { useState, useEffect } from 'react'
import './FotoSlider.css'

const FotoSlider = () => {
  // Galerideki fotoğraflar
  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=600&fit=crop', title: 'Klima Montajı' },
    { id: 2, url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop', title: 'Klima Bakımı' },
    { id: 3, url: 'https://images.unsplash.com/photo-1621905252472-8af5f8d8b7e2?w=800&h=600&fit=crop', title: 'Profesyonel Servis' },
    { id: 4, url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop', title: 'Klima Tamiri' },
    { id: 5, url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop', title: 'Klima Temizliği' },
    { id: 6, url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop', title: 'Montaj Hizmeti' },
    { id: 7, url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=600&fit=crop', title: 'Teknik Destek' },
    { id: 8, url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop', title: 'Klima Kurulumu' },
    { id: 9, url: 'https://images.unsplash.com/photo-1621905252472-8af5f8d8b7e2?w=800&h=600&fit=crop', title: 'Bakım Hizmeti' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }, 4000) // 4 saniyede bir değişir

    return () => clearInterval(interval)
  }, [photos.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  return (
    <section className="foto-slider">
      <div className="container">
        <div className="slider-wrapper">
          <div className="slider-container">
            <button className="slider-btn slider-btn-prev" onClick={goToPrevious}>
              &#8249;
            </button>
            <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {photos.map((photo, index) => (
                <div key={photo.id} className="slide">
                  <img src={photo.url} alt={photo.title} />
                  <div className="slide-overlay">
                    <h3 className="slide-title">{photo.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <button className="slider-btn slider-btn-next" onClick={goToNext}>
              &#8250;
            </button>
          </div>
          <div className="slider-dots">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FotoSlider


