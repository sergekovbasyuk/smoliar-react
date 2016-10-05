import React from 'react';
// import ReactPaginate from 'react-paginate';
import s from './style.css';
import Footer from '../Footer';
import TopSlider from '../TopSlider';
import Logo from '../../icons/logo';

const BlogPosts = () => (
  <div className="container">
    <section className={s.first}>
      <div className={s.logoContainer}><Logo /></div>
      <TopSlider />
    </section>
    <ul className={s.categories}>
      <li className={`is-active ${s.catItem}`}><a href="">All</a></li>
      <li className={s.catItem}><a href="">Work</a></li>
      <li className={s.catItem}><a href="">Life</a></li>
      <li className={s.catItem}><a href="">experience</a></li>
    </ul>
    <section>
      <div className={s.item}>
        <span className={s.category}>Work</span>
        <div>
          <h1 className={s.title}>Change Your Mind Change Your Luck</h1>
          <span to="/about" className={s.link}>read more</span>
        </div>
      </div>
      <div className={s.item}>
        <span className={s.category}>Work</span>
        <div>
          <h1 className={s.title}>Change Your Mind Change Your Luck</h1>
          <span to="/about" className={s.link}>read more</span>
        </div>
      </div>
      <div className={s.item}>
        <span className={s.category}>Work</span>
        <div>
          <h1 className={s.title}>Change Your Mind Change Your Luck</h1>
          <span to="/about" className={s.link}>read more</span>
        </div>
      </div>
      <div className={s.item}>
        <span className={s.category}>Work</span>
        <div>
          <h1 className={s.title}>Change Your Mind Change Your Luck</h1>
          <span to="/about" className={s.link}>read more</span>
        </div>
      </div>
      <div className={s.item}>
        <span className={s.category}>Work</span>
        <div>
          <h1 className={s.title}>Change Your Mind Change Your Luck</h1>
          <span to="/about" className={s.link}>read more</span>
        </div>
      </div>
      <div className={s.item}>
        <span className={s.category}>Work</span>
        <div>
          <h1 className={s.title}>Change Your Mind Change Your Luck</h1>
          <span to="/about" className={s.link}>read more</span>
        </div>
      </div>
      <div className={s.item}>
        <span className={s.category}>Work</span>
        <div>
          <h1 className={s.title}>Change Your Mind Change Your Luck</h1>
          <span to="/about" className={s.link}>read more</span>
        </div>
      </div>
    </section>
    <section>
      <p className={s.pagination}>
        <a>next</a>
        <a>1</a>
        <a>2</a>
        <a>3</a>
        <a>4</a>
        <a>5</a>
        <a>6</a>
        <a>7</a>
        <a>previous</a>
      </p>
    </section>
    <Footer />
  </div>
);


export default BlogPosts;
