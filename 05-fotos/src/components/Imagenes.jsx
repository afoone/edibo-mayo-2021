import React, { Component } from "react";
import axios from "axios";

export class Imagenes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenes: [],
      consulta: "",
    };
  }

  buscar(busqueda) {
    if (!busqueda) return;
    axios
      .get(
        "https://api.unsplash.com/search/photos/?client_id=N4IxmojIOcsRn0NMD39tJwNIYJBhFDLUWJWO_1wpssU&query=" +
          busqueda
      )
      .then((res) =>
        this.setState({
          imagenes: res.data.results,
        })
      );
  }

  componentDidMount() {
    this.buscar();
  }

  render() {
    return (
      <div>
        <h3>Imágenes</h3>
        <div>
          <input
            type="text"
            value={this.state.consulta}
            onChange={(e) =>
              this.setState({
                consulta: e.target.value,
              })
            }
          ></input>
          <button onClick={() => this.buscar(this.state.consulta)}>
            Buscar
          </button>
          {(this.state.consulta || this.state.imagenes.length > 0) && (
            <button
              onClick={() => {
                this.setState({ consulta: "", imagenes: [] });
              }}
            >
              Reset
            </button>
          )}
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
