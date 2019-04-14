import React, { Component } from 'react';
import MenuBtn from './MenuBtn';

export default class Menu extends Component {
  state = {
    showMenu: false,
  }

  toggleMenu = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  }

  render() {
    const { showMenu } = this.state;

    return (
      <div>
        <MenuBtn showMenu={showMenu} toggleMenu={this.toggleMenu} />
      </div>
    );
  }
}
