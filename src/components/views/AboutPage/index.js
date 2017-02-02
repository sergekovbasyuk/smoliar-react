import React from 'react';
import YouTube from 'react-youtube';
import s from './style.css';
import First from '../First';
import Second from '../Second';
import Third from '../Third';
import Four from '../Four';
import Five from '../Five';

const AboutPage = ({ data, videoId }) => {
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
        backgroundImage="https://res.cloudinary.com/dsie3eeqb/image/upload/v1486033603/about-second-image_yfgs8u.jpg"
      />
      <Third
        text={quote}
        image="https://res.cloudinary.com/dsie3eeqb/image/upload/v1475003357/smoliar/slide-about_buecme.jpg"
      />
      <section className={s.videoWrapper}>
        <YouTube videoId={videoId} />
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
  videoId: React.PropTypes.string,
};

export default AboutPage;
