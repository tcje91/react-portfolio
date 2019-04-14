import React from 'react';
import { Router } from '@reach/router';

import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import About from './components/About';
import Menu from './components/Menu';
import NotFound from './components/NotFound';

const App = () => (
  <div className="App">
    <Menu />
    <Router>
      <Home path="/" />
      <Work path="/work" />
      <Contact path="/contact" />
      <About path="/about" />
      <NotFound path="/*" />
    </Router>
  </div>
);


export default App;
