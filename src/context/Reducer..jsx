import { useEffect } from "react";

export const initailValue = {
  items: [],
  wichlist: [],
  totalPrice: 0,
  totalItems: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const exist = state.items.some((it) => it.id === action.payload.id);

      let updatedItems;

      if (exist) {
        updatedItems = state.items.map((it) =>
          it.id === action.payload.id ? { ...it, qty: it.qty + 1 } : it
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, qty: 1 }];
      }

      return {
        ...state,
        items: updatedItems,
        totalItems: updatedItems.reduce((acc, item) => acc + item.qty, 0),
        totalPrice: updatedItems.reduce((acc, item) => acc + (item.qty * item.price), 0)
      };
    }
    case "ADDWICHLIST": {
      const exist = state.wichlist.some((it) => it.id === action.payload.id);
      if (exist) {
        return state;
      }
      return {
        ...state,
        wichlist: [...state.wichlist, action.payload],
      };
    }
    case "REMOVE": {
      const updatedItems = state.items.filter((pr) => pr.id !== action.payload);

      return {
        ...state,
        items: updatedItems,
        totalItems: updatedItems.reduce((acc, item) => acc + item.qty, 0),
        totalPrice: updatedItems.reduce((acc, item) => acc + (item.qty * item.price), 0)
      };
    }

    case "REMOVEWISHLIST": {
      return {
        ...state,
        wichlist: state.wichlist.filter((pr) => pr.id !== action.payload),
      };
    }
    case "INCREMENT": {
      const updatedItems  = state.items.map((it) =>
          it.id === action.payload.id ? { ...it, qty: it.qty + 1 } : it
        );
      return {
        ...state,
        items: updatedItems,
        totalItems: updatedItems.reduce((acc, item) => acc + item.qty, 0),
        totalPrice: updatedItems.reduce((acc, item) => acc + (item.qty * item.price), 0)
      };
    }
    case "DECREMENT": {
      if (action.payload.qty < 2) {
        return state;
      }
      const updatedItem = state.items.map((it) =>
          it.id === action.payload.id ? { ...it, qty: it.qty - 1 } : it
        );
      return {
        ...state,
        items: updatedItem,
        totalItems: updatedItem.reduce((acc, item) => acc + item.qty, 0),
        totalPrice: updatedItem.reduce((acc, item) => acc + (item.qty * item.price), 0)
      };
    }

    default: {
      return state;
    }
  }
};
