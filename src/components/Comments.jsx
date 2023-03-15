import { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { UserContext } from "../context/UserContext";
import { deleteComment, fetchComments } from "../utility/api";
import { AddComment } from "./AddComment";
export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { user } = useContext(UserContext);
  const [deleteId, setDeleteId] = useState();
  const [comfirmDelete, setComfirmDelete] = useState(false);
  useEffect(() => {
    setisLoading(true);
    fetchComments(article_id).then((data) => {
      setComments(data);
      setisLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    if (comfirmDelete) {
      setComments((currentComment) => {
        return currentComment.filter(
          (current) => current.comment_id !== deleteId
        );
      });
      deleteComment(deleteId).then(() => {
        alert("comment successfully deleted!!!");
      });
    }
  }, [deleteId, comfirmDelete]);

  const handleDelete = (comment_id) => {
    setDeleteId(comment_id);
    setComfirmDelete(
      window.confirm("Are you sure you want to delete this comment?")
    );
  };
  return isLoading ? (
    <p className="center">Loading ...</p>
  ) : (
    <div>
      <section className="comment-container">
        {comments.map(
          ({ author, body, article_id, comment_id, votes, created_at }) => {
            return (
              <div className="comment-body">
                <p>
                  <strong>{author}: </strong>
                  <span>{body}</span>
                </p>
                {author === user.username ? (
                  <p onClick={() => handleDelete(comment_id)}>
                    <AiFillDelete />
                  </p>
                ) : null}
              </div>
            );
          }
        )}
      </section>
      <div>
        <AddComment setComments={setComments} article_id={article_id} />
      </div>
    </div>
  );
};
