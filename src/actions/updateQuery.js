const updateQuery = (query, dispatch) => {
	dispatch({ type: 'UPDATE_QUERY', payload: query })
}
export default updateQuery
