import React from 'react';

const MenuBtn = ({ showMenu, toggleMenu }) => (
  <div className={`menu-btn ${showMenu ? 'close' : ''}`} onClick={toggleMenu}>
    <div className="btn-line" />
    <div className="btn-line" />
    <div className="btn-line" />
  </div>
);

export default MenuBtn;
