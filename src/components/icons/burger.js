import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import burger from '../../svg/burger.svg';

const Burger = () => (
  <SVGInline svg={burger} className={s.burger} classSuffix="" cleanup />
);

export default Burger;
