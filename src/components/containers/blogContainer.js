import React from 'react';
import Blog from '../views/Blog';
import client from '../../config';

class blogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      skip: 0,
      limit: 7,
    };

    this.loadData = this.loadData.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  loadData(filterValue) {
    client.getEntries({
      content_type: 'blogPost',
      'fields.category': filterValue,
      limit: this.state.limit,
      skip: this.state.skip,
    })
      .then((response) => {
        const carouselItems = response.items.filter(item => item.fields.addToCarousel === true);

        this.setState({
          data: response.items,
          pageCount: Math.ceil(response.total / response.limit),
          carouselItems,
        });
      })
      .catch(error => console.log(error));
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

  handleFilterChange(filterValue) {
    this.setState({ skip: 0 }, () => {
      this.loadData(filterValue);
    });
  }

  render() {
    return (
      <Blog
        data={this.state.data}
        handlePageClick={this.handlePageClick}
        handleFilterChange={this.handleFilterChange}
        pageCount={this.state.pageCount}
        carouselItems={this.state.carouselItems}
        pathname={this.props.location.pathname}
      />
    );
  }
}

blogContainer.propTypes = {
  location: React.PropTypes.object,
};

export default blogContainer;
