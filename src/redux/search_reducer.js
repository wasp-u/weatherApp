import { forecastWeatherApi, searchAutocompleteAPI, realTimeWeatherApi } from "../api/api";

const SET_SEARCHING_VALUE = 'search_reducer/SET_SEARCHING_VALUE';
const SET_AUTOCOMPLETE_DATA = 'search_reducer/SET_AUTOCOMPLETE_DATA';
const SET_FORECAST_WEATHER_DATA = 'search_reducer/SET_FORECAST_WEATHER_DATA';
const SET_DATA_IS_FETCHING = 'search_reducer/SET_DATA_IS_FETCHING';
const SET_SEARCHING_IS_FETCHING = 'search_reducer/SET_SEARCHING_IS_FETCHING';
const SET_REALTIME_WEATHER = 'search_reducer/SET_REALTIME_WEATHER';

let initialState = {
    forecastWeatherData: null,
    autocompleteData: null,
    realTimeWeatherData: null,
    searchingValue: '',
    dataIsFetching: false,
    searchingIsFetching: false
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCHING_VALUE:
            return {
                ...state, searchingValue: action.payload
            }
        case SET_AUTOCOMPLETE_DATA:
            return {
                ...state, autocompleteData: action.payload
            }
        case SET_FORECAST_WEATHER_DATA:
            return {
                ...state, forecastWeatherData: action.payload
            }
        case SET_DATA_IS_FETCHING:
            return {
                ...state, dataIsFetching: action.payload
            }
        case SET_SEARCHING_IS_FETCHING:
            return {
                ...state, searchingIsFetching: action.payload
            }
        case SET_REALTIME_WEATHER:
            return {
                ...state, realTimeWeatherData: action.payload
            }
        default: return state;
    }
};

export const setSearchingValue = (payload) => ({ type: SET_SEARCHING_VALUE, payload })
export const setAutocompleteData = (payload) => ({ type: SET_AUTOCOMPLETE_DATA, payload })
export const setForecastWeatherData = (payload) => ({ type: SET_FORECAST_WEATHER_DATA, payload })
export const setDataIsFetching = (payload) => ({ type: SET_DATA_IS_FETCHING, payload })
export const setSearchingIsFetching = (payload) => ({ type: SET_SEARCHING_IS_FETCHING, payload })
export const setRealTimeWeatherData = (payload) => ({ type: SET_REALTIME_WEATHER, payload })


export const getAutocompleteData = (city) => async (dispatch) => {
    dispatch(setSearchingIsFetching(true))
    let response = await searchAutocompleteAPI.getAutocomplete(city)
    dispatch(setSearchingIsFetching(false))
    dispatch(setAutocompleteData(response.data));
}

export const getForecastWeatherData = (city) => async (dispatch) => {
    dispatch(setDataIsFetching(true))
    let response1 = await forecastWeatherApi.getForecastWeather(city)
    dispatch(setDataIsFetching(false))
    dispatch(setForecastWeatherData(response1.data));
    dispatch(getRealTimeWeatherData(city))
}

export const getRealTimeWeatherData = (city) => async (dispatch) => {
    let response2 = await realTimeWeatherApi.getRealTimeWeather(city)
    dispatch(setRealTimeWeatherData(response2.data));
}


export default searchReducer;