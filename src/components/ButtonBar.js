import React from 'react';
import { Link } from '@reach/router';

const ButtonBar = () => (
  <div className="btn-bar">
    <Link to="/about" className="nav-btn left">about</Link>
    <Link to="/work" className="nav-btn mid">work</Link>
    <Link to="/contact" className="nav-btn right">contact</Link>
  </div>
);

export default ButtonBar;
