import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { fetchArticles } from "./utility/api";
import { SingleArticle } from "./components/SingleArticle";
function App() {
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
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home articles={articles} isLoading={isLoading} />}
        />
        <Route
          path="/articles/:article_id"
          element={<SingleArticle isLoading={isLoading} />}
        />
      </Routes>
    </div>
  );
}

export default App;
