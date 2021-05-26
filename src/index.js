import './reset.css';
import './style.css';

import getWeather from './modules/apiModule';
import { validateInput } from './modules/helper'

const loadListerners = () => {
    const search_btn_listener = document.getElementById('search-btn');
    search_btn_listener.addEventListener('click', function() {
        const city = document.getElementById('search-input').value.trim();
        validateInput(city) ? getWeather(city) : console.log('Invalid entry');
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


// if (event.target.id === 'change-unit-btn') {
//     console.log('change-unit-btn clicked');
// };

// if (event.target.id === 'back-btn') {
//     console.log('back-btn clicked');
// };
// }