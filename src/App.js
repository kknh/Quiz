import Loading from './utils/Loading'
import SetupForm from './components/SetupForm'
import Quiz from './components/Quiz'
import Modal from './components/Modal'
import { useGlobalContext } from './context/Context'

function App() {
	const { fetchState, quizState } = useGlobalContext()
	const { loading, data } = fetchState
	const { showModal } = quizState

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}

	if (showModal) {
		return <Modal />
	}

	if (data) {
		return (
			<main>
				<Quiz />
			</main>
		)
	}

	return (
		<main>
			<SetupForm />
		</main>
	)
}

export default App
