export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item
    }
}

export const deleteItem = (id) => {
    return {
        type: "DELETE_ITEM",
        payload: id
    }
}

export const setQuantity = (value, id, cart) => {
    return {
    type: "SET_QUANTITY",
    value: value, 
    id: id, 
    cart: cart
    }
};
