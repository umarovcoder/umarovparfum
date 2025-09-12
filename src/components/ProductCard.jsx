import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <article className="card">
      <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="card-media">
          {product.imageUrl ? <img src={product.imageUrl} alt={product.name}/> : null}
        </div>
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-text">{product.description}</p>
          <div className="card-actions">
            <span className="price">${product.price}</span>
            <button className="btn" type="button">Ko‘rish</button>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard


