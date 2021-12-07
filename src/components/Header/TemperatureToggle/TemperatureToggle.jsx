import styles from './TemperatureToggle.module.css'

export const TemperatureToggle = (props) => {
    const toggleTemperature = (e) => {
        props.setCfToggle(e.target.innerText);
    }

    return (
        <div className={styles.toggle_block}>
            <span onClick={toggleTemperature} className={props.cfToggle === '°C' ? styles.selected : ''}>°C</span>
            <span>/</span>
            <span onClick={toggleTemperature} className={props.cfToggle === '°F' ? styles.selected : ''}>°F</span>
        </div>
    )
}
