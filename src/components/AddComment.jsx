import { postComment } from "../utility/api";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export const AddComment = ({ article_id, setComments }) => {
  const [text, setText] = useState("");
  const [validate, setValidate] = useState(true);
  const [err, setErr] = useState(true);
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
      }
      postComment(article_id, { ...user, body: text })
        .then(() => {
          alert("Your comment is successfully updated");
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
      <button>Add Comment</button>
      <div>
        <form onSubmit={handleSubmit}>
          {validate ? <small></small> : <small>input field is empty</small>}
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
          <button>Close</button>
        </form>
      </div>
    </div>
  );
};
