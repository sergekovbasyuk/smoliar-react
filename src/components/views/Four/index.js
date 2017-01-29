import React from 'react';
import s from './style.css';
import Benefits from '../../icons/benefits';
import Produce from '../../icons/produce';
import Shooting from '../../icons/shooting';

const Four = ({
  benefitsTitle,
  benefitsText,
  benefit1Title,
  benefit1Text,
  benefit2Title,
  benefit2Text,
  benefit3Title,
  benefit3Text,
}) => (
  <section className={s.section}>
    <div className={s.content}>
      <div className={s.description}>
        <h1 className={s.minorTitle}>{benefitsTitle}</h1>
        <p className={s.text}>{benefitsText}</p>
      </div>
    </div>
    <div className={s.content}>
      <div className={s.items}>
        <div className={s.item}>
          <Benefits />
          <div className={s.benefits}>
            <h3 className={s.benefitsTitle}>{benefit1Title}</h3>
            <p className={s.benefitsText}>{benefit1Text}</p>
          </div>
        </div>
        <div className={s.item}>
          <Produce />
          <div className={s.benefits}>
            <h3 className={s.benefitsTitle}>{benefit2Title}</h3>
            <p className={s.benefitsText}>{benefit2Text}</p>
          </div>
        </div>
        <div className={s.item}>
          <Shooting />
          <div className={s.benefits}>
            <h3 className={s.benefitsTitle}>{benefit3Title}</h3>
            <p className={s.benefitsText}>{benefit3Text}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Four.propTypes = {
  benefitsTitle: React.PropTypes.string,
  benefitsText: React.PropTypes.string,
  benefit1Title: React.PropTypes.string,
  benefit1Text: React.PropTypes.string,
  benefit2Title: React.PropTypes.string,
  benefit2Text: React.PropTypes.string,
  benefit3Title: React.PropTypes.string,
  benefit3Text: React.PropTypes.string,
};

export default Four;
