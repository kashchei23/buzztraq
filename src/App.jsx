import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import './styles/global.scss';
import Main from './components/main';
import Footer from './components/footer';
import SignUpForm from './components/signUpForm';
import NavBar from './components/navigation';

const App = () => {
	// const myRef = useRef();

	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path='/'>
					<Main />
				</Route>
				<Route path='/signup'>
					<SignUpForm />
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
