import React from 'react';

export default class ViewCards extends React.Component {
  constructor(props) {
    super(props);
    this.cardsArray = this.props.cards;
    this.setState = {};
  }

  makeCards() {
    const flashCards = this.cardsArray.map((card, index) => {
      return (
        <div key={index}>
          <div>
            <h6>Question:</h6>
            <div>{card.question}</div>
          </div>
          <div>
            <h6>Answers:</h6>
            {card.answer}
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
        {this.makeCards()}
      </>
    );
  }
}
