import React from 'react';
import { connect } from 'react-redux';
import './test-questions.css';
import { getQuestionThunk } from '../store/question';
import SuccessAlert from './success-alert';
import ErrorAlert from './error-alert';
import Score from './score';

import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      IdCounter: 1,
      checked: [],
      correct: false,
      failed: false,
      correctAnswer: '',
      positive: 0,
      negative: 0,
    };
  }

  handleNext = async () => {
    this.setState({ correct: false, failed: false });
    await this.props.getQuestionThunk(this.state.IdCounter);
    this.setState(prevState => {
      return { IdCounter: prevState.IdCounter + 1 };
    });
  };

  handleSubmitAnswer = () => {
    let answers = this.props.question.question.answers;
    answers.forEach(answer => {
      if (answer.correct) {
        this.setState({ correctAnswer: answer.answer });
      }
    });
    answers.forEach(answer => {
      if (this.state.checked.indexOf(answer.id) !== -1) {
        if (answer.correct) {
          this.setState(prevState => {
            return { correct: true, positive: prevState.positive + 1 };
          });
        } else {
          this.setState(prevState => {
            return {
              failed: true,
              checked: [],
              negative: prevState.negative + 1,
            };
          });
        }
      }
    });
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  async componentDidMount() {
    await this.props.getQuestionThunk(this.state.IdCounter);
    this.setState(prevState => {
      return { IdCounter: prevState.IdCounter + 1 };
    });
  }

  render() {
    let question = this.props.question.question.question || '';
    let answers = this.props.question.question.answers || [];

    return (
      <div>
        <Card className="bg">
          <h4 className="center">{question}</h4>
          {this.state.correct && <SuccessAlert />}
          {this.state.failed && <ErrorAlert props={this.state.correctAnswer} />}

          <div className="root">
            <List>
              {answers.map(value => (
                <ListItem
                  key={value.answer}
                  role={undefined}
                  dense
                  button
                  onClick={this.handleToggle(value.id)}
                >
                  <Checkbox
                    checked={this.state.checked.indexOf(value.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={value.answer} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className="buttons-container">
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSubmitAnswer}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleNext}
            >
              Next
            </Button>
          </div>
        </Card>
        <div>
          <h4>Correct Answers: {this.state.positive}</h4>
          <h4>Wrong Answers: {this.state.negative}</h4>
        </div>
      </div>
    );
  }
}

const mapToProps = (state, ownProps) => {
  return {
    question: state.question,
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    getQuestionThunk(questionId) {
      dispatch(getQuestionThunk(questionId));
    },
  };
};

export default connect(
  mapToProps,
  mapDispatchToProps
)(Question);
