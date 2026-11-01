import { useState } from "react";
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

export default function App() {
  const [shownCities, setShownCities] = useState([
    {"lat": 28.6517178, "lon": 77.2219388},
    {"lat": 40.7127281, "lon": -74.0060152},
    {"lat": 35.6828387, "lon": 139.7594549},
  ]);
  const [openedCity, setOpenedCity] = useState(null);
  const [isModalOpened, setIsModalOpened] = useState(false);
  function openModal() {
    setIsModalOpened(true);
  }
  function closeModal() {
    setIsModalOpened(false);
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
  return (
    <div>
      {isModalOpened && <SignUp closeModal={closeModal}/>}
      <Header openModal={openModal}/>
      <main>
        <Hero getCity={getCity}/>
        <Cities shownCities={shownCities}/>
        {openedCity && (
          <>
            <Properties/>
            <Hourly/>
            <Daily/>
          </>
        )}
        <News/>
        <Images/>
      </main>
      <Footer/>
    </div>
  );
}