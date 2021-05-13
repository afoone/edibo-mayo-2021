import React from "react";
// Importar el compoonente Title
import Title from "./components/Title";
import './App.css'

const App = () => {
  const listaAmigos = [
    {
      name: "Luís",
      age: 32,
    },
    {
      name: "Susana",
      age: 27,
    },
    {
      name: "Laura",
      age: 27,
    },
  ];

  return (
    <div className="app">
      {/* Usar el componente title */}
      <Title text={"Lista de amigos"} />

      <div className="friends-list">
        <ol type="i">
          {listaAmigos.map((i) => (
            <li>{i.name}</li>
          ))}
        </ol>
      </div>
      <button className="ui primary button">Follow</button>
    </div>
  );
};

export default App;
