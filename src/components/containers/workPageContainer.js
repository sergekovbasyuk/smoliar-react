import React from 'react';
import WorkPage from '../views/workPage';
import client from '../../config';

class workPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      nextItem: null,
      previousItem: null,
    };

    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentWillReceiveProps() {
    this.loadData();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  loadData() {
    client.getEntries({
      content_type: 'work',
    })
      .then((response) => {
        const filteredEntry = response.items.filter(item => item.sys.id === this.props.params.name);
        const dataLength = response.items.length;
        const randomNext = (Math.random() * dataLength).toFixed(0);
        const prevNext = (Math.random() * dataLength).toFixed(0);
        const nextEntry = response.items[randomNext];
        const previousEntry = response.items[prevNext];
        this.setState({
          data: filteredEntry[0].fields,
          nextItem: nextEntry,
          previousItem: previousEntry,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <WorkPage
        data={this.state.data}
        nextItem={this.state.nextItem}
        previousItem={this.state.previousItem}
      />
    );
  }
}

workPageContainer.propTypes = {
  params: React.PropTypes.object,
};

export default workPageContainer;
