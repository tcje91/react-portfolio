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
    <a href="https://github.com" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={BrandIcons.faGithub} size="2x" className="icon" /></a>
    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={BrandIcons.faLinkedin} size="2x" className="icon" /></a>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor eum alias asperiores, earum labore pariatur officia sunt expedita cumque sed quis quasi eligendi. Illo consectetur neque, ad, reiciendis iste voluptate quae, itaque debitis nobis ex ratione consequatur. Nobis velit consequatur culpa maiores dolore error sint nostrum quidem hic alias.</p>
  </div>
);

export default Home;
