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
  //   const { question, answers, handleSubmitAnswer, next } = props;
  constructor() {
    super();
    this.state = {
      IdCounter: 1,
    };
  }

  async componentDidMount() {
    let question = await this.props.getQuestionThunk(this.state.IdCounter);
    console.log(question);
    this.setState(prevState => {
      return { IdCounter: prevState.IdCounter++ };
    });
  }

  render() {
    console.log(this.props.question);
    return (
      <Card className="bg">
        <h4 className="center">Question</h4>
        <div className="root">
          <List>
            {[0, 1, 2, 3].map(value => (
              <ListItem
                key={value}
                role={undefined}
                dense
                button
                // onClick={this.handleToggle(value)}
                // className={classes.listItem}
              >
                <Checkbox
                  //   checked={this.state.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={`Line item ${value + 1}`} />
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
