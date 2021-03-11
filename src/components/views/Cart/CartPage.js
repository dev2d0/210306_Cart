import React, { useEffect, useState } from 'react'
import CartBlock from './Sections/CartBlock.js';
import CartPayment from './Sections/CartPayment.js';
import { coupons } from "../../data/coupons.js";
import { useSelector } from "react-redux";
import { Empty } from 'antd';
import { Select } from './Sections/CartStyle';
function CartPage() {
    const cart = useSelector(store => store.cartReducer);
    const [Total, setTotal] = useState(0)
    const [Discount, setDiscount] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [coupon, setCoupon] = useState([]);

    useEffect(() => {
        calculateDiscount(cart, coupon);
        calculateTotal(cart);
    }, [cart, coupon, Discount])

    let calculateTotal = (cart) => {
        let total = 0;

        cart.map(item => {
            total += parseInt(item.price, 10) * item.quantity
        })

        setTotal(total)
        setShowTotal(true)
    }

    const calculateDiscount = (cart, coupon) => {
        const discounItems = cart.filter((item) => item.availableCoupon !== false);
        let discounttotal = 0;
        if (coupon === 'rate') {
            if (discounItems.length > 0) {
                discounItems.map(item => {
                    discounttotal += parseInt(item.price, 10) * item.quantity * 0.1
                    setDiscount(discounttotal)
                })
            } else {
                setDiscount(0)
            }
        }
        else if (coupon === 'amount') {
            if (discounItems.length > 0) {
                setDiscount(10000)
            } else {
                setDiscount(0)
            }
        }
        return 0;
    };


    var TotalPrices = (Total).toLocaleString()//금액에 천단위 콤마를 찍어주도록 정의해준다.
    var DiscountPrices = (Discount).toLocaleString()
    var FinalPrices = (Total - Discount).toLocaleString()
    return (
        <div style={{ width: '85%', margin: '3rem auto', minHeight: '750px' }}>
            <h1 style={{ textAlign: 'center' }}>My Cart</h1><br />
            <CartBlock cart={cart} />
            <br />
            <br />
            {/* 쿠폰 */}
            <h2>쿠폰 선택</h2>
            <Select onChange={(e) => setCoupon(e.target.value)}>
                <option hidden>쿠폰을 선택해주세요.</option>
                {coupons.map(({ type, title }, idx) => (
                    <option key={idx} value={type}>
                        {title}
                    </option>
                ))}
            </Select>
            <br />
            <br />
            <br />
            {/* 결제 */}
            {ShowTotal ?
                <CartPayment TotalPrices={TotalPrices} DiscountPrices={DiscountPrices} FinalPrices={FinalPrices} />
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
