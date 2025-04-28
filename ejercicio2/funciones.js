//TDD metodología de desarrollo guiado por pruebas de software en la que primero se escriben las pruebas automatizadas (tests) y luego el código necesario para que esas pruebas pasen.
module.exports = {promediar, promediarMuchosNumeros}

// function promediar(a,b){
//     return (a+b)/2
// }
//corrección de la función para que tenga en cuenta 2 o 3 numeros

function promediar(a,b,c){
    if(!c) {
        return (a+b)/2
    } else {
        return (a+b+c)/3
    }    
}
function promediarMuchosNumeros(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma / numeros.length;
  }


