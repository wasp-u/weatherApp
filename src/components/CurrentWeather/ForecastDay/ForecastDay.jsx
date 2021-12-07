import styles from './ForecastDay.module.css'

export const ForecastDay = ({ time, img, temperature }) => {
    return (
        <div className={styles.forecastDay}>
            <div className={styles.time}>
                {time}
            </div>
            <div className={styles.weatherImg}>
                <img src={img} alt="" />
            </div>
            <div className={styles.temperature}>
                {temperature}
            </div>
        </div>
    )
}
