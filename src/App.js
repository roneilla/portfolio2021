import { Redirect, BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/Shared/NavBar/NavBar';
import Footer from './components/Shared/Footer/Footer';

import Home from './pages/Home/Home';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Route exact path="/" component={Home} />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
