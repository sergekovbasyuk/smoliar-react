import React from 'react';
import s from './style.css';
import First from '../First';
import Second from '../Second';
import Third from '../Third';
import Four from '../Four';
import Five from '../Five';

const AboutPage = ({
  title,
  secondTitle,
  secondDescription,
  thirdText,
  thirdImage,
  fifthImages,
  fifthTitle,
  fifthText,
}) => (
  <div className="container">
    <First title={title} />
    <Second
      title={secondTitle}
      description={secondDescription}
    />
    <Third
      text={thirdText}
      image={thirdImage}
    />
    <section className={s.videoWrapper}>
      <iframe width="560" height="349" src="https://www.youtube.com/embed/vFwYJYl5GUQ?controls=0&modestbranding=1&rel=0&showinfo=0" frameBorder="0" allowFullScreen />
    </section>
    <Four />
    <Five
      images={fifthImages}
      title={fifthTitle}
      text={fifthText}
    />
  </div>
);

First.propTypes = {
  title: React.PropTypes.string,
  secondTitle: React.PropTypes.string,
  secondDescription: React.PropTypes.string,
  thirdText: React.PropTypes.string,
  thirdImage: React.PropTypes.string,
  fifthImages: React.PropTypes.string,
  fifthTitle: React.PropTypes.string,
  fifthText: React.PropTypes.string,
};

export default AboutPage;
