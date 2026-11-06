import { useEffect, useState } from "react";
import { StyledButton, StyledButtonPlacing, StyledButtonWrap, StyledItem, StyledLocation, StyledLocationText, StyledOptions, StyledOptionsIconButton, StyledOptionsIconWrap, StyledTemperature, StyledWeatherIconWrap } from "./styled.js";
import { WiThunderstorm, WiRainMix, WiRain, WiSnow, WiFog, WiStrongWind, WiTornado, WiDaySunny, WiCloudy, WiNa } from "react-icons/wi";

export default function CitiesItem({detailsClick, hourlyClick, dailyClick, city, country, weather, temperature}) {
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
      </StyledWeatherIconWrap>
      <StyledTemperature>
        {Math.round(temperature)}°C
      </StyledTemperature>
      <StyledOptions>
        <StyledButtonPlacing>
          <StyledOptionsIconButton>
            <StyledOptionsIconWrap>

            </StyledOptionsIconWrap>
          </StyledOptionsIconButton>
          <StyledOptionsIconButton>
            <StyledOptionsIconWrap>
              
            </StyledOptionsIconWrap>
          </StyledOptionsIconButton>
        </StyledButtonPlacing>
        <StyledButton type="button" onClick={detailsClick}>See more</StyledButton>
        <StyledOptionsIconButton>
          <StyledOptionsIconWrap>
            
          </StyledOptionsIconWrap>
        </StyledOptionsIconButton>
      </StyledOptions>
    </StyledItem>
  );
}