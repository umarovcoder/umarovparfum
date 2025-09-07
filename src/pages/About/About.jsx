import React from 'react'
import Header from '../../components/Header/Header'

const About = () => {
  return (
    <div>
      <Header/>
      <main className="section">
        <div className="container">
          <h1 style={{marginTop:0}}>About Umarov Parfum</h1>
          <p style={{color:'var(--muted)'}}>We craft luxurious fragrances blending timeless tradition with modern artistry.</p>
          <div className="grid" style={{gridTemplateColumns:'1fr',gap:'16px',marginTop:'24px'}}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Heritage</h3>
                <p className="card-text">Rooted in classic perfumery, curated with rare ingredients.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Craft</h3>
                <p className="card-text">Small-batch blends perfected by master perfumers.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Sustainability</h3>
                <p className="card-text">Ethically sourced essences and eco-friendly packaging.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About

