import './App.css';
import { ItemNav } from './atomic/itemNav';
import { Loadingbar } from './atomic/loadingbar';
import { CreditBar } from './components/creditBar';
import { Nav } from './components/nav';

function App() {
	return (
		<>
			<Nav />
			<div style={{
				display: "flex",
				justifyContent: "space-evenly",
				width: "fit-content",
			}}>
				<CreditBar creditType="Obrigatória" color="#0D75FD" creditEarned="111" creditRequired="111" />
				<CreditBar creditType="Eletiva" color="#00D0FF" creditEarned="56" creditRequired="56" />
				<CreditBar creditType="Livre" color="#00E1CF" creditEarned="24" creditRequired="24" />
			</div>
		</>
	)
}

export default App;
