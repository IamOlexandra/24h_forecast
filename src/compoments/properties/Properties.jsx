import { StyledHeading, StyledIconWrap, StyledInfo, StyledItem, StyledList, StyledProperties } from "./styled.js";
import { WiSnowflakeCold, WiHot, WiDust, WiRaindrops, WiBarometer, WiWindy, WiStrongWind } from "react-icons/wi";
import { TbEyeCheck, TbEyeExclamation, TbEyeCancel } from "react-icons/tb";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";

export default function Properties({cityObject}) {
  const [feelsLike, setFeelsLike] = useState();
  const [minTemp, setMinTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const iconSize = "82px";
  function round(num) {
    return Math.round(num * 10) / 10;
  }
  useEffect(() => {
    setFeelsLike(round(cityObject.main.feels_like));
    setMinTemp(round(cityObject.main.temp_min));
    setMaxTemp(round(cityObject.main.temp_max));
  }, [cityObject])
  return (
    <StyledProperties className="container">
      <StyledList>
        <StyledItem key="1">
          <StyledHeading>Feels like</StyledHeading>
          <StyledInfo>{feelsLike}°C</StyledInfo>
          <StyledIconWrap>
            <IconContext.Provider value={{size: iconSize}}>
              {
                feelsLike >= 25 ? (<WiHot/>) :
                feelsLike >= 0 ? (<WiDust/>) :
                (<WiSnowflakeCold/>)
              }
            </IconContext.Provider>
          </StyledIconWrap>
        </StyledItem>
        <StyledItem key="2">
          <StyledHeading>Min °C</StyledHeading>
          <StyledInfo>{minTemp}°C</StyledInfo>
          <StyledHeading>Max °C</StyledHeading>
          <StyledInfo>{maxTemp}°C</StyledInfo>
        </StyledItem>
        <StyledItem key="3">
          <StyledHeading>Humidity</StyledHeading>
          <StyledInfo>{cityObject.main.humidity}%</StyledInfo>
          <StyledIconWrap>
            <IconContext.Provider value={{size: iconSize}}>
              <WiRaindrops/>
            </IconContext.Provider>
          </StyledIconWrap>
        </StyledItem>
        <StyledItem key="4">
          <StyledHeading>Pressure</StyledHeading>
          <StyledInfo>{cityObject.main.pressure} Pa</StyledInfo>      
          <StyledIconWrap>
            <IconContext.Provider value={{size: iconSize}}>
              <WiBarometer/>
            </IconContext.Provider>
          </StyledIconWrap>
        </StyledItem>
        <StyledItem key="5">
          <StyledHeading>Wind speed</StyledHeading>
          <StyledInfo>{cityObject.wind.speed} m/s</StyledInfo>      
          <StyledIconWrap>
            <IconContext.Provider value={{size: iconSize}}>
              {
                cityObject.wind.speed <= 10 ? (<WiWindy/>) :
                (<WiStrongWind/>)
              }
            </IconContext.Provider>
          </StyledIconWrap>
        </StyledItem>
        <StyledItem key="6">
          <StyledHeading>Visibility</StyledHeading>
          <StyledInfo>{cityObject.visibility === 10000 ? "Unlimited" : (`${cityObject.visibility} m`)}</StyledInfo>      
          <StyledIconWrap>
            <IconContext.Provider value={{size: iconSize}}>
              {
                cityObject.main.visibility <= 100 ? (<TbEyeCancel/>) :
                cityObject.main.visibility <= 500 ? (<TbEyeExclamation/>) :
                (<TbEyeCheck/>)
              }
            </IconContext.Provider>
          </StyledIconWrap>
        </StyledItem>
      </StyledList>
    </StyledProperties>
  );
}