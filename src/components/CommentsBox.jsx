import React, { useEffect, useState } from "react";
import Allcomments from "./Allcomments";
import axios from "axios";

const CommentsBox = () => {
  const [inputComment, setinputComment] = useState("");
  const [comments, setcomments] = useState([]);
  //  const [replyshowflag, setreplyshowflag] = useState(false)
  const [replyinput, setreplyinput] = useState('')
  useEffect(() => {
    getallcomments();
  }, []);

  const handleCommentsubmit = () => {
    return axios
      .post("http://localhost:8080/comments", {
        comment: inputComment,
        isReply: false,
      })
      .then(() => getallcomments());
  };

  const getallcomments = async () => {
    return await axios
      .get("http://localhost:8080/comments")
      .then((res) => setcomments(res.data))
      .catch((err) => console.log(err));
  };

  const handlereply = (id) => {
    let u = comments.map((c) =>
      c.id === id ? { ...c, isReply: !c.isReply } : c
    );

    setcomments(u);
  };

  const handlereplySubmit=()=>{
    
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
      {comments.map((c) => (
        <p>
          {c.comment}
          {c.isReply ? (
            <>
              <input type="text" placeholder="reply..." value={replyinput} onChange={(e)=>setreplyinput(e.target.value)} />
              <button onClick={handlereplySubmit} >submit your reply😁</button>
            </>
          ) : (
            ""
          )}
          <button onClick={()=>handlereply(c.id)}>reply</button>
        </p>
      ))}
    </div>
  );
};

export default CommentsBox;
