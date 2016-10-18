import React from 'react';
import EventCalendar from 'react-event-calendar';
import moment from 'moment';
import s from './style.css';
import Logo from '../../icons/logo';
import ArrowLeft from '../../icons/arrowLeft';
import ArrowRight from '../../icons/arrowRight';
import Footer from '../Footer';
import Modal from '../Modal';

const events = [
  {
    start: '2016-10-10',
    end: '2016-10-12',
    eventClasses: 'event-busy',
  },
  {
    start: '2016-10-12',
    end: '2016-10-14',
    eventClasses: 'event-unconfirmed',
  },
];

class ContactPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moment: moment(),
      showModal: false,
    };

    this.handleNextMonth = this.handleNextMonth.bind(this);
    this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
    this.handleToday = this.handleToday.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  getHumanDate() {
    return [moment.months('MM', this.state.moment.month()), this.state.moment.year()].join(' ');
  }

  handleDayClick() {
    this.setState({
      showModal: true,
    });
  }

  handleModalClose(e) {
    e.preventDefault();
    this.setState({
      showModal: false,
    });
  }

  handleNextMonth(e) {
    e.preventDefault();
    this.setState({
      moment: this.state.moment.add(1, 'M'),
    });
  }

  handlePreviousMonth(e) {
    e.preventDefault();
    this.setState({
      moment: this.state.moment.subtract(1, 'M'),
    });
  }

  handleToday(e) {
    e.preventDefault();
    this.setState({
      moment: moment(),
    });
  }

  render() {
    return (
      <div className="container">
        <Modal show={this.state.showModal} onClick={this.handleModalClose} />
        <section className={s.first}>
          <div className={s.logoContainer}><Logo /></div>
          <h1 className={s.title}>Schedule</h1>
          <p className={s.topDescription}>check my spare time to be on point</p>
        </section>
        <section className={s.calendar}>
          <div className={s.calendarTop}>
            <div className={s.controls}>
              <a onClick={this.handlePreviousMonth} className={s.arrow} href=""><ArrowLeft /></a>
              <a onClick={this.handleNextMonth} className={s.arrow} href=""><ArrowRight /></a>
              <a onClick={this.handleToday} href="">Today</a>
            </div>
            <p className={s.today}>{this.getHumanDate()}</p>
            <div className={s.legend}>
              <div>
                <span className={s.busy} />
                <span>Busy</span>
              </div>
              <div>
                <span className={s.unconfirmed} />
                <span>Unconfirmed</span>
              </div>
            </div>
          </div>
          <EventCalendar
            month={this.state.moment.month()}
            year={this.state.moment.year()}
            events={events}
            onDayClick={this.handleDayClick}
          />
        </section>
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
