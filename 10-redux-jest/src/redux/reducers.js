// Un reducer es una función pura que recibe el estado de redux (store) y una acción
// El reducer (la función) devuelve el nuevo estado después de ejecutar la acción

// la acción es un objeto javascript que tiene dos propiedades:
//  - el tipo, que es la propiedad type - Es el nombre de la acción que se ejecuta
//  - el payload, que es una propiedad que puede tener cualquier nombre, en nuestro caso la llamaremos payload.
//    contiene datos necesarios para ejecutar la acción.

// es práctica habitual inicializar el estado en el reducer

export const counterReducer = (
  state = {
    npartidas: 0,
  },
  action
) => {

 switch (action.type) {
     case "partidaTerminada":
         // Sumar uno a la propiedad npartidas de mi store
         break;
 
     default:
         return state
 }
};
