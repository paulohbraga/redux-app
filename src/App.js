import React from 'react';
import './App.css';
import Interval from './components/Interval';
import Mean from './components/Average';
import Sum from './components/Sum';
import Random from './components/Random';

function App() {

	return (
		<div className='App'>
			<h1>React-Redux lesson</h1>
			<div className='line'>
				<Interval></Interval>
			</div>
			<div className='line'>
				<Mean></Mean>
				<Sum></Sum>
				<Random></Random>
			</div>
		</div>
	);
}

export default App;
