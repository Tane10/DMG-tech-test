const questions = [
  {
    questionId: 1,
    label: 'What is your favourite programming language?',
    componentConfig: { type: 'textField', required: true, answerFormat: 'string' },
  },
  {
    questionId: 2,
    label: 'On a scale of 1 - 10 how would you rate your competency in this language?',
    componentConfig: { type: 'slider', required: true, answerFormat: 'number' },
  },
  {
    questionId: 3,
    label: 'What is your least favourite programming language?',
    componentConfig: { type: 'textField', required: true, answerFormat: 'string' },
  },
  {
    questionId: 4,
    label: 'On a scale of 1 - 10 how would you rate your competency in this language?',
    componentConfig: { type: 'slider', required: true, answerFormat: 'number' },
  },
  {
    questionId: 5,
    label: 'Which languages have you used before',
    componentConfig: {
      type: 'multiCheckbox',
      values: ['Python', 'Java', 'C', 'Javascript', 'Scala', 'Kotlin'],
      // answerFormat: 'TBD',
    },
  },
];

module.exports = {
  questions,
};
