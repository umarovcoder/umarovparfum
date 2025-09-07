import React from 'react'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <div id="home">
      <Header/>
      <main>
        <section className="section hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title">Opulent Essence</h1>
              <p className="hero-sub">A curation of luxurious fragrances crafted for timeless allure.</p>
              <div className="hero-cta">
                <a href="#products" className="btn">Shop Collection</a>
                <a href="#about" className="btn" style={{background:'transparent',color:'var(--text)',border:'1px solid var(--border)'}}>Learn More</a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orb orb-lg"/>
              <div className="orb orb-sm"/>
            </div>
          </div>
        </section>
        <section id="products" className="section">
          <div className="container">
            <h2 style={{marginTop:0}}>Featured Collection</h2>
            <div className="grid products-grid">
              {[1,2,3,4,5,6].map((i) => (
                <article key={i} className="card">
                  <div className="card-media"/>
                  <div className="card-body">
                    <h3 className="card-title">Essence No. {i}</h3>
                    <p className="card-text">Amber, oud, and hints of citrus in perfect balance.</p>
                    <div className="card-actions">
                      <span className="price">$129</span>
                      <button className="btn">Add to cart</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <footer id="contact" className="section" style={{borderTop:'1px solid var(--border)'}}>
          <div className="container footer-inner">
            <div className="footer-brand">Umarov Parfum</div>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#products">Products</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-copy">© {new Date().getFullYear()} Umarov Parfum. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Home