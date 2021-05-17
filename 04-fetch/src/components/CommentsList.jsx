// Importamos la librería de React
import React from "react";
import CommentItem from "./CommentItem";
import faker from "faker";

// Ponemos faker en español
faker.locale = "es";

const comments = [
  {
    id: 56,
    name: "Pepito",
    date: new Date(),
    comment: "mi comentario",
    avatar: "https://semantic-ui.com/images/avatar/small/matt.jpg",
  },
  {
    id: faker.datatype.uuid(),
    name: "Julia",
    date: faker.date.recent(100),
    comment: faker.lorem.paragraph(2),
    avatar: faker.image.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    date: faker.date.recent(100),
    comment: faker.lorem.paragraph(2),
    avatar: faker.image.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    date: faker.date.recent(100),
    comment: faker.lorem.paragraph(2),
    avatar: faker.image.avatar(),
  },
  {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
    date: faker.date.recent(100),
    comment: faker.lorem.paragraph(2),
    avatar: faker.image.avatar(),
  },
];

// Creamos la función "componente"
const CommentsList = () => {
  console.log("comments", comments);

  return (
    <div className="comments-list">
      <div className="ui comments">
        <h3 className="ui dividing header">Comments</h3>
        {comments.map((i) => (
          <CommentItem key={i.id} comment={i} />
        ))}
      </div>
    </div>
  );
};

// exportamos la función componente
export default CommentsList;
