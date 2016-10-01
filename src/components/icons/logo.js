import React from 'react';
import SVGInline from 'react-svg-inline';
import { Link } from 'react-router';
import s from './style.css';
import logo from '../../svg/logo.svg';


const Logo = () => (
  <Link to="/" >
    <SVGInline svg={logo} className={s.logo} classSuffix="" cleanup />
  </Link>
);

export default Logo;
