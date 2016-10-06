import React from 'react';
import s from './style.css';
import Logo from '../../icons/logo';
import Footer from '../Footer';
import WorkPageSlider from '../WorkPageSlider';

const BlogPost = () => (
  <div className="container">
    <section className={s.first}>
      <div className={s.logoContainer}><Logo /></div>
      <h1 className={s.title}>Fire Up Your Motivation</h1>
      <p className={s.topDescription}>You may be a skillful,
      effective employer but if you don’t trust
      your personnel and the opposite, then the chances of
      improving and expanding the business you deal with,
      are extremely limited.</p>
    </section>
    <section className={s.body}>
      <article className={s.post}>
        <p className={s.preface}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui!</p>
        <WorkPageSlider />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dicta laborum quaerat, illum quos, dolor vitae. Consequatur qui totam nam saepe, odit, debitis omnis necessitatibus libero, ratione eveniet nobis quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dicta laborum quaerat, illum quos, dolor vitae. Consequatur qui totam nam saepe, odit, debitis omnis necessitatibus libero, ratione eveniet nobis quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dicta laborum quaerat, illum quos, dolor vitae. Consequatur qui totam nam saepe, odit, debitis omnis necessitatibus libero, ratione eveniet nobis quisquam.</p>
      </article>
      <section className={s.related}>
        <span>See also</span>
      </section>
    </section>
    <Footer />
  </div>
);

export default BlogPost;
