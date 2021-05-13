import React from "react";
// Importar el compoonente Title
import Title from './components/Title'

const App =  () => {

  return (
    <div className="app">
     {/* Usar el componente title */}
     <Title></Title>
      <ul>
        <li>cosa 1</li>
        <li>cosa 2</li>
      </ul>
    </div>
  );
}

export default App;
