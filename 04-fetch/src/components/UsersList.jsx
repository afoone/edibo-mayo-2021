import React from "react";
import axios from "axios";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      usuarios: [],
    };
  }

  componentDidMount() {
    console.log("component did mount");
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then(
        // esto se hace cuando se ha ejecutado correctamente
        (res) => {
          this.setState({
            usuarios: res.data,
          });
        }
      )
      .catch(
        // esto se hace cuando se ha ejecutado con error
        (err) => {
          console.error(err);
        }
      );
    console.log("después del axios");
  }

  eliminarElemento = (id) => {
    console.log("usuarios", this.state.usuarios);
    this.setState({
      usuarios: this.state.usuarios.filter((elemento) => elemento.id !== id),
    });
  };

  render() {
    console.log("render");
    return (
      <div className="users-list">
        <h3>Usuarios</h3>

        <table class="ui celled table unstackable">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>E-mail</th>
              <th>Teléfono</th>
              <th>Empresa</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.usuarios.map(
                usuario => <tr>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.phone}</td>
                <td>{usuario.company.name}</td>
                <td>
                  <button onClick={()=>this.eliminarElemento(usuario.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
              )
            }
 
          </tbody>
        </table>

        {/* <ol>
          {this.state.usuarios.map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button onClick={
                  () => this.eliminarElemento(item.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ol> */}
      </div>
    );
  }
}

export default UsersList;
