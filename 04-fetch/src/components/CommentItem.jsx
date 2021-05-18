import React from "react";
import faker from "faker";

const CommentItem = (props) => {
  console.log(props);

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href={`mailto:${props.comment.email}`} className="author">
          {props.comment.email}
        </a>
        <div className="metadata">
          <span className="date">{props.comment.name}</span>
        </div>
        <div className="text">{props.comment.body}</div>
      </div>
    </div>
  );
};

export default CommentItem;
