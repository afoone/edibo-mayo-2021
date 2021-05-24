import { counterReducer, initialState } from "./reducers";

test("si le paso un estado y una acción que no conoce, quiero que me devuelva el estado sin modificar", () => {
  expect(
    counterReducer(
      { npartidas: 56 },
      {
        type: "dummy",
      }
    )
  ).toStrictEqual({ npartidas: 56 });
});

test("si no le paso nada me devuelve el estado por defecto ", () => {
  expect(counterReducer()).toStrictEqual(initialState);
});

test("si no le paso nada y le paso una acción vacía me devuelve el estado por defecto", () => {
  expect(counterReducer(undefined, {})).toStrictEqual(initialState);
});

test ("si le paso una partida real  quiero que el estado se incremente en 1" , () => {
    expect(counterReducer(
        {
            npartidas: 27
        }, {
            type: "partidaTerminada",
            payload: {
                clicks: 78
            }
        }
    )).toStrictEqual (
        {
            npartidas: 28
        }
    )

    expect(counterReducer(
        {
            npartidas: 27
        }, {
            type: "partidaTerminada",
            payload: {}
        }
    )).toStrictEqual (
        {
            npartidas: 28
        }
    )

    expect(counterReducer(
        {
            npartidas: 0
        }, {
            type: "partidaTerminada"
        }
    )).toStrictEqual (
        {
            npartidas: 1
        }
    )
})

test("cuando me suma una partida nueva no me tiene que eliminar el resto de propiedades del estado" ,
    () => {
        expect(
            counterReducer(
                {
                    npartidas: 50,
                    otracosa: "hola"
                },
                {
                    type: "partidaTerminada"
                }
            )
        ).toStrictEqual(
            {
                npartidas: 51,
                otracosa: "hola"
            }
        )
    }
)
