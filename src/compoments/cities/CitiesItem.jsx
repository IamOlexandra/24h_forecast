import { StyledButton, StyledButtonPlacing, StyledButtonWrap, StyledItem, StyledLocation, StyledLocationText, StyledOptions, StyledOptionsIconButton, StyledOptionsIconWrap, StyledTemperature, StyledWeatherIconWrap } from "./styled.js";
import { WiThunderstorm, WiRainMix, WiRain, WiSnow, WiFog, WiStrongWind, WiTornado, WiDaySunny, WiCloudy, WiNa, WiRefresh } from "react-icons/wi";
import { IconContext } from "react-icons";

export default function CitiesItem({refreshThisCity, detailsClick, hourlyClick, dailyClick, city, country, weather, temperature}) {
  return (
    <StyledItem>
      <StyledLocation>
        <StyledLocationText>
          {city}
        </StyledLocationText>
        <StyledLocationText>
          {country}
        </StyledLocationText>
      </StyledLocation>
      <StyledButtonWrap>
        <StyledButton type="button" onClick={hourlyClick}>Hourly forecast</StyledButton>
        <StyledButton type="button" onClick={dailyClick}>Weekly forecast</StyledButton>
      </StyledButtonWrap>
      <StyledWeatherIconWrap>
        <IconContext.Provider value={{size: "120px"}}>
          {weather === "Thunderstorm" ? (<WiThunderstorm/>) :
            weather === "Drizzle" ? (<WiRainMix/>) :
            weather === "Rain" ? (<WiRain/>) :
            weather === "Snow" ? (<WiSnow/>) :
            weather === "Mist" || weather === "Smoke" || weather === "Haze" || weather === "Dust" || weather === "Fog" || weather === "Sand" || weather === "Ash" ? (<WiFog/>) :
            weather === "Squall" ? (<WiStrongWind/>) :
            weather === "Tornado" ? (<WiTornado/>) :
            weather === "Clear" ? (<WiDaySunny/>) :
            weather === "Clouds" ? (<WiCloudy/>) :
            (<WiNa/>)
          }
        </IconContext.Provider>
      </StyledWeatherIconWrap>
      <StyledTemperature>
        {Math.round(temperature)}°C
      </StyledTemperature>
      <StyledOptions>
        <StyledButtonPlacing>
          <StyledOptionsIconButton type="button" onClick={refreshThisCity}>
            <StyledOptionsIconWrap>
              <IconContext.Provider value={{size: "40px"}}>
                <WiRefresh/>
              </IconContext.Provider>
            </StyledOptionsIconWrap>
          </StyledOptionsIconButton>
        </StyledButtonPlacing>
        <StyledButton type="button" onClick={detailsClick}>See more</StyledButton>
      </StyledOptions>
    </StyledItem>
  );
}