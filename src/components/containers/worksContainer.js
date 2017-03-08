import React from 'react';
import Works from '../views/Works';
import client from '../../config';

class worksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      skip: 0,
      limit: 7,
    };

    this.loadData = this.loadData.bind(this);
    this.loadCarouselItems = this.loadCarouselItems.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    this.loadCarouselItems();
    this.loadData();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  loadData() {
    client.getEntries({
      content_type: 'work',
      order: '-sys.createdAt',
      limit: this.state.limit,
      skip: this.state.skip,
    })
      .then((response) => {
        this.setState({
          data: response.items,
          pageCount: Math.ceil(response.total / response.limit),
        });
      })
      .catch(error => console.log(error));
  }

  loadCarouselItems() {
    client.getEntries({
      content_type: 'work',
      'fields.addToCarousel': true,
      order: '-sys.createdAt',
    })
      .then((response) => {
        this.setState({ carouselItems: response.items });
      });
  }

  handlePageClick(data) {
    const perPage = 7;
    const selected = data.selected;
    const skip = Math.ceil(selected * perPage);

    this.setState({ skip }, () => {
      this.loadData();
    });

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Works
        data={this.state.data}
        handlePageClick={this.handlePageClick}
        pageCount={this.state.pageCount}
        carouselItems={this.state.carouselItems}
        pathname={this.props.location.pathname}
      />
    );
  }
}

worksContainer.propTypes = {
  location: React.PropTypes.object,
};

export default worksContainer;
