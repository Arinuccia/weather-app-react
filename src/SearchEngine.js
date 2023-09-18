import React, { useState } from "react";
import axios from "axios";
export default function SearchEngine(props) {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57821c3b75b60c68ecd1a8d0dd1aa8d3&units=metric`;
    axios.get(url).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div className="SearchEngine">
        {form}
        <h4>Weather in {city}:</h4>
        <ul>
          <li>{Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>{weather.humidity}%</li>
          <li>{weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
