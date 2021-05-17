import React from "react";
import faker from "faker";

const CommentItem = () => {
  // Ponemos faker en español
  faker.locale = "es";

  return (
    <div class="comment">
      <a class="avatar">
        <img src={faker.image.avatar()} />
      </a>
      <div class="content">
        <a class="author">{faker.name.firstName()}</a>
        <div class="metadata">
          <span class="date">{faker.date.recent(100).toLocaleDateString()}</span>
        </div>
        <div class="text">{
            faker.lorem.paragraph(2)
        }</div>
      </div>
    </div>
  );
};

export default CommentItem;
