import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}

    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItemQuantity = (newQuantity, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newQuantity}))
    }

    const calcTotalCartPrice = () => {
        let totalPrice = 0

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalPrice += cartItems[item] * itemInfo.price
            }
        }
        return totalPrice
    }

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemQuantity, calcTotalCartPrice }

    console.log(cartItems)
    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}
