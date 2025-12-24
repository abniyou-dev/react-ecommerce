import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product() {

    const {id} = useParams();
    const url = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState();

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          setProduct(res);
        })
    })
  return (
    <div>
      product page
      {product && 
        <div
          className='grid'>
          <img src={product.image} alt="" className='aspect-square' />
          <span>{product.title}</span>
          <span>{product.price}</span>
          <span>{product.rating.rate}</span>
        </div>}
    </div>
  )
}

export default Product