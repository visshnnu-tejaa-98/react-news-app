import './App.css';
import HomePage from './components/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<Route path='/about' exact>
					<About />
				</Route>
				<Route path='/contact' exact>
					<Contact />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
