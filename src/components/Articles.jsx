import { ArticleCard } from "./ArticleCard";
export const Articles = ({ articles, topicArticles }) => {
  //   console.log(articles);
  const displayArticles = articles ? articles : topicArticles;

  return (
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
  );
};
