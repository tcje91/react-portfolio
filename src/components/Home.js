import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';


const Home = () => (
  <div className="home content-container">
    <h1 className="lrg-heading">
      Joe
      {' '}
      <span className="text-highlight">Bloggs</span>
    </h1>
    <h3 className="med-heading">Junior developer</h3>
    <FontAwesomeIcon icon={BrandIcons.faGithub} size="2x" className="icon" />
    <FontAwesomeIcon icon={BrandIcons.faLinkedin} size="2x" className="icon" />
  </div>
);

export default Home;
