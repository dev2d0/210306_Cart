import React, {useState}  from 'react';
import { Card, Button } from 'antd';
import {
    List
} from './ProductStyle';

const ProductItem = ({ props, posts, clickHandler }) => {
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
        //console.log(item.id)
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
                <Button onClick={() => handleClick(item.id)} id={Id} style={{ width: '100%' }} size="small" shape="round" type="danger">
                    장바구니
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

export default ProductItem;