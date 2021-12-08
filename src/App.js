import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import ForecastWeather from './components/ForecastWeather/ForecastWeather';
import Header from './components/Header/Header';
import NowInfo from './components/NowInfo/NowInfo';

function App() {
	return (
		<div>
			<Header />
			<div className="App">
				<CurrentWeather />
				<NowInfo />
				<ForecastWeather />
			</div>

		</div>

	);
}

export default App;
