const updateError = (errorMessage, dispatch) => {
	dispatch({ type: 'UPDATE_ERROR', payload: errorMessage })
}
export default updateError
