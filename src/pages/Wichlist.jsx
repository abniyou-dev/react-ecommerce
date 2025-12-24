import React from 'react'
import { useCart } from '../context/CartContext'

function Wichlist() {

  const {state, dispatch} = useCart();
  return (
    <div>
     {state.wichlist.map(it => <li key={it.id}>{it.title}</li>)}
    </div>
  )
}

export default Wichlist