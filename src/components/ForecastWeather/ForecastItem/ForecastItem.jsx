import styles from './ForecastItem.module.css';
export const ForecastItem = (props) => {
    return (
        <div className={styles.forecastItem}>
            <p>{props.date}</p>
            <p>{props.daily_chance_of_rain}%</p>
            <p>{props.avghumidity}%</p>
            <p>{props.maxwind_kph} Km/h</p>
            <p>{props.avgtemp}</p>
        </div>
    )
}
