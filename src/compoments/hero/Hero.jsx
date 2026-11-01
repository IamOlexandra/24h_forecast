import { useEffect, useRef, useState } from "react";
import { StyledButton, StyledDate, StyledHero, StyledIconWrap, StyledInput, StyledInputWrap, StyledText, StyledTitle, StyledWrap } from "./styled.js";
import { IoSearch } from "react-icons/io5";

export default function Hero({getCity}) {
  const [currentDate, setCurrentDate] = useState(Date());
  const inputRef = useRef(null);
  return (
    <StyledHero>
      <div className="container">
        <StyledTitle>Weather dashboard</StyledTitle>
        <StyledWrap>
          <StyledText>Create your personal list of favorite cities and always be aware of the weather.</StyledText>
          <StyledDate>
            {currentDate}
          </StyledDate>
        </StyledWrap>
        <StyledInputWrap>
          <StyledInput ref={inputRef} placeholder="Search location..."/>
          <StyledButton onClick={() => getCity(inputRef.current.value)}>
            <StyledIconWrap>
              <IoSearch/>
            </StyledIconWrap>
          </StyledButton>
        </StyledInputWrap>
      </div>
    </StyledHero>
  );
}