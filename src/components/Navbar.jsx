import React from 'react'
import './Navbar.css'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
         <img src={logo} alt="logo" className='logo' />
        <ul>
            <li>HOME</li>
            <li>BLOG</li>
            <li>DESTINATIONS</li>
            <li>CATEGORIES</li>
            <li>GALLERY</li>
            <li>ABOUT</li>
            <li>CONTACT</li>   
        </ul>
    </nav>
  )
}

export default Navbar