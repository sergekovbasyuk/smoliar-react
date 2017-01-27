import React from 'react';
import { Link } from 'react-router';
import s from './style.css';

const AboutMe = ({ aboutMe }) => (
  <section className="section">
    <div className={s.content}>
      <h1 className={s.title}>About Me</h1>
      <p>Ukrainian - First Assistant Director</p>
      <p>{aboutMe}</p>
      <Link to="/about" className={s.link}>read more</Link>
    </div>
  </section>
);

export default AboutMe;
