import React from 'react'

export const CartItem = (props) => {

    const { id, productName, brand, price, dial, caseSize, movement, productImage } = props.data

    return (
        <div className='cartItem'>
            <img src={productImage} alt="product img" />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
        </div>
    )
}
