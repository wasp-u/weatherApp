
export const getForecast4Hours = (state) => {
    let result = []

    if (state.searchData.forecastWeatherData) {
        let currentTime = +state.searchData.forecastWeatherData.location.localtime.split(' ')[1].split(':')[0]
        result = state.searchData.forecastWeatherData.forecast.forecastday[0].hour.filter(item => {
            if (+item.time.split(' ')[1].split(':')[0] > currentTime && +item.time.split(' ')[1].split(':')[0] <= currentTime + 5) return true
            else return false
        })
        if (result.length < 5) {
            result = [...result, ...(state.searchData.forecastWeatherData.forecast.forecastday[1].hour.filter((item, index, arr) => {
                return (index <= 4 - result.length) ? true : false
            }))]
        }
    }

    return result
}
