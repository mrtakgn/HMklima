import React, { useState } from 'react'
import './Galeri.css'

const Galeri = () => {
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [mediaType, setMediaType] = useState(null)

  // Örnek fotoğraflar - gerçek URL'lerle değiştirilebilir
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

  // Örnek videolar - gerçek URL'lerle değiştirilebilir
  const videos = [
    { id: 1, url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Klima Montaj Süreci' },
    { id: 2, url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Klima Bakımı Nasıl Yapılır?' },
    { id: 3, url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Profesyonel Servis Hizmetimiz' },
    { id: 4, url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Klima Tamir Süreci' },
  ]

  const openModal = (item, type) => {
    setSelectedMedia(item)
    setMediaType(type)
  }

  const closeModal = () => {
    setSelectedMedia(null)
    setMediaType(null)
  }

  return (
    <div className="galeri-page">
      

      <div className="container">
        {/* Fotoğraflar Bölümü */}
        <section className="galeri-section">
          <h2 className="section-title">
            <span className="title-icon">📸</span>
            Fotoğraflar
          </h2>
          <div className="photo-grid">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="photo-item"
                onClick={() => openModal(photo, 'photo')}
              >
                <div className="photo-overlay">
                  <span className="photo-title">{photo.title}</span>
                  <span className="photo-view">Görüntüle</span>
                </div>
                <img src={photo.url} alt={photo.title} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* Videolar Bölümü */}
        <section className="galeri-section">
          <h2 className="section-title">
            <span className="title-icon">🎥</span>
            Videolar
          </h2>
          <div className="video-grid">
            {videos.map((video) => (
              <div
                key={video.id}
                className="video-item"
                onClick={() => openModal(video, 'video')}
              >
                <div className="video-overlay">
                  <span className="video-title">{video.title}</span>
                  <div className="play-button">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="30" fill="rgba(255, 255, 255, 0.9)" />
                      <path d="M25 20L40 30L25 40V20Z" fill="var(--primary-color)" />
                    </svg>
                  </div>
                </div>
                <div className="video-thumbnail">
                  <img
                    src={`https://img.youtube.com/vi/${video.url.split('/embed/')[1]}/maxresdefault.jpg`}
                    alt={video.title}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            {mediaType === 'photo' ? (
              <img src={selectedMedia.url} alt={selectedMedia.title} className="modal-image" />
            ) : (
              <div className="modal-video">
                <iframe
                  src={selectedMedia.url}
                  title={selectedMedia.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <h3 className="modal-title">{selectedMedia.title}</h3>
          </div>
        </div>
      )}
    </div>
  )
}

export default Galeri


