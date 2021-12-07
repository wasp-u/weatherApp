
export const getForecast4Hours = (state) => {
    let result = []

    if (state.searchData.forecastWeatherData) {
        let currentTime = state.searchData.forecastWeatherData.location.localtime.split(' ')[1].split(':')[0]
        result = state.searchData.forecastWeatherData.forecast.forecastday[0].hour.filter(item => {
            if (item.time.split(' ')[1].split(':')[0] >= currentTime && item.time.split(' ')[1].split(':')[0] < +currentTime + 5) return true
            else return false
        })
        if (result.length < 5) {
            for (let i = 0; i <= 5 - result.length; i++) {
                result.push(state.searchData.forecastWeatherData.forecast.forecastday[1].hour[i])
            }
        }
    }

    return result
}
