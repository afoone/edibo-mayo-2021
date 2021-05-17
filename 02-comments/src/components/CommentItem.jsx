import React from "react";

const CommentItem = () => {
  return (
    <div class="comment">
      <a class="avatar">
        <img src="https://semantic-ui.com/images/avatar/small/matt.jpg" />
      </a>
      <div class="content">
        <a class="author">Matt</a>
        <div class="metadata">
          <span class="date">Today at 5:42PM</span>
        </div>
        <div class="text">How artistic!</div>
      </div>
    </div>
  );
};

export default CommentItem;
