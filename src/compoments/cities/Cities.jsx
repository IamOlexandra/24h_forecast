import { StyledCities } from "./styled.js";
import { useEffect, useState } from "react";

import { API_KEY, BASE_URL } from "../../constants.js";
const NOW_URL = `${BASE_URL}/data/2.5/weather?&appid=${API_KEY}`;

export default function Cities({shownCities}) {
  const [cityData, setCityData] = useState(null);
  useEffect(async () => {
    try {
      let newCityData = [];
      await shownCities.forEach(city => {
        const response = fetch(NOW_URL + "&lat=" + city.lat + "&lon=" + city.lon);
        const data = response.json();
        newCityData.push(data)
      });
      setCityData(newCityData);
    } catch(error) {
      console.error(error);
    }
  }, [shownCities]);
  console.log(cityData);
  return (
    <StyledCities className="container">
      {cityData && cityData.map(cityObject => {

      })}
    </StyledCities>
  );
}