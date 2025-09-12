import React from 'react'
import Header from '../../components/Header/Header'

const About = () => {
  return (
    <div>
      <Header/>
      <main className="section">
        <div className="container">
          <h1 style={{marginTop:0}}>Umarov Parfum haqida</h1>
          <p style={{color:'var(--muted)'}}>Biz zamonaviy sanʼat va qadimiy anʼanalarni uygʻunlashtirgan hashamatli atirlar yaratamiz.</p>
          <div className="grid" style={{gridTemplateColumns:'1fr',gap:'16px',marginTop:'24px'}}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Meros</h3>
                <p className="card-text">Klassik atirchilik anʼanalariga tayanib, noyob ingredientlar bilan yaratilgan.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Mahorat</h3>
                <p className="card-text">Ustoz atirsozlar tomonidan mukammallashtirilgan kichik hajmdagi aralashmalar.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Barqarorlik</h3>
                <p className="card-text">Etik manbalardan olingan esensiyalar va ekologik toza qadoqlash.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About

