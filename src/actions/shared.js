import {saveQuestion, saveQuestionAnswer} from '../utils/api';
import {addUserQuestion, addUserQuestionAnswer} from './users';
import {addQuestion, addQuestionAnswer} from './questions';

export function handleAddQuestionAnswer(questionId, selectedOption) {
	return (dispatch, getState) => {
		const {login} = getState(),
      authedUser = login.loggedInUser.id;
		
		saveQuestionAnswer({
			authedUser,
			qid: questionId,
			answer: selectedOption
		}).then(() => {
			dispatch(addQuestionAnswer(authedUser, questionId, selectedOption));
			dispatch(addUserQuestionAnswer(authedUser, questionId, selectedOption));
		});
	}
}

export function handleAddQuestion(optionOneText, optionTwoText, callback) {
	return (dispatch, getState) => {
		const {login} = getState(),
      author = login.loggedInUser.id;
		
		saveQuestion({
			optionOneText,
			optionTwoText,
			author
		}).then((question) => {
			dispatch(addUserQuestion(question));
			dispatch(addQuestion(question));
		}).then(callback);
	}
}