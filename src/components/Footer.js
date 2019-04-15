import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className="footer">
    <span className="footer-text">Built by Joe Bloggs</span>
    <FontAwesomeIcon icon={BrandIcons.faReact} size="2x" className="icon" />
    <FontAwesomeIcon icon={BrandIcons.faSass} size="2x" className="icon" />
    <FontAwesomeIcon icon={BrandIcons.faHtml5} size="2x" className="icon" />
  </div>
);

export default Footer;
