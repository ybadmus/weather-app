import { renderResultView } from './helper';

const getWeather = async city => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=25a7b4863d6268c053b2a605c77f8dac`, { mode: 'cors' });
        const weather = await response.json();
        renderResultView(weather)
    } catch (ex) {
        console.log(ex);
    }
}

export default getWeather;