import React from 'react'
import { useCart } from '../context/CartContext'

function Cart() {

  const {state, dispatch} = useCart();

  return (
    <div>
      {state.items.map(item => <li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default Cart