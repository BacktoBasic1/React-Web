import React, { useState} from 'react'
import "./Navbar.css"
import {menuicon,exiticon} from '../../Assets'

const Navbar = () => {

const [isActive, setIsActive] = useState(false);
  return (
    <>
    <nav>
        <a href="#"className='logo'>
            Sound<span className='red-transform'>Clao </span> 
        </a>
        <ul>
            <a href="#info">
                <li>About</li>
            </a>
            <a href="#topics">
                <li>Course Details</li>
            </a>
            <a href="#blog">
                <li>Blog</li>
            </a>
            <a href="#Testimonials">
                <li>Testimonials</li>
            </a>
        </ul>
        <div onClick={() => setIsActive(true)} className="menu-icon">
            <img src={menuicon} alt="" />
        </div>
    </nav>
        <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
            <div onClick={() => setIsActive(false)} className="close-icon">
            <img src={exiticon} alt="" />
        </div>
        <ul className='menu-items'>
            <li>
                <a href="#info">About</a>
            </li>
              <li>
                <a href="#topics">Course Details</a>
            </li>
              <li>
                <a href="#blog">Blog</a>
            </li>
              <li>
                <a href="#Testimonials">Testimonials</a>
            </li>
        </ul>

    </div>
      </>
  )

}

export default Navbar