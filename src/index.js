import './reset.css';
import './style.css';
import './css-loader.css';

import darkNight from './the-dark-night-wallpaper.jpg';

import getWeather from './modules/api';
import {
  validateInput,
  loadResults,
  clearDetailsView,
  convertTempFahrenheit,
  toggleMainView,
  toggleDetailsView,
} from './modules/helper';

const loadListerners = () => {
  const searchBtnlistener = document.getElementById('search-btn');
  searchBtnlistener.addEventListener('click', () => {
    const loader = document.getElementById('loader');
    loader.className = 'loader loader-default is-active';

    const userInput = document.getElementById('search-input').value.trim();
    if (validateInput(userInput)) {
      getWeather(userInput).then((resp) => {
        loadResults(resp);
        toggleMainView();
        document.getElementById('search-input').value = '';
        loader.className = 'loader loader-default';
      })
        .catch((error) => {
          loader.className = 'loader loader-default';
          throw error;
        });
    } else {
      loader.className = 'loader loader-default';
    }
  });

  const backBtnListener = document.getElementById('back-btn');
  backBtnListener.addEventListener('click', () => {
    clearDetailsView();
    toggleDetailsView();
  });

  const changeUnitListener = document.getElementById('change-unit-btn');
  changeUnitListener.addEventListener('click', () => {
    if (localStorage.getItem('weather-unit') === 'fahrenheit') {
      const weather = JSON.parse(localStorage.getItem('weather-info'));
      const unitButton = document.getElementById('change-unit-btn');
      unitButton.textContent = 'C °';
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
      unitButton.textContent = 'F °';
      const tempUnit = document.getElementById('temp-unit');
      tempUnit.textContent = 'C';

      localStorage.setItem('weather-unit', 'fahrenheit');
      loadResults(weather);
    }
  });
};

const main = () => {
  document.body.style.background = `url(${darkNight})`;

  const mainView = document.getElementById('mainView');
  mainView.style.display = 'flex';

  const resultView = document.getElementById('resultView');
  resultView.style.display = 'none';
};

main();
loadListerners();