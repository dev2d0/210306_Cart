import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { useDispatch } from "react-redux";
import { addCart } from "../../../../Store/actions";
import {
    List,
    Coupon
} from './ProductStyle';

const ProductItem = ({ props, posts, clickHandler }) => {
    const dispatch = useDispatch();
    const [Id, setId] = useState([])

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

    const renderCards = sortPosts.map((item, index) => {
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

                <Button onClick={() => dispatch(addCart(item))} style={{ width: '100%' }} size="small" shape="round" type="danger">
                    장바구니
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