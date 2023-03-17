import { useContext, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { UserContext } from "../context/UserContext";
import { AddVote } from "../utility/api";
export const VoteArticle = ({ article_id, votes }) => {
  const [vote, setVotes] = useState(votes);
  const [checkClick, setCheckClick] = useState(true);
  const [err, setErr] = useState(true);
  const { user } = useContext(UserContext);
  const handleVoteCount = () => {
    if (user.name === "Guest") {
      setVotes(votes);
    } else {
      if (err) {
        if (checkClick) {
          setVotes((current) => {
            return current + 1;
          });

          setCheckClick(false);
        } else {
          setVotes((current) => {
            return current - 1;
          });

          setCheckClick(true);
        }
      }
      AddVote(article_id, { inc_votes: checkClick ? 1 : -1 }).catch(() => {
        alert("vote is not updated");
        setErr(false);
        setVotes(vote);
      });
    }
  };

  return (
    <div>
      <span
        onClick={handleVoteCount}
        className={`${checkClick ? "unchecked" : "checked"}`}
      >
        <AiFillLike />
      </span>
      <span> {vote}</span>
    </div>
  );
};
