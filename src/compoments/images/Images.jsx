import { useEffect, useState } from "react";
import ImagesList from "./ImagesList.jsx";
import { StyledImages, StyledTitle,  StyledPlaceholderText} from "./styled.js";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "55483797-7bf23ed8b2a2ba9e2eb875cf6";
const CATEGORY = 'nature';
const PER_PAGE = 5;
const PAGE = 1;
const URL = `${BASE_URL}?category=${CATEGORY}&per_page=${PER_PAGE}&page=${PAGE}&order=latest&orientation=horizontal&type=photo&key=${API_KEY}`;    


export default function Images() {
  const [images, setImages] = useState(null);
  async function fetchNews() {
    try {
      const resp = await fetch(URL);
      const data = await resp.json();
      setImages(data.hits);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <StyledImages className="container">
      <StyledTitle>Beautiful nature</StyledTitle>
      {images ? (
        <>
          <ImagesList images={images}/>
        </>
      ) : <StyledPlaceholderText>Loading...</StyledPlaceholderText>}
    </StyledImages>
  );
}