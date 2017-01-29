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
      <Third
        text={quote}
        image="https://res.cloudinary.com/dsie3eeqb/image/upload/v1475003357/smoliar/slide-about_buecme.jpg"
      />
      <section className={s.videoWrapper}>
        <iframe width="560" height="349" src="https://www.youtube.com/embed/vFwYJYl5GUQ?controls=0&modestbranding=1&rel=0&showinfo=0" frameBorder="0" allowFullScreen />
      </section>
      <Four
        benefitsTitle={benefitsTitle}
        benefitsText={benefitsText}
        benefit1Title={benefit1Title}
        benefit1Text={benefit1Text}
        benefit2Title={benefit2Title}
        benefit2Text={benefit2Text}
        benefit3Title={benefit3Title}
        benefit3Text={benefit3Text}
      />
      <Five
        images={[
          'https://res.cloudinary.com/dsie3eeqb/image/upload/v1475003357/smoliar/slide-about_buecme.jpg',
          'https://res.cloudinary.com/dsie3eeqb/image/upload/v1475003357/smoliar/slide-about_buecme.jpg',
          'https://res.cloudinary.com/dsie3eeqb/image/upload/v1475003357/smoliar/slide-about_buecme.jpg',
        ]}
        title={conclusionTitle}
        text={conclusionText}
      />
    </div>
  );
}

AboutPage.propTypes = {
  data: React.PropTypes.object.isRequired,
};

export default AboutPage;
