import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import benefits from '../../svg/benefits.svg';

const Benefits = () => (
  <SVGInline svg={benefits} className={s.benefits} classSuffix="" cleanup />
);

export default Benefits;
