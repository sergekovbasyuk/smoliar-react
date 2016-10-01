import React from 'react';
import { Link } from 'react-router';
import s from './style.css';
import Close from '../../icons/close';

class MainMenu extends React.Component {
  render() {
    return (
      <div className={s.menu + (this.props.hidden ? '' : ' is-open')}>
        <a onClick={this.props.crossClickHandler} href=""><Close /></a>
        <ul className={s.inner} onClick={this.props.menuItemClickHandler}>
          <li className={s.item}><Link to="/" className={s.link}>Home</Link></li>
          <li className={s.item}><Link to="/about" className={s.link}>About Me</Link></li>
          <li className={s.item}><Link to="/works" className={s.link}>My works</Link></li>
          <li className={s.item}><Link to="/blog" className={s.link}>Resources</Link></li>
          <li className={s.item}><Link to="/contact" className={s.link}>Get in touch</Link></li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;
