import React from 'react'
import { Row, Col, Button, Divider, Descriptions, Radio } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';

function CartPayment() {
    const couponData=0
    return (
        <div>
            <Row>
                <Divider orientation="left">최종 결제 금액</Divider>
                {couponData ? (
                    <Radio.Group
                        //value={defaultChecked}
                        buttonStyle="solid"
                        style={{ margin: '25px 50px 0 60px' }}
                    //onChange={handleChange}
                    >
                        <Radio
                            value={'unApplied'}
                        //disabled={isNotRecommend}
                        >
                            쿠폰 미적용
          </Radio>
                        <Radio
                        // value={couponData.rate.type}
                        //disabled={isNotRecommend}
                        >
                            {'ㅇㅇ'}
                        </Radio>
                        <Radio
                        //  value={couponData.amount.type}
                        //disabled={isNotRecommend}
                        >
                            {'ㅇㅇ'}
                        </Radio>
                    </Radio.Group>
                ) : (
                        ''
                    )}
                <Descriptions bordered style={{ margin: '10px 50px 0 50px' }}>
                    <Descriptions.Item label="총 상품 금액" span={2}>
                        <>
                            <Text >{'100원'}</Text>
                            <Text style={{ marginLeft: 2 }}>원</Text>
                        </>
                    </Descriptions.Item>
                    <Descriptions.Item label="상품 할인 금액">
                        <>
                            <Text >{'100원'}</Text>
                            <Text style={{ marginLeft: 2 }}>원</Text>
                        </>
                    </Descriptions.Item>
                    <Descriptions.Item label="최종 가격" span={3}>
                        <>
                            <Text >{'100원'}</Text>
                            <Text style={{ marginLeft: 2 }}>원</Text>
                        </>
                    </Descriptions.Item>
                </Descriptions>

                <Divider />
            </Row>
            <Row style={{ textAlign: 'right' }}>
                <Button size="large" style={{ marginRight: 8 }}>
                    뒤로 가기
          </Button>
                <Button
                    type="danger"
                    size="large"
                    style={{ marginRight: 6 }}
                // disabled={!tableDataSource.totalPrice}
                >
                    결제하기
        </Button>
            </Row>
        </div>
    )
}

export default CartPayment
