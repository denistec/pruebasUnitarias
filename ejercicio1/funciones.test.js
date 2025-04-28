const {sumar, promediar} = require("./funciones.js")

test("suma de dos numeros", () => { //suite de prueba=conjunto de casos de prueba
    expect(sumar(2, 3)).toBe(4);
});

test("sacar promedio de dos numeros", () => {
    expect(promediar(2, 3)).toBe(2.5);
});