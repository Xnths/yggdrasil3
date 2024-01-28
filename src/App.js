import './App.css';
import { Button } from './atomic/button';
import { CreditBar } from './atomic/creditBar';
import { Hexagon } from './atomic/hexagon';
import { Title } from './atomic/title';
import { Actions } from './components/actions';
import { GlobalStatus } from './components/globalStatus';
import { Nav } from './components/nav';
import { OptativasStatus } from './components/optativasStatus';
import { getData } from './util/driveRequest';

function App() {
	
	return (
		<>
			<Nav />
			<GlobalStatus />
			<OptativasStatus />
			<Actions />
		</>
	)
}

export default App;
