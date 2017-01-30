import React from 'react';
import s from './style.css';

const Calendar = () => (
  <svg className={s.calendar} xmlns="http://www.w3.org/2000/svg" viewBox="-2 4.5 18 17.5">
    <path d="M1.5 11.5h2v2h-2zm0 4h2v2h-2zm3-4h2v2h-2zm0 4h2v2h-2zm3-4h2v2h-2zm0 4h2v2h-2zm3-4h2v2h-2zm0 4h2v2h-2z" />
    <path d="M12.5 7V4.5h-2V7h-7V4.5h-2V7H-2v15h18V7h-3.5zM15 21H-1V8h16v13z" />
  </svg>
);

export default Calendar;
