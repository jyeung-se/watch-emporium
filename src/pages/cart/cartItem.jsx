import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const CartItem = (props) => {

    const { id, productName, brand, price, dial, caseSize, movement, productImage } = props.data
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)


    return (
        <div className='cartItem'>
            <img src={productImage} alt="product img" />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
                <div className='itemCounter'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}
