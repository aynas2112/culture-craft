import './styles.css'
import Home from "./screens/Home";
import Navbar from './components/Navbar';
// this page is rendered at "/" route ( it is the root route of this web app )

function App() {
	return (
		<>
		<div>
			<Navbar />
			<Home />
		</div>
		</>
	);
}

export default App;
