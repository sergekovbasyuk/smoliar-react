import React from 'react';
import s from './style.css';
import Benefits from '../../icons/benefits';
import Produce from '../../icons/produce';
import Shooting from '../../icons/shooting';

const Four = () => (
  <section className={s.section}>
    <div className={s.content}>
      <div className={s.description}>
        <h1 className={s.minorTitle}>My Gear</h1>
        <p className={s.text}>If you are looking for a new way to promote
        your business that won’t cost you more money, maybe printing
        is one of the options you won’t resist. Printing is a widely
        use process in making printed materials that are used for
        advertising. Brochure, catalogs, flyers, banners, posters,
        and booklets are some of several examples of printed materials.
        Nowadays, making printed materials have become fast, easy and simple.
        If you want your promotional material to be an eye-catching object,
        you should make it colored. By way of using inkjet printer
        this is not hard to make.</p>
      </div>
    </div>
    <div className={s.content}>
      <div className={s.items}>
        <div className={s.item}>
          <Benefits />
          <div>
            <h3 className={s.benefitsTitle}>Benefits</h3>
            <p className={s.benefitsText}>As a business owner or manager,
            the decision to opt for offshore software development can be
            difficult.</p>
          </div>
        </div>
        <div className={s.item}>
          <Produce />
          <div>
            <h3 className={s.benefitsTitle}>Produce</h3>
            <p className={s.benefitsText}>As a business owner or manager,
            the decision to opt for offshore software development can be difficult.</p>
          </div>
        </div>
        <div className={s.item}>
          <Shooting />
          <div>
            <h3 className={s.benefitsTitle}>Shooting</h3>
            <p className={s.benefitsText}>As a business owner or manager,
            the decision to opt for offshore software development can be
            difficult.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Four.propTypes = {
//
// };

export default Four;
