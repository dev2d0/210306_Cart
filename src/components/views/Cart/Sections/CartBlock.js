import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { InputNumber } from 'antd';
import { setQuantity } from "../../../../Store/actions";
import "./CartBlock.css"

function CartBlock(props) {
    const dispatch = useDispatch();
    const [change, setChanges] = useState([1, 0, 0]);

    useEffect(() => {
       dispatch(setQuantity(change))
    }, [change])

    const deleteItemHandler = (id) => {
        dispatch({
            type: 'DELETE_ITEM',
            id: id,
          });
    }

    const onChange = (value, index, cart) => {
        setChanges([value, index, cart])
    }

    console.log(props.cart)
    const renderItems = () => (
        props.cart && props.cart.map((cart, index) => (
            <tr key={index}>
                <td>
                    <img
                        height='60px'
                        style={{ width: '70px' }} alt="item"
                        src={cart.coverImage} />
                </td>
                <td>
                    {cart.title}
                </td>
                <td>
                    <InputNumber
                        style={{ width: '65px' }}
                        min={1}
                        max={100}
                        defaultValue={cart.quantity}
                        onChange={value => onChange(value, index, cart)}
                        //,()=>dispatch(setQuantity({count, index, cart}))
                    />
                    {cart.quantity}개
                </td>
                <td>
                    {`₩${cart.price}원`}
                </td>
                <td>
                    <button onClick={() => deleteItemHandler(cart.id)} >
                        Remove
                    </button>
                </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Title</th>
                        <th>Product Quantity</th>
                        <th>Product Price</th>
                        <th>Remove from Cart</th>
                    </tr>
                </thead>

                <tbody>
                    {renderItems()}
                </tbody>

            </table>
        </div>
    )
}

export default CartBlock