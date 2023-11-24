import React from "react";
import "./weatherapp.css";
import cloud_icon from "../Assets/cloud.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
import search_icon from "../Assets/search.png";
import axios from "axios";

export const WeatherApp = () => {
  let api_key = "2cb4da2d24ac812e84c92b4c5d5a390b";
  const search = async () => {
    const element = document.getElementsByClassName("cityinput");
    if (!element[0].value) {
      return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
    try {
      const { data } = await axios.get(url);

      const humidity = document.getElementsByClassName("humidity-percent");
      const wind = document.getElementsByClassName("wind-rate");
      const temprature = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");
      humidity[0].innerHTML = data.main.humidity;
      wind[0].innerHTML = data.wind.speed;
      temprature[0].innerHTML = data.main.temp + " °C";
      location[0].innerHTML = data.name;
      return;
    } catch (error) {
      if (error.response.data.message) {
        return alert(error.response.data.message);
      }
      return alert(error.message);
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityinput" placeholder="Search" />
        <div className="search-icon" onClick={search}>
          <img src={search_icon} alt=" " width={30} />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">london</div>
      {/* parent */}
      <div className="data-container">
        {/* child1 */}
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        {/* child2 */}
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18km</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
