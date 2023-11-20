import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("durban");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  function showWeather(response) {
    setLoading(true);
    setWeather({
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "69fo350cf347a61tc6a94bf3497a464e";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loading) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-input"
            placeholder="Enter a city....."
            onChange={updateCity}
          />
          <br />
          <input type="submit" className="submit-btn" />
        </form>
        <div>
          <ul>
            <li>Description: {weather.description}</li>
            <li>Temperature: {Math.round(weather.temperature)}℃</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind Speed: {weather.wind}km/h</li>
          </ul>
          <img src={weather.icon} alt="weather_icon" />
        </div>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Enter a city....."
          onChange={updateCity}
        />
        <br /> <br />
        <input type="submit" className="submit-btn" />
      </form>
    );
  }
}
