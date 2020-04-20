import React from 'react';
import ViewCards from './view-cards';
import CreateCard from './create-card';
import ReviewCards from './review-cards';
import Nav from './nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.state = {
      view: 'create-card',
      cards: []
    };
  }

  addCard(card) {
    const cards = this.state.cards.concat(card);
    this.setState({ cards }, this.saveCards);
  }

  saveCards() {
    const localStorage = window.localStorage;
    localStorage.setItem('flash-cards', JSON.stringify(this.state.cards));
  }

  setView(view) {
    this.setState({ view });
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard setView={this.setView} addCard={this.addCard}/>;
      case 'review-cards':
        return <ReviewCards />;
      case 'view-cards':
        return <ViewCards />;
      default:
        return null;
    }
  }

  render() {
    return (
      <>
        <h1 className="text-center">Flash Card App</h1>
        <div className="nav-headers">
          <Nav setView={this.setView} />
          {this.getView()}
        </div>
      </>
    );
  }
}
