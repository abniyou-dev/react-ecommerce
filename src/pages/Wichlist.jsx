import React from 'react'
import { useCart } from '../context/CartContext'

function Wichlist() {

  const {state, dispatch} = useCart();
  return (
    <div>
     <ul
      className='grid gap-5 p-5'>
      {state.wichlist.map(it => 
     <li 
      key={it.id}
        className='border p-3 flex justify-between items-center'>
        <div
          className='flex'>
          <img src={it.image} alt="" 
          className='size-20'/>
        <span>{it.title}</span>
        </div>
      <div
        className='flex gap-3'>
        <button
              onClick={() => dispatch({type:"ADD", payload:it})}
              className='px-3 py-2 bg-red-400 rounded text-white'>
              Add To Cart
        </button>
        <button
              onClick={() => dispatch({type:"REMOVEWISHLIST", payload:it.id})}
              className='px-3 py-2 bg-red-400 rounded text-white'>
              x
        </button>
      </div>
      </li>)}
     </ul>
    </div>
  )
}

export default Wichlist