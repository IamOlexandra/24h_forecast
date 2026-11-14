import logo from "../../images/logo.png";
import { IconContext } from "react-icons";
import { StyledAdress, StyledColumn, StyledColumnTitle, StyledContentWrap, StyledFooter, StyledLogo, StyledLogoLink, StyledSocialsIconWrap, StyledSocialsItem, StyledSocialsLink, StyledSocialsList } from "./styled.js";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <StyledContentWrap>
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
            <IconContext.Provider value={{ color: "#fff", size: "25px" }}>
              <StyledSocialsList>
                <StyledSocialsItem>
                  <StyledSocialsLink href="#">
                    <StyledSocialsIconWrap>
                      <FaInstagram/>
                    </StyledSocialsIconWrap>
                  </StyledSocialsLink>
                </StyledSocialsItem>
                <StyledSocialsItem>
                  <StyledSocialsLink href="#">
                    <StyledSocialsIconWrap>
                      <FaFacebookF/>
                    </StyledSocialsIconWrap>
                  </StyledSocialsLink>
                </StyledSocialsItem>
                <StyledSocialsItem>
                  <StyledSocialsLink href="#">
                    <StyledSocialsIconWrap>
                      <FaWhatsapp/>
                    </StyledSocialsIconWrap>
                  </StyledSocialsLink>
                </StyledSocialsItem>
              </StyledSocialsList>
            </IconContext.Provider>
          </StyledColumn>
        </StyledContentWrap>
      </div>
    </StyledFooter>
  );
}