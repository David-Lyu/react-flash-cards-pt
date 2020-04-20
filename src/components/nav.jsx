import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      classes: 'nav-link',
      active: ['active', '', '']
    };
  }

  handleClick(e) {
    const setView = this.props.setView;
    setView(e.target.getAttribute('view'));
    const newActive = this.state.active.map((isActive, index) => {
      if (e.currentTarget.children[index].getAttribute('view') === e.target.getAttribute('view')) {
        return 'active';
      } else {
        return '';
      }
    });

    this.setState({ active: newActive });
  }

  render() {
    return (
      <nav onClick={this.handleClick} className="nav nav-pills justify-content-end">
        <a view="view-cards" className={'nav-link ' + this.state.active[0]}>View Cards</a>
        <a view="review-cards" className={'nav-link ' + this.state.active[1]}>Review Cards</a>
        <a view="create-card" className={'nav-link ' + this.state.active[2]}>Create Card</a>
      </nav>
    );
  }
}
