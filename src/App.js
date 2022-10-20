import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/first-component';
import SecondComponent from './components/second-component';

function App() {
	return (
		<div className="App">
			<FirstComponent id={1} />
			<SecondComponent id={2} />
		</div>
	);
}

export default App;
