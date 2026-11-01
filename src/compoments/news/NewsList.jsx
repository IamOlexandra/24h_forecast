import NewsItem from "./NewsItem.jsx";
import { StyledList } from "./styled.js";
import { nanoid } from "nanoid";

export default function NewsList({articles}) {
    return (
        <StyledList>
            {articles.map(article => (
                <NewsItem key={nanoid()} title={article.title} image={article.urlToImage} url={article.url}/>
            ))}
        </StyledList>
    );
}