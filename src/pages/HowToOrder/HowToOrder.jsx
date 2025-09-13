import React from 'react'
import Header from '../../components/Header/Header'

const HowToOrder = () => {
  return (
    <div>
      <Header/>
      <main className="section">
        <div className="container">
          {/* Hero Section - Different from About */}
          <section className="order-hero">
            <div className="order-hero-content">
              <div className="order-hero-text">
                <h1 className="order-title">Buyurtma berish</h1>
                <p className="order-subtitle">4 ta oddiy qadamda atiringizni buyurtma qiling</p>
                <div className="order-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">⚡</span>
                    <span>Tez va oson</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">📱</span>
                    <span>Telegram orqali</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🎥</span>
                    <span>Video qadoqlash</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step-by-Step Process - Vertical Timeline */}
          <section className="steps-section">
            <h2 className="steps-title">Buyurtma jarayoni</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="step-number">1</span>
                </div>
                <div className="timeline-content">
                  <h3>Mahsulotni tanlang</h3>
                  <p>Katalogdan kerakli atirni toping va hajmni belgilang (100ml / 10ml / 5ml)</p>
                  <div className="step-tags">
                    <span className="tag">Katalog</span>
                    <span className="tag">Hajm tanlash</span>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="step-number">2</span>
                </div>
                <div className="timeline-content">
                  <h3>Telegramga yozing</h3>
                  <p>Mahsulot nomi va hajmini yozib, bizga yuboring. Operator tezda javob beradi</p>
                  <div className="step-tags">
                    <span className="tag">Telegram</span>
                    <span className="tag">Tez javob</span>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="step-number">3</span>
                </div>
                <div className="timeline-content">
                  <h3>Ma'lumotlarni berish</h3>
                  <p>Yetkazib berish manzili va telefon raqamingizni operatorga ayting</p>
                  <div className="step-tags">
                    <span className="tag">Manzil</span>
                    <span className="tag">Telefon</span>
                  </div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <span className="step-number">4</span>
                </div>
                <div className="timeline-content">
                  <h3>Video qadoqlash</h3>
                  <p>Mahsulotni video qadoqlash va kuzatuv raqami bilan jo'natamiz</p>
                  <div className="step-tags">
                    <span className="tag">Video qadoqlash</span>
                    <span className="tag">Kuzatuv raqami</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid - Different Layout */}
          <section className="features-section">
            <h2 className="features-title">Nima uchun bizni tanlash kerak?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>100% Original</h3>
                <p>Barcha mahsulotlar original va kafolatli</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚚</div>
                <h3>Tez Yetkazib Berish</h3>
                <p>24 soat ichida jo'natish, butun O'zbekiston bo'ylab</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📞</div>
                <h3>24/7 Qo'llab-quvvatlash</h3>
                <p>Doimiy operator xizmati va yordam</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎥</div>
                <h3>Video Qadoqlash</h3>
                <p>Mahsulot qadoqlanish jarayonini ko'rish</p>
              </div>
            </div>
          </section>

          {/* Contact CTA - Different Style */}
          <section className="contact-cta">
            <div className="cta-content">
              <h2>Tayyor buyurtma berish uchun?</h2>
              <p>Telegram orqali bizga yozing va 5 daqiqada buyurtmangizni rasmiylashtiring</p>
              <a className="cta-button" href="https://t.me/umarovparfum" target="_blank" rel="noreferrer">
                <span className="cta-icon">📱</span>
                <span>Telegramga yozish</span>
                <span className="cta-arrow">→</span>
              </a>
              <div className="cta-guarantees">
                <span>✅ Tez javob</span>
                <span>✅ Professional xizmat</span>
                <span>✅ 24/7 mavjud</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default HowToOrder


