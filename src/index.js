import './reset.css';
import './style.css';

import getWeather from './modules/apiModule';
import { validateInput, renderMainView } from './modules/helper'

const loadListerners = () => {
    const search_btn_listener = document.getElementById('search-btn');
    search_btn_listener.addEventListener('click', function() {
        const city = document.getElementById('search-input').value.trim().toLowerCase();
        validateInput(city) ? getWeather(city) : console.log('Invalid entry');
    });

    const backBtn_listener = document.getElementById('back-btn');
    backBtn_listener.addEventListener('click', function() {
        renderMainView();
    });

    const change_unit_listener = document.getElementById('change-unit-btn');
    change_unit_listener.addEventListener('click', function() {
        const city = document.getElementById('result-place').textContent.split(', ')[0].trim();
        getWeather(city)
    });
};

const main = () => {
    renderMainView();
};

main();
loadListerners();