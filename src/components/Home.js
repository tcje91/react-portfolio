import React from 'react';
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';
import LinkIcon from './LinkIcon';
import ButtonBar from './ButtonBar';

const Home = () => (
  <div className="home content-container">
    <h1 className="lrg-heading">
      Joe
      {' '}
      <span className="text-highlight">Bloggs</span>
    </h1>
    <h3 className="med-heading">Junior developer</h3>
    <div>
      <LinkIcon href="https://github.com" icon={BrandIcons.faGithub} />
      <LinkIcon href="https://www.linkedin.com" icon={BrandIcons.faLinkedin} />
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor eum alias asperiores, earum labore pariatur officia sunt expedita cumque sed quis quasi eligendi. Illo consectetur neque, ad, reiciendis iste voluptate quae, itaque debitis nobis ex ratione consequatur. Nobis velit consequatur culpa maiores dolore error sint nostrum quidem hic alias.</p>
    <ButtonBar />
  </div>
);

export default Home;
