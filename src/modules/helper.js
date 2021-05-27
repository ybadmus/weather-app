const validateInput = (name) => name !== '';

const loadResults = (weather) => {
    if (weather) {
        document.getElementById('result-temp').textContent = `Temp: ${weather.main.temp} °`;
        document.getElementById('result-place').textContent = `${weather.name}, ${weather.sys.country}`;
        document.getElementById('result-weather').textContent = weather.weather[0].main;
        document.getElementById('result-weather-desc').textContent = weather.weather[0].description;

        document.getElementById('result-feeling').textContent = weather.main.feels_like;
        document.getElementById('result-humidity').textContent = weather.main.humidity;
        document.getElementById('result-pressure').textContent = weather.main.pressure;
        document.getElementById('result-mintemp').textContent = weather.main.temp_min;
        document.getElementById('result-maxtemp').textContent = weather.main.temp_max;
    }
};

const clearDetailsView = () => {
    document.getElementById('result-temp').textContent = '';
    document.getElementById('result-place').textContent = '';
    document.getElementById('result-weather').textContent = '';
    document.getElementById('result-weather-desc').textContent = '';

    document.getElementById('result-feeling').textContent = '';
    document.getElementById('result-humidity').textContent = '';
    document.getElementById('result-pressure').textContent = '';
    document.getElementById('result-mintemp').textContent = '';
    document.getElementById('result-maxtemp').textContent = '';
};

const toggleMainView = () => {
    const mainView = document.getElementById('mainView');
    mainView.style.display = 'none';

    const resultView = document.getElementById('resultView');
    resultView.style.display = 'block';
};

const toggleDetailsView = () => {
    const mainView = document.getElementById('mainView');
    mainView.style.display = 'block';

    const resultView = document.getElementById('resultView');
    resultView.style.display = 'none';
};

const convertTempFahrenheit = (temp) => Math.round((1.8 * Number(temp - 273.15) + 32) * 100) / 100;

const convertFromKelvinToCelsius = (temp) => Math.round((temp - 273.15) * 100) / 100;

export {
    validateInput,
    loadResults,
    clearDetailsView,
    convertTempFahrenheit,
    toggleMainView,
    toggleDetailsView,
    convertFromKelvinToCelsius
};