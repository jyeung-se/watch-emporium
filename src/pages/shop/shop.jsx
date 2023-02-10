import React from 'react'
import PRODUCTS from '../../products'

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            Watch Emporium
        </div>
        <div className='products'>
            {PRODUCTS.map((product) => {
                <Product />
            })}
        </div>
    </div>
  )
}

export default Shop