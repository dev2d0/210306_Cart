const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.item];
        case "DELETE_ITEM":
            const Index = state.findIndex((cart) => cart.id === action.id);
            if (Index >= 0) {
                state.splice(Index, 1);
            }
            return [...state]

        case "SET_QUANTITY":
            if (state[action.item[1]] && action.item[0] >= 1) {
                state[action.item[1]].quantity = action.item[0]
            } else if (state[action.item[1]] && action.item[0] < 1) {
                alert("수량은 1개 이상이어야 합니다.")
            } else if (state[action.item[1]] && action.item[0] > 100) {
                alert("수량은 100개 이하여야 합니다.")
            }
            return [
                ...state
            ];
        default:
            return state;
    }
}

export default cartReducer;