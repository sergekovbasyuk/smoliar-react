import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import arrow from '../../svg/arrow.svg';

const ArrowNext = () => (
  <SVGInline svg={arrow} className={s.arrowNext} classSuffix="" cleanup />
);

export default ArrowNext;
