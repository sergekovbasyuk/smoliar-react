import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import square from '../../svg/square.svg';

const Square = () => (
  <SVGInline svg={square} className={s.square} classSuffix="" cleanup />
);

export default Square;
