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
            <div className={styles.itemsLabels}>
                <p>DAY</p>
                <p>CHANCE OF RAIN</p>
                <p>HUMIDITY</p>
                <p>WIND</p>
                <p>TEMPERATURE</p>
            </div>
            {props.forecastWeatherData
                ?
                props.forecastWeatherData.forecast.forecastday.map(item => {
                    return <ForecastItem key={item.date}
                        date={item.date}
                        daily_chance_of_rain={item.day.daily_chance_of_rain}
                        avghumidity={item.day.avghumidity}
                        maxwind_kph={item.day.maxwind_kph}
                        avgtemp={props.cfToggle === '°C'
                            ? `${item.day.avgtemp_c}°C`
                            : `${item.day.avgtemp_f}°F`
                        }
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
        cfToggle: state.app.cfToggle,
    }
}

export default compose(
    connect(mapStateToProps, {}),
)(ForecastWeather)

