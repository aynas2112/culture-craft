import './styles.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
// this page is rendered at "/" route ( it is the root route of this web app )

function App() {
	return (
		<>
			<div>
				<Navbar />
				<Outlet />
			</div>
		</>
	);
}

export default App;
