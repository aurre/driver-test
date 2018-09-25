const Sequelize = require('sequelize');
const db = '../db';

// Answer
// AnswerId
// Answer

const Answer = db.define('answer', {
  answer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Answer;
