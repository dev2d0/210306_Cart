import React from 'react';
import ProductCard from './ProductCard';
import {
    List,
} from './ProductStyle';

const ProductItem = ({ posts }) => {

    var sortData = function (data, key) {
        return data.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return x > y ? -1 : x > y ? 1 : 0;
        });
    };//내름차순 정렬
    const sortPosts = sortData(posts, 'score')

    return (
        <List>
            {sortPosts.map((item, index) => 
                 <ProductCard key={index} item={item} index={index} />
            )}
        </List>
    );
};

export default ProductItem;