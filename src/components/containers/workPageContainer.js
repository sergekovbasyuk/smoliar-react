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
        const filteredEntryIndex = response.items.indexOf(filteredEntry[0]);
        const total = response.items.length;
        const nextEntryIndex = (filteredEntryIndex + 1) >= total ? 0 : (filteredEntryIndex + 1);
        const previousEntryIndex = (filteredEntryIndex - 1) <= 0 ? (total - 1) : (filteredEntryIndex - 1);
        this.setState({
          data: filteredEntry[0].fields,
          nextItem: response.items[nextEntryIndex],
          previousItem: response.items[previousEntryIndex],
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
