import React from 'react';
import s from './style.css';
import Logo from '../../icons/logo';
import ArrowScroll from '../../icons/arrowScroll';

const First = ({ quotation, quoteAuthor, arrowClickHandler, backgroundImage }) => {
  let style;

  if (backgroundImage) {
    style = {
      backgroundImage: `url(${backgroundImage.fields.file.url})`,
    };
  }

  return (
    <section className="section" style={style}>
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
};

export default First;
