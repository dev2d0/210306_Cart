export const addCart = (item) => {
    return {
        type: "ADD_ITEM",
        payload: item
    }
}

export const deleteCart = (items) => {
    return {
        type: "DELETE_ITEM",
        payload: items
    }
}

export const setQuantity = (item) => {
    console.log(item)
    return {
    type: "SET_QUANTITY",
    item
    }
};
