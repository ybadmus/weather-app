const getWeather = async (city) => {
  const response = await fetch(`${process.env.BASE_URL}?q=${city}&appid=${process.env.API_KEY}`, { mode: 'cors' });
  const weather = await response.json();
  localStorage.setItem('weather-info', JSON.stringify(weather));
  localStorage.setItem('weather-unit', 'fahrenheit');
  return weather;
};

export default getWeather;