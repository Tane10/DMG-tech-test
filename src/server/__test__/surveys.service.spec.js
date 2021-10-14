const app = require('../src/app')
const supertest = require('supertest')
const request = supertest(app)
const { validSurveyData, invalidSurveyData, failTestJSON } = require("./mockData")

describe("Surveys service tests", () => {
    test("it should return a JSON message 'Survey completed' with a 200 statusCode, if the supplied with a valid survey", async () => {
        const surveysResponse = await request.post('/api/surveys').send(validSurveyData);
        expect(surveysResponse.status).toBe(200);
        expect(surveysResponse.body.message).toBe('Survey completed');

    })
    test("it should return a JSON message 'Invalid survey' followed by listing where the survey is invalid and return a status code 400", async () => {
        const surveysResponse = await request.post('/api/surveys').send(invalidSurveyData);
        expect(surveysResponse.status).toBe(400);
        expect(surveysResponse.body.message).toBe('Invalid survey');
        expect(surveysResponse.body.invalidQuestions).toStrictEqual(failTestJSON);
    })
    test("it should return a JSON message 'Invalid request' and 400 status code if there isn't any body supplied", async () => {
        const surveysResponse = await request.post('/api/surveys');
        expect(surveysResponse.status).toBe(400);
        expect(surveysResponse.body.message).toBe('Invalid request');

    })

})

