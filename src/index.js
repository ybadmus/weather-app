import './reset.css';
import './style.css';
import './css-loader.css';

import getWeather from './modules/api';
import {
  validateInput,
  loadResults,
  clearDetailsView,
  convertTempFahrenheit,
  toggleMainView,
  toggleDetailsView,
  convertFromKelvinToCelsius,
} from './modules/helper';

const loadListerners = () => {
  const searchBtnlistener = document.getElementById('search-btn');
  searchBtnlistener.addEventListener('click', () => {
    const loader = document.getElementById('loader');
    loader.className = 'loader loader-default is-active';

    const userInput = document.getElementById('search-input').value.trim();
    if (validateInput(userInput)) {
      const errorMessage = document.getElementById('error-message');
      errorMessage.classList.remove('display-flex');

      getWeather(userInput).then((resp) => {
        const keys = Object.keys(resp);

        for (let prop = 0; prop < keys.length; prop += 1) {
          if (keys[prop] === 'main') {
            resp.main.temp = convertFromKelvinToCelsius(resp[keys[prop]].temp);
            resp.main.feels_like = convertFromKelvinToCelsius(resp[keys[prop]].feels_like);
            resp.main.humidity = resp[keys[prop]].humidity;
            resp.main.pressure = resp[keys[prop]].pressure;
            resp.main.temp_min = convertFromKelvinToCelsius(resp[keys[prop]].temp_min);
            resp.main.temp_max = convertFromKelvinToCelsius(resp[keys[prop]].temp_max);
          }
        }

        loadResults(resp);
        toggleMainView();
        document.getElementById('search-input').value = '';
        loader.className = 'loader loader-default';
      })
        .catch((error) => {
          const errorMessage = document.getElementById('error-message');
          errorMessage.classList.add('display-flex');
          errorMessage.textContent = `${error.message}, please try again !`;
          loader.className = 'loader loader-default';
        });
    } else {
      const errorMessage = document.getElementById('error-message');
      errorMessage.classList.add('display-flex');
      errorMessage.textContent = 'Invalid input, please try again !';
      loader.className = 'loader loader-default';
    }
  });

  const backBtnListener = document.getElementById('back-btn');
  backBtnListener.addEventListener('click', () => {
    clearDetailsView();
    toggleDetailsView();
    document.body.className = 'background-atmosphere';
  });

  const changeUnitListener = document.getElementById('change-unit-btn');
  changeUnitListener.addEventListener('click', () => {
    if (localStorage.getItem('weather-unit') === 'fahrenheit') {
      const weather = JSON.parse(localStorage.getItem('weather-info'));
      const unitButton = document.getElementById('change-unit-btn');
      unitButton.textContent = 'Change Unit (C °)';
      const tempUnit = document.getElementById('temp-unit');
      tempUnit.textContent = 'F';

      const keys = Object.keys(weather);

      for (let prop = 0; prop < keys.length; prop += 1) {
        if (keys[prop] === 'main') {
          weather.main.temp = convertTempFahrenheit(weather[keys[prop]].temp);
          weather.main.feels_like = convertTempFahrenheit(weather[keys[prop]].feels_like);
          weather.main.humidity = convertTempFahrenheit(weather[keys[prop]].humidity);
          weather.main.pressure = convertTempFahrenheit(weather[keys[prop]].pressure);
          weather.main.temp_min = convertTempFahrenheit(weather[keys[prop]].temp_min);
          weather.main.temp_max = convertTempFahrenheit(weather[keys[prop]].temp_max);
        }
      }

      localStorage.setItem('weather-unit', 'celsius');
      loadResults(weather);
    } else if (localStorage.getItem('weather-unit') === 'celsius') {
      const weather = JSON.parse(localStorage.getItem('weather-info'));
      const unitButton = document.getElementById('change-unit-btn');
      unitButton.textContent = 'Change Unit (F °)';
      const tempUnit = document.getElementById('temp-unit');
      tempUnit.textContent = 'C';

      const keys = Object.keys(weather);

      for (let prop = 0; prop < keys.length; prop += 1) {
        if (keys[prop] === 'main') {
          weather.main.temp = convertFromKelvinToCelsius(weather[keys[prop]].temp);
          weather.main.feels_like = convertFromKelvinToCelsius(weather[keys[prop]].feels_like);
          weather.main.humidity = weather[keys[prop]].humidity;
          weather.main.pressure = weather[keys[prop]].pressure;
          weather.main.temp_min = convertFromKelvinToCelsius(weather[keys[prop]].temp_min);
          weather.main.temp_max = convertFromKelvinToCelsius(weather[keys[prop]].temp_max);
        }
      }

      localStorage.setItem('weather-unit', 'fahrenheit');
      loadResults(weather);
    }
  });
};

const main = () => {
  document.body.className = 'background-atmosphere';

  const mainView = document.getElementById('mainView');
  mainView.classList.add('display-flex');

  const resultView = document.getElementById('resultView');
  resultView.classList.add('display-none');
};

main();
loadListerners();