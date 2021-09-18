import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import './styles/global.scss';
import Main from './components/main';
import Footer from './components/footer';
import SignUpForm from './components/signUpForm';
import NavBar from './components/navigation';
import ScrollUpButton from './components/utility';

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<ScrollUpButton />
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
