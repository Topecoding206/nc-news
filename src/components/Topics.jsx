import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchTopics } from "../utility/api";
import { Articles } from "./Articles";
import { SingleArticle } from "./SingleArticle";

export const Topics = ({ queryOrder, querySort }) => {
  const [topicsState, setTopicsState] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { topics } = useParams();

  useEffect(() => {
    setisLoading(true);
    fetchTopics().then((res) => {
      setTopicsState(res);
      setisLoading(false);
    });
  }, []);

  return +topics ? (
    <SingleArticle />
  ) : isLoading ? (
    <p className="center">Loading ...</p>
  ) : (
    <section>
      <ul className="flex">
        {topicsState.map(({ slug }) => {
          return (
            <li key={slug} className="text-color">
              <Link to={`/articles/${slug}`}>{slug}</Link>
            </li>
          );
        })}
      </ul>
      {+topics ? (
        <p className="center-button">
          <strong>{topics}</strong>
        </p>
      ) : null}
      <Articles topics={topics} queryOrder={queryOrder} querySort={querySort} />
    </section>
  );
};
