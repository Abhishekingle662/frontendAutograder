import React, { useState } from 'react';
import './navbar.css'; // Import the CSS file
import Icon from './icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <section className="header-content">
        <h1 className="logo">
        <Icon />
          <a className='Title' href="#hero"> Grade.ai</a>
        </h1>
        <div className="nav-menu">
          <button id="hamburger-button" className="hamburger-button" onClick={toggleMenu}>
            <svg className="hamburger-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0 6h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zm0 6h14a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z"/>
            </svg>
          </button>
          <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`} aria-label="main">
            <a href="#features" className="nav-link">Features</a>
            <a href="#contact" className="nav-link">Contact Us</a>
          </nav>
        </div>
      </section>

      <section id="mobile-menu" className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
        <nav className="mobile-nav-links" aria-label="mobile">
          <a href="#hero" className="mobile-nav-link">Home</a>
          <a href="#features" className="mobile-nav-link">Features</a>
          <a href="#contact" className="mobile-nav-link">Contact Us</a>
          <a href="#footer" className="mobile-nav-link">Legal</a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
