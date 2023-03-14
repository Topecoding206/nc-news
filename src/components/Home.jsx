import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { fetchArticles } from "../utility/api";
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
          <div className="sort-container">
            <div>
              <p>Sort Articles By</p>
              <select name="" id="">
                <option value="created_at">Date</option>
                <option value="title">title</option>
                <option value="topic">topic</option>
                <option value="author">author</option>
              </select>
            </div>
            <div>
              <p>Orders</p>
              <select name="" id="">
                <option value="DESC">Descending order</option>
                <option value="ASC">Ascending order</option>
              </select>
            </div>
          </div>
          <div className="articles-container">
            {articles.map(
              ({
                article_id,
                title,
                topic,
                author,
                created_at,
                article_img_url,
              }) => {
                return (
                  <ArticleCard
                    title={title}
                    topic={topic}
                    author={author}
                    created_at={created_at}
                    article_img_url={article_img_url}
                    article_id={article_id}
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
