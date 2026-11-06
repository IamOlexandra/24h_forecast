import { StyledHeading, StyledIconWrap, StyledInfo, StyledItem, StyledList, StyledProperties } from "./styled.js";
import { WiSnowflakeCold, WiHot, WiDust, WiRaindrops, WiBarometer, WiWindy, WiStrongWind, WiNa } from "react-icons/wi";
import { TbEyeCheck, TbEyeExclamation, TbEyeCancel } from "react-icons/tb";
import { useState } from "react";

export default function Properties({cityObject}) {
  const [feelsLike, setFeelsLike] = useState(Math.round(cityObject.main.feels_like * 10) / 10);
  const [minTemp, setMinTemp] = useState(Math.round(cityObject.main.temp_min * 10) / 10);
  const [maxTemp, setMaxTemp] = useState(Math.round(cityObject.main.temp_max * 10) / 10);
  return (
    <StyledProperties className="container">
      <StyledList>
        <StyledItem key="1">
          <StyledHeading>Feels like</StyledHeading>
          <StyledInfo>{feelsLike}°C</StyledInfo>
          <StyledIconWrap>
            {
              feelsLike >= 25 ? (<WiHot/>) :
              feelsLike >= 0 ? (<WiDust/>) :
              (<WiSnowflakeCold/>)
            }
          </StyledIconWrap>
        </StyledItem>
        <StyledItem key="2">
          <StyledHeading>Min °C</StyledHeading>
          <StyledInfo>{minTemp}°C</StyledInfo>
          <StyledHeading>Max °C</StyledHeading>
          <StyledInfo>{maxTemp}°C</StyledInfo>
        </StyledItem>
        <StyledItem key="3">
          
        </StyledItem>
        <StyledItem key="4">
          
        </StyledItem>
        <StyledItem key="5">
          
        </StyledItem>
        <StyledItem key="6">
          
        </StyledItem>
      </StyledList>
    </StyledProperties>
  );
}