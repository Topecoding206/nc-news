import { Link } from "react-router-dom";
export const Nav = ({ setHideSort }) => {
  return (
    <nav className="navigation">
      <ul className="nav-body">
        <Link to="/">
          <li onClick={() => setHideSort("display")}>All Articles</li>
        </Link>
        <Link to="/articles/coding">
          <li onClick={() => setHideSort("hide")}>Topics</li>
        </Link>
        <Link to="/users">
          <li>Users</li>
        </Link>
      </ul>
    </nav>
  );
};
