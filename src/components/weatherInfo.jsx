import React, { useState, useEffect } from 'react';

import TDhead from './TDhead';
import { API_KEY, WEATHER_BASE_URL } from '../config';
import { getItem, setItem } from '../localStorage';

const WeatherInfo = () => {
  const [weather, setWeather] = useState('');

  const saveCoords = (coordsObj) => {
    setItem(API_KEY, coordsObj);
  };

  const handleGeoSuccess = (location) => {
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;

    saveCoords({ latitude, longitude });
    getWeather(latitude, longitude);
  };

  const handleGeoError = () => {
    alert('Can not access geo location.');
  };

  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  };

  const getWeather = (latitude, longitude) => {
    fetch(`${WEATHER_BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((json) => setWeather(json.weather[0].main));
  };

  useEffect(() => {
    const savedCoords = getItem(API_KEY);
    if (savedCoords === undefined) {
      askForCoords();
    } else {
      getWeather(savedCoords.latitude, savedCoords.longitude);
    }
  });

  return <TDhead weather={weather} />;
};

export default WeatherInfo;
