const getWeather = async (city) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}?q=${city}&appid=${process.env.API_KEY}`, { mode: 'cors' });
    if (response.status >= 404) {
      const err = await response.json();
      throw err;
    }
    const weather = await response.json();
    localStorage.setItem('weather-info', JSON.stringify(weather));
    localStorage.setItem('weather-unit', 'fahrenheit');
    return weather;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getWeather;