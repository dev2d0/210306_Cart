import React from 'react'
import { Descriptions, Button } from 'antd';
import { NavLink } from 'react-router-dom';

function CartPayment(props) {

    return (
        <>
            <h1>결제 금액</h1>
            <Descriptions layout="vertical" bordered>
                <Descriptions.Item label="총 상품 금액"><h2 style={{ fontWeight: 'bold' }}>{props.TotalPrices}</h2></Descriptions.Item>
                <Descriptions.Item label="상품 할인 금액"><h2 style={{ fontWeight: 'bold' }}>{props.DiscountPrices}</h2></Descriptions.Item>
                <Descriptions.Item label="최종 상품 금액">
                    <h1 style={{ display: 'inline-block', fontWeight: 'bolder', color: 'red' }}>{props.FinalPrices}</h1>
                </Descriptions.Item>
            </Descriptions>
            <br /><br />
            <div style={{ alignItems: 'center', textAlign: 'center' }}>
                <NavLink to='/'>
                    <Button size="large" style={{ marginRight: 10 }}>
                        뒤로 가기
                    </Button>
                </NavLink>
                <Button type="danger" size="large">
                    결제하기
        </Button>
            </div>
        </>
    )
}

export default CartPayment
