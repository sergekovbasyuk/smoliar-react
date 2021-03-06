import React from 'react';
import YouTube from 'react-youtube';
import s from './style.css';
import First from '../First';
import Second from '../Second';
import Third from '../Third';
import Four from '../Four';
import Five from '../Five';

const AboutPage = ({ data, videoId, location }) => {
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
    backgroundImage,
    secondImage,
    thirdImage,
  } = data;

  const carouselImagesUrls = carouselImages === undefined ? null : carouselImages.map(x => x.fields.file.url);
  const backgroundImageUrl = backgroundImage === undefined ? null : backgroundImage.fields.file.url;
  const secondImageUrl = secondImage === undefined ? null : secondImage.fields.file.url;
  const thirdImageUrl = thirdImage === undefined ? null : thirdImage.fields.file.url;

  return (
    <div className="container">
      <First
        title="About Me"
        backgroundImage={backgroundImageUrl}
      />
      
      {/*TODO: Uncomment it when we will need block with business carts*/}
      {/*
      <Second
        title={introTitle}
        description={introText}
        location={location}
        backgroundImage={secondImageUrl}
      /> */}
      
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

      <section className={s.videoWrapper}>
        <YouTube videoId={videoId} />
      </section>

      <Five
        images={carouselImagesUrls}
        title={conclusionTitle}
        text={conclusionText}
      />

    <Third
        text={quote}
        image={thirdImageUrl}
      />
    </div>
  );
};

AboutPage.propTypes = {
  data: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired,
  videoId: React.PropTypes.string,
};

export default AboutPage;
