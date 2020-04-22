import React, { useContext } from 'react';
import { CardsContext } from './app';

export default class ViewCards extends React.Component {
  constructor(props) {
    super(props);
    this.cards = this.props.cards;
  }

  makeCards() {
    const flashCards = this.cards.map(card => {
      console.log(card);
      return (
        <div key={card.id} className="col-4">
          <div className="card mb-3">
            <div className="bg-dark card-body">
              <h5 className="card-title text-muted">Question:</h5>
              <p className="card-text text-white">A: {card.question}</p>
            </div>
            <div className=" bg-secondary card-body">
              <h5 className="card-title text-mute">Answers:</h5>
              <p className="card-text text-white">A: {card.answer}</p>
            </div>
          </div>
        </div>
      );
    });
    return flashCards;
  }

  render() {
    return (
      <>
        <h1 className="text-center">My Cards</h1>
        <div className="container">
          <div className="row">
            {this.makeCards()}
          </div>
        </div>
      </>
    );
  }
}
