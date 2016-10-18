import React from 'react';
import s from './style.css';
import Burger from '../../icons/burger';

class Header extends React.Component {
  render() {
    let pageName;

    if (this.props.location.pathname.indexOf('/blog') === 0) {
      pageName = 'blog';
    } else if (this.props.location.pathname.indexOf('/works') === 0) {
      pageName = 'My works';
    } else if (this.props.location.pathname.indexOf('/about') === 0) {
      pageName = 'About me';
    } else if (this.props.location.pathname.indexOf('/contact') === 0) {
      pageName = 'Schedule';
    }

    if (!this.props.location || !this.props.burgerClickHandler) {
      return null;
    }

    return (
      <header className={s.header}>
        <a onClick={this.props.burgerClickHandler} href="">
          <Burger />
          <span className={s.pageName}>{pageName}</span>
        </a>
      </header>
    );
  }
}

Header.propTypes = {
  location: React.PropTypes.object.isRequired,
  burgerClickHandler: React.PropTypes.func.isRequired,
};

export default Header;
