import { useRef, useState } from "react";
import { StyledSwitcher, StyledButton, StyledInput, StyledLabel, StyledModal, StyledSignUp, StyledText, StyledTitle, StyledWrap, StyledForm } from "./styled.js";

export default function SignUp({closeModal, changeUsername}) {
  const [option, setOption] = useState(0);
  const inputRef = useRef(null);
  return (
    <StyledSignUp>
      <StyledModal>
        <StyledTitle>{option === 0 ? "Sign up" : "Log in"}</StyledTitle>
        <StyledForm onSubmit={(event) => changeUsername(event, inputRef.current.value)}>
          {option === 0 ? (
            <>
              <StyledWrap>
                <StyledLabel htmlFor="username">Username</StyledLabel>
                <StyledInput required ref={inputRef} type="text" name="username" id="username" placeholder="Username"/>
              </StyledWrap>
              <StyledWrap>
                <StyledLabel htmlFor="email">E-Mail</StyledLabel>
                <StyledInput required type="email" name="email" id="email" placeholder="E-Mail"/>
              </StyledWrap>            
            </>
          ) : (
            <StyledWrap>
              <StyledLabel htmlFor="usernameOrEmail">Username or E-Mail</StyledLabel>
              <StyledInput required ref={inputRef} type="text" name="usernameOrEmail" id="usernameOrEmail" placeholder="Username or E-Mail"/>
            </StyledWrap>          
          )}
          <StyledWrap>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledInput required type="password" name="password" id="password" placeholder="Password"/>
          </StyledWrap>
          <StyledButton type="submit">{option === 0 ? "Sign up": "Log in"}</StyledButton>
        </StyledForm>
        {option === 0 ? (
          <StyledText>Already have an account? <StyledSwitcher type="button" onClick={() => setOption(1)}>Log In</StyledSwitcher></StyledText>
        ) : (
          <StyledText>Don't have an account? <StyledSwitcher type="button" onClick={() => setOption(0)}>Sign up</StyledSwitcher></StyledText>
        )}
      </StyledModal>
    </StyledSignUp>
  );
}