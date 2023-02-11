import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {
    const { id, productName, brand, price, dial, caseSize, movement, productImage } = props.data
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

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
                {/* Rather than use <React.Fragment> and </React.Fragment> there is a short syntax available: <> and the corresponding closing tag </> */}
                Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</> }
            </button>
        </div>
    )
}
