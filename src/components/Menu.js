import React, { Component } from 'react';
import { Location } from '@reach/router';
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
      <Location>
        {({ location: { pathname } }) => (
          <div className={`menu ${showMenu ? 'open' : ''}`}>
            <MenuBtn showMenu={showMenu} toggleMenu={this.toggleMenu} />
            <NavItems showMenu={showMenu} toggleMenu={this.toggleMenu} path={pathname} />
          </div>
        )}
      </Location>
    );
  }
}
