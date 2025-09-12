import React from 'react'
import Header from '../../components/Header/Header'

const HowToOrder = () => {
  return (
    <div>
      <Header/>
      <main className="section">
        <div className="container">
          <h1 style={{marginTop:0}}>Qanday buyurtma beriladi?</h1>
          <div className="card" style={{marginTop:12}}>
            <div className="card-body" style={{display:'grid', gap:8}}>
              <ol style={{margin:0, paddingLeft:18, color:'var(--muted)'}}>
                <li>Katalogdan mahsulotni tanlang va hajmni belgilang (100/10/5 ml).</li>
                <li>Mahsulot nomi va hajmini yozib, Telegram orqali bizga yuboring.</li>
                <li>Operator buyurtmangizni tasdiqlaydi va yetkazib berish ma’lumotlarini oladi.</li>
                <li>Video qadoqlash va kuzatuv raqami bilan jo‘natamiz.</li>
              </ol>
              <div>
                <a className="btn" href="https://t.me/" target="_blank" rel="noreferrer">Telegramga yozish</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HowToOrder


