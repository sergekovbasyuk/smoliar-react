import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import arrowDown from '../../svg/arrow-down.svg';

const ArrowDown = () => (
  <SVGInline svg={arrowDown} className={s.arrowUp} classSuffix="" cleanup />
);

export default ArrowDown;
