import React from 'react';
import s from './style.css';
import Close from '../../icons/close';
import Facebook from '../../icons/facebook';
import Instagram from '../../icons/instagram';
import ArrowDown from '../../icons/arrowDown';
import ArrowUp from '../../icons/arrowUp';
import fullpage from 'fullpage.js';
import jquery from 'jquery';

let SideMenu = React.createClass({
  upClickHandler(e){
    e.preventDefault();
    jquery.fn.fullpage.moveSectionUp();
  },

  downClickHandler(e){
    e.preventDefault();
    jquery.fn.fullpage.moveSectionDown();
  },

  render() {
    return (
      <div className={s.menu}>
        <a href="#" onClick={this.upClickHandler}><ArrowUp /></a>
        <div className={s.inner}>
          <span id='slide-number' className={s.item}></span>
        </div>
        <a href="#" onClick={this.downClickHandler}><ArrowDown /></a>
        <a className={s.social} href="https://www.facebook.com/leshasmoliar"><Facebook /></a>
        <a className={s.social} href="https://www.instagram.com/leshasmoliar/"><Instagram /></a>
      </div>
		);
  }
});

export default SideMenu;
