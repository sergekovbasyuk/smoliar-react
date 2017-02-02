import React from 'react';
import s from './style.css';
import Calendar from '../../icons/calendar';

const Second = ({ title, description, date, backgroundImage, location }) => {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
  };
  let img;
  let releaseDate;

  if (date) {
    releaseDate = (
      <span><Calendar /> {date}</span>
    );
  } else {
    releaseDate = null;
  }

  if (location === '/about') {
    img = <div className={s.bg} style={style} />;
  } else {
    img = <img src={backgroundImage} className={s.posterImage} alt="" />;
  }

  return (
    <section className={s.second}>
      {img}
      <div className={s.content}>
        <div className={s.description}>
          <h1 className={s.title}>{title}</h1>
          {releaseDate}
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

Second.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  date: React.PropTypes.string,
  backgroundImage: React.PropTypes.string,
  location: React.PropTypes.string,
};

export default Second;
