import React from 'react';
import { Link } from '@reach/router';

const NavItems = ({
  showMenu, toggleMenu, path,
}) => (
  <div className="nav-list">
    <Link to="/" onClick={toggleMenu} className={`nav-item ${showMenu ? 'open' : ''} ${path === '/' ? 'selected' : ''}`}>Home</Link>
    <br />
    <Link to="/work" onClick={toggleMenu} className={`nav-item ${showMenu ? 'open' : ''} ${path === '/work' ? 'selected' : ''}`}>Work</Link>
    <br />
    <Link to="/about" onClick={toggleMenu} className={`nav-item ${showMenu ? 'open' : ''} ${path === '/about' ? 'selected' : ''}`}>About</Link>
    <br />
    <Link to="/contact" onClick={toggleMenu} className={`nav-item ${showMenu ? 'open' : ''} ${path === '/contact' ? 'selected' : ''}`}>Contact</Link>
  </div>
);

export default NavItems;
