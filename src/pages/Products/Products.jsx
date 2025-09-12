import React from 'react'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard'
import { products } from '../../data/products'

const Products = () => {
  return (
    <div>
      <Header/>
      <main className="section">
        <div className="container">
          <h1 style={{marginTop:0}}>Katalog</h1>

          <div className="card" style={{marginTop:16}}>
            <div className="card-body" style={{display:'grid', gap:12}}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8}}>
                <input className="input" placeholder="Qidirish (nomi, brendi)"/>
                <select className="input" style={{appearance:'none'}}>
                  <option>Barcha toifalar</option>
                  <option>Brend atirlar</option>
                  <option>Raspiv atirlar</option>
                </select>
                <select className="input" style={{appearance:'none'}}>
                  <option>Saralash: ommabop</option>
                  <option>Yangi</option>
                  <option>Narx: pastdan yuqoriga</option>
                  <option>Narx: yuqoridan pastga</option>
                </select>
              </div>
            </div>
          </div>

          <section style={{marginTop: '24px'}}>
            <h2>Brend atirlar</h2>
            <div className="grid products-grid">
              {products.filter(p => p.category === 'brand').map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>

          <section style={{marginTop: '40px'}}>
            <h2>Raspiv atirlar</h2>
            <div className="grid products-grid">
              {products.filter(p => p.category === 'raspiv').map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Products

