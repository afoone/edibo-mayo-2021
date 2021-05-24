// archivo de test

const suma = (a = 0, b = 0) => a + b;

test("testeo de prueba", () => {
  expect(true).toBe(true);
});

test("suma correctamente", () => {
  expect(suma(4, 5)).toBe(9);
  expect(suma(4, 1)).toBe(5);
});

test("suma correctamente el número 0", () => {
    expect(suma(0,9)).toBe(9)
    expect(suma(1, 0)).toBe(1)
} )

test("suma correctamente los negativos", () => {
    expect(suma(-1, -3)).toBe(-4)
})

test("si no le paso ningún parámetro me tiene que dar 0", ()=>{
    expect(suma()).toBe(0)
})

test ("si me falta el segundo parámetro que me devuelva el valor del primero", () => {
    expect(suma(5)).toBe(5)
    expect(suma(-5)).toBe(-5)
})


