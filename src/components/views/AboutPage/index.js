import React from 'react';
import s from './style.css';
import First from '../First';
import Second from '../Second';
import Third from '../Third';
import Four from '../Four';
import Five from '../Five';

const AboutPage = ({ data, url }) => {
  const {
    introTitle,
    introText,
    quote,
    benefitsTitle,
    benefitsText,
    benefit1Title,
    benefit1Text,
    benefit2Title,
    benefit2Text,
    benefit3Title,
    benefit3Text,
    conclusionTitle,
    conclusionText,
  } = data;

  return (
    <div className="container">
      <First title="About Me" />
      <Second
        title={introTitle}
        description={introText}
      />
      {/* <Third
        text={quote}
        image={thirdImage}
      /> */}
      {/* <section className={s.videoWrapper}>
        <iframe width="560" height="349" src="https://www.youtube.com/embed/vFwYJYl5GUQ?controls=0&modestbranding=1&rel=0&showinfo=0" frameBorder="0" allowFullScreen />
      </section>
      <Four />
      <Five
        images={fifthImages}
        title={conclusionTitle}
        text={conclusionText}
      /> */}
    </div>
  );
}

AboutPage.propTypes = {
  data: React.PropTypes.object.isRequired,
};

export default AboutPage;
