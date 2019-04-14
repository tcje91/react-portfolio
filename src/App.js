import React, { Component } from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {
  state = {
    showMenu: false,
  }

  render() {
    const { showMenu } = this.state;
    return (
      <div className="App">
        <Router>
          <Home path="/" />
          <Work path="/work" />
          <Contact path="/contact" />
          <About path="/about" />
        </Router>
        {showMenu && <p>menu!</p>}
      </div>
    );
  }
}

export default App;
