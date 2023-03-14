import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../utility/api";

export const SingleArticle = () => {
  const { article_id } = useParams();
  const [articleById, setArticleById] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setisLoading(true);
    fetchArticles(article_id).then((res) => {
      setArticleById(res.article);
      setisLoading(false);
    });
  }, [article_id]);
  return (
    <>
      {isLoading ? (
        <p className="center">Loading...</p>
      ) : (
        articleById.map(
          ({
            article_id,
            title,
            topic,
            author,
            created_at,
            article_img_url,
            body,
            votes,
          }) => {
            return (
              <article key={article_id} className="article_container">
                <p key={created_at}>
                  <strong>Date Posted:</strong>
                  {` ${new Date(created_at).toDateString()},
          ${new Date(created_at).toLocaleTimeString()}`}
                </p>
                <p key={author}>
                  <strong>Author:</strong> {author}
                </p>
                <img src={article_img_url} alt="" key={article_img_url} />
                <p key={title}>
                  <strong>Title:</strong> {title}
                </p>
                <p className="justify">
                  <strong className="block">Description:</strong> {body}
                </p>
                <div className="cta">
                  <button>votes: {votes}</button>
                  <button>Post Comment</button>
                  <button>view Comments</button>
                </div>
              </article>
            );
          }
        )
      )}
    </>
  );
};
