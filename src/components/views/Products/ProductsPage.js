import React, { useEffect, useState } from 'react'
import { Card, Button } from 'antd';
import { productItems } from "../../data/productItems.js";
import ProductItem from './ProductItem'
import Paging from './Paging'
import 'antd/dist/antd.css';
import {
    List
} from './ProductStyle';

const { Meta } = Card;

function Products() {
    const [posts, setPosts] = useState(productItems);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    console.log(posts)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const clickHandler = () => {
    }

    const renderCards = productItems.map((item, index) => {
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
        <div style={{ width: '85%', margin: '3rem auto', minHeight: '770px' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>All Products price </h2>
            </div>
            <hr />

            {/* Cards */}
            <List>
                {renderCards}
            </List>
            <ProductItem posts={currentPosts} clickHandler={clickHandler} />
            <Paging postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    )
}

export default Products
