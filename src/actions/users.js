import {getUsers} from "../utils/api";

export const RECEIVE_USERS = 'RECEIVE_USERS',
	ADD_USER_QUESTION_ANSWER = 'ADD_USER_QUESTION_ANSWER',
	ADD_USER_QUESTION = 'ADD_USER_QUESTION';

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	}
}

export function addUserQuestion(question) {
	return {
		type: ADD_USER_QUESTION,
		question
	}
}

export function addUserQuestionAnswer(authedUser, questionId, selectedOption) {
	return {
		type: ADD_USER_QUESTION_ANSWER,
		authedUser,
		questionId,
		selectedOption
	}
}

export function handleGetUsers() {
	return (dispatch) => {
		return getUsers()
			.then((users) => {
				dispatch(receiveUsers(users));
			});
	}
}