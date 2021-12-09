import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getForecast4Hours } from '../../redux/currentWeather_selector';
import { getForecastWeatherData } from './../../redux/search_reducer';
import styles from './CurrentWeather.module.css';
import { ForecastDay } from './ForecastDay/ForecastDay';
import videoUrl from './../../video/Cloud.mp4'


const CurrentWeather = (props) => {
    const [selected, setSelected] = useState('')

    useEffect(() => {
        if (props.forecastWeatherData) setSelected(props.forecastWeatherData.location.localtime.split(' ')[1])
    }, [props.forecastWeatherData])

    const onItemClick = (value) => {
        setSelected(value)
    }

    return (
        <div className='wrapper'>{
            props.forecastWeatherData
                ? <div className={styles.currentWeather} >
                    <div className={styles.nowWeather + ' ' + (props.forecastWeatherData.location.localtime.split(' ')[1] == selected ? styles.active : '')}
                        onClick={() => onItemClick(props.forecastWeatherData.location.localtime.split(' ')[1])}
                    >
                        <div>
                            <video className={styles.bg_video}
                                id='1' src={videoUrl}
                                muted autoPlay loop
                                playsInline defaultMuted
                            ></video>
                            <div className={styles.city}>{props.forecastWeatherData.location.name}</div>
                            <div className={styles.time}>{props.forecastWeatherData.location.localtime}</div>
                            <div className={styles.temperature}>{props.cfToggle === '°C'
                                ? `${props.forecastWeatherData.current.temp_c}°C`
                                : `${props.forecastWeatherData.current.temp_f}°F`
                            }</div>
                        </div>
                    </div>
                    <div className={styles.forecastDay}>
                        {props.forecast4Hours.map(item =>
                            <ForecastDay key={item.time.split(' ')[1]}
                                selected={selected}
                                time={item.time.split(' ')[1]}
                                img={'https://' + item.condition.icon}
                                temperature={props.cfToggle === '°C'
                                    ? item.temp_c + '°C'
                                    : item.temp_f + '°F'
                                }
                                onClick={onItemClick}
                            />
                        )}
                    </div>

                </div>
                : <span>loading...</span>
        } </div >
    )
}


let mapStateToProps = (state) => {
    return {
        forecastWeatherData: state.searchData.forecastWeatherData,
        forecast4Hours: getForecast4Hours(state),
        cfToggle: state.app.cfToggle,
    }
}

export default compose(
    connect(mapStateToProps, { getForecastWeatherData }),
)(CurrentWeather)