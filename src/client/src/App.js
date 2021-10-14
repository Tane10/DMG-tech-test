import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Grid, Typography } from '@material-ui/core';
import { getQuestions, validateUserId, submitSurvey } from "./api/api"


function App() {
  // const [userValidated, setUserValidated] = useState(false);
  // const [userId, setUserId] = useState(false);
  // const [questions, setQuestions] = useState([]);
  // const [userValidationError, setUserValidationError] = useState('');

  useEffect(() => {
  }, []); // empty 2nd arg - only runs once


  return (
    <Container style={{ marginTop: '20px ' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4">LOGIN PAGE</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                Please validate your userId to continue with the survey (hint try userId = 123)
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-required"
                label="userId"
                defaultValue=""
                helperText="Please enter your userId"
                onChange={e => {
                  setUserId(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={() => validateUserId({ userId, setUserValidated} )}>
                Submit
              </Button>
            </Grid>
          </Grid>
    </Container>
  );
}

export default App;
