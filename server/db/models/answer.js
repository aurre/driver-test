const Sequelize = require('sequelize');
const db = require('../db');

// Answer
// AnswerId
// Answer

const Answer = db.define('answer', {
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  correct: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Answer;
