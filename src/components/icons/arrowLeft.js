import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import arrowLeft from '../../svg/arrow-left.svg';

const ArrowLeft = () => (
  <SVGInline svg={arrowLeft} className={s.arrowLeft} classSuffix="" cleanup />
);

export default ArrowLeft;
