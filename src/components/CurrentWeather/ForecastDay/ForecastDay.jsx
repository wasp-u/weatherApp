import styles from './ForecastDay.module.css'

export const ForecastDay = ({ time, img, temperature, onClick, selected }) => {

    const onItemClick = (e) => {
        onClick(time)
    }
    console.log(selected);
    return (
        <div className={styles.forecastDay + ' ' + (time == selected ? styles.active : '')}
            onClick={onItemClick}
        >
            <div className={styles.time}>
                {time}
            </div>
            <div className={styles.weatherImg}>
                <img src={img} alt="" />
            </div>
            <div className={styles.temperature}>
                {temperature}
            </div>
        </div >
    )
}
