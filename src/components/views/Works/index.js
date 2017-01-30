import React from 'react';
import { Link } from 'react-router';
import ReactPaginate from 'react-paginate';
import s from './style.css';
import TopSlider from '../TopSlider';
import Logo from '../../icons/logo';

const Works = ({ data, handlePageClick, pageCount, carouselItems, pathname }) => (
  <div className="container">
    <section className={s.first}>
      <div className={s.logoContainer}><Logo /></div>
      <TopSlider carouselItems={carouselItems} pathname={pathname} />
    </section>
    <div className={s.categories}>
      <span>check out my works</span>
    </div>
    <section>
      {data.map((item, index) => {
        const style = {
          backgroundImage: `url(${item.fields.backgroundImage.fields.file.url})`,
        };

        return (
          <div className={s.item} key={index} style={style}>
            <span className={s.category}>Work</span>
            <div>
              <h1 className={s.title}>{item.fields.title}</h1>
              <Link to={`/works/${item.sys.id}`} className={s.link}>read more</Link>
            </div>
          </div>
        );
      })}
    </section>
    <section>
      { pageCount > 1 ? <ReactPaginate
        pageCount={pageCount}
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={<a href="">...</a>}
        breakClassName={'break-me'}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={s.pagination}
      /> : null }
    </section>
  </div>
);

Works.propTypes = {
  data: React.PropTypes.array,
  handlePageClick: React.PropTypes.func,
  pageCount: React.PropTypes.number,
  carouselItems: React.PropTypes.array,
  pathname: React.PropTypes.string,
};

export default Works;
