import React from 'react'
import { Card } from 'antd';
import { productItems } from "../../data/productItems.js";
import 'antd/dist/antd.css';
import {
    List
} from './ProductStyle';

const { Meta } = Card;

function Products() {

    const renderCards = productItems.map((item, index) => {
        return (
            <Card
                cover={
                    <img
                        style={{ width: '100%', height: '12vw', minHeight:'200px', position: 'relative', overflow: 'hidden' }}
                        alt="thumbnail"
                        src={item.coverImage}
                    />
                }>
                <Meta
                    title={item.title}
                />
                <br />
                <span>가격 :  {`${item.price.toLocaleString()}원`} </span><br />
                <span>점수 :  {`${item.score.toLocaleString()}점`} </span><br />
            </Card>
        )
    })

    return (
        <div style={{ width: '85%', margin: '3rem auto', minHeight: '770px' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>All Products price </h2>
            </div>
            <hr />

            {/* Cards */}
            <List>
                {renderCards}
            </List>
        </div>
    )
}

export default Products
