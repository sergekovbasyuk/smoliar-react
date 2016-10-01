import React from 'react';

class News extends React.Component {
  render() {
    return (
      <main>
        <h2>News</h2>
        {this.props.data.map(function (item) {
          const date = new Date(item.sys.createdAt).toLocaleString('en', ({
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }));

          return (
            <div key={item.sys.id} className="news__item">
              <strong>{item.fields.title}</strong>
              <p>{item.fields.body}</p>
              <p>{date}</p>
            </div>
          );
        })}
      </main>
    );
  }
}

export default News;
