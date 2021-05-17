// Importamos la librería de React
import React from "react";
import CommentItem from "./CommentItem";
import faker from "faker";

const comments = [
  {
    name: "Pepito",
    date: new Date(),
    comment: "mi comentario",
    avatar: "https://semantic-ui.com/images/avatar/small/matt.jpg",
  },
];

// Creamos la función "componente"
const CommentsList = () => {
  return (
    <div className="comments-list">
      <div class="ui comments">
        <h3 class="ui dividing header">Comments</h3>
            <CommentItem />
            <CommentItem />
            <CommentItem />   
      </div>
    </div>
  );
};

// exportamos la función componente
export default CommentsList;
