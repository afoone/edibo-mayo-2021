import { recordReducer } from "./reducers";
import { terminarPartida } from "./actions";

test("si no hay accion o está vacía, devolvemos el mismo estado", () => {
  expect(
    recordReducer({
      highScore: 90,
    })
  ).toStrictEqual({
    highScore: 90,
  });

  expect(
    recordReducer(
      {
        highScore: 90,
      },
      {}
    )
  ).toStrictEqual({
    highScore: 90,
  });
});

test("si nuestro record es superior se queda con el que tenía", () => {
  expect(
    recordReducer(
      {
        highScore: 60,
      },
      terminarPartida(79)
    )
  ).toStrictEqual({
    highScore: 60,
  });

  expect(
    recordReducer(
      {
        highScore: 60,
      },
      terminarPartida(60)
    )
  ).toStrictEqual({
    highScore: 60,
  });
});

test("si nuestro record es inferior se queda con el nuevo", () => {
  expect(
    recordReducer(
      {
        highScore: 60,
      },
      terminarPartida(30)
    )
  ).toStrictEqual({
    highScore: 30,
  });

  expect(
    recordReducer(
      {
        highScore: 60,
      },
      terminarPartida(60)
    )
  ).toStrictEqual({
    highScore: 60,
  });
});

test("si no tiene record previo, se queda con el que le demos", () => {
  expect(recordReducer({}, terminarPartida(30))).toStrictEqual({
    highScore: 30,
  });

  expect(recordReducer({}, terminarPartida(60))).toStrictEqual({
    highScore: 60,
  });
});

test("si no le paso record, se queda con el que tenía", () => {
  expect(
    recordReducer(
      {
        highScore: 60,
      },
      terminarPartida()
    )
  ).toStrictEqual({
    highScore: 60,
  });

  expect(
    recordReducer(
      {
        highScore: 45,
      },
      terminarPartida()
    )
  ).toStrictEqual({
    highScore: 45,
  });
});
