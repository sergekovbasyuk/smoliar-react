import React from 'react';
import s from './style.css';

const Burger = () => (
  <svg className={s.burger} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 16">
    <path d="M0 2V0h23v2H0zm0 7V7h23v2H0zm0 7v-2h23v2H0z" />
  </svg>
);

export default Burger;
