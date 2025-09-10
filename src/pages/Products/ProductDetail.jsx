import React, { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { products } from '../../data/products'

const VOLUME_OPTIONS = [
  { label: '100 ml', value: 100 },
  { label: '10 ml', value: 10 },
  { label: '5 ml', value: 5 }
]

const ProductDetail = () => {
  const { id } = useParams()
  const product = useMemo(() => products.find(p => String(p.id) === String(id)), [id])
  const [selectedMl, setSelectedMl] = useState(100)

  if (!product) {
    return (
      <div>
        <Header/>
        <main className="section">
          <div className="container">
            <p>Mahsulot topilmadi.</p>
            <Link className="btn" to="/products">Katalogga qaytish</Link>
          </div>
        </main>
      </div>
    )
  }

  const basePricePerMl = product.price / 100
  const calculatedPrice = Math.round(basePricePerMl * selectedMl)

  return (
    <div>
      <Header/>
      <main className="section">
        <div className="container">
          <nav style={{marginBottom: '16px'}}>
            <Link to="/products">← Katalog</Link>
          </nav>

          <div className="grid" style={{gridTemplateColumns: '1fr 1fr', gap: '24px'}}>
            <div>
              {product.imageUrl ? <img src={product.imageUrl} alt={product.name} style={{width: '100%', borderRadius: 8}}/> : null}
            </div>
            <div>
              <h1 style={{marginTop: 0}}>{product.name}</h1>
              <p>{product.description}</p>

              <div style={{marginTop: 16}}>
                <strong>Hajmni tanlang:</strong>
                <div style={{display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap'}}>
                  {VOLUME_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      className="btn"
                      onClick={() => setSelectedMl(opt.value)}
                      style={{
                        background: selectedMl === opt.value ? '#111' : undefined,
                        color: selectedMl === opt.value ? '#fff' : undefined
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{marginTop: 16, display: 'flex', alignItems: 'center', gap: 12}}>
                <span className="price">${calculatedPrice}</span>
                <span style={{color: '#888'}}>({selectedMl} ml)</span>
              </div>

              <div className="card-actions" style={{marginTop: 16}}>
                <button className="btn">Savatga qo'shish</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductDetail


