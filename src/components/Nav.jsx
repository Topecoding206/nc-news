import { Link } from "react-router-dom";
export const Nav = ({ setHideSort }) => {
  return (
    <nav className="navigation">
      <ul className="nav-body">
        <li>
          <Link to="/">
            <button type="button" onClick={() => setHideSort("display")}>
              All Articles
            </button>
          </Link>
        </li>
        <li>
          <Link to="/articles/coding">
            <button type="button" onClick={() => setHideSort("hide")}>
              Topics
            </button>
          </Link>
        </li>

        <li>
          <Link to="/users">
            <button type="button">Users</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
