import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "../utility/api";
import { ErrorHandlerPage } from "./ErrorHandlerPage";
import { UserContext } from "../context/UserContext";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    setLoading(true);
    fetchUsers()
      .then((usersFromApi) => {
        setUsers(usersFromApi);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setUsers([]);
        setLoading(false);
      });
  }, []);
  const handleUser = (username, name) => {
    setUser({ username, name });
    alert(`successfully log in as ${name}`);
  };
  return error ? (
    <ErrorHandlerPage error={error} />
  ) : loading ? (
    <p className="center">loading ...</p>
  ) : (
    <div className="users-container">
      <ul className="users-wrapper">
        {users.map(({ username, name, avatar_url }) => {
          return (
            <li>
              <img src={avatar_url} alt="" />
              <p>{name}</p>
              <button onClick={() => handleUser(username, name)}>
                Log in as {username}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
