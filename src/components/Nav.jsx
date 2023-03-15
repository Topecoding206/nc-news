import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="navigation">
      <ul>
        <Link to="/">
          <li>All Articles</li>
        </Link>
        <li>Topics</li>

        <Link to="/users">
          <li>Users</li>
        </Link>
      </ul>
    </nav>
  );
};
