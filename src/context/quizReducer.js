const initialQuizState = {
	correctAnswers: 0,
	showModal: false,
	qIndex: 0,
}

const quizReducer = (state, { type, payload }) => {
	switch (type) {
		case 'UPDATE_CORRECT':
			return {
				...state,
				correctAnswers: state.correctAnswers + 1,
			}
		case 'SHOW_MODAL':
			return {
				...state,
				showModal: payload,
			}
		case 'NEXT_QUESTION':
			return {
				...state,
				qIndex: state.qIndex + 1,
			}
		case 'RESET_QUIZ':
			return {
				correctAnswers: 0,
				showModal: false,
				qIndex: 0,
			}
		default:
			return state
	}
}

export { quizReducer, initialQuizState }
