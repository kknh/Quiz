import { useState } from 'react'
import { useGlobalContext } from '../context/Context'
import updateQuery from '../actions/updateQuery'
import updateIsFetching from '../actions/updateIsFetching'

const SetupForm = () => {
	const { fetchState, fetchDispatch } = useGlobalContext()
	const { error } = fetchState

	const [query, setQuery] = useState({
		amount: 10,
		difficulty: 'easy',
		category: 21,
	})

	const onChangeHandler = (e) => {
		let { id, value } = e.target
		if (id === 'category') {
			value = value === 'sport' ? 21 : value === 'history' ? 23 : 24
		}
		if (id === 'amount') {
			value = Number(value)
		}
		setQuery((prevQuery) => ({
			...prevQuery,
			[id]: value,
		}))
	}

	const onSubmitHandler = async (e) => {
		e.preventDefault()

		updateQuery(query, fetchDispatch)
		updateIsFetching(true, fetchDispatch)
	}

	return (
		<section className="section">
			<form onSubmit={onSubmitHandler} className="setup-form quiz quiz-small">
				<h2>Quiz</h2>
				<div className="form-control">
					<label htmlFor="amount">Number Of Questions:</label>
					<input
						type="number"
						defaultValue={10}
						max={50}
						min={1}
						id="amount"
						className="form-input"
						onChange={onChangeHandler}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="category">Category:</label>
					<select
						id="category"
						className="form-input"
						onChange={onChangeHandler}
					>
						<option defaultChecked>sport</option>
						<option>history</option>
						<option>politics</option>
					</select>
				</div>
				<div className="form-control">
					<label htmlFor="difficulty">Select Difficulty:</label>
					<select
						id="difficulty"
						className="form-input"
						onChange={onChangeHandler}
					>
						<option defaultChecked>easy</option>
						<option>medium</option>
						<option>hard</option>
					</select>
				</div>
				<button className="submit-btn">Start</button>
				{error ? <div className="error">{error}</div> : null}
			</form>
		</section>
	)
}

export default SetupForm
