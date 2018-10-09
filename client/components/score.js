import React from 'react';

class Score extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      correctAnswers: props.props,
      wrongAnswers: 0,
    };
  }

  render() {
    return (
      <div>
        <h4>Correct Answers: {this.state.correctAnswers}</h4>
        <h4>Wrong Answers: {this.state.wrongAnswers}</h4>
      </div>
    );
  }
}

export default Score;
