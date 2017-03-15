import React from 'react';
import EventCalendar from 'react-event-calendar';
import moment from 'moment';
import s from './style.css';
import Logo from '../../icons/logo';
import ArrowLeft from '../../icons/arrowLeft';
import ArrowRight from '../../icons/arrowRight';

class Schedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moment: moment(),
    };

    this.handleNextMonth = this.handleNextMonth.bind(this);
    this.handlePreviousMonth = this.handlePreviousMonth.bind(this);
    this.handleToday = this.handleToday.bind(this);
  }

  getHumanDate() {
    return [moment.months('MM', this.state.moment.month()), this.state.moment.year()].join(' ');
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
    let events;

    if (this.props.data.items !== undefined) {
      events = this.props.data.items.map(item => item.fields);
    }

    return (
      <div className="container">
        <section className={s.first}>
          <div className={s.logoContainer}><Logo /></div>
          <h1 className={s.title}>My Schedule</h1>
          <p className={s.topDescription}>Check my timetable for availability</p>
          <a href="mailto:film@smoliar.works" className={s.link}>leave me a message</a>
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
      </div>
    );
  }
}

Schedule.propTypes = {
  data: React.PropTypes.object,
};

export default Schedule;
