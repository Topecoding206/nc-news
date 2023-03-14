import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../utility/api";
import { Comments } from "./Comments";
import { VoteArticle } from "./VoteArticle";

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
        <section>
          <div className="flex">
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
                    <VoteArticle votes={votes} article_id={article_id} />
                  </article>
                );
              }
            )}

            <Comments article_id={article_id} />
          </div>
          <div className="new-comment">
            <button className="">Add Comment</button>
          </div>
        </section>
      )}
    </>
  );
};
