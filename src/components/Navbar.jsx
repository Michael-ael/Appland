import React, { useState } from 'react'
import Logo from '../images/logo.png'

const Navbar = () => {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50 ) {
            setnav(true);
        } else{
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? 'nav-active' : 'nav'}>
            <a href="" className="logo">
                <img src={Logo} alt="" />
            </a>
            
            <input type="checkbox" className='menu-btn' id='menu-btn' />
            <label htmlFor="menu-btn" className='menu-icon'>
                <span className='nav-icon'></span>
            </label>

            <ul className="menu">
                <li><a href="#" className="active"> Home </a></li>
                <li><a href="#"> Features </a></li>
                <li><a href="#"> About </a></li>
                <li><a href="#"> UI SS </a></li>
                <li><a href="#"> Download </a></li>
            </ul>
        </nav>
    )
}

export default Navbar
