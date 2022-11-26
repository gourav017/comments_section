import React, { useState } from "react";
import Allcomments from "./Allcomments";

const CommentsBox = () => {
  const [inputComment, setinputComment] = useState("");
  const [comments, setcomments] = useState([])

  const handleCommentsubmit=()=>{
      setcomments([...comments,{id:comments.length+1,comment:inputComment}])

  }


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
      <Allcomments allcoments={comments} />
    </div>
  );
};

export default CommentsBox;
