import React from 'react';
import s from './style.css';
import Calendar from '../../icons/calendar';

class Second extends React.Component {
  render() {
    const { title, description, date } = this.props;
    let releaseDate;

    if (date) {
      releaseDate = (
        <span><Calendar /> {date}</span>
      );
    } else {
      releaseDate = null;
    }

    if (!this.props) {
      return null;
    }

    return (
      <section className={s.second}>
        <div className={s.bg} />
        <div className={s.content}>
          <div className={s.description}>
            <h1 className={s.title}>{title}</h1>
            {releaseDate}
            <p>{description}</p>
          </div>
        </div>
      </section>
    );
  }
}

Second.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  date: React.PropTypes.string,
};

export default Second;