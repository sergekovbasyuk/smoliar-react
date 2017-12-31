import React from 'react';
import { Link } from 'react-router';
import s from './style.css';

const AboutMe = ({ aboutMe, backgroundImage }) => {
  let style;

  if (backgroundImage) {
    style = {
      backgroundImage: `url(${backgroundImage.fields.file.url})`,
    };
  }

  return (
    <section className="section dynamic-background" style={style}>
      <div className={s.content}>
        <h1 className={s.title}>About Me</h1>
        <span>Ukrainian - First Assistant Director</span>
        <br />
        <br />
        <p>{aboutMe}</p>
        <Link to="/about" className={`${s.link} more-btn`}>read more</Link>
      </div>
    </section>
  );
};

AboutMe.propTypes = {
  backgroundImage: React.PropTypes.object,
  aboutMe: React.PropTypes.string,
};

export default AboutMe;
