const { dataValidator } = require("../src/service/surveys.service");
const { validSurveyData, invalidSurveyData, failTestJSON } = require("./mockData")

describe("Data validator tests", () => {
    test("it should return a object with valid set to true and failed should be empty if data has passed validation", () => {
        const validDataValidator = dataValidator(validSurveyData);
        expect(validDataValidator.valid).toBeTruthy();
        expect(validDataValidator.failed.length).toBe(0);
    })

    test("it should return object with valid set to false and failed should contain failed tests", () => {
        const invalidDataValidator = dataValidator(invalidSurveyData);
        expect(invalidDataValidator.valid).toBeFalsy();
        expect(invalidDataValidator.failed.length).toBe(4);
        expect(invalidDataValidator.failed).toStrictEqual(failTestJSON);
    })
})
