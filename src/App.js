
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";

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
      </Routes>
    </div>
  );
}

export default App;
