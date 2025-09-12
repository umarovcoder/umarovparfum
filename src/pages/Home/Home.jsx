import React from 'react'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard'
import { products } from '../../data/products'
import gul from '../../assets/gul2.png'
import atir from '../../assets/atir.png'

const Home = () => {
  return (
    <div id="home">
      <Header/>
      <main>
        <section className="section hero">
          <div className="container hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title">Eng yaxshi atirlar bir joyda</h1>
              <p className="hero-sub">Butun O'zbekistonga bepul yetkazib beramiz</p>
              <div className="hero-cta">
                <a href="#products" className="btn">Katalogdan xarid</a>
                <a href="#about" className="btn" style={{background:'transparent',color:'var(--text)',border:'1px solid var(--border)'}}>Batafsil</a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="flower-glow" aria-hidden="true"/>
              <img src={atir} alt="perfume" className="hero-perfume"/>
              <img src={gul} alt="flower" className="hero-flower"/>
             
            </div>
          </div>
        </section>
        <section id="products" className="section">
          <div className="container">
            <h2 style={{marginTop:0}}>Tanlangan to‘plam</h2>
            <div className="grid products-grid">
              {products.slice(0, 6).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
        <footer id="contact" className="section" style={{borderTop:'1px solid var(--border)'}}>
          <div className="container footer-inner">
            <div className="footer-brand">Umarov Parfum</div>
            <div className="footer-links">
              <a href="#about">Biz haqimizda</a>
              <a href="#products">Mahsulotlar</a>
              <a href="#contact">Aloqa</a>
            </div>
            <div className="footer-copy">© {new Date().getFullYear()} Umarov Parfum. Barcha huquqlar himoyalangan.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default Home