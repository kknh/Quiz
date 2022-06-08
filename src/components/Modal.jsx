import { useGlobalContext } from '../context/Context'
import resetQuiz from '../actions/resetQuiz'

const Modal = () => {
	const { fetchState, quizState, fetchDispatch, quizDispatch } =
		useGlobalContext()
	const { correctAnswers } = quizState
	const { data } = fetchState
	const score = (correctAnswers / data.length) * 100
	return (
		<div className="isOpen modal-container">
			<div className="modal-content">
				<h2>Congrats!</h2>
				<p>You answered {score}% of questions correctly</p>
				<button
					onClick={() => resetQuiz(quizDispatch, fetchDispatch)}
					className="close-btn"
				>
					Play Again
				</button>
			</div>
		</div>
	)
}

export default Modal
