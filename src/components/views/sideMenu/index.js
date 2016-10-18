import React from 'react';
import 'fullpage.js';
import jquery from 'jquery';
import s from './style.css';
import Facebook from '../../icons/facebook';
import Instagram from '../../icons/instagram';
import ArrowDown from '../../icons/arrowDown';
import ArrowUp from '../../icons/arrowUp';

class SideMenu extends React.Component {
  upClickHandler(e) {
    e.preventDefault();
    jquery.fn.fullpage.moveSectionUp();
  }

  downClickHandler(e) {
    e.preventDefault();
    jquery.fn.fullpage.moveSectionDown();
  }

  render() {
    if (this.props.location.pathname === '/') {
      return (
        <div className={s.menu}>
          <a href="" onClick={this.upClickHandler}><ArrowUp /></a>
          <div className={s.inner}>
            <span id="slide-number" className={s.item} />
          </div>
          <a href="" onClick={this.downClickHandler}><ArrowDown /></a>
          <a className={s.social} href="https://www.facebook.com/leshasmoliar"><Facebook /></a>
          <a className={s.social} href="https://www.instagram.com/leshasmoliar/"><Instagram /></a>
        </div>
      );
    }
    return null;
  }
}

export default SideMenu;
