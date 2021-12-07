import axios from "axios"

export const searchAutocompleteAPI = {
    getAutocomplete(city) {
        let options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/search.json',
            params: { q: `${city}` },
            headers: {
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
                'x-rapidapi-key': '3ae63edcebmsh6eaba50ddc23fd9p1b84f6jsn36ec219d4e09'
            }
        };
        return axios.request(options)
    },
}

export const forecastWeatherApi = {
    getForecastWeather(city) {
        let options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: { q: `${city}`, days: '3' },
            headers: {
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
                'x-rapidapi-key': '3ae63edcebmsh6eaba50ddc23fd9p1b84f6jsn36ec219d4e09'
            }
        };
        return axios.request(options)
    }
}
export const realTimeWeatherApi = {
    getRealTimeWeather(city) {
        let options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: { q: `${city}` },
            headers: {
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
                'x-rapidapi-key': '3ae63edcebmsh6eaba50ddc23fd9p1b84f6jsn36ec219d4e09'
            }
        };
        return axios.request(options)
    }
}