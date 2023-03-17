import { useEffect, useState } from "react";
import { fetchArticles, fetchArticlesByTopic } from "../utility/api";
import { ArticleCard } from "./ArticleCard";
import { ErrorHandlerPage } from "./ErrorHandlerPage";
export const Articles = ({ querySort, queryOrder, topics }) => {
  const [displayArticles, setArticlesDisplayArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articlesError, setArticlesError] = useState(false);

  useEffect(() => {
    if (topics) {
      setIsLoading(true);
      fetchArticlesByTopic(topics, querySort, queryOrder)
        .then((articles) => {
          setArticlesDisplayArticles(articles);
          setIsLoading(false);
        })
        .catch((error) => {
          setArticlesError(error.message);
          setArticlesDisplayArticles([]);
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
      fetchArticles(querySort, queryOrder)
        .then((articles) => {
          setArticlesDisplayArticles(articles);
          setIsLoading(false);
        })
        .catch((error) => {
          setArticlesError(error.message);
          setArticlesDisplayArticles([]);
          setIsLoading(false);
        });
    }
  }, [topics, querySort, queryOrder]);
  return isLoading ? (
    <p className="center">Loading ...</p>
  ) : articlesError !== false ? (
    <ErrorHandlerPage articlesError={articlesError} />
  ) : (
    <div className="articles-container">
      {displayArticles.map(
        ({
          article_id,
          title,
          topic,
          author,
          created_at,
          article_img_url,
          votes,
          comment_count,
        }) => {
          return (
            <ArticleCard
              title={title}
              topic={topic}
              author={author}
              created_at={created_at}
              article_img_url={article_img_url}
              article_id={article_id}
              votes={votes}
              comment_count={comment_count}
            />
          );
        }
      )}
    </div>
  );
};
