import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { initailValue, reducer } from "./Reducer.";


const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initailValue);


  return (
    <CartContext.Provider value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  );

}


export const useCart = () => {
  return useContext(CartContext);
};