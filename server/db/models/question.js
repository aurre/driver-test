const Sequelize = require('sequelize');
const db = require('../db');

// Question
// QuestionId
// Question

const Question = db.define('question', {
  question: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Question;
