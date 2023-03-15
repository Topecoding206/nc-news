import { useEffect, useState } from "react";

import { fetchArticles } from "../utility/api";
import { SortNav } from "./SortNav";
import { Articles } from "./Articles";
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

          <Articles articles={articles} />
        </section>
      )}
    </main>
  );
};
