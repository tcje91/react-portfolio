import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';


const Home = () => (
  <div className="home">
    <h1>Home</h1>
    <h1 className="lrg-heading">
      Joe
      {' '}
      <span className="text-highlight">Bloggs</span>
    </h1>
    <FontAwesomeIcon icon={BrandIcons.faGithub} size="2x" className="icon" />
    <FontAwesomeIcon icon={BrandIcons.faLinkedin} size="2x" className="icon" />
  </div>
);

export default Home;
