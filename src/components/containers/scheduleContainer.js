import React from 'react';
import Schedule from '../views/Schedule';
import client from '../../config';

class scheduleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    client.getEntries({
      content_type: 'schedule',
    })
      .then(response => this.setState({
        data: response,
      })
    )
      .catch(error => console.log(error));
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    return (
      <Schedule data={this.state.data} />
    );
  }
}

export default scheduleContainer;
