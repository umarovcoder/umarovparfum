import React from 'react'
import Header from '../../components/Header/Header'
import atir from '../../assets/atir.png'
import gul from '../../assets/gul2.png'

const About = () => {
  return (
    <div>
      <Header/>
      <main className="section">
        <div className="container">
          <section className="about-hero-grid">
            <div className="about-hero-left reveal-up">
              <h1 className="about-title">Faqat original atirlar. Raspiv ham bor.</h1>
              <p className="about-sub">Umarov Parfum’da siz 100% original brend atirlarni o‘zingizga mos hajmda xarid qilasiz. Sifat kafolati, qulay narx va tez yetkazib berish — barchasi bir joyda.</p>
              <div className="about-pills">
                <span className="pill">Original kafolat</span>
                <span className="pill">5 ml / 10 ml raspiv</span>
                <span className="pill">Butun O‘zbekistonga yetkazib berish</span>
              </div>
            </div>
            <div className="about-hero-right collage reveal-up-delay">
              <div className="collage-a float-slow"><img src={atir} alt="perfume"/></div>
              <div className="collage-b float-slow"><img src={gul} alt="flower"/></div>
              <div className="collage-c float-slow"/>
            </div>
          </section>

          <div className="trust-marquee" aria-hidden="true">
            <div className="marquee-track">
              <span>100% ORIGINAL</span>
              <span>RASPV QULAY NARX</span>
              <span>VIDEO QADOQLASH</span>
              <span>TEZ YETKAZIB BERISH</span>
              <span>100% ORIGINAL</span>
              <span>RASPV QULAY NARX</span>
              <span>VIDEO QADOQLASH</span>
              <span>TEZ YETKAZIB BERISH</span>
            </div>
          </div>

          <section style={{marginTop: 28}}>
            <div className="grid" style={{gridTemplateColumns:'repeat(3, minmax(0,1fr))', gap:'16px'}}>
              <div className="card reveal-up"><div className="card-body"><div className="badge">Original</div><h3 className="card-title">Soxtaga joy yo‘q</h3><p className="card-text">Har bir flakon hamkor omboridan keladi. Batch-code va holat tekshiriladi.</p></div></div>
              <div className="card reveal-up"><div className="card-body"><div className="badge">Raspiv</div><h3 className="card-title">Mos hajm, mos narx</h3><p className="card-text">5 ml va 10 ml variantlar. Toza shisha va sifatli atomizer.</p></div></div>
              <div className="card reveal-up"><div className="card-body"><div className="badge">Yetkazib berish</div><h3 className="card-title">Xavfsiz qadoqlash</h3><p className="card-text">Butun respublika bo‘ylab tez yetkazib beramiz, kuzatuv raqami bilan.</p></div></div>
            </div>
          </section>

          <section className="guarantee" style={{marginTop: 28}}>
            <div className="card reveal-up" style={{borderColor:'var(--primary)'}}>
              <div className="card-body">
                <h3 className="card-title">Kafolat va qaytarish</h3>
                <p className="card-text">Mahsulot original emasligi aniqlansa, to‘liq qaytarish yoki almashtirish. Yetkazib berishda shikastlansa, qayta yuboramiz.</p>
                <div className="about-pills"><span className="pill">Batch-code tekshiruvi</span><span className="pill">Video qadoqlash</span><span className="pill">24/7 aloqa</span></div>
              </div>
            </div>
          </section>

          <section style={{marginTop: 24}}>
            <div className="stats reveal-up">
              <div className="stat-item"><strong>2000+</strong><span>Mamnun mijoz</span></div>
              <div className="stat-item"><strong>500+</strong><span>Brend nomlari</span></div>
              <div className="stat-item"><strong>24 soat</strong><span>Ichida jo‘natish</span></div>
            </div>
          </section>

          <section className="faq" style={{marginTop: 28}}>
            <details className="faq-item reveal-up"><summary>Raspiv qanday amalga oshiriladi?</summary><p>Steril sharoitda, toza shishalarga quyib, etiketa va muhr bilan jo‘natamiz.</p></details>
            <details className="faq-item reveal-up"><summary>Original ekanligini qanday bilaman?</summary><p>Har bir mahsulot batch-code va tashqi ko‘rinish bo‘yicha tekshiriladi. Video qadoqlash mavjud.</p></details>
            <details className="faq-item reveal-up"><summary>Yetkazib berish qancha vaqt oladi?</summary><p>Odatda 24 soat ichida jo‘natamiz. Hududingizga qarab 1–3 ish kuni.</p></details>
          </section>
        </div>
      </main>
    </div>
  )
}

export default About

