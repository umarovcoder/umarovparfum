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

