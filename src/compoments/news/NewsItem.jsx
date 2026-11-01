import { StyledImage, StyledImagePlaceholderText, StyledImageWrap, StyledItem, StyledLink, StyledText } from "./styled.js";

export default function NewsItem({title, image, url}) {
    return (
        <StyledItem>
            <StyledLink target="_blank" href={url}>
                <StyledImageWrap>
                    {image ? <StyledImage src={image} alt={title}/> : <StyledImagePlaceholderText>Image not found</StyledImagePlaceholderText>}
                </StyledImageWrap>                
                <StyledText>{title}</StyledText>
            </StyledLink>
        </StyledItem>
    );
}