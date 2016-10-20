import React from 'react';
import { Link } from 'react-router';
import s from './style.css';
import Close from '../../icons/close';

const MainMenu = ({ hidden, menuItemClickHandler, crossClickHandler }) => (
  <div className={s.menu + (hidden ? '' : ' is-open')}>
    <a onClick={crossClickHandler} href=""><Close /></a>
    <ul className={s.inner} onClick={menuItemClickHandler}>
      <li className={s.item}><Link to="/" className={s.link}>Home</Link></li>
      <li className={s.item}><Link to="/about" className={s.link}>About Me</Link></li>
      <li className={s.item}><Link to="/works" className={s.link}>My works</Link></li>
      <li className={s.item}><Link to="/blog" className={s.link}>Resources</Link></li>
      <li className={s.scheduleItem}><Link to="/contact" className={s.link}>Get in touch</Link></li>
    </ul>
  </div>
);

MainMenu.propTypes = {
  hidden: React.PropTypes.bool,
  menuItemClickHandler: React.PropTypes.func,
  crossClickHandler: React.PropTypes.func,
};

export default MainMenu;
