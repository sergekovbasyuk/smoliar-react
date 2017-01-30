import React from 'react';
import s from './style.css';
import Logo from '../../icons/logo';

const First = ({ title, description, backgroundImage }) => {
  const style = {
    backgroundImage: `url(${backgroundImage === undefined ? '' : backgroundImage.fields.file.url})`,
  };

  return (
    <section className={s.first} style={style}>
      <div className={s.logoContainer}>
        <Logo />
      </div>
      <h1 className={s.title}>{title}</h1>
      <p className={s.description}>{description}</p>
    </section>
  );
};

First.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  backgroundImage: React.PropTypes.object,
};

export default First;
