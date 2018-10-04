import React from 'react';
import { connect } from 'react-redux';
import { PropType } from 'prop-types';
import './test-questions.css';
import { getQuestionThunk } from '../store/question';

import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';

class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      IdCounter: 1,
    };
  }

  async componentDidMount() {
    console.log(this.props.question);
    await this.props.getQuestionThunk(this.state.IdCounter);
    this.setState(prevState => {
      return { IdCounter: prevState.IdCounter++ };
    });
  }

  render() {
    console.log(this.props.question.question.question);
    console.log(this.props.question.question.answers);

    let question = this.props.question.question.question;
    let answers = this.props.question.question.answers || [];
    return (
      <Card className="bg">
        <h4 className="center">{question || 'Question'}</h4>
        <div className="root">
          <List>
            {answers.map(value => (
              <ListItem
                key={value.answer}
                role={undefined}
                dense
                button
                //   onClick={this.handleToggle(value.id)}
                // className={classes.listItem}
              >
                <Checkbox
                  // checked={this.state.checked.indexOf(value.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={value.answer} />
              </ListItem>
            ))}
          </List>
        </div>
      </Card>
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
