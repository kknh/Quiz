import React from 'react'
import { useGlobalContext } from '../context/Context'
import updateCorrect from '../actions/updateCorrect'
import nextQuestion from '../actions/nextQuestion'
import showModal from '../actions/showModal'
const Quiz = () => {
	const { fetchState, quizState, quizDispatch } = useGlobalContext()
	const { data } = fetchState
	const { qIndex, correctAnswers } = quizState

	const quiz = data[qIndex]

	/**************************************************/
	// Placing up correct answer on a random position //
	const randomIndex = Math.floor(Math.random() * 4)
	let answers = [...quiz.incorrect_answers]
	answers.splice(randomIndex, 0, quiz.correct_answer)
	/**************************************************/

	const onClickAnswerHandler = (answer) => {
		if (answer === quiz.correct_answer) {
			updateCorrect(quizDispatch)
		}

		//checking if last question
		if (qIndex === data.length - 1) {
			showModal(true, quizDispatch)
		} else {
			nextQuestion(quizDispatch)
		}
	}

	return (
		<section className="quiz">
			{data.map((question, i) => (
				<div
					key={question.question}
					className={qIndex === i ? 'display-block' : 'display-none'}
				>
					<div className="correct-answers">{`Correct Answers : ${correctAnswers}/${data.length}`}</div>
					<h2>{decodeHtml(question.question)}</h2>
					{answers.map((answer) => (
						<button
							key={answer}
							onClick={() => onClickAnswerHandler(answer)}
							className="answer-btn"
						>
							{answer}
						</button>
					))}
					<button
						className="next-question"
						onClick={() =>
							qIndex === data.length - 1
								? showModal(true, quizDispatch)
								: nextQuestion(quizDispatch)
						}
					>
						Next Question
					</button>
				</div>
			))}
		</section>
	)
}
export default Quiz

// solution from https://stackoverflow.com/questions/1787322/what-is-the-htmlspecialchars-equivalent-in-javascript
function decodeHtml(str) {
	var map = {
		'&amp;': '&',
		'&lt;': '<',
		'&gt;': '>',
		'&quot;': '"',
		'&#039;': "'",
	}
	return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, function (m) {
		return map[m]
	})
}
