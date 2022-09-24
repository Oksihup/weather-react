import axios from "axios";
import React, { useState } from "react";
import Forecast from "./Forecast";

export default function Weather() {
  const [city, setCity] = useState("Kyiv");
  const [weather, setWeather] = useState({
    temperature: 14,
    description: "clear sky",
    humidity: 30,
    wind: 14,
    icon: `http://openweathermap.org/img/wn/10d.png`,
  });

  function showWeather(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}10d.png`,
    });
  }

  function handleCity(event) {
    event.preventDefault();

    let apiKey = "88b3042f64cd74d1b6ce4fb204701424";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form className="mb-3" onSubmit={handleCity}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary shadow-sm w-100"
              value="Search"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{city}</h1>
        <h5 className="text-muted">Monday 10:03</h5>
      </div>
      <Forecast data={weather} />
    </div>
  );
}
