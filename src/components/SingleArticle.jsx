import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleArticle } from "../utility/api";
import { Comments } from "./Comments";
import { ErrorHandlerPage } from "./ErrorHandlerPage";
import { VoteArticle } from "./VoteArticle";

export const SingleArticle = () => {
  const { article_id, topics } = useParams();
  const [articleById, setArticleById] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articleError, setArticleError] = useState(false);
  const displayArticle = article_id ? article_id : topics;
  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticle(displayArticle)
      .then((res) => {
        setArticleById(res.article);
        setIsLoading(false);
      })
      .catch((error) => {
        setArticleError(error.message);
        setArticleById([]);
        setIsLoading(false);
      });
  }, [displayArticle]);

  return (
    <>
      {isLoading ? (
        <p className="center">Loading...</p>
      ) : articleError ? (
        <ErrorHandlerPage articleError={articleError} />
      ) : (
        <section>
          <div>
            {articleById.map(
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
                  <article
                    key={article_id}
                    className="article_container"
                    id="#"
                  >
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
                    <p className="justify" key={"Description"}>
                      <strong className="block">Description:</strong> {body}
                    </p>
                    <p key={article_id}>
                      <VoteArticle votes={votes} article_id={article_id} />
                    </p>
                  </article>
                );
              }
            )}

            <Comments displayArticle={displayArticle} />
          </div>
        </section>
      )}
    </>
  );
};
