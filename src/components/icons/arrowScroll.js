import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import arrowLeft from '../../svg/arrow-left.svg';

const ArrowScroll = () => (
  <SVGInline svg={arrowLeft} className={s.arrowScroll} classSuffix="" cleanup />
);

export default ArrowScroll;
