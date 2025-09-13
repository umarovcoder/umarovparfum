import React from 'react'
import Header from '../../components/Header/Header'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' })
  const [status, setStatus] = React.useState({ loading: false, ok: null, msg: '' })
  const [activeTab, setActiveTab] = React.useState('telegram')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ loading: false, ok: false, msg: 'Iltimos, barcha maydonlarni toʻldiring.' })
      return
    }
    try {
      setStatus({ loading: true, ok: null, msg: '' })
      const serviceId = import.meta.env.service_so67u9q
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'umarovalisher132@gmail.com'
      }, { publicKey })
      setStatus({ loading: false, ok: true, msg: 'Xabaringiz yuborildi! Tez orada siz bilan bogʻlanamiz.' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: 'Yuborishda xatolik. Keyinroq urinib koʻring.' })
    }
  }

  return (
    <div>
      <Header/>
      <main className="section">
        <div className="container">
          {/* Hero Section */}
          <section className="contact-hero">
            <div className="contact-hero-content">
              <h1 className="contact-title">Biz bilan bog'laning</h1>
              <p className="contact-subtitle">Savollar, buyurtmalar yoki maslahat uchun bizga murojaat qiling</p>
              <div className="contact-stats">
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Qo'llab-quvvatlash</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5 min</span>
                  <span className="stat-label">Tez javob</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Mamnun mijozlar</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="contact-methods">
            <div className="contact-tabs">
              <button 
                className={`contact-tab ${activeTab === 'telegram' ? 'active' : ''}`}
                onClick={() => setActiveTab('telegram')}
              >
                <span className="tab-icon">📱</span>
                <span>Telegram</span>
              </button>
              <button 
                className={`contact-tab ${activeTab === 'email' ? 'active' : ''}`}
                onClick={() => setActiveTab('email')}
              >
                <span className="tab-icon">✉️</span>
                <span>Email</span>
              </button>
              <button 
                className={`contact-tab ${activeTab === 'phone' ? 'active' : ''}`}
                onClick={() => setActiveTab('phone')}
              >
                <span className="tab-icon">📞</span>
                <span>Telefon</span>
              </button>
            </div>

            <div className="contact-content">
              {activeTab === 'telegram' && (
                <div className="contact-method-card">
                  <div className="method-header">
                    <div className="method-icon">📱</div>
                    <div className="method-info">
                      <h3>Telegram orqali</h3>
                      <p>Eng tez va qulay usul. Darhol javob oling</p>
                    </div>
                  </div>
                  <div className="method-actions">
                    <a className="method-btn primary" href="https://t.me/umarovparfum" target="_blank" rel="noreferrer">
                      <span>Telegramga yozish</span>
                      <span className="btn-arrow">→</span>
                    </a>
                    <div className="method-features">
                      <span className="feature">⚡ Darhol javob</span>
                      <span className="feature">📷 Rasm yuborish</span>
                      <span className="feature">🎥 Video qadoqlash</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'email' && (
                <div className="contact-method-card">
                  <div className="method-header">
                    <div className="method-icon">✉️</div>
                    <div className="method-info">
                      <h3>Email orqali</h3>
                      <p>Batafsil xabarlar uchun email yuboring</p>
                    </div>
                  </div>
                  <div className="method-actions">
                    <a className="method-btn secondary" href="mailto:umarovalisher132@gmail.com">
                      <span>Email yuborish</span>
                      <span className="btn-arrow">→</span>
                    </a>
                    <div className="method-features">
                      <span className="feature">📝 Batafsil xabar</span>
                      <span className="feature">📎 Fayl biriktirish</span>
                      <span className="feature">📧 Rasmiy javob</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'phone' && (
                <div className="contact-method-card">
                  <div className="method-header">
                    <div className="method-icon">📞</div>
                    <div className="method-info">
                      <h3>Telefon orqali</h3>
                      <p>To'g'ridan-to'g'ri gaplashish uchun qo'ng'iroq qiling</p>
                    </div>
                  </div>
                  <div className="method-actions">
                    <a className="method-btn secondary" href="tel:+998901234567">
                      <span>Qo'ng'iroq qilish</span>
                      <span className="btn-arrow">→</span>
                    </a>
                    <div className="method-features">
                      <span className="feature">🗣️ To'g'ridan-to'g'ri</span>
                      <span className="feature">⚡ Tez hal qilish</span>
                      <span className="feature">💬 Shaxsiy maslahat</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Contact Form */}
          <section className="contact-form-section">
            <div className="form-container">
              <div className="form-header">
                <h2>Xabar yuborish</h2>
                <p>Forma orqali batafsil xabar yuboring</p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Ismingiz</label>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    type="text" 
                    placeholder="Ismingizni kiriting" 
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email manzili</label>
                  <input 
                    name="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    type="email" 
                    placeholder="siz@example.com" 
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Xabaringiz</label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange} 
                    rows="5" 
                    placeholder="Qanday yordam bera olamiz?" 
                    className="form-textarea"
                    required
                  />
                </div>
                
                {status.msg && (
                  <div className={`form-message ${status.ok ? 'success' : 'error'}`}>
                    {status.msg}
                  </div>
                )}
                
                <button className="form-submit" type="submit" disabled={status.loading}>
                  {status.loading ? (
                    <>
                      <span className="loading-spinner"></span>
                      Yuborilmoqda…
                    </>
                  ) : (
                    <>
                      <span>Xabar yuborish</span>
                      <span className="btn-arrow">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="contact-faq">
            <h2 className="faq-title">Tez-tez so'raladigan savollar</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Qancha vaqtda javob berasiz?</h3>
                <p>Telegram orqali 5 daqiqada, email orqali 24 soat ichida javob beramiz.</p>
              </div>
              <div className="faq-item">
                <h3>Qanday to'lov usullari mavjud?</h3>
                <p>Naqd pul, bank kartasi, Click, Payme va boshqa to'lov usullari qabul qilinadi.</p>
              </div>
              <div className="faq-item">
                <h3>Yetkazib berish qancha vaqt oladi?</h3>
                <p>Toshkent shahri uchun 1 kun, viloyatlar uchun 2-3 kun ichida yetkazib beramiz.</p>
              </div>
              <div className="faq-item">
                <h3>Mahsulot original ekanligini qanday bilaman?</h3>
                <p>Barcha mahsulotlar batch-code tekshiruvi va video qadoqlash bilan kafolatlanadi.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Contact

