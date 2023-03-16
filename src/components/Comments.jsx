import { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { UserContext } from "../context/UserContext";
import { deleteComment, fetchComments } from "../utility/api";
import { AddComment } from "./AddComment";
export const Comments = ({ displayArticle }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { user } = useContext(UserContext);
  const [deleteId, setDeleteId] = useState();
  const [comfirmDelete, setComfirmDelete] = useState(false);
  const [showComment, setShowComment] = useState("");
  useEffect(() => {
    setisLoading(true);
    fetchComments(displayArticle).then((data) => {
      setComments(data);
      setisLoading(false);
    });
  }, [displayArticle]);

  useEffect(() => {
    if (comfirmDelete) {
      setComments((currentComment) => {
        return currentComment.filter(
          (current) => current.comment_id !== deleteId
        );
      });
      deleteComment(deleteId)
        .then(() => {
          alert("comment successfully deleted!!!");
        })
        .catch((comment) => {
          console.log(comment.message);
          setComments((current) => {
            return [...current];
          });
          alert("something went wrong your comment is not deleted");
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
      <h3
        className={`center-button  ${
          showComment.length > 1 ? "hide" : "display"
        }`}
        onClick={() => setShowComment("display")}
      >
        View Comments
      </h3>
      <h3
        className={`center-button ${
          showComment.length < 1 ? "hide" : "display"
        }`}
        onClick={() => setShowComment("")}
      >
        Hide Comments
      </h3>
      <section className={`comment-container ${showComment}`}>
        {comments.map(
          ({ author, body, displayArticle, comment_id, votes, created_at }) => {
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
        <AddComment setComments={setComments} displayArticle={displayArticle} />
      </div>
    </div>
  );
};
