import { StyledImage, StyledItem } from "./styled.js";

export default function ImagesItem({url, alt}) {
  return (
    <StyledItem>
        <StyledImage src={url} alt={alt}/>
    </StyledItem>
  );
}