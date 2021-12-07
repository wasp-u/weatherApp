import React from 'react'
import styles from './Header.module.css'
import logo from './../../icons/Logo.svg'
import { Search } from './Search/Search'
import { TemperatureToggle } from './TemperatureToggle/TemperatureToggle'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { setCfToggle } from './../../redux/app_reducer'
import { getAutocompleteData, setSearchingValue, getForecastWeatherData } from './../../redux/search_reducer'

const Header = (props) => {
    return (
        <header >
            <div className="wrapper">
                <div className={styles.header_block}>
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                        <span>WeatherApp</span>
                    </div>
                    <Search autocompleteData={props.autocompleteData}
                        searchingValue={props.searchingValue}
                        getAutocompleteData={props.getAutocompleteData}
                        setSearchingValue={props.setSearchingValue}
                        getForecastWeatherData={props.getForecastWeatherData}
                    />
                    <TemperatureToggle cfToggle={props.cfToggle} setCfToggle={props.setCfToggle} />
                </div>
            </div>
        </header>
    )
}


let mapStateToProps = (state) => {
    return {
        cfToggle: state.app.cfToggle,
        autocompleteData: state.searchData.autocompleteData,
        searchingValue: state.searchData.searchingValue,
    }
}

export default compose(
    connect(mapStateToProps, { setCfToggle, getAutocompleteData, setSearchingValue, getForecastWeatherData }),
)(Header)