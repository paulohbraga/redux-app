import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';
import Interval from './components/Interval';
import Mean from './components/Average';
import Sum from './components/Sum';
import Random from './components/Random';

function App() {

	const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);

	return (
		<div className='App'>
			<h1>React-Redux lesson</h1>
			<div className='line'>
				<Interval min={min} max={max} onChangeMin={setMin} onChangeMax={setMax}></Interval>
			</div>
			<div className='line'>
				<Mean min={min} max={max}></Mean>
				<Sum min={min} max={max}></Sum>
				<Random min={min} max={max}></Random>
			</div>
		</div>
	);
}

export default App;
