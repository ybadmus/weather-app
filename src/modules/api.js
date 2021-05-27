const getWeather = async city => {
    try {
        const response = await fetch(`${process.env.BASE_URL}?q=${city}&appid=${process.env.API_KEY}`, { mode: 'cors' });
        const weather = await response.json();
        localStorage.setItem('weather-info', JSON.stringify(weather));
        localStorage.setItem('weather-unit', 'fahrenheit');
        return weather;
    } catch (ex) {
        console.log(ex);
        throw ex;
    }
}

export default getWeather;