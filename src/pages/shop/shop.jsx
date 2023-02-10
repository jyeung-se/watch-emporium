import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './product'
import './shop.css'

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            Watch Emporium
        </div>
        <div className='products'>
            {PRODUCTS.map((product) => {
                return <Product data={product} />
            })}
        </div>
    </div>
  )
}

export default Shop