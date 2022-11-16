import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login';

function App() {
	return (
		<div className="App">

			<Router>
				<Header />
				<Routes>
					<Route path="/checkout" element={<Checkout />}></Route>
					<Route path="/" element={<Home />}></Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</Router>
		</div >
	);
}

export default App;
