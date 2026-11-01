import { useEffect, useState } from "react";
import { StyledNews, StyledTitle, StyledButton, StyledPlaceholderText } from "./styled.js";
import NewsList from "./NewsList.jsx";

const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "7efce09bec8c4fea8f0424b2d6617fde";
const QUERY = '(pets OR pet) AND (interacting OR interact OR interacts OR "spending time" OR "spend time" OR "spends time")';
const PAGE_SIZE = 4;
const URL = `${BASE_URL}?q=${QUERY}&pageSize=${PAGE_SIZE}&sortBy=publishedAt&apiKey=${API_KEY}`;

export default function News() {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState(null);
  async function fetchNews() {
    try {
      const resp = await fetch(URL + "&page=" + page);
      const data = await resp.json();
      if(page === 1) {
        setArticles(data.articles);
      } else {
        setArticles(prev => [...prev, ...data.articles]);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchNews();
  }, [page]);
  function loadMore() {
    setPage(prev => prev + 1);
  }
  return (
    <StyledNews className="container">
      <StyledTitle>Interacting with our pets</StyledTitle>
      {articles ? (
        <>
          <NewsList articles={articles}/>
          <StyledButton onClick={loadMore}>See more</StyledButton>
        </>
      ) : <StyledPlaceholderText>Loading...</StyledPlaceholderText>}
    </StyledNews>
  );
}