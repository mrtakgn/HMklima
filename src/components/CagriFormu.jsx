import React, { useState } from 'react'
import './CagriFormu.css'

const CagriFormu = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form gönderimi simülasyonu
    console.log('Form gönderildi:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section className="cagri-formu">
      <div className="container">
        <div className="form-wrapper">
          <div className="form-content">
            <h2>Hemen Teklif Alın</h2>
            <p>
              Formu doldurun, size en kısa sürede dönüş yapalım. 
              Acil durumlar için bizi arayın!
            </p>
            <div className="contact-info-box">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Telefon</strong>
                  <p>0555 123 45 67</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>E-posta</strong>
                  <p>info@klimaadami.com</p>
                </div>
              </div>
            </div>
          </div>

          <form className="cagri-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Formunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Ad Soyad *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Adınız ve soyadınız"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefon *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="0555 123 45 67"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ornek@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mesajınız</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Klimanız ile ilgili detayları yazabilirsiniz..."
              ></textarea>
            </div>

            <button type="submit" className="btn form-submit-btn">
              Teklif İste
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CagriFormu

