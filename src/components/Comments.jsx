import { useEffect, useState } from "react";
import { fetchComments } from "../utility/api";
export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setisLoading(true);
    fetchComments(article_id).then((data) => {
      setComments(data);
      setisLoading(false);
    });
  }, [article_id]);
  return isLoading ? (
    <p className="center">Loading ...</p>
  ) : (
    <section className="comment-container">
      {comments.map(({ author, body, article_id, votes, created_at }) => {
        return (
          <div className="comment-body">
            <p>
              <strong>{author}: </strong>
              <span>{body}</span>{" "}
            </p>
            <p>
              <strong>votes: </strong>
              {votes}
            </p>
            <br />
          </div>
        );
      })}
    </section>
  );
};
