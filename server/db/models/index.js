const User = require('./user');
const Question = require('./question');
const Answer = require('./answer');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

Answer.belongsTo(Question);
Question.hasMany(Answer);

module.exports = {
  User,
  Question,
  Answer,
};

// Question
// One question has multiple possible answers

// 1 - When you come to stop sign
// 2 - When headlights are required, they should be dimmed at least 500 feet before meeting and 300 feet before overtaking another vehicle.

// Answer
// I need to store all answers but some of them are the correct answer for one specific question

// 1 - As close to the stop sign... QuestionId - 1 Correct - false
// 2-  At a place near... QuestionId - 1 Correct - false
// 3 - At a marked stop line... QuestionId - 1 Correct - true
// 4 - true QuestionId - 2 Correct - true
// 5 - false QuestionId - 2 Correct - false

// To know the correct answer for a question make a query that looks for on the answer for the QuestionId and where correct is true
