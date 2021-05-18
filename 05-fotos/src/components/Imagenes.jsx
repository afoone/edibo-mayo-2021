import React, { Component } from "react";
import axios from "axios";

export class Imagenes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenes: [],
      consulta: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.unsplash.com/search/photos/?client_id=N4IxmojIOcsRn0NMD39tJwNIYJBhFDLUWJWO_1wpssU&query=beach"
      )
      .then((res) =>
        this.setState({
          imagenes: res.data.results,
        })
      );
  }

  render() {
    return (
      <div>
        <h3>Imágenes</h3>
        <div>
            <input type="text" value={this.state.consulta} onChange={
                e => this.setState({
                    consulta: e.target.value
                })
            }></input>
            <button>Buscar</button>
        </div>
        <div
          style={{
            margin: "1rem",
            display: "grid",
            gridTemplateColumns: "auto auto auto auto auto auto ",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          {this.state.imagenes.map((imagen) => {
            console.log(imagen.width, imagen.height);
            const apaisada = imagen.width > imagen.height;
            console.log(apaisada);
            const imgStyle = {
              height: "10rem",
              gridColumnEnd: apaisada ? "span 2" : null,
              width: "100%",
            };
            return <img src={imagen.urls.thumb} style={imgStyle} />;
          })}
        </div>
      </div>
    );
  }
}

export default Imagenes;
