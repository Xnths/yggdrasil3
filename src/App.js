import './App.css';
import { Button } from './atomic/button';
import { CreditBar } from './atomic/creditBar';
import { Hexagon } from './atomic/hexagon';
import { SubjectIcon } from './atomic/subjectIcon';
import { Title } from './atomic/title';
import { Actions } from './components/actions';
import { GlobalStatus } from './components/globalStatus';
import { Nav } from './components/nav';
import { OptativasStatus } from './components/optativasStatus';
import { getData } from './util/driveRequest';

function App() {
	getData();
	return (
		<>
			<Nav />
			<GlobalStatus />
			<OptativasStatus />
			<Actions />
			<div style={{
				backgroundColor: "#E7E7E7",
				padding: "8px 8px"
			}}>
				<div>
					<Title color="black" fontSize="32px" title="Obrigatórias" />
					<div style={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
					}}>
						<SubjectIcon color="#FF0000" subjectCode="MAC0101" subjectName="Integação na Universidade e na Profissão" />
						<SubjectIcon color="#FF0000" subjectCode="MAC0101" subjectName="Integação na Universidade e na Profissão" />
					</div>
				</div>

			</div>
		</>
	)
}

export default App;
