import React from 'react'
import Header from '../../components/Header/Header'

const BRANDS = ['Dior', 'Chanel', 'Gucci', 'YSL', 'Creed', 'Montale', 'Tom Ford']

const Brands = () => {
  return (
    <div>
      <Header/>
      <main className="section">
        <div className="container">
          <h1 style={{marginTop:0}}>Brendlar</h1>
          <div className="grid" style={{gridTemplateColumns:'repeat(3, minmax(0,1fr))', gap:12}}>
            {BRANDS.map(b => (
              <div key={b} className="card"><div className="card-body"><strong className="card-title">{b}</strong><p className="card-text">Original to‘plamlar va raspiv xizmat mavjud.</p></div></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Brands


