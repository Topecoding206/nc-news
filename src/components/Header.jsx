import { UserContext } from "../context/UserContext";
import { useContext } from "react";
export const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <h1>NC NEWS</h1>
      <h2>Welcome {user.username}</h2>
    </header>
  );
};
