

export const initailValue = {
    items : [],
    wichlist: [],
    total: 0
}

export const reducer = (state, action) => {
    switch(action.type) {

        case "ADD" : {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        }
        case "ADDWICHLIST" : {
            return {
                ...state,
                wichlist: [...state.wichlist, action.payload]
            }
        }

        default : {
            return state
        }
    }
}