const router = require('express').Router();
const { Question } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Question.findAll()
    .then(question => res.json(question))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  Question.findById(req.params.id)
    .then(question => res.json(question))
    .catch(next);
});
