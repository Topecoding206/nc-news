import { postComment } from "../utility/api";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export const AddComment = ({ displayArticle, setComments }) => {
  const [text, setText] = useState("");
  const [validate, setValidate] = useState(true);
  const [err, setErr] = useState(true);
  const [showMessage, setShowMessage] = useState("");
  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (err) {
      if (text.length < 1) {
        return setValidate(false);
      } else {
        setValidate(true);

        setComments((current) => {
          return [...current, { author: user.username, body: text }];
        });
        setText("");
        setShowMessage("");
      }
      postComment(displayArticle, { ...user, body: text })
        .then((res) => {
          alert("Your comment is successfully updated");
          setComments((currentComments) => {
            return [
              ...currentComments.filter(
                (current) => current.comment_id !== undefined
              ),
              ...res,
            ];
          });
        })
        .catch(() => {
          alert("something went wrong your comment is not updated");
          setErr(false);
          setComments((current) => {
            return [...current];
          });
        });
    }
  };

  return (
    <div className="post-comment-container">
      <button
        className="margin-top"
        onClick={() => setShowMessage("show-post-commment")}
      >
        Add Comment
      </button>
      <div className={`popup-container ${showMessage}`}>
        <form onSubmit={handleSubmit}>
          {validate ? (
            <small></small>
          ) : (
            <small className="warning">input field is empty</small>
          )}
          <div>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              name=""
              id="message"
              cols="30"
              rows="5"
              value={text}
              onChange={(event) => setText(event.target.value)}
            ></textarea>
          </div>
          <button>Submit</button>
          <button onClick={() => setShowMessage("")}>Close</button>
        </form>
      </div>
    </div>
  );
};
