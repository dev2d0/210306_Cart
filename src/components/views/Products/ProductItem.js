import React from "react";
import { productItems } from "../../data/productItems.js";
import { Card, Button } from 'antd';
import {
    List
} from './ProductStyle';

const productItem = ({ posts, clickHandler }) => {
    console.log(posts)

    var sortData = function (data, key) {
        return data.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return x < y ? -1 : x > y ? 1 : 0;

        });
    };
    const sortPosts=sortData(posts, 'score')

    const renderCards = sortPosts.map((item, index) => {
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
                <Button style={{ width: '100%' }} size="small" shape="round" type="danger" onClick={clickHandler}>
                    스크랩
                </Button><br />
                <br />
                <span>제목 :  {item.title} </span><br />
                <br />
                <span>가격 :  {`${item.price.toLocaleString()}원`} </span><br />
                <span>점수 :  {`${item.score.toLocaleString()}점`} </span><br />
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

export default productItem;