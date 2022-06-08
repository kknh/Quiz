const updateLoading = (loadingStatus, dispatch) => {
	dispatch({ type: 'UPDATE_LOADING', payload: loadingStatus })
}
export default updateLoading
