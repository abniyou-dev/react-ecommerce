import { useEffect } from "react";

export const initailValue = {
  items: [],
  wichlist: [],
  totalPrice: 0,
  totalItems: 0
};



export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const exist = state.items.some((it) => it.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          items: state.items.map(it => 
            it.id === action.payload.id 
            ? {...it, qty: it.qty + 1}
            : it
          )
        };
      } 
        return {
        ...state,
        items: [...state.items, { ...action.payload, qty: 1 }],
      };
      
    }
    case "ADDWICHLIST": {
      const exist = state.wichlist.some((it) => it.id === action.payload.id);
      if (exist) {
        return state
      }
      return {
        ...state,
        wichlist: [...state.wichlist, action.payload]
      }
    }
    case "REMOVE": {
      return {
        ...state,
        items: state.items.filter((pr) => pr.id !== action.payload),
      };
    }
    case "REMOVEWISHLIST": {
      return {
        ...state,
        wichlist: state.wichlist.filter((pr) => pr.id !== action.payload),
      };
    }
    case "INCREMENT": {
      return {
          ...state,
          items: state.items.map(it => 
            it.id === action.payload.id 
            ? {...it, qty: it.qty + 1}
            : it
          )
        };
    }
    case "DECREMENT": {
        if (action.payload.qty < 2 ) {
            return state
        };
        return {
            ...state,
            items: state.items.map(it => 
                it.id === action.payload.id 
                ? {...it, qty: it.qty -1}
                : it
            )
            };
    }

    default: {
      return state;
    }
  }
};


