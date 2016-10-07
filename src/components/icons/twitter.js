import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import twitter from '../../svg/twitter.svg';

const Twitter = () => (
  <SVGInline svg={twitter} className={s.twitter} classSuffix="" cleanup />
);

export default Twitter;
