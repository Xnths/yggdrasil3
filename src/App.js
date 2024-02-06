import './App.css';
import { Actions } from './components/actions';
import { GlobalStatus } from './components/globalStatus';
import { Nav } from './components/nav';
import { ObrigatoriasSection } from './components/obrigatoriasSection';
import { OptativasStatus } from './components/optativasStatus';

function App() {
	return (
		<>
			<Nav />
			<GlobalStatus />
			<OptativasStatus />
			<Actions />
			<ObrigatoriasSection />
		</>
	)
}

export default App;
