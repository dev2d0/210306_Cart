import React, { useEffect, useState } from 'react'
import CartBlock from './Sections/CartBlock.js';
import CartPayment from './Sections/CartPayment.js';
import { coupons } from "../../data/coupons.js";
import { useSelector } from "react-redux";
import { Empty } from 'antd';

function CartPage() {
    const cart = useSelector(store => store.cartReducer);
    const [Total, setTotal] = useState(0)
    const [Discount, setDiscount] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [coupon, setCoupon] = useState([]);

    useEffect(() => {
        { calculateTotal(cart) }
        calculateDiscount(cart, coupon)

    }, [cart, coupon])

    let calculateTotal = (cart) => {
        let total = 0;

        cart.map(item => {
            total += parseInt(item.price, 10) * item.quantity
        })

        setTotal(total)
        setShowTotal(true)
    }

    const calculateDiscount = (cart, coupon) => {
        const discounItems = cart.filter((item) => item?.availableCoupon !== false);
        let discounttotal = 0;
        if (coupon === 'rate') {
            discounItems.map(item => {
                discounttotal += parseInt(item.price, 10) * item.quantity * 0.1
                setDiscount(discounttotal)
            })
        }
        else if (coupon === 'amount') {
            setDiscount(10000)
        }
        return 0;
    };


    var TotalPrices = (Total).toLocaleString()//금액에 천단위 콤마를 찍어주도록 정의해준다.
    var DiscountPrices = (Discount).toLocaleString()
    return (
        <div style={{ width: '85%', margin: '3rem auto', minHeight: '750px' }}>
            <h1>My Cart</h1>
            <div>
                <CartBlock cart={cart} />
            </div>
            <CartPayment />

            {/* 쿠폰 */}
            <select onChange={(e) => setCoupon(e.target.value)}>
                <option hidden>쿠폰을 선택해주세요.</option>
                {coupons.map(({ type, title }, idx) => (
                    <option key={idx} value={type}>
                        {title}
                    </option>
                ))}
            </select>

            {/* 결제 */}
            {ShowTotal ?
                <div style={{ marginTop: '3rem' }}>
                    <h2>장바구니 상품의 총액: ₩{TotalPrices}</h2>
                    <h2>장바구니 상품의 할인 금액: ₩{DiscountPrices}</h2>
                </div>
                :
                <>
                    <br />
                    <Empty description={false} />
                    <h5>There are no items in Cart.</h5>
                </>
            }

        </div>


    )
}

export default CartPage
