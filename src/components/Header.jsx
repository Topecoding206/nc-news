import { UserContext } from "../context/UserContext";
import { useContext } from "react";
export const Header = () => {
  const { user, logOut } = useContext(UserContext);
  return (
    <header>
      <h1>NC NEWS</h1>
      <h2>Welcome {user.name}</h2>
      {user.name !== "Guest" ? (
        <button onClick={logOut}>Log out</button>
      ) : (
        <marquee width="50%" direction="left">
          <h4>
            As a guest user you can't like post, delete comment or post comment.
            kindly Log in from users page thank you.
          </h4>
        </marquee>
      )}
    </header>
  );
};
