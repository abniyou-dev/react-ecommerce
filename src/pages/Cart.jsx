import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { state, dispatch } = useCart();

  return (
    <div>

      <ul className="grid gap-5 p-5">
        {state.items.map((item) => (
          <li key={item.id} className="flex items-center border p-3 ">
            <div className="flex gap-4 flex-1">
              <img src={item.image} alt="" className="size-20" />
              <span>{item.title}</span>
            </div>
            <div className="flex items-center gap-5 ">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch({ type: "DECREMENT", payload: item })}
                  className="px-3 py-2 bg-red-200 rounded"
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => dispatch({ type: "INCREMENT", payload: item })}
                  className="px-3 py-2 bg-red-200 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
                className="px-3 py-2 bg-red-400 rounded text-white"
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
      <span className="block p-4">Total Items : {state.totalItems}</span>
    </div>
  );
}

export default Cart;
