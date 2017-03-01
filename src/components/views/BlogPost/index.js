import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import marked from 'marked';
import s from './style.css';
import First from '../First';
import ArrowPrev from '../../icons/arrow-prev';
import ArrowNext from '../../icons/arrow-next';
import Facebook from '../../icons/facebook';
import Twitter from '../../icons/twitter';
import LinkedIn from '../../icons/linkedin';

marked.setOptions({
  "gfm": true,
  "tables": true,
  "breaks": true,
  "smartypants": true,
  "sanitize": false
});

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next(e) {
    e.preventDefault();
    this.slider.slickNext();
  }
  previous(e) {
    e.preventDefault();
    this.slider.slickPrev();
  }

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
        <p className={s.relatedTitle}>See also</p>
        <div className={s.items}>
          <div className={s.item} style={styleNext} >
            <span className={s.category}>{nextItem.fields.category}</span>
            <div>
              <h1 className={s.itemTitle}>{nextItem.fields.title}</h1>
              <Link to={`/blog/${nextItem.sys.id}`} className={s.link}>read more</Link>
            </div>
          </div>
          <div className={s.item} style={stylePrev} >
            <span className={s.category}>{previousItem.fields.category}</span>
            <div>
              <h1 className={s.itemTitle}>{previousItem.fields.title}</h1>
              <Link to={`/blog/${previousItem.sys.id}`} className={s.link}>read more</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  carousel() {
    const { carouselImages } = this.props.data;

    if (!carouselImages) {
      return null;
    }

    const carouselImagesUrls = carouselImages.map(x => x.fields.file.url);
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={s.sliderWrapper}>
        <a className={s.arrowPrev} onClick={this.previous} href=""><ArrowPrev /></a>
        <a className={s.arrowNext} onClick={this.next} href=""><ArrowNext /></a>
        <Slider {...settings} ref={ref => (this.slider = ref)}>
          {carouselImagesUrls.map((item, index) => (
            <div key={index}>
              <img src={item} alt="" className={s.slider} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  render() {
    const {
      title,
      description,
      backgroundImage,
    } = this.props.data;

    const intro = this.props.data.intro === undefined ? '' : marked(this.props.data.intro);
    const firstHalf = this.props.data.firstHalf === undefined ? '' : marked(this.props.data.firstHalf);
    const secondHalf = this.props.data.secondHalf === undefined ? '' : marked(this.props.data.secondHalf);

    const backgroundImageUrl = backgroundImage === undefined ? null : backgroundImage.fields.file.url;
    const url = document.URL;

    return (
      <div className="container">
        <First
          title={title}
          description={description}
          backgroundImage={backgroundImageUrl}
        />
        <section className={s.body}>
          <article className={s.post}>
            <div className={s.share}>
              <a href={`http://www.facebook.com/sharer.php?u=${url}`}><Facebook /></a>
              <a href={`http://twitter.com/share?url=${url}`}><Twitter /></a>
              <a href={`http://www.linkedin.com/shareArticle?mini=true&url=${url}`}><LinkedIn /></a>
            </div>
            <div className={s.preface} dangerouslySetInnerHTML={{ __html: intro }} />
            <div className={s.blogText} dangerouslySetInnerHTML={{ __html: firstHalf }} />
            {this.carousel()}
            <div className={s.blogText} dangerouslySetInnerHTML={{ __html: secondHalf }} />
          </article>
          {this.related()}
        </section>
      </div>
    );
  }
}

BlogPost.propTypes = {
  data: React.PropTypes.object,
  nextItem: React.PropTypes.object,
  previousItem: React.PropTypes.object,
};

export default BlogPost;
