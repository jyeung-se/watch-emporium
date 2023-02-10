import React from 'react'

export const Product = (props) => {
    const { id, productName, brand, price, dial, caseSize, movement, productImage } = props.data
    
    return (
        <div className='product'>
            <img src={productImage} alt="product img" />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <button className='addToCartButton'>Add To Cart</button>
        </div>
    )
}
