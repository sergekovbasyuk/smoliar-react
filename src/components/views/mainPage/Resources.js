import React from 'react';
import { Link } from 'react-router';
import s from './style.css';

const Resources = ({ usefulResources, backgroundImage }) => {
  let style;

  if (backgroundImage) {
    style = {
      backgroundImage: `url(${backgroundImage.fields.file.url})`,
    };
  }

  return (
    <section className="section" style={style}>
      <div className={s.content}>
        <h1 className={s.title}>Resources</h1>
        <p>{usefulResources}</p>
        <Link to="/blog" className={s.link}>learn more</Link>
      </div>
    </section>
  );
};

export default Resources;
