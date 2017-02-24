import React from 'react';
import { Link } from 'react-router';
import ReactPaginate from 'react-paginate';
import s from './style.css';
import TopSlider from '../TopSlider';
import Logo from '../../icons/logo';

const Blog = ({ data, handlePageClick, handleFilterChange, pageCount, carouselItems, pathname }) => {
  const filterClickHandler = (e) => {
    const activeFilter = document.querySelector('.is-active');
    e.preventDefault();
    handleFilterChange(e.target.text === 'All' ? '' : e.target.text);
    activeFilter.classList.remove('is-active');
    e.target.parentNode.classList.add('is-active');
  };
  return (
    <div className="container">
      <section className={s.first}>
        <div className={s.logoContainer}><Logo /></div>
        <TopSlider carouselItems={carouselItems} pathname={pathname} />
      </section>
      <ul className={s.categories} >
        <li className={`is-active ${s.catItem}`} ><a onClick={filterClickHandler} href="">All</a></li>
        <li className={s.catItem} ><a onClick={filterClickHandler} href="">Work</a></li>
        <li className={s.catItem} ><a onClick={filterClickHandler} href="">Life</a></li>
        <li className={s.catItem} ><a onClick={filterClickHandler} href="">Experience</a></li>
      </ul>
      <section>
        {data.map((item, index) => {
          const style = {
            backgroundImage: `url(${item.fields.backgroundImage === undefined ? null : item.fields.backgroundImage.fields.file.url})`,
          };

          return (
            <div className={s.item} key={index} style={style}>
              <span className={s.category}>{item.fields.category}</span>
              <div className={s.itemName}>
                <h1 className={s.title}>{item.fields.title}</h1>
                <Link to={`/blog/${item.sys.id}`} className={s.link}>read more</Link>
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
};

Blog.propTypes = {
  data: React.PropTypes.array,
  handlePageClick: React.PropTypes.func,
  handleFilterChange: React.PropTypes.func,
  pageCount: React.PropTypes.number,
  carouselItems: React.PropTypes.array,
  pathname: React.PropTypes.string,
};

export default Blog;
