import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from 'antd';
import {
    Coupon
} from './ProductStyle';

function ProductCard({ item, index }) {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cartReducer);
    const [carted, setCarted] = useState(false);

    useEffect(() => {
        if (item.availableCoupon == false) {//쿠폰 Key값이 false가 아닌 항목들은 true로 설정.
        } else {
            item.availableCoupon = true
        }
        const Carted = cart.some((product) => product.id === item.id);
        //다시 reload됐을 때 다시 담을 수 있는 버그 Fix, 상품은 담겨있는데 안담긴 버튼으로 표시됨. 처음부터 Cart에 있는 항목을 탐색함.
        setCarted(Carted);
    }, [item])

    const addItemHandler = (item) => {
        setCarted(true)
        if (cart.length < 3) {
            dispatch({
                type: 'ADD_ITEM',
                item: {
                    id: item.id,
                    title: item.title,
                    coverImage: item.coverImage,
                    price: item.price,
                    score: item.score,
                    availableCoupon: item.availableCoupon,
                    quantity: item.quantity = 1,
                },
            });
        } else {
            alert('장바구니에는 최대 3개의 상품을 담을 수 있습니다.');
            setCarted(false)//에러는 뜨는데 담긴 표시로 나옴. 담긴 표시 안되게 해줌.
        }
    };

    const deleteItemHandler = (id) => {
        setCarted(false)
        dispatch({
            type: 'DELETE_ITEM',
            id: id,
        });
    }

    return (
        <Card
            key={index}
            cover={
                <img
                    style={{ width: '100%', height: '12vw', minHeight: '200px', position: 'relative', overflow: 'hidden' }}
                    alt="thumbnail"
                    src={item && item.coverImage}
                />
            }>
            {item.availableCoupon !== false && <Coupon>할인 쿠폰</Coupon>}
            <Button onClick={() => carted ? deleteItemHandler(item && item.id) : addItemHandler(item && item)} style={{ width: '100%' }} size="small" shape="round" type={carted ? "ghost" : "danger"}>
                {carted ? '빼기' : '장바구니'}
            </Button><br />
            <br />
            <span>제목 :  {item && item.title} </span><br />
            <span>♥ {item && item.score} </span><br />
            <br />
            <hr />
            <span>{`${item && item.price.toLocaleString()}원`} </span><br />
        </Card>
    )
}

export default ProductCard
