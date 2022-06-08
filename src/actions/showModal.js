const showModal = (modalStatus, dispatch) => {
	dispatch({ type: 'SHOW_MODAL', payload: modalStatus })
}
export default showModal
