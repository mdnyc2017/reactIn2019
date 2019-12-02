import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shopPage/shopPage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/signin' component={SignInAndSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
