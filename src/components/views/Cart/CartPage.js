import React, { useEffect, useState } from 'react'
import CartBlock from './Sections/CartBlock.js';
import { useSelector } from "react-redux";
import { Empty } from 'antd';

function CartPage() {
    const cart = useSelector(store => store.cartReducer);
    console.log(cart)
    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
   
    let calculateTotal = (Travels) => {
        let total = 0;

        Travels.map(item => {
            total += parseInt(item.price, 10)
        })

        setTotal(total)
        setShowTotal(true)
    }

    const deleteHandler = (travelId) => {
       
    }
   

    var prices = (Total).toLocaleString()//금액에 천단위 콤마를 찍어주도록 정의해준다.
    return (
        <div style={{ width: '85%', margin: '3rem auto', minHeight: '750px' }}>
            <h1>My Cart</h1>
            <div>
                <CartBlock cart={cart} deleteScrap={deleteHandler}/>
            </div>
          
            {ShowTotal ?
                <div style={{ marginTop: '3rem' }}>
                    <h2>장바구니 상품의 총액: ${prices}</h2>
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
