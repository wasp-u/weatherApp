import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ForecastItem } from './ForecastItem/ForecastItem';
import styles from './ForecastWeather.module.css';


const ForecastWeather = (props) => {
    // useEffect(() => {
    //     console.log(props.forecastWeatherData);
    // }, [props.forecastWeatherData])

    return (
        <div className={styles.forecastWeather}>
            {props.forecastWeatherData
                ?
                props.forecastWeatherData.forecast.forecastday.map(item => {
                    return <ForecastItem key={item.date}
                        date={item.date}
                        daily_chance_of_rain={item.day.daily_chance_of_rain}
                        avghumidity={item.day.avghumidity}
                        maxwind_kph={item.day.maxwind_kph}
                        avgtemp_c={item.day.avgtemp_c}
                    />
                })
                : <div>Loading...</div>
            }
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        forecastWeatherData: state.searchData.forecastWeatherData,
    }
}

export default compose(
    connect(mapStateToProps, {}),
)(ForecastWeather)

