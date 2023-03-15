import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticlesByTopic, fetchTopics } from "../utility/api";
import { Articles } from "./Articles";
import { Home } from "./Home";
import { SingleArticle } from "./SingleArticle";

export const Topics = () => {
  const [topicsState, setTopicsState] = useState([]);
  const [topicArticles, setTopicArticles] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { topics } = useParams();

  useEffect(() => {
    setisLoading(true);
    fetchTopics().then((res) => {
      setTopicsState(res);
      setisLoading(false);
    });
  }, []);
  useEffect(() => {
    setisLoading(true);
    fetchArticlesByTopic(topics).then((res) => {
      setTopicArticles(res.articles);
      setisLoading(false);
    });
  }, [topics]);

  return +topics ? (
    <SingleArticle />
  ) : isLoading ? (
    <p className="center">Loading ...</p>
  ) : (
    <section>
      <ul className="flex">
        {topicsState.map(({ slug }) => {
          return (
            <Link to={`/articles/${slug}`}>
              <li key={slug}>{slug}</li>
            </Link>
          );
        })}
      </ul>
      <p className="center-button">
        <strong>{topics}</strong>
      </p>
      <Articles topicArticles={topicArticles} />
    </section>
  );
};
