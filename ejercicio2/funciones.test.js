
const { promediar, promediarMuchosNumeros } = require("./funciones.js");

test("promedio entre dos números", () =>{
    expect(promediar(28,32)).toBe(30)
})
test("promedio entre tres numeros", ()=>{
    expect(promediar(3,2,5)).toBe(3.3333333333333335)
})
test("promediar muchos numeros", ()=>{
    expect(promediarMuchosNumeros([2,4,3,3])).toBe(3)
})