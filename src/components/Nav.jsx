import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="navigation">
      <ul className="nav-body">
        <Link to="/">
          <li>All Articles</li>
        </Link>
        <Link to="/articles/coding">
          <li>Topics</li>
        </Link>
        <Link to="/users">
          <li>Users</li>
        </Link>
      </ul>
    </nav>
  );
};
