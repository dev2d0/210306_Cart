const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.item];
        case "DELETE_ITEM":
            return [...action.payload];
        case "SET_QUANTITY":
            console.log(action)
            console.log(action.item)
            console.log(action.item[0])
            console.log(action.item[0])
            //console.log(state.index.quantity)
            console.log(state[0] && state[0].quantity)
            if (state[action.item[1]] && action.item[0]>=1){
                state[action.item[1]].quantity=action.item[0]
           }else if(state[action.item[1]] && action.item[0]<1){
               alert("수량은 1개 이상이어야 합니다.")
           }else if(state[action.item[1]] && action.item[0]>100){
            alert("수량은 100개 이하여야 합니다.")
        }
           //console.log(state[action.item[1]].quantity)
            return [
              ...state
            ];
            //return [...state, action.item];

        default:
            return state;
    }
}

export default cartReducer;