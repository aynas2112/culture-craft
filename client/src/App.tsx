import './styles.css'
import { BrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
// this page is rendered at "/" route ( it is the root route of this web app )

function App() {
	return (
		<>
				<div className='overflow-y-hidden'>
					<div className=''><Navbar /></div>
					<div className=' md:max-w-7xl h-[90vh] m-auto'><Outlet /></div>
				</div>
		</>
	);
}

export default App;
