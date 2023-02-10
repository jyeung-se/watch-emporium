import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {
    const { id, productName, brand, price, dial, caseSize, movement, productImage } = props.data
    const { addToCart } = useContext(ShopContext)

    return (
        <div className='product'>
            <img src={productImage} alt="product img" />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
            </div>
            <button className='addToCartButton' onClick={() => addToCart(id)}>
                Add To Cart
            </button>
        </div>
    )
}
