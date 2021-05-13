// Importar la librería de React
import React from "react";
import "./Title.css";

// Función del componente

const Title = (props) => {
  console.log("texto", props.text);
  const texto = props.text.toUpperCase();

  // (dentro de la función) Devolver (return) un jsx (return)
  return (
    <div className="title">
      <h1 id="cabecera">{texto}</h1>
    </div>
  );
};

// Exportar el componente
export default Title;
