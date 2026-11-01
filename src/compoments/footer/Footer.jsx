import logo from "../../images/logo.png";
import { IconContext } from "react-icons";
import { StyledIconWrap } from "../header/styled.js";
import { StyledAdress, StyledColumn, StyledColumnTitle, StyledFooter, StyledLogo, StyledLogoLink, StyledSocialsItem, StyledSocialsList } from "./styled.js";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <StyledColumn>
          <StyledLogoLink href="#">
            <StyledLogo src={logo} alt="24h forecast logo"/>
          </StyledLogoLink>
        </StyledColumn>
        <StyledColumn>
          <StyledColumnTitle>Adress</StyledColumnTitle>
          <StyledAdress href="https://maps.app.goo.gl/WoKxS49TW9JxTXLh7">Svobody str. 35 <br/>Kyiv <br/>Ukraine</StyledAdress>
        </StyledColumn>
        <StyledColumn>
          <StyledColumnTitle>Contact us</StyledColumnTitle>
          <IconContext.Provider value={{ color: "#fff"}}>
            <StyledSocialsList>
              <StyledSocialsItem>
                <StyledIconWrap>
                  <FaInstagram/>
                </StyledIconWrap>
              </StyledSocialsItem>
              <StyledSocialsItem>
                <StyledIconWrap>
                  <FaFacebookF/>
                </StyledIconWrap>
              </StyledSocialsItem>
              <StyledSocialsItem>
                <StyledIconWrap>
                  <FaWhatsapp/>
                </StyledIconWrap>
              </StyledSocialsItem>
            </StyledSocialsList>
          </IconContext.Provider>
        </StyledColumn>
      </div>
    </StyledFooter>
  );
}