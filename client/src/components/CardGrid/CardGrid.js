import React, { Component } from 'react';
import Card from '../Card/Card';

import './index.css';

class CardGrid extends Component {
  render() {
    const cards = this.props.cards.length > 0
      ? this.props.cards.map((e, i) => <Card key={i + e.title + this.props.cards.length} data={e} />)
      : null;

    return (
      <div className="card-grid">
        {cards}
      </div>
    );
  }
}

export default CardGrid;
