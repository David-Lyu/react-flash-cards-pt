import React from 'react';
import ViewCards from './view-cards';
import CreateCard from './create-card';
import ReviewCards from './review-cards';
import Nav from './nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards'
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
  }

  setView(view) {
    this.setState({ view });
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return <CreateCard />;
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
