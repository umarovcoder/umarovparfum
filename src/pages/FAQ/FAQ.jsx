import React from 'react'
import Header from '../../components/Header/Header'

const FAQ = () => {
  return (
    <div>
      <Header/>
      <main className="section">
        <div className="container">
          <h1 style={{marginTop:0}}>Tez-tez so‘raladigan savollar</h1>
          <div className="faq" style={{marginTop:12}}>
            <details className="faq-item"><summary>Raspiv qanday amalga oshiriladi?</summary><p>Steril sharoitda toza shishalarga quyiladi, muhr bilan jo‘natiladi.</p></details>
            <details className="faq-item"><summary>Original ekanligini qanday tekshirasiz?</summary><p>Batch-code va tashqi ko‘rinish bo‘yicha tekshiruv, video qadoqlash.</p></details>
            <details className="faq-item"><summary>Yetkazib berish muddati?</summary><p>Odatda 1–3 ish kuni, hududga qarab.</p></details>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FAQ


