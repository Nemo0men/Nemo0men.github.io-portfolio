import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contactPage').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>

        <img src={menu} alt="Menu" className='mobMenu' onClick={() => setMenuOpen(!menuOpen)}/>
        <div className="navMenu" style={{display: menuOpen ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setMenuOpen(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setMenuOpen(false)}>Portfolio</Link>
            <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar