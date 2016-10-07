import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import arrow from '../../svg/arrow.svg';

const ArrowPrev = () => (
  <SVGInline svg={arrow} className={s.arrowPrev} classSuffix="" cleanup />
);

export default ArrowPrev;
