import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./components/City";
import WeatherComponent from "./components/Weatherinformation";
import sunnyIcon from "./icons/sunny.svg";
import nightIcon from "./icons/night.png";
import dayIcon from "./icons/day.svg";
import cloudyNightIcon from "./icons/cloudy-night.svg";
import cloudyIcon from "./icons/cloudy.svg";
import perfectDayIcon from "./icons/perfect-day.svg";
import rainIcon from "./icons/rain.svg";
import rainNightIcon from "./icons/rain-night.svg";
import stormIcon from "./icons/storm.svg";
import cloudAndSun from './icons/partly.png'
import temp from './icons/temp.svg'

import './App.css'

export const WeatherIcons = {
  "01d": sunnyIcon,
  "01n": nightIcon,
  "02d": dayIcon,
  "02n": cloudyNightIcon,
  "03d": cloudyIcon,
  "03n": cloudyIcon,
  "04d": perfectDayIcon,
  "04n": cloudyNightIcon,
  "09d": rainIcon,
  "09n": rainNightIcon,
  "10d": rainIcon,
  "10n": rainNightIcon,
  "11d": stormIcon,
  "11n": stormIcon,
  "50d":sunnyIcon,
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d00c8cfdb869d99db9d43cdb709ff3e4`
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
