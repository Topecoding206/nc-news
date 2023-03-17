import { Route, Routes, useSearchParams } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { SingleArticle } from "./components/SingleArticle";
import { Topics } from "./components/Topics";
import { SortNav } from "./components/SortNav";
import { ErrorHandlerPage } from "./components/ErrorHandlerPage";
import { Users } from "./components/Users";
function App() {
  const [querySort, setQuerySort] = useState();
  const [queryOrder, setQueryOrder] = useState("desc");
  const [searchParams, setSearchParams] = useSearchParams({});
  const [hideSort, setHideSort] = useState("display");
  useEffect(() => {
    if (querySort === undefined) {
      setSearchParams({});
    } else {
      if (hideSort === "hide") {
        setSearchParams({ order: queryOrder });
      } else {
        setSearchParams({
          sort_by: querySort ? querySort : "created_at",
          order: queryOrder,
        });
      }
    }
  }, [queryOrder, querySort, hideSort, setSearchParams]);
  return (
    <div className="App">
      <Header />
      <Nav setHideSort={setHideSort} />
      <SortNav
        setQuerySort={setQuerySort}
        setQueryOrder={setQueryOrder}
        hideSort={hideSort}
      />
      <Routes>
        <Route
          path="/"
          element={<Home queryOrder={queryOrder} querySort={querySort} />}
        />
        <Route path="/articles" element={<Home />} />
        <Route
          path="/articles/:topic/:article_id"
          element={<SingleArticle />}
        />
        <Route
          path="/articles/:topics"
          element={<Topics queryOrder={queryOrder} querySort={querySort} />}
        />

        <Route path="/users" element={<Users />} />
        <Route path="/*" element={<ErrorHandlerPage />} />
      </Routes>
    </div>
  );
}

export default App;
