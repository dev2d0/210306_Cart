export const initialState = {
    cart: [],
  };
  
const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            case "ADD_ITEM":
            return [...state, action.item];
        case "DELETE_ITEM":
            return [...action.payload];
        default:
            return state;
    }
}

export default cartReducer;