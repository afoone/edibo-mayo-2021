// Un reducer es una función pura que recibe el estado de redux (store) y una acción
// El reducer (la función) devuelve el nuevo estado después de ejecutar la acción

// la acción es un objeto javascript que tiene dos propiedades:
//  - el tipo, que es la propiedad type - Es el nombre de la acción que se ejecuta
//  - el payload, que es una propiedad que puede tener cualquier nombre, en nuestro caso la llamaremos payload.
//    contiene datos necesarios para ejecutar la acción.

// es práctica habitual inicializar el estado en el reducer

import { PARTIDA_TERMINADA_ACTION } from "./actions";

export const initialState = {
  npartidas: 0,
};

export const counterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PARTIDA_TERMINADA_ACTION:
      return {
        ...state,
        npartidas: state.npartidas + 1,
      };
    default:
      return state;
  }
};

export const recordInitialState = {};

export const recordReducer = (state = recordInitialState, action = {}) => {
  switch (action.type) {
    case PARTIDA_TERMINADA_ACTION:
      return {
        ...state,
        highScore:
          !action.payload.nclicks || action.payload.nclicks > state.highScore
            ? state.highScore
            : action.payload.nclicks,
      };

    default:
      return state;
  }
};
