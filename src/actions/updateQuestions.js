const updateQuestions = (questions, dispatch) => {
	dispatch({ type: 'UPDATE_QUESTIONS', payload: questions })
}

export default updateQuestions
