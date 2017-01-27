import React from 'react';
import { Link } from 'react-router';
import ReactPaginate from 'react-paginate';
import s from './style.css';
import TopSlider from '../TopSlider';
import Logo from '../../icons/logo';

const Blog = ({ data, handlePageClick, pageCount }) => (
  <div className="container">
    <section className={s.first}>
      <div className={s.logoContainer}><Logo /></div>
      <TopSlider />
    </section>
    <ul className={s.categories}>
      <li className={`is-active ${s.catItem}`}><a href="">All</a></li>
      <li className={s.catItem}><a href="">Work</a></li>
      <li className={s.catItem}><a href="">Life</a></li>
      <li className={s.catItem}><a href="">Experience</a></li>
    </ul>
    <section>
      {data.map((item, index) => (
        <div className={s.item} key={index}>
          <span className={s.category}>Work</span>
          <div>
            <h1 className={s.title}>{data[index].fields.blogPostTitle}</h1>
            <Link to={`/blog/${data[index].sys.id}`} className={s.link}>read more</Link>
          </div>
        </div>
      ))}
    </section>
    <section>
      <ReactPaginate
        pageCount={pageCount}
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={<a href="">...</a>}
        breakClassName={'break-me'}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={s.pagination}
      />
    </section>
  </div>
);


export default Blog;
