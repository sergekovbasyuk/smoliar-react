import React from 'react';
import s from './style.css';
import First from '../First';
import Second from '../Second';
import Third from '../Third';
import Four from '../Four';
import Five from '../Five';

const AboutPage = ({ data }) => {
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
    carouselImages,
  } = data;

  const carouselImagesUrls = carouselImages === undefined ? null : carouselImages.map(x => x.fields.file.url);

  return (
    <div className="container">
      <First
        title="About Me"
        backgroundImage="https://res.cloudinary.com/dsie3eeqb/image/upload/v1474998995/smoliar/bg-about_y7fmtx.jpg"
      />
      <Second
        title={introTitle}
        description={introText}
        backgroundImage="https://res.cloudinary.com/dsie3eeqb/image/upload/v1475051438/smoliar/bg-about2_wsso4o.jpg"
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
        images={carouselImagesUrls}
        title={conclusionTitle}
        text={conclusionText}
      />
    </div>
  );
};

AboutPage.propTypes = {
  data: React.PropTypes.object.isRequired,
};

export default AboutPage;
