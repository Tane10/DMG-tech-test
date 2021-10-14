const { questions } = require('../config/surveyConfig');
const express = require('express');
const router = express.Router();
const { userIDValidation } = require("../service/auth.service")
const { surveysService } = require("../service/surveys.service")

router.get('/users/:userId', userIDValidation);

//the route that saves the surveys
router.post('/surveys', surveysService);

//retrieve a survey (not in scope for this test)
router.get('/surveys/:surveyId', function (req, res, next) {
  console.log('get "/surveys/:surveyId" route hit');
  res.status(400).json({ message: 'Not yet implemented' });
});

router.get('/questions', function (req, res, next) {
  console.log('get "/questions route hit');
  return res.send({ questions });
});

module.exports = router;
