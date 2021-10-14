const validSurveyData = {
    userId: '123',
    answers: [{ questionId: 1, answer: 'Python' },
    { questionId: 2, answer: 9 }, { questionId: 3, answer: "Rust" },
    { questionId: 4, answer: 5 }, { questionId: 5, answer: "Python" },
    ]
}

const invalidSurveyData = {
    userId: '123',
    answers: [{ questionId: 1, answer: 1 },
    { questionId: 2, answer: "two" }, { questionId: 3, answer: 3 },
    { questionId: 4, answer: "20 years" }, { questionId: 5, answer: "Python" },
    ]
}

const incorrectOrder = {
    userId: '123',
    answers: [{ questionId: 5, answer: 1 },
    { questionId: 3, answer: "two" }, { questionId: 10, answer: 3 },
    { questionId: 2, answer: "20 years" }, { questionId: 1, answer: "Python" },
    ]
}

const failTestJSON = [
    {
        "questionId": 1,
        "requiredType": "string",
    },
    {
        "questionId": 2,
        "requiredType": "number",
    },
    {
        "questionId": 3,
        "requiredType": "string",
    },
    {
        "questionId": 4,
        "requiredType": "number",
    }]

module.exports = {
    validSurveyData,
    invalidSurveyData,
    incorrectOrder,
    failTestJSON
}