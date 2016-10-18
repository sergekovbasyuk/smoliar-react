import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import cross from '../../svg/cross-y.svg';

const Cross = () => (
  <SVGInline svg={cross} className={s.cross} classSuffix="" cleanup />
);

export default Cross;
