import { useEffect, useRef, useState } from "react";
import { StyledHourly, StyledTitle, StyledWrap } from "./styled.js";

import { API_KEY, BASE_URL } from "../../constants.js";
import HourlyChart from "./HourlyChart.jsx";
const HOURLY_URL = `${BASE_URL}/data/2.5/forecast?cnt=10&units=metric&appid=${API_KEY}`;

export default function Hourly({coordinates}) {
  const [temperatureData, setTemperatureData] = useState(null);
  const [hours, setHours] = useState(null);
  const chartRef = useRef(null);

  async function getWeather() {
    try {
      const response = await fetch(HOURLY_URL + "&lat=" + coordinates.lat + "&lon=" + coordinates.lon);
      const data = await response.json();
      setTemperatureData(data.list.map(obj => obj.main.temp));
    } catch(error) {
      console.error(error);
    }
  }
  useEffect(() => {
    const date = new Date();
    const currentHour = date.getHours();
    const hoursArray = [currentHour + ":" + date.getMinutes()];
    for(let hour = currentHour; hoursArray.length < 10;) {
      hour += 3;
      if (hour > 24) {
        hour = 1;
      }
      hoursArray.push(hour + ":" + date.getMinutes());
    }
    setHours(hoursArray)
  }, []);
  useEffect(() => {
    getWeather();
  }, [coordinates]);
  useEffect(() => {

  }, [temperatureData]);
  return (
    <StyledHourly className="container">
      <StyledWrap>
        <StyledTitle>Hourly forecast</StyledTitle>
        <HourlyChart temperatureData={temperatureData} labelsData={hours}/>
      </StyledWrap>
    </StyledHourly>
  );
}