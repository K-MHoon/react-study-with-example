import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "K-MHoon",
    comment: "안녕하세요 K-MHoon 입니다."
  },
  {
    name: "K-Shiba",
    comment: "안녕하세요 K-Shiba 입니다."
  },
  {
    name: "K-Hello",
    comment: "안녕하세요 K-Hello 입니다."
  },
]

function CommentList(props) {
  return (
    <div>
      {comments.map((comment => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        )
      }))}
    </div>
  );
}

export default CommentList;