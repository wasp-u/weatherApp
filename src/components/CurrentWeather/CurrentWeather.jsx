import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getForecast4Hours } from '../../redux/currentWeather_selector';
import { getForecastWeatherData } from './../../redux/search_reducer';
import styles from './CurrentWeather.module.css';
import { ForecastDay } from './ForecastDay/ForecastDay';

const CurrentWeather = (props) => {
    useEffect(() => {
        props.getForecastWeatherData('London')
    }, [])

    // useEffect(() => {
    //     console.log(props);
    // }, [props.forecastWeatherData, props.forecast4Hours])

    return (
        <div className='wrapper'>
            {props.forecastWeatherData
                ? <div className={styles.currentWeather}>

                    <div className={styles.nowWeather}>
                        <div>
                            <div className={styles.city}>{props.forecastWeatherData.location.name}</div>
                            <div className={styles.time}>{props.forecastWeatherData.location.localtime}</div>
                            <div className={styles.temperature}>{props.forecastWeatherData.current.temp_c}°C</div>
                        </div>
                    </div>
                    <div className={styles.forecastDay}>
                        {props.forecast4Hours.map(item =>
                            <ForecastDay key={item.time.split(' ')[1]}
                                time={item.time.split(' ')[1]}
                                img={'https://' + item.condition.icon}
                                temperature={item.temp_c + '°C'}
                            />
                        )}
                    </div>

                </div>
                : <span>loading...</span>}
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        forecastWeatherData: state.searchData.forecastWeatherData,
        forecast4Hours: getForecast4Hours(state),
    }
}

export default compose(
    connect(mapStateToProps, { getForecastWeatherData }),
)(CurrentWeather)