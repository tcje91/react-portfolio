import React, { Component } from 'react';
import MenuBtn from './MenuBtn';
import NavItems from './NavItems';

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
      <div className="menu">
        <MenuBtn showMenu={showMenu} toggleMenu={this.toggleMenu} />
        <NavItems showMenu={showMenu} />
      </div>
    );
  }
}
