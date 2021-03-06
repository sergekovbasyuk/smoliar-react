import React from 'react';
import { Link } from 'react-router';
import s from './style.css';

const Works = ({ myWorks, backgroundImage }) => {
  let style;

  if (backgroundImage) {
    style = {
      backgroundImage: `url(${backgroundImage.fields.file.url})`,
    };
  }

  return (
    <section className="section dynamic-background" style={style}>
      <div className={s.content}>
        <h1 className={s.title}>My Works</h1>
        <p>{myWorks}</p>
        <Link to="/works" className={s.link}>learn more</Link>
      </div>
    </section>
  );
};

Works.propTypes = {
  backgroundImage: React.PropTypes.object,
  myWorks: React.PropTypes.string,
};

export default Works;
