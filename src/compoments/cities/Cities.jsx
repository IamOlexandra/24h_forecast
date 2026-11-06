import { StyledCities } from "./styled.js";
import { useEffect, useState } from "react";
import CitiesItem from "./CitiesItem.jsx";
import { nanoid } from "nanoid";

export default function Cities({cityData, changeOpenedDetailsCity, changeOpenedHourlyCity, changeOpenedDailyCity}) {
  return (
    <StyledCities className="container">
      {cityData && cityData.map(cityObject => (
        <CitiesItem key={nanoid()} detailsClick={() => changeOpenedDetailsCity(cityObject)} hourlyClick={() => changeOpenedHourlyCity(cityObject.coord)} dailyClick={() => changeOpenedDailyCity(cityObject.coord)}  city={cityObject.name} country={cityObject.sys.country} weather={cityObject.weather[0].main} temperature={cityObject.main.temp}/>
      ))}
    </StyledCities>
  );
}