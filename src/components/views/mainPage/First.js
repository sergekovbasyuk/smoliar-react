import React from 'react';
import s from './style.css';
import Logo from '../../icons/logo';
import ArrowScroll from '../../icons/arrowScroll';

const First = ({ quotation, quoteAuthor, arrowClickHandler }) => (
  <section className="section">
    <video autoPlay="true" loop poster="https://res.cloudinary.com/dsie3eeqb/image/upload/v1486470547/screenshot_p5nut5.jpg">
      <source src="https://res.cloudinary.com/dsie3eeqb/video/upload/v1486470306/bg-video_gtaeaf.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className={s.logoContainer}><Logo /></div>
    <div className={s.content}>
      <h1 className={s.title}>Hi, there!</h1>
      <p>{quotation}
        <br />
        <span>{quoteAuthor}</span></p>
    </div>
    <a href="" className={s.linkScroll} onClick={arrowClickHandler}>
      <ArrowScroll />Scroll down
    </a>
  </section>
);

export default First;
