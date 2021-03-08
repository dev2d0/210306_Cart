import React, { useState } from 'react'

function CartBlock(props) {
   
    const renderCartImage = (images) => {
        if (images.length > 0) {
            let image = images[0]
            return `https://dev2d0travelexpenses.s3.ap-northeast-2.amazonaws.com/${image}`
        }
    }

    const renderItems = () => (
        props.travels && props.travels.map((travel, index) => (
            <tr key={index}>
                <td>
                    <a href={`/travel/${travel._id}`}>
                        <img
                            height='60px'
                            style={{ width: '70px' }} alt="travel"
                            src={renderCartImage(travel.images)} />
                    </a>
                </td>
                <td>
                    {travel.title}
                </td>
                <td>
                    ₩{travel.price.toLocaleString()}원
                </td>
                <td>
                    <button onClick={() => props.deleteScrap(travel._id)}>
                        Remove
                    </button>
                </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Title</th>
                        <th>Product Price</th>
                        <th>Remove from Cart</th>
                    </tr>
                </thead>

                <tbody>
                    {renderItems()}
                </tbody>

            </table>
        </div>
    )
}

export default CartBlock