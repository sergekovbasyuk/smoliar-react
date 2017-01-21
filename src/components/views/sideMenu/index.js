import React from 'react';
import 'fullpage.js';
import jquery from 'jquery';
import s from './style.css';
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
        </div>
      );
    }
    return null;
  }
}

export default SideMenu;
