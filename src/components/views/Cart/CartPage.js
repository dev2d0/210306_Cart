import React, { useEffect, useState } from 'react'
import CartBlock from './Sections/CartBlock.js';
import CartPayment from './Sections/CartPayment.js';
import { coupones } from '../../data/coupons';
import { useSelector, useDispatch } from "react-redux";
import { Select } from './Sections/CartStyle';
function CartPage() {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cartReducer);
    const [Total, setTotal] = useState(0)
    const [Discount, setDiscount] = useState(0)

    const [coupon, setCoupon] = useState([]);
    const [coupons, setCoupons] = useState(coupones);
    const [checkItems, setCheckItems] = useState([...cart]);

    useEffect(() => {
        fetch('data/coupons.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                setCoupons(res.coupons)
            })
    }, []);

    useEffect(() => {
        calculateDiscount(checkItems, coupon);
        calculateTotal(checkItems);
    }, [cart, coupon, Discount, checkItems])


    const onClick = (e, cart) => {//체크박스 핸들러
        if (e.target.checked == false) {
            const Index = checkItems.findIndex((item) => item.id === cart.id);//해당하는 id의 인덱스를 찾음
            if (Index >= 0) {
                checkItems.splice(Index, 1);
                setCheckItems([...checkItems])
            }
        } else {
            setCheckItems([...checkItems, cart])
        }
    }

    const deleteItemHandler = (id) => {//카트에서 상품 삭제
        dispatch({
            type: 'DELETE_ITEM',
            id: id,
        });
        const Index = checkItems.findIndex((item) => item.id === id);
        if (Index >= 0) { //아이템을 삭제해도 결제 가격 업데이트가 안되기 때문에 새로운 계산을 위해 추가해줌.
            checkItems.splice(Index, 1);
            setCheckItems([...checkItems])
        }
    }

    let calculateTotal = (cart) => {//총 상품 금액 계산
        let total = 0;

        cart.map(item => {
            total += parseInt(item.price, 10) * item.quantity
        })
        setTotal(total)
    }

    const calculateDiscount = (cart, coupon) => {//할인 금액 계산
        const discounItems = cart.filter((item) => item.availableCoupon !== false);
        let discounttotal = 0;
        if (coupon === 'rate') {
            if (discounItems.length > 0) {
                discounItems.map(item => {
                    discounttotal += parseInt(item.price, 10) * item.quantity * 0.1
                    setDiscount(discounttotal)
                })
            } else {
                setDiscount(0)//안해주면 업데이트 안됨
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
    if (coupons) {
        return (
            <div style={{ width: '85%', margin: '3rem auto', minHeight: '750px' }}>
                <h1 style={{ textAlign: 'center' }}>My Cart</h1><br />
                {/* 장바구니 상품 카드 */}
                <CartBlock cart={cart} onClick={onClick} deleteItemHandler={deleteItemHandler} />
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
                <CartPayment TotalPrices={TotalPrices} DiscountPrices={DiscountPrices} FinalPrices={FinalPrices} />
            </div>
        )
    } else{
        return(
            <div>Loading...</div>
        )
    }
}

export default CartPage
