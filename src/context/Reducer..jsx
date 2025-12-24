export const initailValue = {
  items: [],
  wichlist: [],
  total: 0,
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
      return {
        ...state,
        wichlist: [...state.wichlist, action.payload],
      };
    }
    case "REMOVE": {
      return {
        ...state,
        items: state.items.filter((pr) => pr.id !== action.payload),
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
