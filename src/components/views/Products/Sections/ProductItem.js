import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../../../Store/actions";
import {
    List,
    Coupon
} from './ProductStyle';

const ProductItem = ({ props, posts, clickHandler }) => {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cartReducer);
    const [Id, setId] = useState([])
    const [carted, setCarted] = useState(false);

    const handleClick = (id) => {
        console.log(id)
        console.log(Id)
        const newCarts = [...Id, id]
        setId(newCarts)
        clickHandler(newCarts)//부모 컴포넌트로 보내줌.
    }

    var sortData = function (data, key) {
        return data.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return x > y ? -1 : x > y ? 1 : 0;
        });
    };//내름차순 정렬
    const sortPosts = sortData(posts, 'score')

    const addToCartHandler = (item) => {
        console.log(item)
        if (cart.length < 3) {
            console.log(item)
            dispatch({
                type: 'ADD_ITEM',
                item: {
                    id: item.id,
                    title: item.title,
                    coverImage: item.coverImage,
                    price: item.price,
                    score: item.score,
                    availableCoupon: item.availableCoupon,
                    quantity: item.quantity=1,
                },
            });
        } else {
            alert('장바구니에는 최대 3개의 상품을 담을 수 있습니다.');
        }
    };


    const renderCards = sortPosts.map((item, index) => {
        if (item.availableCoupon == false){
        }else{
            item.availableCoupon=true
        }

        console.log(item)
        return (
            <Card
                key={index}
                cover={
                    <img
                        style={{ width: '100%', height: '12vw', minHeight: '200px', position: 'relative', overflow: 'hidden' }}
                        alt="thumbnail"
                        src={item.coverImage}
                    />
                }>
                {item.availableCoupon !== false && <Coupon>할인 쿠폰</Coupon>}

                <Button onClick={() => addToCartHandler(item)} style={{ width: '100%' }} size="small" shape="round" type="danger">
                    {carted ? '빼기' : '장바구니'}
                </Button><br />
                <br />
                <span>제목 :  {item.title} </span><br />
                <span>♥ {item.score} </span><br />
                <br />
                <hr />
                <span>{`${item.price.toLocaleString()}원`} </span><br />
            </Card>
        )
    })

    return (
        <div>
            <List>
                {renderCards}
            </List>
        </div>
    );
};

export default ProductItem;