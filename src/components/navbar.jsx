import React from 'react'
import { Link } from 'react-router-dom'
import { GiShoppingCart } from 'react-icons/gi'


export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to='/'>Shop</Link>
            <Link to='/cart'>
                <GiShoppingCart size={32} />
            </Link>
        </div>
    </div>
  )
}