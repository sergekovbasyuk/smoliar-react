import React from 'react';
import s from './style.css';
import Burger from '../../icons/burger';
import MainMenu from '../mainMenu';
import SideMenu from '../sideMenu';

const Header = React.createClass({
  getInitialState() {
    return {
      hidden: true,
    };
  },

  burgerClickHandler(e) {
    e.preventDefault();
    const newState = { hidden: false };
    this.setState(newState);
  },

  crossClickHandler(e) {
    e.preventDefault();
    const newState = { hidden: true };
    this.setState(newState);
  },

  menuItemClickHandler() {
    const newState = { hidden: true };
    this.setState(newState);
  },

  render() {
    let headerComponent;

    if (this.props.location.pathname === '/') {
      headerComponent = (
        <div>
          <a onClick={this.burgerClickHandler} href=""><Burger /></a>
          <MainMenu
            hidden={this.state.hidden}
            crossClickHandler={this.crossClickHandler}
            menuItemClickHandler={this.menuItemClickHandler}
          />
          <SideMenu />
        </div>
      );
    } else {
      headerComponent = (
        <div>
          <a onClick={this.burgerClickHandler} href=""><Burger /></a>
          <MainMenu
            hidden={this.state.hidden}
            crossClickHandler={this.crossClickHandler}
            menuItemClickHandler={this.menuItemClickHandler}
          />
        </div>
      );
    }
    return (
      <header className={s.header}>
        {headerComponent}
      </header>
    );
  },
});

Header.propTypes = {
  location: React.PropTypes.object.isRequired,
};

export default Header;
