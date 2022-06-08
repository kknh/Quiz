//dependences
import {
	useEffect,
	useReducer,
	createContext,
	useContext,
	useCallback,
} from 'react'
//reducers
import axiosInstance from './axiosInstance'
import { initialQuizState, quizReducer } from './quizReducer'
import { initialFetchState, fetchReducer } from './fetchReducer'
//actions
import updateQuestions from '../actions/updateQuestions'
import updateError from '../actions/updateError'
import updateLoading from '../actions/updateLoading'
import updateIsFetching from '../actions/updateIsFetching'
const GlobalContext = createContext(null)

const GlobalProvider = ({ children }) => {
	const [quizState, quizDispatch] = useReducer(quizReducer, initialQuizState)
	const [fetchState, fetchDispatch] = useReducer(
		fetchReducer,
		initialFetchState
	)
	const { query: params, isFetching } = fetchState

	const getData = useCallback(async () => {
		updateLoading(true, fetchDispatch)
		try {
			const { data } = await axiosInstance(params).get()
			const questions = data.results
			updateQuestions(questions, fetchDispatch)
			updateLoading(false, fetchDispatch)
			updateIsFetching(false, fetchDispatch)
		} catch (error) {
			updateError(error.message, fetchDispatch)
			updateLoading(false, fetchDispatch)
			updateIsFetching(false, fetchDispatch)
		}
	}, [params])

	useEffect(() => {
		if (isFetching) {
			getData()
		}
	}, [getData, params, isFetching])

	return (
		<GlobalContext.Provider
			value={{ fetchState, fetchDispatch, quizState, quizDispatch }}
		>
			{children}
		</GlobalContext.Provider>
	)
}

const useGlobalContext = () => {
	return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }
