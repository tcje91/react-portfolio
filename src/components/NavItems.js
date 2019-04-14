import React from 'react';
import { Link } from '@reach/router';

const NavItems = ({ showMenu }) => (
  <div className="nav-list">
    <Link to="/" className={`nav-item ${showMenu ? 'open' : ''}`}>Home</Link>
    <br />
    <Link to="/work" className={`nav-item ${showMenu ? 'open' : ''}`}>Work</Link>
    <br />
    <Link to="/about" className={`nav-item ${showMenu ? 'open' : ''}`}>About</Link>
    <br />
    <Link to="/contact" className={`nav-item ${showMenu ? 'open' : ''}`}>Contact</Link>
  </div>
);

export default NavItems;
