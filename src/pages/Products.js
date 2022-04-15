import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Navbar/ProductCard'

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
            <h1>Products</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {products.map((product) => {
                console.log(products)
                    return (
                        <div className='col-md-4 mb-3' key={product.id}>
                        {/* <img src={product.image} className="card-img-top" alt={product.title} /> */}
                            <ProductCard product={product} />
                        </div>
                        
    
 
                    )
                })}

            </div>

        </>
    )
}
