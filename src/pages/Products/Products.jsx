import React, { useState, useMemo } from 'react'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/ProductCard'
import { products } from '../../data/products'

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  // Search and filter logic
  const filteredProducts = useMemo(() => {
    let filtered = products

    // Search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Sort products
    switch (sortBy) {
      case 'new':
        // Keep original order for "new"
        break
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price)
        break
      case 'popular':
      default:
        // Keep original order for "popular"
        break
    }

    return filtered
  }, [searchQuery, selectedCategory, sortBy])

  // Separate products by category for display
  const brandProducts = filteredProducts.filter(p => p.category === 'brand')
  const raspivProducts = filteredProducts.filter(p => p.category === 'raspiv')

  return (
    <div>
      <Header/>
      <main className="section">
        <div className="container">
          <h1 style={{marginTop:0}}>Katalog</h1>

          <div className="card" style={{marginTop:16}}>
            <div className="card-body" style={{display:'grid', gap:12}}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8}}>
                <input 
                  className="input" 
                  placeholder="Qidirish (nomi, brendi)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select 
                  className="input" 
                  style={{appearance:'none'}}
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">Barcha toifalar</option>
                  <option value="brand">Brend atirlar</option>
                  <option value="raspiv">Raspiv atirlar</option>
                </select>
                <select 
                  className="input" 
                  style={{appearance:'none'}}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Saralash: ommabop</option>
                  <option value="new">Yangi</option>
                  <option value="price-low">Narx: pastdan yuqoriga</option>
                  <option value="price-high">Narx: yuqoridan pastga</option>
                </select>
              </div>
              
              {/* Search results info */}
              {searchQuery && (
                <div style={{color: 'var(--muted)', fontSize: '14px', textAlign: 'center'}}>
                  "{searchQuery}" bo'yicha {filteredProducts.length} ta natija topildi
                </div>
              )}
            </div>
          </div>

          {/* Show all results if searching or filtering */}
          {(searchQuery || selectedCategory !== 'all') ? (
            <section style={{marginTop: '24px'}}>
              <h2>
                {searchQuery ? `"${searchQuery}" qidiruv natijalari` : 
                 selectedCategory === 'brand' ? 'Brend atirlar' : 
                 selectedCategory === 'raspiv' ? 'Raspiv atirlar' : 'Barcha mahsulotlar'}
              </h2>
              {filteredProducts.length > 0 ? (
                <div className="grid products-grid">
                  {filteredProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <div style={{textAlign: 'center', padding: '40px', color: 'var(--muted)'}}>
                  <p>Hech qanday mahsulot topilmadi</p>
                  <p style={{fontSize: '14px', marginTop: '8px'}}>Qidiruv so'zini o'zgartiring yoki filtrlarni tozalang</p>
                </div>
              )}
            </section>
          ) : (
            <>
              {/* Show by categories when not searching */}
              <section style={{marginTop: '24px'}}>
                <h2>Brend atirlar</h2>
                {brandProducts.length > 0 ? (
                  <div className="grid products-grid">
                    {brandProducts.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                ) : (
                  <div style={{textAlign: 'center', padding: '20px', color: 'var(--muted)'}}>
                    Brend atirlar mavjud emas
                  </div>
                )}
              </section>

              <section style={{marginTop: '40px'}}>
                <h2>Raspiv atirlar</h2>
                {raspivProducts.length > 0 ? (
                  <div className="grid products-grid">
                    {raspivProducts.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                ) : (
                  <div style={{textAlign: 'center', padding: '20px', color: 'var(--muted)'}}>
                    Raspiv atirlar mavjud emas
                  </div>
                )}
              </section>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default Products

