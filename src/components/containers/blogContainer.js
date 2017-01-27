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
  }

  componentDidMount() {
    this.loadData();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  loadData() {
    client.getEntries({ content_type: 'blogPost', limit: this.state.limit, skip: this.state.skip })
      .then(response => this.setState({
        data: response.items,
        pageCount: Math.ceil(response.total / response.limit),
      }))
      .catch(error => console.log(error));
  }

  handlePageClick(data) {
    const perPage = 7;
    const selected = data.selected;
    const skip = Math.ceil(selected * perPage);

    this.setState({ skip }, () => {
      this.loadData();
    });
  }

  render() {
    return (
      <Blog
        data={this.state.data}
        handlePageClick={this.handlePageClick.bind(this)}
        pageCount={this.state.pageCount}
      />
    );
  }
}

export default blogContainer;
