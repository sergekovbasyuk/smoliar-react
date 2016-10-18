import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import arrowLeft from '../../svg/arrow-down.svg';

const arrowRight = () => (
  <SVGInline svg={arrowLeft} className={s.arrowRight} classSuffix="" cleanup />
);

export default arrowRight;
