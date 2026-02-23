// 10. Verificar si todos los elementos cumplen una condición
function verificarMayoresDeEdad(edades) {
  return edades.every((edad) => edad >= 18);
}

const edades = [19, 25, 32, 17];

console.log('\n--mayores de edad ---');
console.log(verificarMayoresDeEdad(edades)); // false
