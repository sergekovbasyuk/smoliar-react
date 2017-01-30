import React from 'react';
import s from './style.css';
import Calendar from '../../icons/calendar';

class Second extends React.Component {
  render() {
    const { title, description, date, backgroundImage } = this.props;
    const style = {
      backgroundImage: `url(${backgroundImage === undefined ? '' : backgroundImage.fields.file.url})`,
      backgroundSize: 'contain',
      width: '50%',
    };
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
        <div className={s.bg} style={style} />
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
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  date: React.PropTypes.string,
  backgroundImage: React.PropTypes.object,
};

export default Second;
