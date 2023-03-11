import React, { useState } from 'react'
import './coponent.css'
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { GrFavorite } from 'react-icons/gr'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [activeHamburger, setActiveHamburger] = useState(false)
  const navigate = useNavigate()
  const handleMenu = () => {
    setActiveHamburger(!activeHamburger)
  }
  return (
    <div>
      <div className='nav-main'>
        <div className="app-logo" onClick={() => navigate("/")}>Logo</div>
        <div className="item-menu">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Features</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="right-menu-icons">
          <ul>
            <li><AiOutlineSearch /></li>
            <li><MdOutlineLocalGroceryStore /></li>
            <li><GrFavorite /></li>
            <li>{!activeHamburger ? <GiHamburgerMenu className='nav-hamburger-menu' onClick={handleMenu} /> : <RxCross2 className='nav-hamburger-menu' onClick={handleMenu} />}</li>
          </ul>
          <button className='login-btn' onClick={() => navigate("/login")}>Login</button>
        </div>
      </div>
      {activeHamburger && (<div className='main-toggle'>
        <div className='prompt-class'>
          <p className='p1'>Free shipping for standard order over $100</p>
          <p className='p2'>|    <a href='#'>Help & FAQs</a>    |    <a href='#'>My Account</a>    |    <a href='#'>EN</a>    |    <a href='#'>USD</a>    |</p>
        </div>
        <div className="expended-nav">
          <ul>
            <li>
              Home
            </li>
            <li>
              Shop
            </li>
            <li>
              Features
            </li>
            <li>
              Blog
            </li>
            <li>
              About
            </li>
            <li>
              Contact
            </li>
            <button className='login-btn respnsive-btn' onClick={() => navigate("/login")}>Login</button>
          </ul>
        </div></div>)}
    </div>
  )
}

export default Navbar