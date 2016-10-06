import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import calendar from '../../svg/calendar.svg';

const Calendar = () => (
  <SVGInline svg={calendar} className={s.calendar} classSuffix="" cleanup />
);

export default Calendar;
