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
            if (action.value >= 1) {
                const Index = state.findIndex((cart) => cart.id === action.id);
                state[Index].quantity=action.value
            } else if (action.value < 1) {
                alert("수량은 1개 이상이어야 합니다.")
            } else if (action.value > 100) {
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