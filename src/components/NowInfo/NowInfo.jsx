import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import styles from './NowInfo.module.css';

const NowInfo = (props) => {
    // useEffect(() => {
    //     console.log(props.realTimeWeatherData);
    // }, [props.realTimeWeatherData])

    return (
        <div className={styles.nowInfo}>
            <span>Now</span>
            {props.realTimeWeatherData
                ? <div className="wrapper">
                    <div className={styles.info}>
                        <div>
                            <p className={styles.title}>Chance of Rain</p>
                            <p className={styles.value}>{props.realTimeWeatherData.current.cloud}%</p>
                        </div>
                        <div>
                            <p className={styles.title}>Humidity</p>
                            <p className={styles.value}>{props.realTimeWeatherData.current.humidity}%</p>
                        </div>
                        <div>
                            <p className={styles.title}>Wind Speed</p>
                            <p className={styles.value}>{props.realTimeWeatherData.current.wind_kph} Km/h</p>
                        </div>
                        <div>
                            <p className={styles.title}>Visibility</p>
                            <p className={styles.value}>{props.realTimeWeatherData.current.vis_km} Km</p>
                        </div>
                        <div>
                            <p className={styles.title}>Pressure</p>
                            <p className={styles.value}>{props.realTimeWeatherData.current.pressure_mb} hPa</p>
                        </div>
                    </div>

                </div>
                : <div>Loading...</div>
            }

        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        realTimeWeatherData: state.searchData.realTimeWeatherData,
    }
}

export default compose(
    connect(mapStateToProps, {}),
)(NowInfo)
