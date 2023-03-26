import React from "react";

export default function Current() {
  return (
    <div className="row weather-top">
      <div className="col today">
        <h1 id="city">Lisbon</h1>
        <h2>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="broken clouds"
            id="weather-image"
          />
          <span id="temperature">15</span>
          <span className="temp">
            <a href="#" id="celsius">
              ºC
            </a>
            |
            <a href="#" id="farenheit" className="off-link">
              ºF
            </a>
          </span>
        </h2>
        <h3 id="weather-description">Broken clouds</h3>
      </div>
      <div className="col">
        <div className="data">
          <ul>
            <li>
              Feels like: <span id="feels-like">12º</span>
            </li>
            <li>
              Humidity: <span id="humidity">89%</span>
            </li>
            <li>
              Pressure: <span id="pressure">1.027hPa</span>
            </li>
            <li>
              Wind: <span id="wind">5km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
