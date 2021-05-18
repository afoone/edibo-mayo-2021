// Importamos la librería de React
import React from "react";
import CommentItem from "./CommentItem";
import faker from "faker";
import axios from "axios";

// Creamos la función "componente"
class CommentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) =>
        this.setState({
          comments: res.data,
        })
      )
      .catch((err) => console.error(err));
  }

  // Render devuelve el jsx
  render() {
    return (
      <div className="comments-list">
        <div className="ui comments">
          <h3 className="ui dividing header">Comments</h3>
          {this.state.comments.map((i) => (
            <CommentItem key={i.id} comment={i} />
          ))}
        </div>
      </div>
    );
  }
}

// exportamos la función componente
export default CommentsList;
