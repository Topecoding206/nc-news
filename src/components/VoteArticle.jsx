import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { AddVote } from "../utility/api";
export const VoteArticle = ({ article_id, votes }) => {
  const [vote, setVotes] = useState(votes);
  const [checkClick, setCheckClick] = useState(true);
  const [err, setErr] = useState(true);
  const handleVoteCount = () => {
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
  };

  return (
    <div>
      <button
        onClick={handleVoteCount}
        className={`${checkClick ? "unchecked" : "checked"}`}
      >
        <AiFillLike />
      </button>
      <span> {vote}</span>
    </div>
  );
};
