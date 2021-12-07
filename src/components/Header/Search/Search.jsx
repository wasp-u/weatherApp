import styles from './Search.module.css'
import search_icon from './../../../icons/Search_icon.svg'
import { useEffect, useState } from 'react';
import Select from 'react-select'
import { ipAPI } from '../../../api/api';

export const Search = (props) => {
    const [searchingValue, setSearchingValue] = useState(props.searchingValue)
    const [options, setOptions] = useState([])
    const [inputValue, setInputValue] = useState('')

    const startOptions = ['Kiev', 'Moscow', 'Konotop', 'London', 'Paris', 'Berlin'].map(item => {
        return { value: item, label: item }
    })

    useEffect(() => {
        ipAPI.getIP().then(res => {
            props.getForecastWeatherData(res)
        });
        setOptions(startOptions)
    }, [])

    useEffect(() => {
        if (props.autocompleteData && props.autocompleteData.length > 0) {
            const newOptions = props.autocompleteData.map(item => {
                return { value: item.name, label: item.name }
            })
            setOptions(newOptions)
        }
    }, [props.autocompleteData])

    const onChangeSearchingValue = (newValue) => {
        setInputValue(newValue)
        if (newValue.length > 1) {
            setSearchingValue(newValue)
            props.getAutocompleteData(newValue)
        }
    }
    const searchOnClick = () => {
        props.getForecastWeatherData(searchingValue)
        setOptions(startOptions)
        setInputValue(searchingValue)
    }

    const onChange = (e) => {
        setSearchingValue(e.value);
        setOptions(startOptions)
        setInputValue(searchingValue)
        props.getForecastWeatherData(e.value)
    }

    return (
        <div className={styles.search}>
            <Select className={styles.input}
                onInputChange={onChangeSearchingValue}
                onChange={onChange}
                placeholder='Enter your city...'
                options={options}
                inputValue={inputValue}
                blurInputOnSelect={true}
            />
            <button onClick={searchOnClick}>
                <img src={search_icon} alt="" />
            </button>
        </div>
    )
}
