import './App.css';
import { Button } from './atomic/button';
import { CreditBar } from './atomic/creditBar';
import { Hexagon } from './atomic/hexagon';
import { Title } from './atomic/title';
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
			<div style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				padding: "16px 8px",
			}}>
				<Button icon="calendar_month" text="Ver Agenda" buttonColor="#2E2E2E" textColor="white" />
				<Button icon="build" text="Gerenciar Optativas Livres" buttonColor="#2E2E2E" textColor="white" />
				<Button icon="cleaning_services" text="Limpar" buttonColor="#FF444D" textColor="white" />
				<div>
					<Button icon="publish" text="Importar" buttonColor="#2E2E2E" textColor="white" />
					<Button icon="download" text="Exportar" buttonColor="#2E2E2E" textColor="white" />
				</div>
				<Button icon="school" text="Provavel Formando" buttonColor="#F4F4F4" textColor="#838383" />
			</div>
		</>
	)
}

export default App;
