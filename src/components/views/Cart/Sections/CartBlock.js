import React from 'react'
import { useDispatch } from "react-redux";
import { InputNumber, Button, Checkbox } from 'antd';
import { setQuantity } from "../../../../Store/actions";
import { Coupon, Td, Th, Table } from './CartStyle';

function CartBlock(props) {
    const dispatch = useDispatch();

    const onChange = (value, id, cart) => {
        dispatch(setQuantity(value, id, cart))
    }

    const renderItems = () => (
        props.cart && props.cart.map((cart, index) => (
            <tr key={index}>
                <Td>
                    <Checkbox 
                    key={cart.id} //매우 중요 별표 99999999개 이거 없으면 오류남
                    defaultChecked={true} 
                    onChange={checked => props.onClick(checked, cart)}/>
                </Td>
                <Td>
                    <img
                        height='60px'
                        style={{ width: '70px' }} alt="item"
                        src={cart.coverImage} />
                </Td>
                <Td>
                    {cart.title}
                </Td>
                <Td>
                    <InputNumber
                        key={cart.id}//매우 중요 별표 99999999개 이거 없으면 오류남
                        style={{ width: '65px' }}
                        min={1}
                        max={100}
                        defaultValue={cart.quantity}
                        onChange={value => onChange(value, cart.id, cart)}
                    />
                    개
                </Td>
                <Td>
                    {`₩${cart.price}원`}
                </Td>
                <Td>
                    {cart.availableCoupon ? <Coupon>쿠폰 사용가능</Coupon> : <Coupon color={'black'}>쿠폰 사용불가</Coupon>}
                </Td>
                <Td>
                    <Button onClick={() => props.deleteItemHandler(cart.id)} type="primary" size="middle">
                        삭제하기
                    </Button>
                </Td>
            </tr>
        ))
    )


    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <Th>Check</Th>
                        <Th>Product Image</Th>
                        <Th>Product Title</Th>
                        <Th>Product Quantity</Th>
                        <Th>Product Price</Th>
                        <Th>Discount Coupon</Th>
                        <Th>Remove from Cart</Th>
                    </tr>
                </thead>

                <tbody>
                    {renderItems()}
                </tbody>

            </Table>
        </div>
    )
}

export default CartBlock