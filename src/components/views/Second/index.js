import React from 'react';
import s from './style.css';
import Calendar from '../../icons/calendar';

const Second = ({ title, description, date, backgroundImage }) => {
  // const style = {
  //   backgroundImage: `url(${backgroundImage})`,
  // };

  let releaseDate;

  if (date) {
    releaseDate = (
      <span><Calendar /> {date}</span>
    );
  } else {
    releaseDate = null;
  }

  return (
    <section className={s.second}>
      {/* <div className={s.bg} style={style} /> */}
      <img src={backgroundImage} className={s.posterImage} alt="" />
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
};

export default Second;
