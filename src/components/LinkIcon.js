import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkIcon = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={icon} className="icon" size="2x" />
  </a>
);

export default LinkIcon;
