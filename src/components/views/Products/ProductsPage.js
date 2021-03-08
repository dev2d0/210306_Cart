import React, { useEffect, useState } from 'react'
import { Card, Button } from 'antd';
import { productItems } from "../../data/productItems.js.js";
import ProductItem from './Sections/ProductItem'
import Paging from './Sections/Paging'
import 'antd/dist/antd.css';
import {
    List
} from './Sections/ProductStyle';

const { Meta } = Card;

function Products() {
    const [posts, setPosts] = useState(productItems);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [quantity, setQuantity] = useState(0);
    const [carts, setCarts] = useState([])

   // console.log(productItems)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const clickHandler = (id) => {
        console.log(carts)
        console.log(id)
        const newCarts = { ...carts, id }//Cart id State의 정보를 담는다.
        console.log(newCarts)
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
                <h1>Class101 Products_Page.{currentPage}</h1>
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
