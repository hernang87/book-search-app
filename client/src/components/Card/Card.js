import React, { Component } from 'react';
import './index.css';

class Card extends Component {
  render() {
    const { data } = this.props;

    const title = data.title
      ? <h3 className="card__title">{data.title}</h3>
      : null;

    const author = data.author
      ? <p className="card__author">{data.author}</p>
      : null;

    const image = data.imageURL
      ? <img src={data.imageURL} alt={data.title} aria-label={data.title} />
      : null;

    return (
      <div className="card">
        {image}
        <div className="card__data">
          {title}
          {author}
        </div>
      </div>
    );
  }
}

export default Card;
