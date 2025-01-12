import React from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollto = () => {
    setTimeout(() => {
      window.scrollBy(0, 2); // Move down by 1 pixel after scrolling
    }, 515); // Adjust the delay as needed
  };

  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-80} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} duration={500} offset={-60} className="desktopMenuListItem" onClick={scrollto}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} duration={500} offset={-100} className="desktopMenuListItem" onClick={scrollto}>Portfolio</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contactPage').scrollIntoView({behavior: 'smooth', offset: -100});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
        
        <img src={menu} alt="Menu" className='mobMenu' onClick={() => setMenuOpen(!menuOpen)}/>
        <div className="navMenu" style={{display: menuOpen ? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-80} className="listItem" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} duration={500} offset={-50} className="listItem" onClick={() => {
              scrollto();
            }}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} duration={500} offset={-100} className="listItem" onClick={() => {
              scrollto();
            }}>Portfolio</Link>
            <Link activeClass='active' to='contactPage' spy={true} smooth={true} duration={500} offset={-80}  className="listItem" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar