import axios from 'axios';

// action types

const GET_QUESTION = 'GET_QUESTION';

// action creators

export const getQuestionAction = question => {
  return {
    type: GET_QUESTION,
    question,
  };
};

// thunk creators

const initialState = {
  question: {},
};

export const getQuestionThunk = questionId => {
  return async dispatch => {
    const { data } = await axios.get(`/api/questions/${questionId}`);
    dispatch(getQuestionAction(data));
  };
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTION:
      return { ...state, question: action.question };
    default:
      return state;
  }
}
