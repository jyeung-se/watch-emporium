import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cartItem'
import './cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, calcTotalCartPrice } = useContext(ShopContext)
  const totalPrice = calcTotalCartPrice()
  const navigate = useNavigate()

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

        {totalPrice > 0 ? (
        <div className='checkout'>
          <p>Subtotal: ${totalPrice}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
        ) : (
          <h1>Your Cart Is Empty</h1>
        )}
      </div>
    )
  }

export default Cart