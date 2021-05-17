// Importar React
import React from "react";

// Creamos una clase (que va a ser el componente)
class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor")
    this.state = {
      count: 0,
    };
  }

  sumaUno = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  restaUno = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  // Dentro de la clase tenemos el método render() -> el que pinta las cosas en pantalla
  render() {
    console.log("render")
    return (
      <div className="counter">
        <h3>Counter:</h3>
        <div>{this.state.count}</div>
        <button onClick={() => this.sumaUno()}>+</button>
        <button onClick={() => this.restaUno()}>-</button>
      </div>
    );
  }
}

// exportar la clase
export default Counter;
