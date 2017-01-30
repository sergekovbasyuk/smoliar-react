import React from 'react';
import s from './style.css';

const Third = ({ text, image }) => {
  if (image === undefined) {
    return null;
  }

  return (
    <section className={s.section}>
      <img src={image.fields.file.url} alt="" className={s.image} />
      <div className={s.content}>
        <h1 className={s.text}>{text}</h1>
      </div>
    </section>
  );
};

Third.propTypes = {
  text: React.PropTypes.string,
  image: React.PropTypes.object,
};

export default Third;
