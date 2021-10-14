import React from 'react';
import { questionComponentTypes } from '../config/componentConfig';
import { Grid, Slider, TextField, Typography } from '@material-ui/core';

/*
  Sample questions object structure

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
 */

export default function Survey({ questions }) {
  return <Grid container spacing={3}>{questions.map(questionData => {
    return (
    <>
      <Grid item xs={6}><Typography>{questionData.label}</Typography></Grid>
      <Grid item xs={6}><Question questionData={questionData} /></Grid>
    </>)
  })}
  </Grid>
}

function Question( { questionData }) {
  if(questionData.componentConfig.type === questionComponentTypes.textField) {
    return <TextField />;
  } else if(questionData.componentConfig.type === questionComponentTypes.slider) {
    return <Slider label={questionData.label}/>;
  } else if(questionData.componentConfig.type === questionComponentTypes.multiCheckbox) {
    return <MultiCheckBox label={questionData.label}/>;
  }
}

function MultiCheckBox( { values, label }) {
  return <div>MultiCheckBox is yet to be implemented</div>;
}
