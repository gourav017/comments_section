import React, { useEffect, useState } from "react";
import Allcomments from "./Allcomments";
import axios from "axios";

const CommentsBox = () => {
  const [inputComment, setinputComment] = useState("");
  const [comments, setcomments] = useState([]);
  //  const [replyshowflag, setreplyshowflag] = useState(false)
  useEffect(() => {
    getallcomments();
  }, []);

  const handleCommentsubmit = () => {
    return axios
      .post("http://localhost:8080/comments", { comment: inputComment })
      .then(() => getallcomments());
  };

  const getallcomments = async () => {
    return await axios
      .get("http://localhost:8080/comments")
      .then((res) => setcomments(res.data))
      .catch((err) => console.log(err));
  };

  const handledelete = (id) => {
    return axios 
      .delete(`http://localhost:8080/comments/${id}`)
      .then(() => getallcomments());
  };

  return (
    <div>
      CommentsBox
      <input
        type="text"
        placeholder="comments.."
        value={inputComment}
        onChange={(e) => setinputComment(e.target.value)}
      />
      <button onClick={handleCommentsubmit}>submit</button>
      {comments.map((c) => (
        <p>
          {c.comment}
          <button onClick={() => handledelete(c.id)}>reply</button>
        </p>
      ))}
    </div>
  );
};

export default CommentsBox;
