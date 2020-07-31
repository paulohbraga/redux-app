import React from 'react';
import './App.css';
import Card from './components/Card';
import Interval from './components/Interval';

function App() {
	return (
		<div className='App'>
			<h1>React-Redux lesson</h1>
			<div className='line'>
				<Interval>
					Teste
				</Interval>
			</div>
			<div className='line'>
				<Card title='Card 2' green>X</Card>
				<Card title='Card 3' blue>X</Card>
				<Card title='Card 4' purple>X</Card>
			</div>
		</div>
	);
}

export default App;
