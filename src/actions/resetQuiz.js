const resetQuiz = (quizDispatch, fetchDispatch) => {
	fetchDispatch({ type: 'RESET_QUIZ' })
	quizDispatch({ type: 'RESET_QUIZ' })
}
export default resetQuiz
