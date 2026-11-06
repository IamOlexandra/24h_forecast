import { StyledButton, StyledButtonPlacing, StyledButtonWrap, StyledItem, StyledLocation, StyledLocationText, StyledOptions, StyledOptionsIconButton, StyledOptionsIconWrap, StyledTemperature, StyledWeatherIconWrap } from "./styled.js";

export default function CitiesItem({city, country, weather, temperature}) {
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
        <StyledButton type="button">Hourly forecast</StyledButton>
        <StyledButton type="button">Weekly forecast</StyledButton>
      </StyledButtonWrap>
      <StyledWeatherIconWrap>
        {weather} //FIX!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      </StyledWeatherIconWrap>
      <StyledTemperature>
        {temperature} ℃
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
        <StyledButton type="button">See more</StyledButton>
        <StyledOptionsIconButton>
          <StyledOptionsIconWrap>
            
          </StyledOptionsIconWrap>
        </StyledOptionsIconButton>
      </StyledOptions>
    </StyledItem>
  );
}