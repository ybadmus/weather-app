const validateInput = (name) => {
    return name !== '';
}

const renderResultView = (weather) => {
    if (weather) {

        console.log(weather);

        document.getElementById('result-temp').textContent = weather.main.temp;
        document.getElementById('result-place').textContent = `${weather.name}, ${weather.sys.country}`;
        document.getElementById('result-weather').textContent = weather.weather[0].main;
        document.getElementById('result-weather-desc').textContent = weather.weather[0].description;

        document.getElementById('result-feeling').textContent = '';
        document.getElementById('result-humidity').textContent = '';
        document.getElementById('result-pressure').textContent = '';
        document.getElementById('result-mintemp').textContent = '';
        document.getElementById('result-maxtemp').textContent = '';


        const mainView = document.getElementById('mainView');
        mainView.style.display = 'none';

        const resultView = document.getElementById('resultView');
        resultView.style.display = 'block';

        document.getElementById('search-input').value = '';
    }

}

export { validateInput, renderResultView }