import React from "react";

const CommentItem = (props) => {
  console.log(props);

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.comment.avatar} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">{props.comment.name}</a>
        <div className="metadata">
          <span className="date">{props.comment.date.toLocaleDateString()}</span>
        </div>
        <div className="text">{props.comment.comment}</div>
      </div>
    </div>
  );
};

export default CommentItem;
