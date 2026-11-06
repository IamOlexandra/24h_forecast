import { StyledCities } from "./styled.js";
import { useEffect, useState } from "react";

import { API_KEY, BASE_URL } from "../../constants.js";
import CitiesItem from "./CitiesItem.jsx";
const NOW_URL = `${BASE_URL}/data/2.5/weather?&units=metric&appid=${API_KEY}`;

export default function Cities({shownCities}) {
  const [cityData, setCityData] = useState([]);
  async function getWeather(city) {
    try {
      const response = await fetch(NOW_URL + "&lat=" + city.lat + "&lon=" + city.lon);
      const data = await response.json();
      setCityData(prev => [...prev, data]);
    } catch(error) {
      console.error(error);
    }
  }
  useEffect(() => {
    shownCities.forEach(city => {
      getWeather(city);
    });
    console.log(cityData)
  }, [shownCities]);
  return (
    <StyledCities className="container">
      {cityData.length >= 1 && cityData.map(cityObject => {
        <CitiesItem city={cityObject.name} country={cityObject.sys.country} weather={cityObject.weather[0].description} temperature={cityObject.main.temp}/>
      })}
    </StyledCities>
  );
}