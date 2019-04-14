import React from 'react';
import { Link } from '@reach/router';

const NavItems = ({ showMenu, selected, updateSelected }) => (
  <div className="nav-list">
    <Link to="/" onClick={() => updateSelected('home')} className={`nav-item ${showMenu ? 'open' : ''} ${selected === 'home' ? 'selected' : ''}`}>Home</Link>
    <br />
    <Link to="/work" onClick={() => updateSelected('work')} className={`nav-item ${showMenu ? 'open' : ''} ${selected === 'work' ? 'selected' : ''}`}>Work</Link>
    <br />
    <Link to="/about" onClick={() => updateSelected('about')} className={`nav-item ${showMenu ? 'open' : ''} ${selected === 'about' ? 'selected' : ''}`}>About</Link>
    <br />
    <Link to="/contact" onClick={() => updateSelected('contact')} className={`nav-item ${showMenu ? 'open' : ''} ${selected === 'contact' ? 'selected' : ''}`}>Contact</Link>
  </div>
);

export default NavItems;
