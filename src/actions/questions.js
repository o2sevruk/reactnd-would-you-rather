import {getQuestions} from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS',
	ADD_QUESTION = 'ADD_QUESTION',
	ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	}
}

export function addQuestionAnswer(authedUser, questionId, selectedOption) {
	return {
		type: ADD_QUESTION_ANSWER,
		authedUser,
		questionId,
		selectedOption
	}
}

export function handleGetQuestions() {
	return (dispatch) => {
		return getQuestions()
			.then((questions) => {
				dispatch(receiveQuestions(questions));
			});
	}
}