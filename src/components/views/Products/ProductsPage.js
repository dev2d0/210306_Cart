import React, { useState, useEffect } from 'react'
import { productItems } from "../../data/productItems.js";
import ProductItem from './Sections/ProductItem'
import Paging from './Sections/Paging'
import 'antd/dist/antd.css';

function Products() {
    const [posts, setPosts] = useState(productItems);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        fetch('data/productItems.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                setPosts(res.productItems)
            })
    }, []);

    return (
        <div style={{ width: '85%', margin: '3rem auto', minHeight: '770px' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Class101 Products_Page.{currentPage}</h1>
            </div>
            <hr />

            {/* Cards */}
            <ProductItem posts={currentPosts} />
            <Paging postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    )
}

export default Products