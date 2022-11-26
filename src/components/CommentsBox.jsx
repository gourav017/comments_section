import React, { useEffect, useState } from "react";
import Allcomments from "./Allcomments";
import axios from "axios";

const CommentsBox = () => {
  const [inputComment, setinputComment] = useState("");
  const [comments, setcomments] = useState([]);

  useEffect(() => {
    getallcommetns();
  }, []);

  const handleCommentsubmit = () => {
    return axios
      .post("http://localhost:8080/comments", { comments: inputComment })
      .then(() => getallcommetns());
  };

  const getallcommetns = async () => {
    return await axios
      .get("http://localhost:8080/comments")
      .then((res) => setcomments(res.data))
      .catch((err) => console.log(err));
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
        <p>{c.comments}</p>
      ))}
    </div>
  );
};

export default CommentsBox;
