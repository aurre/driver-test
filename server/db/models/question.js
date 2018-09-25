const Sequelize = require('sequelize');
const db = require('../db');

// Question
// QuestionId
// Question
// ValidAnswerId

const Question = db.define('question', {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  validAnswerId: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Question;
