import React, { Component } from 'react';

class App extends Component {
  state = {
    showMenu: false,
  }

  render() {
    const { showMenu } = this.state;
    return (
      <div className="App">
        <h1>Hello world</h1>
        {showMenu && <p>menu!</p>}
      </div>
    );
  }
}

export default App;
