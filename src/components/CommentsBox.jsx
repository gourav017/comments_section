import React, { useState } from "react";

const CommentsBox = () => {
  const [inputComment, setinputComment] = useState("");
  const [comments, setcomments] = useState([])

  const handleCommentsubmit=()=>{
      setcomments([...comments,{id:comments.length+1,comment:inputComment}])

  }

  console.log(comments);

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
    </div>
  );
};

export default CommentsBox;
