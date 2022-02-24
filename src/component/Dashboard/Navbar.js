import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../image/logo1.png';

function Navbar() {
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <a href="/" className='logo'><img src={logo} alt=''></img></a>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'> </span>
            </label>
            <ul className='menu mt-3'>
                <li><Link to="main" smooth={true} duration={2000}>Home</Link></li>
                <li><Link to="products" smooth={true} duration={2000}>About</Link></li>
                <li><Link to="contact" smooth={true} duration={2000}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar