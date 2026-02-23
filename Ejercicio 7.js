// 7. Contar cuántas veces aparece cada elemento
function contarPalabras(palabras) {
  return palabras.reduce((conteo, palabra) => {
    conteo[palabra] = (conteo[palabra] || 0) + 1;
    return conteo;
  }, {});
}

const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 'gracias'];

console.log('\n--cntar palabras ---');
console.log(contarPalabras(palabras));
// { hola: 3, adiós: 1, gracias: 2 }
