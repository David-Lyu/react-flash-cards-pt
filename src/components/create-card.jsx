import React from 'react';

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.state = {
      questionInput: '',
      answerInput: ''
    };
  }

  handleQuestionChange(e) {
    this.setState({ questionInput: e.target.value });
  }

  handleAnswerChange(e) {
    this.setState({ answerInput: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newCard = {
      question: this.state.questionInput,
      answer: this.state.answerInput
    };
    this.props.addCard(newCard);
    this.setState({ questionInput: '', answerInput: '' });
  }

  handleCancel() {
    this.setState({ questionInput: '', answerInput: '' });
    this.props.setView('view-cards');
  }

  render() {
    return (
      <>
        <h1 className="text-center">Create New Card</h1>
        <form onSubmit={this.handleSubmit} className="container">
          <label className="form-group row">
            Question:
            <textarea type="text" onChange={this.handleQuestionChange}
              value={this.state.questionInput} required={true} placeholder="Input question"
              className="form-control">
            </textarea>
          </label>
          <label className="form-group row">
            Answer:
            <textarea type="text" onChange={this.handleAnswerChange}
              value={this.state.answerInput} required={true} placeholder="Input answer"
              className="form-control">
            </textarea>
          </label>
          <div className="submit form-group row flex-row-reverse">
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <button type="reset" onClick={this.handleCancel} className="btn btn-outline-danger">Cancel</button>
          </div>
        </form>
      </>
    );
  }
}
