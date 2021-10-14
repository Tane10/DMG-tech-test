const { questions } = require("../config/surveyConfig")

function dataValidator(survey) {
    const invalidTests = [];

    // order question in ascending order 
    survey.answers = survey.answers.sort((a, b) => a.questionId - b.questionId);

    for (const question of questions) {
        for (const answer of survey.answers) {
            if (question.questionId === answer.questionId) {
                if (typeof answer.answer !== question.componentConfig.answerFormat && question.componentConfig.answerFormat !== undefined) {
                    invalidTests.push({ questionId: answer.questionId, requiredType: question.componentConfig.answerFormat });
                }
            }
        }
    }

    return invalidTests.length === 0 ? { valid: true, failed: invalidTests } : { valid: false, failed: invalidTests }
}

function surveysService(req, res, next) {
    if (Object.keys(req.body).length === 0) res.status(400).json({ message: 'Invalid request' })

    const validateSurveyData = dataValidator(req.body);

    validateSurveyData.valid ?
        res.status(200).json({ message: 'Survey completed' }) :
        res.status(400).json({ message: 'Invalid survey', invalidQuestions: validateSurveyData.failed })

}


module.exports = { surveysService, dataValidator }