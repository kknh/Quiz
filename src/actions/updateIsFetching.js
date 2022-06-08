const updateIsFetching = (isFetchingStatus, dispatch) => {
	dispatch({ type: 'UPDATE_ISFETCHING', payload: isFetchingStatus })
}
export default updateIsFetching
