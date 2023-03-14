import { useEffect, useState } from "react";
import { fetchComments } from "../utility/api";
import { AddComment } from "./AddComment";
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
    <div>
      <section className="comment-container">
        {comments.map(({ author, body, article_id, votes, created_at }) => {
          return (
            <div className="comment-body">
              <p>
                <strong>{author}: </strong>
                <span>{body}</span>
              </p>

              <br />
            </div>
          );
        })}
      </section>
      <div>
        <AddComment setComments={setComments} article_id={article_id} />
      </div>
    </div>
  );
};
