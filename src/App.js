import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { fetchArticles } from "./utility/api";
function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setisLoading(true);
    fetchArticles().then((data) => {
      setArticles(data);
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
      </Routes>
    </div>
  );
}

export default App;
