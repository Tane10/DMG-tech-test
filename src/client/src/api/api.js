import { serverUrl } from '../config/serverConfig';

export async function getQuestions() {
    try {
        const fetchQuestions = await fetch(`${serverUrl}/api/questions`);
        return fetchQuestions.json()
    } catch (error) {
        console.log("error: ", error)
    }
}



export async function validateUserId( { userId, setUserValidated }) {
    try {
        const userIdValidation = await fetch(`${serverUrl}/api/users/${userId}`);
        setUserValidated(true);
        return userIdValidation.json();
    } catch (error) {
        setUserValidated(false);
        console.log("error: ", error)
    }


    /*
    TODO:
     - implement the validation of the userId by using the /api/users/:userId route
     - display an error message if the userId is not valid
     - display a success message if the userId is valid
   */

}

export async function submitSurvey(userId, answers) {
    try {
        const postSurvey = await fetch(`${serverUrl}/api/surveys`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: userId, answers: answers })
        });
        return postSurvey.json()
    } catch (error) {
        console.log("error: ", error)
    }



    /*
    TODO:
     - implement the POSTing of the surveyData by using the POST /api/surveys route
     - display an error message if the survey data is not valid
     - display a success message if the survey data was valid and has been received
   */


}


