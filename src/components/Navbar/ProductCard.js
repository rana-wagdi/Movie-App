import React from 'react'
import { Link } from 'react-router-dom'

 function ProductCard({product}) {
console.log(product.title)
  return (
 
    <div className="card h-100" >
       <img src={product.image} className="card-img-top" alt={product.title} /> 
    <div className="card-body">
      <div className="card-title">{product.title}</div> 
       <p className="card-text">{product.price}</p>
      <Link to={`/products/${product.id}`} className="btn btn-primary">Details</Link>
    </div> 
  </div>
  )
}
export default ProductCard
