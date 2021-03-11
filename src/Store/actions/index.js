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

export const setQuantity = (item) => {
    console.log(item)
    return {
    type: "SET_QUANTITY",
    item
    }
};
