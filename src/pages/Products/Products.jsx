import React from 'react'
import Header from '../../components/Header/Header'

const products = [
  { id: 1, name: 'Opulent No. ', description: 'Rich woody base with floral top notes.', price: 129, imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Opulent No. 2', description: 'Amber and oud with citrus sparks.', price: 139, imageUrl: 'https://images.unsplash.com/photo-1606003011853-059fe5c2e5f2?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Opulent No. 3', description: 'Vanilla musk with smoky undertones.', price: 149, imageUrl: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Opulent No. 4', description: 'Citrus zest over warm amber.', price: 129, imageUrl: 'https://images.unsplash.com/photo-1556228724-4a2efa094f6d?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Opulent No. 5', description: 'Jasmine heart, sandalwood base.', price: 159, imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Opulent No. 6', description: 'Leather accord with spice.', price: 169, imageUrl: 'https://images.unsplash.com/photo-1571781923300-5d5551b742b0?q=80&w=1200&auto=format&fit=crop' },
  { id: 7, name: 'Opulent No. 7', description: 'Rose absolute and patchouli.', price: 149, imageUrl: 'https://images.unsplash.com/photo-1511556820780-9aee0bf10a63?q=80&w=1200&auto=format&fit=crop' },
  { id: 8, name: 'Opulent No. 8', description: 'Cedarwood with green notes.', price: 139, imageUrl: 'https://images.unsplash.com/photo-1547887537-6158a1a7178a?q=80&w=1200&auto=format&fit=crop' },
  { id: 9, name: 'Opulent No. 9', description: 'Gourmand sweetness, subtle smoke.', price: 179, imageUrl: 'https://images.unsplash.com/photo-1563171926-a467de3c-fake?q=80&w=1200&auto=format&fit=crop' }
]

const Products = () => {
  return (
    <div>
      <Header/>
      <main className="section">
        <div className="container">
          <h1 style={{marginTop:0}}>Products</h1>
          <div className="grid products-grid">
            {products.map((p) => (
              <article key={p.id} className="card">
                <div className="card-media">
                  {p.imageUrl ? <img src={p.imageUrl} alt={p.name}/> : null}
                </div>
                <div className="card-body">
                  <h3 className="card-title">{p.name}</h3>
                  <p className="card-text">{p.description}</p>
                  <div className="card-actions">
                    <span className="price">${p.price}</span>
                    <button className="btn">Add to cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Products

