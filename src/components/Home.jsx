import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { fetchArticles } from "../utility/api";
import { SortNav } from "./SortNav";
export const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setisLoading(true);
    fetchArticles().then((data) => {
      setArticles(data.articles);
      setisLoading(false);
    });
  }, []);
  return (
    <main>
      {isLoading ? (
        <h3 className="center">Loading ...</h3>
      ) : (
        <section className="home-container">
          <SortNav />

          <div className="articles-container">
            {articles.map(
              ({
                article_id,
                title,
                topic,
                author,
                created_at,
                article_img_url,
                votes,
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
                  />
                );
              }
            )}
          </div>
        </section>
      )}
    </main>
  );
};
