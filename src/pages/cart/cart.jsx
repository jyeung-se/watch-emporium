import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cartItem'
import './cart.css'

const Cart = () => {
  const { cartItems, calcTotalCartPrice } = useContext(ShopContext)
  const totalPrice = calcTotalCartPrice()

    return (
      <div className='cart'>
        <div>
            <h1>Your Cart</h1>
        </div>
        <div className='cartItems'>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />
            }
          })}
        </div>

        <div className='checkout'>
          <p>Subtotal: ${totalPrice}</p>
          <button>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      </div>
    )
  }

export default Cart