import React from 'react';
import s from './style.css';
import Logo from '../../icons/logo';

const First = ({ title, description }) => (
  <section className={s.first}>
    <div className={s.logoContainer}>
      <Logo />
    </div>
    <h1 className={s.title}>{title}</h1>
    <p className={s.description}>{description}</p>
  </section>
);

First.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
};

export default First;
