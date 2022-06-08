const initialFetchState = {
	data: null,
	loading: false,
	error: null,
	isFetching: false,
	query: {
		amount: 10,
		category: null,
		difficulty: null,
		type: 'multiple',
	},
}

const fetchReducer = (state, { type, payload }) => {
	switch (type) {
		case 'UPDATE_QUESTIONS':
			return {
				...state,
				data: payload,
			}
		case 'UPDATE_LOADING':
			return {
				...state,
				loading: payload,
			}
		case 'UPDATE_ERROR':
			return {
				...state,
				error: payload,
			}
		case 'UPDATE_QUERY':
			return {
				...state,
				query: {
					...state.query,
					...payload,
				},
			}
		case 'UPDATE_ISFETCHING':
			return {
				...state,
				isFetching: payload,
			}
		case 'RESET_QUIZ':
			return {
				data: null,
				loading: false,
				error: null,
				isFetching: false,
				query: {
					amount: 10,
					category: null,
					difficulty: null,
					type: 'multiple',
				},
			}
		default:
			return state
	}
}

export { fetchReducer, initialFetchState }
