import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    const params = useParams();
    const [productDetails, setProductDetails] = useState({})
    useEffect(() => {

        axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => setProductDetails(res.data)).catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
        <h1>Product Details</h1>
           <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={productDetails.image}
              className="img-fluid rounded-start"
              alt={productDetails.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{productDetails.title}</h5>
              <p className="card-text">{productDetails.price} $</p>
              <p className="card-text">{productDetails.description}</p>
              <p className="card-text">
                <small className="text-muted"> {productDetails.category}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
