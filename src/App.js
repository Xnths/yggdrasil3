import './App.css';
import { Actions } from './components/actions';
import { GlobalStatus } from './components/globalStatus';
import { Nav } from './components/nav';
import { ObrigatoriasSection } from './components/obrigatoriasSection';
import { OptativasHumanidadesSection } from './components/optativasHumanidadesSection';
import { OptativasSection } from './components/optativasSection';
import { OptativasStatus } from './components/optativasStatus';

function App() {
	return (
		<>
			<Nav />
			<div id="Dashboard">
				<GlobalStatus />
				<OptativasStatus />
				<Actions />
			</div>
			<div id="Obrigatórias">
				<ObrigatoriasSection />
				<OptativasHumanidadesSection />
			</div>
			<div id="Optativas">
				<OptativasSection />
			</div>
		</>
	)
}

export default App;
