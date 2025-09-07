import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <article className="card">
      <div className="card-media">
        {product.imageUrl ? <img src={product.imageUrl} alt={product.name}/> : null}
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.description}</p>
        <div className="card-actions">
          <span className="price">${product.price}</span>
          <button className="btn">Add to cart</button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard


