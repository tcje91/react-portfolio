import React, { Component } from 'react';
import MenuBtn from './MenuBtn';
import NavItems from './NavItems';

export default class Menu extends Component {
  state = {
    showMenu: false,
    selected: 'home',
  }

  toggleMenu = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  }

  updateSelected = (page) => {
    this.setState({ selected: page });
  }

  render() {
    const { showMenu, selected } = this.state;

    return (
      <div className={`menu ${showMenu ? 'open' : ''}`}>
        <MenuBtn showMenu={showMenu} toggleMenu={this.toggleMenu} />
        <NavItems showMenu={showMenu} selected={selected} updateSelected={this.updateSelected} />
      </div>
    );
  }
}
