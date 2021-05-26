import './reset.css';
import './style.css';

import getWeather from './modules/api';
import { validateInput, loadResults, clearDetailsView, convertTempFahrenheit } from './modules/helper'

const loadListerners = () => {
    const search_btn_listener = document.getElementById('search-btn');
    search_btn_listener.addEventListener('click', function() {
        const user_input = document.getElementById('search-input').value.trim();
        if (validateInput(user_input)) {
            const res = getWeather(user_input);
            loadResults(res);
            toggleMainView();
            document.getElementById('search-input').value = '';
        } else {
            console.log('Invalid entry');
        }
    });

    const backBtn_listener = document.getElementById('back-btn');
    backBtn_listener.addEventListener('click', function() {
        clearDetailsView();
        toggleDetailsView();
    });

    const change_unit_listener = document.getElementById('change-unit-btn');
    change_unit_listener.addEventListener('click', function() {
        const weather = JSON.parse(localStorage.getItem(`weather-info`));
        if (localStorage.getItem('weather-unit') === 'fahrenheit') {
            const unit_button = document.getElementById('change-unit-btn');
            unit_button.textContent = 'C °';

            for (var prop in weather) {
                if (weather.hasOwnProperty(prop) && prop === 'main') {
                    weather.main.temp = convertTempFahrenheit(weather[prop]['temp']);
                    weather.main.feels_like = convertTempFahrenheit(weather[prop]['feels_like']);
                    weather.main.humidity = convertTempFahrenheit(weather[prop]['humidity']);
                    weather.main.pressure = convertTempFahrenheit(weather[prop]['pressure']);
                    weather.main.temp_min = convertTempFahrenheit(weather[prop]['temp_min']);
                    weather.main.temp_max = convertTempFahrenheit(weather[prop]['temp_max']);
                }
            }
            localStorage.setItem('weather-unit', 'celsius');
        } else if (localStorage.getItem('weather-unit') === 'celsius') {
            const unit_button = document.getElementById('change-unit-btn');
            unit_button.textContent = 'F °';

            localStorage.setItem('weather-unit', 'fahrenheit');
        } else {
            console.log('Invalid unit, please reload and try again')
        };
        renderResultView(weather)
    });
};

const main = () => {
    const mainView = document.getElementById('mainView');
    mainView.style.display = 'block';

    const resultView = document.getElementById('resultView');
    resultView.style.display = 'none';
};

main();
loadListerners();