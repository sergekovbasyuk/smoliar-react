import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import produce from '../../svg/produce.svg';

const Produce = () => (
  <SVGInline svg={produce} className={s.produce} classSuffix="" cleanup />
);

export default Produce;
