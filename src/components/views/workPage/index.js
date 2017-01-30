import React from 'react';
import { Link } from 'react-router';
import s from './style.css';
import First from '../First';
import Second from '../Second';
import Third from '../Third';
import Four from '../Four';
import Five from '../Five';
import Q from '../../icons/q';

class WorkPage extends React.Component {
  related() {
    const { nextItem, previousItem } = this.props;

    if (!nextItem || !previousItem) {
      return null;
    }

    const styleNext = {
      backgroundImage: `url(${nextItem.fields.backgroundImage.fields.file.url})`,
    };

    const stylePrev = {
      backgroundImage: `url(${previousItem.fields.backgroundImage.fields.file.url})`,
    };

    return (
      <section className={s.related}>
        <div className={s.previous} style={styleNext} >
          <Link to={`/works/${nextItem.sys.id}`} className={s.link}>previous project</Link>
        </div>
        <div className={s.next} style={stylePrev} >
          <Link to={`/works/${previousItem.sys.id}`} className={s.link}>next project</Link>
        </div>
      </section>
    );
  }

  render() {
    const { data } = this.props;
    const backgroundImageUrl = data.backgroundImage === undefined ? null : data.backgroundImage.fields.file.url;
    const secondImageUrl = data.secondImage === undefined ? null : data.secondImage.fields.file.url;
    const thirdImageUrl = data.thirdImage === undefined ? null : data.thirdImage.fields.file.url;
    const carouselImagesUrls = data.carouselImages === undefined ? null : data.carouselImages.map(x => x.fields.file.url);

    return (
      <div className="container">
        <First
          title={data.title}
          description={data.description}
          backgroundImage={backgroundImageUrl}
        />
        <Second
          title={data.secondTitle}
          description={data.secondDescription}
          date={data.workDate}
          backgroundImage={secondImageUrl}
        />
        <Third
          text={data.thirdTitle}
          image={thirdImageUrl}
        />
        <section className={s.videoWrapper}>
          <iframe width="560" height="349" src="https://www.youtube.com/embed/vFwYJYl5GUQ?controls=0&modestbranding=1&rel=0&showinfo=0" frameBorder="0" allowFullScreen />
        </section>
        <Four
          benefitsTitle={data.textSectionTitle}
          benefitsText={data.textSectionContent}
          benefit1Title="Budget"
          benefit1Text={data.budget}
          benefit2Title="Director"
          benefit2Text={data.director}
          benefit3Title="Stars"
          benefit3Text={data.stars}
        />
        <Five
          images={carouselImagesUrls}
          title="Storyline"
          text={data.storyline}
        />
        <section className={s.quote}>
          <Q />
          <p>{data.quote}</p>
          <p className={s.author}>{data.quoteAuthor}</p>
        </section>
        {this.related()}
      </div>
    );
  }
}

WorkPage.propTypes = {
  data: React.PropTypes.object,
  nextItem: React.PropTypes.object,
  previousItem: React.PropTypes.object,
};

export default WorkPage;
