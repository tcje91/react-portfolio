import React from 'react';
import { Link } from '@reach/router';

const NavItems = ({
  showMenu, toggleMenu, path,
}) => (
  <div className="nav-list">
    <Link to="/" onClick={toggleMenu} className={`nav-item ${showMenu ? 'open' : ''} ${path === '/' ? 'active' : ''}`}>Home</Link>
    <br />
    <Link to="/work" onClick={toggleMenu} className={`nav-item ${showMenu ? 'open' : ''} ${path === '/work' ? 'active' : ''}`}>Work</Link>
    <br />
    <Link to="/about" onClick={toggleMenu} className={`nav-item ${showMenu ? 'open' : ''} ${path === '/about' ? 'active' : ''}`}>About</Link>
    <br />
    <Link to="/contact" onClick={toggleMenu} className={`nav-item ${showMenu ? 'open' : ''} ${path === '/contact' ? 'active' : ''}`}>Contact</Link>
  </div>
);

export default NavItems;
