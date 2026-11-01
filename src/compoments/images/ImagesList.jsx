import ImagesItem from "./ImagesItem.jsx";
import { StyledList } from "./styled.js";
import { nanoid } from "nanoid";

export default function ImagesList({images}) {
  return (
    <StyledList>
        {images.map(image => (
            <ImagesItem key={nanoid()} url={image.webformatURL} alt={image.tags}/>
        ))}
    </StyledList>
  );
}