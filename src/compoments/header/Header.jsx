import { StyledAccount, StyledButton, StyledHeader, StyledIconWrap, StyledItem, StyledLink, StyledList, StyledLogo, StyledLogoLink, StyledNavigation, StyledUsername } from "./styled.js";
import logo from "../../images/logo.png";
import { IoIosPerson } from "react-icons/io";
import { IconContext } from "react-icons";
import { useState } from "react";

export default function Header({openModal, username}) {
  return (
    <StyledHeader className="container">
      <StyledNavigation>
        <StyledLogoLink href="#">
          <StyledLogo src={logo} alt="24h forecast logo"/>
        </StyledLogoLink>
        <StyledList>
          <StyledItem key="1">
            <StyledLink href="#">Who we are</StyledLink>
          </StyledItem>
          <StyledItem key="2">
            <StyledLink href="#">Contacts</StyledLink>
          </StyledItem>
          <StyledItem key="3">
            <StyledLink href="#">Menu</StyledLink>
          </StyledItem>
        </StyledList>
      </StyledNavigation>
      <StyledAccount>
        {username ? (<StyledUsername>{username}</StyledUsername>) : (<StyledButton type="button" onClick={() => openModal()}>Sign Up</StyledButton>)}
        <StyledIconWrap>
          <IconContext.Provider value={{ color: "#e7eced"}}>
            <IoIosPerson/>
          </IconContext.Provider>
        </StyledIconWrap>
      </StyledAccount>
    </StyledHeader>
  );
}