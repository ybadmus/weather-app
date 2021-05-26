const validateInput = (name) => {
    return name !== '';
}

const renderResultView = (weather) => {
    if (weather) {

        document.getElementById('result-temp').textContent = weather.main.temp;
        document.getElementById('result-place').textContent = `${weather.name}, ${weather.sys.country}`;
        document.getElementById('result-weather').textContent = weather.weather[0].main;
        document.getElementById('result-weather-desc').textContent = weather.weather[0].description;

        document.getElementById('result-feeling').textContent = weather.main.feels_like;
        document.getElementById('result-humidity').textContent = weather.main.humidity;
        document.getElementById('result-pressure').textContent = weather.main.pressure;
        document.getElementById('result-mintemp').textContent = weather.main.temp_min;
        document.getElementById('result-maxtemp').textContent = weather.main.temp_max;

        const mainView = document.getElementById('mainView');
        mainView.style.display = 'none';

        const resultView = document.getElementById('resultView');
        resultView.style.display = 'block';

        document.getElementById('search-input').value = '';
    }
}

const clearResultView = () => {

    document.getElementById('result-temp').textContent = '';
    document.getElementById('result-place').textContent = '';
    document.getElementById('result-weather').textContent = '';
    document.getElementById('result-weather-desc').textContent = '';

    document.getElementById('result-feeling').textContent = '';
    document.getElementById('result-humidity').textContent = '';
    document.getElementById('result-pressure').textContent = '';
    document.getElementById('result-mintemp').textContent = '';
    document.getElementById('result-maxtemp').textContent = '';

    const mainView = document.getElementById('mainView');
    mainView.style.display = 'block';

    const resultView = document.getElementById('resultView');
    resultView.style.display = 'none';

}


export { validateInput, renderResultView, clearResultView }