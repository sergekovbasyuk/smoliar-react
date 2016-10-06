import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import q from '../../svg/q.svg';

const Q = () => (
  <SVGInline svg={q} className={s.q} classSuffix="" cleanup />
);

export default Q;
