import React, { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

function Home() {

  const url = "https://fakestoreapi.com/products?limit=11";

  const [data, setData] = useState([]);
  const {state, dispatch} = useCart();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setData(res);
      })
  }, []);

  return (
    <div
      className='w-full grid'>
        <ul
          className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] 
            gap-5 p-3'>
          {data && data.map(dt => 
              <li 
                key={dt.id}
                className='grid h-full border p-3 [&>button]:bg-red-400 gap-2
                [&>button]:text-white [&>button]:py-2'>
              <Link to={`/product/${dt.id}`}>
                <img src={dt.image} className='aspect-square'/>
              </Link>
              <span
                className='max-h-5'>{dt.title}</span>  
              <button
                onClick={() => dispatch({type:"ADDWICHLIST", payload:dt})}>
                  Add To Wichlist</button>  
              <button
                onClick={() => dispatch({type:"ADD", payload:dt})}>
                  Add To Cart</button>  
            </li>)}
        </ul>
    </div>
  )
}

export default Home