import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { SingleArticle } from "./components/SingleArticle";
import { Topics } from "./components/Topics";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/articles/:topic/:article_id"
          element={<SingleArticle />}
        />
        <Route path="/articles/:topics" element={<Topics />} />
      </Routes>
    </div>
  );
}

export default App;
