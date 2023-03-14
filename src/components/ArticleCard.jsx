import { Link } from "react-router-dom";
import { VoteArticle } from "./VoteArticle";
export const ArticleCard = ({
  article_id,
  title,
  topic,
  author,
  created_at,
  article_img_url,
  votes,
}) => {
  return (
    <article key={article_id}>
      <p key={created_at}>
        {" "}
        <strong>Date Posted:</strong>
        {` ${new Date(created_at).toDateString()},
          ${new Date(created_at).toLocaleTimeString()}`}
      </p>
      <Link to={`/articles/${article_id}`}>
        <img src={article_img_url} alt="" key={article_img_url} />
      </Link>
      <p key={title}>Title: {title}</p>
      <p key={author}>Author: {author}</p>
      <VoteArticle article_id={article_id} votes={votes} />
      <p className="center-button">
        <Link to={`/articles/${article_id}`}>
          <button>View more details</button>
        </Link>
      </p>
    </article>
  );
};
