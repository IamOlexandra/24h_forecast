import { useState, useEffect } from "react";
import Cities from "./compoments/cities/Cities";
import Header from "./compoments/header/Header";
import Hero from "./compoments/hero/Hero";
import Properties from "./compoments/properties/Properties";
import Hourly from "./compoments/hourly/Hourly";
import Daily from "./compoments/daily/Daily";
import News from "./compoments/news/News";
import Images from "./compoments/images/Images";
import Footer from "./compoments/footer/Footer";
import SignUp from "./compoments/sign_up/SignUp";

import { API_KEY, BASE_URL } from "./constants";
const GEO_URL = `${BASE_URL}/geo/1.0/direct?&appid=${API_KEY}`;
const NOW_URL = `${BASE_URL}/data/2.5/weather?&units=metric&appid=${API_KEY}`;

export default function App() {
  const [username, setUsername] = useState(null);
  const [shownCities, setShownCities] = useState([
    {"lat": 28.6517178, "lon": 77.2219388},
    {"lat": 40.7127281, "lon": -74.0060152},
    {"lat": 35.6828387, "lon": 139.7594549},
  ]);
  const [openedDetailsCity, setOpenedDetailsCity] = useState(null);
  const [openedHourlyCity, setOpenedHourlyCity] = useState(null);
  const [openedDailyCity, setOpenedDailyCity] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [cityData, setCityData] = useState(null);

  function openModal() {
    setIsModalOpened(true);
  }

  function closeModal() {
    setIsModalOpened(false);
  }

  function changeUsername(event, newUsername) {
    event.preventDefault();
    setUsername(newUsername);
    setIsModalOpened(false);
    console.log(newUsername);
  }

  async function getCity(city) {
    try {
      let newCities = shownCities.slice(0, -1);
      const response = await fetch(GEO_URL + "&q=" + city.replaceAll(" ", "_"));
      newCities.unshift(response);
      setShownCities(newCities);
    } catch(error) {
      console.error(error);
    }
  }

  async function getWeather(city) {
    try {
      const response = await fetch(NOW_URL + "&lat=" + city.lat + "&lon=" + city.lon);
      const data = await response.json();
      setCityData(prev => [...prev, data]);
      console.log(data);
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if(cityData !== null) {
      return
    }
    setCityData([]);
    shownCities.forEach(city => {
      getWeather(city);
    });
  }, [shownCities]);

  function changeOpenedDetailsCity(cityObject) {
    setOpenedDetailsCity(cityObject);
    if(openedHourlyCity) {setOpenedHourlyCity(null)}
    if(openedDailyCity) {setOpenedDailyCity(null)}
  }

  function changeOpenedHourlyCity(coordinates) {
    setOpenedHourlyCity(coordinates);
    if(openedDetailsCity) {setOpenedDetailsCity(null)}
    if(openedDailyCity) {setOpenedDailyCity(null)}
  }

  function changeOpenedDailyCity(coordinates) {
    setOpenedDailyCity(coordinates);
    if(openedDetailsCity) {setOpenedDetailsCity(null)}
    if(openedHourlyCity) {setOpenedHourlyCity(null)}
  }

  return (
    <div>
      {isModalOpened && <SignUp closeModal={closeModal} changeUsername={changeUsername}/>}
      <Header openModal={openModal} username={username}/>
      <main>
        <Hero getCity={getCity}/>
        <Cities cityData={cityData} changeOpenedDetailsCity={changeOpenedDetailsCity} changeOpenedHourlyCity={changeOpenedHourlyCity} changeOpenedDailyCity={changeOpenedDailyCity}/>
        {openedDetailsCity && (
          <Properties cityObject={openedDetailsCity}/>
        )}
        {openedHourlyCity && (
          <Hourly coordinates={openedHourlyCity}/>
        )}
        {openedDailyCity && (
          <Daily coordinates={openedDailyCity}/>
        )}
        <News/>
        <Images/>
      </main>
      <Footer/>
    </div>
  );
}