import React from 'react'
import { useDispatch } from "react-redux";
import { InputNumber } from 'antd';
import { deleteCart } from "../../../../Store/actions";
import "./CartBlock.css"

function CartBlock(props) {
    const dispatch = useDispatch();

    const filterItem = (index) => {
        const cartItem = props.cart.filter((_, i) => {
            return i !== index;
        })
        dispatch(deleteCart(cartItem));
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
                        defaultValue={cart.quantity}
                    />
                    {cart.quantity} EA
                </td>
                <td>
                    {`₩${cart.price.toLocaleString()}원`}
                </td>
                <td>
                    <button onClick={() => filterItem(index)} >
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