import React from 'react'
import { Link } from 'react-router-dom'
import { GiShoppingCart } from 'react-icons/gi'
import logo from '../assets/logo.png'
import './navbar.css'
import '../App.css'


export const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img src={logo} />
      </div>
      <div className='navbar'>
            <div className='links'>
                <Link to='/'>Shop</Link>
                <Link to='/cart'>
                    <GiShoppingCart size={32} />
                </Link>
            </div>
      </div>
    </div>
  )
}
